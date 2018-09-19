import { Pipe, PipeTransform } from '@angular/core';

//  https://stackoverflow.com/a/35750252/3516721
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
    transform(value, args:string[]) : any {
        let keys = [];
        for (var enumMember in value) {
            let enumKey = parseInt(enumMember, 10);
            if (!isNaN(enumKey)) {
                keys.push({key: enumKey, value: value[enumMember]});
            } 
        }
        return keys;
    }
}
