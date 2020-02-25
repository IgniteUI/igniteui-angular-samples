import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxAvatarModule,
    IgxButtonGroupModule,
    IgxCardModule,
    IgxDialogModule,
    IgxDividerModule,
    IgxGridModule,
    IgxInputGroupModule,
    IgxListModule,
    IgxMaskModule,
    IgxSwitchModule,
    IgxTabsModule,
    IgxToastModule
} from "igniteui-angular";

import { TasksDataService } from "../services/tasks.service";
import { TaskPlannerComponent } from "./task-planner/taskplanner.component";
import { GridWithTransactionsComponent } from "./task-planner/transaction.component";
import { TaskPlannerRoutingModule } from "./taskplanner-routing.module";

@NgModule({
    declarations: [
        TaskPlannerComponent,
        GridWithTransactionsComponent
    ],
    imports: [
        IgxDividerModule,
        IgxTabsModule,
        CommonModule,
        IgxGridModule,
        IgxAvatarModule,
        IgxToastModule,
        FormsModule,
        IgxMaskModule,
        IgxDialogModule,
        IgxInputGroupModule,
        IgxButtonGroupModule,
        IgxSwitchModule,
        IgxCardModule,
        IgxListModule,
        TaskPlannerRoutingModule
    ],
    providers: [TasksDataService]
})
export class TaskPlannerModule {}

