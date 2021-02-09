(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-full-layout-page-full-pages-module"],{

/***/ "./src/app/pages/full-layout-page/full-layout-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/full-layout-page/full-layout-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: FullLayoutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutPageComponent", function() { return FullLayoutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FullLayoutPageComponent = /** @class */ (function () {
    function FullLayoutPageComponent() {
    }
    FullLayoutPageComponent.ɵfac = function FullLayoutPageComponent_Factory(t) { return new (t || FullLayoutPageComponent)(); };
    FullLayoutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullLayoutPageComponent, selectors: [["app-full-layout-page"]], decls: 0, vars: 0, template: function FullLayoutPageComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtbGF5b3V0LXBhZ2UvZnVsbC1sYXlvdXQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return FullLayoutPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullLayoutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-full-layout-page',
                templateUrl: './full-layout-page.component.html',
                styleUrls: ['./full-layout-page.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/full-layout-page/full-pages-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/full-layout-page/full-pages-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FullPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPagesRoutingModule", function() { return FullPagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var app_pages_full_layout_page_full_layout_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/full-layout-page/full-layout-page.component */ "./src/app/pages/full-layout-page/full-layout-page.component.ts");





var routes = [
    {
        path: '',
        component: app_pages_full_layout_page_full_layout_page_component__WEBPACK_IMPORTED_MODULE_2__["FullLayoutPageComponent"],
        data: {
            title: 'Full Layout Page'
        },
    }
];
var FullPagesRoutingModule = /** @class */ (function () {
    function FullPagesRoutingModule() {
    }
    FullPagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FullPagesRoutingModule });
    FullPagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FullPagesRoutingModule_Factory(t) { return new (t || FullPagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return FullPagesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FullPagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullPagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/full-layout-page/full-pages.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/full-layout-page/full-pages.module.ts ***!
  \*************************************************************/
/*! exports provided: FullPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPagesModule", function() { return FullPagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _full_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./full-pages-routing.module */ "./src/app/pages/full-layout-page/full-pages-routing.module.ts");
/* harmony import */ var _full_layout_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./full-layout-page.component */ "./src/app/pages/full-layout-page/full-layout-page.component.ts");





var FullPagesModule = /** @class */ (function () {
    function FullPagesModule() {
    }
    FullPagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FullPagesModule });
    FullPagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FullPagesModule_Factory(t) { return new (t || FullPagesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _full_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["FullPagesRoutingModule"]
            ]] });
    return FullPagesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FullPagesModule, { declarations: [_full_layout_page_component__WEBPACK_IMPORTED_MODULE_3__["FullLayoutPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _full_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["FullPagesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullPagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _full_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["FullPagesRoutingModule"]
                ],
                declarations: [
                    _full_layout_page_component__WEBPACK_IMPORTED_MODULE_3__["FullLayoutPageComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-full-layout-page-full-pages-module.js.map