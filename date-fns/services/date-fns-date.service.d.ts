import { NbNativeDateService } from 'nebular-dist/theme';
export interface NbDateFnsOptions {
    format: string;
    parseOptions: {};
    formatOptions: {};
    getWeekOptions: {};
}
export declare class NbDateFnsDateService extends NbNativeDateService {
    protected options: Partial<NbDateFnsOptions>;
    constructor(locale: string, options: any);
    format(date: Date, format: string): string;
    parse(date: string, format: string): Date;
    getId(): string;
    getWeekNumber(date: Date): number;
}
