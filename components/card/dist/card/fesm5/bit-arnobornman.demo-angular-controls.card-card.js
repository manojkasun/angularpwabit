import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material';

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

var CardContainerComponent = /** @class */ (function () {

    function CardContainerComponent() {

    }

    /**

     * @return {?}

     */

    CardContainerComponent.prototype.ngOnInit = /**

     * @return {?}

     */

    function () {

    };

    CardContainerComponent.decorators = [

        { type: Component, args: [{

                    selector: 'nx-demos-card-container',

                    template: "<div class=card-container>\n    <nx-demos-card-header\n    [title]=\"headerText\"\n    ></nx-demos-card-header>\n    <nx-demos-card-body\n    [contentText]=\"bodyText\"    \n    >\n    </nx-demos-card-body>\n</div>\n",

                    styles: [".card-container{height:300px;width:300px;border:4px solid green;border-radius:8px}"]

                }] }

    ];

    /** @nocollapse */

    CardContainerComponent.ctorParameters = function () { return []; };

    CardContainerComponent.propDecorators = {

        headerText: [{ type: Input }],

        bodyText: [{ type: Input }]

    };

    return CardContainerComponent;

}());

if (false) {

    /** @type {?} */

    CardContainerComponent.prototype.headerText;

    /** @type {?} */

    CardContainerComponent.prototype.bodyText;

}

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

var CardHeaderComponent = /** @class */ (function () {

    function CardHeaderComponent() {

    }

    /**

     * @return {?}

     */

    CardHeaderComponent.prototype.ngOnInit = /**

     * @return {?}

     */

    function () {

    };

    CardHeaderComponent.decorators = [

        { type: Component, args: [{

                    selector: 'nx-demos-card-header',

                    template: "<h3 style=\"text-align: center; display: block; margin: auto\">{{title || \"Default header\"}}</h3>\n",

                    styles: [""]

                }] }

    ];

    /** @nocollapse */

    CardHeaderComponent.ctorParameters = function () { return []; };

    CardHeaderComponent.propDecorators = {

        title: [{ type: Input }]

    };

    return CardHeaderComponent;

}());

if (false) {

    /** @type {?} */

    CardHeaderComponent.prototype.title;

}

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

var CardBodyComponent = /** @class */ (function () {

    function CardBodyComponent() {

    }

    /**

     * @return {?}

     */

    CardBodyComponent.prototype.ngOnInit = /**

     * @return {?}

     */

    function () {

    };

    CardBodyComponent.decorators = [

        { type: Component, args: [{

                    selector: 'nx-demos-card-body',

                    template: "<h4 style=\"text-align: center\">{{contentText || 'Default body text'}}</h4>\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      This is the expansion title\n    </mat-panel-title>\n    <!-- <mat-panel-description>\n        This is a summary of the content\n      </mat-panel-description> -->\n  </mat-expansion-panel-header>\n  <p>{{contentText || 'Default body text'}}</p>\n</mat-expansion-panel>\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      This is the expansion title\n    </mat-panel-title>\n    <!-- <mat-panel-description>\n        This is a summary of the content\n      </mat-panel-description> -->\n  </mat-expansion-panel-header>\n  <p>{{contentText || 'Default body text'}}</p>\n</mat-expansion-panel>",

                    styles: [""]

                }] }

    ];

    /** @nocollapse */

    CardBodyComponent.ctorParameters = function () { return []; };

    CardBodyComponent.propDecorators = {

        contentText: [{ type: Input }]

    };

    return CardBodyComponent;

}());

if (false) {

    /** @type {?} */

    CardBodyComponent.prototype.contentText;

}

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

var CardModule = /** @class */ (function () {

    function CardModule() {

    }

    CardModule.decorators = [

        { type: NgModule, args: [{

                    imports: [

                        CommonModule,

                        MatExpansionModule

                    ],

                    declarations: [CardContainerComponent, CardHeaderComponent, CardBodyComponent],

                    exports: [CardContainerComponent, CardHeaderComponent, CardBodyComponent]

                },] }

    ];

    return CardModule;

}());

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

export { CardModule, CardContainerComponent as ɵa, CardHeaderComponent as ɵb, CardBodyComponent as ɵc };
//# sourceMappingURL=bit-arnobornman.demo-angular-controls.card-card.js.map
