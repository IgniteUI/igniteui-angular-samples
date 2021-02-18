import { Component, OnInit, ViewChild } from "@angular/core";
import { registerLocaleData} from "@angular/common";
import localeBG from '@angular/common/locales/bg';
import localeDE from '@angular/common/locales/de';
import localeFR from '@angular/common/locales/fr';
import localeJA from '@angular/common/locales/ja';
import { IgxGridComponent } from "igniteui-angular";

@Component({
    selector: "grid-column-data-types-sample",
    styleUrls: ["./grid-column-data-types-sample.component.scss"],
    templateUrl: "grid-column-data-types-sample.component.html"
})
export class GridColumnDataTypesSampleComponent implements OnInit {
    @ViewChild("grid1", { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public digitsInfoMessage: string = 'Applicable to number, currency and percent type columns';

    // Number options
    public options = {
        digitsInfo: '1.4-4',
        currencyCode: ''
    };
    public formatOptions = this.options;

    // Different locales
    public locales = ["BG", "EN", "DE", "FR", "JA"];
    public locale = "EN";

    // Date formats
    public dateFormats = [
            { format: "short", eq: "'M/d/yy, h:mm a'" },
            { format: "shortDate", eq: "'M/d/yy'" },
            { format: "mediumDate", eq: "'MMMM d, y, h:mm:ss a z'"},
            { format: "long", eq: "'MMMM d, y, h:mm:ss a z'"},
            { format: "longDate", eq: "'MMMM d, y'"},
            { format: "full", eq: "'EEEE, MMMM d, y, h:mm:ss a zzzz'"},
            { format: "fullDate", eq: "'EEEE, MMMM d, y'"}
        ];

    // Different timezones
    public timezoneFormats = ["GMT", "UTC+9:30/ +10:30", "UTC+0", "UTC-6", "UTC+1", "UTC+3" ];

    public dateOptions = {
        format: 'long',
        timezone: 'UTC+0'
    };
    public formatDateOptions = this.dateOptions;

    // Currency format options
    public currencyCodes = ["USD", "BGN", "EUR", "JPY"];

    public data: any[] = [{
        ProductID: 1,
        ProductName: "Chai",
        SupplierID: 1,
        CategoryID: 1,
        QuantityPerUnit: "10 boxes x 20 bags",
        UnitPrice: 18.0000,
        UnitsInStock: 39,
        UnitsOnOrder: 0.030,
        ReorderLevel: 10,
        Discontinued: false,
        OrderDate: new Date("2012-02-12")
      }, {
        ProductID: 2,
        ProductName: "Chang",
        SupplierID: 1,
        CategoryID: 1,
        QuantityPerUnit: "24 - 12 oz bottles",
        UnitPrice: 19.0000,
        UnitsInStock: 17,
        UnitsOnOrder: 0.040,
        ReorderLevel: 25,
        Discontinued: true,
        OrderDate: new Date("2003-03-17")
      }, {
        ProductID: 3,
        ProductName: "Aniseed Syrup",
        SupplierID: 1,
        CategoryID: 2,
        QuantityPerUnit: "12 - 550 ml bottles",
        UnitPrice: 10.0000,
        UnitsInStock: 13,
        UnitsOnOrder: 0.070,
        ReorderLevel: 25,
        Discontinued: false,
        OrderDate: new Date("2006-03-17")
      }, {
        ProductID: 4,
        ProductName: "Chef Antons Cajun Seasoning",
        SupplierID: 2,
        CategoryID: 2,
        QuantityPerUnit: "48 - 6 oz jars",
        UnitPrice: 22.0000,
        UnitsInStock: 53,
        UnitsOnOrder: 0.030,
        ReorderLevel: 0,
        Discontinued: false,
        OrderDate: new Date("2016-03-17")
      }, {
        ProductID: 5,
        ProductName: "Chef Antons Gumbo Mix",
        SupplierID: 2,
        CategoryID: 2,
        QuantityPerUnit: "36 boxes",
        UnitPrice: 21.3500,
        UnitsInStock: 0,
        UnitsOnOrder: 0.030,
        ReorderLevel: 0,
        Discontinued: true,
        OrderDate: new Date("2011-11-11")
      }, {
        ProductID: 6,
        ProductName: "Grandmas Boysenberry Spread",
        SupplierID: 3,
        CategoryID: 2,
        QuantityPerUnit: "12 - 8 oz jars",
        UnitPrice: 25.0000,
        UnitsInStock: 0,
        UnitsOnOrder: 0.030,
        ReorderLevel: 25,
        Discontinued: false,
        OrderDate: new Date("2017-12-17")
      }, {
        ProductID: 7,
        ProductName: "Uncle Bobs Organic Dried Pears",
        SupplierID: 3,
        CategoryID: 7,
        QuantityPerUnit: "12 - 1 lb pkgs.",
        UnitPrice: 30.0000,
        UnitsInStock: 150,
        UnitsOnOrder: 0.030,
        ReorderLevel: 10,
        Discontinued: false,
        OrderDate: new Date("2016-07-17")
      }, {
        ProductID: 8,
        ProductName: "Northwoods Cranberry Sauce",
        SupplierID: 3,
        CategoryID: 2,
        QuantityPerUnit: "12 - 12 oz jars",
        UnitPrice: 40.0000,
        UnitsInStock: 6,
        UnitsOnOrder: 0.030,
        ReorderLevel: 0,
        Discontinued: false,
        OrderDate: new Date("2018-01-17")
      }, {
        ProductID: 9,
        ProductName: "Mishi Kobe Niku",
        SupplierID: 4,
        CategoryID: 6,
        QuantityPerUnit: "18 - 500 g pkgs.",
        UnitPrice: 97.0000,
        UnitsInStock: 29,
        UnitsOnOrder: 0.030,
        ReorderLevel: 0,
        Discontinued: true,
        OrderDate: new Date("2010-02-17")
      }
    ];

    private regEx = new RegExp('^[0-9]+\.[0-9]+\-[0-9]$')

    constructor() {
    }
    public ngOnInit(): void {
        registerLocaleData(localeBG);
        registerLocaleData(localeDE);
        registerLocaleData(localeFR);
        registerLocaleData(localeJA);
    }

    public reset() {
        this.options.digitsInfo = '1.4-4';
        this.formatOptions = Object.assign({}, this.formatOptions, this.options);
    }
    public clearCode(event) {
        event.preventDefault();
        this.options.currencyCode = '';
        this.formatOptions = Object.assign({}, this.formatOptions, this.options);
    }
    public modelChange() {
        if (this.options.digitsInfo.match(this.regEx)) {
            if (Number(this.options.digitsInfo.substr(2, 1)) > Number(this.options.digitsInfo.substr(4, 1))) {
                this.digitsInfoMessage = 'The minimum number of digits after fraction (x) is higher than the maximum (x).';
            } else {
                this.digitsInfoMessage = 'Applicable to number, currency and percent type columns';
                this.formatOptions = Object.assign({}, this.formatOptions, this.options);
            }
        }
    }

    public selectionChanging(event) {
        this.dateOptions.format = event.newSelection.value;
        this.formatDateOptions = Object.assign({}, this.formatDateOptions, this.dateOptions);
    }

    public timezoneSelectionChanging(event) {
        this.dateOptions.timezone = event.newSelection.value;
        this.formatDateOptions = Object.assign({}, this.formatDateOptions, this.dateOptions);
    }

    public currencySelectionChanging(event) {
        this.options.currencyCode = event.newSelection.value;
        this.formatOptions = Object.assign({}, this.formatOptions, this.options);
    }

    public warningClass() {
        if (!this.digitsInfoMessage.startsWith('Applicable')) return 'warning';
    }
}
