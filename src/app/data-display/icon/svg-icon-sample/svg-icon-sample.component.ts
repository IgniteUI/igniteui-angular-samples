import { Component, OnInit, inject } from '@angular/core';
import { IgxIconService, IgxIconComponent } from 'igniteui-angular';

@Component({
    selector: 'app-svg-icon-sample',
    styleUrls: ['./svg-icon-sample.component.scss'],
    templateUrl: './svg-icon-sample.component.html',
    imports: [IgxIconComponent]
})
export class SvgIconSampleComponent implements OnInit {
    private iconService = inject(IgxIconService);


    public ngOnInit() {
        // register custom SVG icons
        this.iconService.addSvgIcon('contains', 'assets/images/svg/contains.svg', 'filter-icons');
        this.iconService.addSvgIcon('does_not_contain', 'assets/images/svg/does_not_contain.svg', 'filter-icons');
        this.iconService.addSvgIcon('does_not_equal', 'assets/images/svg/does_not_equal.svg', 'filter-icons');
        this.iconService.addSvgIcon('ends_with', 'assets/images/svg/ends_with.svg', 'filter-icons');
        this.iconService.addSvgIcon('equals', 'assets/images/svg/equals.svg', 'filter-icons');
        this.iconService.addSvgIcon('is_empty', 'assets/images/svg/is_empty.svg', 'filter-icons');
        this.iconService.addSvgIcon('starts_with', 'assets/images/svg/starts_with.svg', 'filter-icons');
    }
}
