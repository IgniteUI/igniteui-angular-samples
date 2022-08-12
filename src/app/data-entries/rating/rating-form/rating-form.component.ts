import { Component} from '@angular/core';
import { IgcRatingComponent, defineComponents } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent)

@Component({
    selector: 'app-rating-sample',
    styleUrls: ['./rating-form.component.scss'],
    templateUrl: './rating-form.component.html'
})
export class RatingInFormComponent {

    public product = {
        ProductID: 1,
        ProductName: "Desk",
        UnitPrice: 265.99,
        UnitsInStock: 2,
        AverageRating: 3.4,
        TotalReviews: 6,
        UserRating: 0,
        ImageURL: 'https://cdn.pixabay.com/photo/2020/08/25/18/28/workplace-5517744_960_720.jpg',
        OrderDate: new Date("2005-03-17"),
        icons: ['favorite', 'share']
    };
}
