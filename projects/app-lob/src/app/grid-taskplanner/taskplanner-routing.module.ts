import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskPlannerComponent } from "./task-planner/taskplanner.component";
import { taskPlannerRoutesData } from "./taskplanner-routes-data";

export const taskPlannerRoutes: Routes = [
    {
        component: TaskPlannerComponent,
        data: taskPlannerRoutesData["empty-path"],
        path: ""
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(taskPlannerRoutes)
    ]
})
export class TaskPlannerRoutingModule { }
