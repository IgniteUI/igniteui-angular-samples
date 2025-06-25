import { Component } from '@angular/core';
import { Card } from '../../layouts/card/card.blueprint';
import { IGX_CARD_DIRECTIVES, IgxDividerDirective, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent  } from 'igniteui-angular';

@Component({
    standalone: true,
    selector: 'app-tailwind-sample',
    styleUrls: ['./tailwind-sample.component.scss'],
    templateUrl: './tailwind-sample.component.html',
    imports: [IGX_CARD_DIRECTIVES, IgxDividerDirective, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent]
})

export class TailwindSampleComponent {
    public card = new Card({
        icons: ['skip_previous', 'play_arrow', 'skip_next'],
        imageUrl: 'assets/images/card/media/ROZES-Under-the-Grave.jpg',
        subtitle: 'Under the Grave (2016)',
        title: 'Rozes',
        content: '"Under the Grave" by The Roses is a moody, emotional track exploring loss and remembrance. Haunting vocals and atmospheric melodies create a somber, reflective tone. It\'s a poignant blend of sorrow and beauty that lingers.'
    });
}
