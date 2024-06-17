import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { Student } from '../entities/student.entity';

@Injectable()
export class StudentsService {
  private students: Student[] = [];
  private maxId: number = 0;

  onModuleInit() {
    this.students.push({
      id: ++this.maxId,
      index: 20001,
      firstName: 'Łukasz',
      lastName: 'Kąśliwy',
    });
    this.students.push({
      id: ++this.maxId,
      index: 20002,
      firstName: 'Marek',
      lastName: 'Nowak',
    });
    this.students.push({
      id: ++this.maxId,
      index: 20003,
      firstName: 'Zenon',
      lastName: 'Zawada',
    });
  }

  private findIndexIfExists(id: number): number {
    let idx = this.students.findIndex((x) => x.id == id);
    if (idx == -1) throw new NotFoundException('No such student.');
    return idx;
  }

  create(createStudentDto: CreateStudentDto) {
    this.maxId++;
    var student = new Student();
    (student.id = this.maxId),
      (student.index = createStudentDto.index),
      (student.firstName = createStudentDto.firstName),
      (student.lastName = createStudentDto.lastName);

    this.students.push(student);
    return 'Dodano nowego studenta';
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    //const result = this.students.findIndex((x) => x.id == id);
    //if (result === -1)
    //  throw new NotFoundException(
    //    'Nie znaleziono studenta o podanym identyfikatorze',
    //  );
    const studentArrIndex = this.findIndexIfExists(id);
    return this.students[studentArrIndex];
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    const studentArrIndex = this.findIndexIfExists(id);
    this.students[studentArrIndex] = {
      ...this.students[studentArrIndex],
      ...updateStudentDto,
    };
    return `Zaktualizowano studenta o identyfikatorze #${id}`;
  }

  remove(id: number) {
    const studentArrIndex = this.findIndexIfExists(id);
    this.students.splice(studentArrIndex, 1);
    return `Usunięto studenta o identyfikatorze #${id}`;
  }
}
