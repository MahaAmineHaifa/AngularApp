import { ControlGroup, Control } from 'angular2/common';

export class ChangePasswordValidator {
    static checkCompatibility(group: ControlGroup) {
        var newPassword = group.find('newPassword').value;
        var confirmPassword = group.find('confirmPassword').value;

        if (newPassword == '' || confirmPassword == '')
            return null;

        if (newPassword != confirmPassword)
            return { passwordCompatibility: true };

        return null;
    }
}