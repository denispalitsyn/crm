// import {
//   Button,
//   Chart,
//   Checkbox,
//   Header,
//   Input,
//   // Modal,
//   RadioButtonGroup,
//   Select,
//   Switch,
//   Table,
// } from 'components/UI';

// const options = ['Option 1', 'Option 2', 'Option 3'];

// const radioButtonOptions = [
//   { value: 'option1', label: 'Option 1' },
//   { value: 'option2', label: 'Option 2' },
//   { value: 'option3', label: 'Option 3' },
// ];

// const switchProps = {
//   label: 'Enable Feature',
//   checked: false,
//   onChange: (isChecked: boolean) => {
//     console.log(`Feature is ${isChecked ? 'enabled' : 'disabled'}`);
//   },
// };

// const radioButtonGroup = new RadioButtonGroup({
//   label: 'Choose an option:',
//   name: 'options',
//   options: radioButtonOptions,
//   selectedValue: 'option1',
//   onSelectionChange: (value) => {
//     console.log(`Selected value: ${value}`);
//   },
// });

// const modalContent = document.createElement('div');
// modalContent.textContent = 'Some content';

// const button = new Button('Click');
// const select = new Select(options);
// const header = new Header();
// const chart = new Chart();
// const table = new Table();
// const input = new Input();
// const checkbox = new Checkbox('Checkbox Label');
// // const modal = new Modal();
// const switchComponent = new Switch(switchProps);

// const appContainer = document.getElementById('app');

// // modal.open('Some title', modalContent);

// if (appContainer) {
//   header.render(appContainer);
//   select.render(appContainer);
//   button.render(appContainer);
//   input.render(appContainer);
//   checkbox.render(appContainer);
//   radioButtonGroup.render(appContainer);
//   switchComponent.render(appContainer);
//   chart.render(appContainer);
//   table.render(appContainer);
// }
