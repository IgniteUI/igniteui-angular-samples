import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IgxStepperComponent } from 'igniteui-angular';

@Component({
    selector: 'app-stepper-overview-sample',
    styleUrls: ['./stepper-overview-sample.component.scss'],
    templateUrl: './stepper-overview-sample.component.html',
    standalone: false
})
export class StepperOverviewSampleComponent {
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

    public businessInformation: any = {
        name: '',
        physicalAddress: '',
        city: '',
        state: '',
        zip: null,
        taxIdNumber: null,
        differentAddress: false,
        nonUSBusinessActivity: null
    };

    public personalInformation: any = {
        firstName: '',
        lastName: '',
        jobTitle: '',
        phoneNumber: '',
        email: '',
        authorization: false,
        agreementAccepted: false
    };

    public shippingDetails: any = {
        firstName: '',
        lastName: '',
        mailingAddress: '',
        city: '',
        state: '',
        zip: null
    };

    constructor(private cdr: ChangeDetectorRef) { }

    public selectCard(card: any): void {
        this.selectedCard = card;
        this.cdr.detectChanges();
        this.stepper.next();
    }

    public resetStepper(form1: NgForm, form2: NgForm, form3: NgForm): void {
        this.stepper.reset();
        this.selectedCard = null;
        form1.reset();
        this.businessInformation.differentAddress = false;
        form2.reset();
        this.personalInformation.authorization = false;
        this.personalInformation.agreementAccepted = false;
        form3.reset();
    }

    public handleKeyDown(evt: KeyboardEvent, card: any): void {
        if (evt.key.toLowerCase() === ' ' || evt.key.toLowerCase() === 'spacebar' || evt.key.toLowerCase() === 'space') {
            this.selectCard(card);
        }
    }
}
