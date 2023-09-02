import './Select.css';

interface SelectExtraProps {
  className?: string;
  value?: string;
  onSelect?: (option: string) => void;
}

export class Select {
  private element: HTMLDivElement;
  private selectContainer: HTMLDivElement;
  private optionsContainer: HTMLDivElement;
  private arrowElement: HTMLDivElement;
  private selectedOption: HTMLDivElement;
  private isOpen: boolean = false;

  constructor(
    options: string[],
    { value, className, onSelect }: SelectExtraProps
  ) {
    this.element = document.createElement('div');
    this.element.classList.add('custom-select');

    if (className) {
      this.element.classList.add(className);
    }

    this.selectContainer = document.createElement('div');
    this.selectContainer.classList.add('select-container');
    this.selectContainer.addEventListener('click', () => {
      this.toggleDropdown();
    });

    this.arrowElement = document.createElement('div');
    this.arrowElement.classList.add('arrow');
    this.arrowElement.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
        <path d="M8 10.293l-4.646-4.647a1 1 0 0 1 1.414-1.414L8 7.586l3.232-3.233a1 1 0 1 1 1.414 1.414L8 10.293z"/>
      </svg>
    `;

    this.selectedOption = document.createElement('div');
    this.selectedOption.classList.add('selected-option');
    this.selectedOption.textContent = value || options[0];

    this.optionsContainer = document.createElement('div');
    this.optionsContainer.classList.add('options-container');
    this.optionsContainer.style.display = 'none';

    options.forEach((optionText) => {
      const option = document.createElement('div');
      option.classList.add('option');
      option.textContent = optionText;
      option.addEventListener('click', () => {
        this.selectOption(optionText);

        if (onSelect) {
          onSelect(optionText);
        }
      });
      this.optionsContainer.appendChild(option);
    });

    this.selectContainer.appendChild(this.selectedOption);
    this.selectContainer.appendChild(this.arrowElement);
    this.element.appendChild(this.selectContainer);
    this.element.appendChild(this.optionsContainer);
  }

  private toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.optionsContainer.style.display = this.isOpen ? 'block' : 'none';
    this.arrowElement.style.transform = this.isOpen ? 'rotate(180deg)' : ''; // Поворачиваем стрелку
  }

  private selectOption(optionText: string) {
    this.selectedOption.textContent = optionText;
    this.toggleDropdown();
  }

  render(targetElement: HTMLElement) {
    targetElement.appendChild(this.element);
  }
}
