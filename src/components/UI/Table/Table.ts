import './Table.css';

class Table {
  private element: HTMLElement;

  constructor() {
    this.element = document.createElement('section');
    this.element.classList.add('table');
    this.element.innerHTML = `
      <h2>Таблица с данными</h2>
      <div class="table-container">
        <div class="table-header">
          <div>ID</div>
          <div>Имя</div>
          <div>Фамилия</div>
          <div>Класс</div>
        </div>
        <div class="table-row">
          <div>ID</div>
          <div>Имя</div>
          <div>Фамилия</div>
          <div>Класс</div>
        </div>
        <div class="table-row">
          <div>ID</div>
          <div>Имя</div>
          <div>Фамилия</div>
          <div>Класс</div>
        </div>
      </div>
    `;
  }

  render(targetElement: HTMLElement) {
    targetElement.appendChild(this.element);
  }
}

export default Table;
