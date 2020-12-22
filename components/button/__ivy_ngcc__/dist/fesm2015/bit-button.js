import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
class ButtonComponent {
    constructor() {
        this.buttonText = undefined;
        this.buttonClicked = new EventEmitter();
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["ng-semantic-button"]], inputs: { buttonText: "buttonText" }, outputs: { buttonClicked: "buttonClicked" }, decls: 2, vars: 1, consts: [[1, "ui", "button", 3, "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function ButtonComponent_Template_button_click_0_listener($event) { return ctx.buttonClicked.emit($event); });
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.buttonText, "\n");
    } }, styles: [""] });
ButtonComponent.propDecorators = {
    buttonText: [{ type: Input }],
    buttonClicked: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'ng-semantic-button',
                template: "<button class=\"ui button\" (click)=\"buttonClicked.emit($event)\">\n  {{buttonText}}\n</button>\n",
                styles: [""]
            }]
    }], function () { return []; }, { buttonText: [{
            type: Input
        }], buttonClicked: [{
            type: Output
        }] }); })();
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
ButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ButtonModule });
ButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ButtonModule, { declarations: function () { return [ButtonComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ButtonComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ButtonComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    ButtonComponent
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: bit-button.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ButtonModule, ButtonComponent as ɵa };


//# sourceMappingURL=bit-button.js.map