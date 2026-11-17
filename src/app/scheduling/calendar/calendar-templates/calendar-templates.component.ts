import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
    IGX_CALENDAR_DIRECTIVES,
    IgxCalendarComponent,
    IgxCalendarView
} from 'igniteui-angular/calendar';

interface CalendarEvent {
    title: string;
    type: 'meeting' | 'deadline' | 'personal';
}

const today = new Date();

// Events are placed relative to the current month so the sample always has data to show.
const eventsByDay: Record<number, CalendarEvent[]> = {
    3: [{ title: 'Sprint planning', type: 'meeting' }],
    7: [{ title: 'Design review', type: 'meeting' }, { title: 'Dentist', type: 'personal' }],
    12: [{ title: 'Release candidate', type: 'deadline' }],
    15: [
        { title: 'Team sync', type: 'meeting' },
        { title: 'Budget report', type: 'deadline' },
        { title: 'Gym', type: 'personal' }
    ],
    21: [{ title: 'Customer demo', type: 'meeting' }],
    26: [{ title: 'Code freeze', type: 'deadline' }, { title: 'Retrospective', type: 'meeting' }]
};

@Component({
    selector: 'app-calendar-templates',
    styleUrls: ['./calendar-templates.component.scss'],
    templateUrl: './calendar-templates.component.html',
    imports: [
        IgxCalendarComponent,
        IGX_CALENDAR_DIRECTIVES,
        DatePipe
    ]
})
export class CalendarTemplatesComponent {
    public selectedDate: Date = new Date(today.getFullYear(), today.getMonth(), 15);

    public getEvents(date: Date): CalendarEvent[] {
        if (!this.isCurrentMonth(date)) {
            return [];
        }
        return eventsByDay[date.getDate()] ?? [];
    }

    public getMonthEventsCount(date: Date): number {
        if (!this.isCurrentMonth(date)) {
            return 0;
        }
        return Object.values(eventsByDay).reduce((count, events) => count + events.length, 0);
    }

    public pluralize(count: number): string {
        return `${count} ${count === 1 ? 'event' : 'events'}`;
    }

    public onSelection(date: Date | Date[]) {
        this.selectedDate = date as Date;
    }

    public onSubheaderKeydown(event: KeyboardEvent, calendar: IgxCalendarComponent, view: IgxCalendarView) {
        // Keep the key from reaching the calendar's own keyboard navigation.
        event.stopPropagation();

        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.switchView(event, calendar, view);
        }
    }

    public switchView(event: Event, calendar: IgxCalendarComponent, view: IgxCalendarView) {
        // The subheader is re-rendered for the new view, which removes the focused button.
        // Move focus to the calendar body (the grid around the subheader) so keyboard navigation continues in the new view.
        const grid = (event.target as HTMLElement).closest<HTMLElement>('[role="grid"]');
        calendar.activeView = view;
        grid?.focus();
    }

    private isCurrentMonth(date: Date): boolean {
        return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth();
    }
}
