import { Component, ElementRef, Injector, ViewChild, afterNextRender, inject } from '@angular/core';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxInputDirective, IgxInputGroupComponent } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-chip-overview',
    templateUrl: './chip-overview.component.html',
    styleUrls: ['./chip-overview.component.scss'],
    imports: [IgxButtonDirective, IgxChipComponent, IgxInputDirective, IgxInputGroupComponent]
})
export class ChipOverviewComponent {
    @ViewChild('skillsGroup') private skillsGroup?: ElementRef<HTMLElement>;
    @ViewChild('selectedGroup') private selectedGroup?: ElementRef<HTMLElement>;

    public skills = ['Figma', 'React', 'CSS', 'Prototyping', 'Motion Design'];
    public selectedSkills = ['Prototyping', 'Motion Design'];
    private injector = inject(Injector);

    /** Both groups list the selected skills in the order of the skills list. */
    public get selected() {
        return this.skills.filter((skill) => this.selectedSkills.includes(skill));
    }

    public toggleSkill(skill: string, selected: boolean) {
        // The chip also reports the selection it receives through the binding, so skip what is already in place.
        if (selected === this.selectedSkills.includes(skill)) {
            return;
        }
        this.selectedSkills = selected
            ? [...this.selectedSkills, skill]
            : this.selectedSkills.filter((item) => item !== skill);
    }

    public removeSkill(skill: string) {
        const index = this.selected.indexOf(skill);
        this.toggleSkill(skill, false);

        // The removed chip is gone, so move focus to the next selected skill, or back to the skill itself when none is left.
        afterNextRender(() => {
            const remaining = this.selectedGroup?.nativeElement.querySelectorAll<HTMLElement>('igx-chip');
            const next = remaining?.[index] ?? remaining?.[index - 1];
            const target = next
                ? next.querySelector<HTMLElement>('.igx-chip__remove')
                : this.skillsGroup?.nativeElement.querySelectorAll<HTMLElement>('igx-chip')[this.skills.indexOf(skill)];
            target?.focus();
        }, { injector: this.injector });
    }
}
