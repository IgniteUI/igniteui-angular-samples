import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxAvatarModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCardModule,
    IgxDialogModule,
    IgxDividerModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxListModule,
    IgxMaskModule,
    IgxNavbarModule,
    IgxSwitchModule,
    IgxTabsModule,
    IgxToastModule
} from "igniteui-angular";

import { TasksDataService } from "../services/tasks.service";
import { BacklogComponent } from "./task-planner/backlog/backlog.component";
import { HeaderComponent } from "./task-planner/header/header.component";
import { TaskPlannerComponent } from "./task-planner/taskplanner.component";
import { GridWithTransactionsComponent } from "./task-planner/transaction.component";
import { TaskPlannerRoutingModule } from "./taskplanner-routing.module";

@NgModule({
    declarations: [
        TaskPlannerComponent,
        GridWithTransactionsComponent,
        BacklogComponent,
        HeaderComponent
    ],
    imports: [
        IgxIconModule,
        IgxNavbarModule,
        IgxButtonModule,
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
