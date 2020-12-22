import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material';

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material';
class CardContainerComponent {

    constructor() { }

    /**

     * @return {?}

     */

    ngOnInit() {

    }

}
CardContainerComponent.ɵfac = function CardContainerComponent_Factory(t) { return new (t || CardContainerComponent)(); };
CardContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CardContainerComponent, selectors: [["nx-demos-card-container"]], inputs: { headerText: "headerText", bodyText: "bodyText" }, decls: 3, vars: 2, consts: [[1, "card-container"], [3, "title"], [3, "contentText"]], template: function CardContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "nx-demos-card-header", 1);
        ɵngcc0.ɵɵelement(2, "nx-demos-card-body", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("title", ctx.headerText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("contentText", ctx.bodyText);
    } }, directives: function () { return [CardHeaderComponent, CardBodyComponent]; }, styles: [".card-container[_ngcontent-%COMP%]{height:300px;width:300px;border:4px solid green;border-radius:8px}"] });

/** @nocollapse */

CardContainerComponent.ctorParameters = () => [];

CardContainerComponent.propDecorators = {

    headerText: [{ type: Input }],

    bodyText: [{ type: Input }]

};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CardContainerComponent, [{
        type: Component,
        args: [{
                selector: 'nx-demos-card-container',
                template: "<div class=card-container>\n    <nx-demos-card-header\n    [title]=\"headerText\"\n    ></nx-demos-card-header>\n    <nx-demos-card-body\n    [contentText]=\"bodyText\"    \n    >\n    </nx-demos-card-body>\n</div>\n",
                styles: [".card-container{height:300px;width:300px;border:4px solid green;border-radius:8px}"]
            }]
    }], function () { return []; }, { headerText: [{
            type: Input
        }], bodyText: [{
            type: Input
        }] }); })();

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
CardHeaderComponent.ɵfac = function CardHeaderComponent_Factory(t) { return new (t || CardHeaderComponent)(); };
CardHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CardHeaderComponent, selectors: [["nx-demos-card-header"]], inputs: { title: "title" }, decls: 2, vars: 1, consts: [[2, "text-align", "center", "display", "block", "margin", "auto"]], template: function CardHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "h3", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.title || "Default header");
    } }, styles: [""] });

/** @nocollapse */

CardHeaderComponent.ctorParameters = () => [];

CardHeaderComponent.propDecorators = {

    title: [{ type: Input }]

};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CardHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'nx-demos-card-header',
                template: "<h3 style=\"text-align: center; display: block; margin: auto\">{{title || \"Default header\"}}</h3>\n",
                styles: [""]
            }]
    }], function () { return []; }, { title: [{
            type: Input
        }] }); })();

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
CardBodyComponent.ɵfac = function CardBodyComponent_Factory(t) { return new (t || CardBodyComponent)(); };
CardBodyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CardBodyComponent, selectors: [["nx-demos-card-body"]], inputs: { contentText: "contentText" }, decls: 14, vars: 3, consts: [[2, "text-align", "center"]], template: function CardBodyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "h4", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "mat-expansion-panel");
        ɵngcc0.ɵɵelementStart(3, "mat-expansion-panel-header");
        ɵngcc0.ɵɵelementStart(4, "mat-panel-title");
        ɵngcc0.ɵɵtext(5, " This is the expansion title ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "p");
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "mat-expansion-panel");
        ɵngcc0.ɵɵelementStart(9, "mat-expansion-panel-header");
        ɵngcc0.ɵɵelementStart(10, "mat-panel-title");
        ɵngcc0.ɵɵtext(11, " This is the expansion title ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "p");
        ɵngcc0.ɵɵtext(13);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.contentText || "Default body text");
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵtextInterpolate(ctx.contentText || "Default body text");
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵtextInterpolate(ctx.contentText || "Default body text");
    } }, directives: [ɵngcc1.MatExpansionPanel, ɵngcc1.MatExpansionPanelHeader, ɵngcc1.MatExpansionPanelTitle], styles: [""] });

/** @nocollapse */

CardBodyComponent.ctorParameters = () => [];

CardBodyComponent.propDecorators = {

    contentText: [{ type: Input }]

};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CardBodyComponent, [{
        type: Component,
        args: [{
                selector: 'nx-demos-card-body',
                template: "<h4 style=\"text-align: center\">{{contentText || 'Default body text'}}</h4>\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      This is the expansion title\n    </mat-panel-title>\n    <!-- <mat-panel-description>\n        This is a summary of the content\n      </mat-panel-description> -->\n  </mat-expansion-panel-header>\n  <p>{{contentText || 'Default body text'}}</p>\n</mat-expansion-panel>\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      This is the expansion title\n    </mat-panel-title>\n    <!-- <mat-panel-description>\n        This is a summary of the content\n      </mat-panel-description> -->\n  </mat-expansion-panel-header>\n  <p>{{contentText || 'Default body text'}}</p>\n</mat-expansion-panel>",
                styles: [""]
            }]
    }], function () { return []; }, { contentText: [{
            type: Input
        }] }); })();

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
CardModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CardModule });
CardModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CardModule_Factory(t) { return new (t || CardModule)(); }, imports: [[
            CommonModule,
            MatExpansionModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CardModule, { declarations: function () { return [CardContainerComponent, CardHeaderComponent, CardBodyComponent]; }, imports: function () { return [CommonModule,
        MatExpansionModule]; }, exports: function () { return [CardContainerComponent, CardHeaderComponent, CardBodyComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CardModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatExpansionModule
                ],
                declarations: [CardContainerComponent, CardHeaderComponent, CardBodyComponent],
                exports: [CardContainerComponent, CardHeaderComponent, CardBodyComponent]
            }]
    }], null, null); })();

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