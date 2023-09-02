import { Button, Select } from 'components/UI';
import './Table.css';

export interface TableColumn<T> {
  label: string;
  field: keyof T;
}

export interface TableOptions<T> {
  isLoading: boolean;
  columns: TableColumn<T>[];
  data: T[];
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  onPageChange: (page: number) => Promise<void>;
  onRowsPerPageChange: (rowsPerPage: number) => Promise<void>;
}

export class Table<T> {
  private element: HTMLElement;
  private columns: TableColumn<T>[];
  options: TableOptions<T>;

  constructor(options: TableOptions<T>) {
    this.element = document.createElement('div');
    this.element.classList.add('table-container');
    this.columns = options.columns;
    this.options = options;
    this.renderHeader();
    this.renderPagination();
    this.renderData();
  }

  private renderHeader() {
    const headerRow = document.createElement('div');
    headerRow.classList.add('table-header-row');

    const dataHeaderRowFragment = document.createDocumentFragment();

    this.columns.forEach((column) => {
      const headerCell = document.createElement('div');
      headerCell.classList.add('table-header-cell');
      headerCell.textContent = column.label;
      dataHeaderRowFragment.appendChild(headerCell);
    });

    headerRow.appendChild(dataHeaderRowFragment);
    this.element.appendChild(headerRow);
  }

  private renderData() {
    const previousDataContainer = this.element.querySelector(
      '.table-data-container'
    );
    if (previousDataContainer) {
      previousDataContainer.remove();
    }

    const dataContainer = document.createElement('div');
    dataContainer.classList.add('table-data-container');

    const { data, columns } = this.options;

    const dataContainerFragment = document.createDocumentFragment();
    
    data.forEach((item) => {
      const dataRow = document.createElement('div');
      dataRow.classList.add('table-data-row');

      const dataRowFragment = document.createDocumentFragment();

      columns.forEach((column) => {
        const dataCell = document.createElement('div');
        dataCell.classList.add('table-data-cell');

        const field = item[column.field];

        if (field instanceof HTMLElement) {
          dataCell.appendChild(field);
        } else {
          dataCell.textContent = String(field);
        }

        dataRowFragment.appendChild(dataCell);
      });

      dataRow.appendChild(dataRowFragment);
      dataContainerFragment.appendChild(dataRow);
    });
    
    dataContainer.appendChild(dataContainerFragment);
    
    this.element.appendChild(dataContainer);
  }

  private renderPagination() {
    const previousPaginationContainer = this.element.querySelector(
      '.table-pagination-container'
    );
    if (previousPaginationContainer) {
      previousPaginationContainer.remove();
    }

    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('table-pagination-container');

    const paginationButtonsContainer = document.createElement('div');
    paginationButtonsContainer.classList.add(
      'table-pagination-buttons-container'
    );

    const paginationInfoContainer = document.createElement('div');
    paginationInfoContainer.classList.add('table-pagination-info-container');
    paginationInfoContainer.innerHTML = `<span>${this.options.currentPage}/${this.options.totalPages}</span>`;

    const prevButton = new Button('Предыдущая', {
      id: 'prevButton',
      onClick: async (_, buttonElement) => {
        buttonElement.setDisabled(true);
        await this.prevPage();
        buttonElement.setDisabled(false);
      },
    });
    const nextButton = new Button('Следующая', {
      id: 'nextButton',
      onClick: async (_, buttonElement) => {
        buttonElement.setDisabled(true);
        await this.nextPage();
        buttonElement.setDisabled(false);
      },
    });

    if (this.options.currentPage === 1) {
      prevButton.setDisabled(true);
    }

    if (this.options.currentPage === this.options.totalPages) {
      nextButton.setDisabled(true);
    }

    const rowsPerPageSelect = new Select(['10', '20', '30'], {
      className: 'sm',
      value: String(this.options.rowsPerPage),
      onSelect: (selectedValue) => {
        this.setRowsPerPage(parseInt(selectedValue, 10));
      },
    });

    const isLoading = this.options.isLoading;
    if (isLoading) {
      const loader = document.createElement('div');
      loader.classList.add('loader');
      paginationContainer.appendChild(loader);
    } else {
      prevButton.render(paginationButtonsContainer);
      nextButton.render(paginationButtonsContainer);
      paginationContainer.appendChild(paginationInfoContainer);
      rowsPerPageSelect.render(paginationContainer);
      paginationContainer.appendChild(paginationButtonsContainer);
    }

    this.element.appendChild(paginationContainer);
  }

  render(targetElement: HTMLElement) {
    targetElement.appendChild(this.element);
  }

  getElement() {
    return this.element;
  }

  async nextPage() {
    const { currentPage, totalPages, onPageChange } = this.options;
    if (currentPage < totalPages) {
      await onPageChange(currentPage + 1);
    }
  }

  async prevPage() {
    const { currentPage, onPageChange } = this.options;
    if (currentPage > 1) {
      await onPageChange(currentPage - 1);
    }
  }

  setRowsPerPage(rowsPerPage: number) {
    const { onRowsPerPageChange } = this.options;
    onRowsPerPageChange(rowsPerPage);
  }

  updateData(data: T[]) {
    this.options.data = data;
    this.options.isLoading = false;

    const loader = this.element.querySelector('.loader');
    if (loader) {
      loader.remove();
    }

    this.renderData();
    this.renderPagination();
  }
}
