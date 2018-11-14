import { LiveEditingFile } from "./LiveEditingFile";

export class SampleDefinitionFile {
    public sampleFiles: LiveEditingFile[];
    public sampleDependencies: string;

    constructor(files: LiveEditingFile[], dependencies: string[]) {
        this.sampleFiles = files;
        this.sampleDependencies = JSON.stringify(dependencies);
    }
}
