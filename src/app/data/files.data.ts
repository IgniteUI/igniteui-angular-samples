// tslint:disable:object-literal-sort-keys
const users = ["Administrator", "All Users", "Guest"];
const names = {
    serious: ["Sales", "Clients", "Salaries", "Work", "Management"],

    light: ["Party", "Vacation", "Holiday", "Birthday", "Christmas"]
};
const types = {
    serious: ["Memo", "Report", "Quota", "Roadmap"],
    light: ["Picture", "Anecdote", "Screenshot", "Video"]
};
const extensions = {
    serious: [".pdf", ".xls", ".doc", ".xlsx", ".shp", ".dbf", ".csv", ".json"],
    light: ["jpeg", ".wav", ".png", ".mp3"]
};
const employees = ["Dave", "Marta", "Andrew", "Ivan", "Pete", "Yavor",
"Cindy", "Maria", "Karl", "Carol", "Ramesh", "Anna"];
const folderNames = {
    serious: ["Documents", "Reports", "Work Items", "Data"],
    light: ["Pictures", "Videos"]
};
const data = {
    employee: () => employees[getRandomNumber(0, employees.length - 1)],
    extensions_serious: () => extensions.serious[getRandomNumber(0, extensions.serious.length - 1)],
    extensions_light: () => extensions.light[getRandomNumber(0, extensions.light.length - 1)],
    types_serious: () => types.serious[getRandomNumber(0, types.serious.length - 1)],
    types_light: () => types.light[getRandomNumber(0, types.light.length - 1)],
    names_serious: () => names.serious[getRandomNumber(0, names.serious.length - 1)],
    names_light: () => names.light[getRandomNumber(0, names.light.length - 1)],
    folderNames_serious: () => folderNames.serious[getRandomNumber(0, folderNames.serious.length - 1)],
    folderNames_light: () => folderNames.light[getRandomNumber(0, folderNames.light.length - 1)],
    user: () => users[getRandomNumber(0, users.length - 1)]
};
const getProp = (property: string, isSerious: string) => data[`${property}_${isSerious}`]();
const getRandomDate = () => {
    const month = getRandomNumber(1, 12);
    const day = getRandomNumber(3, 24);
    const year = getRandomNumber(2010, 2019);
    return `${month}/${day}/${year}`;
};
const getRandomNumber = (start: number, end: number) => Math.floor(Math.random() * (end - start + 1)) + start;
const createData = (level1: number, level2: number, level3: number) => {
    const generatedData = [];
    for (let i = 0; i < level1; i++) {
        const drive = {
            directoryName: String.fromCharCode(65 + i),
            size: 0,
            name: i === 0 ? `Main Drive` : `Drive ${i}`,
            system: i % 3 === 0,
            id: i,
            folders: []
        };
        for (let j = 0; j < level2; j++) {
            const isSerious = getRandomNumber(0, 1) ? "serious" : "light";
            const date = getRandomDate();
            const folder = {
                name: getProp("folderNames", isSerious) + ` ${date}`,
                size: 0,
                createdOn: date,
                createdBy: data.employee(),
                id: j,
                files: []
            };
            for (let k = 0; k < level3; k++) {
                const fileSize = getRandomNumber(24, 64);
                const document = {
                    name: getProp("names", isSerious) + " " + getProp("types", isSerious),
                    extension: getProp("extensions", isSerious),
                    owner: data.user,
                    id: k,
                    size: fileSize,
                    createdBy: data.employee()
                };
                folder.files.push(document);
                folder.size += fileSize;
            }
            drive.size += folder.size;
            drive.folders.push(folder);
        }
        generatedData.push(drive);
    }
    return generatedData;
};

interface IDrive {
    directoryName: string;
    size: number;
    name: string;
    system: boolean;
    id: number;
    folders: IFolder[];
}

interface IFolder {
    name: string;
    size: number;
    id: number;
    files: IFile[];
}

interface IFile {
    name: string;
    extension: string;
    owner: string;
    size: number;
    createdBy: string;
}

export { createData, IDrive, IFolder, IFile };
