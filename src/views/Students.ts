import { StudentTable } from 'features';

export class StudentPage {
  private studentTable: StudentTable;
  private element: HTMLElement;

  constructor() {
    this.element = document.createElement('div');
    this.studentTable = new StudentTable();
  }

  async render(targetElement: HTMLElement) {
    this.studentTable.render(this.element);
    targetElement.appendChild(this.element);
  }
}
