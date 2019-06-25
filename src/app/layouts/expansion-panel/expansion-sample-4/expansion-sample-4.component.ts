import { AnimationReferenceMetadata } from "@angular/animations";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import {
    IgxExpansionPanelComponent,
    scaleInVerTop,
    scaleOutVerTop
} from "igniteui-angular";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-expansion-sample-4",
    styleUrls: ["./expansion-sample-4.component.scss"],
    templateUrl: "./expansion-sample-4.component.html"
})
export class ExpansionPanelSample4Component implements OnInit {
    @ViewChild(IgxExpansionPanelComponent, { static: true })
    public igxExpansionPanel: IgxExpansionPanelComponent;
    @ViewChild("button", { static: false }) public button: ElementRef;

    public animationSettings: {
        openAnimation: AnimationReferenceMetadata, closeAnimation: AnimationReferenceMetadata } = {
        closeAnimation: Object.assign(scaleOutVerTop, {
            options: {
                params: Object.assign(scaleOutVerTop.options.params, {
                    duration: "350ms",
                    endOpacity: 0.5,
                    fromScale: 1,
                    startOpacity: 1,
                    toScale: 0
                })
            }
        }),
        openAnimation:  Object.assign(scaleInVerTop, {
            options: {
                params: Object.assign(scaleInVerTop.options.params, {
                    duration: "250ms",
                    fromScale: 0,
                    startOpacity: 0.5
                })
            }
        })

    };
    public templatedIcon = false;
    public score: number;
    public data = [];
    public winningPlayer;
    public iconPosition = "left";
    private rounds = 5;

    constructor() {
    }
    public get currentScore(): { "Player 1": number, "Player 2": number} {
        return this.data.length === 0 ? [] : this.data.reduce((a, b) => {
            return {
                "Player 1": a["Player 1"] + b["Player 1"],
                "Player 2": a["Player 2"] + b["Player 2"]
            };
        });
    }

    public get getWinningScore(): number {
        const values = Object.keys(this.currentScore).map((e) => this.currentScore[e]);
        return Math.max(...values);
    }
    public get getWinningPlayer(): string {
        const currentScore = this.currentScore;
        return Object.keys(currentScore).sort((a, b) => currentScore[b] - currentScore[a])[0];
    }

    public ngOnInit() {
        this.generateScore();
    }

    public resetScore(event: Event) {
        this.data = [];
        event.stopPropagation();
        this.generateScore();
    }

    public collapsed() {
        return this.igxExpansionPanel && this.igxExpansionPanel.collapsed;
    }

    public handleCollapsed(event) {
        console.log(`I'm collapsing!`, event);
    }
    public handleExpanded(event) {
        console.log(`I'm expanding!`, event);
    }
    public onInteraction(event) {
        console.log(`Header's touched!`, event);
    }

    public templateIcon() {
        this.templatedIcon = !this.templatedIcon;
    }

    public toggleLeftRight() {
        this.iconPosition = this.iconPosition === "left" ? "right" : "left";
    }

    private generateScore(): void {
        for (let i = 0; i < this.rounds; i++) {
            this.data.push({
                "Game": `Game ${i + 1}`,
                "Player 1": Math.floor(Math.random() * 10) + 1,
                "Player 2": Math.floor(Math.random() * 10) + 1
            });
        }
    }
}
