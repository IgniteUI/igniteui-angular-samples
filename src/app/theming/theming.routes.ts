import { Routes } from '@angular/router';
import { AnimationsSampleComponent } from './animations/animations-sample-1/animations-sample-1.component';
import { AnimationsSample2Component } from './animations/animations-sample-2/animations-sample-2.component';
import { AngularMaterialComponent } from './angular/angular-sample.component';
import { BootstrapComponent } from './bootstrap/bootstrap-sample.component';
import { DefaultThemeSampleComponent } from './default-theme-sample/default-theme-sample.component';
import { DisplayDensityComponent } from './display-density/display-density.component';
import { CardSampleShadowComponent} from './shadows/card-sample-shadow/card-sample-shadow';
import { ShadowsSampleComponent } from './shadows/shadows-sample-1/shadows-sample.component';
import { ShadowsSample2Component } from './shadows/shadows-sample-2/shadows-sample-2.component';
import { themingRoutesData } from './theming-routes-data';

export const ThemingRoutes: Routes = [
    {
        component: DefaultThemeSampleComponent,
        data: themingRoutesData['default-theme-sample'],
        path: 'default-theme-sample'
    },
    {
        component: ShadowsSampleComponent,
        data: themingRoutesData['shadows-sample'],
        path: 'shadows-sample'
    },
    {
        component: ShadowsSample2Component,
        data: themingRoutesData['shadows-sample-2'],
        path: 'shadows-sample-2'
    },
    {
        component: DisplayDensityComponent,
        // tslint:disable-next-line:no-string-literal
        data: themingRoutesData['density'],
        path: 'density'
    },
    {
        component: CardSampleShadowComponent,
        data: themingRoutesData['card-sample-shadow'],
        path: 'card-sample-shadow'
    },
    {
        component: AnimationsSampleComponent,
        data: themingRoutesData['animations-sample-1'],
        path: 'animations-sample-1'
    },
    {
        component: AnimationsSample2Component,
        data: themingRoutesData['animations-sample-2'],
        path: 'animations-sample-2'
    },
    {
        component: AngularMaterialComponent,
        data: themingRoutesData['angular-sample'],
        path: 'angular-sample'
    },
    {
        component: BootstrapComponent,
        data: themingRoutesData['bootstrap-sample'],
        path: 'bootstrap-sample'
    }
];
