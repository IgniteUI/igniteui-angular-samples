import { DATA, MOCKFINANCEDATA } from "../../grid/services/financialData";

const contract: any[] = [
    "Forwards", "Futures", "Options", "Swap", "CFD", "Ticks", "Swaptions", "Asion Option"
];

export class FinancialData {
    public generateData(count: number): any[] {
        const currData = [];
        const categories = "Categories";
        for (let i = 0; i < DATA.length; i++) {
            DATA[i].ID = 10 + i;
          }

        for (let i = 0; i < contract.length; i++) {
          const rand = Math.floor(Math.random() * Math.floor(DATA.length));
          const dataObj = Object.assign({}, DATA[rand]);
          dataObj.Category = contract[i];
          dataObj[categories] = [];
          dataObj.ID = i * count;

          // add second level of hier data
          const childData = this.addHierarchicalData(count / 4, i, dataObj.ID);
          for (const childDataObj of childData) {
            childDataObj[categories] = this.addHierarchicalData(childData / 4, i, childDataObj.ID, 4);
          }

          // add level of hier data
          dataObj[categories] = childData;

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
        const numberToAdd = toAdd ? toAdd : Math.round(count / contract.length);
        for (let y = 0; y < numberToAdd; y++) {
            const rand = Math.floor(Math.random() * Math.floor(DATA.length));
            const childDataObj = Object.assign({}, DATA[rand]);
            childDataObj.ID = parentRowId * 10  + y + 1;
            this.randomizeObjectData(childDataObj);
            this.addMockData(childDataObj);
            childData.push(childDataObj);
        }
        return childData;
    }
}
