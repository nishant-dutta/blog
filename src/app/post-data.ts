export class PostData {
    postId: number;
    src: string;        // Contains src of card image
    header: string;
    summary: string;
    content;
    rating: number;
    bookmarked: boolean;
    postedOn: Date;
    likes: number;
    comments: number;
    author:{
        name: string,
        id: number
    }

    constructor(src:string,header: string, summary: string, rating: number, bookmarked:boolean){
        this.src = src;
        this.header = header;
        this.summary = summary;
        this.rating = rating;
        this.bookmarked = bookmarked;
    }
}
