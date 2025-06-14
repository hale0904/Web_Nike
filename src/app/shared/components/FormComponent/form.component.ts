import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Actor } from '@shared/service/actor';
import { FormConfig, FormField, FormButton } from '@shared/models/form-config';

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
    ],
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {

    @Input() forms: FormConfig[] = [];

    onSubmit(form: FormConfig, button: FormButton) {
        const actor = this.mapToActor(form.fields);
        console.log("User submitted with data:", actor);
        console.log("Button clicked:", button.linkText);
    }

    mapToActor(fields: FormField[]): Partial<Actor> {
        const fieldMap: any = {};
        fields.forEach(field => {
            fieldMap[field.name] = field.value;
        });

        return {
            email: fieldMap['email'] || '',
            password: fieldMap['passWord'] || '',
            rePassword: fieldMap['rePassWord'] || ''
        };
    }
}
