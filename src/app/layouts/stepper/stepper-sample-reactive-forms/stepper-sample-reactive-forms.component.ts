import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import {  FormControl, FormGroup, Validators  } from '@angular/forms';
import { IgxStepperComponent } from 'igniteui-angular';

export interface BusinessInformation{
    name: FormControl<string | null>,
    physicalAddress: FormControl<string | null>,
    city: FormControl<string | null>,
    state: FormControl<string[] | null>,
    zip: FormControl<number | null>,
    taxIdNumber: FormControl<number | null>,
    differentAddress: FormControl<boolean | null>,
    nonUSBusinessActivity: FormControl<boolean | null>
}

export interface PersonalInformation{
    firstName: FormControl<string | null>,
    lastName: FormControl<string | null>,
    jobTitle: FormControl<string | null>,
    phoneNumber: FormControl<number | null>,
    email: FormControl<string | null>,
    authorization: FormControl<boolean | null>,
    agreementAccepted: FormControl<boolean | null>
}

export interface ShippingDetails{
    sfirstName: FormControl<string | null>,
    slastName: FormControl<string | null>,
    smailingAddress: FormControl<string | null>,
    scity: FormControl<string | null>,
    sstate: FormControl<string[] | null>,
    szip: FormControl<number | null>
}

@Component({
    selector: 'app-stepper-sample-reactive-forms',
    styleUrls: ['./stepper-sample-reactive-forms.component.scss'],
    templateUrl: './stepper-sample-reactive-forms.component.html'
})
export class StepperSampleReactiveFormsComponent {
    @ViewChild('stepper', { static: true })
    public stepper: IgxStepperComponent;

    public today: Date = new Date();

    public cards: any[] = [
        {
            img: 'assets/images/stepper/card-gold.png',
            price: 400,
            offer: 'STATEMENT CREDIT OFFER',
            type: 'Business Customized Advanced',
            description: 'Cash Mastercard'
        },
        {
            img: 'assets/images/stepper/card-red.png',
            price: 600,
            offer: 'STATEMENT CREDIT OFFER',
            type: 'Business Travel Advanced',
            description: 'World Mastercard'
        },
        {
            img: 'assets/images/stepper/card-blue.png',
            price: 500,
            offer: 'STATEMENT CREDIT OFFER',
            type: 'Business Golden',
            description: 'World Mastercard'
        }
    ];

    public states: string[] = [
        'Alabama', 'Arizona', 'California', 'Colorado', 'Florida',
        'Georgia', 'Hawaii', 'Illinois', 'Louisiana', 'Minnesota',
        'Nevada', 'New York', 'New Jersey', 'Ohio', 'Texas', 'Virginia', 'Washington'
    ];
    public selectedCard: any;
    
    public businessInformation:FormGroup<BusinessInformation>;
    public personalInformation:FormGroup<PersonalInformation>;
    public shippingDetails:FormGroup<ShippingDetails>;
    
    constructor(private cdr: ChangeDetectorRef) {        
        this.businessInformation = new FormGroup<BusinessInformation>({
            name: new FormControl('', Validators.required),
            physicalAddress: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            state: new FormControl(this.states, Validators.required),
            zip: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{5}")]),
            taxIdNumber: new FormControl(null, [Validators.required,Validators.pattern("[9]{1}[0-9]{8}")]),
            differentAddress: new FormControl(false, Validators.required),
            nonUSBusinessActivity: new FormControl(null, Validators.required)
        })

        this.personalInformation = new FormGroup<PersonalInformation>({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            jobTitle: new FormControl('', Validators.required),
            phoneNumber: new FormControl(null, Validators.required),
            email: new FormControl('', Validators.required),
            authorization: new FormControl(false, Validators.requiredTrue),
            agreementAccepted: new FormControl(false, Validators.requiredTrue)
        })

        this.shippingDetails = new FormGroup<ShippingDetails>({
            sfirstName: new FormControl('', Validators.required),
            slastName: new FormControl('', Validators.required),
            smailingAddress: new FormControl('', Validators.required),
            scity: new FormControl('', Validators.required),
            sstate: new FormControl(this.states, Validators.required),
            szip: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{5}")])
        })
    };


    public selectCard(card: any): void {
        this.selectedCard = card;
        this.cdr.detectChanges();
        this.stepper.next();
    }

    public resetStepper(form1: FormGroup, form2: FormGroup, form3: FormGroup): void {
         this.stepper.reset();
         this.selectedCard = null;
         form1.reset();
         this.businessInformation.controls.differentAddress.setValue(false);
         form2.reset();
         this.personalInformation.controls.authorization.setValue(false);
         this.personalInformation.controls.agreementAccepted.setValue(false);
         form3.reset();
    }

    public handleKeyDown(evt: KeyboardEvent, card: any): void {
        if (evt.key.toLowerCase() === ' ' || evt.key.toLowerCase() === 'spacebar' || evt.key.toLowerCase() === 'space') {
            this.selectCard(card);
        }
    }

    public errorMessages(){
        if(this.businessInformation.controls.taxIdNumber.errors.required){
            return "This field is required"
        }

        if(this.businessInformation.controls.taxIdNumber.errors.pattern){
            return "The Federal Tax ID Number should begin with 9 and should have 9 digits"
        }
    }
}
