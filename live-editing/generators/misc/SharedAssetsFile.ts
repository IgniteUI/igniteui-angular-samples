import { LiveEditingFile } from "./LiveEditingFile";

export class SharedAssetsFile {
    public files: LiveEditingFile[];
    public devDependencies: object;
    constructor(files: LiveEditingFile[], devDependencies: object) {
        this.files = files;
        this.devDependencies = devDependencies;
    }
}
