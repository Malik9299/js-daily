var NonIS;
(function (NonIS) {
    var Teacher = /** @class */ (function () {
        function Teacher() {
        }
        Teacher.prototype.teaching = function () {
            console.log("Teacher is teaching");
        };
        Teacher.prototype.studying = function () {
            console.log("Nothing about student");
        };
        return Teacher;
    }());
    NonIS.Teacher = Teacher;
    var Student = /** @class */ (function () {
        function Student() {
        }
        Student.prototype.teaching = function () {
            console.log("Nothing about teacher");
        };
        Student.prototype.studying = function () {
            console.log("Student is studying");
        };
        return Student;
    }());
    NonIS.Student = Student;
})(NonIS || (NonIS = {}));
var teacher = new NonIS.Teacher();
teacher.teaching();
var student = new NonIS.Student();
student.studying();
var IS;
(function (IS) {
    var Teacher = /** @class */ (function () {
        function Teacher() {
        }
        Teacher.prototype.teaching = function () {
            console.log("Teacher is teaching");
        };
        return Teacher;
    }());
    IS.Teacher = Teacher;
    var Student = /** @class */ (function () {
        function Student() {
        }
        Student.prototype.studying = function () {
            console.log("Student is studying");
        };
        return Student;
    }());
    IS.Student = Student;
    var Admin = /** @class */ (function () {
        function Admin() {
        }
        Admin.prototype.manage = function () {
            console.log("Practice: A class can implement multiple interfaces (multiple inheritance) ");
            console.log("Admin is watching");
        };
        Admin.prototype.teaching = function () {
            console.log("Teacher is teaching");
        };
        Admin.prototype.studying = function () {
            console.log("Student is studying");
        };
        return Admin;
    }());
    IS.Admin = Admin;
})(IS || (IS = {}));
console.log("=============================");
var teacher1 = new IS.Teacher();
teacher1.teaching();
var student1 = new IS.Student();
student1.studying();
var admin1 = new IS.Admin();
admin1.manage();
admin1.teaching();
admin1.studying();
