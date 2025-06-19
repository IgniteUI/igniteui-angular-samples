import { AfterViewInit, Component, ElementRef, TemplateRef, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { ContactsService } from './services/contacts.service';
import { IMessage, MessagesService } from './services/messages.service';
import { FormsModule } from '@angular/forms';
import { IgxListComponent, IgxListItemComponent, IgxAvatarComponent, IgxInputGroupComponent, IgxInputDirective, IgxSuffixDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { NgClass, NgTemplateOutlet, DatePipe } from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-list-chat-sample',
    styleUrls: ['./list-chat-sample.component.scss'],
    templateUrl: './list-chat-sample.component.html',
    imports: [FormsModule, IgxListComponent, IgxListItemComponent, IgxAvatarComponent, NgClass, NgTemplateOutlet, IgxInputGroupComponent, IgxInputDirective, IgxSuffixDirective, IgxIconButtonDirective, IgxIconComponent, DatePipe]
})
export class ListChatSampleComponent implements AfterViewInit {
    messagesService = inject(MessagesService);
    contactsService = inject(ContactsService);

    @ViewChild('form', { static: true })
    public form: ElementRef;

    @ViewChild('myMessage', { static: true })
    public myMessageTemplate: TemplateRef<any>;

    @ViewChild('othersMessage', { static: true })
    public othersMessageTemplate: TemplateRef<any>;

    public message: string;
    private myId = 4;

    public getMessageTemplate(message: IMessage): TemplateRef<any> {
        if (message.authorId === this.myId) {
            return this.myMessageTemplate;
        }

        return this.othersMessageTemplate;
    }

    public isFirstMessage(messageIndex: number): boolean {
        if (messageIndex === 0) {
            return true;
        }

        const messages = this.messagesService.getMessages();
        if (messageIndex >= messages.length) {
            return false;
        }

        const currentMessage = messages[messageIndex];
        const previousMessage = messages[messageIndex - 1];

        return currentMessage.authorId !== previousMessage.authorId;
    }

    public onMessageKeypress(event) {
        if (event.key === 'Enter') {
            this.sendMessage();
        }
    }

    public onSendButtonClick() {
        this.sendMessage();
    }

    private sendMessage() {
        this.addMessage(this.message);
        this.message = null;
    }

    private addMessage(message: string) {
        if (message) {
            const messageInstance: IMessage = {
                authorId: this.myId,
                message,
                timestamp: new Date(Date.now())
            };
            this.messagesService.addMessage(messageInstance);
        }
    }

    public ngAfterViewInit() {
        this.scrollToBottom();
    }

    private scrollToBottom(): void {
        const form = this.form.nativeElement;
        form.scrollTop = form.scrollHeight;
    }
}
