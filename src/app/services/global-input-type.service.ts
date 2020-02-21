import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class GlobalInputTypeService {
    public typeName: Observable<string>;
    private _typeName: BehaviorSubject<string>;

    constructor() {
        this._typeName = new BehaviorSubject(null);
        this.typeName = this._typeName.asObservable();
    }
    public setType(type: string) {
        this._typeName.next(type);
    }

    }
