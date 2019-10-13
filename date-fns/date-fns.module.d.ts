import { ModuleWithProviders } from '@angular/core';
import { NbDateFnsOptions } from './services/date-fns-date.service';
export declare class NbDateFnsDateModule {
    static forRoot(options: Partial<NbDateFnsOptions>): ModuleWithProviders;
    static forChild(options: Partial<NbDateFnsOptions>): ModuleWithProviders;
}
