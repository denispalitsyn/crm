import './Input.css';

export class Input {
  private element: HTMLInputElement;

  constructor(placeholder?: string) {
    this.element = document.createElement('input');
    this.element.classList.add('input');
    this.element.type = 'text';
    this.element.placeholder = placeholder ?? '';
  }

  render(targetElement: HTMLElement) {
    targetElement.appendChild(this.element);
  }
}
