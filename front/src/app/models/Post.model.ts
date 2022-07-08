export class Post {
  public userId: number;
  public title: string;
  public author: string;
  public description: string;
  public imageUrl: string;
  public like: number; 
  public createdDate: Date;
    
  public constructor(data: Partial<Post> = {}) {
      Object.assign(this, data);
  } 
}


