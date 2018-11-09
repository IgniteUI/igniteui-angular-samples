import { IgxBaseExporter, IgxExporterOptionsBase, ISortingExpression, SortingDirection, IFilteringExpressionsTree, IFilteringExpression, FilteringLogic } from 'igniteui-angular';
import { ExportUtilities } from 'igniteui-angular/esm5/lib/services/exporter-common/export-utilities';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { getInstanceType } from 'igniteui-angular-core/ES5/type';
import { Workbook } from 'igniteui-angular-excel/ES5/Workbook';
import { Worksheet } from 'igniteui-angular-excel/ES5/Worksheet';
import { WorksheetRegion } from 'igniteui-angular-excel/ES5/WorksheetRegion';
import { WorksheetTable } from 'igniteui-angular-excel/ES5/WorksheetTable';
import { WorkbookFormat } from 'igniteui-angular-excel/ES5/WorkbookFormat';
import { SortCondition } from 'igniteui-angular-excel/ES5/SortCondition';
import { OrderedSortCondition } from 'igniteui-angular-excel/ES5/OrderedSortCondition';
import { SortDirection } from 'igniteui-angular-excel/ES5/SortDirection';
import { RelativeIndex } from 'igniteui-angular-excel/ES5/RelativeIndex';
import { ExcelComparisonOperator } from 'igniteui-angular-excel/ES5/ExcelComparisonOperator';
import { CustomFilterCondition } from 'igniteui-angular-excel/ES5/CustomFilterCondition';
import { ConditionalOperator } from 'igniteui-angular-excel/ES5/ConditionalOperator';
import { WorksheetCell } from 'igniteui-angular-excel/ES5/WorksheetCell';
import { RelativeDateRangeOffset } from 'igniteui-angular-excel/ES5/RelativeDateRangeOffset';
import { RelativeDateRangeDuration } from 'igniteui-angular-excel/ES5/RelativeDateRangeDuration';
import { WorksheetRow } from 'igniteui-angular-excel/ES5/WorksheetRow';

export interface IColumnExportOptions {
  valueFormatter?: (cellValue: any) => any;
}

export class IgxWorkbookExporterOptions extends IgxExporterOptionsBase {
  public workbookFormat: WorkbookFormat
  public workbook: Workbook;
  public worksheet: Worksheet;
  public worksheetName: string;
  public startRow: number = 0;
  public startColumn: number = 0;
  public exportAsTable: boolean = true;
  public columnOptions: {[key: string] : IColumnExportOptions};

  constructor(filename: string) {
    super(filename, "");
  }
}

class ExportHelper {
  readonly columnCount: number;
  readonly fields: Array<string> = [];
  readonly headers: Array<string> = [];
  readonly fieldIndexMap: { [key: string] : number } = {};
  readonly headerIndexMap: { [key: string] : number } = {};
  readonly isSpecialData: boolean;
  readonly headerFormatterMap: { [key: string] : (cellValue: any) => any } = {};

  constructor(data: any[], columnList: any, options: IgxExporterOptionsBase) {
    this.isSpecialData = ExportUtilities.isSpecialData(data);

    if (columnList == null) {
      const keys = ExportUtilities.getKeysFromData(data);
      let idx = 0;
      for (var key of keys) {
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

      for (let exportColumn of columnList) {
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
  public row: number;
  public col: number;
  public readonly workbook: Workbook;
  private readonly sortExpressions: Array<ISortingExpression> = [];
  private readonly filterExpressions: Array<IFilteringExpressionsTree> = [];

  constructor(public worksheet: Worksheet, readonly startRow: number, readonly startCol: number, grid: any, data: any[], columnList: any, options: IgxWorkbookExporterOptions) {
    super(data, columnList, options);
    this.row = startRow;
    this.col = startCol;
    this.workbook = worksheet.workbook;

    // always gather the sort expressions for the fields being exported
    if (grid.sortingExpressions) {
      var allSortExpressions = grid.sortingExpressions instanceof Array
        ? <Array<ISortingExpression>>grid.sortingExpressions
        : [grid.sortExpressions];

      for (var item of allSortExpressions) {
        var allSortItem = <ISortingExpression>item;
        if (allSortItem.fieldName && this.fieldIndexMap.hasOwnProperty(allSortItem.fieldName)) {
          this.sortExpressions.push(allSortItem);
        }
      }
    }

    // only include the filter if we're exporting all the data. if the data is filtered then 
    // it doesn't make sense to export the filter
    if (grid.filteringExpressionsTree && options.ignoreFiltering) {
      this.GetFilterExpressions(<IFilteringExpressionsTree>grid.filteringExpressionsTree);
    }
  }

  private static GetCustomCondition(expression: IFilteringExpression) : CustomFilterCondition {
    if (expression && expression.condition) {
        var opForVal: ExcelComparisonOperator;

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
            var searchVal = expression.searchVal;
            var valueType = searchVal != null ? getInstanceType(searchVal) : null;

            if (searchVal == null || (valueType != null && WorksheetCell.isCellTypeSupported(valueType))) {
              return new CustomFilterCondition(opForVal, expression.searchVal);
            }
          }
      }
  }
  
  private GetFilterExpressions(filterTree: IFilteringExpressionsTree) : void {
    if (filterTree.filteringOperands && filterTree.filteringOperands.length > 0) {
      // TODO not sure if there is a better way to implement this as seemingly the 
      // filter tree may be more complex than what excel allows
      for(let filterOperand of filterTree.filteringOperands) {
        var filterExp = <IFilteringExpression>filterOperand;
  
        if (filterExp.condition) {
          if (filterExp.fieldName && this.fieldIndexMap.hasOwnProperty(filterExp.fieldName)) {
            this.filterExpressions.push(filterTree);

            // since we're pushing in the parent tree (so we can do the and/or of the 2 ops)
            // we should just break out.
            break;
          }
        } else {
          this.GetFilterExpressions(<IFilteringExpressionsTree>filterOperand);
        }
      }
    }
  }

  private static GetRelativeDate(expression: IFilteringExpression) : {offset: RelativeDateRangeOffset, duration: RelativeDateRangeDuration } {
    if (expression && expression.condition) {
      var offset: RelativeDateRangeOffset;
      var duration: RelativeDateRangeDuration;

      switch (expression.condition.name) {
        case "today":
        case "yesterday":
        case "tomorrow":
          duration = RelativeDateRangeDuration.Day;
          break;
        case "thisMonth":
        case "lastMonth":
        case "nextMonth":
          duration = RelativeDateRangeDuration.Month;
          break;
        case "thisYear":
        case "lastYear":
        case "nextYear":
          duration = RelativeDateRangeDuration.Year;
          break;
      }

      switch (expression.condition.name) {
        case "today":
        case "thisMonth":
        case "thisYear":
          offset = RelativeDateRangeOffset.Current;
          break;
        case "yesterday":
        case "lastMonth":
        case "lastYear":
          offset = RelativeDateRangeOffset.Previous;
          break;

        case "tomorrow":
        case "nextMonth":
        case "nextYear":
          offset = RelativeDateRangeOffset.Next;
          break;
      }

      if (offset !== undefined && duration !== undefined) {
        return { offset: offset, duration: duration };
      }
    }

    return null;
  }

  InitializeRegion(region: WorksheetRegion, table: WorksheetTable) : void {
    // if we're not exporting as a table and we have sort or filter criteria then 
    // use the filtersettings of the worksheet
    if (table == null && (this.sortExpressions.length > 0 || this.filterExpressions.length > 0)) {
      region.worksheet.filterSettings.setRegion(region.toString());
    }

    // apply the filter...
    if (this.filterExpressions.length > 0) {
      for(var i = 0; i < this.filterExpressions.length; i++) {
        const filterTree = this.filterExpressions[i];
        const exp1 = <IFilteringExpression>filterTree.filteringOperands[0];
        const filterIdx = this.fieldIndexMap[exp1.fieldName];
        const condition1 = exp1.condition ? WorkbookExportHelper.GetCustomCondition(exp1) : null;
        const filterSettings = region.worksheet.filterSettings;

        if (condition1) {
          // ignore invalid search values...
          if (exp1.searchVal == undefined) {
            continue;
          }

          let exp2 = filterTree.filteringOperands.length > 1 ? <IFilteringExpression>filterTree.filteringOperands[1] : null;
          let condition2 = exp2 && exp2.condition && exp1.fieldName == exp2.fieldName 
            ? WorkbookExportHelper.GetCustomCondition(exp2) 
            : null;

          if (condition2) {
            let conditionOp = filterTree.operator == FilteringLogic.And ? ConditionalOperator.And : ConditionalOperator.Or;
            
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
          var relDateInfo = WorkbookExportHelper.GetRelativeDate(exp1);

          if (relDateInfo != null) {
            if (table) {
              table.columns(filterIdx).applyRelativeDateRangeFilter(relDateInfo.offset, relDateInfo.duration);
            } else {
              filterSettings.applyRelativeDateRangeFilter(filterIdx, relDateInfo.offset, relDateInfo.duration);
            }
          } else {
            switch(exp1.condition.name) {
              case "on":
              case "notOn":
              {
                const isOn = exp1.condition.name == "on";
                let date = <Date>exp1.searchVal;
                let dayStart = date.setHours(0);
                let dayEnd = date.setHours(24);
                let condition1 = new CustomFilterCondition(isOn ? ExcelComparisonOperator.GreaterThanOrEqual : ExcelComparisonOperator.LessThan, dayStart);
                let condition2 = new CustomFilterCondition(isOn ? ExcelComparisonOperator.LessThan : ExcelComparisonOperator.GreaterThanOrEqual, dayEnd);
                let conditionOp = isOn ? ConditionalOperator.And : ConditionalOperator.Or;
                
                if (table) {
                  table.columns(filterIdx).applyCustomFilter(condition1, condition2, conditionOp);
                } else {
                  filterSettings.applyCustomFilter(filterIdx, condition1, condition2, conditionOp);
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
      let adder: (idx:number, cond: SortCondition) => void = table != null
        ? (i, c) => table.sortSettings.sortConditions().addItem(table.columns(i), c)
        : (i, c) => region.worksheet.filterSettings.sortSettings.sortConditions().addItem(new RelativeIndex(i), c);
      var isCaseSensitive: boolean = undefined;

      for(var i = 0; i < this.sortExpressions.length; i++) {
        const sortExp = this.sortExpressions[i];
        var sortDir = sortExp.dir == SortingDirection.Desc ? SortDirection.Descending : SortDirection.Ascending;
        var sortCond = new OrderedSortCondition(sortDir);
        var relIdx = this.fieldIndexMap[sortExp.fieldName];
        if (isCaseSensitive === undefined && sortExp.ignoreCase !== undefined)
          isCaseSensitive = sortExp.ignoreCase;

        adder(relIdx, sortCond);
      }

      if (table) {
        table.sortSettings.caseSensitive = isCaseSensitive == true;
      } else {
        region.worksheet.filterSettings.sortSettings.caseSensitive = isCaseSensitive == true;
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
  readonly row: WorksheetRow;
  readonly dataColumnHeader: string;
  readonly worksheetColumnIndex: number;
  cancel: boolean;
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
  readonly workbook: Workbook;
  readonly worksheet: Worksheet;

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
    var relIdx = this.getRelativeIndex(fieldName);

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
export class IgxWorkbookExporterService extends IgxBaseExporter {
  private grid: any;

  private createExportHelper(data: any[], options: IgxWorkbookExporterOptions) {
    var wb: Workbook;
    var ws: Worksheet;
    var wsName: string;
    var r: number = 0;
    var c: number = 0;
    var fmt: WorkbookFormat;

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

    return new WorkbookExportHelper(ws, r, c, this.grid, data, (<any>this)._columnList, options);
  }

  @Output()
  public onWorksheetCellExporting = new EventEmitter<IWorksheetCellExportingEventArgs>();

  @Output()
  public onWorksheetRowExported = new EventEmitter<IWorksheetRowExportedEventArgs>();

  @Output()
  public onWorkbookExportEnded = new EventEmitter<IWorkbookExportEndedEventArgs>();

  // we need to shadow the existing export method so we can store a reference to the grid
  public export(grid: any, options: IgxWorkbookExporterOptions) {
    var oldGrid = grid;
    try {
      this.grid = grid;
      IgxBaseExporter.prototype.export.call(this, grid, options);
    } finally {
      this.grid = oldGrid;
    }
  }

  // we need to shadow the other overload because we need access to the columnList before the data is pruned
  // so we can remove the default column formatting. we'll apply it later if warranted
  public exportData(data: any[], options: IgxWorkbookExporterOptions) {
    var columnList = (<any>this)._columnList;

    // we're going to clear out the formatter from a column
    if (Array.isArray(columnList)) {
      for(let column of columnList) {
        if (column.formatter) {
          column.columnFormatter = column.formatter;
          column.formatter = null;
        }
      }
    }

    IgxBaseExporter.prototype.exportData.call(this, data, options);
  }

  protected exportDataImplementation(data: any[], options: IgxWorkbookExporterOptions) {
    var helper: WorkbookExportHelper = this.createExportHelper(data, options);
    var ws = helper.worksheet;
    var table: WorksheetTable = null;
    var isSpecial = helper.isSpecialData;

    if (helper.columnCount == 0)
      return;

    // header
    let headerRow = ws.rows(helper.row);
    for (let i = 0; i < helper.columnCount; i++) {
      headerRow.setCellValue(helper.col, helper.headers[i]);
      helper.col++;
    }

    helper.col = helper.startCol;
    helper.row++;

    var firstDataRow = helper.row;

    // the data is stored on each item using the header as the key
    var keys = helper.headers;

    // data
    for (let r = 0; r < data.length; r++) {
      let rData = data[r];
      let excelRow = ws.rows(helper.row);

      if (isSpecial) {
        this.exportCell(keys[0], excelRow, helper.col, rData);
      } else {
        for (let c = 0; c < keys.length; c++) {
          let key = keys[c];
          let cellValue = rData[key];

          // TODO should we use the field to get the formatter?
          let columnOptions = options && options.columnOptions ? options.columnOptions[key] : null;

          if (columnOptions && columnOptions.valueFormatter) {
            cellValue = columnOptions.valueFormatter(cellValue);
          } else if (typeof cellValue !== 'number' && !(cellValue instanceof Date)) {
            // we're going to skip using the column's formatter if the value is date or numeric because 
            // the result is likely to be a string
            var columnFormatter = helper.headerFormatterMap[key];

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
        rowData: rData
      });

      helper.col = helper.startCol;
      helper.row++;
    }

    var region = new WorksheetRegion(ws, 
      helper.startRow, helper.startCol, 
      helper.startRow + (helper.row - helper.startRow - 1),
      helper.startCol + helper.columnCount - 1, false);

    var dataRegion = new WorksheetRegion(ws, 
      firstDataRow, helper.startCol, 
      firstDataRow + (helper.row - firstDataRow - 1),
      helper.startCol + helper.columnCount - 1, false);

    if (options.exportAsTable) {
      table = ws.tables().add(region.toString(), true, null);
    }
    
    var getFieldIndex = helper.InitializeRegion(region, table);

    var endedArgs = new WorkbookExportEndedEventArgs(options.fileName, region, dataRegion, table, (s) => helper.headerIndexMap[s]);
    this.onWorkbookExportEnded.emit(endedArgs);
  }

  private exportCell(columnHeader: string, row: WorksheetRow, columnIndex: number, cellValue: any) {
    var args = {
      row: row,
      dataColumnHeader: columnHeader,
      cellValue: cellValue,
      worksheetColumnIndex: columnIndex,
      cancel: false
    };
    this.onWorksheetCellExporting.emit(args);

    if (!args.cancel) {
      row.setCellValue(columnIndex, args.cellValue);
    }
  }
}