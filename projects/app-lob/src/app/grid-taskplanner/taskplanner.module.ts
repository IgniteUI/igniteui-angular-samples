import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxPieChartModule } from "igniteui-angular-charts";
import { TasksDataService } from "../services/tasks.service";
import { TaskPlannerComponent } from "./task-planner/taskplanner.component";
import { TaskPlannerRoutingModule } from "./taskplanner-routing.module";

@NgModule({
    declarations: [
        TaskPlannerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxPieChartModule,
        TaskPlannerRoutingModule
    ],
    providers: [TasksDataService]
})
export class TaskPlannerModule {}
