System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ChangePasswordValidator;
    return {
        setters:[],
        execute: function() {
            ChangePasswordValidator = (function () {
                function ChangePasswordValidator() {
                }
                ChangePasswordValidator.checkCompatibility = function (group) {
                    var newPassword = group.find('newPassword').value;
                    var confirmPassword = group.find('confirmPassword').value;
                    if (newPassword == '' || confirmPassword == '')
                        return null;
                    if (newPassword != confirmPassword)
                        return { passwordCompatibility: true };
                    return null;
                };
                return ChangePasswordValidator;
            }());
            exports_1("ChangePasswordValidator", ChangePasswordValidator);
        }
    }
});
//# sourceMappingURL=change-password.validator.js.map