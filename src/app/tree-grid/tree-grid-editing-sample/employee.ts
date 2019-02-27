export class Employee {

    get Age() {
        return this.age;
    }
    set Age(val) {
        this.age = val;
    }

    get HireDate() {
        return this.hireDate;
    }
    set HireDate(val) {
        this.hireDate = val;
    }

    get ID() {
        return this.id;
    }
    set ID(val) {
        this.id = val;
    }

    get Name() {
        return this.name;
    }
    set Name(val) {
        this.name = val;
    }

    get OnPTO() {
        return this.onPTO;
    }
    set OnPTO(val) {
        this.onPTO = val;
    }

    get ParentID() {
        return this.parentID;
    }
    set ParentID(val) {
        this.parentID = val;
    }

    get Title() {
        return this.title;
    }
    set Title(val) {
        this.title = val;
    }

    private age: number;
    private hireDate: Date;
    private id: number;
    private name: string;
    private onPTO: boolean;
    private parentID: number;
    private title: string;

    constructor() {
        this.age = 21;
        this.hireDate = new Date();
        this.id = 0;
        this.name = "";
        this.onPTO = false;
        this.parentID = -1;
        this.title = "";
    }
}
