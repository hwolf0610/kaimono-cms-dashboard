(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp-verify-otp-verify-module"],{

/***/ "./src/app/otp-verify/otp-verify-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/otp-verify/otp-verify-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OtpRoutingmodule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpRoutingmodule", function() { return OtpRoutingmodule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _otp_verify_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otp-verify.component */ "./src/app/otp-verify/otp-verify.component.ts");





//import { DashboardComponent } from './dashboard.component';
//import { AuthGuard } from 'app/shared/auth/auth-guard.service';
var routes = [
    {
        path: '',
        component: _otp_verify_component__WEBPACK_IMPORTED_MODULE_2__["OtpVerifyComponent"],
        data: {
            title: 'otpverify'
        },
    }
];
var OtpRoutingmodule = /** @class */ (function () {
    function OtpRoutingmodule() {
    }
    OtpRoutingmodule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OtpRoutingmodule });
    OtpRoutingmodule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OtpRoutingmodule_Factory(t) { return new (t || OtpRoutingmodule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return OtpRoutingmodule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OtpRoutingmodule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtpRoutingmodule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/otp-verify/otp-verify.component.ts":
/*!****************************************************!*\
  !*** ./src/app/otp-verify/otp-verify.component.ts ***!
  \****************************************************/
/*! exports provided: OtpVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpVerifyComponent", function() { return OtpVerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _pages_login_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/login/auth.service */ "./src/app/pages/login/auth.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/util.service */ "./src/service/util.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");











function OtpVerifyComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"));
} }
var OtpVerifyComponent = /** @class */ (function () {
    function OtpVerifyComponent(utilService, router, authService, activatedRoute) {
        var _this = this;
        this.utilService = utilService;
        this.router = router;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.otpData = {
            otp: '',
            email: ''
        }; // contains OTP entered by admin
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params) {
                _this.otpData.email = params['email'];
                console.log(_this.otpData);
            }
        });
    }
    OtpVerifyComponent.prototype.ngOnInit = function () {
    };
    // sends request to verify OTP entered by admin
    OtpVerifyComponent.prototype.verifyOTP = function () {
        var _this = this;
        this.authService.verifyOTP(this.otpData).subscribe(function (res) {
            if (res.response_code == 200) {
                _this.utilService.showToast(res.response_data.message, "SUCCESS", _service_util_service__WEBPACK_IMPORTED_MODULE_3__["ToastEnum"].SUCCESS, true);
                sessionStorage.setItem('verificationToken', res.response_data.verificationToken);
                _this.router.navigate(['/resetpassword'], { queryParams: { email: _this.otpData.email } });
            }
            else {
                _this.utilService.showToast(res.response_data, "ERROR", _service_util_service__WEBPACK_IMPORTED_MODULE_3__["ToastEnum"].ERROR, true);
            }
        }, function () { return _this.utilService.showToast("ERROR_DATA", "ERROR", _service_util_service__WEBPACK_IMPORTED_MODULE_3__["ToastEnum"].ERROR); });
    };
    OtpVerifyComponent.ɵfac = function OtpVerifyComponent_Factory(t) { return new (t || OtpVerifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_login_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    OtpVerifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtpVerifyComponent, selectors: [["app-otp-verify"]], decls: 33, vars: 14, consts: [["id", "forgot-password"], [1, "container-fluid", "forgot-password-bg"], [1, "row", "full-height-vh", "m-0", "d-flex", "align-items-center", "justify-content-center"], [1, "col-md-7", "col-sm-12"], [1, "card"], [1, "card-content"], [1, "card-body", "fg-image"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-block", "text-center", "py-3"], ["src", "../../../../assets/img/gallery/forgot.png", "alt", "", "width", "300", "height", "230", 1, "img-fluid"], [1, "col-lg-6", "col-md-12", "bg-white", "px-4", "pt-3"], [3, "ngSubmit"], ["f", "ngForm"], [1, "card-title", "mb-2"], [1, "card-text", "mb-3"], ["type", "text", "name", "otpp", 1, "form-control", "mb-3", 3, "ngModel", "ngModelChange"], ["otpp", "ngModel"], ["class", " help-block", "style", "color:red", 4, "ngIf"], [1, "fg-actions", "d-flex", "justify-content-between"], [1, "login-btn"], ["type", "button", "routerLink", "/login", 1, "btn", "btn-outline-primary"], [1, "text-decoration-none"], [1, "recover-pass"], ["type", "submit", 1, "btn", "btn-primary"], [1, "text-decoration-none", "text-white"], [1, "help-block", 2, "color", "red"]], template: function OtpVerifyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 11, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function OtpVerifyComponent_Template_form_ngSubmit_11_listener($event) { return ctx.verifyOTP(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 15, 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OtpVerifyComponent_Template_input_ngModelChange_19_listener($event) { return ctx.otpData.otp = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OtpVerifyComponent_span_21_Template, 4, 3, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r498 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 6, "VERIFY_OTP"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 8, "OTP_REG"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.otpData.otp);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r498 == null ? null : _r498.touched) && (_r498 == null ? null : _r498.errors == null ? null : _r498.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, "BACK_TO_LOGIN"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 12, "SUBMIT"), " ");
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290cC12ZXJpZnkvb3RwLXZlcmlmeS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return OtpVerifyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtpVerifyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-otp-verify',
                templateUrl: './otp-verify.component.html',
                styleUrls: ['./otp-verify.component.scss']
            }]
    }], function () { return [{ type: _service_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _pages_login_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/otp-verify/otp-verify.module.ts":
/*!*************************************************!*\
  !*** ./src/app/otp-verify/otp-verify.module.ts ***!
  \*************************************************/
/*! exports provided: OtpVerifyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpVerifyModule", function() { return OtpVerifyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/__ivy_ngcc__/fesm5/ng-chartist.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _otp_verify_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./otp-verify.component */ "./src/app/otp-verify/otp-verify.component.ts");
/* harmony import */ var _otp_verify_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otp-verify-routing.module */ "./src/app/otp-verify/otp-verify-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _custom_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../custom-loader */ "./src/app/custom-loader.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/crud.service */ "./src/service/crud.service.ts");
/* harmony import */ var _pages_login_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/login/auth.service */ "./src/app/pages/login/auth.service.ts");















var OtpVerifyModule = /** @class */ (function () {
    function OtpVerifyModule() {
    }
    OtpVerifyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OtpVerifyModule });
    OtpVerifyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OtpVerifyModule_Factory(t) { return new (t || OtpVerifyModule)(); }, providers: [_pages_login_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _otp_verify_routing_module__WEBPACK_IMPORTED_MODULE_6__["OtpRoutingmodule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_2__["ChartistModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_4__["MatchHeightModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useClass: _custom_loader__WEBPACK_IMPORTED_MODULE_9__["CustomLoader"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _service_crud_service__WEBPACK_IMPORTED_MODULE_11__["CrudService"]],
                        multi: true
                    }
                })
            ]] });
    return OtpVerifyModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OtpVerifyModule, { declarations: [_otp_verify_component__WEBPACK_IMPORTED_MODULE_5__["OtpVerifyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _otp_verify_routing_module__WEBPACK_IMPORTED_MODULE_6__["OtpRoutingmodule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        ng_chartist__WEBPACK_IMPORTED_MODULE_2__["ChartistModule"],
        _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_4__["MatchHeightModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtpVerifyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _otp_verify_routing_module__WEBPACK_IMPORTED_MODULE_6__["OtpRoutingmodule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    ng_chartist__WEBPACK_IMPORTED_MODULE_2__["ChartistModule"],
                    _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_4__["MatchHeightModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                            useClass: _custom_loader__WEBPACK_IMPORTED_MODULE_9__["CustomLoader"],
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _service_crud_service__WEBPACK_IMPORTED_MODULE_11__["CrudService"]],
                            multi: true
                        }
                    })
                ],
                exports: [],
                declarations: [
                    _otp_verify_component__WEBPACK_IMPORTED_MODULE_5__["OtpVerifyComponent"]
                ],
                providers: [_pages_login_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=otp-verify-otp-verify-module.js.map