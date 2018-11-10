
import { EventEmitter, Injectable, Output } from "@angular/core";
import {
    FilteringLogic,
    IFilteringExpression,
    IFilteringExpressionsTree,
    IgxBaseExporter,
    IgxExporterOptionsBase,
    ISortingExpression,
    SortingDirection } from "igniteui-angular";
import { getInstanceType } from "igniteui-angular-core/ES5/type";
import { ConditionalOperator } from "igniteui-angular-excel/ES5/ConditionalOperator";
import { CustomFilterCondition } from "igniteui-angular-excel/ES5/CustomFilterCondition";
import { ExcelComparisonOperator } from "igniteui-angular-excel/ES5/ExcelComparisonOperator";
import { OrderedSortCondition } from "igniteui-angular-excel/ES5/OrderedSortCondition";
import { RelativeDateRangeDuration } from "igniteui-angular-excel/ES5/RelativeDateRangeDuration";
import { RelativeDateRangeOffset } from "igniteui-angular-excel/ES5/RelativeDateRangeOffset";
import { RelativeIndex } from "igniteui-angular-excel/ES5/RelativeIndex";
import { SortCondition } from "igniteui-angular-excel/ES5/SortCondition";
import { SortDirection } from "igniteui-angular-excel/ES5/SortDirection";
import { Workbook } from "igniteui-angular-excel/ES5/Workbook";
import { WorkbookFormat } from "igniteui-angular-excel/ES5/WorkbookFormat";
import { Worksheet } from "igniteui-angular-excel/ES5/Worksheet";
import { WorksheetCell } from "igniteui-angular-excel/ES5/WorksheetCell";
import { WorksheetRegion } from "igniteui-angular-excel/ES5/WorksheetRegion";
import { WorksheetRow } from "igniteui-angular-excel/ES5/WorksheetRow";
import { WorksheetTable } from "igniteui-angular-excel/ES5/WorksheetTable";
import { ExportUtilities } from "igniteui-angular/esm5/lib/services/exporter-common/export-utilities";

export interface IColumnExportOptions {
    valueFormatter?: (cellValue: any) => any;
}

export class WorkbookExportOptions extends IgxExporterOptionsBase {
    public workbookFormat: WorkbookFormat;
    public workbook: Workbook;
    public worksheet: Worksheet;
    public worksheetName: string = "worksheet";
    public startRow: number = 0;
    public startColumn: number = 0;
    public exportAsTable: boolean = true;
    public columnOptions: {[key: string]: IColumnExportOptions};

    constructor(filename: string) {
        super(filename, "");
    }
}

class ExportHelper {
    public readonly columnCount: number;
    // public readonly fields: Array<string> = []; // any[]
    // public readonly headers: Array<string> = [];
    public readonly fields: string[] = []; // any[]
    public readonly headers: string[] = [];
    public readonly fieldIndexMap: { [key: string]: number } = {};
    public readonly headerIndexMap: { [key: string]: number } = {};
    public readonly isSpecialData: boolean;
    public readonly headerFormatterMap: { [key: string]: (cellValue: any) => any } = {};

    constructor(data: any[], columnList: any, options: IgxExporterOptionsBase) {
        this.isSpecialData = ExportUtilities.isSpecialData(data);

        if (columnList == null) {
            const keys = ExportUtilities.getKeysFromData(data);
            let idx = 0;
            for (const key of keys) {
                this.fields.push(key);
                this.headers.push(key);
                this.fieldIndexMap[key] = idx;
                this.headerIndexMap[key] = idx;
                idx++;
            }
        } else {
            // the exporter stores the list of columns in the order it wants them
            // exported. if this was exporting a grid then it would have the field
            // name as well
            let idx = 0;

            for (const exportColumn of columnList) {
                if (!exportColumn.skip) {
                    if (exportColumn.field) {
                        this.fieldIndexMap[exportColumn.field] = idx;
                    }

                    if (exportColumn.columnFormatter) {
                        this.headerFormatterMap[exportColumn.header] = exportColumn.columnFormatter;
                    }

                    this.fields.push(exportColumn.field);
                    this.headers.push(exportColumn.header);
                    this.headerIndexMap[exportColumn.header] = idx;
                    idx++;
                }
            }
        }
        this.columnCount = this.headers.length;
    }
}

class WorkbookExportHelper extends ExportHelper {

    public static GetCustomCondition(expression: IFilteringExpression): CustomFilterCondition {
        if (expression && expression.condition) {
            let opForVal: ExcelComparisonOperator;

            switch (expression.condition.name) {
                case "equals":
                    opForVal = ExcelComparisonOperator.Equals;
                    break;
                case "doesNotEqual":
                    opForVal = ExcelComparisonOperator.NotEqual;
                    break;
                case "greaterThan":
                    opForVal = ExcelComparisonOperator.GreaterThan;
                    break;
                case "greaterThanOrEqualTo":
                    opForVal = ExcelComparisonOperator.GreaterThanOrEqual;
                    break;
                case "lessThan":
                    opForVal = ExcelComparisonOperator.LessThan;
                    break;
                case "lessThanOrEqualTo":
                    opForVal = ExcelComparisonOperator.LessThanOrEqual;
                    break;
                case "startsWith":
                    opForVal = ExcelComparisonOperator.BeginsWith;
                    break;
                case "endsWith":
                    opForVal = ExcelComparisonOperator.EndsWith;
                    break;
                case "contains":
                    opForVal = ExcelComparisonOperator.Contains;
                    break;
                case "doesNotContain":
                    opForVal = ExcelComparisonOperator.DoesNotContain;
                    break;
                case "after":
                    opForVal = ExcelComparisonOperator.GreaterThan;
                    break;
                case "before":
                    opForVal = ExcelComparisonOperator.LessThan;
                    break;
                // these are a little weird but i guess to keep the possibility of them using and/or
                case "null":
                  return new CustomFilterCondition(ExcelComparisonOperator.Equals, null);
                case "notNull":
                  return new CustomFilterCondition(ExcelComparisonOperator.NotEqual, null);
                case "empty":
                  return new CustomFilterCondition(ExcelComparisonOperator.Equals, "");
                case "notEmpty":
                  return new CustomFilterCondition(ExcelComparisonOperator.NotEqual, "");
                case "false":
                  return new CustomFilterCondition(ExcelComparisonOperator.Equals, false);
                case "true":
                  return new CustomFilterCondition(ExcelComparisonOperator.Equals, true);
            }

            if (opForVal !== undefined && expression.searchVal !== undefined) {
                const searchVal = expression.searchVal;
                const valueType = searchVal != null ? getInstanceType(searchVal) : null;

                if (searchVal == null || (valueType != null && WorksheetCell.isCellTypeSupported(valueType))) {
                    return new CustomFilterCondition(opForVal, expression.searchVal);
                }
            }
        }
    }

    private static GetRelativeDate(expression: IFilteringExpression): {
        offset: RelativeDateRangeOffset,
        duration: RelativeDateRangeDuration } {

        if (expression && expression.condition) {
            let rangeOffset: RelativeDateRangeOffset;
            let rangeDuration: RelativeDateRangeDuration;

            switch (expression.condition.name) {
                case "today":
                case "yesterday":
                case "tomorrow":
                    rangeDuration = RelativeDateRangeDuration.Day;
                    break;
                case "thisMonth":
                case "lastMonth":
                case "nextMonth":
                    rangeDuration = RelativeDateRangeDuration.Month;
                    break;
                case "thisYear":
                case "lastYear":
                case "nextYear":
                    rangeDuration = RelativeDateRangeDuration.Year;
                    break;
            }

            switch (expression.condition.name) {
                case "today":
                case "thisMonth":
                case "thisYear":
                    rangeOffset = RelativeDateRangeOffset.Current;
                    break;
                case "yesterday":
                case "lastMonth":
                case "lastYear":
                    rangeOffset = RelativeDateRangeOffset.Previous;
                    break;
                case "tomorrow":
                case "nextMonth":
                case "nextYear":
                    rangeOffset = RelativeDateRangeOffset.Next;
                    break;
            }

            if (rangeOffset !== undefined && rangeDuration !== undefined) {
                return { offset: rangeOffset, duration: rangeDuration };
            }
        }

        return null;
    }

    public row: number;
    public col: number;
    public readonly workbook: Workbook;
    public readonly sortExpressions: ISortingExpression[] = [];
    public readonly filterExpressions: IFilteringExpressionsTree[] = [];

    constructor(
        public worksheet: Worksheet,
        readonly startRow: number,
        readonly startCol: number,
        grid: any,
        data: any[],
        columnList: any,
        options: WorkbookExportOptions) {

        super(data, columnList, options);

        this.row = startRow;
        this.col = startCol;
        this.workbook = worksheet.workbook;

        // always gather the sort expressions for the fields being exported
        if (grid.sortingExpressions) {
            const allSortExpressions = grid.sortingExpressions instanceof Array
              // ? <Array<ISortingExpression>> grid.sortingExpressions
              ? grid.sortingExpressions as ISortingExpression[]
              : [grid.sortExpressions];

            for (const item of allSortExpressions) {
                const allSortItem = item as ISortingExpression;
                if (allSortItem.fieldName && this.fieldIndexMap.hasOwnProperty(allSortItem.fieldName)) {
                    this.sortExpressions.push(allSortItem);
                }
            }
        }
        // only include the filter if we"re exporting all the data. if the data is filtered then
        // it doesn"t make sense to export the filter
        if (grid.filteringExpressionsTree && options.ignoreFiltering) {
            this.GetFilterExpressions(grid.filteringExpressionsTree as IFilteringExpressionsTree);
        }
    }

    private GetFilterExpressions(filterTree: IFilteringExpressionsTree): void {
        if (filterTree.filteringOperands && filterTree.filteringOperands.length > 0) {
            // TODO not sure if there is a better way to implement this as seemingly the
            // filter tree may be more complex than what excel allows
            for (const filterOperand of filterTree.filteringOperands) {
                // const filterExp = <IFilteringExpression>filterOperand;
                const filterExp = filterOperand as IFilteringExpression;
                if (filterExp.condition) {
                    if (filterExp.fieldName && this.fieldIndexMap.hasOwnProperty(filterExp.fieldName)) {
                        this.filterExpressions.push(filterTree);
                        // since we"re pushing in the parent tree (so we can do the and/or of the 2 ops)
                        // we should just break out.
                        break;
                    }
                } else {
                    this.GetFilterExpressions(filterOperand as IFilteringExpressionsTree);
                }
            }
        }
    }

    private InitializeRegion(region: WorksheetRegion, table: WorksheetTable): void {
        // if we"re not exporting as a table and we have sort or filter criteria then
        // use the filter settings of the worksheet
        if (table == null && (this.sortExpressions.length > 0 || this.filterExpressions.length > 0)) {
            region.worksheet.filterSettings.setRegion(region.toString());
        }

        // apply the filter...
        if (this.filterExpressions.length > 0) {
            for (const filterTree of this.filterExpressions) {
                const exp1 = filterTree.filteringOperands[0] as IFilteringExpression;
                const filterIdx = this.fieldIndexMap[exp1.fieldName];
                const condition1 = exp1.condition ? WorkbookExportHelper.GetCustomCondition(exp1) : null;
                const filterSettings = region.worksheet.filterSettings;

                if (condition1) {
                    // ignore invalid search values...
                    if (exp1.searchVal === undefined) {
                        continue;
                    }

                    const exp2 = filterTree.filteringOperands.length > 1
                        ? filterTree.filteringOperands[1] as IFilteringExpression : null;
                    const condition2 = exp2 && exp2.condition && exp1.fieldName === exp2.fieldName
                        ? WorkbookExportHelper.GetCustomCondition(exp2)
                        : null;

                    if (condition2) {
                        let conditionOp = ConditionalOperator.Or;
                        if (filterTree.operator === FilteringLogic.And) {
                            conditionOp = ConditionalOperator.And;
                        }

                        if (table) {
                            table.columns(filterIdx).applyCustomFilter(condition1, condition2, conditionOp);
                        } else {
                            filterSettings.applyCustomFilter(filterIdx, condition1, condition2, conditionOp);
                        }
                    } else {
                        if (table) {
                            table.columns(filterIdx).applyCustomFilter(condition1);
                        } else {
                            filterSettings.applyCustomFilter(filterIdx, condition1);
                        }
                    }
                } else {
                    const relDateInfo = WorkbookExportHelper.GetRelativeDate(exp1);

                    if (relDateInfo != null) {
                        if (table) {
                            table.columns(filterIdx).applyRelativeDateRangeFilter(relDateInfo.offset,
                                relDateInfo.duration);
                        } else {
                            filterSettings.applyRelativeDateRangeFilter(filterIdx, relDateInfo.offset,
                                relDateInfo.duration);
                        }
                    } else {
                        switch (exp1.condition.name) {
                            case "on":
                            case "notOn":
                            {
                                const isOn = exp1.condition.name === "on";
                                // const date = <Date>exp1.searchVal;
                                const date = exp1.searchVal as Date;
                                const dayStart = date.setHours(0);
                                const dayEnd = date.setHours(24);
                                const greater = ExcelComparisonOperator.GreaterThanOrEqual;
                                const less = ExcelComparisonOperator.LessThan;
                                const operator1 = isOn ? greater : less;
                                const operator2 = isOn ? less : greater;

                                const customCondition1 = new CustomFilterCondition(operator1, dayStart);
                                const customCondition2 = new CustomFilterCondition(operator2, dayEnd);
                                const conditionOp = isOn ? ConditionalOperator.And : ConditionalOperator.Or;

                                if (table) {
                                    table.columns(filterIdx).applyCustomFilter(
                                        customCondition1, customCondition2, conditionOp);
                                } else {
                                    filterSettings.applyCustomFilter(filterIdx,
                                        customCondition1, customCondition2, conditionOp);
                                }
                                break;
                            }
                        }
                    }
                }
            }
        }

        // apply the sort...
        if (this.sortExpressions.length > 0) {
            const adder: (idx: number, cond: SortCondition) => void = table != null
              ? (i, c) => table.sortSettings.sortConditions().addItem(table.columns(i), c)
              : (i, c) => region.worksheet.filterSettings.sortSettings.
              sortConditions().addItem(new RelativeIndex(i), c);
            let isCaseSensitive: boolean; // = undefined;

            for (const sortExp of this.sortExpressions) {
                const sortDir = sortExp.dir === SortingDirection.Desc
                    ? SortDirection.Descending : SortDirection.Ascending;
                const sortCondition = new OrderedSortCondition(sortDir);
                const relIdx = this.fieldIndexMap[sortExp.fieldName];
                if (isCaseSensitive === undefined && sortExp.ignoreCase !== undefined) {
                    isCaseSensitive = sortExp.ignoreCase;
                }
                adder(relIdx, sortCondition);
            }

            if (table) {
                table.sortSettings.caseSensitive = isCaseSensitive === true;
            } else {
                region.worksheet.filterSettings.sortSettings.caseSensitive = isCaseSensitive === true;
            }
        }
    }
}

export interface IWorksheetRowExportedEventArgs {
    readonly row: WorksheetRow;
    readonly rowData: any;
}

export interface IWorksheetCellExportingEventArgs {
    cellValue: any;
    cancel: boolean;
    readonly row: WorksheetRow;
    readonly dataColumnHeader: string;
    readonly worksheetColumnIndex: number;
}

export interface IWorkbookExportEndedEventArgs {
    readonly workbook: Workbook;
    readonly worksheet: Worksheet;
    readonly fileName: string;
    readonly region: WorksheetRegion;
    readonly dataRegion: WorksheetRegion;
    readonly table: WorksheetTable;
    getDataRegionFromHeader(fieldName: string);
}

class WorkbookExportEndedEventArgs implements IWorkbookExportEndedEventArgs {
    public readonly workbook: Workbook;
    public readonly worksheet: Worksheet;

    constructor(
        readonly fileName: string,
        readonly region: WorksheetRegion,
        readonly dataRegion: WorksheetRegion,
        readonly table: WorksheetTable,
        private readonly getRelativeIndex: (fieldName: string) => number) {
            this.worksheet = region.worksheet;
            this.workbook = this.worksheet.workbook;
    }

    public getDataRegionFromHeader(fieldName: string) {
        const relIdx = this.getRelativeIndex(fieldName);

        if (relIdx == null || this.dataRegion == null) {
            return null;
        }

        if (this.table) {
            return this.table.columns(relIdx).dataAreaRegion;
        } else {
            return new WorksheetRegion(
                this.worksheet,
                this.dataRegion.firstRow,
                this.dataRegion.firstColumn + relIdx,
                this.dataRegion.lastRow,
                this.dataRegion.firstColumn + relIdx,
                false);
        }
    }
}

@Injectable()
export class WorkbookExportService extends IgxBaseExporter {
    public grid: any;

    @Output()
    public onWorksheetCellExporting = new EventEmitter<IWorksheetCellExportingEventArgs>();

    @Output()
    public onWorksheetRowExported = new EventEmitter<IWorksheetRowExportedEventArgs>();

    @Output()
    public onWorkbookExportEnded = new EventEmitter<IWorkbookExportEndedEventArgs>();

    // we need to shadow the existing export method so we can store a reference to the grid
    public export(grid: any, options: WorkbookExportOptions) {
        const oldGrid = grid;
        try {
            this.grid = grid;
            IgxBaseExporter.prototype.export.call(this, grid, options);
        } finally {
            this.grid = oldGrid;
        }
    }

    // we need to shadow the other overload because we need access to the columnList before the data is pruned
    // so we can remove the default column formatting. we"ll apply it later if warranted
    public exportData(data: any[], options: WorkbookExportOptions) {
        const columnList = (this as any)._columnList;

        // we"re going to clear out the formatter from a column
        if (Array.isArray(columnList)) {
            for (const column of columnList) {
                if (column.formatter) {
                    column.columnFormatter = column.formatter;
                    column.formatter = null;
                }
            }
        }
        IgxBaseExporter.prototype.exportData.call(this, data, options);
    }

    protected exportDataImplementation(data: any[], options: WorkbookExportOptions) {
        const helper: WorkbookExportHelper = this.createExportHelper(data, options);
        const ws = helper.worksheet;
        const isSpecial = helper.isSpecialData;
        let table: WorksheetTable = null;

        if (helper.columnCount === 0) {
            return;
        }

        // header
        const headerRow = ws.rows(helper.row);
        for (let i = 0; i < helper.columnCount; i++) {
            headerRow.setCellValue(helper.col, helper.headers[i]);
            helper.col++;
        }

        helper.col = helper.startCol;
        helper.row++;

        const firstDataRow = helper.row;

        // the data is stored on each item using the header as the key
        const keys = helper.headers;

        // data
        for (const dataRow of data) {
            const excelRow = ws.rows(helper.row);

            if (isSpecial) {
                this.exportCell(keys[0], excelRow, helper.col, dataRow);
            } else {
                for (const key of keys) {
                    let cellValue = dataRow[key];

                    // TODO should we use the field to get the formatter?
                    const columnOptions = options && options.columnOptions ? options.columnOptions[key] : null;

                    if (columnOptions && columnOptions.valueFormatter) {
                        cellValue = columnOptions.valueFormatter(cellValue);
                    } else if (typeof cellValue !== "number" && !(cellValue instanceof Date)) {
                        // we"re going to skip using the column"s formatter if the value is date or numeric because
                        // the result is likely to be a string
                        const columnFormatter = helper.headerFormatterMap[key];

                        if (columnFormatter) {
                          cellValue = columnFormatter(cellValue);
                        }
                    }
                    this.exportCell(key, excelRow, helper.col, cellValue);
                    helper.col++;
                }
            }

            this.onWorksheetRowExported.emit({
              row: excelRow,
              rowData: dataRow
            });

            helper.col = helper.startCol;
            helper.row++;
        }

        const region = new WorksheetRegion(ws,
            helper.startRow, helper.startCol,
            helper.startRow + (helper.row - helper.startRow - 1),
            helper.startCol + helper.columnCount - 1, false);

        const dataRegion = new WorksheetRegion(ws,
            firstDataRow, helper.startCol,
            firstDataRow + (helper.row - firstDataRow - 1),
            helper.startCol + helper.columnCount - 1, false);

        if (options.exportAsTable) {
            table = ws.tables().add(region.toString(), true, null);
        }

        // const getFieldIndex = helper.InitializeRegion(region, table);
        const endedArgs = new WorkbookExportEndedEventArgs(options.fileName, region, dataRegion, table,
            (s) => helper.headerIndexMap[s]);
        this.onWorkbookExportEnded.emit(endedArgs);
    }

    private createExportHelper(data: any[], options: WorkbookExportOptions) {
        let wb: Workbook;
        let ws: Worksheet;
        let fmt: WorkbookFormat;
        let wsName: string;
        let r: number = 0;
        let c: number = 0;

        if (options) {
            wb = options.workbook;
            ws = options.worksheet;
            wsName = options.worksheetName;
            fmt = options.workbookFormat;
            r = options.startRow;
            c = options.startColumn;

            if (ws) {
                wb = ws.workbook;
                fmt = wb.currentFormat;
            } else if (wb) {
                ws = wb.windowOptions.selectedWorksheet;
                fmt = wb.currentFormat;
            }
        }

        if (!wb) {
            if (fmt === undefined) {
                fmt = WorkbookFormat.Excel2007;
            }
            wb = new Workbook(fmt);
        }

        if (!ws) {
            if (wsName == null) {
                wsName = "Sheet1";
            }
            ws = wb.worksheets().add(wsName);
        }

        return new WorkbookExportHelper(ws, r, c, this.grid, data, (this as any)._columnList, options);
    }

    private exportCell(columnHeader: string, worksheetRow: WorksheetRow, columnIndex: number, cellVal: any) {
        const args = {
            cancel: false,
            cellValue: cellVal,
            dataColumnHeader: columnHeader,
            row: worksheetRow,
            worksheetColumnIndex: columnIndex
        };
        this.onWorksheetCellExporting.emit(args);

        if (!args.cancel) {
            worksheetRow.setCellValue(columnIndex, args.cellValue);
        }
    }
}
