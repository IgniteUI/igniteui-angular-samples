import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';
import { IgcFormControlDirective, IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxCardComponent, IgxCardContentDirective } from 'igniteui-angular/card';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';

defineComponents(IgcColorPickerComponent);

interface LabelForm {
    name: FormControl<string | null>;
    color: FormControl<string | null>;
    textColor: FormControl<string | null>;
}

const initialValue = { name: '', color: '', textColor: '#000000' };

@Component({
    selector: 'app-color-picker-reactive-form',
    styleUrls: ['./color-picker-reactive-form.component.scss'],
    templateUrl: './color-picker-reactive-form.component.html',
    imports: [
        ReactiveFormsModule,
        IgcFormControlDirective,
        IgxButtonDirective,
        IgxCardComponent,
        IgxCardContentDirective,
        IgxInputGroupComponent,
        IgxInputDirective,
        IgxLabelDirective,
        IgxHintDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerReactiveFormComponent {
    public swatches = ['#d32f2f', '#f57c00', '#fbc02d', '#388e3c', '#1976d2', '#7b1fa2', '#455a64'];

    public labelForm = new FormGroup<LabelForm>({
        name: new FormControl(initialValue.name, Validators.required),
        color: new FormControl(initialValue.color, Validators.required),
        textColor: new FormControl(initialValue.textColor)
    });

    public get name() {
        return this.labelForm.controls.name;
    }

    public get color() {
        return this.labelForm.controls.color;
    }

    public onReset(form: HTMLFormElement): void {
        form.reset();
        this.labelForm.reset(initialValue);
    }
}
