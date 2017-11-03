System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Tweet;
    return {
        setters:[],
        execute: function() {
            Tweet = (function () {
                function Tweet(imgURL, name, likesNumber, isLiked) {
                    this.imgURL = imgURL;
                    this.name = name;
                    this.likesNumber = likesNumber;
                    this.isLiked = isLiked;
                }
                return Tweet;
            }());
            exports_1("Tweet", Tweet);
        }
    }
});
//# sourceMappingURL=tweet.js.map