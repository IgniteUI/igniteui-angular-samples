import { AsyncPipe } from '@angular/common';
import { ChangeDetectorRef, Component, effect, OnInit, signal, viewChild } from '@angular/core';
import { IgxChatComponent, IgxChatMessageContextDirective, IgxChatOptions, MarkdownPipe } from 'igniteui-angular';

@Component({
    selector: 'app-chat-features-sample',
    styleUrls: ['./features-sample.component.scss'],
    templateUrl: './features-sample.component.html',
    imports: [IgxChatComponent, IgxChatMessageContextDirective, AsyncPipe, MarkdownPipe]
})
export class ChatFeaturesSampleComponent {
    private _messageHeader = viewChild.required('messageHeader');
    private _suggestionPrefix = viewChild.required('suggestionPrefix');
    private _messageContent = viewChild.required('messageContent');

    public draftMessage = null;
    public messages = signal([
        {
            id: '1',
            text: `Hello. How can we assist you today?`,
            sender: 'support',
            timestamp: (Date.now() - 3500000).toString()
        },
        {
            id: '2',
            text: `Hello. I have problem with styling IgcAvatarComponent. Can you take a look at the attached file and help me?`,
            sender: 'user',
            timestamp: (Date.now() - 3400000).toString(),
            attachments: [
                {
                id: 'AvatarStyles.css',
                name: 'AvatarStyles.css',
                url: './styles/AvatarStyles.css',
                type: 'text/css'
                },
            ],
        },
        {
            id: '3',
            text: `Sure, give me a moment to check the file.`,
            sender: 'support',
            timestamp: (Date.now() - 3300000).toString()
        },
        {
            id: '4',
            text:
            `Thank you for your patience. It seems that the issue is the name of the CSS part. Here is the fixed code:
    \`\`\`css
    igc-avatar::part(base) {
    --size: 60px;
    color: var(--ig-success-500-contrast);
    background: var(--ig-success-500);
    border-radius: 20px;
    }
    \`\`\`
            `,
            sender: 'support',
            timestamp: (Date.now() - 3200000).toString()
        },
    ]);

    public options = signal<IgxChatOptions>({
        disableAutoScroll: false,
        disableInputAttachments: false,
        inputPlaceholder: 'Type your message here...',
        headerText: 'Developer Support',
        suggestionsPosition: "below-input",
        suggestions: [ 'Send me an e-mail when support is available.' ]
    });

    public templates = signal({});

    constructor(private cdr: ChangeDetectorRef) {
        effect(() => {
            this.templates.set({ messageContent: this._messageContent(), messageHeader: this._messageHeader(), suggestionPrefix: this._suggestionPrefix() } );
        });

    }

    public onMessageCreated(e: any): void {
        const newMessage = e;
        this.messages.update(messages => [...messages, newMessage]);
        this.options.update(options => ({ ...options, isTyping: true, suggestions: [] }));

        const responseMessage = {
            id: Date.now().toString(),
            text: 'Our support team is currently unavailable. We\'ll get back to you as soon as possible.',
            sender: 'support',
            timestamp: Date.now().toString()
        };

        this.draftMessage = { text: '', attachments: [] };
        this.messages.update(messages => [...messages, responseMessage]);
        this.options.update(options => ({ ...options, isTyping: false }));
    }
}
