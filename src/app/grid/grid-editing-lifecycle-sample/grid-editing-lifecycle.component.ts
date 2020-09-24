import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { contains } from '@igniteui/material-icons-extended';
import { DATA } from "../../data/nwindData";

@Component({
    selector: "grid-editing-lifecycle",
    templateUrl: "grid-editing-lifecycle.component.html",
    styleUrls: ["grid-editing-lifecycle.component.scss"]
})
export class GridEditingLifecycleComponent {
    public $rowEditEnter = false;
    public $cellEditEnter = false;
    public $cellEdit = false
    public $cellEditExit = false
    public $rowEdit = false
    public $rowEditExit = false
    public data;

    @ViewChild('logger')
    public logger: ElementRef;

    public constructor(private renderer: Renderer2) {
        this.data = DATA;
    }

    public rowEditEnter(evt) {
        evt.cancel = this.$rowEditEnter;
        this.logAnEvent(`=> 'rowEditEnter'`, evt.cancel);
    }
    public cellEditEnter(evt) {
        evt.cancel = this.$cellEditEnter;
        this.logAnEvent(`=> 'cellEditEnter'`, evt.cancel);
    }
    public cellEdit(evt) {
        evt.cancel = this.$cellEdit;
        this.logAnEvent(`=> 'cellEdit'`, evt.cancel);
    }
    public cellEditDone(evt) {
        this.logAnEvent(`=> 'cellEditDone'`);
    }
    public cellEditExit(evt) {
        evt.cancel = this.$cellEditExit;
        this.logAnEvent(`=> 'cellEditExit'`, evt.cancel);
    }
    public rowEdit(evt) {
        evt.cancel = this.$rowEdit;
        this.logAnEvent(`=> 'rowEdit'`, evt.cancel);
    }
    public rowEditDone(evt) {
        this.logAnEvent(`=> 'rowEditDone'`);
    }
    public rowEditExit(evt) {
        evt.cancel = this.$rowEditExit;
        this.logAnEvent(`=> 'rowEditExit'`, evt.cancel);
    }

    private logAnEvent(msg: string, canceled?: boolean) {
        const createElem = this.renderer.createElement('p');

        if (canceled) {
            msg = msg.concat(': have been canceled ');
        }

        const text = this.renderer.createText(msg);
        this.renderer.appendChild(createElem, text);
        const container = this.logger.nativeElement;
        this.renderer.insertBefore(container, createElem, container.children[0]);
    }
}
