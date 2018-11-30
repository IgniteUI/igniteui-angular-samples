import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
// importing IG modules:
import { IgxGridComponent, IgxGridModule } from "igniteui-angular";
// import { IgxExcelModule } from "igniteui-angular-excel/ES5/igx-excel-module";
// importing IG sample:
import { ExcelLibraryOperationsOnWorkbooksComponent } from "./workbooks.component";

const routes: Routes = [
    { path: "", component: ExcelLibraryOperationsOnWorkbooksComponent }
];
const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    declarations: [ ExcelLibraryOperationsOnWorkbooksComponent ],
    entryComponents: [
      IgxGridComponent
    ],
    imports: [
        routing,
        CommonModule,
        FormsModule,
        IgxGridModule
        // IgxExcelModule
    ]
})

export class ExcelLibraryOperationsOnWorkbooksModule { }
