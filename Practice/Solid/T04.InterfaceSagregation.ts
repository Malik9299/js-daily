namespace NonIS {
  interface User {
    teaching(): void;
    studying(): void;
  }
  export class Teacher implements User {
    teaching(): void {
      console.log("Teacher is teaching");
    }
    studying(): void {
      console.log("Nothing about student");
    }
  }
  export class Student implements User {
    teaching(): void {
      console.log("Nothing about teacher");
    }
    studying(): void {
      console.log("Student is studying");
    }
  }
}

const teacher = new NonIS.Teacher();
teacher.teaching();

const student = new NonIS.Student();
student.studying();

namespace IS {
  interface Teach {
    teaching(): void;
  }
  interface Study {
    studying(): void;
  }
  export class Teacher implements Teach {
    teaching(): void {
      console.log("Teacher is teaching");
    }
  }
  export class Student implements Study {
    studying(): void {
      console.log("Student is studying");
    }
  }
}

console.log("=============================");

const teacher1 = new IS.Teacher();
teacher1.teaching();

const student1 = new IS.Student();
student1.studying();
