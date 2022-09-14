export class User {
    public id: number;
    public email: string;
    public password: string;
    public userName: string;
    public role: string;
    public token?: string;
      
    public constructor(data: Partial<User> = {}) {
        Object.assign(this, data);
    } 
  }
  