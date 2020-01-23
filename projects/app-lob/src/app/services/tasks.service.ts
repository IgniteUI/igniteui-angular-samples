import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { TASKS_DATA } from "./tasksData";

interface IServiceResponse {
    results: any[];
}

@Injectable()
export class TasksDataService {
    private rndUsr: any[];

    constructor() {
    }

    public getData(): Observable<any[]> {
        return of(TASKS_DATA.map(rec => this.parseDate(rec)));
    }

    private parseDate(obj) {
        const record = {};

        obj["started_on"] = obj["started_on"] ? new Date(obj.started_on) : null;
        obj["deadline"] = obj["deadline"] ? new Date(obj.deadline) : null;
        return obj;
    }
}
