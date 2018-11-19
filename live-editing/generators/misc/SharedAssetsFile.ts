import { LiveEditingFile } from "./LiveEditingFile";

export class SharedAssetsFile {
    public files: LiveEditingFile[];

    constructor(files: LiveEditingFile[]) {
        this.files = files;
    }
}
