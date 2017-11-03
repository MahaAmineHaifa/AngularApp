import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { ChangePasswordValidator } from '../validators/change-password.validator';

@Component({
    selector: 'change-password-form',
    templateUrl: 'app/templates/change-password.template.html'
})
export class ChangePasswordFormComponent {
    form: ControlGroup;
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            currentPassword: ["", Validators.required],
            newPassword: ["", Validators.required],
            confirmPassword: ["", Validators.required]
        }, { validator: ChangePasswordValidator.checkCompatibility });
    }

    changePassword() {
        var currentPassword = this.form.find('currentPassword');
        if (currentPassword.value != '1234')
            currentPassword.setErrors({ validCurrentPassword: true });

        if (this.form.valid)
            alert("Password successfully changed.");
    }
}