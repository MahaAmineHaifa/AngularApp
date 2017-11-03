import { Course } from '../business/course'

export class CoursesService {
    getCourses(): Course[] {
        return [
            new Course('course 1', true, false, 10, 1, 23),
            new Course('course 2', false, true, 24, 0, 3),
            new Course('course 3', true, true, 4, -1, 156)
        ];
    }
} 