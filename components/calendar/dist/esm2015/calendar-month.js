/**
 * @fileoverview added by tsickle
 * Generated from: calendar-month.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @file
 */
import dayjs from 'dayjs';
/**
 * Represents a day in the calendar month.
 * @record
 */
export function Day() { }
if (false) {
    /** @type {?} */
    Day.prototype.date;
    /** @type {?} */
    Day.prototype.day;
    /** @type {?} */
    Day.prototype.inMonth;
    /** @type {?} */
    Day.prototype.hasActivity;
    /** @type {?} */
    Day.prototype.isToday;
    /** @type {?} */
    Day.prototype.selected;
}
/**
 * Class to represent a calendar month used in the calendar component.
 */
export class CalendarMonth {
    /**
     * @param {?} date
     */
    constructor(date) {
        this.date = date;
        this.weeks = this.generateWeeks(this.date);
    }
    /**
     * Generate days and weeks in a calendar month.
     *
     * @param {?} date
     *   Date in month to generate.
     *
     * @return {?}
     *   Two dimensional array representing the calendar month.
     */
    generateWeeks(date) {
        /** @type {?} */
        const today = new Date();
        /** @type {?} */
        let t0 = dayjs(date).startOf('month').startOf('week');
        /** @type {?} */
        let weeks = [];
        for (let i = 0; i < CalendarMonth.WEEKS_IN_CALENDAR_MONTH; i++) {
            /** @type {?} */
            let week = [];
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
     * @param {?} index
     *   Index to get.
     *
     * @return {?}
     *   Day on given index.
     */
    getDayByIndex(index) {
        return this.weeks[Math.floor(index / CalendarMonth.DAYS_IN_WEEK)][index % CalendarMonth.DAYS_IN_WEEK];
    }
    /**
     * @return {?}
     */
    getNextMonth() {
        return new CalendarMonth(dayjs(this.date).add(1, 'month').toDate());
    }
    /**
     * @return {?}
     */
    getPreviousMonth() {
        return new CalendarMonth(dayjs(this.date).subtract(1, 'month').toDate());
    }
    /**
     * @param {?} date
     * @return {?}
     */
    inMonth(date) {
        return dayjs(this.date).isSame(date, 'month');
    }
}
CalendarMonth.DAYS_IN_WEEK = 7;
CalendarMonth.WEEKS_IN_CALENDAR_MONTH = 6;
CalendarMonth.DAYS_IN_CALENDAR_MONTH = CalendarMonth.DAYS_IN_WEEK * CalendarMonth.WEEKS_IN_CALENDAR_MONTH;
if (false) {
    /** @type {?} */
    CalendarMonth.DAYS_IN_WEEK;
    /** @type {?} */
    CalendarMonth.WEEKS_IN_CALENDAR_MONTH;
    /** @type {?} */
    CalendarMonth.DAYS_IN_CALENDAR_MONTH;
    /** @type {?} */
    CalendarMonth.prototype.weeks;
    /** @type {?} */
    CalendarMonth.prototype.date;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYml0L3VuZGVyc3RhbmRpdC56ZXVzLmNhbGVuZGFyLyIsInNvdXJjZXMiOlsiY2FsZW5kYXItbW9udGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7Ozs7O0FBSzFCLHlCQU9DOzs7SUFOQyxtQkFBVzs7SUFDWCxrQkFBWTs7SUFDWixzQkFBaUI7O0lBQ2pCLDBCQUFxQjs7SUFDckIsc0JBQWlCOztJQUNqQix1QkFBa0I7Ozs7O0FBTXBCLE1BQU0sT0FBTyxhQUFhOzs7O0lBUXhCLFlBQW1CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7Ozs7OztJQVdELGFBQWEsQ0FBQyxJQUFVOztjQUNoQixLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUU7O1lBQ3BCLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7O1lBQ2pELEtBQUssR0FBWSxFQUFFO1FBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUMxRCxJQUFJLEdBQVUsRUFBRTtZQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDUixJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRTtvQkFDakIsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNuQixPQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO29CQUNqQyxXQUFXLEVBQUUsS0FBSztvQkFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztvQkFDaEMsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCLENBQUMsQ0FBQztnQkFDSCxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdkI7WUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7Ozs7O0lBV0QsYUFBYSxDQUFDLEtBQWE7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEcsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixPQUFPLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVU7UUFDaEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7QUE5RE0sMEJBQVksR0FBRyxDQUFDLENBQUM7QUFDakIscUNBQXVCLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLG9DQUFzQixHQUFHLGFBQWEsQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLHVCQUF1QixDQUFDOzs7SUFGbkcsMkJBQXdCOztJQUN4QixzQ0FBbUM7O0lBQ25DLHFDQUFtRzs7SUFKbkcsOEJBQWU7O0lBTUgsNkJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZSBcbiAqL1xuXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBkYXkgaW4gdGhlIGNhbGVuZGFyIG1vbnRoLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERheSB7XG4gIGRhdGU6IERhdGU7XG4gIGRheTogc3RyaW5nO1xuICBpbk1vbnRoOiBib29sZWFuO1xuICBoYXNBY3Rpdml0eTogYm9vbGVhbjtcbiAgaXNUb2RheTogYm9vbGVhbjtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ2xhc3MgdG8gcmVwcmVzZW50IGEgY2FsZW5kYXIgbW9udGggdXNlZCBpbiB0aGUgY2FsZW5kYXIgY29tcG9uZW50LlxuICovXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb250aCB7XG5cbiAgd2Vla3M6IERheVtdW107XG5cbiAgc3RhdGljIERBWVNfSU5fV0VFSyA9IDc7XG4gIHN0YXRpYyBXRUVLU19JTl9DQUxFTkRBUl9NT05USCA9IDY7XG4gIHN0YXRpYyBEQVlTX0lOX0NBTEVOREFSX01PTlRIID0gQ2FsZW5kYXJNb250aC5EQVlTX0lOX1dFRUsgKiBDYWxlbmRhck1vbnRoLldFRUtTX0lOX0NBTEVOREFSX01PTlRIO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRlOiBEYXRlKSB7XG4gICAgdGhpcy53ZWVrcyA9IHRoaXMuZ2VuZXJhdGVXZWVrcyh0aGlzLmRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGRheXMgYW5kIHdlZWtzIGluIGEgY2FsZW5kYXIgbW9udGguXG4gICAqXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqICAgRGF0ZSBpbiBtb250aCB0byBnZW5lcmF0ZS5cbiAgICpcbiAgICogQHJldHVyblxuICAgKiAgIFR3byBkaW1lbnNpb25hbCBhcnJheSByZXByZXNlbnRpbmcgdGhlIGNhbGVuZGFyIG1vbnRoLlxuICAgKi9cbiAgZ2VuZXJhdGVXZWVrcyhkYXRlOiBEYXRlKTogRGF5W11bXSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCB0MCA9IGRheWpzKGRhdGUpLnN0YXJ0T2YoJ21vbnRoJykuc3RhcnRPZignd2VlaycpO1xuICAgIGxldCB3ZWVrczogRGF5W11bXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ2FsZW5kYXJNb250aC5XRUVLU19JTl9DQUxFTkRBUl9NT05USDsgaSsrKSB7XG4gICAgICBsZXQgd2VlazogRGF5W10gPSBbXTtcbiAgICAgIGZvciAobGV0IGQgPSAwOyBkIDwgQ2FsZW5kYXJNb250aC5EQVlTX0lOX1dFRUs7IGQrKykge1xuICAgICAgICB3ZWVrLnB1c2goe1xuICAgICAgICAgIGRhdGU6IHQwLnRvRGF0ZSgpLFxuICAgICAgICAgIGRheTogdDAuZm9ybWF0KCdEJyksXG4gICAgICAgICAgaW5Nb250aDogdDAuaXNTYW1lKGRhdGUsICdtb250aCcpLFxuICAgICAgICAgIGhhc0FjdGl2aXR5OiBmYWxzZSxcbiAgICAgICAgICBpc1RvZGF5OiB0MC5pc1NhbWUodG9kYXksICdkYXknKSxcbiAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICB0MCA9IHQwLmFkZCgxLCAnZGF5Jyk7XG4gICAgICB9XG4gICAgICB3ZWVrcy5wdXNoKHdlZWspO1xuICAgIH1cbiAgICByZXR1cm4gd2Vla3M7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGRheSBnaXZlbiBpbmRleCBpbiBjYWxlbmRhciBtb250aC5cbiAgICpcbiAgICogQHBhcmFtIGluZGV4XG4gICAqICAgSW5kZXggdG8gZ2V0LlxuICAgKlxuICAgKiBAcmV0dXJuc1xuICAgKiAgIERheSBvbiBnaXZlbiBpbmRleC5cbiAgICovXG4gIGdldERheUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IERheSB7XG4gICAgcmV0dXJuIHRoaXMud2Vla3NbTWF0aC5mbG9vcihpbmRleCAvIENhbGVuZGFyTW9udGguREFZU19JTl9XRUVLKV1baW5kZXggJSBDYWxlbmRhck1vbnRoLkRBWVNfSU5fV0VFS107XG4gIH1cblxuICBnZXROZXh0TW9udGgoKSB7XG4gICAgcmV0dXJuIG5ldyBDYWxlbmRhck1vbnRoKGRheWpzKHRoaXMuZGF0ZSkuYWRkKDEsICdtb250aCcpLnRvRGF0ZSgpKTtcbiAgfVxuXG4gIGdldFByZXZpb3VzTW9udGgoKSB7XG4gICAgcmV0dXJuIG5ldyBDYWxlbmRhck1vbnRoKGRheWpzKHRoaXMuZGF0ZSkuc3VidHJhY3QoMSwgJ21vbnRoJykudG9EYXRlKCkpO1xuICB9XG5cbiAgaW5Nb250aChkYXRlOiBEYXRlKSB7XG4gICAgcmV0dXJuIGRheWpzKHRoaXMuZGF0ZSkuaXNTYW1lKGRhdGUsICdtb250aCcpO1xuICB9XG5cbn1cbiJdfQ==