import { Component, ElementRef, Injector, ViewChild, afterNextRender, inject } from '@angular/core';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-chip-remove',
    templateUrl: './chip-remove.component.html',
    styleUrls: ['./chip-remove.component.scss'],
    imports: [IgxButtonDirective, IgxChipComponent]
})
export class ChipRemoveComponent {
    @ViewChild('chip', { read: ElementRef }) private chip?: ElementRef<HTMLElement>;
    @ViewChild('restore') private restore?: ElementRef<HTMLButtonElement>;

    public isVisible = true;
    private injector = inject(Injector);

    public toggleChip(visible: boolean) {
        this.isVisible = visible;

        // The control the user activated is gone, so move focus to the one that replaced it.
        afterNextRender(() => {
            const target = visible
                ? this.chip?.nativeElement.querySelector<HTMLElement>('.igx-chip__remove')
                : this.restore?.nativeElement;
            target?.focus();
        }, { injector: this.injector });
    }
}
