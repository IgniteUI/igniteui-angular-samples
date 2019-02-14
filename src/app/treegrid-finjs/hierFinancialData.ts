/* tslint:disable */
import { MOCKFINANCEDATA, DATA } from "../grid/services/financialData";


const Contract: any[] = [
    "Forwards", "Futures", "Options", "Swap", "CFD", "Ticks", "Swaptions", "Asion Option"
]
  
export class FinancialData {
    public generateData(count: number): any[] {
        const currData = [];
        for (let i = 0; i < DATA.length; i++) {
            DATA[i].ID = 10 + i;
          }

        for (let i = 0; i < Contract.length; i++) {
          let rand = Math.floor(Math.random() * Math.floor(DATA.length));
          const dataObj = Object.assign({}, DATA[rand]);
          dataObj.Category = Contract[i];
          dataObj['Categories'] = [];
          dataObj.ID = i * count;

          // add second level of hier data
          const childData = this.addHierarchicalData(count/4, i, dataObj.ID);
          for (const childDataObj of childData) {
            const numberofChildData = this.generateRandomNumber(3,6);
            childDataObj['Categories'] = this.addHierarchicalData(childData/4, i, childDataObj.ID, 4);
          }

          // add level of hier data
          dataObj['Categories'] = childData;

          this.addMockData(dataObj);
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
    private addMockData(dataObj) {
        for (const mockData of MOCKFINANCEDATA) {
          for (const prop in mockData) {
              if (mockData.hasOwnProperty(prop)) {
                  dataObj[prop] = mockData[prop];
              }
          }
        }
      }
      private addHierarchicalData(count: number, i: number, parentRowId: number, toAdd?: number): any {
        const childData = [];
        const numberToAdd = toAdd ? toAdd : Math.round(count / Contract.length);
        for (let y = 0; y < numberToAdd; y++) {
          const rand = Math.floor(Math.random() * Math.floor(DATA.length));
          const childDataObj = Object.assign({}, DATA[rand]);
          childDataObj.ID = parentRowId * 10  + y + 1;
          this.randomizeObjectData(childDataObj);
          this.addMockData(childDataObj)
          childData.push(childDataObj);
        }
        return childData;
      }
  }
  