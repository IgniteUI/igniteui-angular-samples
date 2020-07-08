import { LiveEditingFile } from "./LiveEditingFile";

export class SharedAssetsFile {
    public files: LiveEditingFile[];
    public devDependencies: Object;
    constructor(files: LiveEditingFile[], devDependencies: Object) {
        this.files = files;
        this.devDependencies = devDependencies;
    }
}
