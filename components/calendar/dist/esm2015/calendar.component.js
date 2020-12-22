/**
 * @fileoverview added by tsickle
 * Generated from: calendar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CalendarMonth } from './calendar-month';
export class CalendarComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJpdC91bmRlcnN0YW5kaXQuemV1cy5jYWxlbmRhci8iLCJzb3VyY2VzIjpbImNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRS9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVFqRCxNQUFNLE9BQU8saUJBQWlCO0lBaUQ1QjtRQS9DQSxVQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQWdEakIscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFsQkQsSUFBSSxLQUFLLENBQUMsS0FBVztRQUNuQixJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLGdDQUFnQztZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDckM7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQVFELE1BQU07UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsS0FBb0I7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsMkNBQTJDO0lBQzdDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEdBQVM7UUFDbkIsT0FBTyxLQUFLLENBQUM7UUFDYiwrRkFBK0Y7SUFDakcsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBUztRQUNsQixPQUFPLEtBQUssQ0FBQztRQUNiLGlEQUFpRDtJQUNuRCxDQUFDOzs7WUFqRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qiw0N0NBQXdDOzthQUV6Qzs7Ozs7O0lBR0Msa0NBQW1COztJQUNuQix5Q0FBNEI7Ozs7O0lBRTVCLG1DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYWxlbmRhck1vbnRoIH0gZnJvbSAnLi9jYWxlbmRhci1tb250aCc7XG5pbXBvcnQgeyBhbmFseXplQW5kVmFsaWRhdGVOZ01vZHVsZXMgfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jYWxlbmRhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQge1xuXG4gIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY3VycmVudE1vbnRoOiBDYWxlbmRhck1vbnRoO1xuXG4gIHByaXZhdGUgX3ZhbHVlOiBEYXRlO1xuXG4gIC8vIEBPdXRwdXQoKVxuICAvLyB2aWV3Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNb250aD4odHJ1ZSk7XG5cbiAgLy8gQE91dHB1dCgpXG4gIC8vIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPih0cnVlKTtcblxuICAvLyBASW5wdXQoKVxuICAvLyBzZXQgZGF0YVNvdXJjZShkYXRhOiBFdmVudFJlc3BvbnNlW10pIHtcblxuICAvLyAgIGlmICghdGhpcy5jdXJyZW50TW9udGgpIHtcbiAgLy8gICAgIHJldHVybjtcbiAgLy8gICB9XG5cbiAgLy8gICBsZXQgZXZlbnQgPSBnZXROZXh0RXZlbnREYXkoZGF0YSk7XG4gIC8vICAgZm9yIChsZXQgZGF5SW5kZXggPSAwOyBkYXlJbmRleCA8IERBWVNfSU5fQ0FMRU5EQVJfTU9OVEg7IGRheUluZGV4KyspIHtcbiAgLy8gICAgIGxldCBkYXkgPSB0aGlzLmN1cnJlbnRNb250aC5nZXREYXlCeUluZGV4KGRheUluZGV4KTtcblxuICAvLyAgICAgaWYgKGV2ZW50ICYmIE1vbWVudChldmVudC5kYXRlLnZhbHVlKS5pc1NhbWUoZGF5LmRhdGUsICdkYXknKSkge1xuICAvLyAgICAgICBkYXkuaGFzQWN0aXZpdHkgPSB0cnVlO1xuICAvLyAgICAgICAvLyBBZHZhbmNlIGV2ZW50IGluZGV4IHRvIG5leHQgZXZlbnQgbm90IG9uIHNhbWUgZGF5XG4gIC8vICAgICAgIGV2ZW50ID0gZ2V0TmV4dEV2ZW50RGF5KGRhdGEsIGV2ZW50KTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIGVsc2Uge1xuICAvLyAgICAgICBkYXkuaGFzQWN0aXZpdHkgPSBmYWxzZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IERhdGUpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgLy8gdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgIGlmICghdGhpcy5jdXJyZW50TW9udGggfHwgIXRoaXMuY3VycmVudE1vbnRoLmluTW9udGgodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuZ29UbyhuZXcgQ2FsZW5kYXJNb250aCh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBTZXQgZGVmYXVsdCB2YWx1ZSB0byBjdXJyZW50IGRhdGUuXG4gICAgdGhpcy5fdmFsdWUgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuY3VycmVudE1vbnRoID0gbmV3IENhbGVuZGFyTW9udGgodGhpcy5fdmFsdWUpO1xuICB9XG5cbiAgZ29OZXh0KCkge1xuICAgIHRoaXMuZ29Ubyh0aGlzLmN1cnJlbnRNb250aC5nZXROZXh0TW9udGgoKSk7XG4gIH1cblxuICBnb1ByZXYoKSB7XG4gICAgdGhpcy5nb1RvKHRoaXMuY3VycmVudE1vbnRoLmdldFByZXZpb3VzTW9udGgoKSk7XG4gIH1cblxuICBnb1RvKG1vbnRoOiBDYWxlbmRhck1vbnRoKSB7XG4gICAgdGhpcy5jdXJyZW50TW9udGggPSBtb250aDtcbiAgICAvLyB0aGlzLnZpZXdDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRNb250aCk7XG4gIH1cblxuICBoYXNBY3Rpdml0eShkYXk6IERhdGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gICAgLy9yZXR1cm4gdGhpcy5kYXRhU291cmNlICYmIHRoaXMuZGF0YVNvdXJjZS5zb21lKHggPT4gTW9tZW50KHguZGF0ZS52YWx1ZSkuaXNTYW1lKGRheSwgJ2RheScpKTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoZGF5OiBEYXRlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIHJldHVybiBNb21lbnQoZGF5KS5pc1NhbWUodGhpcy5fdmFsdWUsICdkYXknKTtcbiAgfVxuXG4gIC8vIEBIb3N0TGlzdGVuZXIoJ3N3aXBlJywgWyckZXZlbnQnXSlcbiAgLy8gb25Td2lwZShldmVudCkge1xuICAvLyAgIGlmIChldmVudC52ZWxvY2l0eVggPiAwKSB7XG4gIC8vICAgICB0aGlzLmdvUHJldigpO1xuICAvLyAgIH1cbiAgLy8gICBlbHNlIGlmIChldmVudC52ZWxvY2l0eVggPCAwKSB7XG4gIC8vICAgICB0aGlzLmdvTmV4dCgpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG59XG4iXX0=