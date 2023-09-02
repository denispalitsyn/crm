import './RadioButtonGroup.css';

interface RadioButtonGroupProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onSelectionChange: (value: string) => void;
}

export class RadioButtonGroup {
  private radioButtonGroupElement: HTMLDivElement;

  constructor(props: RadioButtonGroupProps) {
    this.radioButtonGroupElement = document.createElement('div');
    this.radioButtonGroupElement.classList.add('radio-button-group');

    const labelElement = document.createElement('label');
    labelElement.textContent = props.label;

    this.radioButtonGroupElement.appendChild(labelElement);

    props.options.forEach((option) => {
      const radioButton = document.createElement('label');
      radioButton.classList.add('radio-button');

      const inputElement = document.createElement('input');
      inputElement.type = 'radio';
      inputElement.name = props.name;
      inputElement.value = option.value;

      if (option.value === props.selectedValue) {
        inputElement.checked = true;
      }

      inputElement.addEventListener('change', () => {
        props.onSelectionChange(option.value);
      });

      const labelTextElement = document.createElement('span');
      labelTextElement.textContent = option.label;

      radioButton.appendChild(inputElement);
      radioButton.appendChild(labelTextElement);

      this.radioButtonGroupElement.appendChild(radioButton);
    });
  }

  render(targetElement: HTMLElement) {
    targetElement.appendChild(this.radioButtonGroupElement);
  }
}
