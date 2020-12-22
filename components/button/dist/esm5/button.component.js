/**
 * @fileoverview added by tsickle
 * Generated from: button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.buttonText = undefined;
        this.buttonClicked = new EventEmitter();
    }
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-semantic-button',
                    template: "<button class=\"ui button\" (click)=\"buttonClicked.emit($event)\">\n  {{buttonText}}\n</button>\n",
                    styles: [""]
                }] }
    ];
    ButtonComponent.propDecorators = {
        buttonText: [{ type: Input }],
        buttonClicked: [{ type: Output }]
    };
    return ButtonComponent;
}());
export { ButtonComponent };
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.buttonText;
    /** @type {?} */
    ButtonComponent.prototype.buttonClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiaXQvYnV0dG9uLyIsInNvdXJjZXMiOlsiYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkU7SUFBQTtRQU9XLGVBQVUsR0FBdUIsU0FBUyxDQUFDO1FBRTFDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUMzRCxDQUFDOztnQkFWQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsOEdBQXNDOztpQkFFdkM7Ozs2QkFHRSxLQUFLO2dDQUVMLE1BQU07O0lBQ1Qsc0JBQUM7Q0FBQSxBQVZELElBVUM7U0FMWSxlQUFlOzs7SUFFMUIscUNBQW9EOztJQUVwRCx3Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1zZW1hbnRpYy1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBidXR0b25UZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG59XG4iXX0=