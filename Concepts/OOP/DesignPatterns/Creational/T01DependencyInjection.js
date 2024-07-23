"use strict";
var dI;
(function (dI) {
    class EmailNotification {
        sendEmail(email) {
            console.log(`Email sent to: ${email}`);
        }
    }
    dI.EmailNotification = EmailNotification;
    class User {
        constructor(userName, email, emailNotification) {
            this.userName = userName;
            this.email = email;
            this.emailNotification = emailNotification;
        }
        createUser() {
            console.log(`User Created with name: ${this.userName} and email: ${this.email}`);
            this.emailNotification.sendEmail(this.email);
        }
    }
    dI.User = User;
})(dI || (dI = {}));
const emailNotificationDi = new dI.EmailNotification();
const userDi = new dI.User("Malik", "ag@gmail.com", emailNotificationDi);
userDi.createUser();
