import { Component } from '@angular/core';
import { ConnectedPositioningStrategy, HorizontalAlignment, ISelectionEventArgs, NoOpScrollStrategy, VerticalAlignment, IgxNavbarComponent, IgxIconButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxIconComponent, IgxDropDownComponent, IgxDropDownItemComponent, IgxLabelDirective, IgxOverlayOutletDirective } from 'igniteui-angular';


@Component({
    selector: 'app-dropdown-menu',
    styleUrls: ['./dropdown-menu.component.scss'],
    templateUrl: './dropdown-menu.component.html',
    imports: [IgxNavbarComponent, IgxIconButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxIconComponent, IgxDropDownComponent, IgxDropDownItemComponent, IgxLabelDirective, IgxOverlayOutletDirective]
})
export class DropdownMenuComponent {
    public items: { text: string }[] =
        [{ text: 'Add New Contact' }, { text: 'Edit Contact' }, { text: 'Refresh' }, { text: 'Help' }];
    public text: string;
    public overlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy({
            horizontalDirection: HorizontalAlignment.Left,
            horizontalStartPoint: HorizontalAlignment.Right,
            verticalStartPoint: VerticalAlignment.Bottom
        }),
        scrollStrategy: new NoOpScrollStrategy()
    };

    public onSelection(eventArgs: ISelectionEventArgs) {
        this.text = eventArgs.newSelection.value;
        eventArgs.cancel = true;
    }
}
