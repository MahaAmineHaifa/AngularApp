
export class Course {

    constructor(private title: String,
        private isFavourite: boolean,
        private isLiked: boolean,
        private likesNumber: Number,
        private myVote: Number,
        private voteCount: Number) {

    }

    getTitle() {
        return this.title;
    }

    getIsFavourite() {
        return this.isFavourite;
    }

    getIsLiked() {
        return this.isLiked;
    }

    getLikesNumber() {
        return this.likesNumber;
    }

    getMyVote() {
        return this.myVote;
    }

    getVoteCount() {
        return this.voteCount;
    }
}