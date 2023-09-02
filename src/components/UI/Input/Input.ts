import './Input.css';

class Input {
  private element: HTMLInputElement;

  constructor(placeholder: string) {
    this.element = document.createElement('input');
    this.element.classList.add('input');
    this.element.placeholder = placeholder;
    this.element.type = 'text';
  }

  render(targetElement: HTMLElement) {
    targetElement.appendChild(this.element);
  }
}

export default Input;
