import { TranslationWidth } from '@angular/common';
import { NbDateService } from 'nebular-dist/theme';
import { Moment } from 'moment';
export declare class NbMomentDateService extends NbDateService<Moment> {
    protected localeData: {
        firstDayOfWeek: number;
        defaultFormat: string;
        months: {
            [key: string]: string[];
        };
        days: {
            [key: string]: string[];
        };
    };
    constructor(locale: string);
    setLocale(locale: string): void;
    addDay(date: Moment, days: number): Moment;
    addMonth(date: Moment, months: number): Moment;
    addYear(date: Moment, years: number): Moment;
    clone(date: Moment): Moment;
    compareDates(date1: Moment, date2: Moment): number;
    createDate(year: number, month: number, date: number): Moment;
    format(date: Moment, format: string): string;
    getDate(date: Moment): number;
    getDayOfWeek(date: Moment): number;
    getDayOfWeekNames(style?: TranslationWidth): string[];
    getFirstDayOfWeek(): number;
    getMonth(date: Moment): number;
    getMonthEnd(date: Moment): Moment;
    getMonthName(date: Moment, style?: TranslationWidth): string;
    getMonthNameByIndex(month: number, style?: TranslationWidth): string;
    getMonthStart(date: Moment): Moment;
    getNumberOfDaysInMonth(date: Moment): number;
    getYear(date: Moment): number;
    getYearEnd(date: Moment): Moment;
    getYearStart(date: Moment): Moment;
    isSameDay(date1: Moment, date2: Moment): boolean;
    isSameMonth(date1: Moment, date2: Moment): boolean;
    isSameYear(date1: Moment, date2: Moment): boolean;
    isValidDateString(date: string, format: string): boolean;
    parse(date: string, format: string): Moment;
    today(): Moment;
    getId(): string;
    protected setMomentLocaleData(locale: string): void;
    getWeekNumber(date: Moment): number;
}
