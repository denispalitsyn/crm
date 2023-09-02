import Button from './components/UI/Button/Button';
import Chart from './components/UI/Chart/Chart';
import Header from './components/UI/Header/Header';
import Select from './components/UI/Select/Select';
import Table from './components/UI/Table/Table';

const options = ['Option 1', 'Option 2', 'Option 3'];

const button = new Button('Click');
const select = new Select(options);
const header = new Header();
const chart = new Chart();
const table = new Table();

const appContainer = document.getElementById('app');

if (appContainer) {
  header.render(appContainer);
  select.render(appContainer);
  button.render(appContainer);
  chart.render(appContainer);
  table.render(appContainer);
}
