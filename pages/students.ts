import 'src/style.css';

import { StudentPage } from 'views';

const studentPage = new StudentPage();

const appContainer = document.getElementById('app');

if (appContainer) {
  studentPage.render(appContainer);
}
