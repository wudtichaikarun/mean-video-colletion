webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_videos_video_center_video_center_component__ = __webpack_require__("./src/app/components/videos/video-center/video-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
// Component







var routes = [
    {
        path: '', redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_4__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'videos',
        component: __WEBPACK_IMPORTED_MODULE_2__components_videos_video_center_video_center_component__["a" /* VideoCenterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]]
    }
];
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app work';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_bootstrap_confirm__ = __webpack_require__("./node_modules/angular2-bootstrap-confirm/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_safe_pipe__ = __webpack_require__("./src/app/shared/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_auth_http_service__ = __webpack_require__("./src/app/shared/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_video_service__ = __webpack_require__("./src/app/services/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_videos_video_center_video_center_component__ = __webpack_require__("./src/app/components/videos/video-center/video-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_videos_video_detail_video_detail_component__ = __webpack_require__("./src/app/components/videos/video-detail/video-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_videos_video_list_video_list_component__ = __webpack_require__("./src/app/components/videos/video-list/video-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Service








// Component










// Guard

// Routes module

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_videos_video_center_video_center_component__["a" /* VideoCenterComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_videos_video_detail_video_detail_component__["a" /* VideoDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_videos_video_list_video_list_component__["a" /* VideoListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__shared_safe_pipe__["a" /* SafePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_22__app_routing_module__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_bootstrap_confirm__["a" /* ConfirmModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_9__shared_auth_http_service__["a" /* AuthHttpService */],
            __WEBPACK_IMPORTED_MODULE_10__services_video_service__["a" /* VideoService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" >Dashboard</h2>\n<p>welcome to my dachboard</p>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.jumbotron{\n    text-align: center;\n    background-color: white;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 60px 1px rgba(0, 0, 0, 0.19);\n    border-radius: 0px\n}\n.card-header{\n    margin: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>My Videos</h1>\n  <p>Add Update Delete Group All you videos you like in this website</p>\n  <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n  <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <div class=\"card\">\n      <h3 class=\"card-header\">Add New Video</h3>\n      <div class=\"card-block\">\n        <h6 class=\"card-subtitle text-muted\">How to add new video</h6>\n      </div>\n      <img style=\"height: 200px; width: 100%; display: block;\" src=\"../../../assets/images/add new.png\"\n        alt=\"Card image\">\n      <div class=\"card-block\">\n        <p class=\"card-text\">(1).select video page \n                             (2).click +new video \n                             (3).insert all data \n                             (4).click add video </p>\n      </div>\n      <div class=\"card-footer text-muted text-xs-center\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card\">\n      <!--<div class=\"editeHeader\">-->\n        <h3 class=\"card-header\">Edite Video</h3>\n        <div class=\"card-block\">\n          <h6 class=\"card-subtitle text-muted\">How to edite video</h6>\n        <!--</div>-->\n      </div>\n      <img style=\"height: 200px; width: 100%; display: block;\" src=\"../../../assets/images/editePic.png\"\n        alt=\"Card image\">\n      <div class=\"card-block\">\n        <p class=\"card-text\">(1).select video page\n                             (2).select video you want to edit\n                             (3).click edit botton\n                             (4).edit data \n                             (5).click update</p>\n      </div>\n      <div class=\"card-footer text-muted text-xs-center\">\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3\">\n    <div class=\"card\">\n      <h3 class=\"card-header\">Delete Video</h3>\n      <div class=\"card-block\">\n        <h6 class=\"card-subtitle text-muted\">How to delete video</h6>\n      </div>\n      <img style=\"height: 200px; width: 100%; display: block;\" src=\"../../../assets/images/deletePic.png\"\n        alt=\"Card image\">\n      <div class=\"card-block\">\n        <p class=\"card-text\">(1).select video page \n                             (2).select video you want to delete \n                             (3).click delete botton\n                             (4).click confirm </p>      \n      </div>\n      <div class=\"card-footer text-muted text-xs-center\">\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3\">\n    <div class=\"card\">\n      <h3 class=\"card-header\">Filter Video</h3>\n      <div class=\"card-block\">\n        <h6 class=\"card-subtitle text-muted\">How to filter video by category</h6>\n      </div>\n      <img style=\"height: 200px; width: 100%; display: block;\" src=\"../../../assets/images/filter.png\"\n        alt=\"Card image\">\n      <div class=\"card-block\">\n        <p class=\"card-text\">(1).select video page \n                             (2).click select by category\n                             (3).select category    \n      </div>\n      <div class=\"card-footer text-muted text-xs-center\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/components/home/home.component.html"),
        styles: [__webpack_require__("./src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" >Login</h2>\n<form (submit) =\"onLoginSubmit()\" >\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input \n      type=\"text\" \n      class=\"form-control\" \n      [(ngModel)]=\"username\" \n      name=\"username\" \n      placeholder=\"Enter Usename\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input \n      type=\"password\" \n      class=\"form-control\" \n      [(ngModel)]=\"password\" \n      name=\"password\" \n      placeholder=\"Enter password\" >\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\" >\n</form>\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        //console.log(`Username is: ${user.username} Password is: ${user.password}`)
        this.authService.logIn(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeToken(data.token);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 2000 });
                _this.router.navigate(['home']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                //this.router.navigate(['login'])
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/components/login/login.component.html"),
        styles: [__webpack_require__("./src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".collapse.navbar-collapse.in{\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 60px 1px rgba(0, 0, 0, 0.19);\n    border-radius: 0px;\n    padding: 0px;\n}\n.collapse.navbar-collapse{\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 60px 1px rgba(0, 0, 0, 0.19);\n    border-radius: 0px;\n    padding: 0px;\n}\n.container-fluid{\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 60px 1px rgba(0, 0, 0, 0.19);\n    border-radius: 0px;\n}\n.navbar.navbar-default{\n    border: 0px;\n}\n\n/*search*/\n.form-control{\n    height: 30px;\n    padding: 2px 16px 2px 16px;\n    border-radius: 0px;\n}\n.form-group{\n    height: 30px;\n}\n.linkNav{\n    margin-left: 20px;\n    padding-left: 7px;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" (click)=\"toggleState()\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\"\n        aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n      <a class=\"navbar-brand\" href=\"#\">My Videos</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\" [ngClass]=\"{ 'in': isIn }\" (click)=\"toggleState()\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"> <a class=\"linkNav\" [routerLink]=\"['/']\">Home</a> </li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"> <a class=\"linkNav\" [routerLink]=\"['/dashboard']\">Dashboard</a> </li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"> <a class=\"linkNav\" [routerLink]=\"['/videos']\">Videos</a> </li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"> <a class=\"linkNav\" [routerLink]=\"['/profile']\">Profile</a> </li>\n      </ul>\n      <!--Search-->\n      <form *ngIf=\"authService.loggedIn()\" class=\"navbar-form navbar-left\" role=\"search\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"> <a class=\"linkNav\" [routerLink]=\"['/register']\">Register</a> </li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"> <a class=\"linkNav\" [routerLink]=\"['/login']\">Login</a> </li>\n        <li *ngIf=\"authService.loggedIn()\"> <a class=\"linkNav\" (click)=\"onLogoutClick()\">Logout</a> </li>\n      </ul>\n    </div>\n    <!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.isIn = false; // store state
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 5000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" >\n  <h2 class=\"page-header\" > {{user.username}} </h2>\n  <ul class=\"list-group\" >\n    <li class=\"list-group-item\" >Username: {{ user.username }} </li>\n    <li class=\"list-group-item\" >Email: {{ user.email }} </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            //console.log(this.user)
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("./src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid:not(form):not(fieldset) {\n    border-left: 5px solid #42A948;\n}\n\n.ng-invalid:not(form):not(fieldset){\n    border-left:  5px solid #A94442;\n}\n\n.errMassage{\n    color: #A94442;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" >Register</h2>\n<form (submit)=\"onRegisterSubmit()\" [formGroup]=\"form\" > \n  \n  <!--<div class=\"form-group\">\n    <label for=\"name\">Name:</label>\n    <input \n      type=\"text\" \n      name=\"name\" \n      class=\"form-control\" \n      placeholder=\"Enter You Name\"\n      formControlName=\"name\" />\n      <div *ngIf=\"formErrors.name\" class=\"errMassage\"> \n        {{ formErrors.name }} \n      </div>\n  </div>-->\n  \n  <div class=\"form-group\">\n    <label for=\"username\">Username:</label>\n    <input \n      type=\"text\" \n      id=\"username\" \n      class=\"form-control\" \n      placeholder=\"Enter Username 4-8 Character\"\n      formControlName=\"username\" >\n      <div *ngIf=\"formErrors.username\" class=\"errMassage\"> \n        {{ formErrors.username  }} \n      </div>\n      \n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"email\" >Email:</label>\n    <input \n      type=\"text\" \n      id=\"email\" \n      class=\"form-control\" \n      placeholder=\"Enter Email\"\n      formControlName=\"email\" >\n      <div *ngIf=\"formErrors.email\" class=\"errMassage\"> \n        {{ formErrors.email }} \n      </div>\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"password\" >Password:</label>\n    <input \n      type=\"password\" \n      id=\"password\" \n      class=\"form-control\" \n      placeholder=\"Enter Password 4-8 Character\"\n      formControlName=\"password\" >\n      <div *ngIf=\"formErrors.password\" class=\"errMassage\"> \n        {{ formErrors.password }} \n      </div>\n  </div>\n  \n  <input *ngIf=\"form.valid\" type=\"submit\" class=\"btn btn-primary\" value=\"Register\" >\n</form>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//service



var RegisterComponent = (function () {
    function RegisterComponent(builder, authService, flashMessages, router) {
        this.builder = builder;
        this.authService = authService;
        this.flashMessages = flashMessages;
        this.router = router;
        this.formErrors = {
            username: '',
            email: '',
            password: ''
        };
        this.validatetionMessages = {
            username: {
                required: 'Username is required.',
                minlength: 'Username required 4-10 character.',
                maxlength: 'Username required 4-10 character.'
            },
            email: {
                required: 'Email is required.',
                pattern: 'Invalid email pattern'
            },
            password: {
                required: 'Password is required.',
                minlength: 'Username required 4-8 character.',
                maxlength: 'Username required 4-8 character.'
            }
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    // Build and validate form by angular
    RegisterComponent.prototype.buildForm = function () {
        var _this = this;
        this.form = this.builder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(10)
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(8)
                ])],
        });
        this.form
            .valueChanges
            .subscribe(function () { return _this.onValueChanged(); });
    };
    RegisterComponent.prototype.onValueChanged = function () {
        if (!this.form)
            return;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = this.form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validatetionMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + '';
                }
            }
        }
    };
    RegisterComponent.prototype.onRegisterSubmit = function (even) {
        var _this = this;
        event.preventDefault();
        // Register user
        this.authService.register(this.form.value).subscribe(function (data) {
            if (data.success) {
                _this.flashMessages.show('You are now register and can login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessages.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("./src/app/components/register/register.component.html"),
        styles: [__webpack_require__("./src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "./src/app/components/videos/video-center/video-center.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*mobile size (<768px)*/\n/*.col-xs-12{\n    padding: 0px;\n}*/\n.ng-valid:not(form):not(fieldset) {\n    border-left: 5px solid #42A948;\n    border: 1px 1px 1px 5px;\n}\n\n.ng-invalid:not(form):not(fieldset){\n    border-left:  5px solid #A94442;\n}\n\n.errMassage{\n    color: #A94442;\n}\n\n/*small device (>=768px)*/\n.panel-body{\n    padding: 0;\n}\n.videoListText{\n    margin-bottom: 10px 0px 1px 0px;\n}\nhr{\n    margin: 1px 0px 5px 0px;\n}\n.col-sm-9.videoDetail{\n    border: 1px solid rgba(192,192,192,0.3);\n    padding: 0px;\n}\n.btn.btn-default.btn-lg.btn-block{\n    height: 52px;\n    padding: 5px 25px 5px 25px;\n    border-radius: 0px;\n    border: 0px;\n}\n\n.videoListMain{\n    padding: 0px;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 60px 1px rgba(0, 0, 0, 0.19);\n}\n\n.col-sm-3{\n    padding: 0 0 0 10px;\n}\n  \n.addNewVideoMain{\n    padding: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/videos/video-center/video-center.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-9 videoDetail\">\n    <!--######## video Center Component Create new video ######-->\n    <div *ngIf=\"!hidenewVideo\" class=\"addNewVideoMain\">\n    <!--<h2>New Video</h2>-->\n    <!--<form #form=\"ngForm\" (ngSubmit)=\"onSubmitAddVideo(form.value)\" class=\"well\">\n        <div class=\"form-group\">\n          <label>Title</label>\n          <input \n            type=\"text\" \n            class=\"form-control\" \n            required \n            name=\"title\" \n            ngModel\n            placeholder=\"Enter titie name\" >\n        </div>\n        <div class=\"form-group\">\n          <label>Url</label>\n          <input \n            type=\"text\" \n            class=\"form-control\" \n            required \n            name=\"url\" \n            ngModel\n            placeholder=\"Enter url link\" >\n        </div>\n\n        <div class=\"form-group\">\n          <label>Description</label>\n          <input \n            type=\"text\" \n            class=\"form-control\"  \n            name=\"discription\" \n            ngModel\n            placeholder=\"Enter descrtption\" >\n        </div>\n        <button type=\"submit\" class=\"btn btn-success\">Save</button>\n      </form>-->\n\n    <h2 class=\"page-header\">Add New Video</h2>\n    <form (submit)=\"onSubmitAddVideo()\" [formGroup]=\"form\">\n\n      <div class=\"form-group\">\n        <label for=\"title\">Title:</label>\n        <input type=\"text\" id=\"title\" class=\"form-control\"  ngModel placeholder=\"Enter Title Name\" formControlName=\"title\">\n        <div *ngIf=\"formErrors.title\" class=\"errMassage\">\n          {{ formErrors.username }}\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"url\">Url:</label>\n        <input type=\"text\" id=\"url\" class=\"form-control\"   ngModel placeholder=\"Enter Url Link\" formControlName=\"url\">\n        <div *ngIf=\"formErrors.url\" class=\"errMassage\">\n          {{ formErrors.email }}\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"discription\">Description:</label>\n        <input type=\"text\" id=\"discription\" class=\"form-control\"   ngModel placeholder=\"Enter Description\" formControlName=\"discription\">\n        <div *ngIf=\"formErrors.discription\" class=\"errMassage\">\n          {{ formErrors.password }}\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"Category\">Category:</label>\n          <select class=\"form-control\" id=\"categoryId\" ngModel formControlName=\"categoryId\">\n              <option class=\"selectCategory\" >----Select Category----</option>\n              <option value=1>Music</option>\n              <option value=2>Android</option>\n              <option value=3>AngularJs</option>\n              <option value=4>Boostrap</option>\n              <option value=5>Css</option>\n              <option value=6>IOS</option>\n              <option value=7>Javascript</option>\n              <option value=8>Other</option>\n            </select>\n      </div>\n\n      <input *ngIf=\"form.valid\" type=\"submit\" class=\"btn btn-primary\" value=\"ADD VIDEO\">\n    </form>\n  </div>\n\n  <!--######## video Detail component ######-->\n  <div class=\"videoDetail\">\n    <video-detail (updateVideoEvent)=\"onUpdateVideoEvent($event)\" (deleteVideoEvent)=\"onDeleteVideoEvent($event)\" *ngIf=\"selectedVideo && hidenewVideo\"\n      [video]=\"selectedVideo\">\n    </video-detail>\n  </div>\n\n</div>\n\n    <!--######## video List Component ######-->\n  <div class=\"col-sm-3 col-xs-12\">\n    <div class=\"videoListMain\">\n      <div><button (click)=\"newVideo()\" type=\"button\" class=\"btn btn-default btn-lg btn-block\">+ New Video</button></div>\n      <video-list (SelectVideo)=\"onSelectVideo($event)\" \n        [CategoryId]=\"CategoryId\"\n        [videos]=\"videos\"\n        [currentPage]=\"currentPage\"\n        [totalPages]=\"totalPages\" >\n      </video-list>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/videos/video-center/video-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_video_service__ = __webpack_require__("./src/app/services/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoCenterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { videoPaginate } from '../../../shared/videosPaginate';





var VideoCenterComponent = (function () {
    function VideoCenterComponent(builder, _videoService, route, router) {
        this.builder = builder;
        this._videoService = _videoService;
        this.route = route;
        this.router = router;
        this.hidenewVideo = true;
        this.formErrors = {
            // name: '',
            title: '',
            url: ''
        };
        this.validatetionMessages = {
            // name: {
            //   required: 'Name is required.'
            // },
            title: {
                required: 'Username is required.',
                minlength: 'Username required 2 character.',
                maxlength: 'Username required 65 character.'
            },
            url: {
                required: 'Email is required.',
                pattern: 'Invalid email pattern'
            }
            // password:{
            //   required: 'Password is required.',
            //   minlength: 'Username required 4-8 character.',
            //   maxlength: 'Username required 4-8 character.'
            // }
        };
    }
    VideoCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.subscribeToParams();
        this._videoService.getCategory()
            .subscribe(function (res) {
            _this.CategoryId = res;
            //   console.log(this.videos)
            // }, err => {
            //   console.log(err);
            //   return false;
        });
    };
    VideoCenterComponent.prototype.subscribeToParams = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (_a) {
            var page = _a.page, categoryId = _a.categoryId;
            return _this.loadPage(page, categoryId);
        });
    };
    VideoCenterComponent.prototype.loadPage = function (page, categoryId) {
        var _this = this;
        if (page === void 0) { page = 1; }
        this._videoService
            .getVideos(page, categoryId)
            .subscribe(function (_a) {
            var docs = _a.docs, page = _a.page, pages = _a.pages;
            _this.videos = docs;
            _this.currentPage = page;
            _this.totalPages = Array.from({ length: +pages }, function (_, index) { return index + 1; });
            //console.log(this.videos)
            //console.log(this.currentPage)
            //console.log(this.totalPages)
        });
        // .subscribe(
        //   ({ docs, page, pages }) => {
        //   this.videos = docs ;
        //   // create array
        //   //this.totalPages = Array.from({ length: pages }, (_, index) => index +1)
        //   // this.pages = Array.from({ length: pages }, (_, index) => index +1)
        //   console.log(this.videos)
        //   console.log(this.currentPage)
        //   console.log(this.totalPages)
        // })
    };
    // Build and validate form by angular
    VideoCenterComponent.prototype.buildForm = function () {
        var _this = this;
        this.form = this.builder.group({
            // name: ['', Validators.required],
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(65)
                ])],
            url: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            discription: [],
            categoryId: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
        });
        this.form
            .valueChanges
            .subscribe(function () { return _this.onValueChanged(); });
    };
    VideoCenterComponent.prototype.onValueChanged = function () {
        if (!this.form)
            return;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = this.form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validatetionMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + '';
                }
            }
        }
    };
    // Select video
    VideoCenterComponent.prototype.onSelectVideo = function (video) {
        this.selectedVideo = video;
        this.hidenewVideo = true;
        //console.log(this.selectedVideo);
    };
    // Create new video
    VideoCenterComponent.prototype.onSubmitAddVideo = function (even) {
        var _this = this;
        //console.log(this.form.value)
        this._videoService.addVideo(this.form.value)
            .subscribe(function (resNewVideo) {
            _this.videos.push(resNewVideo);
            _this.hidenewVideo = true;
            _this.selectedVideo = resNewVideo;
        });
    };
    // Update
    VideoCenterComponent.prototype.onUpdateVideoEvent = function (video) {
        var _this = this;
        this._videoService.updateVideo(video)
            .subscribe(function (resUpdateVideo) {
            video = resUpdateVideo;
            _this.selectedVideo = null;
            //this.selectedVideo = resUpdateVideo;
        });
    };
    // // Delete
    VideoCenterComponent.prototype.onDeleteVideoEvent = function (video) {
        var videoArray = this.videos;
        this._videoService.deleteVideo(video)
            .subscribe(function (resDeletedVideo) {
            for (var i = 0; i < videoArray.length; i++) {
                if (videoArray[i]._id === video._id) {
                    videoArray.splice(i, 1);
                }
            }
        });
        this.selectedVideo = null;
    };
    VideoCenterComponent.prototype.newVideo = function () {
        this.hidenewVideo = false;
    };
    return VideoCenterComponent;
}());
VideoCenterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-video-center',
        template: __webpack_require__("./src/app/components/videos/video-center/video-center.component.html"),
        styles: [__webpack_require__("./src/app/components/videos/video-center/video-center.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_video_service__["a" /* VideoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], VideoCenterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=video-center.component.js.map

/***/ }),

/***/ "./src/app/components/videos/video-detail/video-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "iframe{\n    border: 0px;\n}\n\n.videoDetailForm{\n    padding: 0px 10px 3px 10px;\n    margin: 0px;\n    border-bottom:  1px solid  rgba(192,192,192,0.3);\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 60px 1px rgba(0, 0, 0, 0.19);\n}\n\n.btn-default.btn-title{\n    padding: 5px;\n}\n/*font url/detail*/\n.fontDetail{\n    color: gray;\n}\n\n/*css for edit and delet button*/\n.editeVideoConfig{\n    padding: 16px 10px 16px 10px;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 60px 1px rgba(0, 0, 0, 0.19);\n    margin-bottom: 10px;\n}\n\n/*----------main edit/delete icon---------*/\n.editeVideoConfig{\n    height: 51px;\n}\n/*edite icon*/\n.editVideo{\n    float: left;\n    margin-right: 15px;\n}\ndiv.editVideo:hover{\n    float: left;\n    color: #3399ff;\n}\n.iconEdite{\n    float: left;\n    background-repeat: no-repeat;\n    background-image: url(" + __webpack_require__("./src/assets/images/edite.png") + ");\n    width: 39px;\n    height: 19px;\n    padding-left: 20px\n}\n.iconEdite:hover{\n    float: left;\n    background-repeat: no-repeat;\n    background-image: url(" + __webpack_require__("./src/assets/images/editeActive.png") + ");\n    width: 39px;\n    height: 19px;\n    padding-left: 20px\n}\n/*delete icon*/\n.deleteVideo{ \n    margin-left: 15px;\n    float: left;\n}\ndiv.deleteVideo:hover{\n    margin-left: 15px;\n    float: left;\n    color: red;\n}\n.iconDelete{\n    float: left;\n    background-repeat: no-repeat;\n    background-image: url(" + __webpack_require__("./src/assets/images/delete.png") + ");\n    width: 39px;\n    height: 19px;\n    padding-left: 20px\n}\n.iconDelete:hover{\n    float: left;\n    background-repeat: no-repeat;\n    background-image: url(" + __webpack_require__("./src/assets/images/deleteActice.png") + ");\n    width: 39px;\n    height: 19px;\n    padding-left: 20px\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/videos/video-detail/video-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- ######################## iframe play video ########################-->\n  <div>\n    <iframe [src]=\"video.url | safe\" width=\"100%\" height=\"500\"></iframe>\n  </div>\n\n  <form class=\"videoDetailForm\">\n    <!-- ######################## Always show  #########################-->\n    <!--title content-->\n    <h3 class=\"fontDetail\">{{video.title}} </h3> \n    <!--url content-->\n    <h6 class=\"fontDetail\">url: {{video.url}} </h6>\n    <!--description content-->\n    <h6 class=\"fontDetail\">description: {{video.discription}} </h6>\n\n    <!-- ######################## video show when btn-edit click #########################-->\n    <!--Title input for edit-->\n    <div *ngIf=\"editTitle\" class=\"form-group\">\n      <input type=\"input\" class=\"form-control\" name=\"title\" required placeholder=\"title\" [(ngModel)]=\"video.title\">\n    </div>\n    <!--Url input for edite-->\n    <div *ngIf=\"editTitle\" class=\"form-group\">\n      <input type=\"input\" class=\"form-control\" name=\"url\" required placeholder=\"url\" [(ngModel)]=\"video.url\">\n    </div>\n    <!--Description input for edit-->\n    <div *ngIf=\"editTitle\" class=\"form-group\">\n      <input type=\"input\" name=\"desc\" class=\"form-control\" placeholder=\"discription\" [(ngModel)]=\"video.discription\">\n    </div>\n    <!--Update btn-->\n    <button *ngIf=\"editTitle\" type=\"button\" (click)=\"updateVideo()\" class=\"btn btn-primary\">\n            Update\n        </button>\n    <!--cancel btn-->\n    <button *ngIf=\"editTitle\" (click)=\"btnCancelClick()\" class=\"btn btn-default\">\n            Cancel\n        </button>\n  </form>\n\n\n  <!--edite icon btn-->\n  <div class=\"editeVideoConfig\">\n    <div class=\"editVideo\" (click)=\"btnEditClick()\">\n      <div class=\"iconEdite\">Edite</div>\n    </div>\n    <!--delete icon btn-->\n    <div \n        class=\"deleteVideo\"\n        mwlConfirm \n        [title]=\"title\" \n        [message]=\"message\" \n        placement=\"top\" \n        (confirm)=\"ConfirmClicked()\" \n        (cancel)=\"cancelClicked = true\" \n        [(isOpen)]=\"isOpen\" >\n      <div class=\"iconDelete\">delete</div>\n    </div>\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/videos/video-detail/video-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_bootstrap_confirm__ = __webpack_require__("./node_modules/angular2-bootstrap-confirm/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_bootstrap_confirm_position__ = __webpack_require__("./node_modules/angular2-bootstrap-confirm/position/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_bootstrap_confirm_position___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_bootstrap_confirm_position__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoDetailComponent = (function () {
    function VideoDetailComponent() {
        this.editTitle = false;
        this.updateVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleteVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //config confirm property
        this.title = 'Confirm Delete';
        this.message = 'Are you sure! to delete?';
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.isOpen = false;
    }
    VideoDetailComponent.prototype.ngOnInit = function () {
    };
    VideoDetailComponent.prototype.ngOnChange = function () {
        this.editTitle = false;
    };
    VideoDetailComponent.prototype.btnEditClick = function () {
        this.editTitle = true;
    };
    VideoDetailComponent.prototype.btnCancelClick = function () {
        this.editTitle = false;
    };
    //onblur title
    // onMouseout(){
    //   this.editTitle = false;
    //   console.log('event mouseout working');
    // }
    VideoDetailComponent.prototype.updateVideo = function () {
        this.updateVideoEvent.emit(this.video);
    };
    VideoDetailComponent.prototype.deleteVideo = function () {
        this.deleteVideoEvent.emit(this.video);
    };
    VideoDetailComponent.prototype.ConfirmClicked = function () {
        this.confirmClicked = true;
        if (this.confirmClicked) {
            this.deleteVideoEvent.emit(this.video);
        }
    };
    return VideoDetailComponent;
}());
VideoDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'video-detail',
        template: __webpack_require__("./src/app/components/videos/video-detail/video-detail.component.html"),
        styles: [__webpack_require__("./src/app/components/videos/video-detail/video-detail.component.css")],
        inputs: ['video'],
        outputs: ['updateVideoEvent', 'deleteVideoEvent'],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1_angular2_bootstrap_confirm__["b" /* ConfirmOptions */],
            { provide: __WEBPACK_IMPORTED_MODULE_1_angular2_bootstrap_confirm__["c" /* Position */], useClass: __WEBPACK_IMPORTED_MODULE_2_angular2_bootstrap_confirm_position__["Positioning"] }
        ]
    }),
    __metadata("design:paramtypes", [])
], VideoDetailComponent);

//# sourceMappingURL=video-detail.component.js.map

/***/ }),

/***/ "./src/app/components/videos/video-list/video-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.list-group-item{\n    border-top: 0px;\n    border-right: 0px;\n    border-left: 0px;\n    border-bottom: 2px solid rgba(192,192,192,0.3);\n    padding: 10px 10px;\n}\n.list-group-item:hover{\n    background-color: rgba(192,192,192,0.3);\n}\n.list-group{\n    margin: 0px;\n}\n/*.paginationMain{\n    margin-top: 15px;\n    text-align: center;\n    border-left: 1px solid rgba(192,192,192,0.3);\n    border-right: 1px solid rgba(192,192,192,0.3);\n    border-bottom:  1px solid rgba(192,192,192,0.3);\n}*/\n.pagination{\n    margin: 0px;\n}\n.mt-1{\n  padding: 10px 5px 5px 5px;  \n}\n\n\n/*pagination btn*/\n.page-item .active .page-link{\n     background-color: #0B0F01;\n}\n.btn.btn-default.page-item{\n    border-radius: 0px;\n}\n.form-control{\n    border: 0;\n    border-radius: 0px;\n}\nhr{\n    margin: 5px 0;\n}\n\n.dropDown{\n    padding: 10px;\n    text-align: center;\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n.dropDown:hover {\n    background-color: rgba(192,192,192,0.3);\n    padding: 10px;\n    text-align: center;\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n.li_DropDownCategory{\n    border-bottom:  1px solid rgba(192,192,192,0.3);\n}\n.li_DropDownCategory:hover{\n    border-bottom:  1px solid rgba(192,192,192,0.3);\n    background-color: rgba(192,192,192,0.3);\n}\n\n.dropdown {\ntop: 5px;\nmargin: 0 auto 5px auto;\npadding: 5px 0 5px 0;\nwidth: 250px;\nheight: auto;\nbackground: white;\nborder: 1px solid black;\nborder-radius: 0px;\nlist-style: none;\n}\n.dropdown:before {\ncontent: \"\";\nborder-width: 1px 0 0 1px;\nborder-style: solid;\nborder-color: black;\nbackground: black;\nheight: 14px;\nwidth: 14px;\nposition: absolute;\ntop: -7px;\n-webkit-transform: translateX(-50%) rotate(45deg);\n        transform: translateX(-50%) rotate(45deg);\n}\n\na {\ntext-decoration: none;\ncolor: black;\nfont-size: 1em;\n}\nli {\n  text-align: left;\n  padding:  10px 15px;\n  margin: 0;\n}\ni {\nmargin-right: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/videos/video-list/video-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<select class=\"form-control\" id=\"select\" onchange=\"location = this.value\">\n  <option>----------Select By Category--------</option>\n  <option \n    *ngFor=\"let category of CategoryId\" \n    value=\"{{ category.id }}\"\n    [routerLink]=\"['/videos']\" \n    [queryParams]=\"{ categoryId: category.id }\"> \n    {{ category.title }} \n  </option>\n</select>-->\n<div class=\"add-button\" dropdown>\n  <div (click)=\"toggleDropdown()\" class=\"dropDown\">Select By Category <span class=\"caret\"></span></div>\n  <ul class=\"dropdown\" *ngIf=\"showDropdown\">\n    <a *ngFor=\"let category of CategoryId\" \n      (click)=\"toggleDropdown()\" \n      [routerLink]=\"['/videos']\" \n      [queryParams]=\"{ categoryId: category.id }\" >\n      <li class=\"li_DropDownCategory\"><i class=\"fa fa-check-square-o fa-2\"></i>{{ category.title }} </li>\n    </a>\n  </ul>\n</div>\n\n<!--Titl list name-->\n<div class=\"list-group\">\n  <a class=\"list-group-item\" \n    (click)=\"onSelect(video)\" \n    *ngFor=\"let video of videos\">\n    {{ video.title }}\n  </a>\n</div>\n\n<!--Pagination-->\n<div class=\"btn-toolbar\">\n  <div class=\"btn-group\">\n    <a \n      *ngFor= \"let page of totalPages\" \n      [ngClass]=\"{'page-item': true, 'active': page === currentPage }\" \n      class=\"btn btn-default\"\n      [routerLink]=\"['/videos']\" \n      [queryParams]=\"{ page: page }\" >\n      {{ page }}\n    </a>\n   \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/videos/video-list/video-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoListComponent = (function () {
    function VideoListComponent() {
        this.showDropdown = false;
        this.SelectVideo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    VideoListComponent.prototype.ngOnInit = function () {
    };
    VideoListComponent.prototype.onSelect = function (vid) {
        this.SelectVideo.emit(vid);
    };
    VideoListComponent.prototype.toggleDropdown = function () {
        this.showDropdown = !this.showDropdown;
    };
    return VideoListComponent;
}());
VideoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'video-list',
        template: __webpack_require__("./src/app/components/videos/video-list/video-list.component.html"),
        styles: [__webpack_require__("./src/app/components/videos/video-list/video-list.component.css")],
        inputs: ['videos', 'currentPage', 'totalPages', 'CategoryId'],
        outputs: ['SelectVideo']
    }),
    __metadata("design:paramtypes", [])
], VideoListComponent);

//# sourceMappingURL=video-list.component.js.map

/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_http_service__ = __webpack_require__("./src/app/shared/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    // Login
    AuthService.prototype.logIn = function (user) {
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        };
        return this.http
            .post('/api/users/login', user, options)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.setTokenFromResponse = function (observable) {
        var _this = this;
        observable
            .map(function (_a) {
            var headers = _a.headers;
            return headers.get('Authorization');
        })
            .map(function (token) { return token.match(/JWT (.*)/)[1]; })
            .subscribe(function (token) {
            _this.storeToken(token);
        });
    };
    // Set token to localstorage
    AuthService.prototype.storeToken = function (token) {
        localStorage.setItem('access-token', token);
    };
    // Register
    AuthService.prototype.register = function (user) {
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        };
        // const response : Observable<Response> = this.http
        //   .post('/api/users/register', user, options);
        // this.setTokenFromResponse(response);
        // this.router.navigate(['/'])
        return this.http
            .post('/api/users/register', user, options)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.registerUser = function (user) {
    };
    AuthService.prototype.getProfile = function () {
        return this.http.get('/api/users/profile')
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["tokenNotExpired"])('access-token');
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//---------------_> New HTTP- SERVICE START----------------------------------
//export class AuthService {
//authToken: any;
//user: any;
// constructor(private http: Http ) {}
//--------------_>old http start-----------------------------------------
//   // Register Sent data to routes/users.js method post('/register', ....) like postMan
//   registerUser(user){
//     let headers = new Headers();
//     headers.append('Content-Type','application/json');
//     return this.http.post('users/register', user, {headers: headers})
//     .map(res => res.json());
//   }
// // Authentication
//   authenticateUser(user){
//     let headers = new Headers();
//     headers.append('Content-Type','application/json');
//     return this.http.post('users/authenticate', user, {headers: headers})
//     .map(res => res.json());
//   }
//   // Profile get data
//   getProfile(){
//     let headers = new Headers();
//     this.loadToken();
//     headers.append('Authorization', this.authToken);
//     headers.append('Content-Type','application/json');
//     return this.http.get('users/profile',{headers: headers})
//     .map(res => res.json());
//   }
//   // Set local storage
//   storeUserData(token, user){
//     localStorage.setItem('id_token', token);
//     localStorage.setItem('user', JSON.stringify(user));
//     this.authToken = token;
//     this.user = user
//   }
// loadToken(){
//   const token = localStorage.getItem('id_token');
//   this.authToken = token;
//   //show when go to /profile
//   //console.log("token_id "+token)
// }
//   loggedIn() {
//   return tokenNotExpired('id_token');
//   }
//   // Log out
//   logout(){
//     this.authToken = null;
//     this.user = null;
//     localStorage.clear();
//   }
//}
//--------------_> Old HTTP- SERVICE- END -------------------------------------
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/app/services/video.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_http_service__ = __webpack_require__("./src/app/shared/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoService = (function () {
    function VideoService(_http) {
        this._http = _http;
    }
    // READ video
    VideoService.prototype.getVideos = function (page, categoryId) {
        if (page === void 0) { page = 1; }
        if (categoryId === void 0) { categoryId = 0; }
        var options = { params: { page: page, categoryId: categoryId } };
        return this._http.get('/api/videos', options)
            .map(function (res) { return res.json(); });
        // .map(({ docs, page, pages }) => ({
        //   docs,
        //   page,
        //   pages
        // }))
    };
    // READ categoryId
    VideoService.prototype.getCategory = function () {
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        };
        return this._http.get('/api/categorys', options)
            .map(function (response) { return response.json(); });
    };
    // CREATE video
    VideoService.prototype.addVideo = function (video) {
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        };
        return this._http.post('/api/videos', JSON.stringify(video), options)
            .map(function (response) { return response.json(); });
    };
    // UPDATE video
    VideoService.prototype.updateVideo = function (video) {
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        };
        return this._http.patch("/api/videos/" + video._id, JSON.stringify(video), options)
            .map(function (response) { return response.json(); });
    };
    // DELETE video
    VideoService.prototype.deleteVideo = function (video) {
        return this._http.delete("/api/videos/" + video._id)
            .map(function (response) { return response.json(); });
    };
    return VideoService;
}());
VideoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
], VideoService);

var _a;
//# sourceMappingURL=video.service.js.map

/***/ }),

/***/ "./src/app/shared/auth-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthHttpService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthHttpService = (function (_super) {
    __extends(AuthHttpService, _super);
    function AuthHttpService(backend, options) {
        var _this = this;
        var token = localStorage.getItem('access-token');
        options.headers.set('Authorization', "JWT " + token);
        _this = _super.call(this, backend, options) || this;
        return _this;
    }
    AuthHttpService.prototype.request = function (url, options) {
        var token = localStorage.getItem('access-token');
        if (typeof url === 'string') {
            if (!options)
                options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]() };
            options.headers.set('Authorization', "JWT " + token);
        }
        else {
            url.headers.set('Authorization', "JWT " + token);
        }
        return _super.prototype.request.call(this, url, options);
    };
    return AuthHttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]));
AuthHttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["XHRBackend"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["XHRBackend"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]) === "function" && _b || Object])
], AuthHttpService);

var _a, _b;
//# sourceMappingURL=auth-http.service.js.map

/***/ }),

/***/ "./src/app/shared/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        url = url.replace("watch?v=", "embed/");
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ "./src/assets/images/delete.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA3XAAAN1wFCKJt4AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABVElEQVQ4Ea3UvU0EMRAF4OM3vhZoh5QUGkCiiksRuhqoCCq4gBYQAQm8z9q3twgRIO2TnjyeeTO2Z+3dbI44O5qbq9i78CV8D7+m0ZxfvFjmDd/S8RSP5EO4D+/C6/B2mvOL0xVzfo1tIlb+CG+q+mMUp6OXB60zJgJvYYOcF+H5guYFHb28H7BlK7XQZezTiRlm1CcO9PLmI2umHvRoFcY1oMBJaFyiOnnyx0fZxdDUokmPcTxMTkcFc36oji1fnXHmPSPQk4okWvE+BKN5F6BrD+W/hOMe+fzQHbSgAp/h8zS2cOPVuzbu41jtmhE0qEe1FbIjI/CLQzXyadbdmbOu1rNVv6b74byr3LPUGTd4lRegGOidt7Y1mfDvt3k2JSqioB32yFPo1yBOR9/FW+fH7+Ov/5mLvQ8PoR7Pjzv2XCj2wNLho+zC13D5pzXnFy/mvG+yc12DGmW7BAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/deleteActice.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA3XAAAN1wFCKJt4AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAC1ElEQVQ4EZ2UP2tUQRTFz8x76wZkzXaixk6T6AewFCEgW6cQv4BNQAw2WilaaSOCkMoPIBZbByEQLP0AmkS74L9u44JkyXtvPL95uzFg58Ds3Zl7znln7rz7gqYjSTFIDctdLS77z2pQGHguJqW+48hxz3MzSsMl7e2APckzX3orFbek+rMudWsVT7y11lPsTQytPE0QwNK/Xc+xmrEFN4Lqx5f1ZTLjh5nyR105F5TezCte/22DFqksEJ1Hh5n8k7xuCoXytKIO1LxPCrev6tP3qY6Eo0rlu76FDlQfmeMHBwQc/xmUgpnmVXRGFixV3cRhBnM0HLVCKucUizkFaliflGLtXHSu9P8CPLzUlkaBYtvqB9ejV6kBXByqee2CL/RUDH6prixYelZnVJRj1Zs2td9VvGNcXRrvkoxdomuRW6PY1Gh6NPPCQlBz30LbfQt4Y0Jkzb7zF73nEQI8+Oj4KGHArdk2R47+X9vBoFHccC3u+ihbF9TpElmzj2Nw4OG1fL9Gu1r+YYtnrewLybfmoAonCNjJUwusRjXDpPjIRV8Z/T062HxbtvPTV5/6XI2HH3I8ShMm59VZQWhZu+tE1uwbxdFnI8BHh2OOpvePs9nAWfebjrZwtKOll0TW7BvEpcwGzuzEOlbc4822rSzmSM1wtl2oWudortk9Imv2yYNDDR58dBDbpEWshNvG/wuu307W/CK/okZfdTQhsmafPDjw8Fq+e9YWh/Sa1V0HuoWR9u3khR3csBOO1CWyZp98hhkPb9qrQ7uUXJNnBj7we+RWogNyK4nrtzoO8uBoflm9TuRwRUk65j33JT3MtS/c/TQtvWZWxZt92IKPhVBD2LmGPELg4cEn75op0qR0P03Lk2gR53INWw2g+auR98iDAw+v5btpbb3he8RnhO7HMr3mFilPudltPZeC2PGaffLgwMODj04G5se2rcGT//tL+weGXX/eRdFczQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/edite.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA3XAAAN1wFCKJt4AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABv0lEQVQ4EaWUvUpdQRRGj7kqSsTCwidI1CaFXYq8hahoYeNbWFjGN9EQX8GAaMBG0EpQtLISf0AjaBR/1poz+zLcc1FCPljO7D0z38yeOd5W9e/qY8kzjMMejMIvqHpgGabgKcc0SY65aAD2YRH+grnP8Bs0UiuwZOclc0P7p4Nr4gfYgRFQE3AFrluA9dzXMCW3aFswlPlIG5jrBTUGl6DRHCgNjU8N7Gj2niztAkojDY3PwDtMwbYd9CHjfUk/KCeG0XTK1CfTyJO6UZKJMNMg5KupsrSZOlVpGEbeoUrzu5mF0ScmxYnm05KqmqV1zTm4kbKipE4zH0J1K01D57tBlOYrD0JSaRZGXxhxZ8c8iSpLS5dNzlfegVVIKs3iE1hjxHzcUZTmiaI0Fw+B3+GBQbtWA6RBqRMCDX+Ar/YVjqAflPPv4N4gTmK/lDuq3bpJd/SN/jH4OI85bxOfU8MsTraRJ9/m9jvtIYRR+QnlKXWjQfmddZYek+NxjGOOFfj/7K9H42TmNHdy7G5rzl+LyNFtKu7Mnx8VZUZbZ5t/Y9zLd5MUh9kkiU0oSyF8U2E4zKz2up8EDvwPy277CsZggk8+uM8sAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/editeActive.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA3XAAAN1wFCKJt4AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAADHElEQVQ4EZVUPUxTURT+3k9bCtSWdqDBxVnERGPipIsRdXFD+d2URYrp4KBTNxM1NlImZANRwmqigsbExM0YE4S4uSjCQH8oLW15r9fvvNcXeMHF83p7f8693/u+c859wP9aRpnOkfRuH1LFn0jlH3kQGiYKaWjaGBdkk+JP85yA1mQLQVNfEayN40my4vjS272w9XcIxY7LCTRKDzEVe2AS6CnMMGDtVenQORd3yxTHBFMowA6HuFjB3fxpWMYyjEA36qXb9F1DKHqfDE0dwQiBap+Ri3WgUU2gHI27rcC+mIC5E0EiehHZaB6T+VNo6ssItHfDro2SzSw0vGGj6QOufjRdaTM91Ralo12qfBLKXoFJoP3qKHLxF2QzAj34HPXib5iB6zplSJhcsAFlQEnMWm38S8BBTef7APsDjLYkgQaRixKoNIJAZB72/haM5hVkO1cJRvPi1MsIOGPGLQMDM+f2HWmWsYJARxJ2dRjTsUVMFG8yzvPYr2xBt/uRTayBWW7JdCAP/jIfTWQ0C6ltStMJFO5GozyG6fhLShsiwwVY1U0m+zKexb87B7n/KFhG6Q6QSHOyFkzC2h0i0CtM5EcpbY6MNgHjEhOwjnQpDmOvLmXjyvQ4rTGAGdbWneJZAr0lI0rbG8YUgSbzgwh2Eqi6BbPZj1xkXaTBUq/RaJsRCD+zLtYZI03Ie4gc60GlxGDHFx1peniBQK60bEta6RcTFDnPfHUJmJ+ZrIhpfBrsm+oH7jLYgc4F2A1KsymNQF6WC5bcmBpbXY75mcmKmEIEvBRA7BuC7Mo7GzDtq8yaKy0DS7yuSVkxzjQ/WA9hHFPvUdghQ1VGjWsKj5GNr8LL8uH7y2Li45gfjMIYVMlmll5pB+ZlWVbklQ7ACQ5KbK4RTDytL4VkUwpXsrThvY/uAl8iGwVQ7MaSQNkI/uG8nUP342BCEz8LVGxJs7HkjOSw39x1/5rc5VRR9jo8TaabY3WGd+0TezI9/Anyn/XPBENXMNva+flyyJhoNmZ582+xQC/wknNDK5r+k/+YtXLVKJODmpMNfwF6yjrDTUBsIQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map