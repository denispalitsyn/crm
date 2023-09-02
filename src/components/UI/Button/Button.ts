import './Button.css';

class Button {
  private element: HTMLButtonElement;

  constructor(text: string) {
    this.element = document.createElement('button');
    this.element.classList.add('button');
    this.element.textContent = text;
  }

  setDisabled(disabled: boolean): void {
    this.element.disabled = disabled;
  }

  render(targetElement: HTMLElement) {
    targetElement.appendChild(this.element);
  }
}

export default Button;
