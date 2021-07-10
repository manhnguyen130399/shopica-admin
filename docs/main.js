(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\Ecomerce_Website\web-admin\SHOPPICAL-ANGULAR-ADMIN-WEB\src\main.ts */"zUnb");


/***/ }),

/***/ "3CWZ":
/*!*************************************************!*\
  !*** ./src/app/core/jwt/jwt-options-factory.ts ***!
  \*************************************************/
/*! exports provided: jwtOptionsFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtOptionsFactory", function() { return jwtOptionsFactory; });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env */ "AytR");

function jwtOptionsFactory(utilitiesService) {
    return {
        tokenGetter: () => {
            return utilitiesService.getToken();
        },
        authScheme: "Bearer ",
        allowedDomains: _env__WEBPACK_IMPORTED_MODULE_0__["environment"].backendDomain,
        disallowedRoutes: [],
    };
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    userServiceUrl: "https://aspnetclusters-37619-0.cloudclusters.net",
    orderServiceUrl: "https://aspnetclusters-37670-0.cloudclusters.net",
    productServiceUrl: "http://ec2-52-221-204-184.ap-southeast-1.compute.amazonaws.com",
    messageServiceUrl: 'https://aspnetclusters-37333-0.cloudclusters.net',
    localUserServiceUrl: "https://localhost:5001",
    localOrderServiceUrl: "https://localhost:5002",
    localMessageServiceUrl: 'https://localhost:5003',
    ghnAPIUrl: "https://dev-online-gateway.ghn.vn/shiip/public-api",
    tokenKey: "token",
    verifyKey: "verifyKey",
    ghnToken: "aa3d5553-73e6-11eb-8be2-c21e19fc6803",
    backendDomain: [
        "aspnetclusters-37619-0.cloudclusters.net",
        "aspnetclusters-37670-0.cloudclusters.net",
        "backend-java-api.herokuapp.com",
        "aspnetclusters-37333-0.cloudclusters.net",
        "localhost:5001",
        "localhost:5002",
        "localhost:5003"
    ]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "N06n":
/*!**********************************************************!*\
  !*** ./src/app/core/services/signalr/signalr.service.ts ***!
  \**********************************************************/
/*! exports provided: SignalrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalrService", function() { return SignalrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env */ "AytR");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utilities/utilities.service */ "R2Cy");






class SignalrService {
    constructor(utilitiesService) {
        this.utilitiesService = utilitiesService;
        this.notifySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.messageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.notifyEventEmitter$ = this.notifySubject.asObservable();
        this.messageEventEmitter$ = this.messageSubject.asObservable();
        this.addNotifyDataListener = () => {
            this.notifyHubConnection.on('NewOrderNotify', (data) => {
                this.notifySubject.next(data);
            });
        };
        this.addReceiveMessageDataListener = () => {
            this.chatHubConnection.on('NewMessage', (data) => {
                this.messageSubject.next(data);
            });
        };
    }
    buildNotifyConnection() {
        this.notifyHubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__["HubConnectionBuilder"]()
            .withUrl(`${_env__WEBPACK_IMPORTED_MODULE_1__["environment"].orderServiceUrl}/orderNotifys`, { accessTokenFactory: () => this.utilitiesService.getToken() })
            .withAutomaticReconnect()
            .build();
    }
    buildChatConnection() {
        this.chatHubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__["HubConnectionBuilder"]()
            .withUrl(`${_env__WEBPACK_IMPORTED_MODULE_1__["environment"].messageServiceUrl}/chatHub`, { accessTokenFactory: () => this.utilitiesService.getToken() })
            .withAutomaticReconnect()
            .build();
    }
    startNotifyConnection() {
        this.notifyHubConnection
            .start()
            .then(() => console.log("Start Notify Connection"))
            .catch((err) => console.log('Error while starting connection: ' + err));
    }
    startChatConnection() {
        this.chatHubConnection
            .start()
            .then(() => console.log("Start Chat Connection"))
            .catch((err) => console.log('Error while starting connection: ' + err));
    }
}
SignalrService.ɵfac = function SignalrService_Factory(t) { return new (t || SignalrService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"])); };
SignalrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignalrService, factory: SignalrService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignalrService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"] }]; }, null); })();


/***/ }),

/***/ "R2Cy":
/*!**************************************************************!*\
  !*** ./src/app/core/services/utilities/utilities.service.ts ***!
  \**************************************************************/
/*! exports provided: UtilitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesService", function() { return UtilitiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env */ "AytR");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../storage/storage.service */ "rtiL");




class UtilitiesService {
    constructor(storageService) {
        this.storageService = storageService;
    }
    getToken() {
        this.user = this.storageService.getValue(_env__WEBPACK_IMPORTED_MODULE_1__["environment"].tokenKey);
        if (this.user != null) {
            return this.user.token;
        }
        return null;
    }
    getRole() {
        this.user = this.storageService.getValue(_env__WEBPACK_IMPORTED_MODULE_1__["environment"].tokenKey);
        if (this.user != null) {
            return this.user.role;
        }
        return null;
    }
    isTokeExpire() {
        this.user = this.storageService.getValue(_env__WEBPACK_IMPORTED_MODULE_1__["environment"].tokenKey);
        if (this.user != null && this.user.exp * 1000 > Date.now()) {
            return true;
        }
        return false;
    }
    getStoreId() {
        this.user = this.storageService.getValue(_env__WEBPACK_IMPORTED_MODULE_1__["environment"].tokenKey);
        if (this.user != null) {
            return this.user.storeId;
        }
        return null;
    }
    getName() {
        this.user = this.storageService.getValue(_env__WEBPACK_IMPORTED_MODULE_1__["environment"].tokenKey);
        if (this.user != null) {
            return this.user.name;
        }
        return null;
    }
    getUserName() {
        this.user = this.storageService.getValue(_env__WEBPACK_IMPORTED_MODULE_1__["environment"].tokenKey);
        if (this.user != null) {
            return this.user.sub;
        }
        return null;
    }
    getImage() {
        this.user = this.storageService.getValue(_env__WEBPACK_IMPORTED_MODULE_1__["environment"].tokenKey);
        if (this.user != null) {
            return this.user.image;
        }
        return null;
    }
    getAccountId() {
        this.user = this.storageService.getValue(_env__WEBPACK_IMPORTED_MODULE_1__["environment"].tokenKey);
        if (this.user != null) {
            return this.user.accountId;
        }
        return null;
    }
}
UtilitiesService.ɵfac = function UtilitiesService_Factory(t) { return new (t || UtilitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"])); };
UtilitiesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilitiesService, factory: UtilitiesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilitiesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_signalr_signalr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/signalr/signalr.service */ "N06n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(signalrService) {
        this.signalrService = signalrService;
    }
    ngOnInit() {
        this.signalrService.buildChatConnection();
        this.signalrService.buildNotifyConnection();
        this.signalrService.startNotifyConnection();
        this.signalrService.startChatConnection();
        this.signalrService.addNotifyDataListener();
        this.signalrService.addReceiveMessageDataListener();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_signalr_signalr_service__WEBPACK_IMPORTED_MODULE_1__["SignalrService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _core_services_signalr_signalr_service__WEBPACK_IMPORTED_MODULE_1__["SignalrService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @layout/auth-layout/auth-layout.component */ "pImN");
/* harmony import */ var _app_app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/app.routing */ "beVS");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _core_jwt_jwt_options_factory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/jwt/jwt-options-factory */ "3CWZ");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var _core_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/services/utilities/utilities.service */ "R2Cy");





















const ngZorroConfig = {
    message: {
        nzDuration: 3000
    }
};
Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["en_US"] },
        { provide: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__["NZ_CONFIG"], useValue: ngZorroConfig },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__["NzLayoutModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_app_routing__WEBPACK_IMPORTED_MODULE_9__["routes"]),
            // jwt
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JwtModule"].forRoot({
                jwtOptionsProvider: {
                    provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JWT_OPTIONS"],
                    useFactory: _core_jwt_jwt_options_factory__WEBPACK_IMPORTED_MODULE_14__["jwtOptionsFactory"],
                    deps: [_core_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_16__["UtilitiesService"]]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__["AuthLayoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__["NzLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JwtModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__["AuthLayoutComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
                    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__["NzLayoutModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_app_routing__WEBPACK_IMPORTED_MODULE_9__["routes"]),
                    // jwt
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JwtModule"].forRoot({
                        jwtOptionsProvider: {
                            provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JWT_OPTIONS"],
                            useFactory: _core_jwt_jwt_options_factory__WEBPACK_IMPORTED_MODULE_14__["jwtOptionsFactory"],
                            deps: [_core_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_16__["UtilitiesService"]]
                        }
                    })
                ],
                providers: [
                    { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["en_US"] },
                    { provide: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__["NZ_CONFIG"], useValue: ngZorroConfig },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @layout/auth-layout/auth-layout.component */ "pImN");

const routes = [
    {
        path: 'admin',
        loadChildren: () => Promise.all(/*! import() | modules-main-main-module */[__webpack_require__.e("default~modules-auth-auth-module~modules-main-main-module"), __webpack_require__.e("modules-main-main-module")]).then(__webpack_require__.bind(null, /*! ./modules/main/main.module */ "ebwL")).then((m) => m.MainModule),
    },
    {
        path: 'auth',
        component: _layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__["AuthLayoutComponent"],
        loadChildren: () => Promise.all(/*! import() | modules-auth-auth-module */[__webpack_require__.e("default~blog-blog-module~brand-brand-module~category-category-module~color-color-module~complain-com~6f082898"), __webpack_require__.e("default~modules-auth-auth-module~modules-main-main-module"), __webpack_require__.e("common"), __webpack_require__.e("modules-auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./modules/auth/auth.module */ "305l")).then((m) => m.AuthModule),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/admin/dashboard',
    },
    { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];


/***/ }),

/***/ "pImN":
/*!*************************************************************!*\
  !*** ./src/app/layout/auth-layout/auth-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  height: 100%;\r\n}\r\n@media (min-width: 1200px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 1140px;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 1140px;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 1140px;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 1140px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJhdXRoLWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDExNDBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTE0MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDExNDBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-layout',
                templateUrl: './auth-layout.component.html',
                styleUrls: ['./auth-layout.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "rtiL":
/*!**********************************************************!*\
  !*** ./src/app/core/services/storage/storage.service.ts ***!
  \**********************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StorageService {
    constructor() {
        this.storage = window.localStorage;
    }
    set(key, value) {
        this.storage[key] = value;
    }
    get(key) {
        return this.storage[key] || false;
    }
    setObject(key, value) {
        if (!value) {
            return;
        }
        this.storage[key] = JSON.stringify(value);
    }
    getObject(key) {
        return JSON.parse(this.storage[key] || '{}');
    }
    getValue(key) {
        const obj = JSON.parse(this.storage[key] || null);
        return obj || null;
    }
    remove(key) {
        this.storage.removeItem(key);
    }
    clear() {
        this.storage.clear();
    }
    get length() {
        return this.storage.length;
    }
    get isStorageEmpty() {
        return this.length == 0;
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map