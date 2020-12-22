import { Component, Input, HostListener } from '@angular/core';

import { CalendarMonth } from './calendar-month';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  today = new Date();
  currentMonth: CalendarMonth;

  private _value: Date;

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

  set value(value: Date) {
    if (value !== this._value) {
      this._value = value;
      // this.valueChange.emit(value);
      if (!this.currentMonth || !this.currentMonth.inMonth(value)) {
        this.goTo(new CalendarMonth(value));
      }
    }
  }

  get value() {
    return this._value;
  }

  constructor() {
    // Set default value to current date.
    this._value = new Date();
    this.currentMonth = new CalendarMonth(this._value);
  }

  goNext() {
    this.goTo(this.currentMonth.getNextMonth());
  }

  goPrev() {
    this.goTo(this.currentMonth.getPreviousMonth());
  }

  goTo(month: CalendarMonth) {
    this.currentMonth = month;
    // this.viewChange.emit(this.currentMonth);
  }

  hasActivity(day: Date) {
    return false;
    //return this.dataSource && this.dataSource.some(x => Moment(x.date.value).isSame(day, 'day'));
  }

  isSelected(day: Date) {
    return false;
    // return Moment(day).isSame(this._value, 'day');
  }

  // @HostListener('swipe', ['$event'])
  // onSwipe(event) {
  //   if (event.velocityX > 0) {
  //     this.goPrev();
  //   }
  //   else if (event.velocityX < 0) {
  //     this.goNext();
  //   }
  // }

}
