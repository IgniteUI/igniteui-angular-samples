import { Injectable } from "@angular/core";
export interface IMessage {
    authorId: number;
    timestamp: Date;
    message: string;
}
@Injectable({
    providedIn: "root"
})

export class MessagesService {
    private mockMessages: IMessage[] = [
        {
            authorId: 1,
            message: "Hi guys",
            timestamp: new Date(2018, 9, 4, 15, 0)

        },
        {
            authorId: 1,
            message: "How are you?",
            timestamp: new Date(2018, 9, 4, 15, 1)
        },
        {
            authorId: 2,
            message: "Hi dude",
            timestamp: new Date(2018, 9, 4, 15, 3)
        },
        {
            authorId: 2,
            message: "I'm fine. Thank you!",
            timestamp: new Date(2018, 9, 4, 15, 3)
        },
        {
            authorId: 2,
            message: "I hope you too?",
            timestamp: new Date(2018, 9, 4, 15, 3)
        },
        {
            authorId: 4,
            message: "Hello",
            timestamp: new Date(2018, 9, 4, 15, 10)
        },
        {
            authorId: 4,
            message: "I'm Lisa",
            timestamp: new Date(2018, 9, 4, 15, 10)
        },
        {
            authorId: 4,
            message: "and I just joined the company",
            timestamp: new Date(2018, 9, 4, 15, 10)
        },
        {
            authorId: 5,
            message: "Hi Lisa",
            timestamp: new Date(2018, 9, 4, 15, 12)
        },
        {
            authorId: 5,
            message: "Welcome to the party :)",
            timestamp: new Date(2018, 9, 4, 15, 13)
        }
    ];

    public getMessages(): IMessage[] {
        return this.mockMessages;
    }

    public addMessage(message: IMessage) {
        if (message) {
            this.mockMessages.push(message);
        }
    }
}
