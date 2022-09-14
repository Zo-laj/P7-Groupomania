export class Post {
  public id: number;
  public title: string;
  public description: string;
  public imageUrl: string;
  public Likes: [{}];
  public isLiked: boolean; 
  public createdAt: string;
  public updatedAt: string;
  public UserId: number;
  public User: {
    userName: string
  };
    
  public constructor(data: Partial<Post> = {}) {
      Object.assign(this, data);
  } 
}


