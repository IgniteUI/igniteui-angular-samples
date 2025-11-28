import { AsyncPipe } from '@angular/common';
import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IgxAvatarComponent, IgxChatComponent, IgxChatOptions } from 'igniteui-angular';


@Component({
    selector: 'app-chat-styling-sample',
    styleUrls: ['./styling-sample.component.scss'],
    templateUrl: './styling-sample.component.html',
    imports: [IgxAvatarComponent, IgxChatComponent, AsyncPipe],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatStylingSampleComponent {
    public draftMessage = { text: '', attachments: [] };

    public messages = signal([
        {
            id: '1',
            text: `Hi, I have a question about my recent order, #7890.`,
            sender: 'user',
            timestamp: (Date.now() - 3500000).toString()
        },
        {
            id: '2',
            text: `Hello! I can help with that. What is your question regarding order #7890?`,
            sender: 'support',
            timestamp: (Date.now() - 3400000).toString()
        },
        {
            id: '3',
            text: `The tracking status shows 'delivered', but I haven't received it yet. Can you confirm the delivery location?`,
            sender: 'user',
            timestamp: (Date.now() - 3300000).toString()
        },
        {
            id: '4',
            text: `I've reviewed the delivery details. It seems the package was left in a different spot. Here's a photo from our delivery driver showing where it was placed. Please check your porch and side door.`,
            sender: 'support',
            timestamp: (Date.now() - 3200000).toString(),
            attachments: [
                {
                id: 'delivery-location-image',
                name: 'Delivery location',
                url: 'https://media.istockphoto.com/id/1207972183/photo/merchandise-delivery-from-online-ordering.jpg?s=612x612&w=0&k=20&c=cGcMqd_8FALv4Tueh7sllYZuDXurkfkqoJf6IAIWhJk=',
                type: 'image'
                }
            ]
        }
    ]);

    public options = signal<IgxChatOptions>({
        disableAutoScroll: false,
        disableInputAttachments: false,
        suggestions: [`It's there. Thanks.`, `It's not there.`],
        inputPlaceholder: 'Type your message here...',
        headerText: 'Customer Support',
        adoptRootStyles: true
    });

    constructor() {}

    public onMessageCreated(msg: any): void {
        const newMessage = msg;
        this.messages.update(messages => ([...messages, newMessage]));
        this.options.update(options => ({ ...options, isTyping: true, suggestions: [] }));


        const messageText = msg.text.toLowerCase();
        const responseText = messageText.includes('not there')
        ? `We're sorry to hear that. Checking with the delivery service for more details.`
        : messageText.includes('it\'s there')
            ? `Glad to hear that! If you have any more questions or need further assistance, feel free to ask. We're here to help!`
            : `Our support team is currently unavailable. We'll get back to you as soon as possible.`;

        const responseMessage = {
            id: Date.now().toString(),
            text: responseText,
            sender: 'support',
            timestamp: Date.now().toString(),
        };

        this.draftMessage = { text: '', attachments: [] };
        this.messages.update(messages => [...messages, responseMessage]);
        this.options.update(options => ({ ...options, isTyping: false }));
    }
}
