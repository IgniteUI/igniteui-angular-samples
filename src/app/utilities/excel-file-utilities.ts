import { Workbook } from "igniteui-angular-excel/ES5/Workbook";
import { WorkbookSaveOptions } from "igniteui-angular-excel/ES5/WorkbookSaveOptions";
import { WorkbookFormat } from "igniteui-angular-excel/ES5/WorkbookFormat";
import { saveAs } from 'file-saver';

export class ExcelFileUtilities {
    static getFileExtension(format: WorkbookFormat) {
        switch (format) {
            case WorkbookFormat.StrictOpenXml:
            case WorkbookFormat.Excel2007:
              return ".xlsx";
            case WorkbookFormat.Excel2007MacroEnabled:
              return ".xlsm";
            case WorkbookFormat.Excel2007MacroEnabledTemplate:
              return ".xltm";
            case WorkbookFormat.Excel2007Template:
              return ".xltx";
            case WorkbookFormat.Excel97To2003:
              return ".xls";
            case WorkbookFormat.Excel97To2003Template:
              return ".xlt";
          }
    }

    static load(file: File): Promise<Workbook> {
      return new Promise<Workbook>((resolve, reject) => {
        ExcelFileUtilities.readFileAsUint8Array(file).then((a) =>
        {
          Workbook.load(a, null, (w) =>
          {
            resolve(w);
          }, (e) =>
          {
            reject(e);
          });
        }, (e) =>
        {
          reject(e);
        });
      });
    }

    private static readFileAsUint8Array(file: File): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) =>
        {
            var fr = new FileReader();
            fr.onerror = (e) => {
                reject(fr.error);
            };

            if (fr.readAsBinaryString) {
                fr.onload = (e) => {
                    var str: string = (<any>fr).resultString != null ? (<any>fr).resultString : fr.result;
                    var result = new Uint8Array(str.length);
                    for (var i = 0; i < str.length; i++) {
                        result[i] = str.charCodeAt(i);
                    }
                    resolve(result);
                };

                fr.readAsBinaryString(file);
            } else {
                fr.onload = (e) => {
                    resolve(new Uint8Array(<ArrayBuffer>fr.result));
                };
                
                fr.readAsArrayBuffer(file);
            }
        });
    }

    static save(workbook: Workbook, fileNameWithoutExtension: string): Promise<string> {
      return new Promise<string>((resolve, reject) => {
        var opt = new WorkbookSaveOptions();
        opt.type = "blob";

        workbook.save(opt, (d) => {
          var fileName = fileNameWithoutExtension + ExcelFileUtilities.getFileExtension(workbook.currentFormat);
          saveAs(<Blob>d, fileName);
          resolve(fileName);
        }, (e) => {
          reject(e);
        });
      });
    }
}