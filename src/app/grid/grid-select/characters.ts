/* eslint-disable @typescript-eslint/naming-convention */
export class Character {
    get Name() {
        return this.name;
    }

    set Name(val) {
        this.name = val;
    }

    get Class() {
        return this.class;
    }

    set Class(val) {
        this.class = val;
    }

    get Age() {
        return this.age;
    }

    set Age(val) {
        this.age = val;
    }

    get Race() {
        return this.race;
    }

    set Race(val) {
        this.race = val;
    }

    get Alignment() {
        return this.alignment;
    }

    set Alignment(val) {
        this.alignment = val;
    }

    private name: string;
    private class: string;
    private age: number;
    private alignment: string;
    private race: string;

    constructor() {
        this.name = '';
        this.class = '';
        this.age = 0;
        this.alignment = '';
        this.race = '';
    }

}
