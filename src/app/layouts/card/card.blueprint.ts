interface ICard {
    title?: string;
    subtitle?: string;
    content?: string;
    imageUrl?: string;
    avatarUrl?: string;
    buttons?: string[];
    icons?: string[];
    chips?: string[];
    unit?: string;
}

export interface IWeatherList {
    isSunny: boolean;
    day: string;
    icon: string;
    tempHeight: string;
    tempLow: string;
}

export interface IWeatherDetails {
    value: string;
    icon: string;
    label: string;
}

export class Card {
    public title: string;
    public subtitle: string;
    public content: string;
    public imageUrl: string;
    public avatarUrl: string;
    public buttons: string[];
    public icons: string[];
    public chips: string[];
    public unit: string;

    constructor(obj?: ICard) {
        this.title = obj.title || "Card Title";
        this.subtitle = obj.subtitle || "Card Subtitle";
        this.content = obj.content ||
            "Some card content should be placed here. Description or other related information.";
        this.imageUrl = obj.imageUrl || "assets/images/card/media/placeholder.jpg";
        this.avatarUrl = obj.avatarUrl || "assets/images/card/avatars/rupert_stadler.jpg";
        this.buttons = obj.buttons || ["ACTION1", "ACTION2"];
        this.icons = obj.icons || ["favorite", "bookmark", "share"];
        this.chips = obj.chips || [];
        this.unit = obj.unit || undefined;
    }
}

export function weatherListFactory(params?: any): IWeatherList {
    return {
        day: params.day || "day of the week",
        icon: params.icon || "wb_cloudy",
        isSunny: params.isSunny || "",
        tempHeight: params.tempHeight || "°C",
        tempLow: params.tempLow || "°C"
    };
}

export function weatherDetailsFactory(params?: any): IWeatherDetails {
    return {
        icon: params.icon || "",
        label: params.label || "",
        value: params.value || ""
    };
}
