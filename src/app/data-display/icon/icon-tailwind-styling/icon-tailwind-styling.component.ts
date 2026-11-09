import { Component, ViewEncapsulation } from '@angular/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Component({
    selector: 'app-icon-tailwind-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./icon-tailwind-styling.component.scss'],
    templateUrl: './icon-tailwind-styling.component.html',
    imports: [
        IgxInputGroupComponent,
        IgxInputDirective,
        IgxLabelDirective,
        IgxPrefixDirective,
        IgxSuffixDirective,
        IgxHintDirective,
        IgxIconComponent,
        IgxIconButtonDirective
    ]
})
export class IconTailwindStylingComponent {
    public fieldClasses = 'w-[260px] [--ig-input-group-input-prefix-background:transparent] [--ig-input-group-input-prefix-background--filled:transparent] [--ig-input-group-input-prefix-background--focused:transparent] [--ig-input-group-input-suffix-background:transparent] [--ig-input-group-input-suffix-background--filled:transparent] [--ig-input-group-input-suffix-background--focused:transparent] [--ig-input-group-placeholder-color:#344b65] [--ig-input-group-hover-placeholder-color:#344b65] [--ig-input-group-focused-secondary-color:transparent]';
    public focusClasses = 'focus-within:[--ig-input-group-border-color:var(--ig-primary-500)] focus-within:[--ig-input-group-focused-border-color:var(--ig-primary-500)]';
    public invalidClasses = '[--ig-input-group-border-color:#ff134a] [--ig-input-group-focused-border-color:#ff134a]';

    public passwordVisible = false;
    public email = 'ana@';

    public get emailInvalid(): boolean {
        return !emailPattern.test(this.email);
    }

    public onEmailInput(event: Event): void {
        this.email = (event.target as HTMLInputElement).value;
    }
}
