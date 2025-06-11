import { AfterViewInit, Component, DoCheck, OnInit, ViewChild, ElementRef, PLATFORM_ID, inject } from '@angular/core';
import { IBaseChipEventArgs, IgxDropDownComponent, IgxTreeComponent, ITreeNodeSelectionEvent, ConnectedPositioningStrategy, OverlaySettings, IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxIconComponent, IgxChipsAreaComponent, IgxChipComponent, IgxTreeNodeComponent } from 'igniteui-angular';
import { COUNTRIES } from './countries';
import { isPlatformBrowser } from '@angular/common';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-tree-hierarchical-selection',
    styleUrls: ['./dropdown-tree-hierarchical-selection.component.scss'],
    templateUrl: './dropdown-tree-hierarchical-selection.component.html',
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxIconComponent, IgxChipsAreaComponent, IgxChipComponent, IgxDropDownComponent, IgxTreeComponent, IgxTreeNodeComponent]
})
export class DropdownTreeHierarchicalSelectionComponent implements OnInit, DoCheck, AfterViewInit {
    private platformId = inject(PLATFORM_ID);

    @ViewChild(IgxTreeComponent, { static: true }) public igxTree: IgxTreeComponent;
    @ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown: IgxDropDownComponent;
    @ViewChild('button', { static: true }) public igxButton: ElementRef;

    public countries!: any[];
    public selectedNodes!: any[];

    public ngOnInit(): void {
        this.countries = COUNTRIES;
    }

    public ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            requestAnimationFrame(() => {
                this._overlaySettings.target = this.igxButton.nativeElement;
                this.igxDropDown.open(this._overlaySettings);
            });
        }
    }

    public ngDoCheck(){
        this.selectedNodes = this.igxTree.nodes?.filter(node => node.selected == true);
    }

    public onNodeSelection(args: ITreeNodeSelectionEvent) {
        this.selectedNodes = args.newSelection;
    }

    public chipRemoved(event: IBaseChipEventArgs) {
        this.selectedNodes = this.selectedNodes.filter((node) => {
            if (node.data.ID === event.owner.id){
                this.igxTree.deselectAll([node]);
            }
            return node.data.ID !== event.owner.id;
        });
    }

    public _overlaySettings: OverlaySettings = {
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(),
        closeOnOutsideClick: false
    };


}
