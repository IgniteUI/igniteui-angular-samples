import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { IgxIconService, IgxTreeNodeComponent } from 'igniteui-angular';
import { icons } from './services/svgIcons';
import { DATA } from './local-data';
import { DataService } from './services/data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-tree-advanced-sample',
    templateUrl: './tree-advanced-sample.component.html',
    styleUrls: ['./tree-advanced-sample.component.scss'],
    providers: [DataService]
})
export class TreeAdvancedSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    public family = 'tree-icons';
    public data = DATA;
    private subscription: Subscription;
    constructor(private iconService: IgxIconService, private dataService: DataService) { }

    public ngOnInit(): void {
    }

    public ngAfterViewInit() {
        const treeIcons = icons;
        treeIcons.forEach(icon => {
            if (!this.iconService.isSvgIconCached(icon.name, this.family)) {
                this.iconService.addSvgIconFromText(icon.name, icon.value, this.family);
            }
        });
    }

    public handleExpand(nodeData: any, node: IgxTreeNodeComponent<any>, evt: boolean) {
        if (nodeData?.Folder !== 'Recycle Bin') {
            return;
        }
        if (evt) {
            node.loading = true;
            this.subscription = this.dataService.getData().subscribe(data => {
                nodeData.Files = data;
                node.loading = false;
            });
        } else {
            nodeData.Files = null;
        }

    }

    public ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
