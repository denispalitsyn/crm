import { StudentService } from 'services';
import { Student } from 'types/student';
import { Table } from 'components/UI';

export class StudentTable {
  private studentService: StudentService;
  private table: Table<Student>;

  constructor() {
    this.studentService = new StudentService();
    this.table = new Table<Student>({
      isLoading: true,
      columns: [
        { label: 'ID', field: 'id' },
        { label: 'Имя', field: 'firstName' },
        { label: 'Фамилия', field: 'lastName' },
        { label: 'Дата рождения', field: 'dateOfBirth' },
        { label: 'Класс', field: 'class' },
      ],
      data: [],
      currentPage: 1,
      totalPages: 1,
      rowsPerPage: 10,
      onPageChange: this.loadStudents.bind(this),
      onRowsPerPageChange: async (rowsPerPage: number) => {
        this.table.options.rowsPerPage = rowsPerPage;
        await this.loadStudents(1);
      },
    });

    this.loadStudents(1);
  }

  async loadStudents(page: number) {
    const students: Student[] = await this.studentService.getStudentsByPage(
      page,
      this.table.options.rowsPerPage
    );

    this.table.options.currentPage = page;

    this.table.options.totalPages = Math.ceil(
      (await this.studentService.getTotalStudentsCount()) /
        this.table.options.rowsPerPage
    );

    this.table.updateData(students);
  }

  render(targetElement: HTMLElement) {
    targetElement.appendChild(this.table.getElement());
  }
}
