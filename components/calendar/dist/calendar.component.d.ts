import { CalendarMonth } from './calendar-month';
export declare class CalendarComponent {
    today: Date;
    currentMonth: CalendarMonth;
    private _value;
    set value(value: Date);
    get value(): Date;
    constructor();
    goNext(): void;
    goPrev(): void;
    goTo(month: CalendarMonth): void;
    hasActivity(day: Date): boolean;
    isSelected(day: Date): boolean;
}
