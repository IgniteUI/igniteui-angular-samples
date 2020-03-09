import { Component, OnInit, ViewChild  } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";
import { DefaultSortingStrategy, IGridEditEventArgs, IgxDialogComponent,
    IgxGridComponent, IgxToastComponent,
    SortingDirection, Transaction} from "igniteui-angular";
import { IgxLegendComponent } from "igniteui-angular-charts";
import { TasksDataService } from "../../services/tasks.service";
import {MEMBERS} from "../../services/tasksData";

export enum editMode {
    cellEditing = 0,
    rowEditing = 1,
    none = 2
}

export interface ITask {
    id?: number;
    issue?: string;
    isActive?: boolean;
    priority?: string;
    milestone?: string;
    description?: string;
    status?: string;
    owner?: {
      id: number;
      name: string;
      sex: string;
      team: string;
      avatar: string;
    };
    created_by?: string;
    started_on?: Date;
    deadline?: Date;
    estimation?: number;
    hours_spent?: number;
}

@Component({
    providers: [TasksDataService, { provide: ControlContainer, useExisting: NgForm }
       ],
    selector: "app-taskplanner",
    templateUrl: "./taskplanner.component.html",
    styleUrls: ["./taskplanner.component.scss"],
    host: {class: "tp-app"}
})
export class TaskPlannerComponent implements OnInit {

    @ViewChild("tasksGrid", { read: IgxGridComponent, static: true }) public grid: IgxGridComponent;
    @ViewChild("legend", { static: true }) public legend: IgxLegendComponent;
    @ViewChild(IgxToastComponent, { read: IgxToastComponent, static: true }) public toast: IgxToastComponent;
    @ViewChild("addTaskDialog", { static: true }) public addTaskDialog: IgxDialogComponent;
    @ViewChild("transactionsDialog", { static: true }) public transactionsDialog: IgxDialogComponent;
    @ViewChild("transactionsGrid", { static: true }) public transactionsGrid: IgxGridComponent;

    public localData: any[];
    public teamMembers: any[];
    public editMode = editMode.cellEditing;
    public addTaskForm: ITask = { };
    public batchEditingEnabled = true;
    public transactionsData: Transaction[] = [];

    public statuses = [
        { value: "New" },
        { value: "In Progress" },
        { value: "Done" },
        { value: "Delayed" }
    ];

    public priority = [
        { value: "Low" },
        { value: "Normal" },
        { value: "High" },
        { value: "Critical" }
    ];

    /**
     * Calculates task progress.
     */
    public calcProgress = calcProgress;

    public isDone = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] === "Done";
    }

    public isNew = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] === "New";
    }

    public isInProgress = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] === "In Progress";
    }

    public isLate = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] === "Delayed";
    }

    public isCritical = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] === "Critical";
    }

    public isLow = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] === "Low";
    }

    public isHigh = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] === "High";
    }

    public isDelayed = (rowData: ITask, columnKey: string): boolean => {
        return rowData.hours_spent > rowData.estimation;
    }

    public isDelayed2 = (rowData: ITask, columnKey: string): boolean => {
        return rowData.hours_spent > rowData.estimation;
    }

    // tslint:disable:member-ordering
    public statusClasses = {
        done: this.isDone,
        new: this.isNew,
        inProgress: this.isInProgress,
        delayed: this.isLate
    };

    public priorityClasses = {
        critical: this.isCritical,
        low: this.isLow,
        high: this.isHigh
    };

    public delayedClasses = {
        delayed: this.isDelayed
    };

    public milestoneSort = MilestoneSortingStrategy.instance();
    public progressSort = ProgressSortingStrategy.instance();

    public columns: any[] = [
        // tslint:disable:max-line-length
        { field: "id", header: "ID", width: "120px", dataType: "number", formatter: this.formatID },
        { field: "milestone", header: "Milestone", width: "120px", dataType: "string", resizable: true, groupable: true, editable: true, sortable: true, sortStrategy: this.milestoneSort},
        { field: "issue", header: "Issue", width: "380px", dataType: "string", resizable: true, filterable: false, editable: true},
        { field: "status", header: "Status", width: "130px", dataType: "string", resizable: true, sortable: true, filterable: false, editable: true, cellClasses: this.statusClasses, sortStrategy: this.progressSort },
        { field: "progress", header: "Progress", width: "95px", dataType: "number", resizable: true, sortable: false },
        { field: "owner", header: "Owner", width: "180px", dataType: "string", resizable: true, editable: true, sortable: true, filterable: true },
        { field: "created_by", header: "Created By", width: "180px", dataType: "string", resizable: true, sortable: true, filterable: true, editable: false, hidden: true },
        { field: "started_on", header: "Started on", width: "130px", dataType: "date", resizable: true, sortable: true, filterable: true, editable: true },
        { field: "deadline", header: "Deadline", width: "130px", dataType: "date", resizable: true, sortable: false, filterable: true, editable: true },
        { field: "estimation", header: "Estimation", width: "120px", dataType: "number", resizable: true, sortable: false, filterable: false, editable: true, columnGroup: true, formatter: this.formatHours, cellClasses: this.delayedClasses },
        { field: "hours_spent", header: "Hours Spent", width: "120px", dataType: "number", resizable: true, sortable: false, filterable: false, editable: true, columnGroup: true, formatter: this.formatHours, cellClasses: this.delayedClasses },
        { field: "priority", header: "Priority", width: "125px", dataType: "string", resizable: true, sortable: true, filterable: true, editable: true, cellClasses: this.priorityClasses }
        // tslint:enable:max-line-length
    ];

    constructor(private dataService: TasksDataService) {  }
    // tslint:enable:member-ordering

    public ngOnInit() {
        this.dataService.getData().subscribe(data => this.localData = data);
        this.teamMembers = MEMBERS;

        this.transactionsData = this.grid.transactions.getAggregatedChanges(true);
        this.grid.transactions.onStateUpdate.subscribe(() => {
            this.transactionsData = this.grid.transactions.getAggregatedChanges(true);
        });

        this.grid.groupingExpressions = [{
            dir: SortingDirection.Asc,
            fieldName: "milestone",
            ignoreCase: false,
            strategy: this.milestoneSort
        }];

        this.grid.groupingExpansionState = [{
            expanded: false,
            hierarchy: [{ fieldName: "milestone", value: "Q2 2020"}]
        }, {
            expanded: true,
            hierarchy: [{ fieldName: "milestone", value: "Q1 2020"}]
        }, {
            expanded: false,
            hierarchy: [{ fieldName: "milestone", value: "Q4 2019"}]
        }];
    }

    public ngAfterViewInit() {
        this.grid.hideGroupedColumns = true;
    }

    public addTask(event: any) {
        this.addTaskForm.id = this.grid.data[this.grid.data.length - 1].id + 1;
        this.addTaskForm.status = "New";
        this.addTaskForm.estimation = null;
        this.addTaskForm.hours_spent = null;
        this.grid.addRow(this.addTaskForm);
        this.addTaskDialog.close();
    }

    public getStartedOn(dataItem: ITask): boolean {
        return !!dataItem.started_on;
    }

    public deleteTask(rowID) {
        this.grid.deleteRow(rowID);
    }

    public formatID(value: number): string {
        return "#" + value;
    }

    public undo() {
        this.grid.transactions.undo();
    }

    public redo() {
        this.grid.transactions.redo();
    }

    public openCommitDialog() {
        this.transactionsDialog.open();
        this.transactionsGrid.reflow();
    }

    public commit() {
        this.grid.transactions.commit(this.localData);
        this.transactionsDialog.close();
    }

    public cancel() {
        this.transactionsDialog.close();
    }

    public discard() {
        this.grid.transactions.clear();
        this.transactionsDialog.close();
    }

    public get undoEnabled(): boolean {
        return this.grid.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
        return this.grid.transactions.canRedo;
    }

    public get hasTransactions(): boolean {
        return this.grid.transactions.getAggregatedChanges(false).length > 0;
    }

    public stateFormatter(value) {
        return JSON.stringify(value);
    }

    public typeFormatter(value) {
        return value.toUpperCase();
    }

    public classFromType(type: string): string {
        return `transaction--${type.toLowerCase()}`;
    }

    public formatHours(value: number): string {
        return value ? value + "h" : "";
    }

    public onButtonAction(event: any) {
        this.editMode = event.index;
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
            case "status": {
                if (event.newValue === "Completed") {
                    this.grid.getRowByKey(event.rowID).rowData["isActive"] = false;
                }
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

export class MilestoneSortingStrategy extends DefaultSortingStrategy {
    protected compareObjects(obj1: object,
                             obj2: object,
                             key: string,
                             reverse: number,
                             ignoreCase: boolean,
                             valueResolver: (obj: any, key: string) => any) {

        const objA = valueResolver(obj1, key).split(" ");
        const objB = valueResolver(obj2, key).split(" ");

        const yearA = objA[1];
        const yearB = objB[1];

        const quarterA = objA[0].slice(-1);
        const quarterB = objB[0].slice(-1);

        const milestoneA = parseInt(yearA + quarterA, 10);
        const milestoneB = parseInt(yearB + quarterB, 10);

        return reverse * this.compareValues(milestoneA, milestoneB);
    }
}

export class ProgressSortingStrategy extends DefaultSortingStrategy {
    protected compareObjects(obj1: object,
                             obj2: object,
                             key: string,
                             reverse: number,
                             ignoreCase: boolean,
                             valueResolver: (obj: any, key: string) => any) {

        const progressA = calcProgress(obj1);
        const progressB = calcProgress(obj2);

        return reverse * this.compareValues(progressA, progressB);
    }
}

/**
 * Calculates task progress.
 */
export function calcProgress(task: ITask) {
    const progress = (task.hours_spent / task.estimation) * 100;
    return progress;
}
