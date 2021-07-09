(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "+CSB":
/*!********************************************************!*\
  !*** ./src/app/modules/common/base-modal-component.ts ***!
  \********************************************************/
/*! exports provided: BaseModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModalComponent", function() { return BaseModalComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");

class BaseModalComponent {
    constructor(baseService) {
        this.baseService = baseService;
        this.isLoadingButton = false;
        this.isEditMode = false;
    }
    create(data, okModalEvent, messageService) {
        this.isLoadingButton = true;
        this.baseService
            .create(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(() => (this.isLoadingButton = false)))
            .subscribe((res) => {
            if (res.code == 'OK') {
                messageService.create('success', `Create successfully!`);
                okModalEvent.emit(res.data);
                this.baseForm.reset();
            }
        });
    }
    cancel(cancelModalEvent) {
        cancelModalEvent.emit();
        this.baseForm.reset();
    }
}


/***/ }),

/***/ "2AjE":
/*!***************************************************************!*\
  !*** ./src/app/modules/category/services/category.service.ts ***!
  \***************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







class CategoryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    create(category) {
        return this.httpClient
            .post(`${_env__WEBPACK_IMPORTED_MODULE_3__["environment"].productServiceUrl}/api/category/create`, category)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error.error);
        }));
    }
    delete(categoryId, baseParams) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append('page', `${baseParams.pageIndex - 1}`)
            .append('pageSize', `${baseParams.pageSize}`);
        if (baseParams.sortField != null) {
            params = params.append('sortField', `${baseParams.sortField}`)
                .append('sortOrder', `${baseParams.sortOrder}`);
        }
        if (baseParams.filters.length > 0) {
            baseParams.filters.forEach(filter => {
                params = params.append(filter.key, filter.value);
            });
        }
        return this.httpClient
            .delete(`${_env__WEBPACK_IMPORTED_MODULE_3__["environment"].productServiceUrl}/api/category/${categoryId}`, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error.error);
        }));
    }
    getAllStore() {
        return this.httpClient
            .get(`${_env__WEBPACK_IMPORTED_MODULE_3__["environment"].productServiceUrl}/api/category/category-all-store`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err.error);
        }));
    }
    getAll(baseParams) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append('page', `${baseParams.pageIndex - 1}`)
            .append('pageSize', `${baseParams.pageSize}`);
        if (baseParams.sortField != null) {
            params = params.append('sortField', `${baseParams.sortField}`)
                .append('sortOrder', `${baseParams.sortOrder}`);
        }
        if (baseParams.filters.length > 0) {
            baseParams.filters.forEach(filter => {
                params = params.append(filter.key, filter.value);
            });
        }
        return this.httpClient
            .get(`${_env__WEBPACK_IMPORTED_MODULE_3__["environment"].productServiceUrl}/api/category`, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err.error);
        }));
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AG10":
/*!***********************************************!*\
  !*** ./src/app/modules/common/base-params.ts ***!
  \***********************************************/
/*! exports provided: BaseParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseParams", function() { return BaseParams; });
class BaseParams {
    constructor() {
        this.pageIndex = 1;
        this.pageSize = 5;
        this.filters = [];
        this.sortField = null;
        this.sortOrder = null;
    }
}


/***/ }),

/***/ "CjS1":
/*!*******************************************!*\
  !*** ./src/app/core/pipe/slugify.pipe.ts ***!
  \*******************************************/
/*! exports provided: SlugifyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlugifyPipe", function() { return SlugifyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SlugifyPipe {
    transform(input) {
        if (input == null) {
            return "";
        }
        return input.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    }
}
SlugifyPipe.ɵfac = function SlugifyPipe_Factory(t) { return new (t || SlugifyPipe)(); };
SlugifyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "slugify", type: SlugifyPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlugifyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'slugify' }]
    }], null, null); })();


/***/ }),

/***/ "F0gW":
/*!*********************************************************!*\
  !*** ./src/app/modules/color/services/color.service.ts ***!
  \*********************************************************/
/*! exports provided: ColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorService", function() { return ColorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");







class ColorService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAll(baseParams) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append('page', `${baseParams.pageIndex - 1}`)
            .append('pageSize', `${baseParams.pageSize}`);
        if (baseParams.sortField != null) {
            params = params.append('sortField', `${baseParams.sortField}`)
                .append('sortOrder', `${baseParams.sortOrder}`);
        }
        if (baseParams.filters.length > 0) {
            baseParams.filters.forEach(filter => {
                params = params.append(filter.key, filter.value);
            });
        }
        return this.httpClient.get(`${_env__WEBPACK_IMPORTED_MODULE_3__["environment"].productServiceUrl}/api/color`, {
            params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error.error);
        }));
    }
    getColorAllStore() {
        return this.httpClient.get(`${_env__WEBPACK_IMPORTED_MODULE_3__["environment"].productServiceUrl}/api/color/color-all-store`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error.error);
        }));
    }
    delete(colorId, baseParams) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append('page', `${baseParams.pageIndex - 1}`)
            .append('pageSize', `${baseParams.pageSize}`);
        if (baseParams.sortField != null) {
            params = params.append('sortField', `${baseParams.sortField}`)
                .append('sortOrder', `${baseParams.sortOrder}`);
        }
        if (baseParams.filters.length > 0) {
            baseParams.filters.forEach(filter => {
                params = params.append(filter.key, filter.value);
            });
        }
        return this.httpClient
            .delete(`${_env__WEBPACK_IMPORTED_MODULE_3__["environment"].productServiceUrl}/api/color/${colorId}`, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error.error);
        }));
    }
    create(color) {
        return this.httpClient
            .post(`${_env__WEBPACK_IMPORTED_MODULE_3__["environment"].productServiceUrl}/api/color/create`, color)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error.error);
        }));
    }
}
ColorService.ɵfac = function ColorService_Factory(t) { return new (t || ColorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ColorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ColorService, factory: ColorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ColorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "MwqQ":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/services/user.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    checkEmailExist(email) {
        return this.httpClient.get(`${_env__WEBPACK_IMPORTED_MODULE_2__["environment"].userServiceUrl}/api/users/checkEmailExist?email=${email}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => {
            if (result.isSuccessed) {
                return null;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ error: true, duplicated: true });
        }));
    }
    sellerRegister(request) {
        return this.httpClient.post(`${_env__WEBPACK_IMPORTED_MODULE_2__["environment"].userServiceUrl}/api/users/sellerRegister`, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error.error);
        }));
    }
    sendCode(email) {
        const code = Math.floor(Math.random() * (999999 - 100000) + 100000).toString();
        const emailContent = {
            To: email,
            Subject: "Verify Code",
            Content: code,
        };
        this.httpClient.post(`${_env__WEBPACK_IMPORTED_MODULE_2__["environment"].userServiceUrl}/api/emails/sendmail`, emailContent).subscribe();
        localStorage.setItem(_env__WEBPACK_IMPORTED_MODULE_2__["environment"].verifyKey, btoa(code));
    }
    checkStoreExist(storeName) {
        return this.httpClient.get(`${_env__WEBPACK_IMPORTED_MODULE_2__["environment"].productServiceUrl}/api/store/existed?storeName=${storeName}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => {
            if (result.code == "OK") {
                return { error: true, duplicated: true };
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "WRNG":
/*!*********************************************************!*\
  !*** ./src/app/modules/brand/services/brand.service.ts ***!
  \*********************************************************/
/*! exports provided: BrandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandService", function() { return BrandService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







class BrandService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAll(baseParams) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append('page', `${baseParams.pageIndex - 1}`)
            .append('pageSize', `${baseParams.pageSize}`);
        if (baseParams.sortField != null) {
            params = params.append('sortField', `${baseParams.sortField}`)
                .append('sortOrder', `${baseParams.sortOrder}`);
        }
        if (baseParams.filters.length > 0) {
            baseParams.filters.forEach(filter => {
                params = params.append(filter.key, filter.value);
            });
        }
        return this.httpClient.get(`${_env__WEBPACK_IMPORTED_MODULE_2__["environment"].productServiceUrl}/api/brand`, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error.error);
        }));
    }
    getBrandAllStore() {
        return this.httpClient.get(`${_env__WEBPACK_IMPORTED_MODULE_2__["environment"].productServiceUrl}/api/brand/brand-all-store`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error.error);
        }));
    }
    create(brand) {
        return this.httpClient.post(`${_env__WEBPACK_IMPORTED_MODULE_2__["environment"].productServiceUrl}/api/brand/create`, brand).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error.error);
        }));
    }
    delete(brandId, baseParams) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append('page', `${baseParams.pageIndex - 1}`)
            .append('pageSize', `${baseParams.pageSize}`);
        if (baseParams.sortField != null) {
            params = params.append('sortField', `${baseParams.sortField}`)
                .append('sortOrder', `${baseParams.sortOrder}`);
        }
        if (baseParams.filters.length > 0) {
            baseParams.filters.forEach(filter => {
                params = params.append(filter.key, filter.value);
            });
        }
        return this.httpClient.delete(`${_env__WEBPACK_IMPORTED_MODULE_2__["environment"].productServiceUrl}/api/brand/${brandId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error.error);
        }));
    }
}
BrandService.ɵfac = function BrandService_Factory(t) { return new (t || BrandService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BrandService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrandService, factory: BrandService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrandService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "awuB":
/*!************************************************************!*\
  !*** ./src/app/core/directive/valid-password.directive.ts ***!
  \************************************************************/
/*! exports provided: validPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validPasswordValidator", function() { return validPasswordValidator; });
function validPasswordValidator(passwordRe) {
    return (control) => {
        const forbidden = passwordRe.test(control.value);
        return forbidden ? null : { invalidPassword: true };
    };
}


/***/ }),

/***/ "q5vz":
/*!*******************************************************!*\
  !*** ./src/app/modules/common/base-list-component.ts ***!
  \*******************************************************/
/*! exports provided: BaseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseListComponent", function() { return BaseListComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _base_params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-params */ "AG10");


class BaseListComponent {
    constructor(baseService) {
        this.baseService = baseService;
        this.isShowModal = false;
        this.isLoading = false;
        this.isShowSearchInput = false;
        this.total = 1;
        this.searchValue = '';
        this.baseParams = new _base_params__WEBPACK_IMPORTED_MODULE_1__["BaseParams"]();
        this.isAdmin = false;
        this.listData = [];
    }
    showModal() {
        this.isShowModal = true;
    }
    closeModal(data) {
        if (data == null) {
            this.isShowModal = false;
            return null;
        }
        const isLastPage = Math.floor(this.total / this.baseParams.pageSize) + 1 == this.baseParams.pageIndex;
        // is sort descend
        if (this.baseParams.sortField == "id" && this.baseParams.sortOrder == "descend") {
            this.listData.unshift(data);
            if (this.listData.length >= this.baseParams.pageSize) {
                this.listData.pop();
            }
        }
        // is last page and numRow < pageSize
        else if (isLastPage && this.listData.length < this.baseParams.pageSize) {
            this.listData.push(data);
        }
        this.total++;
        this.isShowModal = false;
    }
    edit(data) {
        this.selectedData = data;
        this.isShowModal = true;
    }
    delete(id) {
        this.isLoading = true;
        this.baseService.delete(id, this.baseParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(() => this.isLoading = false)).subscribe(res => {
            if (res.code == "OK") {
                this.total--;
                this.listData = this.listData.filter(val => val.id !== id);
                if (Math.floor(this.total / this.baseParams.pageSize) + 1 != this.baseParams.pageIndex) {
                    this.listData.push(res.data);
                }
            }
        });
    }
    search() {
        this.baseParams.sortField = null;
        this.baseParams.sortOrder = null;
        this.loadDataFromServer(this.baseParams);
    }
    reset() {
        this.searchValue = "";
        this.baseParams.sortField = null;
        this.baseParams.sortOrder = null;
        this.baseParams.filters = [];
        this.loadDataFromServer(this.baseParams);
    }
    loadDataFromServer(params) {
        this.isLoading = true;
        this.baseService.getAll(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(() => this.isLoading = false)).subscribe(response => {
            this.listData = response.data.content;
            this.total = response.data.totalElements;
        });
    }
    onQueryParamsChangeFromParent(params) {
        const { pageSize, pageIndex, sort, filter } = params;
        const currentSort = sort.find(item => item.value !== null);
        this.baseParams.pageIndex = pageIndex;
        this.baseParams.pageSize = pageSize;
        this.baseParams.sortField = (currentSort && currentSort.key) || null;
        this.baseParams.sortOrder = (currentSort && currentSort.value) || null;
        this.baseParams.filters = this.baseParams.filters.concat(filter);
        this.loadDataFromServer(this.baseParams);
    }
}


/***/ }),

/***/ "vpSu":
/*!*******************************************************!*\
  !*** ./src/app/modules/size/services/size.service.ts ***!
  \*******************************************************/
/*! exports provided: SizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeService", function() { return SizeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







class SizeService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAll(baseParams) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append('page', `${baseParams.pageIndex - 1}`)
            .append('pageSize', `${baseParams.pageSize}`);
        if (baseParams.sortField != null) {
            params = params.append('sortField', `${baseParams.sortField}`)
                .append('sortOrder', `${baseParams.sortOrder}`);
        }
        if (baseParams.filters.length > 0) {
            baseParams.filters.forEach(filter => {
                params = params.append(filter.key, filter.value);
            });
        }
        return this.httpClient.get(`${_env__WEBPACK_IMPORTED_MODULE_2__["environment"].productServiceUrl}/api/size`, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error.error);
        }));
    }
    getAllStore() {
        return this.httpClient.get(`${_env__WEBPACK_IMPORTED_MODULE_2__["environment"].productServiceUrl}/api/size/size-all-store`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error.error);
        }));
    }
    create(data) {
        return this.httpClient.post(`${_env__WEBPACK_IMPORTED_MODULE_2__["environment"].productServiceUrl}/api/size/create`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error.error);
        }));
    }
    delete(sizeId, baseParams) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append('page', `${baseParams.pageIndex - 1}`)
            .append('pageSize', `${baseParams.pageSize}`);
        if (baseParams.sortField != null) {
            params = params.append('sortField', `${baseParams.sortField}`)
                .append('sortOrder', `${baseParams.sortOrder}`);
        }
        if (baseParams.filters.length > 0) {
            baseParams.filters.forEach(filter => {
                params = params.append(filter.key, filter.value);
            });
        }
        return this.httpClient.delete(`${_env__WEBPACK_IMPORTED_MODULE_2__["environment"].productServiceUrl}/api/size/${sizeId}`, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error.error);
        }));
    }
}
SizeService.ɵfac = function SizeService_Factory(t) { return new (t || SizeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
SizeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SizeService, factory: SizeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SizeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map