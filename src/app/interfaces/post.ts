export interface Posts {
  username: string;
  imageURL:string;
  text: string;
  likes: string[];
  comment: Comment[];
}

interface Comment {
  username: string;
  comment: string;
}
