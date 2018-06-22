import {
    Component,
    OnInit,
    ViewChild,
    Input,
    Pipe,
    PipeTransform
} from "@angular/core";
import {
    IgxChipsAreaComponent,
    IgxDropDownComponent,
    IgxInputDirective,
    IgxInputGroupModule
} from "igniteui-angular";
import { pipe } from "@angular/core/src/render3/pipe";

@Component({
    selector: "app-chip",
    styleUrls: ["./chip.component.scss"],
    templateUrl: "./chip.component.html"
})
export class ChipSampleComponent {
    public dropDownList = [
        {
            name: "Lisa Landers",
            id: "901-747-3428",
            photo: "assets/images/women/3.jpg",
            email: "lisalanders@gmail.com"
        },
        {
            name: "Lisa Spencer",
            id: "901-747-5555",
            photo: "assets/images/women/66.jpg",
            email: "lisaspencer@gmail.com"
        },
        {
            name: "Dorothy H. Spencer",
            id: "573-394-9254",
            photo: "assets/images/women/67.jpg",
            email: "dorothyspancer@gmail.com"
        },
        {
            name: "Dorothy H. May",
            id: "573-394-3245",
            photo: "assets/images/women/68.jpg",
            email: "dorotmay@gmail.com"
        },
        {
            name: "Dorothy Taylor",
            id: "573-394-33334",
            photo: "assets/images/women/69.jpg",
            email: "dorotaylor@gmail.com"
        },
        {
            name: "Stephanie May",
            id: "323-668-1482",
            photo: "assets/images/avatar/13.jpg",
            email: "stephaniemay@gmail.com"
        },
        {
            photo: "assets/images/avatar/14.jpg",
            name: "Marianne Taylor",
            id: "401-661-3742",
            email: "mariannetaylor@gmail.com"
        },
        {
            photo: "assets/images/avatar/15.jpg",
            name: "Tammie Alvarez",
            id: "662-374-2920",
            email: "tammiealvarez@gmail.com"
        },
        {
            photo: "assets/images/avatar/10.jpg",
            name: "Tammie Flores",
            id: "662-374-3333",
            email: "tammyflores@gmail.com"
        },
        {
            photo: "assets/images/avatar/16.jpg",
            name: "Charlotte Flores",
            id: "240-455-2267",
            email: "charlotteflores@gmail.com"
        },
        {
            photo: "assets/images/avatar/17.jpg",
            name: "Ward Riley",
            id: "724-742-0979",
            email: "wardriley@gmail.com"
        },
        {
            photo: "assets/images/avatar/34.jpg",
            name: "Ward Alvarez",
            id: "724-742-1323",
            email: "alvarezward@gmail.com"
        }
    ];

    public chipList = [
        {
            name: "Terrance Orta",
            id: "770-504-2217",
            photo: "assets/images/men/27.jpg",
            email: "terranceorta@gmail.com"
        },
        {
            name: "Richard Mahoney",
            id: "423-676-2869",
            photo: "assets/images/men/13.jpg",
            email: "richard@gmail.com"
        },
        {
            name: "Donna Price",
            id: "859-496-2817",
            photo: "assets/images/women/50.jpg",
            email: "donnaprice@gmail.com"
        }
    ];

    @ViewChild("chipsArea", { read: IgxChipsAreaComponent })
    public chipsArea: IgxChipsAreaComponent;

    @ViewChild("inputForm", { read: IgxInputDirective })
    public inputBox: IgxInputDirective;

    chipsOrderChanged(event) {
        const newChipList = [];
        for (let i = 0; i < event.chipsArray.length; i++) {
            const chipItem = this.chipList.filter(item => {
                return item.id === event.chipsArray[i].id;
            })[0];
            newChipList.push(chipItem);
        }
        this.chipList = newChipList;
        event.isValid = true;
    }

    chipRemoved(event) {
        this.chipList = this.chipList.filter(item => {
            return item.id !== event.owner.id;
        });
        this.chipsArea.cdr.detectChanges();
    }

    selectChip(chipId) {
        const chipToSelect = this.chipsArea.chipsList.toArray().find(chip => {
            return chip.id === chipId;
        });
        chipToSelect.selected = true;
        this.igxDropDown.close();
    }

    onChipsSelected(event) {
        console.log(event.newSelection);
    }

    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;

    public toggleDropDown(ev) {
        if (this.inputBox.value != null) {
            this.igxDropDown.open();
            this.igxDropDown.allowItemsFocus = false;
            this.inputBox.focus;
        }
        if (ev.keyCode == "40") {
            if(this.igxDropDown.collapsed){}
            else{
            this.igxDropDown.allowItemsFocus = true;
            this.igxDropDown.element.firstElementChild
                .querySelectorAll("igx-drop-down-item")[0]
                .focus();
            }
        }
    }

    clickedOutside(e) {
        this.igxDropDown.close();
    }

    addEmail() {
        if (this.inputBox.valid == 1) {
            let i;
            let exists = 0;

            if (this.chipList.find((val) => val.email === this.inputBox.value.toLowerCase()) !== undefined) {
                return;
            }
            for (i = 0; i < this.dropDownList.length; i++) {
                if (
                    this.inputBox.value.toLowerCase() ==
                    this.dropDownList[i].email
                ) {
                    this.chipList.push({
                        name: this.dropDownList[i].name,
                        id: this.dropDownList[i].id,
                        photo: this.dropDownList[i].photo,
                        email: this.dropDownList[i].email
                    });
                    exists = 1;
                    this.igxDropDown.close();
                    this.inputBox.value = "";
                }
            }
            if (exists == 0) {
                this.chipList.push({
                    name: this.inputBox.value,
                    id: this.inputBox.value,
                    photo: "assets/images/list/empty.png",
                    email: this.inputBox.value
                });
            }
            this.igxDropDown.close();
            this.inputBox.focus();
            this.inputBox.value = "";
        }
    }

    chipMovingEnded() {}

    itemSelection(ev) {
        if (this.chipList.find((val) => val.email === this.inputBox.value.toLowerCase()) !== undefined) {
            return;
        }
        let i;
        for (i = 0; i < this.dropDownList.length; i++) {
            if (
                ev.newSelection.elementRef.nativeElement.textContent ==
                this.dropDownList[i].name
            ) {
                this.chipList.push({
                    name: this.dropDownList[i].name,
                    id: this.dropDownList[i].id,
                    photo: this.dropDownList[i].photo,
                    email: this.dropDownList[i].email
                });
                this.igxDropDown.close();
                this.inputBox.value = "";
            }
        }
    }
}

@Pipe({ name: "filter" })
export class EmailFilterPipe implements PipeTransform {
    transform(item: any, inputVal) {
        return item.filter(e => e.email.startsWith(inputVal.toLowerCase()));
    }
}
