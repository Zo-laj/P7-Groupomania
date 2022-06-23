export class Post {
    public imageUrl: string;
    public title: string;
    public author: string; 
    
    public constructor(data: Partial<Post> = {}) {
      Object.assign(this, data);
    } 
}

const post: Post = new Post({title: 'titre'})

