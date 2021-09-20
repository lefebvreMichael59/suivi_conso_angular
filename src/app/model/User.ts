export class User{
  public id: number;
  public name: string;
  public role: string;
  public token: string;

  constructor(username?: string, role?: string, token?: string) {
    this.name = username;
    this.role = role;
    this.token = token;
  }
}
