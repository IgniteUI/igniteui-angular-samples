import { Component, ElementRef, Pipe, PipeTransform, ViewChild } from "@angular/core";
import {
    ConnectedPositioningStrategy,
    IgxChipsAreaComponent,
    IgxDropDownComponent,
    IgxInputDirective,
    IgxInputGroupComponent,
    IgxToastPosition
} from "igniteui-angular";

@Component({
    selector: "app-chip",
    styleUrls: ["./chip.component.scss"],
    templateUrl: "./chip.component.html"
})

export class ChipSampleComponent {
    public dropDownList = [
        {
            email: "lisalanders@gmail.com",
            id: "901-747-3428",
            name: "Lisa Landers",
            photo: "assets/images/women/3.jpg"
        },
        {
            email: "lisaspencer@gmail.com",
            id: "901-747-5555",
            name: "Lisa Spencer",
            photo: "assets/images/women/66.jpg"
        },
        {
            email: "dorothyspancer@gmail.com",
            id: "573-394-9254",
            name: "Dorothy H. Spencer",
            photo: "assets/images/women/67.jpg"
        },
        {
            email: "dorotmay@gmail.com",
            id: "573-394-3245",
            name: "Dorothy H. May",
            photo: "assets/images/women/68.jpg"
        },
        {
            email: "dorotaylor@gmail.com",
            id: "573-394-33334",
            name: "Dorothy Taylor",
            photo: "assets/images/women/69.jpg"
        },
        {
            email: "stephaniemay@gmail.com",
            id: "323-668-1482",
            name: "Stephanie May",
            photo: "assets/images/avatar/13.jpg"
        },
        {
            email: "mariannetaylor@gmail.com",
            id: "401-661-3742",
            name: "Marianne Taylor",
            photo: "assets/images/avatar/14.jpg"
        },
        {
            email: "tammiealvarez@gmail.com",
            id: "662-374-2920",
            name: "Tammie Alvarez",
            photo: "assets/images/avatar/15.jpg"
        },
        {
            email: "tammyflores@gmail.com",
            id: "662-374-3333",
            name: "Tammie Flores",
            photo: "assets/images/avatar/10.jpg"
        },
        {
            email: "charlotteflores@gmail.com",
            id: "240-455-2267",
            name: "Charlotte Flores",
            photo: "assets/images/avatar/16.jpg"
        },
        {
            email: "wardriley@gmail.com",
            id: "724-742-0979",
            name: "Ward Riley",
            photo: "assets/images/avatar/17.jpg"
        },
        {
            email: "alvarezward@gmail.com",
            id: "724-742-1323",
            name: "Ward Alvarez",
            photo: "assets/images/avatar/22.jpg"
        }
    ];

    public chipList = [
        {
            email: "terranceorta@gmail.com",
            id: "770-504-2217",
            name: "Terrance Orta",
            photo: "assets/images/men/27.jpg"
        },
        {
            email: "richard@gmail.com",
            id: "423-676-2869",
            name: "Richard Mahoney",
            photo: "assets/images/men/13.jpg"
        },
        {
            email: "donnaprice@gmail.com",
            id: "859-496-2817",
            name: "Donna Price",
            photo: "assets/images/women/50.jpg"
        }
    ];

    public tagList = [
        { id: "Engineering Services", text: "Engineering Services" },
        { id: "All Users", text: "All Users" },
        { id: "My Team", text: "My Team" },
        { id: "USA Team", text: "USA Team" }
    ];

    public toastPosition: IgxToastPosition = IgxToastPosition.Middle;

    @ViewChild("chipsArea2", { read: IgxChipsAreaComponent })
    public chipsArea2: IgxChipsAreaComponent;

    @ViewChild("ccGroup", { read: IgxInputDirective })
    public ccGroup: IgxInputDirective;

    @ViewChild("textArea", { read: ElementRef})
    public textArea: ElementRef;

    @ViewChild("chipsArea", { read: IgxChipsAreaComponent })
    public chipsArea: IgxChipsAreaComponent;

    @ViewChild("inputForm", { read: IgxInputDirective })
    public inputBox: IgxInputDirective;

    @ViewChild(IgxDropDownComponent)
    public igxDropDown: IgxDropDownComponent;

    @ViewChild("inputGroup", {read: IgxInputGroupComponent})
    public inputGroup: IgxInputGroupComponent;

    public chipsOrderChanged(event) {
        const newChipList = [];
        for (const chip of event.chipsArray) {
            const chipItem = this.chipList.filter((item) => {
                return item.id === chip.id;
            })[0];
            newChipList.push(chipItem);
        }
        this.chipList = newChipList;
        event.isValid = true;
    }

    public chipRemoved(event) {
        this.chipList = this.chipList.filter((item) => {
            return item.id !== event.owner.id;
        });
        this.chipsArea.cdr.detectChanges();
    }

    public selectChip(chipId) {
        const chipToSelect = this.chipsArea.chipsList.toArray().find((chip) => {
            return chip.id === chipId;
        });
        chipToSelect.selected = true;
        this.igxDropDown.close();
    }

    public onChipsSelected(event) {
        console.log(event.newSelection);
    }

    public toggleDropDown(ev) {
        if (this.inputBox.value !== null) {
            this.igxDropDown.open({
                modal: false,
                positionStrategy: new ConnectedPositioningStrategy({
                    target: this.inputBox.nativeElement
                })
            });
            this.igxDropDown.allowItemsFocus = false;
            this.inputBox.focus();
        }
    }

    public clickedOutside(e) {
        this.igxDropDown.close();
    }

    public addEmail() {
        if (this.inputBox.valid === 1) {
            let i;
            let exists = 0;

            if (
                this.chipList.find(
                    (val) => val.email === this.inputBox.value.toLowerCase()
                ) !== undefined
            ) {
                return;
            }
            for (i = 0; i < this.dropDownList.length; i++) {
                if (
                    this.inputBox.value.toLowerCase() ===
                    this.dropDownList[i].email
                ) {
                    this.chipList.push({
                        email: this.dropDownList[i].email,
                        id: this.dropDownList[i].id,
                        name: this.dropDownList[i].name,
                        photo: this.dropDownList[i].photo
                    });
                    exists = 1;
                    this.igxDropDown.close();
                    this.inputBox.value = "";
                }
            }
            if (exists === 0) {
                this.chipList.push({
                    email: this.inputBox.value,
                    id: this.inputBox.value,
                    name: this.inputBox.value,
                    photo: "assets/images/list/empty.png"
                });
            }
            this.igxDropDown.close();
            this.inputBox.focus();
            this.inputBox.value = "";
        }
    }

    public chipMovingEnded() {}

    public openDropDown() {
        this.igxDropDown.open({
            modal: false,
            positionStrategy: new ConnectedPositioningStrategy({
                target: this.inputGroup.element.nativeElement
            })
        });
    }

    public itemSelection(ev) {
        if (
            this.chipList.find(
                (val) => val.name === ev.newSelection.elementRef.nativeElement.textContent
            ) !== undefined
        ) {
            return;
        }
        let i;
        for (i = 0; i < this.dropDownList.length; i++) {
            if (
                ev.newSelection.elementRef.nativeElement.textContent ===
                this.dropDownList[i].name
            ) {
                this.chipList.push({
                    email: this.dropDownList[i].email,
                    id: this.dropDownList[i].id,
                    name: this.dropDownList[i].name,
                    photo: this.dropDownList[i].photo
                });
                this.igxDropDown.close();
                this.inputBox.value = "";
            }
        }
    }

    /**
     * Tags sample
     */

    public chipsOrderChangedCc(event) {
        const newTagList = [];
        for (const chip of event.chipsArray) {
            const chipItem = this.tagList.filter((item) => {
                return item.id === chip.id;
            })[0];
            newTagList.push(chipItem);
        }
        this.tagList = newTagList;
        event.isValid = true;
    }

    public selectChipCc(chipId) {
        const chipToSelect = this.chipsArea2.chipsList.toArray().find((chip) => {
            return chip.id === chipId;
        });
        if (chipToSelect.selected === true) {
            chipToSelect.selected = false;
            this.ccGroup.value = this.ccGroup.value.replace(chipToSelect.id + ", ", "");
        } else {
            chipToSelect.selected = true;
            this.ccGroup.value += chipToSelect.id + ", ";
        }
    }

    public chipRemovedCc(event) {
        this.tagList = this.tagList.filter((item) => {
            return item.id !== event.owner.id;
        });
        this.chipsArea2.cdr.detectChanges();
    }

    public clear() {
        this.ccGroup.value = "";
        this.textArea.nativeElement.value = "";
        this.chipList = [];

        this.chipsArea2.chipsList.forEach((chip) => {
            chip.selected = false;
        });

    }

    public showToast(toast, position) {
        switch (position) {
            case "middle":
                this.toastPosition = IgxToastPosition.Middle;
                break;
            case "top":
                this.toastPosition = IgxToastPosition.Top;
                break;
            default:
                this.toastPosition = IgxToastPosition.Bottom;
        }

        toast.show();
    }
}
@Pipe({ name: "filter" })
export class EmailFilterPipe implements PipeTransform {
    public transform(item: any, inputVal) {
        return item.filter((e) => e.email.startsWith(inputVal.toLowerCase()));
    }
}
