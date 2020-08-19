import {
    Component,
    Inject,
    OnInit,
    Pipe,
    PipeTransform,
    Renderer2
} from "@angular/core";
import * as fileSaver from "file-saver";
import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { IgxIconService, ISelectionEventArgs } from "igniteui-angular";

import {
    finance,
    health,
    programming,
    logos,
    socialMedia,
    IconCategory,
    IMXIcon
} from "@igniteui/material-icons-extended";

interface ICategoryOption {
    text: string;
    category?: IconCategory | "all";
}

@Component({
    selector: "app-material-icons-extended",
    templateUrl: "./material-icons-extended.component.html",
    styleUrls: ["./material-icons-extended.component.scss"]
})
export class MaterialIconsExtendedComponent implements OnInit {
    constructor(
        private iconService: IgxIconService,
        private http: HttpClient,
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2
    ) {}

    public categories: ICategoryOption[] = [
        { text: "All", category: "all" },
        { text: "Health", category: "health" },
        { text: "Programming", category: "programming" },
        { text: "Finance", category: "finance" },
        { text: "Logos", category: "logos" },
        { text: "Social Media", category: "social media" }
    ];

    public allIcons = [
        ...health,
        ...programming,
        ...finance,
        ...logos,
        ...socialMedia
    ];

    public selectedCategory: IconCategory | "all" = "all";

    handleSelection(event: ISelectionEventArgs) {
        this.selectedCategory = event.newSelection.value;
    }

    resetFilter() {
        this.selectedCategory = "all";
    }

    addIcons() {
        for (const icon of this.allIcons) {
            this.iconService.addSvgIcon(icon.name, icon.value, "imx-icons");
        }
    }

    downloadFile(icon: string) {
        this.http.get(icon, { responseType: "text" }).subscribe(
            (res) => {
                const blob: any = new Blob([res], { type: "image/svg+xml" });
                fileSaver.saveAs(blob);
            },
            (err) => console.log(err)
        );
    }

    copyValue(event: Event, val: string) {
        const target = event.currentTarget as HTMLButtonElement;
        const element = target.childNodes[0] as HTMLElement;
        const tempField = this.renderer.createElement("textarea");

        this.renderer.setStyle(tempField, "position", "fixed");
        this.renderer.setStyle(tempField, "opacity", "0");
        this.renderer.setProperty(tempField, "value", val);
        this.renderer.appendChild(this.document.body, tempField);

        tempField.focus();
        tempField.select();

        this.document.execCommand("copy");
        this.renderer.removeChild(this.document.body, tempField);

        if (element.innerText !== "done") {
            this.renderer.setProperty(element, 'innerText', 'done');
            this.renderer.addClass(target, "sample__grid-item-clipboard--success");

            setTimeout(() => {
                this.renderer.setProperty(element, 'innerText', 'content_copy');
                this.renderer.removeClass(target, "sample__grid-item-clipboard--success");
            }, 1500);
        }
    }

    ngOnInit() {
        this.addIcons();
    }
}

interface IIconsGroup {
    category: string;
    icons: IMXIcon[];
}

@Pipe({
    name: "categoriesFilter"
})
export class CategoriesFilterPipe implements PipeTransform {
    sortIcons(acc: IIconsGroup[], icon: IMXIcon): IIconsGroup[] {
        for (const category of icon.categories) {
            const index = acc.findIndex((group) => group.category === category);

            if (index !== -1) {
                acc[index].icons.push(icon);
            } else {
                acc.push({
                    category,
                    icons: [icon]
                });
            }
        }
        return acc;
    }

    transform(icons: IMXIcon[], category: IconCategory | "all"): IIconsGroup[] {
        if (category === "all") {
            return icons.reduce(this.sortIcons, []);
        } else {
            return icons
                .filter((icon) => {
                    const index = icon.categories.indexOf(
                        category as IconCategory
                    );

                    if (index !== -1) {
                        return category as IconCategory;
                    }
                })
                .reduce(this.sortIcons, []);
        }
    }
}

@Pipe({
    name: "filterByName"
})
export class FilterByName implements PipeTransform {
    transform(icons: IMXIcon[], name: string): IMXIcon[] {
        return icons.filter((icon) => {
            const index = icon.name.indexOf(name);
            if (index !== -1) {
                return icon.name;
            }
        });
    }
}
