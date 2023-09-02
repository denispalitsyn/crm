import './Button.css';

export class Button {
  private element: HTMLButtonElement;

  constructor(
    text: string,
    {
      id,
      onClick,
    }: { id?: string; onClick?: (event: MouseEvent, element: Button) => void }
  ) {
    this.element = document.createElement('button');
    this.element.classList.add('button');
    this.element.textContent = text;

    if (id) {
      this.element.setAttribute('id', id);
    }

    if (onClick) {
      this.element.addEventListener('click', (event) => onClick(event, this));
    }
  }

  setDisabled(disabled: boolean): void {
    this.element.disabled = disabled;
  }

  render(targetElement: HTMLElement) {
    targetElement.appendChild(this.element);
  }
}
