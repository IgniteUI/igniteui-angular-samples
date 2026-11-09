import { Component, OnInit } from '@angular/core';
import { IgxFilterOptions, IgxFilterPipe, IgxForOfDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { femaleFNames, lastName, maleFNames, middleNames } from './names';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-igx-for-list',
    styleUrls: ['./igxFor.component.scss'],
    templateUrl: './igxFor.component.html',
    imports: [IgxInputGroupComponent, FormsModule, IgxInputDirective, IgxPrefixDirective, IgxIconComponent, IgxSuffixDirective, IgxListComponent, IgxListItemComponent, IgxForOfDirective, IgxRippleDirective, IgxAvatarComponent, IgxListThumbnailDirective, IgxListLineTitleDirective, IgxListActionDirective, IgxFilterPipe]
})
export class IgxForComponent implements OnInit {
    public search: string;
    public data = [];
    get fo() {
        const _fo = new IgxFilterOptions();
        _fo.key = 'name';
        _fo.inputValue = this.search;
        return _fo;
    }
    constructor() { }
    public ngOnInit() {
        const data = [];
        for (let i = 0; i < 100000; i++) {
            const item = this.generatePerson(i);
            data.push(item);
        }
        this.data = data;
    }
    private generatePerson(index) {
        const item = new Person();
        item.key = index;
        const gender = index % 2 === 0 ? 'M' : 'F';
        item.name = this.generateName(gender);
        item.avatar = 'assets/images/' +
            (gender === 'M' ? 'men' : 'women') +
            '/' + Math.floor((Math.random() * 100)) + '.jpg';
        item.favorite = Math.floor((Math.random() * 3)) % 3 === 0;
        return item;
    }
    private generateName(gender): string {
        let name = '';
        const fNames = gender === 'M' ? maleFNames : femaleFNames;
        name += fNames[Math.floor(Math.random() * fNames.length)] + ' ';
        name += middleNames[Math.floor(Math.random() * middleNames.length)] + ' ';
        name += lastName[Math.floor(Math.random() * lastName.length)];
        return name;
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    public toggleFavorite(item: any) {
        item.favorite = !item.favorite;
    }
}

export class Person {
    public key: number;
    public name: string;
    public favorite: boolean;
    public avatar: string;
}
