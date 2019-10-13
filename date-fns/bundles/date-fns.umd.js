(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@nebular/theme'), require('date-fns/parse'), require('date-fns/format'), require('date-fns/getWeek')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@nebular/theme', 'date-fns/parse', 'date-fns/format', 'date-fns/getWeek'], factory) :
	(factory((global.nb = global.nb || {}, global.nb['date-fns'] = global.nb['date-fns'] || {}),global.ng.core,global.nb.theme,global['date-fns'].parse,global['date-fns'].format,global['date-fns'].getWeek));
}(this, (function (exports,_angular_core,_nebular_theme,rollupParse,rollupFormat,rollupGetWeek) { 'use strict';

var rollupParse__default = rollupParse['default'];
var rollupFormat__default = rollupFormat['default'];
var rollupGetWeek__default = rollupGetWeek['default'];

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// @ts-ignore
// @ts-ignore
// @ts-ignore
var parse = rollupParse__default || rollupParse;
var formatDate = rollupFormat__default || rollupFormat;
var getWeek = rollupGetWeek__default || rollupGetWeek;
var NbDateFnsDateService = /** @class */ (function (_super) {
    __extends(NbDateFnsDateService, _super);
    function NbDateFnsDateService(locale, options) {
        var _this = _super.call(this, locale) || this;
        _this.setLocale(locale);
        _this.options = options || {};
        return _this;
    }
    NbDateFnsDateService.prototype.format = function (date, format) {
        if (date) {
            return formatDate(date, format || this.options.format, this.options.formatOptions);
        }
        return '';
    };
    NbDateFnsDateService.prototype.parse = function (date, format) {
        return parse(date, format || this.options.format, new Date(), this.options.parseOptions);
    };
    NbDateFnsDateService.prototype.getId = function () {
        return 'date-fns';
    };
    NbDateFnsDateService.prototype.getWeekNumber = function (date) {
        return getWeek(date, this.options.getWeekOptions);
    };
    NbDateFnsDateService = __decorate([
        _angular_core.Injectable(),
        __param(0, _angular_core.Inject(_angular_core.LOCALE_ID)),
        __param(1, _angular_core.Optional()), __param(1, _angular_core.Inject(_nebular_theme.NB_DATE_SERVICE_OPTIONS)),
        __metadata("design:paramtypes", [String, Object])
    ], NbDateFnsDateService);
    return NbDateFnsDateService;
}(_nebular_theme.NbNativeDateService));

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var dateFnsServiceProvider = { provide: _nebular_theme.NbDateService, useClass: NbDateFnsDateService };
var NbDateFnsDateModule = /** @class */ (function () {
    function NbDateFnsDateModule() {
    }
    NbDateFnsDateModule_1 = NbDateFnsDateModule;
    NbDateFnsDateModule.forRoot = function (options) {
        return {
            ngModule: NbDateFnsDateModule_1,
            providers: [
                dateFnsServiceProvider,
                { provide: _nebular_theme.NB_DATE_SERVICE_OPTIONS, useValue: options },
            ],
        };
    };
    NbDateFnsDateModule.forChild = function (options) {
        return {
            ngModule: NbDateFnsDateModule_1,
            providers: [
                dateFnsServiceProvider,
                { provide: _nebular_theme.NB_DATE_SERVICE_OPTIONS, useValue: options },
            ],
        };
    };
    var NbDateFnsDateModule_1;
    NbDateFnsDateModule = NbDateFnsDateModule_1 = __decorate$1([
        _angular_core.NgModule({
            providers: [dateFnsServiceProvider],
        })
    ], NbDateFnsDateModule);
    return NbDateFnsDateModule;
}());

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Generated bundle index. Do not edit.
 */

exports.NbDateFnsDateService = NbDateFnsDateService;
exports.NbDateFnsDateModule = NbDateFnsDateModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
