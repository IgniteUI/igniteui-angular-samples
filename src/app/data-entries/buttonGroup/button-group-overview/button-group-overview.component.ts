import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

type AlbumSource = 'device' | 'cloud';

@Component({
    selector: 'app-button-group-overview',
    styleUrls: ['./button-group-overview.component.scss'],
    templateUrl: './button-group-overview.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupOverviewComponent {
    public rippleColor = 'gray';
    public source: AlbumSource = 'cloud';

    public albums: Record<AlbumSource, { title: string; photos: string[] }> = {
        device: {
            title: 'Trip around the world',
            photos: [
                'https://picsum.photos/id/1015/300/220',
                'https://picsum.photos/id/1016/300/220',
                'https://picsum.photos/id/1018/300/220',
                'https://picsum.photos/id/1019/300/220'
            ]
        },
        cloud: {
            title: 'Trip around the world',
            photos: [
                'https://picsum.photos/id/1036/300/220',
                'https://picsum.photos/id/1051/300/220',
                'https://picsum.photos/id/1062/300/220',
                'https://picsum.photos/id/1067/300/220'
            ]
        }
    };

    public get album() {
        return this.albums[this.source];
    }

    public selectSource(source: AlbumSource) {
        this.source = source;
    }
}
