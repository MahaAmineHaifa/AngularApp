import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'vote',
    templateUrl: 'app/templates/vote.template.html',
    styles: [`
        .voter {
            font-size: 30px;
        }
        .highlighted {
            color: orange;
        }
        .arrowEnabled {
            cursor: pointer;
        }
        `]
})
export class VoteComponent {

    @Input() voteCount;
    @Input() myVote;

    upClick() {
        if (this.myVote !== 1) {
            this.myVote++;
            this.voteCount++;
        }
    }

    downClick() {
        if (this.myVote !== -1) {
            this.myVote--;
            this.voteCount--;
        }
    }
}