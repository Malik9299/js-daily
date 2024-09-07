namespace NonDI {
  export class Teacher {
    public teach() {
      console.log("Teacher is teaching");
    }
  }
  export class Student {
    public study() {
      console.log("Student is studying");
    }
  }
  export class Admin {
    public administrate() {
      console.log("Admin is administrating");
    }
  }
  export class SchoolMamangement {
    private teacher: Teacher;
    private student: Student;
    private admin: Admin;
    constructor(teacher: Teacher, student: Student, admin: Admin) {
      this.teacher = teacher;
      this.student = student;
      this.admin = admin;
    }
    public manage() {
      this.teacher.teach();
      this.student.study();
      this.admin.administrate();
    }
  }
}

const teacher = new NonDI.Teacher();
const student = new NonDI.Student();
const admin = new NonDI.Admin();

const schoolManagement = new NonDI.SchoolMamangement(teacher, student, admin);
schoolManagement.manage();

namespace DI {
  interface User {
    performDuties(): void;
  }
  export class Teacher implements User {
    private teach() {
      console.log("Teacher is teaching");
    }
    public performDuties(): void {
      this.teach();
    }
  }
  export class Student implements User {
    private study() {
      console.log("Student is studying");
    }
    public performDuties(): void {
      this.study();
    }
  }
  export class Admin implements User {
    private administrate() {
      console.log("Admin is administrating");
    }
    public performDuties(): void {
      this.administrate();
    }
  }
  export class SchoolMamangement {
    private user: User;
    constructor(user: User) {
      this.user = user;
    }
    public manage() {
      this.user.performDuties();
    }
  }
}

const teacher1 = new DI.Teacher();
const teacherDuties = new DI.SchoolMamangement(teacher1);
teacherDuties.manage();

const student1 = new DI.Student();
const studentDuties = new DI.SchoolMamangement(student1);
studentDuties.manage();

const admin1 = new DI.Admin();
const adminDuties = new DI.SchoolMamangement(admin1);
adminDuties.manage();
