"use strict";
var SRP;
(function (SRP) {
    class EmailService {
        sendEmail(email) {
            console.log(`Email sent To: ${email}`);
        }
    }
    class UserService {
        constructor(userName, email, emailService) {
            this.userName = userName;
            this.email = email;
            this.emailService = emailService;
        }
        createUser() {
            console.log(`New User created with Name: ${this.userName} and Email ${this.email}`);
            this.emailService.sendEmail(this.email);
        }
    }
    const emailService = new EmailService();
    const userService = new UserService("ag", "ag@gmail.com", emailService);
    userService.createUser();
})(SRP || (SRP = {}));
