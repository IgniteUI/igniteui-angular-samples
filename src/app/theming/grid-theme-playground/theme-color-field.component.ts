import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IgxInputGroupComponent, IgxInputDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { normalizeHexColor } from './color-utils';

@Component({
    selector: 'app-theme-color-field',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './theme-color-field.component.html',
    styleUrl: './theme-color-field.component.scss',
    imports: [IgxInputGroupComponent, IgxInputDirective, IgxPrefixDirective, IgxSuffixDirective]
})
export class ThemeColorFieldComponent {
    public readonly label = input.required<string>();
    public readonly value = input('');
    /** Seed for the native colour wheel while the value is empty ("auto"). */
    public readonly fallback = input('#808080');
    public readonly valueChange = output<string>();

    private pendingFrame: number | null = null;
    private latestPickedValue: string | null = null;
    protected onPick(event: Event): void {
        this.latestPickedValue = (event.target as HTMLInputElement).value;
        if (this.pendingFrame !== null) return;

        this.pendingFrame = requestAnimationFrame(() => {
            this.pendingFrame = null;
            if (this.latestPickedValue !== null) {
                this.valueChange.emit(this.latestPickedValue);
                this.latestPickedValue = null;
            }
        });
    }

    protected onTextChange(event: Event): void {
        const inputEl = event.target as HTMLInputElement;
        const normalized = normalizeHexColor(inputEl.value);
        if (normalized) {
            this.valueChange.emit(normalized);
            inputEl.value = normalized;
        } else {
            inputEl.value = this.value();
        }
    }

    protected reset(): void {
        this.valueChange.emit('');
    }
}
