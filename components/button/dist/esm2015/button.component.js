/**
 * @fileoverview added by tsickle
 * Generated from: button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class ButtonComponent {
    constructor() {
        this.buttonText = undefined;
        this.buttonClicked = new EventEmitter();
    }
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
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.buttonText;
    /** @type {?} */
    ButtonComponent.prototype.buttonClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiaXQvYnV0dG9uLyIsInNvdXJjZXMiOlsiYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdkUsTUFBTSxPQUFPLGVBQWU7SUFMNUI7UUFPVyxlQUFVLEdBQXVCLFNBQVMsQ0FBQztRQUUxQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFDM0QsQ0FBQzs7O1lBVkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLDhHQUFzQzs7YUFFdkM7Ozt5QkFHRSxLQUFLOzRCQUVMLE1BQU07Ozs7SUFGUCxxQ0FBb0Q7O0lBRXBELHdDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXNlbWFudGljLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGJ1dHRvblRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcbn1cbiJdfQ==