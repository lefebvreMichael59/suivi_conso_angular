export class UserSignUp{
  public name: string;
  public password: string;
  public firstname: string;
  public lastname: string;
  public email: string;

  constructor(name?: string, password?: string, firstname?: string, lastname?: string, email?: string) {
    this.name = name;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
}
