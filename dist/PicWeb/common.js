(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/utils/base-form-user.ts":
/*!************************************************!*\
  !*** ./src/app/shared/utils/base-form-user.ts ***!
  \************************************************/
/*! exports provided: BaseFormUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseFormUser", function() { return BaseFormUser; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




class BaseFormUser {
    constructor(fb) {
        this.fb = fb;
        this.isValidEmail = /\S+@\S+\.\S+/;
        this.errorMessage = null;
        this.baseForm = this.fb.group({
            username: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    isValidField(field) {
        this.getErrorMessage(field);
        return ((this.baseForm.get(field).touched || this.baseForm.get(field).dirty) &&
            !this.baseForm.get(field).valid);
    }
    getErrorMessage(field) {
        var _a;
        const { errors } = this.baseForm.get(field);
        if (errors) {
            const minlenght = (_a = errors === null || errors === void 0 ? void 0 : errors.minlength) === null || _a === void 0 ? void 0 : _a.requiredLength;
            const messages = {
                required: 'You must enter a value.',
                pattern: 'Not a valid email.',
                minlength: `This field must be longer than ${minlenght} characters`,
            };
            const errorKey = Object.keys(errors).find(Boolean);
            this.errorMessage = messages[errorKey];
        }
    }
}
BaseFormUser.ɵfac = function BaseFormUser_Factory(t) { return new (t || BaseFormUser)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
BaseFormUser.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BaseFormUser, factory: BaseFormUser.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseFormUser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map