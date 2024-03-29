import { Inject, Injectable, LOCALE_ID, NgModule } from '@angular/core';
import { TranslationWidth } from '@angular/common';
import { NbDateService } from 'nebular-dist/theme';
import * as _rollupMoment from 'moment';
import _rollupMoment__default from 'moment';

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
var moment = _rollupMoment__default || _rollupMoment;
var NbMomentDateService = /** @class */ (function (_super) {
    __extends(NbMomentDateService, _super);
    function NbMomentDateService(locale) {
        var _this = _super.call(this) || this;
        _this.setLocale(locale);
        return _this;
    }
    NbMomentDateService.prototype.setLocale = function (locale) {
        _super.prototype.setLocale.call(this, locale);
        this.setMomentLocaleData(locale);
    };
    NbMomentDateService.prototype.addDay = function (date, days) {
        return this.clone(date).add({ days: days });
    };
    NbMomentDateService.prototype.addMonth = function (date, months) {
        return this.clone(date).add({ months: months });
    };
    NbMomentDateService.prototype.addYear = function (date, years) {
        return this.clone(date).add({ years: years });
    };
    NbMomentDateService.prototype.clone = function (date) {
        return date.clone().locale(this.locale);
    };
    NbMomentDateService.prototype.compareDates = function (date1, date2) {
        return this.getYear(date1) - this.getYear(date2) ||
            this.getMonth(date1) - this.getMonth(date2) ||
            this.getDate(date1) - this.getDate(date2);
    };
    NbMomentDateService.prototype.createDate = function (year, month, date) {
        return moment([year, month, date]);
    };
    NbMomentDateService.prototype.format = function (date, format) {
        if (date) {
            return date.format(format || this.localeData.defaultFormat);
        }
        return '';
    };
    NbMomentDateService.prototype.getDate = function (date) {
        return this.clone(date).date();
    };
    NbMomentDateService.prototype.getDayOfWeek = function (date) {
        return this.clone(date).day();
    };
    NbMomentDateService.prototype.getDayOfWeekNames = function (style) {
        if (style === void 0) { style = TranslationWidth.Narrow; }
        return this.localeData.days[style];
    };
    NbMomentDateService.prototype.getFirstDayOfWeek = function () {
        return this.localeData.firstDayOfWeek;
    };
    NbMomentDateService.prototype.getMonth = function (date) {
        return this.clone(date).month();
    };
    NbMomentDateService.prototype.getMonthEnd = function (date) {
        return this.clone(date).endOf('month');
    };
    NbMomentDateService.prototype.getMonthName = function (date, style) {
        if (style === void 0) { style = TranslationWidth.Abbreviated; }
        var month = this.getMonth(date);
        return this.getMonthNameByIndex(month, style);
    };
    NbMomentDateService.prototype.getMonthNameByIndex = function (month, style) {
        if (style === void 0) { style = TranslationWidth.Abbreviated; }
        return this.localeData.months[style][month];
    };
    NbMomentDateService.prototype.getMonthStart = function (date) {
        return this.clone(date).startOf('month');
    };
    NbMomentDateService.prototype.getNumberOfDaysInMonth = function (date) {
        return this.clone(date).daysInMonth();
    };
    NbMomentDateService.prototype.getYear = function (date) {
        return this.clone(date).year();
    };
    NbMomentDateService.prototype.getYearEnd = function (date) {
        return this.clone(date).endOf('year');
    };
    NbMomentDateService.prototype.getYearStart = function (date) {
        return this.clone(date).startOf('year');
    };
    NbMomentDateService.prototype.isSameDay = function (date1, date2) {
        return this.isSameMonth(date1, date2) && this.getDate(date1) === this.getDate(date2);
    };
    NbMomentDateService.prototype.isSameMonth = function (date1, date2) {
        return this.isSameYear(date1, date2) && this.getMonth(date1) === this.getMonth(date2);
    };
    NbMomentDateService.prototype.isSameYear = function (date1, date2) {
        return this.getYear(date1) === this.getYear(date2);
    };
    NbMomentDateService.prototype.isValidDateString = function (date, format) {
        return moment(date, format).isValid();
    };
    NbMomentDateService.prototype.parse = function (date, format) {
        return moment(date, format);
    };
    NbMomentDateService.prototype.today = function () {
        return moment();
    };
    NbMomentDateService.prototype.getId = function () {
        return 'moment';
    };
    NbMomentDateService.prototype.setMomentLocaleData = function (locale) {
        var _a, _b;
        var momentLocaleData = moment.localeData(locale);
        this.localeData = {
            firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
            defaultFormat: momentLocaleData.longDateFormat('L'),
            months: (_a = {},
                _a[TranslationWidth.Abbreviated] = momentLocaleData.monthsShort(),
                _a[TranslationWidth.Wide] = momentLocaleData.months(),
                _a),
            days: (_b = {},
                _b[TranslationWidth.Wide] = momentLocaleData.weekdays(),
                _b[TranslationWidth.Short] = momentLocaleData.weekdaysShort(),
                _b[TranslationWidth.Narrow] = momentLocaleData.weekdaysMin(),
                _b),
        };
    };
    NbMomentDateService.prototype.getWeekNumber = function (date) {
        return date.week();
    };
    NbMomentDateService = __decorate([
        Injectable(),
        __param(0, Inject(LOCALE_ID)),
        __metadata("design:paramtypes", [String])
    ], NbMomentDateService);
    return NbMomentDateService;
}(NbDateService));

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
var NbMomentDateModule = /** @class */ (function () {
    function NbMomentDateModule() {
    }
    NbMomentDateModule = __decorate$1([
        NgModule({
            providers: [{ provide: NbDateService, useClass: NbMomentDateService }],
        })
    ], NbMomentDateModule);
    return NbMomentDateModule;
}());

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NbMomentDateService, NbMomentDateModule };
