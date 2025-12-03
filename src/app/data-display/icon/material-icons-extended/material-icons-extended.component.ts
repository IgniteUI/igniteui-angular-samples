/* eslint-disable @typescript-eslint/member-ordering */
import {
    Component,
    OnInit,
    Pipe,
    PipeTransform,
    Renderer2,
    forwardRef,
    inject
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import fileSaver from 'file-saver';
import Fuse from 'fuse.js';
import { Subject, combineLatest, BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';

import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { ISelectionEventArgs } from 'igniteui-angular/drop-down';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import {
    IgxInputDirective,
    IgxInputGroupComponent,
    IgxLabelDirective,
    IgxPrefixDirective,
    IgxSuffixDirective
} from 'igniteui-angular/input-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';

import {
    all as imxIcons,
    IconCategory,
    IMXIcon
} from '@igniteui/material-icons-extended';

interface ICategoryOption {
    text: string;
    category?: IconCategory | 'all';
}

@Component({
    selector: 'app-material-icons-extended',
    templateUrl: './material-icons-extended.component.html',
    styleUrls: ['./material-icons-extended.component.scss'],
    imports: [
        AsyncPipe,
        IgxSelectComponent,
        IgxLabelDirective,
        IgxSelectItemComponent,
        IgxInputGroupComponent,
        IgxInputDirective,
        IgxPrefixDirective,
        IgxIconComponent,
        IgxSuffixDirective,
        IgxButtonDirective,
        forwardRef(() => CategoriesFilterPipe), forwardRef(() => FilterByName)
    ]
})
export class MaterialIconsExtendedComponent implements OnInit {
    private iconService = inject(IgxIconService);
    private renderer = inject(Renderer2);

    // Search with debounce
    private searchInput$ = new Subject<string>();
    private categorySubject$ = new BehaviorSubject<IconCategory | 'all'>('all');

    private searchTerm$ = this.searchInput$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        startWith('')
    );

    // Combine search and category filters
    public filteredResults$: Observable<IIconsGroup[]> = combineLatest([
        this.searchTerm$,
        this.categorySubject$
    ]).pipe(
        map(([searchTerm, category]) => {
            const filterByNamePipe = new FilterByName();
            const categoriesPipe = new CategoriesFilterPipe();

            const filtered = filterByNamePipe.transform(this.allIcons, searchTerm);
            return categoriesPipe.transform(filtered, category);
        })
    );

    public categories: ICategoryOption[] = [
        {
            text: 'All',
            category: 'all'
        }
    ];

    onSearchInput(value: string) {
        this.searchInput$.next(value);
    }

    clearSearch() {
        this.searchInput$.next('');
    }

    public setCategories() {
        const categories = IconCategory.values().map(
            (category) =>
            ({
                text: category
                    .split(' ')
                    .map((w) => w.replace(/^\w/, (c) => c.toUpperCase()))
                    .join(' '),
                category
            } as ICategoryOption)
        );

        this.categories = [...this.categories, ...categories];
    }

    public allIcons = imxIcons;
    public selectedCategory: IconCategory | 'all' = 'all';
    
    // Floating download button
    public hoveredIcon: IMXIcon | null = null;

    onIconMouseEnter(icon: IMXIcon) {
        this.hoveredIcon = icon;
    }

    onIconMouseLeave() {
        this.hoveredIcon = null;
    }

    handleSelection(event: ISelectionEventArgs) {
        this.selectedCategory = event.newSelection.value;
        this.categorySubject$.next(event.newSelection.value);
    }

    resetFilter() {
        this.selectedCategory = 'all';
        this.categorySubject$.next('all');
    }

    trackByIcon(_index: number, icon: IMXIcon): string {
        return icon.name;
    }

    trackByCategory(_index: number, group: IIconsGroup): string {
        return group.category;
    }

    addIcons() {
        for (const icon of imxIcons) {
            this.iconService.addSvgIconFromText(
                icon.name,
                icon.value,
                'imx-icons'
            );
        }
    }

    downloadFile(icon: IMXIcon) {
        const blob: any = new Blob([icon.value], { type: 'image/svg+xml' });
        fileSaver.saveAs(blob, icon.name);
    }

    async copyValue(event: Event, val: string) {
        const target = event.currentTarget as HTMLButtonElement;
        const element = target.childNodes[0] as HTMLElement;

        try {
            await navigator.clipboard.writeText(val);

            if (element.innerText !== 'done') {
                this.renderer.setProperty(element, 'innerText', 'done');
                this.renderer.addClass(
                    target,
                    'sample__grid-item-clipboard--success'
                );

                setTimeout(() => {
                    this.renderer.setProperty(element, 'innerText', 'content_copy');
                    this.renderer.removeClass(
                        target,
                        'sample__grid-item-clipboard--success'
                    );
                }, 1500);
            }
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

    ngOnInit() {
        this.setCategories();
        this.addIcons();
    }
}

interface IIconsGroup {
    category: string;
    icons: IMXIcon[];
}

@Pipe({
    name: 'categoriesFilter',
    pure: true
})
export class CategoriesFilterPipe implements PipeTransform {
    sortIcons(acc: IIconsGroup[], icon: IMXIcon): IIconsGroup[] {
        for (const category of icon.categories) {
            const index = acc.findIndex((group) => group.category === category);

            if (index !== -1) {
                const exists = acc[index].icons.some(existingIcon => existingIcon.name === icon.name);

                if (!exists) {
                    acc[index].icons.push(icon);
                }
            } else {
                acc.push({
                    category,
                    icons: [icon]
                });
            }
        }
        return acc;
    }

    transform(icons: IMXIcon[], category: IconCategory | 'all'): IIconsGroup[] {
        if (category === 'all') {
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
    name: 'filterByName',
    pure: true
})
export class FilterByName implements PipeTransform {
    private fuse: Fuse<IMXIcon> | null = null;
    private lastCollection: IMXIcon[] = [];

    transform(icons: IMXIcon[], keyword: string): IMXIcon[] {
        if (!keyword || keyword.trim() === '') {
            return icons;
        }

        // Initialize Fuse only if collection changed
        if (this.lastCollection !== icons) {
            this.fuse = new Fuse(icons, {
                keys: [
                    { name: 'name', weight: 0.7 },
                    { name: 'keywords', weight: 0.3 }
                ],
                threshold: 0.3,
                distance: 100,
                ignoreLocation: true,
                minMatchCharLength: 1
            });
            this.lastCollection = icons;
        }

        const results = this.fuse!.search(keyword.toLowerCase());
        return results.map(result => result.item);
    }
}
