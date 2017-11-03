System.register(['../business/tweet'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tweet_1;
    var TweetsService;
    return {
        setters:[
            function (tweet_1_1) {
                tweet_1 = tweet_1_1;
            }],
        execute: function() {
            TweetsService = (function () {
                function TweetsService() {
                }
                TweetsService.prototype.getTweets = function () {
                    return [
                        new tweet_1.Tweet("http://lorempixel.com/100/100/people?1", "WindWard", 23, true),
                        new tweet_1.Tweet("http://lorempixel.com/100/100/people?2", "AngularJS News", 156, false),
                        new tweet_1.Tweet("http://lorempixel.com/100/100/people?3", "UX & Bootsrap", 4, true)
                    ];
                };
                return TweetsService;
            }());
            exports_1("TweetsService", TweetsService);
        }
    }
});
//# sourceMappingURL=tweets.service.js.map