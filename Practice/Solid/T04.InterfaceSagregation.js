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
})(IS || (IS = {}));
console.log("=============================");
var teacher1 = new IS.Teacher();
teacher1.teaching();
var student1 = new IS.Student();
student1.studying();
