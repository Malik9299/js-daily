var NonDI;
(function (NonDI) {
    var Teacher = /** @class */ (function () {
        function Teacher() {
        }
        Teacher.prototype.teach = function () {
            console.log("Teacher is teaching");
        };
        return Teacher;
    }());
    NonDI.Teacher = Teacher;
    var Student = /** @class */ (function () {
        function Student() {
        }
        Student.prototype.study = function () {
            console.log("Student is studying");
        };
        return Student;
    }());
    NonDI.Student = Student;
    var Admin = /** @class */ (function () {
        function Admin() {
        }
        Admin.prototype.administrate = function () {
            console.log("Admin is administrating");
        };
        return Admin;
    }());
    NonDI.Admin = Admin;
    var SchoolMamangement = /** @class */ (function () {
        function SchoolMamangement(teacher, student, admin) {
            this.teacher = teacher;
            this.student = student;
            this.admin = admin;
        }
        SchoolMamangement.prototype.manage = function () {
            this.teacher.teach();
            this.student.study();
            this.admin.administrate();
        };
        return SchoolMamangement;
    }());
    NonDI.SchoolMamangement = SchoolMamangement;
})(NonDI || (NonDI = {}));
var teacher = new NonDI.Teacher();
var student = new NonDI.Student();
var admin = new NonDI.Admin();
var schoolManagement = new NonDI.SchoolMamangement(teacher, student, admin);
schoolManagement.manage();
var DI;
(function (DI) {
    var Teacher = /** @class */ (function () {
        function Teacher() {
        }
        Teacher.prototype.teach = function () {
            console.log("Teacher is teaching");
        };
        Teacher.prototype.performDuties = function () {
            this.teach();
        };
        return Teacher;
    }());
    DI.Teacher = Teacher;
    var Student = /** @class */ (function () {
        function Student() {
        }
        Student.prototype.study = function () {
            console.log("Student is studying");
        };
        Student.prototype.performDuties = function () {
            this.study();
        };
        return Student;
    }());
    DI.Student = Student;
    var Admin = /** @class */ (function () {
        function Admin() {
        }
        Admin.prototype.administrate = function () {
            console.log("Admin is administrating");
        };
        Admin.prototype.performDuties = function () {
            this.administrate();
        };
        return Admin;
    }());
    DI.Admin = Admin;
    var SchoolMamangement = /** @class */ (function () {
        function SchoolMamangement(user) {
            this.user = user;
        }
        SchoolMamangement.prototype.manage = function () {
            this.user.performDuties();
        };
        return SchoolMamangement;
    }());
    DI.SchoolMamangement = SchoolMamangement;
})(DI || (DI = {}));
var teacher1 = new DI.Teacher();
var teacherDuties = new DI.SchoolMamangement(teacher1);
teacherDuties.manage();
var student1 = new DI.Student();
var studentDuties = new DI.SchoolMamangement(student1);
studentDuties.manage();
var admin1 = new DI.Admin();
var adminDuties = new DI.SchoolMamangement(admin1);
adminDuties.manage();
