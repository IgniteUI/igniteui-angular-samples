import * as core from '@angular/core';
import { cities, City } from '../../../data/cities15000-regions-countries';

@core.Component({
    selector: 'app-simple-combo-usage',
    templateUrl: 'simple-combo-usage.component.html',
    styleUrls: ['simple-combo-usage.component.scss']
})
export class SimpleComboUsageComponent implements core.OnInit {
    public data: City[];
    ngOnInit(): void {
        this.data = cities
            .filter(c => c.population > 10000000)
            .sort((a, b) => b.population - a.population);
    }
}
