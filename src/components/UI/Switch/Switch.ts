import './Switch.css';

interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export class Switch {
  private switchElement: HTMLDivElement;

  constructor(props: SwitchProps) {
    this.switchElement = document.createElement('div');
    this.switchElement.classList.add('switch');

    const labelElement = document.createElement('label');
    labelElement.textContent = props.label;

    const inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    inputElement.checked = props.checked;

    inputElement.addEventListener('change', () => {
      props.onChange(inputElement.checked);
    });

    const sliderElement = document.createElement('span');
    sliderElement.classList.add('slider');

    labelElement.appendChild(inputElement);
    labelElement.appendChild(sliderElement);

    this.switchElement.appendChild(labelElement);
  }

  render(targetElement: HTMLElement) {
    targetElement.appendChild(this.switchElement);
  }
}
