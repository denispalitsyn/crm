import './Checkbox.css';

export class Checkbox {
  private element: HTMLLabelElement;
  private checkboxElement: HTMLInputElement;
  private checkmarkElement: HTMLSpanElement;

  constructor(labelText: string) {
    this.element = document.createElement('label');
    this.element.classList.add('custom-checkbox');

    this.checkboxElement = document.createElement('input');
    this.checkboxElement.type = 'checkbox';
    this.checkboxElement.classList.add('checkbox-input');

    this.checkmarkElement = document.createElement('span');
    this.checkmarkElement.classList.add('checkmark');

    const labelSpan = document.createElement('span');
    labelSpan.textContent = labelText;

    this.element.appendChild(this.checkboxElement);
    this.element.appendChild(this.checkmarkElement);
    this.element.appendChild(labelSpan);
  }

  isChecked(): boolean {
    return this.checkboxElement.checked;
  }

  setChecked(checked: boolean): void {
    this.checkboxElement.checked = checked;
  }

  render(targetElement: HTMLElement) {
    targetElement.appendChild(this.element);
  }
}
