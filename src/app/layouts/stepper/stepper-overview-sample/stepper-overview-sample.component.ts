import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { IgxStepperComponent } from 'igniteui-angular';

@Component({
    selector: 'app-stepper-overview-sample',
    styleUrls: ['./stepper-overview-sample.component.scss'],
    templateUrl: './stepper-overview-sample.component.html'
})
export class StepperOverviewSampleComponent {
    @ViewChild('stepper', { static: true }) public stepper: IgxStepperComponent;

    public today = new Date();

    public cards = [
        {
            img: 'assets/images/stepper/card-blue.png',
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
            img: 'assets/images/stepper/card-gold.png',
            price: 500,
            offer: 'STATEMENT CREDIT OFFER',
            type: 'Business Golden',
            description: 'World Mastercard'
        }
    ];

    public selectedCard;

    public businessInformation = {
        name: '',
        physicalAddress: '',
        city: '',
        state: '',
        zip: null,
        taxIdNumber: null,
        differentAddress: false,
        nonUSBusinessActivity: null
    };

    public personalInformation = {
        firstName: '',
        lastName: '',
        jobTitle: '',
        phoneNumber: '',
        email: '',
        authorization: false,
        agreementAccepted: false
    };

    public shippingDetails = {
        firstName: '',
        lastName: '',
        mailingAddress: '',
        city: '',
        state: '',
        zip: null
    };

    constructor(private cdr: ChangeDetectorRef) {

    }

    public selectCard(card) {
        this.selectedCard = card;
        this.cdr.detectChanges();
        this.stepper.next();
    }

    public resetStepper(form1, form2, form3) {
        this.stepper.reset();
        this.selectedCard = null;
        form1.reset();
        this.businessInformation.differentAddress = false;
        form2.reset();
        this.personalInformation.authorization = false;
        this.personalInformation.agreementAccepted = false;
        form3.reset();
    }
}
