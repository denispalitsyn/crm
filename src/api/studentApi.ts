import {
  SupabaseClient,
  PostgrestSingleResponse,
  PostgrestResponse,
} from '@supabase/supabase-js';
import { supabase } from 'supabaseClient';
import { Student } from 'types/student';

export class StudentApi {
  private database: SupabaseClient;

  constructor() {
    this.database = supabase;
  }

  async getStudents(): Promise<Student[]> {
    const { data, error }: PostgrestResponse<Student> = await this.database
      .from('students')
      .select('*');

    if (error) {
      throw error;
    }

    return data || [];
  }

  async getStudentById(id: number): Promise<Student | null> {
    const { data, error }: PostgrestSingleResponse<Student> =
      await this.database.from('students').select('*').eq('id', id).single();

    if (error) {
      throw error;
    }

    return data || null;
  }

  async createStudent(studentData: any): Promise<Student | null> {
    const { data, error }: PostgrestResponse<Student> = await this.database
      .from('students')
      .insert([studentData])
      .select();

    if (error) {
      throw error;
    }

    return data?.[0] || null;
  }

  async updateStudent(id: number, studentData: any): Promise<Student | null> {
    const { data, error }: PostgrestResponse<Student> = await this.database
      .from('students')
      .update(studentData)
      .eq('id', id)
      .select();

    if (error) {
      throw error;
    }

    return data?.[0] || null;
  }

  async deleteStudent(id: number): Promise<void> {
    const { error } = await this.database
      .from('students')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }
  }

  async getStudentsByPage(
    page: number,
    rowsPerPage: number
  ): Promise<Student[]> {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    const { data, error }: PostgrestResponse<Student> = await this.database
      .from('students')
      .select('*')
      .range(startIndex, endIndex - 1);

    if (error) {
      throw error;
    }

    return data || [];
  }

  async getTotalStudentsCount(): Promise<number> {
    const { data, error }: PostgrestResponse<{ count: number }> =
      await this.database.from('students').select('count', { count: 'exact' });

    if (error) {
      throw error;
    }

    return data?.[0]?.count || 0;
  }
}
