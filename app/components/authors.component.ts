import { Component } from 'angular2/core';
import { AuthorsService } from '../services/authors.service';

@Component({
    selector: 'authors',
    template: `
              <h2>Authors</h2>
              {{ title }}
              <ul>
                <li *ngFor="#author of authors">
                    {{ author }}
                </li>  
        `,
    providers: [AuthorsService]
})
export class AuthorsComponent {
    title = "The title of Authors List";
    authors: String[];

    constructor(authorsService: AuthorsService) {
        this.authors = authorsService.getAuthors();
    }
}