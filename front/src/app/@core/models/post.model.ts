export class Post {
  public id: string;
  public title: string;
  public description: string;
  public imageUrl: string;
  public like: number; 
  public createdAt: Date;
  public userId: string;
  public User: {
    userName: string
  };
    
  public constructor(data: Partial<Post> = {}) {
      Object.assign(this, data);
  } 
}


