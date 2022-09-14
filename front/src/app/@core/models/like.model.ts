export class Like {
    public id: number;
    public PostId: number;
    public UserId: number;
    public createdAt: string
    public updatedAt: string;
    public likeStatus: boolean;
      
    public constructor(data: Partial<Like> = {}) {
        Object.assign(this, data);
    } 
  }