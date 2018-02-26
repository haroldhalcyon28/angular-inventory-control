webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.menu {\n    background: linear-gradient(90deg, #19bbc0 0%, #0071b7 100%);\n}\n.ui.menu .main-item{\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <sm-menu title=\"Inventory Control\" class=\"inverted teal\" >\n    <sm-menu class=\"menu right secondary\">\n      <a sm-item icon=\"sidebar big\"></a>\n    </sm-menu>\n\n</sm-menu> -->\n\n<div class=\"ui menu inverted\">\n  <a class=\"item main-item\"> Inventory Control </a>\n</div>\n\n<router-outlet></router-outlet>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as io from 'socket.io-client';


var AppComponent = (function () {
    function AppComponent(http, productService) {
        this.http = http;
        this.productService = productService;
        // socket = io('http://192.168.1.197:8080', {
        //   reconnect: true,
        //   transports: ['websocket'],
        // });
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.menu .item').tab();
            $('#clicker').click(function () {
                $('.ui.modal').modal('show');
            });
            // $('.ui.modal.sample')
            //   .modal()
            //   ;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_products_service__["a" /* ProductsService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_inventory_inventory_component__ = __webpack_require__("../../../../../src/app/components/inventory/inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_inventory_service__ = __webpack_require__("../../../../../src/app/services/inventory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_inventory_content_inventory_content_component__ = __webpack_require__("../../../../../src/app/components/inventory-content/inventory-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { NgSemanticModule } from 'ng-semantic';


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_inventory_inventory_component__["a" /* InventoryComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_inventory_content_inventory_content_component__["a" /* InventoryContentComponent */],
            __WEBPACK_IMPORTED_MODULE_11__menu_menu_component__["a" /* MenuComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            // NgSemanticModule,
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__app_routing__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_8__services_inventory_service__["a" /* InventoryService */], __WEBPACK_IMPORTED_MODULE_0__services_socket_service__["a" /* SocketService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* unused harmony export routingComponents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_inventory_content_inventory_content_component__ = __webpack_require__("../../../../../src/app/components/inventory-content/inventory-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/main' },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'inventory/:id', component: __WEBPACK_IMPORTED_MODULE_2__components_inventory_content_inventory_content_component__["a" /* InventoryContentComponent */] },
    { path: '**', redirectTo: '/main' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__components_inventory_content_inventory_content_component__["a" /* InventoryContentComponent */], __WEBPACK_IMPORTED_MODULE_2__components_inventory_content_inventory_content_component__["a" /* InventoryContentComponent */]];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/inventory-content/inventory-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    margin-top: 5vh;\n    font-size: 2vh\n}\n\n.details h2 {\n    text-align: center;\n    margin: auto;\n    padding-bottom: 2vh;\n    letter-spacing: 3px;\n    color: teal;\n    border-bottom: 1px solid rgba(151, 151, 151, 0.568);\n}\n\n.details h2 span {\n    font-size: 1.4vh;\n    color: rgb(90, 90, 90);\n    letter-spacing: 1px;\n}\n\n.details .stackable {\n    margin-top: 2vh;\n    font-size: 1.8vh;\n    font-family: ubuntu;\n    color: rgb(90, 90, 90)\n}\n\n.container .comment h3,\n.container .comment p {\n    font-size: 1.8vh;\n    font-family: ubuntu;\n    color: rgb(90, 90, 90)\n}\n\n.container .photos h3 {\n    font-family: ubuntu;\n    color: rgb(90, 90, 90)\n}\n\n.container div.photos {\n    white-space: nowrap;\n    overflow: auto;\n}\n\n.container div.photos .img-div {\n    display: inline-block;\n    padding-right: 1vw;\n    width: 15%;\n}\n\n.details,\n.comment,\n.photos {\n    padding: 3vh 3vw;\n    margin-bottom: 2vh;\n}\n\n\n/* .container div.photos .img-div img {\n    -webkit-transform: rotate(90deg);\n    -moz-transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/inventory-content/inventory-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\n  <button class=\"ui basic button\" routerLink='/main'>\n    <i class=\"angle left icon\"></i> return</button>\n  <div class=\"details ui segment\" >\n    <h2 class=\"ui header\">\n      <span>BARCODE ID</span>\n      <br> {{inventory.product.barcode_id}}</h2>\n    <div class=\"ui stackable grid\">\n      <div class=\"five wide column\">\n        <b>Name</b>\n        <p>{{inventory.product.item_name}}</p>\n      </div>\n      <div class=\"five wide column\">\n        <b>Price</b>\n        <p>{{inventory.product.price}}</p>\n      </div>\n      <div class=\"five wide column\">\n        <b>Quantity</b>\n        <p>{{inventory.qty}}</p>\n      </div>\n      <div class=\"five wide column\">\n        <b>Unit</b>\n        <p>{{inventory.unit}}</p>\n      </div>\n      <div class=\"five wide column\">\n        <b>Date</b>\n        <p>{{inventory.createdAt | date:'MMM d, y, h:mm a' }}</p>\n      </div>\n      <div class=\"twelve wide column\">\n        <b>Description</b>\n        <p>{{inventory.product.description}}</p>\n        <p *ngIf=\"!inventory.product.description\">( NONE )</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"comment ui segment\">\n    <h3>Comment</h3>\n    <div *ngIf=\"inventory.comment\">\n      <p>{{inventory.comment.msg}}</p>\n      <p *ngIf=\"!inventory.comment.msg\">( NONE )</p>\n    </div>\n  </div>\n\n  <div class=\"photos ui segment\">\n    <h3>Photos</h3>\n    <p *ngIf=\"inventory.photos.length < 1\">( NONE )</p>\n    <div *ngFor=\"let photo of inventory.photos\" class=\"img-div\">\n      <img class=\"ui medium bordered rounded medium image\"  [src]=\"photo.path\">\n    </div>\n\n  </div>\n\n\n  <div class=\"ui modal sample\">\n    <i class=\"close icon\"></i>\n    <div class=\"header\">\n      Modal Title\n    </div>\n    <div class=\"image content\">\n      <div class=\"image\">\n        An image can appear on left or an icon\n      </div>\n      <div class=\"description\">\n        A description can appear on the right\n      </div>\n    </div>\n    <div class=\"actions\">\n      <div class=\"ui button\">Cancel</div>\n      <div class=\"ui button\">OK</div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/inventory-content/inventory-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_inventory_service__ = __webpack_require__("../../../../../src/app/services/inventory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InventoryContentComponent = (function () {
    function InventoryContentComponent(route, inventoryService, socketService) {
        this.route = route;
        this.inventoryService = inventoryService;
        this.socketService = socketService;
        this.inventory = {
            _id: '',
            product: {
                item_name: '',
                barcode_id: 0,
                price: 0,
                description: '',
            },
            qty: 0,
            unit: '',
            createdAt: 0,
            comment: {
                msg: ''
            },
            photos: []
        };
    }
    InventoryContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.inventoryService.getInventory(param.id).subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    _this.inventory = data.result;
                }
                else {
                    alert(data.msg);
                }
            });
        });
        this.socketService.socket.on('newComment', function (data) {
            if (data._id === _this.inventory._id) {
                _this.inventory.comment.msg = data.comment.msg;
            }
        });
        this.socketService.socket.on('newPhoto', function (data) {
            console.log(data);
            if (data._id === _this.inventory._id) {
                _this.inventory.photos = data.photos;
            }
        });
    };
    return InventoryContentComponent;
}());
InventoryContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-inventory-content',
        template: __webpack_require__("../../../../../src/app/components/inventory-content/inventory-content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/inventory-content/inventory-content.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_inventory_service__["a" /* InventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_inventory_service__["a" /* InventoryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_socket_service__["a" /* SocketService */]) === "function" && _c || Object])
], InventoryContentComponent);

var _a, _b, _c;
//# sourceMappingURL=inventory-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/inventory/inventory.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    font-family: Roboto, Arial, sans-serif;\n    margin: 0;\n}\n\n.inventory-table {\n    margin-top: 7vh;\n    width: 90%;\n    margin: auto;\n    font-size: 1.8vh;\n    font-family: ubuntu\n}\n\ni.icon {\n    font-size: 1.8vh;\n    color: grey\n}\n\n.ui.label {\n    font-size: 1.5vh;\n    color: rgb(112, 109, 109)\n}\n\n.ui.label>.icon {\n    margin-right: 3px;\n}\n\n.unseen-row {\n    background-color: rgba(243, 243, 243, 0.808);\n    font-weight: 500;\n}\n\n.inventory-table{\n  margin-top: 4vh;\n}\n\n.inventory-table .ui.menu {\n    min-height: 2.457143em;\n}\n\n.inventory-table .ui.menu a {\n    padding: .5vh .7vw;\n}\n\n.inventory-table .ui.small.button {\n    font-size: 1.2vh;\n}\n\n.active.loader.cos-loader {\n    margin-top: 38vh;\n    /* padding: 10vh 0; */\n    border: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/inventory/inventory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui active centered inline loader cos-loader\" *ngIf=\"loading\"></div>\n\n<div class=\"inventory-table\" *ngIf=\"!loading\">\n  <table class=\"ui celled table\">\n    <thead>\n      <tr>\n        <th>Barcode ID</th>\n        <th>Item Name</th>\n        <th>Qty</th>\n        <th>Unit</th>\n        <th>Issues</th>\n        <th>Date</th>\n        <th></th>\n\n      </tr>\n    </thead>\n    <tbody>\n\n      <tr *ngFor=\"let i of inventoryInfo\" [ngClass]=\"{'unseen-row': !i.seen}\">\n        <td>{{ i.product.barcode_id }}</td>\n        <td>{{ i.product.item_name }}</td>\n        <td>{{ i.qty }}</td>\n        <td>{{ i.unit }}</td>\n        <td class=\"center\">\n          <div class=\"ui compact menu\" *ngIf=\"i.photos?.length > 0 || i.comment.msg \">\n            <a class=\"item\" *ngIf=\"i.photos?.length > 0\">\n              <i class=\"file image outline icon\"> </i>\n              {{i.photos.length}}\n            </a>\n\n            <a class=\"item\"  *ngIf=\"i.comment.msg\">\n              <i class=\"comment outline icon\"> </i>\n              <div class=\"floating ui red label\" *ngIf=\"!i.comment.seen\">new</div>\n            </a>\n          </div>\n        </td>\n        <td>{{ i.createdAt | date:'MMM d, y, h:mm a'}}</td>\n        <td>\n          <button class=\"ui teal button mini details\" routerLink=\"/inventory/{{i._id}}\"> Details </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<!--\n<button id=\"clicker\">\n  click\n</button> -->\n\n\n\n<div class=\"ui modal\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\">\n    Profile Picture\n  </div>\n  <div class=\"image content\">\n    <div class=\"ui medium image\">\n      <img src=\"http://res.cloudinary.com/dtygz6jv9/image/upload/t_media_lib_thumb/sample.jpg\">\n    </div>\n    <div class=\"description\">\n      <div class=\"ui header\">We've auto-chosen a profile image for you.</div>\n      <p>We've grabbed the following image from the\n        <a href=\"https://www.gravatar.com\" target=\"_blank\">gravatar</a> image associated with your registered e-mail address.</p>\n      <p>Is it okay to use this photo?</p>\n    </div>\n  </div>\n  <div class=\"actions\">\n    <div class=\"ui black deny button\">\n      Nope\n    </div>\n    <div class=\"ui positive right labeled icon button\">\n      Yep, that's me\n      <i class=\"checkmark icon\"></i>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/inventory/inventory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_inventory_service__ = __webpack_require__("../../../../../src/app/services/inventory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventoryComponent = (function () {
    function InventoryComponent(inventoryService, socketService) {
        this.inventoryService = inventoryService;
        this.socketService = socketService;
        this.loading = true;
        this.inventoryInfo = [];
    }
    InventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('.inventory-table').hide();
        this.inventoryService.getInventories().subscribe(function (data) {
            console.log('List of inventories', data.result);
            for (var i = 0; i < data.result.length; i++) {
                _this.inventoryInfo.push(data.result[i]);
            }
            setTimeout(function () {
                _this.loading = false;
                $('.inventory-table')
                    .transition('fade in');
            }, 500);
        });
        this.socketService.socket.on('newComment', function (data) {
            _this.updateObject(data);
        });
        this.socketService.socket.on('newPhoto', function (data) {
            _this.updateObject(data);
        });
        this.socketService.socket.on('newInventory', function (data) {
            _this.inventoryInfo.push(data);
        });
    };
    // To update specific object only
    InventoryComponent.prototype.updateObject = function (newItem) {
        var updateItem = this.inventoryInfo.find(this.findIndexToUpdate, newItem._id);
        var index = this.inventoryInfo.indexOf(updateItem);
        this.inventoryInfo[index] = newItem;
    };
    // Look for the index
    InventoryComponent.prototype.findIndexToUpdate = function (newItem) {
        return newItem._id === this;
    };
    InventoryComponent.prototype.details = function (id) {
        this.inventoryService.getInventory(id).subscribe(function (data) {
            console.log(data);
        });
    };
    return InventoryComponent;
}());
InventoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-inventory',
        template: __webpack_require__("../../../../../src/app/components/inventory/inventory.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/inventory/inventory.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_inventory_service__["a" /* InventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_inventory_service__["a" /* InventoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_socket_service__["a" /* SocketService */]) === "function" && _b || Object])
], InventoryComponent);

var _a, _b;
//# sourceMappingURL=inventory.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-tabs .ui.tabular.menu .item {\n    padding: 0 10vw;\n    color: red;\n}\n\n.main-tabs {\n    width: 85%;\n    margin: auto;\n    margin-top: 5vh\n}\n\n#tab1{\n  height:80vh;\n  overflow-y: auto;\n}\n\n\n.pointing.menu a.item.active {\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <sm-tabs>\n  <sm-tab title=\"Inventory\">\n  </sm-tab>\n  <sm-tab title=\"Product\">textsss..</sm-tab>\n</sm-tabs> -->\n\n<div class=\"main-tabs\">\n\n  <div class=\"ui pointing menu\">\n    <a class=\"item active\" data-tab=\"inventory-tab\">\n      Inventory\n    </a>\n    <!-- <a class=\"item\" data-tab=\"product-tab\">\n      Product\n    </a> -->\n    <div class=\"right menu\">\n      <div class=\"item\">\n        <div class=\"ui transparent icon input\">\n          <input type=\"text\" placeholder=\"Search ...\">\n          <i class=\"search link icon\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"ui segment active\" id=\"tab1\" data-tab=\"inventory-tab\">\n    <app-inventory></app-inventory>\n  </div>\n\n  <!-- <div class=\"ui segment\" data-tab=\"product-tab\">\n    <p>Product tab</p>\n  </div> -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/inventory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryService = (function () {
    function InventoryService(http) {
        this.http = http;
        // basePath = 'http://192.168.1.197:8080';
        this.basePath = 'https://inventory-control-app.herokuapp.com';
    }
    InventoryService.prototype.getInventories = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.basePath + '/inventory/items', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    InventoryService.prototype.getInventory = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.basePath + '/inventory/item/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return InventoryService;
}());
InventoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], InventoryService);

var _a;
//# sourceMappingURL=inventory.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsService = (function () {
    function ProductsService(http) {
        this.http = http;
        // basePath = 'http://192.168.1.197:8080';
        this.basePath = 'https://inventory-control-app.herokuapp.com';
    }
    ProductsService.prototype.getItems = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.basePath + '/product/items', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getItemByBarcode = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.basePath + '/product/item/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ProductsService;
}());
ProductsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductsService);

var _a;
//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService() {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__('https://inventory-control-app.herokuapp.com', {
            reconnect: true,
            transports: ['websocket'],
        });
    }
    return SocketService;
}());
SocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




// import 'angular2-notifications';
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map