System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Course;
    return {
        setters:[],
        execute: function() {
            Course = (function () {
                function Course(title, isFavourite, isLiked, likesNumber, myVote, voteCount) {
                    this.title = title;
                    this.isFavourite = isFavourite;
                    this.isLiked = isLiked;
                    this.likesNumber = likesNumber;
                    this.myVote = myVote;
                    this.voteCount = voteCount;
                }
                Course.prototype.getTitle = function () {
                    return this.title;
                };
                Course.prototype.getIsFavourite = function () {
                    return this.isFavourite;
                };
                Course.prototype.getIsLiked = function () {
                    return this.isLiked;
                };
                Course.prototype.getLikesNumber = function () {
                    return this.likesNumber;
                };
                Course.prototype.getMyVote = function () {
                    return this.myVote;
                };
                Course.prototype.getVoteCount = function () {
                    return this.voteCount;
                };
                return Course;
            }());
            exports_1("Course", Course);
        }
    }
});
//# sourceMappingURL=course.js.map