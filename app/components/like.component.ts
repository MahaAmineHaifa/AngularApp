import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'like',
    template: `
        <i class="glyphicon glyphicon-heart heart" 
            [class.liked]="isLiked" 
            (click) = "onClick()">
        </i>
        <span>{{ likesNumber }}</span>
        `,
    styles: [`
        .heart {
            cursor: pointer;
            color: #ccc;
        }
        .liked {
            color: deeppink;
        }
        `]
})
export class LikeComponent {
    @Input() isLiked = false;
    @Input() likesNumber;

    onClick() {
        if (this.isLiked)
            this.likesNumber--;
        else
            this.likesNumber++;
        this.isLiked = !this.isLiked;
    }
}