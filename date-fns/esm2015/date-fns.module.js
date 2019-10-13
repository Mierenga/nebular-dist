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
var NbDateFnsDateModule_1;
import { NgModule } from '@angular/core';
import { NB_DATE_SERVICE_OPTIONS, NbDateService } from 'nebular-dist/theme';
import { NbDateFnsDateService } from './services/date-fns-date.service';
const dateFnsServiceProvider = { provide: NbDateService, useClass: NbDateFnsDateService };
let NbDateFnsDateModule = NbDateFnsDateModule_1 = class NbDateFnsDateModule {
    static forRoot(options) {
        return {
            ngModule: NbDateFnsDateModule_1,
            providers: [
                dateFnsServiceProvider,
                { provide: NB_DATE_SERVICE_OPTIONS, useValue: options },
            ],
        };
    }
    static forChild(options) {
        return {
            ngModule: NbDateFnsDateModule_1,
            providers: [
                dateFnsServiceProvider,
                { provide: NB_DATE_SERVICE_OPTIONS, useValue: options },
            ],
        };
    }
};
NbDateFnsDateModule = NbDateFnsDateModule_1 = __decorate([
    NgModule({
        providers: [dateFnsServiceProvider],
    })
], NbDateFnsDateModule);
export { NbDateFnsDateModule };
//# sourceMappingURL=date-fns.module.js.map
