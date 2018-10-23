import { ChangeDetectorRef, Component, ElementRef, Pipe, PipeTransform, ViewChild } from "@angular/core";
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
        { id: "All Users", text: "All Users" },
        { id: "My Team", text: "My Team" },
        { id: "USA Team", text: "USA Team" },
        { id: "Engineering Services", text: "Engineering Services" }
    ];

    public toastPosition: IgxToastPosition = IgxToastPosition.Middle;

    @ViewChild("chipsAreaCc", { read: IgxChipsAreaComponent })
    public chipsAreaCc: IgxChipsAreaComponent;

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

    private dropDownOpened = false;

    constructor(public cdr: ChangeDetectorRef) { }

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
        this.cdr.detectChanges();
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

    public toggleDropDown(ev) {
        if (!this.dropDownOpened && this.inputBox.value !== null && ev.key.length === 1) {
            this.igxDropDown.open({
                modal: false,
                positionStrategy: new ConnectedPositioningStrategy({
                    target: this.inputBox.nativeElement
                })
            });
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

    public openDropDown() {
        if (this.dropDownOpened) {
            return;
        }

        this.igxDropDown.open({
            modal: false,
            positionStrategy: new ConnectedPositioningStrategy({
                target: this.inputGroup.element.nativeElement
            })
        });
    }

    public onDropDownOpen() {
        this.dropDownOpened = true;
    }

    public onDropDownClose() {
        this.dropDownOpened = false;
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
        this.cdr.detectChanges();
    }

    public selectChipCc(chipId) {
        const chipToSelect = this.chipsAreaCc.chipsList.toArray().find((chip) => {
            return chip.id === chipId;
        });
        if (chipToSelect.selected === true) {
            this.ccGroup.value = this.ccGroup.value.replace(chipToSelect.id + ", ", "");
        } else {
            this.ccGroup.value += chipToSelect.id + ", ";
        }
    }

    public chipRemovedCc(event) {
        this.tagList = this.tagList.filter((item) => {
            return item.id !== event.owner.id;
        });
        this.chipsAreaCc.cdr.detectChanges();
    }

    public clear() {
        this.ccGroup.value = "";
        this.textArea.nativeElement.value = "";
        this.chipList = [];

        this.chipsAreaCc.chipsList.forEach((chip) => {
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
