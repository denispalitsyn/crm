export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  class: string;
  parents: { firstName: string; lastName: string }[];
}
