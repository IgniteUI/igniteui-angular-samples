import { Component } from '@angular/core';
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
    public skills = ['Figma', 'React', 'CSS', 'Prototyping', 'Motion Design'];
    public selectedSkills: string[] = [];

    public toggleSkill(skill: string, selected: boolean) {
        this.selectedSkills = selected
            ? [...this.selectedSkills, skill]
            : this.selectedSkills.filter((item) => item !== skill);
    }
}
