/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
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
import { Inject, Injectable, LOCALE_ID, Optional } from '@angular/core';
import { NB_DATE_SERVICE_OPTIONS, NbNativeDateService } from 'nebular-dist/theme';
import * as dateFnsParse from 'date-fns/parse';
// @ts-ignore
import { default as rollupParse } from 'date-fns/parse';
import * as dateFnsFormat from 'date-fns/format';
// @ts-ignore
import { default as rollupFormat } from 'date-fns/format';
import * as dateFnsGetWeek from 'date-fns/getWeek';
// @ts-ignore
import { default as rollupGetWeek } from 'date-fns/getWeek';
const parse = rollupParse || dateFnsParse;
const formatDate = rollupFormat || dateFnsFormat;
const getWeek = rollupGetWeek || dateFnsGetWeek;
let NbDateFnsDateService = class NbDateFnsDateService extends NbNativeDateService {
    constructor(locale, options) {
        super(locale);
        this.setLocale(locale);
        this.options = options || {};
    }
    format(date, format) {
        if (date) {
            return formatDate(date, format || this.options.format, this.options.formatOptions);
        }
        return '';
    }
    parse(date, format) {
        return parse(date, format || this.options.format, new Date(), this.options.parseOptions);
    }
    getId() {
        return 'date-fns';
    }
    getWeekNumber(date) {
        return getWeek(date, this.options.getWeekOptions);
    }
};
NbDateFnsDateService = __decorate([
    Injectable(),
    __param(0, Inject(LOCALE_ID)),
    __param(1, Optional()), __param(1, Inject(NB_DATE_SERVICE_OPTIONS)),
    __metadata("design:paramtypes", [String, Object])
], NbDateFnsDateService);
export { NbDateFnsDateService };
//# sourceMappingURL=date-fns-date.service.js.map
