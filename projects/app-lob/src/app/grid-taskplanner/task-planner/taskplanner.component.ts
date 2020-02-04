import { Component, OnInit, ViewChild } from "@angular/core";
import { DefaultSortingStrategy, IGridEditEventArgs, IgxGridComponent,
    IgxToastComponent,
    SortingDirection} from "igniteui-angular";
import { IgxLegendComponent } from "igniteui-angular-charts";
import { TasksDataService } from "../../services/tasks.service";
import { MEMBERS } from "../../services/tasksData";

export enum editMode {
    cellEditing = 0,
    rowEditing = 1,
    none = 2
}

export interface ITask {
    id: number;
    issue: string;
    isActive: boolean;
    priority: string;
    status: string;
    owner: {
      id: number;
      name: string;
      sex: string;
      team: string;
      avatar: string;
    };
    created_by: string;
    started_on: Date;
    deadline: Date;
    estimation: number;
    hours_spent: number;
}

const newLocal = "started_on";
@Component({
    providers: [TasksDataService],
    selector: "app-taskplanner",
    templateUrl: "./taskplanner.component.html",
    styleUrls: ["./taskplanner.component.scss"]
})
export class TaskPlannerComponent implements OnInit {
    @ViewChild("grid1", { static: true }) public grid: IgxGridComponent;
    @ViewChild("legend", { static: true }) public legend: IgxLegendComponent;
    @ViewChild(IgxToastComponent, { read: IgxToastComponent, static: true }) public toast: IgxToastComponent;

    public localData: any[];
    public teamMembers: any[];
    public editMode = editMode.cellEditing;

    public statuses = [
        { value: "New" },
        { value: "In Progress" },
        { value: "Done" },
        { value: "Delayed" },
        { value: "Completed "}
    ];

    public priority = [
        { value: "Low" },
        { value: "Normal" },
        { value: "High" },
        { value: "Critical" }
    ];

    public columns: any[] = [
    // tslint:disable:max-line-length
    { field: "id", header: "ID", width: "140px", dataType: "number", formatter: this.formatID },
    { field: "milestone", header: "Milestone", width: "120px", dataType: "string", groupable: true, hidden: true, editable: true},
    { field: "issue", header: "Issue", width: "200px", dataType: "string", sortable: true, filterable: false, editable: true},
    { field: "status", header: "Status", width: "140px", dataType: "string", sortable: true, filterable: false, editable: true },
    { field: "progress", header: "Progress", width: "120px", dataType: "number", sortable: true, filterable: true, editable: false },
    { field: "owner", header: "Owner", width: "180px", dataType: "string", editable: true },
    { field: "created_by", header: "Created By", width: "180px", dataType: "string", sortable: true, filterable: true, editable: false },
    { field: "started_on", header: "Started on", width: "130px", dataType: "date", sortable: true, filterable: true, editable: true },
    { field: "deadline", header: "Deadline", width: "130px", dataType: "date", sortable: false, filterable: true, editable: true },
    { field: "estimation", header: "Estimation", width: "120px", dataType: "number", sortable: false, filterable: false, editable: true, columnGroup: true, formatter: this.formatHours },
    { field: "hours_spent", header: "Hours Spent", width: "120px", dataType: "number", sortable: false, filterable: false, editable: true, columnGroup: true, formatter: this.formatHours },
    { field: "priority", header: "Priority", width: "125px", dataType: "string", sortable: true, filterable: true, editable: true }
    // tslint:enable:max-line-length
  ];

    constructor(private dataService: TasksDataService) { }

    public ngOnInit() {
        this.dataService.getData().subscribe(data => this.localData = data);
        this.teamMembers = MEMBERS;

        this.grid.groupingExpressions = [{
            dir: SortingDirection.Asc,
            fieldName: "milestone",
            ignoreCase: false,
            strategy: DefaultSortingStrategy.instance()
        }];
    }

    public addTask() {

    }

    public formatID(value: number): string {
        return "#" + value;
    }

    public formatHours(value: number): string {
        return value + "h";
    }

    public onButtonAction(event: any) {
        this.editMode = event.index;
    }

    /**
     * Calculates task progress.
     */
    public calcProgress(task: ITask) {
        const progress = (task.hours_spent / task.estimation) * 100;
        return progress;
    }

    /**
     * Returns workload for corresponding team member.
     */
    public getAsigneeWorkload(ownerID: number) {
        const workloadData = this.localData.filter(rec => rec.owner.id === ownerID);
        const newTasks = workloadData.filter(rec => rec.status === "New").length;
        const inprogressTasks = workloadData.filter(rec => rec.status === "In Progress").length;
        const doneTasks = workloadData.filter(rec => rec.status === "Done").length;

        return [
            { Label: "In Progress", Value: inprogressTasks },
            { Label: "Done", Value: doneTasks },
            { Label: "New", Value: newTasks }];
    }

    /**
     * Returns workload for the corrssponding team.
     */
    public getTeamWorkload(team: string) {
        const workloadData = this.localData.filter(rec => rec.owner.team === team);
        const newTasks = workloadData.filter(rec => rec.status === "New").length;
        const inprogressTasks = workloadData.filter(rec => rec.status === "In Progress").length;
        const doneTasks = workloadData.filter(rec => rec.status === "Done").length;

        return [
            { Label: "In Progress", Value: inprogressTasks },
            { Label: "Done", Value: doneTasks },
            { Label: "New", Value: newTasks }];
    }

    /**
     * Returns data representing perfect progress and actual progress for the task.
     */
    public getChartData(task: ITask) {
        const progress: any[] = [];
        const monthsUntilDeadline = this.monthsLength(task.started_on, task.deadline);
        const expectedProgress = task.estimation / monthsUntilDeadline;

        if (task.status === "In Progress") {
            const monthsPassed = this.monthsLength(task.started_on, new Date());
            const monthsUntilNow = monthsPassed ? monthsPassed : 1;
            const actualProgress = task.hours_spent / monthsUntilNow;

            for (let i = 0; i <= monthsUntilDeadline; i++) {
                const datee = new Date(task.started_on);
                datee.setMonth(task.started_on.getMonth() + i);
                progress.push({
                    estimated: i * expectedProgress,
                    progress: i * actualProgress,
                    date: datee
                });
            }
        } else {
            for (let i = 0; i <= monthsUntilDeadline; i++) {
                const datee = new Date(task.started_on);
                datee.setMonth(task.started_on.getMonth() + i);
                progress.push({
                    progress: i * expectedProgress,
                    date: datee
                });
            }
        }

        return progress;
    }

    public formatPieLabel(args): string {
        return args.item.Value + " " + args.item.Label;
    }

    public formatDateLabel(item: any): string {
        return item.date.toLocaleDateString(undefined, { month: "short" });
    }

    public editStart(event: IGridEditEventArgs) {
        const field = this.grid.columnList.find(c => c.index === event.cellID.columnID).field;
        if (field === "started_on" && !!event.oldValue) {
            event.cancel = true;
        }
     }

    public onCellEdit(event: IGridEditEventArgs) {
        const field = this.grid.columnList.find(c => c.index === event.cellID.columnID).field;
        switch (field) {
            case "started_on": {
                const deadlineDate = this.grid.getRowByKey(event.rowID).rowData["deadline"];
                if (event.newValue > deadlineDate) {
                    event.cancel = true;
                    this.toast.message = "Started date cannot exceed Deadline date !";
                    this.toast.show();
                }
                break;
            }
            case "deadline": {
                const startedDate = this.grid.getRowByKey(event.rowID).rowData["started_on"];
                if (event.newValue < startedDate) {
                    event.cancel = true;
                    this.toast.message = "Deadline date cannot be earlier than started date !";
                    this.toast.show();
                }
                if (event.newValue < startedDate) {
                    event.cancel = true;
                    this.toast.message = "Deadline date cannot be earlier than started date !";
                    this.toast.show();
                }
                break;
            }
        }
    }

    get isRowEditingEnabled() {
        return this.editMode === editMode.rowEditing;
    }

    get isEditingEnabled() {
        return this.editMode !== editMode.none;
    }

    private monthsLength(startDate, endDate): number {
        const monthsDelta = (endDate.getFullYear()
            - startDate.getFullYear()) * 12
            + (endDate.getMonth() - startDate.getMonth());
        return monthsDelta;
    }
}
