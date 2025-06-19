import { Component} from '@angular/core';
import { IgcRatingComponent, defineComponents } from 'igniteui-webcomponents';
import { FormsModule } from '@angular/forms';
import { IgxCardComponent, IgxCardMediaDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardContentDirective, IgxCardHeaderSubtitleDirective, IgcFormControlDirective, IgxCardActionsComponent, IgxButtonDirective, IgxRippleDirective, IgxPrefixDirective, IgxIconButtonDirective, IgxSuffixDirective, IgxIconComponent } from 'igniteui-angular';
import { CurrencyPipe } from '@angular/common';

defineComponents(IgcRatingComponent)

@Component({
    selector: 'app-rating-sample',
    styleUrls: ['./rating-form.component.scss'],
    templateUrl: './rating-form.component.html',
    imports: [FormsModule, IgxCardComponent, IgxCardMediaDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardContentDirective, IgxCardHeaderSubtitleDirective, IgcFormControlDirective, IgxCardActionsComponent, IgxButtonDirective, IgxRippleDirective, IgxPrefixDirective, IgxIconButtonDirective, IgxSuffixDirective, IgxIconComponent, CurrencyPipe]
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

    public get productRating(): string {
        const rating = this.product.AverageRating +
            ((this.product.UserRating || this.product.AverageRating) - this.product.AverageRating) /
            (this.product.TotalReviews + 1);
        return rating.toFixed(1);
    }
}
