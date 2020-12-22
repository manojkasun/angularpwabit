import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import dayjs from 'dayjs';

/**
 * @fileoverview added by tsickle
 * Generated from: calendar-month.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Represents a day in the calendar month.
 * @record
 */
function Day() { }
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
class CalendarMonth {
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

/**
 * @fileoverview added by tsickle
 * Generated from: calendar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarComponent {
    constructor() {
        this.today = new Date();
        // Set default value to current date.
        this._value = new Date();
        this.currentMonth = new CalendarMonth(this._value);
    }
    // @Output()
    // viewChange = new EventEmitter<Month>(true);
    // @Output()
    // valueChange = new EventEmitter<Date>(true);
    // @Input()
    // set dataSource(data: EventResponse[]) {
    //   if (!this.currentMonth) {
    //     return;
    //   }
    //   let event = getNextEventDay(data);
    //   for (let dayIndex = 0; dayIndex < DAYS_IN_CALENDAR_MONTH; dayIndex++) {
    //     let day = this.currentMonth.getDayByIndex(dayIndex);
    //     if (event && Moment(event.date.value).isSame(day.date, 'day')) {
    //       day.hasActivity = true;
    //       // Advance event index to next event not on same day
    //       event = getNextEventDay(data, event);
    //     }
    //     else {
    //       day.hasActivity = false;
    //     }
    //   }
    // }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (value !== this._value) {
            this._value = value;
            // this.valueChange.emit(value);
            if (!this.currentMonth || !this.currentMonth.inMonth(value)) {
                this.goTo(new CalendarMonth(value));
            }
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    goNext() {
        this.goTo(this.currentMonth.getNextMonth());
    }
    /**
     * @return {?}
     */
    goPrev() {
        this.goTo(this.currentMonth.getPreviousMonth());
    }
    /**
     * @param {?} month
     * @return {?}
     */
    goTo(month) {
        this.currentMonth = month;
        // this.viewChange.emit(this.currentMonth);
    }
    /**
     * @param {?} day
     * @return {?}
     */
    hasActivity(day) {
        return false;
        //return this.dataSource && this.dataSource.some(x => Moment(x.date.value).isSame(day, 'day'));
    }
    /**
     * @param {?} day
     * @return {?}
     */
    isSelected(day) {
        return false;
        // return Moment(day).isSame(this._value, 'day');
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-calendar',
                template: "<div class=\"calendar\">\n  <div class=\"calendar__header\">\n    <button (click)=\"goPrev()\" class=\"calendar__button\">prev</button>\n    <span class=\"calendar__title\">{{ currentMonth?.date | date:'MMMM' }}</span>\n    <button (click)=\"goNext()\" class=\"calendar__button\">next</button>\n  </div>\n\n  <div class=\"calendar__weekdays\">\n    <div class=\"calendar__row\">\n      <div class=\"calendar__col\">M\u00E5n</div>\n      <div class=\"calendar__col\">Tis</div>\n      <div class=\"calendar__col\">Ons</div>\n      <div class=\"calendar__col\">Tor</div>\n      <div class=\"calendar__col\">Fre</div>\n      <div class=\"calendar__col\">L\u00F6r</div>\n      <div class=\"calendar__col\">S\u00F6n</div>\n    </div>\n  </div>\n\n  <div class=\"calendar__area\" *ngIf=\"currentMonth\">\n    <div *ngFor=\"let week of currentMonth.weeks\" class=\"calendar__row\">\n      <div *ngFor=\"let day of week\" \n           [class.calendar__day--has-activity]=\"day.hasActivity\" \n           [class.calendar__inactive]=\"!day.inMonth\" \n           class=\"calendar__col calendar__col--extra\">\n        <button [class.calendar__button--today]=\"day.isToday\" \n                [class.calendar__button--selected]=\"isSelected(day.date)\" \n                class=\"calendar__button\">\n          {{day.day}}\n          <div class=\"calendar__clickarea\" (click)=\"value = day.date\"></div>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [":host{--calendar-primary-clr:var(--primary-clr, orange)}.calendar{background-color:rgba(0,0,0,.08);display:block;font-family:inherit;margin:0 auto;text-align:center}.calendar__header{background-color:rgba(0,0,0,.08);display:flex;margin-bottom:10px;padding:10px}.calendar__title{font-size:18px;line-height:1.5;width:60%}.calendar__row{display:flex;flex:7}.calendar__col{position:relative;flex:1}.calendar__col--extra{border-top:1px solid rgba(0,0,0,.08);padding:4px 0}.calendar__inactive{border:0;padding:0}.calendar__inactive button{display:none}.calendar__area{padding:10px}.calendar__weekdays{font-weight:700;padding:0 10px}.calendar__button{background:0 0;color:#000;display:block;margin:auto;width:30px;height:30px;border-radius:30px;padding:0;font-size:14px;font-weight:300;border:none;outline:0;font-family:inherit}.calendar__button--today{background:rgba(0,0,0,.08);font-weight:600}.calendar__button--selected{background:var(--calendar-primary-clr);font-weight:600}.calendar__button__clickarea{display:block;position:absolute;height:100%;width:100%;top:0;left:0;right:0;z-index:10;cursor:pointer}"]
            }] }
];
/** @nocollapse */
CalendarComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    CalendarComponent.prototype.today;
    /** @type {?} */
    CalendarComponent.prototype.currentMonth;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype._value;
}

/**
 * @fileoverview added by tsickle
 * Generated from: calendar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarModule {
}
CalendarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CalendarComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    CalendarComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: bit-understandit.zeus.calendar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CalendarModule, CalendarComponent as ɵa };
//# sourceMappingURL=bit-understandit.zeus.calendar.js.map
