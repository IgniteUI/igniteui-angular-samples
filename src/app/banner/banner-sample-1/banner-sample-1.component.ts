import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxBannerComponent } from "igniteui-angular";
import { DATA } from "../../grid/grid-displaydensity-sample/data";

interface IDataEntry {
    ShipAddress: string;
    ShipCity: string;
    ShipCountry: string;
    ShipName: string;
    ShipPostalCode: string;
    CustomerID: string;
    CustomerName: string;
    Address: string;
    City: string;
    PostalCode: string;
    Country: string;
    Salesperson: string;
    OrderID: number;
    OrderDate: Date;
    ShipperName: string;
    ProductID: number;
    ProductName: string;
    UnitPrice: number;
    Quantity: number;
    Discontinued: boolean;
    ExtendedPrice: number;
}
@Component({
    selector: "banner-sample-1",
    styleUrls: ["banner-sample-1.component.scss"],
    templateUrl: "banner-sample-1.component.html"
})

export class BannerSample1Component implements OnInit {
    @ViewChild(IgxBannerComponent) public banner: IgxBannerComponent;
    public data: IDataEntry[];
    public toggle() {
        if (this.banner.collapsed) {
            this.banner.open();
        } else {
            this.banner.close();
        }
    }
    public onOpen(ev) {
        console.log("Open", ev);
    }

    public onClose(ev) {
        console.log("Close", ev);
    }

    public onButtonClick(ev) {
        console.log("Button click", ev);
    }

    public ngOnInit() {
        this.data = DATA;
        this.banner.open();
    }
}
