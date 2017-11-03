System.register(['../business/course'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var course_1;
    var CoursesService;
    return {
        setters:[
            function (course_1_1) {
                course_1 = course_1_1;
            }],
        execute: function() {
            CoursesService = (function () {
                function CoursesService() {
                }
                CoursesService.prototype.getCourses = function () {
                    return [
                        new course_1.Course('course 1', true, false, 10, 1, 23),
                        new course_1.Course('course 2', false, true, 24, 0, 3),
                        new course_1.Course('course 3', true, true, 4, -1, 156)
                    ];
                };
                return CoursesService;
            }());
            exports_1("CoursesService", CoursesService);
        }
    }
});
//# sourceMappingURL=courses.service.js.map