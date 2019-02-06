(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.css":
/*!*************************!*\
  !*** ./src/app/app.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.html":
/*!**************************!*\
  !*** ./src/app/app.html ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/app */ "./src/app/app.ts");
/* harmony import */ var _pages_home_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/home/home */ "./src/pages/home/home.ts");
/* harmony import */ var _pages_project_project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/project/project */ "./src/pages/project/project.ts");
/* harmony import */ var _pages_unit_unit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/unit/unit */ "./src/pages/unit/unit.ts");
/* harmony import */ var _pages_about_about__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/about/about */ "./src/pages/about/about.ts");
/* harmony import */ var _pages_sign_in_sign_in__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../pages/sign-in/sign-in */ "./src/pages/sign-in/sign-in.ts");
/* harmony import */ var _pages_floorplans_floorplans__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/floorplans/floorplans */ "./src/pages/floorplans/floorplans.ts");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/footer/footer */ "./src/components/footer/footer.ts");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../components/header/header */ "./src/components/header/header.ts");
/* harmony import */ var _components_image_modal_image_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../components/image-modal/image-modal */ "./src/components/image-modal/image-modal.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../core/auth-guard */ "./src/core/auth-guard.ts");
/* harmony import */ var _core_token_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../core/token-interceptor */ "./src/core/token-interceptor.ts");
/* harmony import */ var _pipe_truncatepipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../pipe/truncatepipe */ "./src/pipe/truncatepipe.ts");
/* harmony import */ var _providers_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../providers/auth */ "./src/providers/auth.ts");
/* harmony import */ var _providers_unit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../providers/unit */ "./src/providers/unit.ts");
/* harmony import */ var _providers_project__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../providers/project */ "./src/providers/project.ts");
/* harmony import */ var _providers_sales_agent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../providers/sales-agent */ "./src/providers/sales-agent.ts");
/* harmony import */ var _providers_floorplan__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./../providers/floorplan */ "./src/providers/floorplan.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_app__WEBPACK_IMPORTED_MODULE_5__["Industriradhus"],
                _pages_home_home__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                _pages_about_about__WEBPACK_IMPORTED_MODULE_9__["AboutPage"],
                _pages_project_project__WEBPACK_IMPORTED_MODULE_7__["ProjectPage"],
                _pages_unit_unit__WEBPACK_IMPORTED_MODULE_8__["UnitPage"],
                _pages_sign_in_sign_in__WEBPACK_IMPORTED_MODULE_10__["SignInPage"],
                _pages_floorplans_floorplans__WEBPACK_IMPORTED_MODULE_11__["FloorplansPage"],
                _components_header_header__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _components_footer_footer__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _components_image_modal_image_modal__WEBPACK_IMPORTED_MODULE_14__["ImageModalComponent"],
                _pipe_truncatepipe__WEBPACK_IMPORTED_MODULE_17__["TruncatePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["SocialLoginModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'sign-in', component: _pages_sign_in_sign_in__WEBPACK_IMPORTED_MODULE_10__["SignInPage"] },
                    { path: 'start', component: _pages_home_home__WEBPACK_IMPORTED_MODULE_6__["HomePage"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuardService"]] },
                    { path: 'kontakt', component: _pages_about_about__WEBPACK_IMPORTED_MODULE_9__["AboutPage"] },
                    { path: 'losningar', component: _pages_floorplans_floorplans__WEBPACK_IMPORTED_MODULE_11__["FloorplansPage"] },
                    { path: 'projekt/:id', component: _pages_project_project__WEBPACK_IMPORTED_MODULE_7__["ProjectPage"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuardService"]] },
                    { path: 'enhet/:id', component: _pages_unit_unit__WEBPACK_IMPORTED_MODULE_8__["UnitPage"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuardService"]] },
                    { path: '', redirectTo: 'start', pathMatch: 'full' },
                    { path: '**', redirectTo: 'start', pathMatch: 'full' }
                ])
            ],
            providers: [
                _providers_project__WEBPACK_IMPORTED_MODULE_20__["ProjectProvider"],
                _providers_unit__WEBPACK_IMPORTED_MODULE_19__["UnitProvider"],
                _providers_floorplan__WEBPACK_IMPORTED_MODULE_22__["FloorplanProvider"],
                _providers_sales_agent__WEBPACK_IMPORTED_MODULE_21__["SalesAgentProvider"],
                _providers_auth__WEBPACK_IMPORTED_MODULE_18__["AuthProvider"],
                _core_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuardService"],
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthServiceConfig"],
                    useFactory: _providers_auth__WEBPACK_IMPORTED_MODULE_18__["getAuthConfig"]
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
                    useClass: _core_token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
                    useClass: _core_token_interceptor__WEBPACK_IMPORTED_MODULE_16__["SignInInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_app__WEBPACK_IMPORTED_MODULE_5__["Industriradhus"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/*! exports provided: Industriradhus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Industriradhus", function() { return Industriradhus; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/auth */ "./src/providers/auth.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Industriradhus = /** @class */ (function () {
    function Industriradhus(router, authProvider) {
        this.router = router;
        this.authProvider = authProvider;
        this.authProvider.initilize();
    }
    Industriradhus.prototype.ngOnInit = function () {
    };
    Industriradhus = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.html */ "./src/app/app.html"),
            styles: [__webpack_require__(/*! ./app.css */ "./src/app/app.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _providers_auth__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"]])
    ], Industriradhus);
    return Industriradhus;
}());



/***/ }),

/***/ "./src/components/footer/footer.css":
/*!******************************************!*\
  !*** ./src/components/footer/footer.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\n    background-color: rgb(104, 103, 103);\n    color: gainsboro;\n}\n\n.footer a, a:hover {\n    color: gainsboro;\n}"

/***/ }),

/***/ "./src/components/footer/footer.html":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<br><br><br>\n<footer class=\"footer font-small stylish-color-dark pt-4 mt-4\">\n\n  <!-- Footer Links -->\n  <div class=\"container text-center text-md-left\">\n\n    <!-- Grid row -->\n    <div class=\"row\">\n\n      <!-- Grid column -->\n      <div class=\"col-12 text-center\">\n         <!-- Links -->\n         <img src=\"../../assets/img/footer-logo.png\" width=\"300px\" />\n         <br><br>\n         <ul class=\"footer-links list-unstyled\">\n           <li>\n             <a [routerLink]=\"['/kontakt']\">om oss / kontakt</a>\n           </li>\n         </ul>\n        \n\n      </div>\n      <!-- Grid column -->\n\n    </div>\n    <!-- Grid row -->\n\n  </div>\n  <!-- Footer Links -->\n  <br>\n</footer>\n<!-- Footer -->"

/***/ }),

/***/ "./src/components/footer/footer.ts":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.ts ***!
  \*****************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.html */ "./src/components/footer/footer.html"),
            styles: [__webpack_require__(/*! ./footer.css */ "./src/components/footer/footer.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/components/header/header.css":
/*!******************************************!*\
  !*** ./src/components/header/header.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    background-color: white;\n    border-bottom-left-radius: .25rem;\n    border-bottom-right-radius: .25rem;\n    border: 1px solid rgba(0,0,0,.125);\n    border-top: none;\n    margin-top: 0px;\n}\n\n.photo {\n    border-radius: 50%;\n    width: 40px;\n}"

/***/ }),

/***/ "./src/components/header/header.html":
/*!*******************************************!*\
  !*** ./src/components/header/header.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg\">\n  <div class=\"container\">\n    <span class=\"navbar-brand\">\n      <img src=\"../../assets/img/header-logo.png\" width=\"160px\" (click)=\"navigateHome()\" style=\"cursor: pointer;\">\n    </span>\n \n      <div class=\"dropdown pull-right\" *ngIf=\"authProvider.isAuthenticated()\">\n          <button class=\"btn btn-outline-success dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <img class=\"photo\" [src]=\"getPhotoUrl()\" />\n            {{ getName() }}\n          </button>\n          <div class=\"dropdown-menu dropdown-menu-right text-center\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" href=\"#\" (click)=\"signOut()\">Logga ut</a>\n          </div>\n        </div>\n  </div>\n</nav>\n<br>"

/***/ }),

/***/ "./src/components/header/header.ts":
/*!*****************************************!*\
  !*** ./src/components/header/header.ts ***!
  \*****************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/auth */ "./src/providers/auth.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authProvider, router) {
        this.authProvider = authProvider;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.signOut = function () {
        var _this = this;
        this.authProvider.signOut().then(function () { return _this.router.navigate(["sign-in"]); });
    };
    HeaderComponent.prototype.navigateHome = function () {
        this.router.navigate(["home"]);
    };
    HeaderComponent.prototype.getName = function () {
        if (this.authProvider.isAuthenticated()) {
            return this.authProvider.currentUser.name;
        }
        return "";
    };
    HeaderComponent.prototype.getPhotoUrl = function () {
        if (this.authProvider.isAuthenticated()) {
            return this.authProvider.currentUser.photoUrl;
        }
        return "";
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.html */ "./src/components/header/header.html"),
            styles: [__webpack_require__(/*! ./header.css */ "./src/components/header/header.css")]
        }),
        __metadata("design:paramtypes", [_providers_auth__WEBPACK_IMPORTED_MODULE_1__["AuthProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/components/image-modal/image-modal.css":
/*!****************************************************!*\
  !*** ./src/components/image-modal/image-modal.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-lg {\n    max-width: 1400px;\n}"

/***/ }),

/***/ "./src/components/image-modal/image-modal.html":
/*!*****************************************************!*\
  !*** ./src/components/image-modal/image-modal.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"{{ id }}\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{ title }}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <!-- Images -->\n        <div id=\"{{ 'modal-carousel-images-' + id }}\" class=\"carousel\" data-interval=\"false\">\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item\" *ngFor=\"let img of images; let isFirst = first\" [class.active]=\"isFirst\">\n              <img class=\"d-block w-100\" src=\"{{'../../assets/img/' + img.name }}\" alt=\"\">\n            </div>\n          </div>\n\n        </div>\n        <div class=\"text-center\" style=\"padding: 5px;\">\n            <a class=\"btn btn-outline-secondary btn-round\" href=\"{{ '#modal-carousel-images-' + id }}\" role=\"button\" data-slide=\"prev\" style=\"margin-right: 5px;\"><span class=\"fa fa-chevron-left\"></span></a>\n            <a class=\"btn btn-outline-secondary btn-round\" href=\"{{ '#modal-carousel-images-' + id }}\" role=\"button\" data-slide=\"next\"><span class=\"fa fa-chevron-right\"></span></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/components/image-modal/image-modal.ts":
/*!***************************************************!*\
  !*** ./src/components/image-modal/image-modal.ts ***!
  \***************************************************/
/*! exports provided: ImageModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModalComponent", function() { return ImageModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageModalComponent = /** @class */ (function () {
    function ImageModalComponent() {
        this.title = "";
    }
    ImageModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImageModalComponent.prototype, "images", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImageModalComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImageModalComponent.prototype, "title", void 0);
    ImageModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-modal',
            template: __webpack_require__(/*! ./image-modal.html */ "./src/components/image-modal/image-modal.html"),
            styles: [__webpack_require__(/*! ./image-modal.css */ "./src/components/image-modal/image-modal.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageModalComponent);
    return ImageModalComponent;
}());



/***/ }),

/***/ "./src/core/auth-guard.ts":
/*!********************************!*\
  !*** ./src/core/auth-guard.ts ***!
  \********************************/
/*! exports provided: AccessGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessGuardService", function() { return AccessGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/auth */ "./src/providers/auth.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccessGuardService = /** @class */ (function () {
    function AccessGuardService(authProvider, router) {
        this.authProvider = authProvider;
        this.router = router;
    }
    AccessGuardService.prototype.canActivate = function (route) {
        var authenticated = this.authProvider.isAuthenticated();
        var authorized = this.authProvider.isAuthorized();
        if (authenticated && authorized) {
            return true;
        }
        else {
            this.router.navigate(['sign-in']);
            return false;
        }
    };
    AccessGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_providers_auth__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AccessGuardService);
    return AccessGuardService;
}());



/***/ }),

/***/ "./src/core/token-interceptor.ts":
/*!***************************************!*\
  !*** ./src/core/token-interceptor.ts ***!
  \***************************************/
/*! exports provided: TokenInterceptor, SignInInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInInterceptor", function() { return SignInInterceptor; });
/* harmony import */ var _providers_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../providers/auth */ "./src/providers/auth.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(authProvider) {
        this.authProvider = authProvider;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        if (this.authProvider.currentUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + this.authProvider.currentUser["jwt"]
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_providers_auth__WEBPACK_IMPORTED_MODULE_0__["AuthProvider"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());

var SignInInterceptor = /** @class */ (function () {
    function SignInInterceptor(authProvider, router) {
        this.authProvider = authProvider;
        this.router = router;
    }
    SignInInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).do(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigate(["sign-in"]);
                }
            }
        });
    };
    SignInInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_providers_auth__WEBPACK_IMPORTED_MODULE_0__["AuthProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignInInterceptor);
    return SignInInterceptor;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiBaseUrl: 'http://localhost:1337/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/pages/about/about.css":
/*!***********************************!*\
  !*** ./src/pages/about/about.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    margin-bottom: 20px;\n}\n\n.max-height {\n    height: calc(100% - 20px);\n}"

/***/ }),

/***/ "./src/pages/about/about.html":
/*!************************************!*\
  !*** ./src/pages/about/about.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"min-height: 100%;\">\n  <app-header></app-header>\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n      <div class=\"card max-height\">\n\n        <div class=\"card-body\">\n          <h3>Nordiska Industriradhus AB<br>\n            <small class=\"text-muted\">Vi är en projektutvecklare av industriradhus.</small>\n          </h3>\n          <br>\n          <p>\n            Vårt verksamheten är fokuserad på nyproduktion av industriradhus på etablerade industriområden i norra Sverige.\n          </p>\n          <p>\n            Vårt arbete ska bidra till att skapa väl fungerande industrikluster för dagens och morgondagens företagare. Med hållbart\n            samhällsbyggande avser vi stärka de orter vi investerar i.\n          </p>\n          <br>\n          <h3>Pågående projekt</h3>\n          <div class=\"row\">\n          <div class=\"card\" *ngFor=\"let project of projects\" style=\"margin-bottom: 20px; width: 11rem; margin:10px;\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">{{ project.city }}</h5>\n                <h6 class=\"card-subtitle mb-2 text-muted\">{{ project.name }}</h6>\n                <hr>\n                <p class=\"card-text\">\n                  <b>Försäljningsstart</b>\n                  <br>{{ project.salesLaunch }}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n        <div class=\"card\" *ngIf=\"contact\">\n            <img class=\"card-img-top\" src=\"{{ '../assets/img/' + contact.photo.name }}\" alt=\"Kontaktperson\">\n    \n            <div class=\"card-body\" align=\"center\">\n    \n              <p class=\"card-text\"><b>{{ contact.name }}</b></p>\n              <p class=\"card-text\">{{ contact.phone }}</p>\n              <p class=\"card-text\"><a href=\"{{ 'mailto:' + contact.email }}\">{{ contact.email | truncate}}</a></p>\n            </div>\n          </div>\n    </div>\n  </div>c\n</div>\n<br><br><br><br><br><br>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/pages/about/about.ts":
/*!**********************************!*\
  !*** ./src/pages/about/about.ts ***!
  \**********************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var _providers_sales_agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../providers/sales-agent */ "./src/providers/sales-agent.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/project */ "./src/providers/project.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(salesAgentProvider, projectProvider) {
        var _this = this;
        this.salesAgentProvider = salesAgentProvider;
        this.projectProvider = projectProvider;
        this.salesAgentProvider.getSalesAgent("jorgen").subscribe(function (salesAgent) {
            _this.contact = salesAgent;
        });
        this.projectProvider.getProjects().subscribe(function (projects) {
            _this.projects = projects;
        });
    }
    AboutPage.prototype.ngOnInit = function () {
    };
    AboutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.html */ "./src/pages/about/about.html"),
            styles: [__webpack_require__(/*! ./about.css */ "./src/pages/about/about.css")]
        }),
        __metadata("design:paramtypes", [_providers_sales_agent__WEBPACK_IMPORTED_MODULE_0__["SalesAgentProvider"],
            _providers_project__WEBPACK_IMPORTED_MODULE_2__["ProjectProvider"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ }),

/***/ "./src/pages/floorplans/floorplans.css":
/*!*********************************************!*\
  !*** ./src/pages/floorplans/floorplans.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    margin-bottom: 20px;\n}\n\n.max-height {\n    height: calc(100% - 20px);\n}\n\n.nav-link {\n    border-bottom: 2px solid white;\n    text-transform: uppercase;\n}\n\n.nav-link.active {\n    border-bottom: 2px solid green;\n}"

/***/ }),

/***/ "./src/pages/floorplans/floorplans.html":
/*!**********************************************!*\
  !*** ./src/pages/floorplans/floorplans.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-header></app-header>\n  <div class=\"row\" *ngIf=\"floorplans\">\n    <div class=\"col-md-12\">\n      <div class=\"card max-height\">\n\n        <div class=\"card-body\">\n          <div class=\"card-title\">\n            <h1>Flexibla lösningar</h1>\n          </div>\n          <ul class=\"nav justify-content-center\" id=\"tabs\" role=\"tablist\">\n            <li class=\"nav-item\" *ngFor=\"let floorplan of floorplans; let isFirst = first\">\n              <a class=\"nav-link\" [class.active]=\"isFirst\" id=\"{{ floorplan.key + '-tab' }}\" data-toggle=\"tab\" href=\"{{ '#' + floorplan.key }}\"\n                role=\"tab\">{{ floorplan.name }}</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class=\"tab-content\" id=\"tab-content\">\n    <div class=\"tab-pane fade show\" id=\"{{ floorplan.key }}\" role=\"tabpanel\" *ngFor=\"let floorplan of floorplans; let isFirst = first\"\n      [class.active]=\"isFirst\">\n      <div class=\"row\">\n        <div class=\"col-md-9\">\n          <div class=\"card max-height\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{ floorplan.name }}</h5>\n              <hr>\n\n              <div id=\"{{ 'carousel-images-' + floorplan.key }}\" class=\"carousel\" data-interval=\"false\" style=\"margin: 30px -20px 0px -20px;\">\n                <div class=\"carousel-inner\">\n                  <div class=\"carousel-item\" *ngFor=\"let img of floorplan.images; let isFirst = first\" [class.active]=\"isFirst\">\n                    <img class=\"d-block w-100\" src=\"{{ '../../assets/img/' + img.name }}\" alt=\"\" data-toggle=\"modal\" [attr.data-target]=\"'#modal-images-' + floorplan.key\">                    \n                  </div>\n                </div>\n                <a class=\"carousel-control-prev\" href=\"{{ '#carousel-images-' + floorplan.key }}\" role=\"button\" data-slide=\"prev\">\n                  <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n                <a class=\"carousel-control-next\" href=\"{{ '#carousel-images-' + floorplan.key }}\" role=\"button\" data-slide=\"next\">\n                  <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card max-height\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Fakta</h5>\n              <hr>\n              <p class=\"card-text\" *ngFor=\"let feature of floorplan.features\">\n                <b>{{ feature.name }}</b>\n                <br>{{ feature.value }}\n              </p>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n<app-image-modal *ngFor=\"let floorplan of floorplans\" [images]=\"floorplan.images\" [id]=\"'modal-images-' + floorplan.key\" [title]=\"floorplan.name\"></app-image-modal>"

/***/ }),

/***/ "./src/pages/floorplans/floorplans.ts":
/*!********************************************!*\
  !*** ./src/pages/floorplans/floorplans.ts ***!
  \********************************************/
/*! exports provided: FloorplansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorplansPage", function() { return FloorplansPage; });
/* harmony import */ var _providers_floorplan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../providers/floorplan */ "./src/providers/floorplan.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FloorplansPage = /** @class */ (function () {
    function FloorplansPage(floorplanProvider) {
        var _this = this;
        this.floorplanProvider = floorplanProvider;
        this.floorplanProvider.getFloorplans().subscribe(function (floorplans) {
            _this.floorplans = floorplans;
        });
    }
    FloorplansPage.prototype.ngOnInit = function () {
    };
    FloorplansPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-floorplans',
            template: __webpack_require__(/*! ./floorplans.html */ "./src/pages/floorplans/floorplans.html"),
            styles: [__webpack_require__(/*! ./floorplans.css */ "./src/pages/floorplans/floorplans.css")]
        }),
        __metadata("design:paramtypes", [_providers_floorplan__WEBPACK_IMPORTED_MODULE_0__["FloorplanProvider"]])
    ], FloorplansPage);
    return FloorplansPage;
}());



/***/ }),

/***/ "./src/pages/home/home.css":
/*!*********************************!*\
  !*** ./src/pages/home/home.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    margin-bottom: 20px;\n}\n\n.max-height {\n    height: calc(100% - 20px);\n}"

/***/ }),

/***/ "./src/pages/home/home.html":
/*!**********************************!*\
  !*** ./src/pages/home/home.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-header></app-header>\n  <div class=\"row\">\n    <div class=\"col-md-12\" *ngFor=\"let project of projects\">\n      <div class=\"card\" *ngIf=\"project.active\" style=\"margin-bottom: 20px;\">\n        <img src=\"{{ '../../assets/img/' + project.images[0].name }}\" class=\"card-img-top\">\n        <div class=\"card-body\">\n          <h3 class=\"card-title\">{{ project.name }}</h3>\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{ project.city }}</h6>\n          <hr>\n          <p class=\"card-text\">\n            <b>Försäljningsstart</b>\n            <br>{{ project.salesLaunch }}</p>\n          <a *ngIf=\"project.active\" [routerLink]=\"['/projekt', project.key]\" class=\"btn btn-outline-success\">Läs mer...</a>\n          <a *ngIf=\"!project.active\" [routerLink]=\"['/kontakt']\" class=\"btn btn-outline-success\">Kontakt...</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"card max-height\">\n\n        <div class=\"card-body\">\n          <h3>Vad är industriradhus?</h3>\n          <p>\n            Industriradhus är en ny typ av lösning för små och medelstora företag som vill äga sina egna lokaler men som på egen hand\n            inte vill investera i uppförandet av en industribyggnad. Istället kan ett kluster av företag gå samman och bygga\n            en större lokal med enheter som upplåts som bostadsrätter.\n          </p>\n          <p>\n            Att investera i sin egen lokal ger dig som företagare möjlighet att placera överskott och följa med fastighetsmarknaden samtidigt\n            som man driver sin egen verksamhet. Man sänker också månadskostnaden rejält jämfört med att hyra en liknande\n            lokal.\n          </p>\n          <p>\n            I avgiften ingår fastighetsskötsel och löpande underhåll t ex snöröjning. Föreningen har även fastigheten fullvärdesförsäkrad,\n            vilket innebär att försäkringskostnaden för den enskilde lokalinnehavaren blir lägre. Bostadsrättsföreningen\n            borgar för ett långsiktigt tryggt ägande.\n          </p>\n\n          <h3>Flexibla lösningar</h3>\n          <p>\n            Vi jobbar med ett flexibelt modulsystem där du som företagare kan anpasssa din lokal efter era behov. Ni bestämmer er för\n            hur många fack ni behöver i byggnaden och kan sedan inreda dem som ni vill.\n\n          </p>\n          <p>\n            Vi kan skapa rena lagringsytor, verkstäder med kontorsdel eller butikslokaler. Möjligheterna är många och det är era behov\n            som avgör.\n          </p>\n          <p>\n            <a [routerLink]=\"['/losningar']\" class=\"btn btn-outline-success\">Läs mer...</a>\n          </p>\n          <img src=\"../../assets/img/flexibla-losningar.png\" width=\"100%\" />\n\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h4>Kommande projekt</h4>\n          <div *ngFor=\"let project of projects\">\n            <div *ngIf=\"!project.active\" style=\"margin-bottom: 20px;\">\n              <h5>{{ project.name }}</h5>\n              <h6 class=\"mb-2 text-muted\">{{ project.city }}</h6>\n              <hr>\n              <p>\n                <b>Försäljningsstart</b>\n                <br>{{ project.salesLaunch }}</p>\n              <a *ngIf=\"project.active\" [routerLink]=\"['/projekt', project.key]\" class=\"btn btn-outline-success\">Läs mer...</a>\n              <a *ngIf=\"!project.active\" [routerLink]=\"['/kontakt']\" class=\"btn btn-outline-success\">Kontakt...</a>\n            </div>\n            <br>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/pages/home/home.ts":
/*!********************************!*\
  !*** ./src/pages/home/home.ts ***!
  \********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/project */ "./src/providers/project.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(projectProvider) {
        var _this = this;
        this.projectProvider = projectProvider;
        this.projectProvider.getProjects().subscribe(function (projects) {
            _this.projects = projects;
        });
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.html */ "./src/pages/home/home.html"),
            styles: [__webpack_require__(/*! ./home.css */ "./src/pages/home/home.css")]
        }),
        __metadata("design:paramtypes", [_providers_project__WEBPACK_IMPORTED_MODULE_1__["ProjectProvider"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/pages/project/project.css":
/*!***************************************!*\
  !*** ./src/pages/project/project.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    margin-bottom: 20px;\n}\n\n.max-height {\n    height: calc(100% - 20px);\n}\n\n.sold {\n    text-decoration: line-through;\n    background-color: rgb(241, 241, 241);\n}"

/***/ }),

/***/ "./src/pages/project/project.html":
/*!****************************************!*\
  !*** ./src/pages/project/project.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"project\">\n  <app-header></app-header>\n\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n  \n          <div id=\"carousel-images\" class=\"carousel\" data-interval=\"false\">\n            <div class=\"carousel-inner\">\n              <div class=\"carousel-item\" *ngFor=\"let img of project.images; let isFirst = first\" [class.active]=\"isFirst\">\n                <img class=\"d-block w-100\" src=\"{{'../../assets/img/' + img.name}}\" data-toggle=\"modal\" [attr.data-target]=\"'#modal-images-' + project.key\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"text-center\" style=\"padding: 5px;\">\n              <a class=\"btn btn-outline-secondary btn-round\" href=\"#carousel-images\" role=\"button\" data-slide=\"prev\" style=\"margin-right: 5px;\"><span class=\"fa fa-chevron-left\"></span></a>\n              <a class=\"btn btn-outline-secondary btn-round\" href=\"#carousel-images\" role=\"button\" data-slide=\"next\"><span class=\"fa fa-chevron-right\"></span></a>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"card max-height\">\n        <div class=\"card-body\">\n          <h1 class=\"card-title\">{{ project.name }}</h1>\n          <span [innerHtml]=\"project.description\"></span>\n          <a class=\"btn btn-outline-success\" [routerLink]=\"['/kontakt']\">Kontakt...</a>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card max-height\">\n        <div class=\"card-body\">\n          <p class=\"card-text\" *ngFor=\"let info of project.summary\">\n            <b>{{ info.name }}</b>\n            <br>{{ info.value }}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"units\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h3>Till salu</h3>\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th scope=\"col\"></th>\n                <th scope=\"col\">kvm</th>\n                <th scope=\"col\">pris</th>\n                <th scope=\"col\">avgift</th>\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor='let unit of units' [ngClass]=\"{'sold':unit.sold}\">\n                <th><a [routerLink]=\"['/enhet', unit.key]\" [ngClass]=\"{'disabled':unit.sold}\">{{ unit.name }}</a></th>\n                <td> {{ unit.size }}</td>\n                <td>{{ unit.price | currency:'SEK':'':'1.0-0' }} kr</td>\n                <td>{{ unit.rent | currency:'SEK':'':'1.0-0' }} kr/mån</td>\n                <td><span class=\"text-danger\" *ngIf='unit.sold'>SÅLD</span></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  \n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702.582084811809!2d21.02675231660073!3d64.7415872728741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjTCsDQ0JzI5LjciTiAyMcKwMDEnNDQuMiJF!5e0!3m2!1ssv!2sse!4v1527750055465\"\n          height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n\n<app-image-modal [images]=\"project.images\" [id]=\"'modal-images-' + project.key\" [title]=\"project.name\" *ngIf=\"project\"></app-image-modal>"

/***/ }),

/***/ "./src/pages/project/project.ts":
/*!**************************************!*\
  !*** ./src/pages/project/project.ts ***!
  \**************************************/
/*! exports provided: ProjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPage", function() { return ProjectPage; });
/* harmony import */ var _providers_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../providers/project */ "./src/providers/project.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectPage = /** @class */ (function () {
    function ProjectPage(route, projectProvider) {
        this.route = route;
        this.projectProvider = projectProvider;
    }
    ProjectPage.prototype.ngOnInit = function () {
        var _this = this;
        var projectKey = this.route.snapshot.paramMap.get("id");
        this.projectProvider.getProject(projectKey).subscribe(function (project) {
            _this.project = project;
        });
        this.projectProvider.getUnits(projectKey).subscribe(function (units) {
            _this.units = units;
        });
    };
    ProjectPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.html */ "./src/pages/project/project.html"),
            styles: [__webpack_require__(/*! ./project.css */ "./src/pages/project/project.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _providers_project__WEBPACK_IMPORTED_MODULE_0__["ProjectProvider"]])
    ], ProjectPage);
    return ProjectPage;
}());



/***/ }),

/***/ "./src/pages/sign-in/sign-in.css":
/*!***************************************!*\
  !*** ./src/pages/sign-in/sign-in.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".google {\n    background: #c32f10; \n    color: white;\n    min-width: 160px;\n    margin: 10px;\n}\n\n.facebook {\n    background: #3b5998; \n    color: white;\n    min-width: 160px;\n    margin: 10px;\n}"

/***/ }),

/***/ "./src/pages/sign-in/sign-in.html":
/*!****************************************!*\
  !*** ./src/pages/sign-in/sign-in.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 100px; max-width: 600px;\">\n\n  <div class=\"card\">\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col text-center\">\n              <img src=\"../../assets/img/sign-in-logo.png\" style=\"width: 100%; max-width: 300px;\">\n              <br><br><br>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12 text-center\">\n              <p class=\"lead text-muted\">Logga in med</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-4 text-center\">\n              <button class=\"btn btn-lg facebook\" (click)=\"signInWithFacebook()\">\n                <span class=\"fab fa-facebook-f fa-lg\"></span>\n                <span style=\"margin-left: 20px;\">Facebook</span>\n        \n              </button>\n        \n            </div>\n            <div class=\"col-md-4 text-center\">\n              <button class=\"btn btn-lg google\" (click)=\"signInWithGoogle()\">\n                <span class=\"fab fa-google fa-lg \"></span>\n                <span style=\"margin-left: 20px; \">Google</span>\n              </button>\n            </div>\n            <div class=\"col-md-2\"></div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col text-center\">\n              <br><br>\n              <a [routerLink]=\"['/kontakt']\">om oss / kontakt</a>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"message\">\n            <div class=\"col text-center\">\n                <br>\n              <p class=\"text-danger\" style=\"margin: 30px;\">\n                {{ message }}\n              </p>\n            </div>\n          </div>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/pages/sign-in/sign-in.ts":
/*!**************************************!*\
  !*** ./src/pages/sign-in/sign-in.ts ***!
  \**************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var _providers_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../providers/auth */ "./src/providers/auth.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInPage = /** @class */ (function () {
    function SignInPage(authProvider, router) {
        this.authProvider = authProvider;
        this.router = router;
    }
    SignInPage.prototype.ngOnInit = function () {
        console.log("SignInPage onInit");
    };
    SignInPage.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authProvider.signInWithGoogle().then(function (user) {
            if (_this.authProvider.isAuthorized()) {
                _this.router.navigate(["home"]);
            }
            else {
                console.log("signInWithGoogle faild");
                _this.authProvider.signOut();
                _this.message = "Sorry. Du har inga rättighet";
            }
        });
    };
    SignInPage.prototype.signInWithFacebook = function () {
        var _this = this;
        this.authProvider.signInWithFacebook().then(function (user) {
            if (_this.authProvider.isAuthorized()) {
                _this.router.navigate(["home"]);
            }
            else {
                _this.authProvider.signOut();
                _this.message = "Sorry. Du har inga rättigheter";
            }
        });
    };
    SignInPage.prototype.navToAbout = function () {
        this.router.navigate(["about"]);
    };
    SignInPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.html */ "./src/pages/sign-in/sign-in.html"),
            styles: [__webpack_require__(/*! ./sign-in.css */ "./src/pages/sign-in/sign-in.css")]
        }),
        __metadata("design:paramtypes", [_providers_auth__WEBPACK_IMPORTED_MODULE_0__["AuthProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignInPage);
    return SignInPage;
}());



/***/ }),

/***/ "./src/pages/unit/unit.css":
/*!*********************************!*\
  !*** ./src/pages/unit/unit.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    margin-bottom: 20px;\n}\n.sold {\n    color: red;\n}\n"

/***/ }),

/***/ "./src/pages/unit/unit.html":
/*!**********************************!*\
  !*** ./src/pages/unit/unit.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"unit && project\">\n  <app-header></app-header>\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n              <h1 class=\"card-title\">{{ unit.name }}</h1>\n              <a *ngIf=\"project\" [routerLink]=\"['/projekt', project.key]\"><h5 class=\"card-title\">{{ project.name }}</h5></a>\n              <p [innerHtml]=\"unit.description\"></p>\n              <h5 *ngIf=\"unit.sold\" class=\"sold pull-right\">SÅLD</h5>\n          </div>\n            <div id=\"carousel-images\" class=\"carousel\" data-interval=\"false\">\n              <div class=\"carousel-inner\">\n                <div class=\"carousel-item\" *ngFor=\"let img of unit.images; let isFirst = first\" [class.active]=\"isFirst\">\n                  <img class=\"d-block w-100\" src=\"{{'../../assets/img/' + img.name }}\" alt=\"\" data-toggle=\"modal\" [attr.data-target]=\"'#modal-images-' + unit.key\">\n                </div>\n              </div>\n            </div>\n            <div class=\"text-center\" style=\"padding: 5px;\">\n                <a class=\"btn btn-outline-secondary btn-round\" href=\"#carousel-images\" role=\"button\" data-slide=\"prev\" style=\"margin-right: 5px;\"><span class=\"fa fa-chevron-left\"></span></a>\n                <a class=\"btn btn-outline-secondary btn-round\" href=\"#carousel-images\" role=\"button\" data-slide=\"next\"><span class=\"fa fa-chevron-right\"></span></a>\n            </div>\n            <br>\n    \n          </div>\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div *ngFor='let featureCategory of unit.featureCategories'>\n            <h3>{{featureCategory.name}}</h3>\n            <hr>\n            <div class=\"row\">\n              <div class=\"col-md-4\" *ngFor='let feature of featureCategory.features'>\n                <h5>{{ feature.name }}</h5>\n                <p>{{ feature.value }}</p>\n              </div>\n            </div>\n            <br>\n          </div>\n        </div>\n      </div>\n      \n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Faktaruta</h5>\n          <table class=\"table table-borderless table-sm\">\n            <tr>\n              <th>Pris</th>\n              <td>{{ unit.price | currency:'SEK':'':'1.0-0' }} kr</td>\n            </tr>\n            <tr>\n              <th>Avgift</th>\n              <td>{{ unit.rent | currency:'SEK':'':'1.0-0' }} kr</td>\n            </tr>\n            <tr>\n              <th>Storlek</th>\n              <td>{{ unit.size | currency:'SEK':'':'1.0-0' }} kvm</td>\n            </tr>\n\n          </table>\n        </div>\n      </div>\n      <div class=\"card\" *ngIf=\"salesAgent\">\n        <h5 class=\"card-body\">Kontaktperson</h5>\n        <img class=\"card-img-top\" src=\"{{ '../assets/img/' + salesAgent.photo.name }}\" alt=\"Kontaktperson\">\n\n        <div class=\"card-body\" align=\"center\">\n\n          <p class=\"card-text\"><b>{{ salesAgent.name }}</b></p>\n          <p class=\"card-text\">{{ salesAgent.phone }}</p>\n          <p class=\"card-text\"><a href=\"{{ 'mailto:' + salesAgent.email }}\">{{ salesAgent.email | truncate}}</a></p>\n        </div>\n      </div>\n\n      <div class=\"card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Dokument</h5>\n            <ul style=\"list-style-type: none; padding: 0;\">\n              <li><a href=\"../../assets/doc/stadgar-brf.pdf\" target=\"_blank\"><span class=\"far fa-file-pdf\"></span> Stadgar BRF</a></li>\n              <li><a><span class=\"far fa-file-pdf\"></span> Förhandsavtal</a></li>\n            </ul>\n          </div>\n        </div>\n\n    </div>\n  </div>\n\n</div>\n<app-footer></app-footer>\n\n<app-image-modal *ngIf=\"unit && project\" [images]=\"unit.images\" [id]=\"'modal-images-' + unit.key\" [title]=\"unit.name\"></app-image-modal>"

/***/ }),

/***/ "./src/pages/unit/unit.ts":
/*!********************************!*\
  !*** ./src/pages/unit/unit.ts ***!
  \********************************/
/*! exports provided: UnitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitPage", function() { return UnitPage; });
/* harmony import */ var _providers_sales_agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../providers/sales-agent */ "./src/providers/sales-agent.ts");
/* harmony import */ var _providers_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/unit */ "./src/providers/unit.ts");
/* harmony import */ var _providers_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../providers/project */ "./src/providers/project.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UnitPage = /** @class */ (function () {
    function UnitPage(route, unitProvider, salesAgentProvider, projectProvider) {
        var _this = this;
        this.route = route;
        this.unitProvider = unitProvider;
        this.salesAgentProvider = salesAgentProvider;
        this.projectProvider = projectProvider;
        var unitId = this.route.snapshot.paramMap.get("id");
        this.unitProvider.getUnit(unitId).subscribe(function (unit) {
            _this.unit = unit;
            _this.projectProvider.getProject(unit.projectKey).subscribe(function (project) {
                _this.project = project;
            });
            _this.salesAgentProvider.getSalesAgent(unit.salesAgentKey).subscribe(function (salesAgent) {
                _this.salesAgent = salesAgent;
            });
        });
    }
    UnitPage.prototype.ngOnInit = function () { };
    UnitPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-unit',
            template: __webpack_require__(/*! ./unit.html */ "./src/pages/unit/unit.html"),
            styles: [__webpack_require__(/*! ./unit.css */ "./src/pages/unit/unit.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _providers_unit__WEBPACK_IMPORTED_MODULE_1__["UnitProvider"],
            _providers_sales_agent__WEBPACK_IMPORTED_MODULE_0__["SalesAgentProvider"],
            _providers_project__WEBPACK_IMPORTED_MODULE_2__["ProjectProvider"]])
    ], UnitPage);
    return UnitPage;
}());



/***/ }),

/***/ "./src/pipe/truncatepipe.ts":
/*!**********************************!*\
  !*** ./src/pipe/truncatepipe.ts ***!
  \**********************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, limit, completeWords, ellipsis) {
        if (limit === void 0) { limit = 20; }
        if (completeWords === void 0) { completeWords = false; }
        if (ellipsis === void 0) { ellipsis = '...'; }
        if (completeWords) {
            limit = value.substr(0, 13).lastIndexOf(' ');
        }
        return "" + value.substr(0, limit) + ellipsis;
    };
    TruncatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "./src/providers/auth.ts":
/*!*******************************!*\
  !*** ./src/providers/auth.ts ***!
  \*******************************/
/*! exports provided: AuthProvider, getAuthConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthConfig", function() { return getAuthConfig; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"]("289317418030-6ti4l95qesg9s2qnpvm9ohmu5kofntkp.apps.googleusercontent.com")
    },
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"]("247230532636474")
    }
]);
var fbLoginOptions = {
    scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
    return_scopes: true,
    enable_profile_selector: true
}; // https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11
var googleLoginOptions = {
    scope: 'profile email'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig
var AuthProvider = /** @class */ (function () {
    function AuthProvider(authService, httpClient) {
        this.authService = authService;
        this.httpClient = httpClient;
    }
    AuthProvider.prototype.initilize = function () {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    };
    AuthProvider.prototype.signInWithGoogle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, path, jwt, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID, googleLoginOptions)];
                    case 1:
                        _a.currentUser = _b.sent();
                        path = "auth/google?id_token=" + this.currentUser.idToken;
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiBaseUrl + path).toPromise()];
                    case 3:
                        jwt = _b.sent();
                        this.currentUser["jwt"] = jwt;
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _b.sent();
                        if (this.currentUser) {
                            this.currentUser["jwt"] = null;
                        }
                        console.error(err_1);
                        return [3 /*break*/, 5];
                    case 5:
                        localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
                        return [2 /*return*/, this.currentUser];
                }
            });
        });
    };
    AuthProvider.prototype.signInWithFacebook = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, path, jwt, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID, fbLoginOptions)];
                    case 1:
                        _a.currentUser = _b.sent();
                        path = "auth/facebook?access_token=" + this.currentUser.authToken;
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiBaseUrl + path).toPromise()];
                    case 3:
                        jwt = _b.sent();
                        this.currentUser["jwt"] = jwt;
                        return [3 /*break*/, 5];
                    case 4:
                        err_2 = _b.sent();
                        if (this.currentUser) {
                            this.currentUser["jwt"] = null;
                        }
                        console.error(err_2);
                        return [3 /*break*/, 5];
                    case 5:
                        localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
                        return [2 /*return*/, this.currentUser];
                }
            });
        });
    };
    AuthProvider.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        localStorage.removeItem("currentUser");
                        this.currentUser = null;
                        return [4 /*yield*/, this.authService.signOut()];
                    case 1:
                        _a.sent();
                        console.log("Signed out");
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthProvider.prototype.isAuthenticated = function () {
        if (this.currentUser) {
            return true;
        }
        return false;
    };
    AuthProvider.prototype.isAuthorized = function () {
        if (this.currentUser && this.currentUser["jwt"]) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthProvider);
    return AuthProvider;
}());

function getAuthConfig() {
    return config;
}


/***/ }),

/***/ "./src/providers/floorplan.ts":
/*!************************************!*\
  !*** ./src/providers/floorplan.ts ***!
  \************************************/
/*! exports provided: FloorplanProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorplanProvider", function() { return FloorplanProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FloorplanProvider = /** @class */ (function () {
    function FloorplanProvider(_httpClient) {
        this._httpClient = _httpClient;
        this._path = 'floorplans/';
    }
    FloorplanProvider.prototype.getFloorplans = function () {
        return this._httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + this._path);
    };
    FloorplanProvider.prototype.getFloorplan = function (key) {
        return this._httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + this._path + key);
    };
    FloorplanProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FloorplanProvider);
    return FloorplanProvider;
}());



/***/ }),

/***/ "./src/providers/project.ts":
/*!**********************************!*\
  !*** ./src/providers/project.ts ***!
  \**********************************/
/*! exports provided: ProjectProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectProvider", function() { return ProjectProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectProvider = /** @class */ (function () {
    function ProjectProvider(httpClient) {
        this.httpClient = httpClient;
        this.path = 'projects/';
    }
    ProjectProvider.prototype.getProjects = function () {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + this.path);
    };
    ProjectProvider.prototype.getProject = function (key) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + this.path + key);
    };
    ProjectProvider.prototype.getUnits = function (key) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + this.path + key + "/units");
    };
    ProjectProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectProvider);
    return ProjectProvider;
}());



/***/ }),

/***/ "./src/providers/sales-agent.ts":
/*!**************************************!*\
  !*** ./src/providers/sales-agent.ts ***!
  \**************************************/
/*! exports provided: SalesAgentProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesAgentProvider", function() { return SalesAgentProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalesAgentProvider = /** @class */ (function () {
    function SalesAgentProvider(_httpClient) {
        this._httpClient = _httpClient;
        this._path = 'sales-agents/';
    }
    SalesAgentProvider.prototype.getSalesAgents = function () {
        return this._httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + this._path);
    };
    SalesAgentProvider.prototype.getSalesAgent = function (key) {
        return this._httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + this._path + key);
    };
    SalesAgentProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SalesAgentProvider);
    return SalesAgentProvider;
}());



/***/ }),

/***/ "./src/providers/unit.ts":
/*!*******************************!*\
  !*** ./src/providers/unit.ts ***!
  \*******************************/
/*! exports provided: UnitProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitProvider", function() { return UnitProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnitProvider = /** @class */ (function () {
    function UnitProvider(_httpClient) {
        this._httpClient = _httpClient;
        this._path = 'units/';
    }
    UnitProvider.prototype.getUnits = function () {
        return this._httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + this._path);
    };
    UnitProvider.prototype.getUnit = function (key) {
        return this._httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + this._path + key);
    };
    UnitProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UnitProvider);
    return UnitProvider;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jens/Repos/industriradhus-webapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map