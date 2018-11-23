/* tslint:disable */
import { MOCKFINANCEDATA, DATA } from "../../grid/services/financialData";


const Contract: any[] = [
    "Forwards", "Futures", "Options", "Swap", "CFD", "Ticks", "Swaptions", "Asion Option"
]
  
  interface IResponse {
      data: any[];
      recordsUpdated: number;
    }
  export class FinancialData {
      public generateData(count: number): any[] {
          const currData = [];
          const keys = ["Metal", "Oil", "Agriculture", "Livestock", "Currencies", "Index", "Interest Rate"];
  
          for (let i = 0; i < Contract.length; i++) {
            let rand = Math.floor(Math.random() * Math.floor(DATA.length));
            const dataObj = Object.assign({}, DATA[rand]);
            dataObj.Category = Contract[i];
            dataObj['Categories'] = [];
            dataObj.ID = i;
  
            // create hierarchical data
            for (let y = 0; y < count / keys.length; y++) {
                rand = Math.floor(Math.random() * Math.floor(DATA.length));
                const childDataObj = Object.assign({}, DATA[rand]);
                childDataObj.ID = y + i + 1;
                this.randomizeObjectData(childDataObj);
  
                for (const mockData of MOCKFINANCEDATA) {
                  for (const prop in mockData) {
                      if (mockData.hasOwnProperty(prop)) {
                        childDataObj[prop] = mockData[prop];
                      }
                  }
                }
  
                dataObj['Categories'].push(childDataObj);
             }
  
            for (const mockData of MOCKFINANCEDATA) {
                for (const prop in mockData) {
                    if (mockData.hasOwnProperty(prop)) {
                        dataObj[prop] = mockData[prop];
                    }
                }
            }
  
            currData.push(dataObj);
          }
          return currData;
      }
  
      private randomizeObjectData(childDataObj) {
          const changeP = "Change(%)";
          const res = this.generateNewPrice(childDataObj.Price);
          childDataObj.Change = res.Price - childDataObj.Price;
          childDataObj.Price = res.Price;
          childDataObj[changeP] = res.ChangePercent;
      }
      private generateNewPrice(oldPrice): any {
          const rnd = parseFloat(Math.random().toFixed(2));
          const volatility = 2;
          let newPrice = 0;
  
          let changePercent = 2 * volatility * rnd;
          if (changePercent > volatility) {
              changePercent -= (2 * volatility);
          }
  
          const changeAmount = oldPrice * (changePercent / 100);
          newPrice = oldPrice + changeAmount;
  
          const result = {Price: 0, ChangePercent: 0};
          result.Price = parseFloat(newPrice.toFixed(2));
          result.ChangePercent = parseFloat(changePercent.toFixed(2));
  
          return result;
      }
      private generateRandomNumber(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
      public updateAllPrices(data: any[]): any[] {
        const currData = [];
        for (const dataRow of data) {
          const dataObj = Object.assign({}, dataRow);
          this.randomizeObjectData(dataObj);
          currData.push(dataObj);
        }
        return currData;
      }
  
    public updateRandomPrices(data: any[]): any {
        const currData = data.slice(0, data.length + 1);
        let y = 0;
        for (let i = Math.round(Math.random() * 10); i < data.length; i += Math.round(Math.random() * 10)) {
          const dataObj = Object.assign({}, data[i]);
          this.randomizeObjectData(dataObj);
          currData[i] = dataObj;
          y++;
        }
       // return {data: currData, recordsUpdated: y };
        return currData;
      }
  }
  