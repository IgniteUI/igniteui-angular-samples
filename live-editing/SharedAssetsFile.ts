import { LiveEditingFile } from "./LiveEditingFile";

export class SharedAssetsFile {
    public dependencies: string;
    public files: Array<LiveEditingFile>;

    constructor(dependencies: string, files: Array<LiveEditingFile>) {
        this.dependencies = dependencies;
        this.files = files;
    }
}
