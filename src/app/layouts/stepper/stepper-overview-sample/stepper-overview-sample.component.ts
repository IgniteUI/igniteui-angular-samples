import { Component } from '@angular/core';

@Component({
    selector: 'app-stepper-overview-sample',
    styleUrls: ['./stepper-overview-sample.component.scss'],
    templateUrl: './stepper-overview-sample.component.html'
})
export class StepperOverviewSampleComponent {

    public cards = [
        {
            img: 'https://ck-content.imgix.net/pcm/content/ba1b3537d7b1f1778943-OpenSky-UpdatedCreditCardArt__1_.png?auto=compress,format',
            price: 400,
            offer: 'STATEMENT CREDIT OFFER',
            type: 'Business Customized Advanced',
            description: 'Cash Rewards Mastercard'
        },
        {
            img: 'https://ck-content.imgix.net/pcm/content/ba1b3537d7b1f1778943-OpenSky-UpdatedCreditCardArt__1_.png?auto=compress,format',
            price: 600,
            offer: 'STATEMENT CREDIT OFFER',
            type: 'Business Travel Advanced',
            description: 'World Rewards Mastercard'
        },
        {
            img: 'https://ck-content.imgix.net/pcm/content/ba1b3537d7b1f1778943-OpenSky-UpdatedCreditCardArt__1_.png?auto=compress,format',
            price: 500,
            offer: 'STATEMENT CREDIT OFFER',
            type: 'Golden',
            description: 'Business Card Mastercard'
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
}
