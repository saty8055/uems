(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/booking/booking.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/booking/booking.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n <div class=\"table-responsive\">\n    <table class=\"table table-condensed table-bordered\">\n         <thead>\n             <tr>\n                 <th class=\"centered indexCell matchDouble\">#</th>\n                 <th class=\"extendedCell matchDouble\">Table No</th>\n                 <th class=\"centered\">Capacity</th>\n                 <th class=\"centered\">Restaurant Name</th>\n                 <th class=\"centered\">Price</th>\n                 <th class=\"centered\">From </th>\n                 <th class=\"centered\">To</th>\n                 <th class=\"centered\">Booked At</th>\n                 <th class=\"centered\" colspan=\"2\">Status</th>\n             </tr>\n         </thead>\n         <tbody>\n             <tr *ngFor=\"let record of bookings; let i=index;\">\n                 <th>{{i+1}}</th>\n                 <td>{{record.table.tableNum}}</td>\n                 <td>{{record.table.capacity}}</td>\n                 <td>{{record.table.restaurantName}}</td>\n                 <td>{{record.table.price| number :'.2-2'}}</td>\n                 <td>{{record.bookingFrom | date:'dd/MM/yyyy'}}</td>\n                 <td>{{record.bookingTo | date:'dd/MM/yyyy'}}</td>\n                 <td>{{record.createdAt | date:'dd/MM/yyyy - hh:mm aa'}}</td>\n                 <td *ngIf=\"!record.cancelled\">{{record.cancelled ? 'CANCELLED' : 'ACTIVE'}}</td>\n                 <td *ngIf=\"record.cancelled\" colspan=\"2\">{{record.cancelled ? 'CANCELLED' : 'ACTIVE'}}</td>\n                 <td *ngIf=\"!record.cancelled\"><button class=\"btn btnPrime\" (click)=\"cancel(record.bookingId)\" *ngIf=\"!record.cancelled\"><span class=\"fa fa-remove\"></span> Cancel</button></td>\n             </tr>\n             <tr *ngIf=\"bookings.length <1 \">\n                 <th colspan=\"13\">No Record found</th>\n                 </tr>\n         </tbody>\n     </table>\n  \n </div>\n \n <app-loader></app-loader>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Topbar -->\n<nav class=\"navbar navbar-fixed-top boxed\" style=\"z-index:10\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle topSpan\" (click)=\"toggleRightBar()\">\n                <span class=\"fa fa-user-circle\"></span>\n            </button>\n            <div class=\"navbar-brand\">\n                <div class=\"logoHolder\">\n                    <a class=\"btn\" (click)=\"toggleSideBar()\" [tooltip]=\"sideBar ? 'Hide Sidebar' : 'Open SideBar'\" placement=\"right\" show-delay=\"200\"><span class=\"fa fa-bars\"></span> </a>\n                    <img src=\"/assets/logo.png\" style=\"cursor: none;\">\n                    <a class=\"btn\" [tooltip]=\"sideBar ? 'HC MS' : 'HC MS'\" placement=\"right\" show-delay=\"200\" style=\"font-family: serif;\">ue-ms </a>\n                </div>\n                \n            </div>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><a (click)=\"activate('profile')\" [class.active]=\"key=='profile'\"><i class=\"fa fa-user-circle-o\"></i> Profile</a></li>\n                <li><a (click)=\"logout()\"><i class=\"fa fa-power-off\"></i> Logout</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<!-- SideBar -->\n<div class=\"sideBar boxed\" [class.sideBarOpen]=\"sideBar\" style=\"z-index:100\">\n    <a [class.active]=\"key=='tables'\" (click)=\"activate('tables')\" [class.centered]=\"!sideBar\" tooltip=\"Tables\" placement=\"right\" show-delay=\"200\">\n        <span class=\"sideIcon fa fa-address-card\" *ngIf=\"!sideBarMenu\"></span>\n        <span *ngIf=\"sideBarMenu\" class=\"fullLength\"> <span class=\"sideIconDefault fa fa-address-card\"></span> Tables</span>\n    </a>\n    <a [class.active]=\"key=='bookings'\" (click)=\"activate('bookings')\" [class.centered]=\"!sideBar\" tooltip=\"Bookings\" placement=\"right\" show-delay=\"200\">\n        <span class=\"sideIcon fa fa-plus\" *ngIf=\"!sideBarMenu\"></span>\n        <span *ngIf=\"sideBarMenu\" class=\"fullLength\"> <span class=\"sideIconDefault fa fa-plus\"></span> Bookings</span>\n    </a>\n</div>\n\n<!-- Right SideBar -->\n<div class=\"rightSideBar\" [class.rightSideBarOpen]=\"rightSideBar\" style=\"z-index:100\">\n    <a (click)=\"activate('profile')\" [class.active]=\"key=='profile'\">\n        <span class=\"fullLength\"> <span class=\"sideIconDefault fa fa-user-circle-o\"></span> Profile</span>\n    </a>\n    <a (click)=\"logout()\">\n        <span class=\"fullLength\"> <span class=\"sideIconDefault fa fa-power-off\"></span>Logout</span>\n    </a>\n</div>\n\n<div class=\"contentBox\" [class.contentWall]=\"sideBar\">\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/employee/employee.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/employee/employee.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-condensed\">\n    <thead>\n        <tr>\n            <th><button class=\"btn btnPrime fullCover\" data-toggle=\"modal\" data-target=\"#addFunds\"><span class=\"fa fa-plus\"></span> Add Customer</button></th>\n        </tr>\n    </thead>\n</table>\n\n\n<div class=\"table-responsive\">\n    <table class=\"table table-condensed table-bordered\">\n        <thead>\n            <tr>\n                <th class=\"centered indexCell matchDouble\">#</th>\n                <th class=\"extendedCell matchDouble\">Customer ID</th>\n                <th class=\"centered\">Name</th>\n                <th class=\"centered\">Phone</th>\n                <th class=\"centered\">e-Mail</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let record of funds; let i=index;\">\n                <th>{{i+1}}</th>\n                <td>{{record.customerId}}</td>\n                <td>{{record.name}}</td>\n                <td>{{record.phone}}</td>\n                <td>{{record.email}}</td>\n            </tr>\n            <tr *ngIf=\"funds.length <1 \">\n                <th colspan=\"5\">No Record found</th>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"addFunds\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content boxed\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title heading\">Add Customer !</h4>\n            </div>\n            <form [formGroup]=\"form\" (ngSubmit)=\"validateAndAdd()\">\n                <div class=\"modal-body\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n                        <input id=\"email\" type=\"text\" class=\"form-control\" formControlName=\"email\"\n                            placeholder=\"E-Mail\">\n                    </div>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-user-circle\"></i></span>\n                        <input id=\"fullName\" type=\"text\" class=\"form-control\" formControlName=\"name\"\n                            placeholder=\"Full Name\">\n                    </div>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-user-circle\"></i></span>\n                        <input id=\"phone\" type=\"text\" class=\"form-control\" formControlName=\"phone\"\n                            placeholder=\"Phone\">\n                    </div>\n                </div>\n                <div class=\"modal-footer centered\">\n                    <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" (click)=\"validateAndAdd()\">Add Customer</button>\n                </div>\n            </form>\n        </div>\n\n    </div>\n</div>\n\n<app-loader></app-loader>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/profile/profile.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/profile/profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"padding-top:100px;\">\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-lg-offset-3 col-md-offset-3 col-sm-12 col-xs-12\" style=\"overflow: auto;\">\n            <table class=\"dataGrid\" style=\"margin-left: calc(50% - 345px);\">\n                <thead>\n                    <tr>\n                        <th class=\"index\" colspan=\"2\">\n                            Personal Info\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th class=\"index\" style=\"width:150px;\">Name</th>\n                        <td style=\"width: 300px;\">{{user.fullName}}</td>\n                    </tr>\n                    <tr>\n                        <th class=\"index\">User Name</th>\n                        <td>{{user.username}}</td>\n                    </tr>\n                    <tr>\n                        <th class=\"index\">e-mail</th>\n                        <td>{{user.email}}</td>\n                    </tr>\n                    <tr>\n                        <th class=\"index\">Password</th>\n                        <td>\n                            <button class=\"btn\" data-toggle=\"modal\" data-target=\"#changePassword\">change</button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"changePassword\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content boxed\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title heading\">Change Password</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span>\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"oldPass\" placeholder=\"Current Password\">\n                </div>\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span>\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"pass\" placeholder=\"New Password\">\n                </div>\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span>\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"cPass\" placeholder=\"Confirm Password\">\n                </div>\n            </div>\n            <div class=\"modal-footer centered\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" (click)=\"changePassword()\"><span class=\"fa fa-plus-square\"></span> Change Password</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n\n<app-loader>\n</app-loader>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/services/services.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/services/services.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-condensed\">\n    <thead>\n        <tr>\n            <th><button class=\"btn btnPrime fullCover\" data-toggle=\"modal\" data-target=\"#addFunds\"><span class=\"fa fa-plus\"></span> Add Medicine</button></th>\n        </tr>\n    </thead>\n</table>\n\n\n<div class=\"table-responsive\">\n    <table class=\"table table-condensed table-bordered\">\n        <thead>\n            <tr>\n                <th class=\"centered indexCell matchDouble\">#</th>\n                <th class=\"extendedCell matchDouble\">Medicine ID</th>\n                <th class=\"centered\">Medicine Name</th>\n                <th class=\"centered\">Unit Price</th>\n                <th class=\"centered\">Stock</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let record of funds; let i=index;\">\n                <th>{{i+1}}</th>\n                <td>{{record.medicineId}}</td>\n                <td>{{record.medicineName}}</td>\n                <td>{{record.mrp}}</td>\n                <td>{{record.stock}}</td>\n            </tr>\n            <tr *ngIf=\"funds.length <1 \">\n                <th colspan=\"5\">No Record found</th>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"addFunds\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content boxed\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title heading\">Add Medicine !</h4>\n            </div>\n            <form [formGroup]=\"form\" (ngSubmit)=\"validateAndAdd()\">\n                <div class=\"modal-body\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-cog\"></i></span>\n                        <input id=\"medicineName\" type=\"text\" class=\"form-control\" formControlName=\"medicineName\"\n                            placeholder=\"Medicine Name\">\n                    </div>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-fax\"></i></span>\n                        <input id=\"mrp\" type=\"number\" class=\"form-control\" formControlName=\"mrp\"\n                            placeholder=\"MRP\">\n                    </div>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-fax\"></i></span>\n                        <input id=\"stock\" type=\"number\" class=\"form-control\" formControlName=\"stock\"\n                            placeholder=\"Stock\">\n                    </div>\n                </div>\n                <div class=\"modal-footer centered\">\n                    <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" (click)=\"validateAndAdd()\">Add Medicine</button>\n                </div>\n            </form>\n        </div>\n        \n    </div>\n</div>\n\n<app-loader></app-loader>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/table/table.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/table/table.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-condensed\">\n    <thead>\n        <tr>\n            <th><input class=\"form-control\" type=\"date\" [(ngModel)]=\"fromDate\"/></th>\n            <th><input class=\"form-control\" type=\"date\" [(ngModel)]=\"toDate\"/></th>\n            <th><button class=\"btn btnPrime fullCover\" (click)=\"validateAndSearch()\" ><span class=\"fa fa-eye\"></span> Search</button></th>\n        </tr>\n    </thead>\n</table>\n<div class=\"table-responsive\">\n    <table class=\"table table-condensed table-bordered\">\n        <thead>\n            <tr>\n                <th class=\"centered indexCell matchDouble\">#</th>\n                <th class=\"extendedCell matchDouble\">Table No</th>\n                <th class=\"centered\">Capacity</th>\n                <th class=\"centered\">Name</th>\n                <th class=\"centered\">Price</th>\n                <th class=\"centered\">Suite</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let record of rooms; let i=index;\">\n                <th>{{i+1}}</th>\n                <td>{{record.tableNum}}</td>\n                <td>{{record.capacity}}</td>\n                <td>{{record.restaurantName}}</td>\n                <td>{{record.price| number :'.2-2'}}</td>\n                <td><button class=\"btn btnPrime\" (click)=\"book(record.tableId)\"><span class=\"fa fa-save\"></span> Book</button></td>\n            </tr>\n            <tr *ngIf=\"rooms.length <1 \">\n                <th colspan=\"9\">No Record found</th>\n                </tr>\n        </tbody>\n    </table>\n</div>\n\n\n<app-loader></app-loader>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/tasks/tasks.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/tasks/tasks.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-condensed\">\n    <thead>\n        <tr>\n            <th><button class=\"btn btnPrime fullCover\" data-toggle=\"modal\" data-target=\"#addFunds\"><span class=\"fa fa-plus\"></span> Add New Sale</button></th>\n        </tr>\n    </thead>\n</table>\n\n\n<div class=\"table-responsive\">\n    <table class=\"table table-condensed table-bordered\">\n        <thead>\n            <tr>\n                <th class=\"centered indexCell matchDouble\">#</th>\n                <th class=\"extendedCell matchDouble\">Sale ID</th>\n                <th class=\"centered\">Units Sold</th>\n                <th class=\"centered\">Unit Price</th>\n                <th class=\"centered\">Total Price</th>\n                <th class=\"centered\">Medicine Name</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let record of funds; let i=index;\">\n                <th>{{i+1}}</th>\n                <td>{{record.saleId}}</td>\n                <td>{{record.units}}</td>\n                <td>{{record.medicine.mrp}}</td>\n                <td>{{record.medicine.medicineName * record.units}}</td>\n                <td>{{record.medicine.medicineName}}</td>\n            </tr>\n            <tr *ngIf=\"funds.length <1 \">\n                <th colspan=\"6\">No Record found</th>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"addFunds\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content boxed\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title heading\">Add Sale !</h4>\n            </div>\n                <div class=\"modal-body\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-info\"></i></span>\n                        <input id=\"name\" type=\"number\" class=\"form-control\"\n                            placeholder=\"Units\" [(ngModel)]=\"units\">\n                    </div>\n                    <div class=\"input-group\" style=\"width: 100%;\">\n                        <select class=\"form-control\"\n                        [(ngModel)]=\"medicineId\">\n                        <option value=\"noFilter\"> -- Select Employee -- </option>\n                        <option *ngFor=\"let medicine of medicines; let i=index;\" [value]=\"medicine.medicineId\">\n                            {{medicine.medicineName | titlecase}}</option>\n                    </select>\n                    </div>\n                </div>\n                <div class=\"modal-footer centered\">\n                    <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" (click)=\"validateAndAdd()\">Add Sale</button>\n                </div>\n        </div>\n\n    </div>\n</div>\n\n<app-loader></app-loader>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/f04/f04.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/f04/f04.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"f04Screen\">\n    <img src=\"assets/logo.png\">\n</div>\n<div class=\"f04Screen\">\n    <h1><br><br><br><br><br><br>Sorry, we could not find what you seek !</h1>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loaderScreen\" *ngIf=\"loading\">\n    <img src=\"assets/logo.png\" class=\"loader\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <div class=\"row content\">\n        <div class=\"col-lg-4 col-md-4 col-xs-12 col-sm-12 col-lg-offset-4 col-md-4\">\n            <div class=\"fullLength centered\">\n                <img src=\"/assets/logo.png\" class=\"fixedImage\">\n            </div>\n            <h3 class=\"dark centered\">Identity Please !</h3>\n            <form [formGroup]=\"form\" (ngSubmit)=\"confirmForLogin()\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-user-circle\"></i></span>\n                    <input id=\"username\" type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Username\">\n                </div>\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\" style=\"height: 40px;\"><i class=\"fa fa-lock\"></i></span>\n                    <input id=\"password\" [type]=\"showPass ? 'text' : 'password'\" class=\"form-control hasEyeBtn\" formControlName=\"password\" placeholder=\"Password\">\n                    <span class=\"input-group-addon eyeBtn\" style=\"height: 40px;\" (click)=\"togglePassword()\"><i class=\"fa fa-eye\" [class.fa-eye-slash]=\"showPass\"></i></span>\n                </div>\n                <div class=\"input-group fullLength\">\n                    <button class=\"btn btnPrime fullLength\">Login</button>\n                </div>\n                <div class=\"input-group fullLength\">\n                    <label class=\"left fullLength\"><span class=\"clickable fa\" [class.fa-square-o]=\"!remember\" [class.fa-check-square-o]=\"remember\" (click)=\"rememberMe()\"></span> Remember Me </label>\n                </div>\n                <div class=\"input-group fullLength\">\n                    <button type=\"button\" class=\"btn btnPrime fullLength\" (click)=\"goAndRegister()\">Register now ?</button>\n                </div>\n            </form>\n        </div>\n    </div>\n\n</div>\n\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"forgotPass\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content boxed\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title heading\">Reset Password !</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-user-circle\"></i></span>\n                    <input id=\"username\" type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Username\">\n                </div>\n            </div>\n            <div class=\"modal-footer centered\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" (click)=\"resetPassword()\">Send Reset Link</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n\n<app-loader></app-loader>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <div class=\"row content\">\n        <div class=\"col-lg-4 col-md-4 col-xs-12 col-sm-12 col-lg-offset-4 col-md-4\">\n            <div class=\"fullLength centered\">\n                <img src=\"/assets/logo.png\" class=\"fixedImage\">\n            </div>\n            <h3 class=\"dark centered\">Register here !</h3>\n            <form [formGroup]=\"form\" (ngSubmit)=\"confirmForRegister()\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-user-circle\"></i></span>\n                    <input id=\"username\" type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Username\">\n                </div>\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-user-circle\"></i></span>\n                    <input id=\"fullName\" type=\"text\" class=\"form-control\" formControlName=\"fullName\" placeholder=\"Full Name\">\n                </div>\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-user-circle\"></i></span>\n                    <input id=\"email\" type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"e-Mail\">\n                </div>\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\" style=\"height: 40px;\"><i class=\"fa fa-lock\"></i></span>\n                    <input id=\"password\" [type]=\"showPass ? 'text' : 'password'\" class=\"form-control hasEyeBtn\" formControlName=\"password\" placeholder=\"Password\">\n                    <span class=\"input-group-addon eyeBtn\" style=\"height: 40px;\" (click)=\"togglePassword()\"><i class=\"fa fa-eye\" [class.fa-eye-slash]=\"showPass\"></i></span>\n                </div>\n                <div class=\"input-group fullLength\">\n                    <button class=\"btn btnPrime fullLength\">Register</button>\n                </div>\n                <div class=\"input-group fullLength\">\n                    <label class=\"left fullLength\"><span class=\"clickable fa\" [class.fa-square-o]=\"!remember\" [class.fa-check-square-o]=\"remember\" (click)=\"rememberMe()\"></span> Remember Me </label>\n                </div>\n                <div class=\"input-group fullLength\">\n                    <button type=\"button\" class=\"btn btnPrime fullLength\" (click)=\"goAndLogin()\">Already Registered ?</button>\n                </div>\n            </form>\n        </div>\n    </div>\n\n</div>\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"forgotPass\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content boxed\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title heading\">Reset Password !</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-user-circle\"></i></span>\n                    <input id=\"username\" type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Username\">\n                </div>\n            </div>\n            <div class=\"modal-footer centered\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" (click)=\"resetPassword()\">Send Reset Link</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n\n<app-loader></app-loader>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset/reset.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset/reset.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <div class=\"row content\">\n        <div class=\"col-lg-4 col-md-4 col-xs-12 col-sm-12 col-lg-offset-4 col-md-4\">\n            <div class=\"fullLength centered\">\n                <img src=\"/assets/logo.png\" class=\"fixedImage\">\n            </div>\n            <h3 class=\"dark centered\">Reset Password !</h3>\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\" style=\"height: 40px;\"><i class=\"fa fa-lock\"></i></span>\n                <input id=\"password\" [type]=\"showPass ? 'text' : 'password'\" class=\"form-control hasEyeBtn\" [(ngModel)]=\"password\" placeholder=\"Password\">\n                <span class=\"input-group-addon eyeBtn\" style=\"height: 40px;\" (click)=\"togglePassword()\"><i class=\"fa fa-eye\" [class.fa-eye-slash]=\"showPass\"></i></span>\n            </div>\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\" style=\"height: 40px;\"><i class=\"fa fa-lock\"></i></span>\n                <input id=\"confirmPassword\" [type]=\"showPass ? 'text' : 'password'\" class=\"form-control hasEyeBtn\" [(ngModel)]=\"confirmPassword\" placeholder=\"Confirm Password\">\n                <span class=\"input-group-addon eyeBtn\" style=\"height: 40px;\" (click)=\"togglePassword()\"><i class=\"fa fa-eye\" [class.fa-eye-slash]=\"showPass\"></i></span>\n            </div>\n            <div class=\"input-group fullLength\">\n                <button class=\"btn btnPrime fullLength\" (click)=\"changePassword()\">Change Password</button>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"container-fluid\" style=\"margin-top:70px;\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 col-sm-12 col-xs-12 col-md-12 right smoky\">\n            <h5>Developed by <img src=\"/assets/megasys.ico\" class=\"credicon\" /> <span class=\"crediText\"> Megasys Infotech</span></h5>\n        </div>\n    </div>\n\n</div>\n\n<app-loader></app-loader>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _f04_f04_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./f04/f04.component */ "./src/app/f04/f04.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/reset/reset.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/table/table.component */ "./src/app/dashboard/table/table.component.ts");
/* harmony import */ var _dashboard_booking_booking_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/booking/booking.component */ "./src/app/dashboard/booking/booking.component.ts");












const routes = [{
        path: "",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        children: [{
                path: "profile",
                component: _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
            }, {
                path: "tables",
                component: _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"]
            }, {
                path: "bookings",
                component: _dashboard_booking_booking_component__WEBPACK_IMPORTED_MODULE_11__["BookingComponent"]
            }, {
                path: "",
                redirectTo: "/tables",
                pathMatch: "full"
            }],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    }, {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
    }, {
        path: "reset/:token",
        component: _reset_reset_component__WEBPACK_IMPORTED_MODULE_8__["ResetComponent"]
    },
    {
        path: '**',
        pathMatch: 'full',
        component: _f04_f04_component__WEBPACK_IMPORTED_MODULE_6__["F04Component"]
    }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ue-ms';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _services_tp_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/tp-interceptor.service */ "./src/app/services/tp-interceptor.service.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _f04_f04_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./f04/f04.component */ "./src/app/f04/f04.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/reset/reset.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _dashboard_employee_employee_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/employee/employee.component */ "./src/app/dashboard/employee/employee.component.ts");
/* harmony import */ var _dashboard_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/tasks/tasks.component */ "./src/app/dashboard/tasks/tasks.component.ts");
/* harmony import */ var _dashboard_services_services_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/services/services.component */ "./src/app/dashboard/services/services.component.ts");
/* harmony import */ var _dashboard_booking_booking_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/booking/booking.component */ "./src/app/dashboard/booking/booking.component.ts");
/* harmony import */ var _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/table/table.component */ "./src/app/dashboard/table/table.component.ts");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _loader_loader_component__WEBPACK_IMPORTED_MODULE_13__["LoaderComponent"],
            _f04_f04_component__WEBPACK_IMPORTED_MODULE_14__["F04Component"],
            _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
            _reset_reset_component__WEBPACK_IMPORTED_MODULE_17__["ResetComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
            _dashboard_employee_employee_component__WEBPACK_IMPORTED_MODULE_19__["EmployeeComponent"],
            _dashboard_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_20__["TasksComponent"],
            _dashboard_services_services_component__WEBPACK_IMPORTED_MODULE_21__["ServicesComponent"],
            _dashboard_booking_booking_component__WEBPACK_IMPORTED_MODULE_22__["BookingComponent"],
            _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_23__["TableComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                useClass: _services_tp_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["TpInterceptorServicer"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/booking/booking.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/booking/booking.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ib29raW5nL2Jvb2tpbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dashboard/booking/booking.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/booking/booking.component.ts ***!
  \********************************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notification-bot/bot.service */ "./src/app/services/notification-bot/bot.service.ts");





let BookingComponent = class BookingComponent {
    constructor(api, bot) {
        this.api = api;
        this.bot = bot;
        this.page = {};
        this.bookings = [];
        this.pageNumber = 0;
        this.pageSize = 50;
        this.sortBy = "bookingFrom";
        this.sortDirection = "desc";
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.loader.load();
        this.api.listBookings(this.pageNumber, this.pageSize, this.sortBy, this.sortDirection).subscribe(response => {
            this.loader.resume();
            this.api.validateResponse(response, data => {
                this.page.numberOfElements = data.numberOfElements;
                this.page.totalPages = data.totalPages;
                this.page.totalElements = data.totalElements;
                this.bookings = data.content;
            }, error => {
                this.bot.fail(error);
            });
        });
    }
    cancel(id) {
        this.loader.load();
        this.api.cancel(id).subscribe(response => {
            this.loader.resume();
            this.api.validateResponse(response, data => {
                this.bot.success("Booking Cancelled !");
                this.load();
            }, error => {
                this.bot.fail(error);
            });
        });
    }
};
BookingComponent.ctorParameters = () => [
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_4__["BotService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], { static: true })
], BookingComponent.prototype, "loader", void 0);
BookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-booking',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/booking/booking.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./booking.component.css */ "./src/app/dashboard/booking/booking.component.css")).default]
    })
], BookingComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sideIcon {\n    font-size: 25px;\n}\n\n.sideIconDefault {\n    width: 30px;\n}\n\n/*Imported Defaults for Navbar  */\n\n.navbar {\n    height: 70px;\n    padding: 5px;\n    padding-left: 0px;\n    background-color: white;\n    background-color: rgba(255, 255, 255, 1);\n}\n\n.navbar-brand {\n    padding: 0px;\n    margin-right: 15px;\n}\n\n.navbar>.container-fluid {\n    height: 60px;\n}\n\n.navbar-nav {\n    height: 30px;\n}\n\n.navbar-nav>li>a:hover {\n    font-size: 16px;\n    background: rgba(116, 20,20, 0.7);\n    border-radius: 2px;\n    color: white;\n}\n\n.navbar-nav>li>a {\n    color: rgba(116, 20,20);\n    font-size: 15px;\n}\n\n.navbar-nav>li>.active {\n    background: rgba(116, 20,20);\n    border-radius: 2px;\n    color: white;\n    font-weight: bold;\n}\n\n.navbar>.container-fluid>.navbar-collapse {\n    padding: 5px;\n    padding-left: 0px;\n}\n\n.logoHolder {\n    text-align: center;\n    padding: 0px;\n    overflow: hidden;\n    padding-right: 5px;\n    padding-left: 5px;\n    cursor: pointer;\n    max-width: 280px;\n    height: 62px;\n    display: inline-block;\n}\n\n.logoHolder>img {\n    height: 100%;\n    width: auto;\n    max-width: 100%;\n}\n\n.logoHolder>a {\n    background: transparent;\n    color: rgba(116, 20,20);\n    font-size: 25px;\n    height: 45px;\n    border-radius: 2px;\n    margin-right: 0px;\n}\n\n.topSpan {\n    font-size: 20px;\n}\n\n.logoHolder>a:hover {\n    color: white;\n    background: rgba(116, 20,20, 0.7);\n}\n\n.navbar-brand>.textGradient {\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 20px;\n}\n\n.stretch {\n    height: 75px;\n    background: white;\n}\n\n.contentBox {\n    min-height: 100px;\n    width: calc(100% - 70px);\n    margin-left: 70px;\n    margin-top: 70px;\n    padding: 10px;\n}\n\n.contentWall {\n    width: calc(100% - 207px);\n    margin-left: 207px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFHQSxpQ0FBaUM7O0FBRWpDO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZUljb24ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnNpZGVJY29uRGVmYXVsdCB7XG4gICAgd2lkdGg6IDMwcHg7XG59XG5cblxuLypJbXBvcnRlZCBEZWZhdWx0cyBmb3IgTmF2YmFyICAqL1xuXG4ubmF2YmFyIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5uYXZiYXI+LmNvbnRhaW5lci1mbHVpZCB7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubmF2YmFyLW5hdiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ubmF2YmFyLW5hdj5saT5hOmhvdmVyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTYsIDIwLDIwLCAwLjcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXZiYXItbmF2PmxpPmEge1xuICAgIGNvbG9yOiByZ2JhKDExNiwgMjAsMjApO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm5hdmJhci1uYXY+bGk+LmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTYsIDIwLDIwKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmF2YmFyPi5jb250YWluZXItZmx1aWQ+Lm5hdmJhci1jb2xsYXBzZSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4ubG9nb0hvbGRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICBoZWlnaHQ6IDYycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubG9nb0hvbGRlcj5pbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dvSG9sZGVyPmEge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiByZ2JhKDExNiwgMjAsMjApO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4udG9wU3BhbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubG9nb0hvbGRlcj5hOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTYsIDIwLDIwLCAwLjcpO1xufVxuXG4ubmF2YmFyLWJyYW5kPi50ZXh0R3JhZGllbnQge1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnN0cmV0Y2gge1xuICAgIGhlaWdodDogNzVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNvbnRlbnRCb3gge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb250ZW50V2FsbCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwN3B4KTtcbiAgICBtYXJnaW4tbGVmdDogMjA3cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/notification-bot/bot.service */ "./src/app/services/notification-bot/bot.service.ts");




let DashboardComponent = class DashboardComponent {
    constructor(router, bot) {
        this.router = router;
        this.bot = bot;
        this.sideBar = true;
        this.sideBarMenu = true;
        this.key = "";
        this.rightSideBar = false;
    }
    ngOnInit() {
        if (this.router.url.toString().includes("booking"))
            this.highlight("bookings");
        else if (this.router.url.toString().includes("table"))
            this.highlight("tables");
    }
    toggleSideBar() {
        this.sideBar = !this.sideBar;
        if (!this.sideBarMenu) {
            var interval = setInterval(() => {
                this.sideBarMenu = true;
                clearInterval(interval);
            }, 150);
        }
        else
            this.sideBarMenu = false;
    }
    isAdmin() {
        return localStorage.getItem("currentRole") == 'ADMIN';
    }
    highlight(key) {
        this.key = key;
    }
    activate(key) {
        this.key = key;
        this.router.navigateByUrl("/" + key);
    }
    logout() {
        localStorage.setItem("currentToken", undefined);
        this.bot.success("Logged out !");
        this.router.navigateByUrl("/login");
    }
    toggleRightBar() {
        this.rightSideBar = !this.rightSideBar;
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_3__["BotService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/dashboard/employee/employee.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/employee/employee.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/dashboard/employee/employee.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/employee/employee.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notification-bot/bot.service */ "./src/app/services/notification-bot/bot.service.ts");






let EmployeeComponent = class EmployeeComponent {
    constructor(formBuilder, api, bot) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.bot = bot;
        this.funds = [];
        this.form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.list();
    }
    list() {
        this.loader.load();
        this.api.listCustomer().subscribe(response => {
            this.loader.resume();
            this.api.validateResponse(response, data => {
                this.funds = data;
            }, error => {
                this.bot.fail(error);
            });
        });
    }
    validateAndAdd() {
        let funds = this.form.value;
        this.loader.load();
        this.api.addCustomer(funds).subscribe(response => {
            this.loader.resume();
            this.api.validateResponse(response, data => {
                this.funds.push(data);
                this.form.reset();
                this.bot.success("Customer Added!");
            }, error => {
                this.bot.fail(error);
            });
        });
    }
};
EmployeeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_5__["BotService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], { static: true })
], EmployeeComponent.prototype, "loader", void 0);
EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/employee/employee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee.component.css */ "./src/app/dashboard/employee/employee.component.css")).default]
    })
], EmployeeComponent);



/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".index {\n    text-align: left;\n}\n\n.dataGrid>tbody>tr>th,\n.dataGrid>tbody>tr>td {\n    padding-left: 10px;\n    padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5kZXgge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5kYXRhR3JpZD50Ym9keT50cj50aCxcbi5kYXRhR3JpZD50Ym9keT50cj50ZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_message_msg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/message/msg.service */ "./src/app/services/message/msg.service.ts");
/* harmony import */ var src_app_services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notification-bot/bot.service */ "./src/app/services/notification-bot/bot.service.ts");






let ProfileComponent = class ProfileComponent {
    constructor(bot, api, msg) {
        this.bot = bot;
        this.api = api;
        this.msg = msg;
        this.user = {};
        this.pass = "";
        this.cPass = "";
        this.oldPass = "";
    }
    ngOnInit() {
        this.api.getUser().subscribe(data => {
            this.loader.resume();
            this.user = data;
        }, error => {
            this.loader.resume();
            this.bot.fail(this.msg.show(error.error.status));
        });
    }
    changePassword() {
        if (this.cPass == this.pass && this.pass != "" && this.oldPass != "") {
            this.loader.load();
            this.api.updatePassword(this.pass, this.oldPass).subscribe(data => {
                this.pass = "";
                this.cPass = "";
                this.loader.resume();
                this.bot.success("Password Changed Successfully !");
            }, error => {
                this.pass = "";
                this.cPass = "";
                this.loader.resume();
                this.bot.fail(this.msg.show(error.error.status));
            });
        }
        else if (this.pass == "") {
            this.bot.fail("Password cannot be blank");
        }
        else if (this.cPass == "")
            this.bot.fail("Password cannot be blank");
        else if (this.oldPass == "")
            this.bot.fail("Current Password is required");
        else
            this.bot.fail("Passwords in both the fields should be equal");
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_5__["BotService"] },
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_services_message_msg_service__WEBPACK_IMPORTED_MODULE_4__["MsgService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], { static: true })
], ProfileComponent.prototype, "loader", void 0);
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/dashboard/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/dashboard/services/services.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/services/services.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/dashboard/services/services.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/services/services.component.ts ***!
  \**********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notification-bot/bot.service */ "./src/app/services/notification-bot/bot.service.ts");






let ServicesComponent = class ServicesComponent {
    constructor(formBuilder, api, bot) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.bot = bot;
        this.funds = [];
        this.form = this.formBuilder.group({
            medicineName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mrp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            stock: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.list();
    }
    list() {
        this.loader.load();
        this.api.listMedicines().subscribe(response => {
            this.loader.resume();
            this.api.validateResponse(response, data => {
                this.funds = data;
            }, error => {
                this.bot.fail(error);
            });
        });
    }
    validateAndAdd() {
        let funds = this.form.value;
        this.loader.load();
        this.api.addMedicine(funds).subscribe(response => {
            this.loader.resume();
            this.api.validateResponse(response, data => {
                this.funds.push(data);
                this.form.reset();
                this.bot.success("Medicine Added!");
            }, error => {
                this.bot.fail(error);
            });
        });
    }
};
ServicesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_5__["BotService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], { static: true })
], ServicesComponent.prototype, "loader", void 0);
ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/services/services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services.component.css */ "./src/app/dashboard/services/services.component.css")).default]
    })
], ServicesComponent);



/***/ }),

/***/ "./src/app/dashboard/table/table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/table/table.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/dashboard/table/table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/table/table.component.ts ***!
  \****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notification-bot/bot.service */ "./src/app/services/notification-bot/bot.service.ts");





let TableComponent = class TableComponent {
    constructor(api, bot) {
        this.api = api;
        this.bot = bot;
        this.rooms = [];
    }
    ngOnInit() {
    }
    validateAndSearch() {
        if (this.fromDate == undefined)
            this.bot.fail("Select From Date !");
        else if (this.toDate == undefined)
            this.bot.fail("Select To Date !");
        else
            this.list();
    }
    list() {
        this.loader.load();
        this.api.listRooms(this.fromDate, this.toDate).subscribe(response => {
            this.persistedFromDate = this.fromDate;
            this.persistedToDate = this.toDate;
            this.loader.resume();
            this.api.validateResponse(response, data => {
                this.rooms = data;
            }, error => {
                this.bot.fail(error);
            });
        });
    }
    book(id) {
        let booking = {};
        let table = {};
        table.tableId = id;
        booking.bookingFrom = this.persistedFromDate;
        booking.bookingTo = this.persistedToDate;
        booking.table = table;
        this.loader.load();
        this.api.book(booking).subscribe(response => {
            this.loader.resume();
            this.api.validateResponse(response, data => {
                this.rooms = this.rooms.filter(room => room.tableId != id);
            }, error => this.bot.fail(error));
        });
    }
};
TableComponent.ctorParameters = () => [
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_4__["BotService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], { static: true })
], TableComponent.prototype, "loader", void 0);
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/table/table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.component.css */ "./src/app/dashboard/table/table.component.css")).default]
    })
], TableComponent);



/***/ }),

/***/ "./src/app/dashboard/tasks/tasks.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/tasks/tasks.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC90YXNrcy90YXNrcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/dashboard/tasks/tasks.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/tasks/tasks.component.ts ***!
  \****************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notification-bot/bot.service */ "./src/app/services/notification-bot/bot.service.ts");






let TasksComponent = class TasksComponent {
    constructor(formBuilder, api, bot) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.bot = bot;
        this.taskName = "";
        this.units = 1;
        this.medicineId = "";
        this.funds = [];
        this.medicines = [];
    }
    ngOnInit() {
        this.list();
        this.listMedicines();
    }
    listMedicines() {
        this.loader.load();
        this.api.listMedicines().subscribe(response => {
            this.loader.resume();
            this.api.validateResponse(response, data => {
                this.medicines = data;
            }, error => {
                this.bot.fail(error);
            });
        });
    }
    list() {
        this.loader.load();
        this.api.listSales().subscribe(response => {
            this.loader.resume();
            this.api.validateResponse(response, data => {
                this.funds = data;
            }, error => {
                this.bot.fail(error);
            });
        });
    }
    validateAndAdd() {
        let tasks = {};
        tasks.taskName = this.taskName;
        tasks.units = this.units;
        tasks.medicine = {
            medicineId: this.medicineId
        };
        this.loader.load();
        this.api.addSales(tasks).subscribe(response => {
            this.loader.resume();
            this.api.validateResponse(response, data => {
                this.funds.push(data);
                this.form.reset();
                this.bot.success("Sales Added!");
            }, error => {
                this.bot.fail(error);
            });
        });
    }
};
TasksComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_5__["BotService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], { static: true })
], TasksComponent.prototype, "loader", void 0);
TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tasks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tasks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/tasks/tasks.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tasks.component.css */ "./src/app/dashboard/tasks/tasks.component.css")).default]
    })
], TasksComponent);



/***/ }),

/***/ "./src/app/f04/f04.component.css":
/*!***************************************!*\
  !*** ./src/app/f04/f04.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".f04Screen {\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    position: fixed;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n}\n\nimg {\n    height: auto;\n    width: auto;\n    max-width: 150px;\n    max-height: 150px;\n}\n\nh1 {\n    font-weight: bold;\n    color: rgba(14, 98, 81, 0.5);\n    -webkit-text-stroke: 2px rgba(7, 29, 9, 1);\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZjA0L2YwNC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztJQUNQLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QiwwQ0FBMEM7SUFDMUMsc0hBQXNIO0FBQzFIIiwiZmlsZSI6InNyYy9hcHAvZjA0L2YwNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmYwNFNjcmVlbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbmgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcmdiYSgxNCwgOTgsIDgxLCAwLjUpO1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCByZ2JhKDcsIDI5LCA5LCAxKTtcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/f04/f04.component.ts":
/*!**************************************!*\
  !*** ./src/app/f04/f04.component.ts ***!
  \**************************************/
/*! exports provided: F04Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F04Component", function() { return F04Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let F04Component = class F04Component {
    constructor() { }
    ngOnInit() {
    }
};
F04Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-f04',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./f04.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/f04/f04.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./f04.component.css */ "./src/app/f04/f04.component.css")).default]
    })
], F04Component);



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loaderScreen {\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    position: fixed;\n    z-index: 100000;\n    text-align: center;\n    background: rgba(40, 40, 40, 0.5);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n}\n\n.loaderScreen>img {\n    height: auto;\n    width: auto;\n    max-width: 150px;\n    max-height: 150px;\n}\n\n.loaderScreen>h1 {\n    font-weight: bold;\n    color: rgba(255, 255, 255, 0.5);\n    -webkit-text-stroke: 2px rgba(40, 40, 40, 1);\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.loader {\n    -webkit-animation: spin 1s infinite;\n            animation: spin 1s infinite;\n}\n\n@-webkit-keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n    50% {\n        transform: rotate(180deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n    50% {\n        transform: rotate(180deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztJQUNQLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsK0JBQStCO0lBQy9CLDRDQUE0QztJQUM1QyxzSEFBc0g7QUFDMUg7O0FBRUE7SUFDSSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7O0FBVkE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXJTY3JlZW4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTAwMDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA0MCwgNDAsIDAuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5sb2FkZXJTY3JlZW4+aW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuLmxvYWRlclNjcmVlbj5oMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggcmdiYSg0MCwgNDAsIDQwLCAxKTtcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG4ubG9hZGVyIHtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoaderComponent = class LoaderComponent {
    constructor() {
        this.loading = false;
        this.loadingText = "";
    }
    ngOnInit() {
    }
    load() {
        this.loading = true;
        this.loadingText = undefined;
    }
    loadFor(text) {
        this.loading = true;
        this.loadingText = text;
    }
    resume() {
        this.loading = false;
        this.loadingText = undefined;
    }
};
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")).default]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/notification-bot/bot.service */ "./src/app/services/notification-bot/bot.service.ts");
/* harmony import */ var _services_validator_validator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/validator/validator.service */ "./src/app/services/validator/validator.service.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _services_message_msg_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/message/msg.service */ "./src/app/services/message/msg.service.ts");










let LoginComponent = class LoginComponent {
    constructor(http, router, formBuilder, api, bot, validator, msg) {
        this.http = http;
        this.router = router;
        this.formBuilder = formBuilder;
        this.api = api;
        this.bot = bot;
        this.validator = validator;
        this.msg = msg;
        this.remember = false;
        this.showPass = false;
        this.username = "";
        this.form = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    goAndRegister() {
        this.router.navigateByUrl("/register");
    }
    ngOnInit() {
        if (localStorage.getItem('currentToken')) {
        }
        if (localStorage.getItem('remember') == "true") {
            var myUser = localStorage.getItem("savedUser");
            var myPass = localStorage.getItem("savedPassword");
            if (this.validator.isNotBlank(myUser) && this.validator.isNotBlank(myPass)) {
                this.form.patchValue({
                    username: myUser,
                    password: myPass
                });
                this.remember = true;
            }
        }
    }
    confirmForLogin() {
        if (this.form.get('username').value == "")
            this.bot.fail("Please enter a valid username !");
        else if (this.form.get('password').value == "")
            this.bot.fail("Please enter a valid password !");
        else
            this.login();
    }
    login() {
        this.loader.load();
        this.api.login(this.form.value).subscribe(response => {
            this.api.validateResponse(response, data => {
                this.loader.resume();
                if (this.remember) {
                    localStorage.setItem("savedUser", this.form.get("username").value);
                    localStorage.setItem("savedPassword", this.form.get("password").value);
                }
                localStorage.setItem('currentToken', data.token);
                localStorage.setItem('currentRole', data.user.role);
                this.router.navigateByUrl("/");
            }, error => {
                this.loader.resume();
                this.bot.fail(error);
            });
        });
    }
    rememberMe() {
        localStorage.setItem("savedUser", this.form.get("username").value);
        localStorage.setItem("savedPassword", this.form.get("password").value);
        this.remember = !this.remember;
        localStorage.setItem("remember", this.remember.toString());
    }
    togglePassword() {
        this.showPass = !this.showPass;
    }
    resetPassword() {
        if (this.username == "")
            this.bot.fail("Please enter a username first !");
        else {
            this.api.forgot(this.username).subscribe(data => {
                this.bot.alert("The reset link has been sent to your registered e-mail !");
            }, error => {
                this.bot.fail(this.msg.show(error.error.status));
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_6__["BotService"] },
    { type: _services_validator_validator_service__WEBPACK_IMPORTED_MODULE_7__["ValidatorService"] },
    { type: _services_message_msg_service__WEBPACK_IMPORTED_MODULE_9__["MsgService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"], { static: true })
], LoginComponent.prototype, "loader", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/notification-bot/bot.service */ "./src/app/services/notification-bot/bot.service.ts");
/* harmony import */ var _services_validator_validator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/validator/validator.service */ "./src/app/services/validator/validator.service.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _services_message_msg_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/message/msg.service */ "./src/app/services/message/msg.service.ts");










let RegisterComponent = class RegisterComponent {
    constructor(http, router, formBuilder, api, bot, validator, msg) {
        this.http = http;
        this.router = router;
        this.formBuilder = formBuilder;
        this.api = api;
        this.bot = bot;
        this.validator = validator;
        this.msg = msg;
        this.remember = false;
        this.showPass = false;
        this.username = "";
        this.form = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        if (localStorage.getItem('currentToken')) {
        }
        if (localStorage.getItem('remember') == "true") {
            var myUser = localStorage.getItem("savedUser");
            var myPass = localStorage.getItem("savedPassword");
            if (this.validator.isNotBlank(myUser) && this.validator.isNotBlank(myPass)) {
                this.form.patchValue({
                    username: myUser,
                    password: myPass
                });
                this.remember = true;
            }
        }
    }
    goAndLogin() {
        this.router.navigateByUrl("/login");
    }
    confirmForRegister() {
        if (this.form.get('username').value == "")
            this.bot.fail("Please enter a valid username !");
        else if (this.form.get('password').value == "")
            this.bot.fail("Please enter a valid password !");
        else if (this.form.get('fullName').value == "")
            this.bot.fail("Please enter a valid full name !");
        else if (this.form.get('email').value == "")
            this.bot.fail("e-mail cannot be blank !");
        else
            this.signUp();
    }
    signUp() {
        this.loader.load();
        this.api.signUp(this.form.value).subscribe(response => {
            this.api.validateResponse(response, data => {
                this.loader.resume();
                if (this.remember) {
                    localStorage.setItem("savedUser", this.form.get("username").value);
                    localStorage.setItem("savedPassword", this.form.get("password").value);
                }
                localStorage.setItem('currentToken', data.token);
                localStorage.setItem('currentRole', data.user.role);
                this.router.navigateByUrl("/");
            }, error => {
                this.loader.resume();
                this.bot.fail(error);
            });
        });
    }
    rememberMe() {
        localStorage.setItem("savedUser", this.form.get("username").value);
        localStorage.setItem("savedPassword", this.form.get("password").value);
        this.remember = !this.remember;
        localStorage.setItem("remember", this.remember.toString());
    }
    togglePassword() {
        this.showPass = !this.showPass;
    }
    resetPassword() {
        if (this.username == "")
            this.bot.fail("Please enter a username first !");
        else {
            this.api.forgot(this.username).subscribe(data => {
                this.bot.alert("The reset link has been sent to your registered e-mail !");
            }, error => {
                this.bot.fail(this.msg.show(error.error.status));
            });
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_6__["BotService"] },
    { type: _services_validator_validator_service__WEBPACK_IMPORTED_MODULE_7__["ValidatorService"] },
    { type: _services_message_msg_service__WEBPACK_IMPORTED_MODULE_9__["MsgService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"], { static: true })
], RegisterComponent.prototype, "loader", void 0);
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/reset/reset.component.css":
/*!*******************************************!*\
  !*** ./src/app/reset/reset.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0L3Jlc2V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/reset/reset.component.ts":
/*!******************************************!*\
  !*** ./src/app/reset/reset.component.ts ***!
  \******************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _services_message_msg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/message/msg.service */ "./src/app/services/message/msg.service.ts");
/* harmony import */ var _services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/notification-bot/bot.service */ "./src/app/services/notification-bot/bot.service.ts");







let ResetComponent = class ResetComponent {
    constructor(bot, msg, api, route) {
        this.bot = bot;
        this.msg = msg;
        this.api = api;
        this.route = route;
        this.password = "";
        this.confirmPassword = "";
        this.showPass = false;
        this.route.params.subscribe(val => {
            this.token = this.route.snapshot.paramMap.get("token");
        });
    }
    ngOnInit() {
    }
    togglePassword() {
        this.showPass = !this.showPass;
    }
    changePassword() {
        if (this.password != "" && this.confirmPassword == this.password) {
            this.api.reset(this.password, this.token).subscribe(data => {
                this.bot.success("Password has been changed successfully !");
            }, error => {
                this.bot.fail(this.msg.show(error.error.status));
            });
        }
        else if (this.password == "")
            this.bot.fail("Password cannot be blank");
        else
            this.bot.fail("Password should be same in both the fields !");
    }
};
ResetComponent.ctorParameters = () => [
    { type: _services_notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_6__["BotService"] },
    { type: _services_message_msg_service__WEBPACK_IMPORTED_MODULE_5__["MsgService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], { static: true })
], ResetComponent.prototype, "loader", void 0);
ResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset/reset.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset.component.css */ "./src/app/reset/reset.component.css")).default]
    })
], ResetComponent);



/***/ }),

/***/ "./src/app/services/api/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = 
/***
 * @description Service to perform API related Ops...
 */
class ApiService {
    constructor(http) {
        this.http = http;
        this.HOST = "http://localhost:8065";
        this.SECURE = this.HOST + "/api";
        this.LOGIN_URL = this.HOST + "/login";
        this.SIGNUP_URL = this.HOST + "/signUp";
        this.LOOKUP_URL = this.HOST + "/lookup";
        this.PROFILE_URL = this.SECURE + "/profile";
        this.FUNDS_URL = this.SECURE + "/funds";
        this.FUND_RAISER_URL = this.FUNDS_URL + "/raiser";
        this.CUSTOMER_URL = this.SECURE + "/customer";
        this.SALES_URL = this.SECURE + "/sales";
        this.MEDICINE_URL = this.SECURE + "/medicine";
        this.FORGOT_URL = this.HOST + "/public/forgot";
        this.BOOKING_URL = this.SECURE + "/booking";
        this.ROOM_URL = this.SECURE + "/table";
        this.RESET_URL = this.HOST + "/public/reset";
    }
    addCustomer(data) {
        return this.http.post(this.CUSTOMER_URL, data);
    }
    book(booking) {
        return this.http.post(this.BOOKING_URL, booking);
    }
    listBookings(pageNumber, pageSize, sortBy, sortDirection) {
        return this.http.get(this.BOOKING_URL + "/mine?pageNumber=" + pageNumber + "&pageSize=" + pageSize + "&sortBy=" + sortBy + "&sortDirection=" + sortDirection);
    }
    listRooms(bookingFrom, bookingTo) {
        return this.http.get(this.ROOM_URL + "/query?from=" + bookingFrom + "&to=" + bookingTo);
    }
    cancel(bookingId) {
        return this.http.put(this.BOOKING_URL + "/" + bookingId, {});
    }
    addMedicine(data) {
        return this.http.post(this.MEDICINE_URL, data);
    }
    addSales(data) {
        return this.http.post(this.SALES_URL, data);
    }
    listCustomer() {
        return this.http.get(this.CUSTOMER_URL);
    }
    listMedicines() {
        return this.http.get(this.MEDICINE_URL);
    }
    listSales() {
        return this.http.get(this.SALES_URL);
    }
    forgot(username) {
        return this.http.get(this.FORGOT_URL + "/" + username);
    }
    reset(password, token) {
        return this.http.post(this.RESET_URL + "/" + token, { "password": password });
    }
    login(form) {
        return this.http.post(this.LOGIN_URL, form);
    }
    signUp(form) {
        return this.http.post(this.SIGNUP_URL, form);
    }
    isLoggedIn() {
        let token = localStorage.getItem("currentToken");
        return !(token == null || token == "null" || token == "undefined" || token == undefined);
    }
    lookUpUsername(username) {
        return this.http.get(this.LOOKUP_URL + "/username/" + username);
    }
    lookUpEmail(email) {
        return this.http.get(this.LOOKUP_URL + "/email/" + email);
    }
    getUser() {
        return this.http.get(this.PROFILE_URL);
    }
    updatePassword(newPassword, oldPassword) {
        return this.http.put(this.PROFILE_URL, { password: newPassword, oldPassword: oldPassword });
    }
    validateResponse(response, successCall, failureCall) {
        try {
            var str = JSON.stringify(response);
            JSON.parse(str);
        }
        catch (e) {
            failureCall("Unexpected Error!");
        }
        if (response.error)
            failureCall(response.message);
        else
            successCall(response);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
    /***
     * @description Service to perform API related Ops...
     */
], ApiService);



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification-bot/bot.service */ "./src/app/services/notification-bot/bot.service.ts");





let AuthGuardService = class AuthGuardService {
    constructor(router, api, bot) {
        this.router = router;
        this.api = api;
        this.bot = bot;
    }
    canActivate(route, state) {
        let token = localStorage.getItem("currentToken");
        let currentRole = localStorage.getItem("currentRole");
        if (token == null || token == "null" || token == "undefined" || token == undefined || (currentRole != "ADMIN" && currentRole != "AUDITOR")) {
            this.router.navigateByUrl("/login");
            return false;
        }
        let status = this.api.isLoggedIn();
        if (!status) {
            this.router.navigateByUrl("/login");
        }
        return status;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_4__["BotService"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/services/message/msg.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/message/msg.service.ts ***!
  \*************************************************/
/*! exports provided: MsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgService", function() { return MsgService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MsgService = class MsgService {
    constructor() {
        this.bean = {
            401: "Session Expired ! Please try loggin in again...",
            403: "Access Denied !",
            500: "Internal Server Error !",
            400: "Invalid Data !"
        };
    }
    show(code) {
        console.log("Nothing for " + code);
        return this.bean[code] != undefined ? this.bean[code] : "Unable to connect to server !";
    }
};
MsgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MsgService);



/***/ }),

/***/ "./src/app/services/notification-bot/bot.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/notification-bot/bot.service.ts ***!
  \**********************************************************/
/*! exports provided: BotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotService", function() { return BotService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");



let BotService = class BotService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    success(msg) {
        this.toastr.success(msg, 'success', {
            timeOut: 3600,
            positionClass: 'toast-top-right',
            progressBar: true,
            closeButton: true,
        });
    }
    fail(msg) {
        this.toastr.error(msg, 'Error', {
            timeOut: 3600,
            positionClass: 'toast-top-right',
            progressBar: true,
            closeButton: true,
        });
    }
    warn(msg) {
        this.toastr.warning(msg, 'Warning', {
            timeOut: 3600,
            positionClass: 'toast-top-right',
            progressBar: true,
            closeButton: true,
        });
    }
    alert(msg) {
        this.toastr.info(msg, 'Info', {
            timeOut: 3600,
            positionClass: 'toast-top-right',
            progressBar: true,
            closeButton: true,
        });
    }
};
BotService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
BotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BotService);



/***/ }),

/***/ "./src/app/services/tp-interceptor.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/tp-interceptor.service.ts ***!
  \****************************************************/
/*! exports provided: TpInterceptorServicer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TpInterceptorServicer", function() { return TpInterceptorServicer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification-bot/bot.service */ "./src/app/services/notification-bot/bot.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let TpInterceptorServicer = class TpInterceptorServicer {
    constructor(bot, router) {
        this.bot = bot;
        this.router = router;
    }
    intercept(request, next) {
        const token = window.localStorage.getItem("currentToken");
        if (token) {
            request = request.clone({
                setHeaders: {
                    X_ACCESS_TOKEN: token
                }
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
            }
        }, error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (error.status == 401) {
                    localStorage.setItem("currentToken", undefined);
                    this.router.navigateByUrl("/login");
                }
            }
        }));
    }
};
TpInterceptorServicer.ctorParameters = () => [
    { type: _notification_bot_bot_service__WEBPACK_IMPORTED_MODULE_4__["BotService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TpInterceptorServicer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TpInterceptorServicer);



/***/ }),

/***/ "./src/app/services/validator/validator.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/validator/validator.service.ts ***!
  \*********************************************************/
/*! exports provided: ValidatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorService", function() { return ValidatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValidatorService = class ValidatorService {
    constructor() { }
    notNull(value) {
        return !(value == "undefined" || value == undefined || value == null || value == "null");
    }
    isNotBlank(value) {
        return this.notNull(value) && value != "";
    }
    getFactors(t) {
        let time = new Date(t);
        let factor = {};
        factor.hour = time.getHours();
        factor.minute = time.getMinutes();
        return factor;
    }
    isEmail(search) {
        var eFlag;
        let reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        eFlag = reg.test(search);
        return eFlag;
    }
    getRandomString(length) {
        let text = "fe_temp_";
        let possible = "qwertyuiplkjhgfdsazxcvbnm_-";
        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
};
ValidatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ValidatorService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiHost: "http://localhost:8055"
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shadow/Desktop/Sandbox/UE-MS/ue-ms/src/main/ue-ms/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map