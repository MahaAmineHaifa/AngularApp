import { Component, Input } from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
        <div style="cursor:pointer" (click)="toggle()">
            <span>{{ title }}</span>
            <i class="glyphicon" 
                [ngClass]="{
                    'glyphicon-menu-up':isExpanded,
                    'glyphicon-menu-down':!isExpanded
                    }">
                </i>

        </div>
        <div *ngIf="isExpanded">
            <ng-content></ng-content>
        </div>
        `,
    styles: [`
        
        `]
})
export class ZippyComponent {
    @Input() title;
    isExpanded = false;

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}