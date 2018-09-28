import { Component, TemplateRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxListComponent, IgxListItemComponent } from "igniteui-angular";
import { ContactsService } from "./services/contacts.service";
import { IMessage, MessagesService } from "./services/messages.service";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-list-chat-sample",
    styleUrls: ["./list-chat-sample.component.scss"],
    templateUrl: "./list-chat-sample.component.html"
})
export class ListChatSampleComponent {
    public message: string;
    @ViewChild("myMessage")
    public myMessageTemplate: TemplateRef<any>;
    @ViewChild("othersMessage")
    public othersMessageTemplate: TemplateRef<any>;
    @ViewChild("list")
    public listComponent: IgxListComponent;

    private myId: number = 4;

    constructor(public messagesService: MessagesService, public contactsService: ContactsService) { }

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
        if (event.key === "Enter") {
            this.sendMessage();
        }
    }

    public onSendButtonClick() {
        this.sendMessage();
    }

    private sendMessage() {
        this.addMessage(this.message);
        this.message = null;

        setTimeout(() => {
            if (this.listComponent.children && this.listComponent.children.last) {
                (this.listComponent.children.last as IgxListItemComponent).element.scrollIntoView();
            }
        }, 0);
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
}
