import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "filter" })
export class EmailFilterPipe implements PipeTransform {
    public transform(item: any, inputVal) {
        return item.filter((e) => e.email.startsWith(inputVal.toLowerCase()));
    }
}
