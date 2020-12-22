import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ButtonComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    ButtonComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: bit-button.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ButtonModule, ButtonComponent as ɵa };
//# sourceMappingURL=bit-button.js.map
