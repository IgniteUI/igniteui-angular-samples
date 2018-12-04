// tslint:disable:object-literal-sort-keys

export enum IMPORTANCE {
    LOW = -1,
    NORMAL = 0,
    HIGH = 1
}

export const emails = [
    {
        title: "Upcoming Christmas Party",
        subtitle: "Here are the details about our upcoming company..",
        content: `
        Here are the details about our upcoming company Christmas Party:

        Start time: December 7th, 4PM
        Location: Jerry & Perry's Pool and Pins
        Dress code: Festive!

        Make sure to bring a lot of Christmas Cheer, smiles and positive attitude!
        `,
        importance: IMPORTANCE.HIGH,
        from: `Mark Patterson`,
        to: `OpsTeam`,
        received: new Date(`12/05/2018 11:54`)
    },
    {
        title: "An item on your tasks list requires attention - #1411",
        subtitle: "",
        content: `
            An item on your tasks list requires attention:
            ID: 1441
            Name: Migrate HCMC Mailbox
            Due Date: 12/5/2018

            For more information, click the following link
        `,
        importance: IMPORTANCE.NORMAL,
        from: `BusinessCorpAutomated`,
        to: `Testy Testington`,
        received: new Date(`12/05/2018 11:43`)
    },
    {
        title: "Holiday Schedule",
        subtitle: "",
        content: `
            Hi all,

            You can find the holidays shift schedule on the below link:
            https://example.com/my-schedules/example-corp/holidays.xlsx
        `,
        importance: IMPORTANCE.NORMAL,
        from: `Jennie Makliewzki`,
        to: `OpsTeam`,
        received: new Date(`12/05/2018 11:31`)
    },
    {
        title: "An item on your tasks list requires attention - #1402",
        subtitle: "",
        content: `
            An item on your tasks list requires attention:
            ID: 1402
            Name: Set up BFHH-1 account permissions
            Due Date: 12/5/2018

            For more information, click the following link
        `,
        importance: IMPORTANCE.NORMAL,
        from: `BusinessCorpAutomated`,
        to: `Testy Testington`,
        received: new Date(`12/05/2018 11:12`)
    },
    {
        title: "An item on your tasks list requires attention - #1389",
        subtitle: "",
        content: `
            An item on your tasks list requires attention:
            ID: 1389
            Name: Set up BFHH-2 account permissions
            Due Date: 12/5/2018

            For more information, click the following link
        `,
        importance: IMPORTANCE.NORMAL,
        from: `BusinessCorpAutomated`,
        to: `Testy Testington`,
        received: new Date(`12/05/2018 10:47`)
    },
    {
        title: "Christmas Cookies!",
        subtitle: "Yum Yum Yum!!!",
        content: `
            Good morning everybody!

            Christmas week is just one weekend away, so I thought it's high time I got to some baking!
            In the cafeteria on the 2nd floor, you'll find a basket of my homemade Christmas cookies -
            my treat for you this sunny Tuesday!

            As always, first come - first serve, so you'd better hurry up!
        `,
        importance: IMPORTANCE.LOW,
        from: `Santia Nickolas`,
        to: `Everyone`,
        received: new Date(`12/05/2018 10:27`)
    }
];
