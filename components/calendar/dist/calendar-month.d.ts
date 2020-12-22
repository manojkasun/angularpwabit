/**
 * @file
 */
/**
 * Represents a day in the calendar month.
 */
export interface Day {
    date: Date;
    day: string;
    inMonth: boolean;
    hasActivity: boolean;
    isToday: boolean;
    selected: boolean;
}
/**
 * Class to represent a calendar month used in the calendar component.
 */
export declare class CalendarMonth {
    date: Date;
    weeks: Day[][];
    static DAYS_IN_WEEK: number;
    static WEEKS_IN_CALENDAR_MONTH: number;
    static DAYS_IN_CALENDAR_MONTH: number;
    constructor(date: Date);
    /**
     * Generate days and weeks in a calendar month.
     *
     * @param date
     *   Date in month to generate.
     *
     * @return
     *   Two dimensional array representing the calendar month.
     */
    generateWeeks(date: Date): Day[][];
    /**
     * Gets a day given index in calendar month.
     *
     * @param index
     *   Index to get.
     *
     * @returns
     *   Day on given index.
     */
    getDayByIndex(index: number): Day;
    getNextMonth(): CalendarMonth;
    getPreviousMonth(): CalendarMonth;
    inMonth(date: Date): boolean;
}
