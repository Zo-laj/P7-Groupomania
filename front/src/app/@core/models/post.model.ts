export class Post {
  public id: string;
  public title: string;
  public description: string;
  public imageUrl: string;
  public Likes: [];
  public numberOfLikes: number;
  public isLiked: boolean; 
  public createdAt: Date;
  public UserId: string;
  public User: {
    userName: string
  };
    
  public constructor(data: Partial<Post> = {}) {
      Object.assign(this, data);
  } 
}


