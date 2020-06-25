import { Injectable } from "@angular/core";
@Injectable()
export class DateParser {

    public getDatePart(val: any, component: any, datePart: string) {
        const date = val.date as Date;
        const locale = component.locale;
        const formatOptions: Intl.DateTimeFormatOptions = {};
        formatOptions[datePart] = component.formatOptions[datePart];

        return date.toLocaleString(locale, formatOptions);
    }
}
