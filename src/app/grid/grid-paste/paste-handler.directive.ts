/* eslint-disable @typescript-eslint/naming-convention */
import { OnInit, Directive, EventEmitter, HostListener, Output} from '@angular/core';

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[paste-handler]' })
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class PasteHandler implements OnInit{
    @Output()
    public dataProcessed = new EventEmitter<any>();

    public textArea;

    @HostListener('focusin', ['$event'])
    public focusIn(eventArgs) {
    }

    @HostListener('keydown', ['$event'])
    public ControlV(eventArgs) {
        const ctrl = eventArgs.ctrlKey;
        const key = eventArgs.keyCode;
        // Ctrl-V || Shift-Ins || Cmd-V
        if ((ctrl || eventArgs.metaKey) && key === 86 || eventArgs.shiftKey && key === 45) {
            this.textArea.focus();
        }
    }

    public ngOnInit(): void {
        const div = document.createElement('div');
        const divStyle = div.style;
        divStyle.position = 'fixed';
        document.body.appendChild(div);
        this.textArea = document.createElement('textarea');
        const style = this.textArea.style;
        style.opacity = '0';
        style.height = '0px';
        style.width = '0px';
        style.overflow = 'hidden';
        div.appendChild(this.textArea);

        this.textArea.addEventListener('paste', (eventArgs) => { this.onPaste(eventArgs); });
    }

    public onPaste(eventArgs) {
    let data;
    const clData = 'clipboardData';

    // get clipboard data - from window.cliboardData for IE or from the original event's arguments.
    if (window[clData]) {
        window.event.returnValue = false;
        data = window[clData].getData('text');
    } else {
        data = eventArgs[clData].getData('text/plain');
    }

    // process the clipboard data
    const processedData = this.processData(data);

    this.dataProcessed.emit(processedData);
    }

    public processData(data) {
        const pasteData = data.split('\n');
        for (let i = 0; i < pasteData.length; i++) {
            pasteData[i] = pasteData[i].split('\t');
            // Check if last row is a dummy row
            if (pasteData[pasteData.length - 1].length === 1 && pasteData[pasteData.length - 1][0] === '') {
                pasteData.pop();
            }
            // remove empty data
            if (pasteData.length === 1 &&
                 pasteData[0].length === 1 &&
                  (pasteData[0][0] === '' || pasteData[0][0] === '\r')) {
                    pasteData.pop();
            }
        }
        return pasteData;
    }
}
