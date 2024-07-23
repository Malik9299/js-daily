namespace dI {
  export class EmailNotification {
    public sendEmail(email: string) {
      console.log(`Email sent to: ${email}`);
    }
  }
  export class User {
    private userName: string;
    private email: string;
    private emailNotification: EmailNotification;
    constructor(
      userName: string,
      email: string,
      emailNotification: EmailNotification
    ) {
      this.userName = userName;
      this.email = email;
      this.emailNotification = emailNotification;
    }
    public createUser() {
      console.log(
        `User Created with name: ${this.userName} and email: ${this.email}`
      );
      this.emailNotification.sendEmail(this.email);
    }
  }
}

const emailNotificationDi = new dI.EmailNotification();

const userDi = new dI.User("Malik", "ag@gmail.com", emailNotificationDi);
userDi.createUser();
