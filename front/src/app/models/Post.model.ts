export class Post {
  public id: string;
  public title: string;
  public author: string;
  public description: string;
  public imageUrl: string;
  public like: number; 
  public createdDate: Date;
  public usersLike: [string];
    
  public constructor(data: Partial<Post> = {}) {
      Object.assign(this, data);
  } 
}


