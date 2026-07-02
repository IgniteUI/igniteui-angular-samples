import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxDialogActionsDirective, IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxOverlayOutletDirective } from 'igniteui-angular/core';
import { IgxButtonDirective, IgxFlexDirective, IgxIconButtonDirective, IgxLayoutDirective } from 'igniteui-angular/directives';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxCardActionsComponent, IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective } from 'igniteui-angular/card';
import { IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineTitleDirective } from 'igniteui-angular/list';
import { NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbRating, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-bootstrap-sample',
    styleUrls: ['./bootstrap-sample.component.scss'],
    templateUrl: './bootstrap-sample.component.html',
    imports: [IgxButtonDirective, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, IgxAvatarComponent, IgxIconButtonDirective, IgxIconComponent, IgxLayoutDirective, IgxCardComponent, IgxFlexDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardContentDirective, NgbRating, IgxCardActionsComponent, IgxDialogComponent, IgxDialogActionsDirective, IgxSuffixDirective, IgxOverlayOutletDirective, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody, IgxListComponent, IgxListItemComponent, IgxListLineTitleDirective, IgxListActionDirective]
})

export class BootstrapComponent implements OnInit{

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    @ViewChild('dialog', { read: IgxDialogComponent, static: true })
    public dialog: IgxDialogComponent;

    @HostBinding('class')
    public themesClass = 'light';

    public horizontal = true;

    public contacts = [
        {
          name: 'Sticker Mule Italy srl',
          amount: 85.23
        },
        {
            name: 'Dribbble Holdings Ltd.',
            amount: 472.99
        },
        {
            name: 'Printify Inc.',
            amount: 236.89
        }
    ];

    private _dialogOverlaySettings2;

    public lightTheme() {
        this.themesClass = 'light';
    }

    public darkTheme() {
        this.themesClass = 'dark';
    }

    public openDialog() {
        this._dialogOverlaySettings2.outlet = this.outlet;
        this.dialog.open(this._dialogOverlaySettings2);
    }

    public ngOnInit() {
        this._dialogOverlaySettings2 = {
            modal: true,
            outlet: this.outlet
        };
    }
}

