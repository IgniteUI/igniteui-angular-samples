import { Component, Pipe, PipeTransform, forwardRef } from '@angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxAutocompleteDirective, IgxDropDownComponent, IgxDropDownItemComponent } from 'igniteui-angular/drop-down';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-autocomplete',
    styleUrls: ['./autocomplete.component.scss'],
    templateUrl: './autocomplete.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxAutocompleteDirective, IgxDropDownComponent, IgxDropDownItemComponent, forwardRef(() => AutocompletePipeStartsWith)]
})
export class AutocompleteBasicComponent {
    public towns = [];
    public townSelected;

    constructor() {
        this.towns = [
            'New York', 'Washington, D.C.', 'London', 'Berlin', 'Sofia', 'Rome', 'Kiev',
            'Copenhagen', 'Paris', 'Barcelona', 'Vienna', 'Athens', 'Dublin', 'Yerevan',
            'Oslo', 'Helsinki', 'Stockholm', 'Prague', 'Istanbul', 'El Paso', 'Florence', 'Moscow',
            'Jambol', 'Talin', 'Zlatna Panega', 'Queenstown', 'Gabrovo', 'Ugurchin', 'Xanthi'];
    }
}

@Pipe({
    name: 'startsWith'
})
export class AutocompletePipeStartsWith implements PipeTransform {
    public transform(collection: any[], term = '') {
        return collection.filter((item) => item.toString().toLowerCase().startsWith(term.toString().toLowerCase()));
    }
}
