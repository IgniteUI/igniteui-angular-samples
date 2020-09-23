import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { DATA } from "../../data/nwindData";

@Component({
    selector: "grid-editing-lifecycle",
    templateUrl: "grid-editing-lifecycle.component.html",
    styleUrls: ["grid-editing-lifecycle.component.scss"]
})
export class GridEditingLifecycleComponent implements OnInit {
    public $rowEditEnter = false;
    public $cellEditEnter = false;
    public $cellEdit = false
    public $cellEditExit = false
    public $rowEdit = false
    public $rowEditExit = false
    public loggerHeader = 'test';
    public data;

    @ViewChild('logger')
    public logger: ElementRef;

    public constructor(private renderer: Renderer2) {

    }

    public ngOnInit() {
        this.data = DATA;
    }

    public rowEditEnter(evt) {
        evt.cancel = this.$rowEditEnter;
        // debugger;
        const createElem = this.renderer.createElement('p');
        const text = this.renderer.createText('rowEditEnter');
        this.renderer.appendChild(createElem, text);
        const continer = this.logger.nativeElement;
        this.renderer.appendChild(continer, createElem);
    }
    public cellEditEnter(evt) {
        evt.cancel = this.$cellEditEnter;
    }
    public cellEdit(evt) {
        evt.cancel = this.$cellEdit;
    }
    public cellEditDone(evt) {
        // evt.cancel = this.$cellEditDone;
    }
    public cellEditExit(evt) {
        evt.cancel = this.$cellEditExit;
    }
    public rowEdit(evt) {
        evt.cancel = this.$rowEdit;
    }
    public rowEditDone(evt) {
        // evt.cancel = this.$rowEdit;
    }
    public rowEditExit(evt) {
        evt.cancel = this.$rowEditExit;
    }
}