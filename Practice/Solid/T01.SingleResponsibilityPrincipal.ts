namespace SRP12 {
  class EmailService {
    public sendEmail() {
      console.log("Emaiul sent");
    }
  }
  class UserService {
    private userName: string;
    private userEmail: string;
    private emailService: EmailService;
    constructor(name: string, email: string, emailService: EmailService) {
      this.userName = name;
      this.userEmail = email;
      this.emailService = emailService;
    }
    public createUser() {
      console.log(
        `User created with Name:${this.userName} and Email: ${this.userEmail}`
      );
      this.emailService.sendEmail();
    }
  }

  const emailService = new EmailService();
  const userService = new UserService("Malik", "ag@gmail.com", emailService);
  userService.createUser();
}
