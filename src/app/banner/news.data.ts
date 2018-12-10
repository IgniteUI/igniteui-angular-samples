// tslint:disable:object-literal-sort-keys
// tslint:disable-next-line:interface-name
export interface NewsData {
    title: string;
    content: string;
    image?: string;
}
export const newsData: NewsData[][] = [
    [{
        title: `In the midst of climate change debates`,
        content: `While Paris and Washington battled over climate measures,
        Costa Rica went 300 days on renewable energy alone`
    }, {
        title: `Florida sea turtles have record nesting season, despite red tide algae`,
        content: `Despite red tide algae's effect on southwest Florida beaches,
        sea turtles set records during the 2018 nesting season.
        While the total number of nests in Collier County was marginally lower
        - 1,635 in 2017 compared to 1,595 in 2018 -
        the number of hatched nests was nearly double: 743 in 2017 compared to 1,399 in 2018.`
    }],
    [{
        title: `Minn. farm donates 36,000 pounds of potatoes for Thanksgiving food program`,
        content: `When a pastor with Union Gospel Mission called Edling Farms about seven years ago,
        looking for potatoes for the mission's Thanksgiving dinner, "we of course said yes," Brett Edling says.

        This year, Edling Farms donated 36,000 pounds of potatoes to Union Gospel Mission Twin Cities,
        which will put the potatoes to use to help feed an estimated 60,000 people.`
    }, {
        title: `Couple finds $1.8 million lottery ticket while cleaning before Thanksgiving`,
        content: `A couple made their house and their bank account look like a million bucks
        while cleaning up ahead of having family over for Thanksgiving.
        The couple found the winning Louisiana Lottery ticket just in time, too, as it was set to expire in two weeks.
        The lucky ticket was from the June 6 drawing, and prizes must be claimed within 180 days of the drawing.`
    }]
];
