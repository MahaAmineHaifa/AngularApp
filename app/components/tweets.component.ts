import { Component } from 'angular2/core'
import { TweetsService } from '../services/tweets.service';
import { LikeComponent } from './like.component';
import { ZippyComponent } from './zippy.component';
import { Tweet } from '../business/tweet'

@Component({
    selector: 'tweets',
    templateUrl: 'app/templates/tweets.template.html',
    providers: [TweetsService],
    directives: [LikeComponent, ZippyComponent]
})
export class TweetsComponent {
    tweets: Tweet[];

    constructor(tweetsService: TweetsService) {
        this.tweets = tweetsService.getTweets();
        console.log(this.tweets);
    }

    onLikeClick(event) {
        console.log(event);
    }
}