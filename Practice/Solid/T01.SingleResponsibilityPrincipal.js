var SRP12;
(function (SRP12) {
    var EmailService = /** @class */ (function () {
        function EmailService() {
        }
        EmailService.prototype.sendEmail = function () {
            console.log("Emaiul sent");
        };
        return EmailService;
    }());
    var UserService = /** @class */ (function () {
        function UserService(name, email, emailService) {
            this.userName = name;
            this.userEmail = email;
            this.emailService = emailService;
        }
        UserService.prototype.createUser = function () {
            console.log("User created with Name:".concat(this.userName, " and Email: ").concat(this.userEmail));
            this.emailService.sendEmail();
        };
        return UserService;
    }());
    var emailService = new EmailService();
    var userService = new UserService("Malik", "ag@gmail.com", emailService);
    userService.createUser();
})(SRP12 || (SRP12 = {}));
