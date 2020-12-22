/**
 * @file 
 */

import dayjs from 'dayjs';

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
export class CalendarMonth {

  weeks: Day[][];

  static DAYS_IN_WEEK = 7;
  static WEEKS_IN_CALENDAR_MONTH = 6;
  static DAYS_IN_CALENDAR_MONTH = CalendarMonth.DAYS_IN_WEEK * CalendarMonth.WEEKS_IN_CALENDAR_MONTH;

  constructor(public date: Date) {
    this.weeks = this.generateWeeks(this.date);
  }

  /**
   * Generate days and weeks in a calendar month.
   *
   * @param date
   *   Date in month to generate.
   *
   * @return
   *   Two dimensional array representing the calendar month.
   */
  generateWeeks(date: Date): Day[][] {
    const today = new Date();
    let t0 = dayjs(date).startOf('month').startOf('week');
    let weeks: Day[][] = [];
    for (let i = 0; i < CalendarMonth.WEEKS_IN_CALENDAR_MONTH; i++) {
      let week: Day[] = [];
      for (let d = 0; d < CalendarMonth.DAYS_IN_WEEK; d++) {
        week.push({
          date: t0.toDate(),
          day: t0.format('D'),
          inMonth: t0.isSame(date, 'month'),
          hasActivity: false,
          isToday: t0.isSame(today, 'day'),
          selected: false,
        });
        t0 = t0.add(1, 'day');
      }
      weeks.push(week);
    }
    return weeks;
  }

  /**
   * Gets a day given index in calendar month.
   *
   * @param index
   *   Index to get.
   *
   * @returns
   *   Day on given index.
   */
  getDayByIndex(index: number): Day {
    return this.weeks[Math.floor(index / CalendarMonth.DAYS_IN_WEEK)][index % CalendarMonth.DAYS_IN_WEEK];
  }

  getNextMonth() {
    return new CalendarMonth(dayjs(this.date).add(1, 'month').toDate());
  }

  getPreviousMonth() {
    return new CalendarMonth(dayjs(this.date).subtract(1, 'month').toDate());
  }

  inMonth(date: Date) {
    return dayjs(this.date).isSame(date, 'month');
  }

}
