import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
// importing IG modules:
import { IgxGridModule } from "igniteui-angular";
// import { IgxExcelModule } from "igniteui-angular-excel/ES5/igx-excel-module";
// importing IG sample::
import { ExcelLibraryWorkingWithGridsComponent } from "./grids.component";

const routes: Routes = [
    { path: "", component: ExcelLibraryWorkingWithGridsComponent }
];
const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    declarations: [ ExcelLibraryWorkingWithGridsComponent ],
    imports: [
        routing,
        CommonModule,
        FormsModule,
        IgxGridModule,
        // IgxExcelModule
    ]
})

export class ExcelLibraryWorkingWithGridsModule { }
