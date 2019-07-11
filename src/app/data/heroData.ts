const getHeroClassData = () => {
    const generatedData = [{
        name: "Fighter",
        entries: [{
            name: "Fighter",
            refNo: `4`
        }, {
            name: "Paladin",
            refNo: `5`
        }, {
            name: "Barbarian",
            refNo: `6`
        }]
    }, {
        name: "Support",
        entries: [{
            name: "Archer",
            refNo: `7`
        }, {
            name: "Healer",
            refNo: `8`
        }, {
            name: "Ranger",
            refNo: `9`
        }]
    }, {
        name: "Stealth",
        entries: [{
            name: "Thief",
            refNo: `1`
        }, {
            name: "Shadow",
            refNo: `2`
        }, {
            name: "Ninja",
            refNo: `3`
        }]
    }];
    return generatedData;
};

const getHeroArmorsData = () => {
    const armor = [{
        type: "light",
        armor: ["Robes", "Leather Armor", "Padded Coat", "Urban Ninja Armor"]
    },
    {
        type: "heavy",
        armor: ["Chain Mail", "Plate Mail", "Dragon Skin"]
    }];
    return armor;
};

const getHeroWeaponsData = () => {
    const weapons = {
    "Close Range": ["Short Sword", "Long Sword", "Bastard Sword",
        "Great Sword", "Sabre", "Katana", "Dagger", "Tochilka"],
    "Long Range": ["Short Bow", "Long Bow", "Crossbow", "Heavy Crossbow",
        "Throwing Knives", "Throwing Axes", "Shuriken"]
};

    const heroWeaponsData: any[] = [];
    const keys = Object.keys(weapons);
    for (const key of keys) {
        weapons[key].map((e) => {
            heroWeaponsData.push({
                field: e,
                weaponRange: key
            });
        });
    }
    return heroWeaponsData;
};

interface IHeroClass {
    name: string;
    entries: ISubClass[];
}
interface ISubClass {
    name: string;
    refNo: string;
}
interface IHeroWeapon {
    rangeType: string;
    weapon: string[];
}
interface IHeroArmor {
    type: string;
    armor: string[];
}

export {
    getHeroClassData, ISubClass, IHeroClass, getHeroArmorsData, IHeroArmor,
    IHeroWeapon, getHeroWeaponsData
};
