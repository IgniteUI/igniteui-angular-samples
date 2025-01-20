import { Routes } from '@angular/router';
import { ComboBindingComponent } from './combo/combo-binding/combo-binding.component';
import { ComboFeaturesComponent } from './combo/combo-features/combo-features.component';
import { ComboMainComponent } from './combo/combo-main/combo-main.component';
import { ComboOverlayComponent } from './combo/combo-overlay/combo-overlay.component';
import { ComboRemoteComponent } from './combo/combo-remote/combo-remote.component';
import { ComboStylingComponent } from './combo/combo-styling/combo-styling.component';
import { ComboValueKeyComponent } from './combo/combo-valuekey/combo-valuekey.component';
import { ComboTemplateComponent } from './combo/combo-template/combo-template.component';
import { ListChatSampleComponent } from './list/list-chat-sample/list-chat-sample.component';
import { ListSample1Component } from './list/list-sample-1/list-sample-1.component';
import { ListSample2Component } from './list/list-sample-2/list-sample-2.component';
import { ListSample3Component } from './list/list-sample-3/list-sample-3.component';
import { ListSample4Component } from './list/list-sample-4/list-sample-4.component';
import { ListSample5Component } from './list/list-sample-5/list-sample-5.component';
import { ListSample6Component } from './list/list-sample-6/list-sample-6.component';
import { ListSample7Component } from './list/list-sample-7/list-sample-7.component';
import { ListSample8Component } from './list/list-sample-8/list-sample-8.component';
import { ListComponent } from './list/list.component';
import { listsRoutesData } from './lists-routes-data';
import { TreeBasicSampleComponent } from './tree/tree-basic-sample/tree-basic-sample.component';
import { TreeAdvancedSampleComponent } from './tree/tree-advanced-sample/tree-advanced-sample.component';
import { TreeStylingComponent } from './tree/tree-styling/tree-styling.component';
import { SimpleComboMainComponent } from './combo/simple-combo-main/simple-combo-main.component';
import { SimpleComboUsageComponent } from './combo/simple-combo-usage/simple-combo-usage.component';
import { SimpleComboCascadingComponent } from './combo/simple-combo-cascading/simple-combo-cascading.component';
import { SimpleComboStylingComponent } from './combo/simple-combo-styling/simple-combo-styling.component';
import { ListItemSelectionComponent } from './list/list-item-selection/list-item-selection.component';
import { SimpleComboRemoteComponent } from './combo/simple-combo-remote/simple-combo-remote.component';

export const ListsRoutes: Routes = [
    {
        component: ComboMainComponent,
        data: listsRoutesData['combo-main'],
        path: 'combo-main'
    },
    {
        component: ComboBindingComponent,
        data: listsRoutesData['combo-binding'],
        path: 'combo-binding'
    },
    {
        component: ComboFeaturesComponent,
        data: listsRoutesData['combo-features'],
        path: 'combo-features'
    },
    {
        component: ComboStylingComponent,
        data: listsRoutesData['combo-styling'],
        path: 'combo-styling'
    },
    {
        component: ComboValueKeyComponent,
        data: listsRoutesData['combo-valuekey'],
        path: 'combo-valuekey'
    },
    {
        component: ComboRemoteComponent,
        data: listsRoutesData['combo-remote'],
        path: 'combo-remote'
    },
    {
        component: ComboTemplateComponent,
        data: listsRoutesData['combo-template'],
        path: 'combo-template'
    },
    {
        component: ComboOverlayComponent,
        data: listsRoutesData['combo-overlay'],
        path: 'combo-overlay'
    },
    {
        component: SimpleComboMainComponent,
        data: listsRoutesData['simple-combo-main'],
        path: 'simple-combo-main'
    },
    {
        component: SimpleComboUsageComponent,
        data: listsRoutesData['simple-combo-usage'],
        path: 'simple-combo-usage'
    },
    {
        component: SimpleComboCascadingComponent,
        data: listsRoutesData['simple-combo-cascading'],
        path: 'simple-combo-cascading'
    },
    {
        component: SimpleComboStylingComponent,
        data: listsRoutesData['simple-combo-styling'],
        path: 'simple-combo-styling'
    },
    {
        component: SimpleComboRemoteComponent,
        data: listsRoutesData['simple-combo-remote'],
        path: 'simple-combo-remote'
    },
    {
        component: ListComponent,
        // tslint:disable-next-line:no-string-literal
        data: listsRoutesData['list'],
        path: 'list'
    },
    {
        component: ListSample1Component,
        path: 'list-sample-1'
    },
    {
        component: ListSample2Component,
        data: listsRoutesData['list-sample-2'],
        path: 'list-sample-2'
    },
    {
        component: ListSample3Component,
        data: listsRoutesData['list-sample-3'],
        path: 'list-sample-3'
    },
    {
        component: ListSample4Component,
        data: listsRoutesData['list-sample-4'],
        path: 'list-sample-4'
    },
    {
        component: ListSample5Component,
        data: listsRoutesData['list-sample-5'],
        path: 'list-sample-5'
    },
    {
        component: ListSample6Component,
        data: listsRoutesData['list-sample-6'],
        path: 'list-sample-6'
    },
    {
        component: ListSample7Component,
        data: listsRoutesData['list-sample-7'],
        path: 'list-sample-7'
    },
    {
        component: ListSample8Component,
        data: listsRoutesData['list-sample-8'],
        path: 'list-sample-8'
    },
    {
        component: ListChatSampleComponent,
        data: listsRoutesData['list-chat-sample'],
        path: 'list-chat-sample'
    },
    {
        component: ListItemSelectionComponent,
        data: listsRoutesData['list-item-selection'],
        path: 'list-item-selection'
    },
    {
        component: TreeBasicSampleComponent,
        data: listsRoutesData['tree-basic-sample'],
        path: 'tree-basic-sample'
    },
    {
        component: TreeAdvancedSampleComponent,
        data: listsRoutesData['tree-advanced-sample'],
        path: 'tree-advanced-sample'
    },
    {
        component: TreeStylingComponent,
        data: listsRoutesData['tree-styling'],
        path: 'tree-styling'
    },
];
