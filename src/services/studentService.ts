import { StudentApi } from 'api/studentApi';
import { Student } from 'types/student';

export class StudentService {
  private studentApi: StudentApi;

  constructor() {
    this.studentApi = new StudentApi();
  }

  async getAllStudents() {
    return this.studentApi.getStudents();
  }

  async getStudentById(id: number) {
    return this.studentApi.getStudentById(id);
  }

  async createStudent(studentData: Student) {
    return this.studentApi.createStudent(studentData);
  }

  async updateStudent(id: number, studentData: Student) {
    return this.studentApi.updateStudent(id, studentData);
  }

  async deleteStudent(id: number) {
    return this.studentApi.deleteStudent(id);
  }

  async getStudentsByPage(page: number, rowsPerPage: number) {
    return this.studentApi.getStudentsByPage(page, rowsPerPage);
  }

  async getTotalStudentsCount() {
    return this.studentApi.getTotalStudentsCount();
  }
}
