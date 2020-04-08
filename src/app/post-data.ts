export class PostData {
    src: string;
    header: string;
    summary: string;
    rating: number;
    bookmarked: boolean;

    constructor(src:string,header: string, summary: string, rating: number, bookmarked:boolean){
        this.src = src;
        this.header = header;
        this.summary = summary;
        this.rating = rating;
        this.bookmarked = bookmarked;
    }
}
