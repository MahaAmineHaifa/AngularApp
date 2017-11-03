import { Component } from 'angular2/core';
import { CoursesComponent } from './components/courses.component';
import { AuthorsComponent } from './components/authors.component';
import { TweetsComponent } from './components/tweets.component';
import { ContactFormComponent } from './components/contact-form.component';
import { ChangePasswordFormComponent } from './components/change-password.component';

@Component({
    selector: 'my-app',
    template: `
            <h1>My First Angular 2 App</h1>
            <change-password-form></change-password-form>
            <!--<contact-form></contact-form>
            <courses></courses>
            <authors></authors>
            <tweets></tweets>-->
            `,
    directives: [TweetsComponent, CoursesComponent, AuthorsComponent, ContactFormComponent, ChangePasswordFormComponent]
})
export class AppComponent { }