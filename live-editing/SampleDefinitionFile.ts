import { LiveEditingFile } from "./LiveEditingFile";

export class SampleDefinitionFile {
    public sampleFiles: Array<LiveEditingFile>;
    public sampleDependencies: string;

    constructor(files: Array<LiveEditingFile>, dependencies: Array<string>) {
        this.sampleFiles = files;
        this.sampleDependencies = JSON.stringify(dependencies);
    }
}
