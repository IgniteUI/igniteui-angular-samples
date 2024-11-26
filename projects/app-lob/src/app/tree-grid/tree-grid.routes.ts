import { Routes } from '@angular/router';

import {
    TreeGridChilddatakeySampleComponent
} from './tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component';
import {
    TreeGridPrimaryforeignkeySampleComponent
} from './tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component';
import { treeGridRoutesData } from './tree-grid-routes-data';

export const TreeGridDVRoutes: Routes = [
    {
        component: TreeGridChilddatakeySampleComponent,
        data: treeGridRoutesData['treegrid-childdatakey'],
        path: 'treegrid-childdatakey'
    },
    {
        component: TreeGridPrimaryforeignkeySampleComponent,
        data: treeGridRoutesData['treegrid-primaryforeignkey'],
        path: 'treegrid-primaryforeignkey'
    }
];
