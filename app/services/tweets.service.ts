import { Tweet } from '../business/tweet';

export class TweetsService {
    getTweets() {
        return [
            new Tweet("http://lorempixel.com/100/100/people?1",
                "WindWard",
                23,
                true),
            new Tweet("http://lorempixel.com/100/100/people?2",
                "AngularJS News",
                156,
                false),
            new Tweet("http://lorempixel.com/100/100/people?3",
                "UX & Bootsrap",
                4,
                true)
        ];
    }
}