import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormControl, FormsModule } from "@angular/forms";
import { IgxInputDirective, IgxInputGroupModule } from "igniteui-angular";
import { TasksDataService } from "../services/tasks.service";
import { TaskPlannerComponent } from "./task-planner/taskplanner.component";
import { TaskPlannerRoutingModule } from "./taskplanner-routing.module";

@NgModule({
    declarations: [
        TaskPlannerComponent,
        IgxInputDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxInputGroupModule,
        FormControl,
        TaskPlannerRoutingModule
    ],
    providers: [TasksDataService]
})
export class TaskPlannerModule {}
