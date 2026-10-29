export class IncomeTaxesItem {
    public constructor(init: Partial<IncomeTaxesItem>) {
        Object.assign(this, init);
    }
    public year: string;
    public revenue: number;
}
export class IncomeTaxes extends Array<IncomeTaxesItem> {
    public constructor(items: IncomeTaxesItem[] | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new IncomeTaxesItem({
                    year: `2021`,
                    revenue: 15
                }),
                new IncomeTaxesItem({
                    year: `2022`,
                    revenue: 30
                }),
                new IncomeTaxesItem({
                    year: `2023`,
                    revenue: 18
                }),
                new IncomeTaxesItem({
                    year: `2024`,
                    revenue: 30
                }),
                new IncomeTaxesItem({
                    year: `2025`,
                    revenue: 38
                })
            ];
            super(...newItems.slice(0));
        }
    }
}
