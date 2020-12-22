import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material';

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

class CardContainerComponent {

    constructor() { }

    /**

     * @return {?}

     */

    ngOnInit() {

    }

}

CardContainerComponent.decorators = [

    { type: Component, args: [{

                selector: 'nx-demos-card-container',

                template: "<div class=card-container>\n    <nx-demos-card-header\n    [title]=\"headerText\"\n    ></nx-demos-card-header>\n    <nx-demos-card-body\n    [contentText]=\"bodyText\"    \n    >\n    </nx-demos-card-body>\n</div>\n",

                styles: [".card-container{height:300px;width:300px;border:4px solid green;border-radius:8px}"]

            }] }

];

/** @nocollapse */

CardContainerComponent.ctorParameters = () => [];

CardContainerComponent.propDecorators = {

    headerText: [{ type: Input }],

    bodyText: [{ type: Input }]

};

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

class CardHeaderComponent {

    constructor() { }

    /**

     * @return {?}

     */

    ngOnInit() {

    }

}

CardHeaderComponent.decorators = [

    { type: Component, args: [{

                selector: 'nx-demos-card-header',

                template: "<h3 style=\"text-align: center; display: block; margin: auto\">{{title || \"Default header\"}}</h3>\n",

                styles: [""]

            }] }

];

/** @nocollapse */

CardHeaderComponent.ctorParameters = () => [];

CardHeaderComponent.propDecorators = {

    title: [{ type: Input }]

};

if (false) {

    /** @type {?} */

    CardHeaderComponent.prototype.title;

}

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

class CardBodyComponent {

    constructor() { }

    /**

     * @return {?}

     */

    ngOnInit() {

    }

}

CardBodyComponent.decorators = [

    { type: Component, args: [{

                selector: 'nx-demos-card-body',

                template: "<h4 style=\"text-align: center\">{{contentText || 'Default body text'}}</h4>\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      This is the expansion title\n    </mat-panel-title>\n    <!-- <mat-panel-description>\n        This is a summary of the content\n      </mat-panel-description> -->\n  </mat-expansion-panel-header>\n  <p>{{contentText || 'Default body text'}}</p>\n</mat-expansion-panel>\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      This is the expansion title\n    </mat-panel-title>\n    <!-- <mat-panel-description>\n        This is a summary of the content\n      </mat-panel-description> -->\n  </mat-expansion-panel-header>\n  <p>{{contentText || 'Default body text'}}</p>\n</mat-expansion-panel>",

                styles: [""]

            }] }

];

/** @nocollapse */

CardBodyComponent.ctorParameters = () => [];

CardBodyComponent.propDecorators = {

    contentText: [{ type: Input }]

};

if (false) {

    /** @type {?} */

    CardBodyComponent.prototype.contentText;

}

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

class CardModule {

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

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

export { CardModule, CardContainerComponent as ɵa, CardHeaderComponent as ɵb, CardBodyComponent as ɵc };
//# sourceMappingURL=bit-arnobornman.demo-angular-controls.card.js.map
