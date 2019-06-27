import { getLocaleNumberSymbol, NumberSymbol } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";

import { AnyValueDataValidationRule } from "igniteui-angular-excel/ES5/AnyValueDataValidationRule";
import { CustomDataValidationRule } from "igniteui-angular-excel/ES5/CustomDataValidationRule";
import { DataValidationErrorStyle } from "igniteui-angular-excel/ES5/DataValidationErrorStyle";
import { ListDataValidationRule } from "igniteui-angular-excel/ES5/ListDataValidationRule";
import { OneConstraintDataValidationOperator } from "igniteui-angular-excel/ES5/OneConstraintDataValidationOperator";
import { OneConstraintDataValidationRule } from "igniteui-angular-excel/ES5/OneConstraintDataValidationRule";
import { TwoConstraintDataValidationOperator } from "igniteui-angular-excel/ES5/TwoConstraintDataValidationOperator";
import { TwoConstraintDataValidationRule } from "igniteui-angular-excel/ES5/TwoConstraintDataValidationRule";
import { WorksheetColumnWidthUnit } from "igniteui-angular-excel/ES5/WorksheetColumnWidthUnit";
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-component";

@Component({
  selector: "app-spreadsheet-data-validation",
  styleUrls: ["./spreadsheet-data-validation.component.scss"],
  templateUrl: "./spreadsheet-data-validation.component.html"
})
export class SpreadsheetDataValidComponent implements OnInit {
    @ViewChild("spreadsheet", { read: IgxSpreadsheetComponent, static: true })
    public spreadsheet: IgxSpreadsheetComponent;

    constructor() { }

    public ngOnInit() {

        this.spreadsheet.workbook.worksheets(0).columns(0).setWidth(25, WorksheetColumnWidthUnit.Character);
        this.spreadsheet.workbook.worksheets(0).columns(1).setWidth(15, WorksheetColumnWidthUnit.Character);

        // this validation rule has only input message set
        const valRule1 = new AnyValueDataValidationRule();
        valRule1.inputMessageTitle = "Hotel room booking form";
        valRule1.inputMessageDescription = "Please us the form below to choose your accomodation type";
        this.spreadsheet.workbook.worksheets(0).rows(1).cells(0).dataValidationRule = valRule1;
        this.spreadsheet.workbook.worksheets(0).rows(1).cells(0).value = "Hotel room booking form";

        // this validation rule has a two constraint validation set
        const valRule2 = new TwoConstraintDataValidationRule();
        valRule2.validationOperator = TwoConstraintDataValidationOperator.Between;
        valRule2.setLowerConstraint(1);
        valRule2.setUpperConstraint(4);
        valRule2.inputMessageTitle = "Adults";
        valRule2.inputMessageDescription = "Adults cound must be min, 1 and max. 4.";
        valRule2.errorMessageTitle = "Adult requirement not met";
        valRule2.errorMessageDescription = "There must be between 1 and 4 adults per room.";
        valRule2.errorStyle = DataValidationErrorStyle.Information;
        this.spreadsheet.workbook.worksheets(0).rows(3).cells(1).dataValidationRule = valRule2;
        this.spreadsheet.workbook.worksheets(0).rows(3).cells(1).value = 1;
        this.spreadsheet.workbook.worksheets(0).rows(3).cells(0).value = "Adults";

        // this validation rule has a custom formula validation set
        const valRule3 = new CustomDataValidationRule();
        const separator = getLocaleNumberSymbol(window.navigator.language, NumberSymbol.Group);
        valRule3.setFormula("=AND((B4+B5)<5 " + separator + " (B4+B5)>0)", null);
        valRule3.inputMessageTitle = "Children";
        valRule3.inputMessageDescription = "Children and adults cannot be more than 4 per room.";
        valRule3.errorMessageTitle = "Room limit exceeded";
        valRule3.errorMessageDescription = "The macimum persons per room is 4.";
        valRule3.errorStyle = DataValidationErrorStyle.Warning;
        this.spreadsheet.workbook.worksheets(0).rows(4).cells(1).dataValidationRule = valRule3;
        this.spreadsheet.workbook.worksheets(0).rows(4).cells(1).value = 0;
        this.spreadsheet.workbook.worksheets(0).rows(4).cells(0).value = "Children";

        // this validation rule has a list of accepted choices validation set
        const valRule4 = new ListDataValidationRule();
        valRule4.setValues(["FB", "HB", "BB" ]);
        valRule4.inputMessageTitle = "Servicing";
        valRule4.inputMessageDescription = "Allowed values: FB (Full board - breakfast, lunch, and dinner)" +
        ", HB (Half board - breakfast and dinner), BB (Bed and breakfast)";
        valRule4.errorMessageTitle = "Invalid Option";
        valRule4.errorMessageDescription = "Please choose FB, HB, or BB";
        valRule4.errorStyle = DataValidationErrorStyle.Stop;
        this.spreadsheet.workbook.worksheets(0).rows(5).cells(1).dataValidationRule = valRule4;
        this.spreadsheet.workbook.worksheets(0).rows(5).cells(1).value = "FB";
        this.spreadsheet.workbook.worksheets(0).rows(5).cells(0).value = "Servicing";

        // this validation rule has a single constraint validation set
        const valRule5 = new OneConstraintDataValidationRule();
        valRule5.inputMessageTitle = "Check In Date";
        const checkinDate = new Date();
        valRule5.inputMessageDescription = "The hotel operates from" + checkinDate;
        valRule5.validationOperator = OneConstraintDataValidationOperator.GreaterThanOrEqualTo;
        valRule5.setConstraint(checkinDate);
        this.spreadsheet.workbook.worksheets(0).rows(6).cells(1).dataValidationRule = valRule5;
        this.spreadsheet.workbook.worksheets(0).rows(6).cells(1).value = checkinDate.toLocaleDateString();
        this.spreadsheet.workbook.worksheets(0).rows(6).cells(0).value = "Check In Date";

        // this validation rule has a single constraint validation set
        const valRule6 = new OneConstraintDataValidationRule();
        valRule6.inputMessageTitle = "Check Out Date";
        valRule6.inputMessageDescription = "The check out date must be greater than the check in date";
        valRule6.validationOperator = OneConstraintDataValidationOperator.GreaterThan;
        valRule6.setConstraintFormula("=B7", null);
        const checkOutDate = new Date();
        checkOutDate.setDate(checkOutDate.getDate() + 1);
        this.spreadsheet.workbook.worksheets(0).rows(7).cells(1).dataValidationRule = valRule6;
        this.spreadsheet.workbook.worksheets(0).rows(7).cells(1).value = checkOutDate.toLocaleDateString();
        this.spreadsheet.workbook.worksheets(0).rows(7).cells(0).value = "Check Out Date";
    }

}
