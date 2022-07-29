export class User {
    public email: string;
    public password: string;
      
    public constructor(data: Partial<User> = {}) {
        Object.assign(this, data);
    } 
  }
  