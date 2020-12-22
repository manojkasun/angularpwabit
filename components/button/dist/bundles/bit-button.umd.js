(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@bit/heyitsgeo.ng-semantic-ui.button', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.bit = global.bit || {}, global.bit.button = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
            this.buttonText = undefined;
            this.buttonClicked = new core.EventEmitter();
        }
        ButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-semantic-button',
                        template: "<button class=\"ui button\" (click)=\"buttonClicked.emit($event)\">\n  {{buttonText}}\n</button>\n",
                        styles: [""]
                    }] }
        ];
        ButtonComponent.propDecorators = {
            buttonText: [{ type: core.Input }],
            buttonClicked: [{ type: core.Output }]
        };
        return ButtonComponent;
    }());
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
    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        ButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            ButtonComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            ButtonComponent
                        ]
                    },] }
        ];
        return ButtonModule;
    }());

    exports.ButtonModule = ButtonModule;
    exports.ɵa = ButtonComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bit-button.umd.js.map
