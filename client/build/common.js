(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/categories/category.service.ts":
/*!************************************************!*\
  !*** ./src/app/categories/category.service.ts ***!
  \************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/crud.service */ "./src/service/crud.service.ts");




var CategoryService = /** @class */ (function () {
    function CategoryService(crud) {
        this.crud = crud;
    }
    // Get all category
    CategoryService.prototype.getAll = function (page, limit, search) {
        return this.crud.getData("/categories/admin/list?page=" + page + "&limit=" + limit + "&q=" + search);
    };
    // Get all category for dropdown
    CategoryService.prototype.getAllEnabled = function () {
        return this.crud.getData('/categories/admin/dropdown-list');
    };
    // Get category by Id
    CategoryService.prototype.getById = function (categoryId) {
        return this.crud.getData("/categories/admin/detail/" + categoryId);
    };
    // Create category
    CategoryService.prototype.save = function (categoryData) {
        return this.crud.saveData('/categories/admin/create', categoryData);
    };
    // Update category
    CategoryService.prototype.update = function (categoryId, categoryData) {
        return this.crud.updateData("/categories/admin/update/" + categoryId, categoryData);
    };
    // Updates category status
    CategoryService.prototype.updateStatus = function (categoryId, categoryData) {
        return this.crud.updateData("/categories/admin/status-update/" + categoryId, categoryData);
    };
    // Delete category
    CategoryService.prototype.delete = function (categoryId) {
        return this.crud.deleteData("/categories/admin/delete/" + categoryId);
    };
    CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"])); };
    CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac });
    return CategoryService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/delivery-boy/delivery-boy.service.ts":
/*!******************************************************!*\
  !*** ./src/app/delivery-boy/delivery-boy.service.ts ***!
  \******************************************************/
/*! exports provided: DeliveryBoyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryBoyService", function() { return DeliveryBoyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/crud.service */ "./src/service/crud.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var DeliveryBoyService = /** @class */ (function () {
    function DeliveryBoyService(crud, http) {
        this.crud = crud;
        this.http = http;
    }
    // gets dial codes list
    DeliveryBoyService.prototype.getDialCodeList = function () {
        return this.http.get('assets/json/country_codes.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null); }));
    };
    // Get all delivery Boy
    DeliveryBoyService.prototype.getAll = function (page, limit, search) {
        return this.crud.getData("/users/admin/delivery-boy/list?page=" + page + "&limit=" + limit + "&q=" + search);
    };
    // Save delivery Boy
    DeliveryBoyService.prototype.save = function (deliveryBoy) {
        return this.crud.saveData('/users/admin/delivery-boy/create', deliveryBoy);
    };
    // Update delivery boy status
    DeliveryBoyService.prototype.updateStatus = function (deliveryBoyId, statusData) {
        return this.crud.updateData("/users/admin/delivery-boy/status-update/" + deliveryBoyId, statusData);
    };
    DeliveryBoyService.ɵfac = function DeliveryBoyService_Factory(t) { return new (t || DeliveryBoyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"])); };
    DeliveryBoyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeliveryBoyService, factory: DeliveryBoyService.ɵfac });
    return DeliveryBoyService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeliveryBoyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"] }, { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/login/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/auth.service.ts ***!
  \*********************************************/
/*! exports provided: CMS_ROLES, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMS_ROLES", function() { return CMS_ROLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/crud.service */ "./src/service/crud.service.ts");




var CMS_ROLES;
(function (CMS_ROLES) {
    CMS_ROLES["ADMIN"] = "ADMIN";
    CMS_ROLES["DELIVERY_BOY"] = "DELIVERY_BOY";
})(CMS_ROLES || (CMS_ROLES = {}));
var AuthService = /** @class */ (function () {
    function AuthService(crud) {
        this.crud = crud;
    }
    // validates admins credentials
    AuthService.prototype.validateCredentials = function (credentials) {
        return this.crud.saveData('/users/login', credentials);
    };
    // verifies admin's email and sends OTP to the email
    AuthService.prototype.verifyEmail = function (body) {
        return this.crud.saveData('/users/forgot-password', body);
    };
    // verifies OTP entered by admin
    AuthService.prototype.verifyOTP = function (body) {
        return this.crud.getData("/users/verify-otp?email=" + body.email + "&otp=" + body.otp);
    };
    // sends request to reset admin's password
    AuthService.prototype.resetPassword = function (passwordData) {
        return this.crud.saveData('/users/reset-password', passwordData);
    };
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"])); };
    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
    return AuthService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sub-category/sub-category.service.ts":
/*!******************************************************!*\
  !*** ./src/app/sub-category/sub-category.service.ts ***!
  \******************************************************/
/*! exports provided: SubCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryService", function() { return SubCategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/crud.service */ "./src/service/crud.service.ts");




var SubCategoryService = /** @class */ (function () {
    function SubCategoryService(crud) {
        this.crud = crud;
    }
    // Get all sub category
    SubCategoryService.prototype.getAll = function (page, limit, search) {
        return this.crud.getData("/sub-categories/admin/list?page=" + page + "&limit=" + limit + "&q=" + search);
    };
    // Get all enabled sub category
    SubCategoryService.prototype.getAllEnabled = function () {
        return this.crud.getData('/sub-categories/list');
    };
    // Get sub category by Id
    SubCategoryService.prototype.getById = function (subCategoryId) {
        return this.crud.getData("/sub-categories/admin/detail/" + subCategoryId);
    };
    // Get all sub category by categoryId
    SubCategoryService.prototype.getAllByCategoryId = function (categoryId) {
        return this.crud.getData("/sub-categories/admin/dropdown-list/" + categoryId);
    };
    // Save sub category
    SubCategoryService.prototype.save = function (subCategory) {
        return this.crud.saveData('/sub-categories/admin/create', subCategory);
    };
    // Update sub category
    SubCategoryService.prototype.update = function (subCategoryId, subCategory) {
        return this.crud.updateData("/sub-categories/admin/update/" + subCategoryId, subCategory);
    };
    // Update sub category status
    SubCategoryService.prototype.updateStatus = function (subCategoryId, statusInfo) {
        return this.crud.updateData("/sub-categories/admin/status-update/" + subCategoryId, statusInfo);
    };
    // Delete sub category
    SubCategoryService.prototype.delete = function (subCategoryId) {
        return this.crud.deleteData("/sub-categories/admin/delete/" + subCategoryId);
    };
    SubCategoryService.ɵfac = function SubCategoryService_Factory(t) { return new (t || SubCategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"])); };
    SubCategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubCategoryService, factory: SubCategoryService.ɵfac });
    return SubCategoryService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubCategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/users/user.service.ts":
/*!***************************************!*\
  !*** ./src/app/users/user.service.ts ***!
  \***************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/crud.service */ "./src/service/crud.service.ts");




var UserService = /** @class */ (function () {
    function UserService(crud) {
        this.crud = crud;
    }
    // Get all
    UserService.prototype.getAll = function (page, limit, search) {
        return this.crud.getData("/users/admin/list?page=" + page + "&limit=" + limit + "&q=" + search);
    };
    ;
    // Update status
    UserService.prototype.updateStatus = function (id, statusInfo) {
        return this.crud.updateData("/users/admin/status-update/" + id, statusInfo);
    };
    // sends push notification to all users
    UserService.prototype.sendNotification = function (notificationData) {
        return this.crud.saveData('/users/admin/send/pushnotification/', notificationData);
    };
    // Get My Profile
    UserService.prototype.getMyProfile = function () {
        return this.crud.getData('/users/me');
    };
    // Update My Profile
    UserService.prototype.updateMyProfile = function (profileInfo) {
        return this.crud.updateData('/users/update/profile', profileInfo);
    };
    // Change password
    UserService.prototype.changePassword = function (passwordData) {
        return this.crud.saveData('/users/change-password', passwordData);
    };
    UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"])); };
    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
    return UserService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map