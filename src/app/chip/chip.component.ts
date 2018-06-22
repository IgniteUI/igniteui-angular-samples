import {
    Component,
    Pipe,
    PipeTransform,
    ViewChild
} from "@angular/core";
import {
    IgxChipsAreaComponent,
    IgxDropDownComponent,
    IgxInputDirective
} from "igniteui-angular";

@Component({
    selector: "app-chip",
    styleUrls: ["./chip.component.scss"],
    templateUrl: "./chip.component.html"
})
export class ChipSampleComponent {
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;
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
            photo: "assets/images/avatar/34.jpg"
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

    @ViewChild("chipsArea", { read: IgxChipsAreaComponent })
    public chipsArea: IgxChipsAreaComponent;

    @ViewChild("inputForm", { read: IgxInputDirective })
    public inputBox: IgxInputDirective;

    public chipsOrderChanged(event) {
        const newChipList = [];
        for (const chip of this.chipList) {
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
            this.igxDropDown.open();
            this.igxDropDown.allowItemsFocus = false;
            this.inputBox.focus();
        }
        if (ev.keyCode === "40") {
            if (this.igxDropDown.collapsed) {
                return;
            } else {
            this.igxDropDown.allowItemsFocus = true;
            this.igxDropDown.element.firstElementChild
                .querySelectorAll("igx-drop-down-item")[0]
                .focus();
            }
        }
    }

    public clickedOutside(e) {
        this.igxDropDown.close();
    }

    public addEmail() {
        if (this.inputBox.valid === 1) {
            let i;
            let exists = 0;

            if (this.chipList.find((val) => val.email === this.inputBox.value.toLowerCase()) !== undefined) {
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

    public itemSelection(ev) {
        if (this.chipList.find((val) => val.email === this.inputBox.value.toLowerCase()) !== undefined) {
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
}

@Pipe({ name: "filter" })
export class EmailFilterPipe implements PipeTransform {
    public transform(item: any, inputVal) {
        return item.filter((e) => e.email.startsWith(inputVal.toLowerCase()));
    }
}
