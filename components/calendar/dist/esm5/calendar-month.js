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
var CalendarMonth = /** @class */ (function () {
    function CalendarMonth(date) {
        this.date = date;
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
    /**
     * Generate days and weeks in a calendar month.
     *
     * @param {?} date
     *   Date in month to generate.
     *
     * @return {?}
     *   Two dimensional array representing the calendar month.
     */
    CalendarMonth.prototype.generateWeeks = /**
     * Generate days and weeks in a calendar month.
     *
     * @param {?} date
     *   Date in month to generate.
     *
     * @return {?}
     *   Two dimensional array representing the calendar month.
     */
    function (date) {
        /** @type {?} */
        var today = new Date();
        /** @type {?} */
        var t0 = dayjs(date).startOf('month').startOf('week');
        /** @type {?} */
        var weeks = [];
        for (var i = 0; i < CalendarMonth.WEEKS_IN_CALENDAR_MONTH; i++) {
            /** @type {?} */
            var week = [];
            for (var d = 0; d < CalendarMonth.DAYS_IN_WEEK; d++) {
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
    };
    /**
     * Gets a day given index in calendar month.
     *
     * @param index
     *   Index to get.
     *
     * @returns
     *   Day on given index.
     */
    /**
     * Gets a day given index in calendar month.
     *
     * @param {?} index
     *   Index to get.
     *
     * @return {?}
     *   Day on given index.
     */
    CalendarMonth.prototype.getDayByIndex = /**
     * Gets a day given index in calendar month.
     *
     * @param {?} index
     *   Index to get.
     *
     * @return {?}
     *   Day on given index.
     */
    function (index) {
        return this.weeks[Math.floor(index / CalendarMonth.DAYS_IN_WEEK)][index % CalendarMonth.DAYS_IN_WEEK];
    };
    /**
     * @return {?}
     */
    CalendarMonth.prototype.getNextMonth = /**
     * @return {?}
     */
    function () {
        return new CalendarMonth(dayjs(this.date).add(1, 'month').toDate());
    };
    /**
     * @return {?}
     */
    CalendarMonth.prototype.getPreviousMonth = /**
     * @return {?}
     */
    function () {
        return new CalendarMonth(dayjs(this.date).subtract(1, 'month').toDate());
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarMonth.prototype.inMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return dayjs(this.date).isSame(date, 'month');
    };
    CalendarMonth.DAYS_IN_WEEK = 7;
    CalendarMonth.WEEKS_IN_CALENDAR_MONTH = 6;
    CalendarMonth.DAYS_IN_CALENDAR_MONTH = CalendarMonth.DAYS_IN_WEEK * CalendarMonth.WEEKS_IN_CALENDAR_MONTH;
    return CalendarMonth;
}());
export { CalendarMonth };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYml0L3VuZGVyc3RhbmRpdC56ZXVzLmNhbGVuZGFyLyIsInNvdXJjZXMiOlsiY2FsZW5kYXItbW9udGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7Ozs7O0FBSzFCLHlCQU9DOzs7SUFOQyxtQkFBVzs7SUFDWCxrQkFBWTs7SUFDWixzQkFBaUI7O0lBQ2pCLDBCQUFxQjs7SUFDckIsc0JBQWlCOztJQUNqQix1QkFBa0I7Ozs7O0FBTXBCO0lBUUUsdUJBQW1CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7Ozs7OztPQVFHOzs7Ozs7Ozs7O0lBQ0gscUNBQWE7Ozs7Ozs7OztJQUFiLFVBQWMsSUFBVTs7WUFDaEIsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFOztZQUNwQixFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOztZQUNqRCxLQUFLLEdBQVksRUFBRTtRQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLHVCQUF1QixFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDMUQsSUFBSSxHQUFVLEVBQUU7WUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ1IsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUU7b0JBQ2pCLEdBQUcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDbkIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztvQkFDakMsV0FBVyxFQUFFLEtBQUs7b0JBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7b0JBQ2hDLFFBQVEsRUFBRSxLQUFLO2lCQUNoQixDQUFDLENBQUM7Z0JBQ0gsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7Ozs7OztPQVFHOzs7Ozs7Ozs7O0lBQ0gscUNBQWE7Ozs7Ozs7OztJQUFiLFVBQWMsS0FBYTtRQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4RyxDQUFDOzs7O0lBRUQsb0NBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7O0lBRUQsd0NBQWdCOzs7SUFBaEI7UUFDRSxPQUFPLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7O0lBRUQsK0JBQU87Ozs7SUFBUCxVQUFRLElBQVU7UUFDaEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQTlETSwwQkFBWSxHQUFHLENBQUMsQ0FBQztJQUNqQixxQ0FBdUIsR0FBRyxDQUFDLENBQUM7SUFDNUIsb0NBQXNCLEdBQUcsYUFBYSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsdUJBQXVCLENBQUM7SUE4RHJHLG9CQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0FwRVksYUFBYTs7O0lBSXhCLDJCQUF3Qjs7SUFDeEIsc0NBQW1DOztJQUNuQyxxQ0FBbUc7O0lBSm5HLDhCQUFlOztJQU1ILDZCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGUgXG4gKi9cblxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgZGF5IGluIHRoZSBjYWxlbmRhciBtb250aC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYXkge1xuICBkYXRlOiBEYXRlO1xuICBkYXk6IHN0cmluZztcbiAgaW5Nb250aDogYm9vbGVhbjtcbiAgaGFzQWN0aXZpdHk6IGJvb2xlYW47XG4gIGlzVG9kYXk6IGJvb2xlYW47XG4gIHNlbGVjdGVkOiBib29sZWFuO1xufVxuXG4vKipcbiAqIENsYXNzIHRvIHJlcHJlc2VudCBhIGNhbGVuZGFyIG1vbnRoIHVzZWQgaW4gdGhlIGNhbGVuZGFyIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9udGgge1xuXG4gIHdlZWtzOiBEYXlbXVtdO1xuXG4gIHN0YXRpYyBEQVlTX0lOX1dFRUsgPSA3O1xuICBzdGF0aWMgV0VFS1NfSU5fQ0FMRU5EQVJfTU9OVEggPSA2O1xuICBzdGF0aWMgREFZU19JTl9DQUxFTkRBUl9NT05USCA9IENhbGVuZGFyTW9udGguREFZU19JTl9XRUVLICogQ2FsZW5kYXJNb250aC5XRUVLU19JTl9DQUxFTkRBUl9NT05USDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0ZTogRGF0ZSkge1xuICAgIHRoaXMud2Vla3MgPSB0aGlzLmdlbmVyYXRlV2Vla3ModGhpcy5kYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBkYXlzIGFuZCB3ZWVrcyBpbiBhIGNhbGVuZGFyIG1vbnRoLlxuICAgKlxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiAgIERhdGUgaW4gbW9udGggdG8gZ2VuZXJhdGUuXG4gICAqXG4gICAqIEByZXR1cm5cbiAgICogICBUd28gZGltZW5zaW9uYWwgYXJyYXkgcmVwcmVzZW50aW5nIHRoZSBjYWxlbmRhciBtb250aC5cbiAgICovXG4gIGdlbmVyYXRlV2Vla3MoZGF0ZTogRGF0ZSk6IERheVtdW10ge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdDAgPSBkYXlqcyhkYXRlKS5zdGFydE9mKCdtb250aCcpLnN0YXJ0T2YoJ3dlZWsnKTtcbiAgICBsZXQgd2Vla3M6IERheVtdW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IENhbGVuZGFyTW9udGguV0VFS1NfSU5fQ0FMRU5EQVJfTU9OVEg7IGkrKykge1xuICAgICAgbGV0IHdlZWs6IERheVtdID0gW107XG4gICAgICBmb3IgKGxldCBkID0gMDsgZCA8IENhbGVuZGFyTW9udGguREFZU19JTl9XRUVLOyBkKyspIHtcbiAgICAgICAgd2Vlay5wdXNoKHtcbiAgICAgICAgICBkYXRlOiB0MC50b0RhdGUoKSxcbiAgICAgICAgICBkYXk6IHQwLmZvcm1hdCgnRCcpLFxuICAgICAgICAgIGluTW9udGg6IHQwLmlzU2FtZShkYXRlLCAnbW9udGgnKSxcbiAgICAgICAgICBoYXNBY3Rpdml0eTogZmFsc2UsXG4gICAgICAgICAgaXNUb2RheTogdDAuaXNTYW1lKHRvZGF5LCAnZGF5JyksXG4gICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgdDAgPSB0MC5hZGQoMSwgJ2RheScpO1xuICAgICAgfVxuICAgICAgd2Vla3MucHVzaCh3ZWVrKTtcbiAgICB9XG4gICAgcmV0dXJuIHdlZWtzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBkYXkgZ2l2ZW4gaW5kZXggaW4gY2FsZW5kYXIgbW9udGguXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKiAgIEluZGV4IHRvIGdldC5cbiAgICpcbiAgICogQHJldHVybnNcbiAgICogICBEYXkgb24gZ2l2ZW4gaW5kZXguXG4gICAqL1xuICBnZXREYXlCeUluZGV4KGluZGV4OiBudW1iZXIpOiBEYXkge1xuICAgIHJldHVybiB0aGlzLndlZWtzW01hdGguZmxvb3IoaW5kZXggLyBDYWxlbmRhck1vbnRoLkRBWVNfSU5fV0VFSyldW2luZGV4ICUgQ2FsZW5kYXJNb250aC5EQVlTX0lOX1dFRUtdO1xuICB9XG5cbiAgZ2V0TmV4dE1vbnRoKCkge1xuICAgIHJldHVybiBuZXcgQ2FsZW5kYXJNb250aChkYXlqcyh0aGlzLmRhdGUpLmFkZCgxLCAnbW9udGgnKS50b0RhdGUoKSk7XG4gIH1cblxuICBnZXRQcmV2aW91c01vbnRoKCkge1xuICAgIHJldHVybiBuZXcgQ2FsZW5kYXJNb250aChkYXlqcyh0aGlzLmRhdGUpLnN1YnRyYWN0KDEsICdtb250aCcpLnRvRGF0ZSgpKTtcbiAgfVxuXG4gIGluTW9udGgoZGF0ZTogRGF0ZSkge1xuICAgIHJldHVybiBkYXlqcyh0aGlzLmRhdGUpLmlzU2FtZShkYXRlLCAnbW9udGgnKTtcbiAgfVxuXG59XG4iXX0=