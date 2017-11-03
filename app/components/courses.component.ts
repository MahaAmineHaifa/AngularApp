import { Component } from 'angular2/core'
import { CoursesService } from '../services/courses.service';
import { AutoGrowDirective } from '../directives/auto.grow.directive';
import { FavouriteComponent } from './favourite.component';
import { LikeComponent } from './like.component';
import { VoteComponent } from './vote.component';
import { Course } from '../business/course'

@Component({
    selector: 'courses',
    templateUrl: 'app/templates/courses.template.html',
    providers: [CoursesService],
    directives: [AutoGrowDirective, FavouriteComponent, LikeComponent, VoteComponent]
})
export class CoursesComponent {
    title = 'The title of courses page';
    courses: Course[];

    constructor(coursesService: CoursesService) {
        console.log(this.courses);
        this.courses = coursesService.getCourses();
        console.log(this.courses);
    }

    onFavouriteClick(event) {
        console.log(event);
    }
}