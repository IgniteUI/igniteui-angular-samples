import { Pipe, PipeTransform } from "@angular/core";
 //  https://stackoverflow.com/a/35750252/3516721
@Pipe({name: "keys"})
export class KeysPipe implements PipeTransform {
    public transform(value: any, args: string[]): any {
        const keys = [];
        for (const enumMember of Object.keys(value)) {
            const enumKey = parseInt(enumMember, 10);
            if (!isNaN(enumKey)) {
                keys.push({key: enumKey, value: value[enumMember]});
            }
        }
        return keys;
    }
}
