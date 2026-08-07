import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective } from 'igniteui-angular/input-group';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';

@Component({
  selector: 'app-order-ticket',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IgxInputGroupComponent,
    IgxInputDirective,
    IgxPrefixDirective,
    IgxSelectComponent,
    IgxSelectItemComponent,
    IgxButtonDirective
  ],
  templateUrl: './order-ticket.component.html',
  styleUrls: ['./order-ticket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderTicketComponent {
  public readonly isBuy = signal(true);
  public readonly symbol = signal('AAPL');

  public readonly form = new FormGroup({
    quantity: new FormControl(100, [Validators.required, Validators.min(1)]),
    orderType: new FormControl('Limit', Validators.required),
    limitPrice: new FormControl(227.14, [Validators.required, Validators.min(0.01)])
  });

  public readonly orderTypes = ['Market', 'Limit', 'Stop', 'Stop Limit', 'Trailing Stop'];

  private readonly formValue = toSignal(this.form.valueChanges, {
    initialValue: this.form.getRawValue()
  });

  public readonly estTotal = computed(() => {
    const v = this.formValue();
    const qty = v?.quantity ?? 0;
    const price = v?.limitPrice ?? 0;
    return (qty * price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  });

  public readonly btnLabel = computed(() => `Place ${this.isBuy() ? 'Buy' : 'Sell'} Order`);

  public placeOrder(): void {
    if (this.form.invalid) return;
    const v = this.form.getRawValue();
    console.log(`${this.isBuy() ? 'BUY' : 'SELL'} ${v.quantity} ${this.symbol()} @ ${v.orderType} ${v.limitPrice}`);
  }
}
