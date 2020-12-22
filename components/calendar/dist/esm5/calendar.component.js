/**
 * @fileoverview added by tsickle
 * Generated from: calendar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CalendarMonth } from './calendar-month';
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
        this.today = new Date();
        // Set default value to current date.
        this._value = new Date();
        this.currentMonth = new CalendarMonth(this._value);
    }
    Object.defineProperty(CalendarComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
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
        set: 
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
        function (value) {
            if (value !== this._value) {
                this._value = value;
                // this.valueChange.emit(value);
                if (!this.currentMonth || !this.currentMonth.inMonth(value)) {
                    this.goTo(new CalendarMonth(value));
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarComponent.prototype.goNext = /**
     * @return {?}
     */
    function () {
        this.goTo(this.currentMonth.getNextMonth());
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.goPrev = /**
     * @return {?}
     */
    function () {
        this.goTo(this.currentMonth.getPreviousMonth());
    };
    /**
     * @param {?} month
     * @return {?}
     */
    CalendarComponent.prototype.goTo = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.currentMonth = month;
        // this.viewChange.emit(this.currentMonth);
    };
    /**
     * @param {?} day
     * @return {?}
     */
    CalendarComponent.prototype.hasActivity = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        return false;
        //return this.dataSource && this.dataSource.some(x => Moment(x.date.value).isSame(day, 'day'));
    };
    /**
     * @param {?} day
     * @return {?}
     */
    CalendarComponent.prototype.isSelected = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        return false;
        // return Moment(day).isSame(this._value, 'day');
    };
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-calendar',
                    template: "<div class=\"calendar\">\n  <div class=\"calendar__header\">\n    <button (click)=\"goPrev()\" class=\"calendar__button\">prev</button>\n    <span class=\"calendar__title\">{{ currentMonth?.date | date:'MMMM' }}</span>\n    <button (click)=\"goNext()\" class=\"calendar__button\">next</button>\n  </div>\n\n  <div class=\"calendar__weekdays\">\n    <div class=\"calendar__row\">\n      <div class=\"calendar__col\">M\u00E5n</div>\n      <div class=\"calendar__col\">Tis</div>\n      <div class=\"calendar__col\">Ons</div>\n      <div class=\"calendar__col\">Tor</div>\n      <div class=\"calendar__col\">Fre</div>\n      <div class=\"calendar__col\">L\u00F6r</div>\n      <div class=\"calendar__col\">S\u00F6n</div>\n    </div>\n  </div>\n\n  <div class=\"calendar__area\" *ngIf=\"currentMonth\">\n    <div *ngFor=\"let week of currentMonth.weeks\" class=\"calendar__row\">\n      <div *ngFor=\"let day of week\" \n           [class.calendar__day--has-activity]=\"day.hasActivity\" \n           [class.calendar__inactive]=\"!day.inMonth\" \n           class=\"calendar__col calendar__col--extra\">\n        <button [class.calendar__button--today]=\"day.isToday\" \n                [class.calendar__button--selected]=\"isSelected(day.date)\" \n                class=\"calendar__button\">\n          {{day.day}}\n          <div class=\"calendar__clickarea\" (click)=\"value = day.date\"></div>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [":host{--calendar-primary-clr:var(--primary-clr, orange)}.calendar{background-color:rgba(0,0,0,.08);display:block;font-family:inherit;margin:0 auto;text-align:center}.calendar__header{background-color:rgba(0,0,0,.08);display:flex;margin-bottom:10px;padding:10px}.calendar__title{font-size:18px;line-height:1.5;width:60%}.calendar__row{display:flex;flex:7}.calendar__col{position:relative;flex:1}.calendar__col--extra{border-top:1px solid rgba(0,0,0,.08);padding:4px 0}.calendar__inactive{border:0;padding:0}.calendar__inactive button{display:none}.calendar__area{padding:10px}.calendar__weekdays{font-weight:700;padding:0 10px}.calendar__button{background:0 0;color:#000;display:block;margin:auto;width:30px;height:30px;border-radius:30px;padding:0;font-size:14px;font-weight:300;border:none;outline:0;font-family:inherit}.calendar__button--today{background:rgba(0,0,0,.08);font-weight:600}.calendar__button--selected{background:var(--calendar-primary-clr);font-weight:600}.calendar__button__clickarea{display:block;position:absolute;height:100%;width:100%;top:0;left:0;right:0;z-index:10;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return []; };
    return CalendarComponent;
}());
export { CalendarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJpdC91bmRlcnN0YW5kaXQuemV1cy5jYWxlbmRhci8iLCJzb3VyY2VzIjpbImNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRS9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdqRDtJQXNERTtRQS9DQSxVQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQWdEakIscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBbEJELHNCQUFJLG9DQUFLOzs7O1FBVVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQztRQXhDRCxZQUFZO1FBQ1osOENBQThDO1FBRTlDLFlBQVk7UUFDWiw4Q0FBOEM7UUFFOUMsV0FBVztRQUNYLDBDQUEwQztRQUUxQyw4QkFBOEI7UUFDOUIsY0FBYztRQUNkLE1BQU07UUFFTix1Q0FBdUM7UUFDdkMsNEVBQTRFO1FBQzVFLDJEQUEyRDtRQUUzRCx1RUFBdUU7UUFDdkUsZ0NBQWdDO1FBQ2hDLDZEQUE2RDtRQUM3RCw4Q0FBOEM7UUFDOUMsUUFBUTtRQUNSLGFBQWE7UUFDYixpQ0FBaUM7UUFDakMsUUFBUTtRQUNSLE1BQU07UUFDTixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRUosVUFBVSxLQUFXO1lBQ25CLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixnQ0FBZ0M7Z0JBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDckM7YUFDRjtRQUNILENBQUM7OztPQUFBOzs7O0lBWUQsa0NBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELGtDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxnQ0FBSTs7OztJQUFKLFVBQUssS0FBb0I7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsMkNBQTJDO0lBQzdDLENBQUM7Ozs7O0lBRUQsdUNBQVc7Ozs7SUFBWCxVQUFZLEdBQVM7UUFDbkIsT0FBTyxLQUFLLENBQUM7UUFDYiwrRkFBK0Y7SUFDakcsQ0FBQzs7Ozs7SUFFRCxzQ0FBVTs7OztJQUFWLFVBQVcsR0FBUztRQUNsQixPQUFPLEtBQUssQ0FBQztRQUNiLGlEQUFpRDtJQUNuRCxDQUFDOztnQkFqRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qiw0N0NBQXdDOztpQkFFekM7Ozs7SUF5RkQsd0JBQUM7Q0FBQSxBQTdGRCxJQTZGQztTQXhGWSxpQkFBaUI7OztJQUU1QixrQ0FBbUI7O0lBQ25CLHlDQUE0Qjs7Ozs7SUFFNUIsbUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhbGVuZGFyTW9udGggfSBmcm9tICcuL2NhbGVuZGFyLW1vbnRoJztcbmltcG9ydCB7IGFuYWx5emVBbmRWYWxpZGF0ZU5nTW9kdWxlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCB7XG5cbiAgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjdXJyZW50TW9udGg6IENhbGVuZGFyTW9udGg7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGU7XG5cbiAgLy8gQE91dHB1dCgpXG4gIC8vIHZpZXdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vbnRoPih0cnVlKTtcblxuICAvLyBAT3V0cHV0KClcbiAgLy8gdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KHRydWUpO1xuXG4gIC8vIEBJbnB1dCgpXG4gIC8vIHNldCBkYXRhU291cmNlKGRhdGE6IEV2ZW50UmVzcG9uc2VbXSkge1xuXG4gIC8vICAgaWYgKCF0aGlzLmN1cnJlbnRNb250aCkge1xuICAvLyAgICAgcmV0dXJuO1xuICAvLyAgIH1cblxuICAvLyAgIGxldCBldmVudCA9IGdldE5leHRFdmVudERheShkYXRhKTtcbiAgLy8gICBmb3IgKGxldCBkYXlJbmRleCA9IDA7IGRheUluZGV4IDwgREFZU19JTl9DQUxFTkRBUl9NT05USDsgZGF5SW5kZXgrKykge1xuICAvLyAgICAgbGV0IGRheSA9IHRoaXMuY3VycmVudE1vbnRoLmdldERheUJ5SW5kZXgoZGF5SW5kZXgpO1xuXG4gIC8vICAgICBpZiAoZXZlbnQgJiYgTW9tZW50KGV2ZW50LmRhdGUudmFsdWUpLmlzU2FtZShkYXkuZGF0ZSwgJ2RheScpKSB7XG4gIC8vICAgICAgIGRheS5oYXNBY3Rpdml0eSA9IHRydWU7XG4gIC8vICAgICAgIC8vIEFkdmFuY2UgZXZlbnQgaW5kZXggdG8gbmV4dCBldmVudCBub3Qgb24gc2FtZSBkYXlcbiAgLy8gICAgICAgZXZlbnQgPSBnZXROZXh0RXZlbnREYXkoZGF0YSwgZXZlbnQpO1xuICAvLyAgICAgfVxuICAvLyAgICAgZWxzZSB7XG4gIC8vICAgICAgIGRheS5oYXNBY3Rpdml0eSA9IGZhbHNlO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAvLyB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgICAgaWYgKCF0aGlzLmN1cnJlbnRNb250aCB8fCAhdGhpcy5jdXJyZW50TW9udGguaW5Nb250aCh2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5nb1RvKG5ldyBDYWxlbmRhck1vbnRoKHZhbHVlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIFNldCBkZWZhdWx0IHZhbHVlIHRvIGN1cnJlbnQgZGF0ZS5cbiAgICB0aGlzLl92YWx1ZSA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5jdXJyZW50TW9udGggPSBuZXcgQ2FsZW5kYXJNb250aCh0aGlzLl92YWx1ZSk7XG4gIH1cblxuICBnb05leHQoKSB7XG4gICAgdGhpcy5nb1RvKHRoaXMuY3VycmVudE1vbnRoLmdldE5leHRNb250aCgpKTtcbiAgfVxuXG4gIGdvUHJldigpIHtcbiAgICB0aGlzLmdvVG8odGhpcy5jdXJyZW50TW9udGguZ2V0UHJldmlvdXNNb250aCgpKTtcbiAgfVxuXG4gIGdvVG8obW9udGg6IENhbGVuZGFyTW9udGgpIHtcbiAgICB0aGlzLmN1cnJlbnRNb250aCA9IG1vbnRoO1xuICAgIC8vIHRoaXMudmlld0NoYW5nZS5lbWl0KHRoaXMuY3VycmVudE1vbnRoKTtcbiAgfVxuXG4gIGhhc0FjdGl2aXR5KGRheTogRGF0ZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgICAvL3JldHVybiB0aGlzLmRhdGFTb3VyY2UgJiYgdGhpcy5kYXRhU291cmNlLnNvbWUoeCA9PiBNb21lbnQoeC5kYXRlLnZhbHVlKS5pc1NhbWUoZGF5LCAnZGF5JykpO1xuICB9XG5cbiAgaXNTZWxlY3RlZChkYXk6IERhdGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gcmV0dXJuIE1vbWVudChkYXkpLmlzU2FtZSh0aGlzLl92YWx1ZSwgJ2RheScpO1xuICB9XG5cbiAgLy8gQEhvc3RMaXN0ZW5lcignc3dpcGUnLCBbJyRldmVudCddKVxuICAvLyBvblN3aXBlKGV2ZW50KSB7XG4gIC8vICAgaWYgKGV2ZW50LnZlbG9jaXR5WCA+IDApIHtcbiAgLy8gICAgIHRoaXMuZ29QcmV2KCk7XG4gIC8vICAgfVxuICAvLyAgIGVsc2UgaWYgKGV2ZW50LnZlbG9jaXR5WCA8IDApIHtcbiAgLy8gICAgIHRoaXMuZ29OZXh0KCk7XG4gIC8vICAgfVxuICAvLyB9XG5cbn1cbiJdfQ==