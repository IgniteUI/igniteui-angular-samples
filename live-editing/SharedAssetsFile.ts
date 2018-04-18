import { LiveEditingFile } from "./LiveEditingFile";

export class SharedAssetsFile {
    public files: Array<LiveEditingFile>;

    constructor(files: Array<LiveEditingFile>) {
        this.files = files;
    }
}
