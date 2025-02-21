import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateRange, IRangeSliderValue, IgxSelectComponent, IgxSelectGroupComponent, IgxSelectItemComponent, IgxLabelDirective, IgxSelectToggleIconDirective, IgxIconComponent, IgxInputGroupComponent, IgxInputDirective, IgxSuffixDirective, IgxHintDirective, IgxPrefixDirective, IgxComboComponent, IgxDatePickerComponent, IgxPickerToggleComponent, IgxTimePickerComponent, IgcFormControlDirective, IgxCheckboxComponent, IgxRadioGroupDirective, IgxRadioComponent, IgxSwitchComponent, IgxDateRangePickerComponent, IgxSliderComponent, IgxCalendarComponent, IgxCardComponent, IgxMonthPickerComponent, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';



export interface User{
     date: FormControl<string |Date | null>,
     time: FormControl<string| Date| null>,
     email: FormControl<string | null>,
     fullName: FormControl<string | null>,
     movie: FormControl<string | null>,
     phone: FormControl<number | null>,
     rating: FormControl<number | null>,
     checkbox: FormControl<boolean | null>,
     radio: FormControl,
     switch: FormControl<boolean | null>,
     range: FormControl<DateRange|null>,
    slider: FormControl<IRangeSliderValue|null>
    calendar: FormControl<string |Date|null>
    month: FormControl<string| Date |null>
    genres: FormControl<string[] | null>
}
@Component({
    selector: 'app-reactive-form',
    styleUrls: ['./reactive-forms.component.scss'],
    templateUrl: './reactive-forms.component.html',
    imports: [FormsModule, ReactiveFormsModule, IgxSelectComponent, IgxSelectGroupComponent, IgxSelectItemComponent, IgxLabelDirective, IgxSelectToggleIconDirective, IgxIconComponent, IgxInputGroupComponent, IgxInputDirective, IgxSuffixDirective, IgxHintDirective, IgxPrefixDirective, IgxComboComponent, IgxDatePickerComponent, IgxPickerToggleComponent, IgxTimePickerComponent, IgcFormControlDirective, IgxCheckboxComponent, IgxRadioGroupDirective, IgxRadioComponent, IgxSwitchComponent, IgxDateRangePickerComponent, IgxSliderComponent, IgxCalendarComponent, IgxCardComponent, IgxMonthPickerComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ReactiveFormsSampleComponent {
    public genres = [];
    public minTime = '06:15:30';
    public maxTime = '09:15:30';
    public minValue = '0';
    public maxValue = '100';
    public minDate = new Date();
    public maxDate = new Date(new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate() + 14));
    public user: FormGroup<User>;

    constructor() {
        this.user =  new FormGroup<User>({
            date: new FormControl('', Validators.required),
            time: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            fullName: new FormControl('', [Validators.required, Validators.pattern(/^[\p{L}\p{M}'\- ]+$/u)]),
            movie: new FormControl('', Validators.required),
            phone: new FormControl(null,Validators.required),
            rating: new FormControl(2, Validators.required),
            checkbox: new FormControl(true,Validators.required),
            radio: new FormControl(''),
            switch: new FormControl(false),
            range: new FormControl({ start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5))}),
            slider: new FormControl({lower: 5, upper: 30}),
            calendar: new FormControl(null),
            month: new FormControl(null),
            genres: new FormControl(['Action','Adventure','Comedy'])
        });
        this.genres = [
            { type: 'Action', movies: ['The Matrix', 'Kill Bill: Vol.1', 'The Dark Knight Rises'] },
            { type: 'Adventure', movies: ['Interstellar', 'Inglourious Basterds', 'Inception'] },
            {type: 'Comedy', movies: ['Wild Tales', 'In Bruges', 'Three Billboards Outside Ebbing, Missouri','Untouchable', '3 idiots']},
            { type: 'Crime', movies: ['Training Day', 'Heat', 'American Gangster'] },
            { type: 'Drama', movies: ['Fight Club', 'A Beautiful Mind', 'Good Will Hunting', 'City of God'] },
            { type: 'Biography', movies: ['Amadeus', 'Bohemian Rhapsody'] },
            { type: 'Mystery', movies: ['The Prestige', 'Memento', 'Cloud Atlas'] },
            { type: 'Musical', movies: ['All That Jazz'] },
            { type: 'Romance', movies: ['Love Actually', 'In The Mood for Love'] },
            { type: 'Sci-Fi', movies: ['The Fifth Element'] },
            { type: 'Thriller', movies: ['The Usual Suspects'] },
            { type: 'Western', movies: ['Django Unchained'] }
        ];

    }

    public get email() {
        return this.user.get('email');
    }
    public get phone() {
        return this.user.get('phone');
    }
    public get fullName() {
        return this.user.get('fullName');
    }

public valueChangeHandler() {
        var sliderValue = this.user.get('slider');
        this.user.controls.range.setValue({
            start: new Date(new Date().setDate(new Date().getDate() + sliderValue.value.lower)),
            end: new Date(new Date().setDate(new Date().getDate() + sliderValue.value.upper))
        });

        var pickerDate = this.user.controls.range.value.start;
        this.user.controls.calendar.setValue(pickerDate);
        this.user.controls.month.setValue(pickerDate);
}
    public onSubmit() {
        console.log(this.user);
    }
}
