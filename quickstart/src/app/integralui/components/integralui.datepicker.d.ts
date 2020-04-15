import { ComponentFactoryResolver, ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIDateFormat, IntegralUIPopup, IntegralUISpeedMode, IntegralUIWeekDays } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUICalendar } from './integralui.calendar';
import * as i0 from "@angular/core";
export declare class IntegralUICalendarPopup extends IntegralUIPopup {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    private closeTimer;
    private openTimer;
    calendarDisplayPosition: string;
    calendarPos: any;
    calendarOpacity: number;
    calendarSize: any;
    calendar: IntegralUICalendar;
    date: Date;
    calendarStyle: any;
    firstDayOfWeek: IntegralUIWeekDays;
    set size(value: any);
    get size(): any;
    closed: EventEmitter<any>;
    dateChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    removeCloseTimer(): void;
    removeOpenTimer(): void;
    ngOnDestroy(): void;
    open(): void;
    close(value: Date, isDateChanged?: boolean): void;
    calendarDateChanged(e: any): void;
    onBlur(e: any): void;
    refresh(): void;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUICalendarPopup, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IntegralUICalendarPopup, "iui-calendar-popup", never, { "date": "date"; "calendarStyle": "calendarStyle"; "firstDayOfWeek": "firstDayOfWeek"; "size": "size"; }, { "closed": "closed"; "dateChanged": "dateChanged"; }, never, never>;
}
export declare class IntegralUIDatePicker extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    protected cmpResolver?: ComponentFactoryResolver;
    private calendarRef;
    private calendar;
    protected currentSelectedDate: Date;
    buttonMargin: any;
    protected currentCalendarSize: any;
    headerMargin: any;
    headerSize: any;
    titleMargin: any;
    titleSize: any;
    protected updateTimer: any;
    headerElem: ElementRef;
    headerButtonElem: ElementRef;
    headerTitleElem: ElementRef;
    protected headerClassName: string;
    protected headerClass: Array<any>;
    protected calendarClassName: string;
    protected calendarCellClassName: string;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    protected initStyle(): void;
    ngOnDestroy(): void;
    animationSpeed: IntegralUISpeedMode;
    appRef: any;
    calendarFirstDayOfWeek: IntegralUIWeekDays;
    set calendarSize(value: any);
    get calendarSize(): any;
    format: IntegralUIDateFormat;
    formatOptions: any;
    locales: string;
    set selectedDate(value: Date);
    get selectedDate(): Date;
    dateChanged: EventEmitter<any>;
    getSelectedDate(): string;
    private addCalendar;
    private hideCalendar;
    protected removeCalendar(): void;
    private showCalendar;
    updateLayout(): void;
    private updateHeaderLayout;
    onCtrlMouseEnter(e: any): void;
    onCtrlMouseLeave(e: any): void;
    openCalendar(e: any): void;
    getControlStyle(): any;
    protected updateHeaderClass(): void;
    getHeaderClass(): any[];
    protected getHeaderStyle(value: any): any;
    protected getCalendarStyle(value: any): any;
    protected getCalendarGeneralStyle(value?: any): any;
    protected getCalendarCellStyle(value?: any): any;
    protected updateStyle(value: any): void;
    refresh(): void;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUIDatePicker, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IntegralUIDatePicker, "iui-datepicker", never, { "controlStyle": "controlStyle"; "data": "data"; "enabled": "enabled"; "name": "name"; "size": "size"; "state": "state"; "animationSpeed": "animationSpeed"; "appRef": "appRef"; "calendarFirstDayOfWeek": "calendarFirstDayOfWeek"; "calendarSize": "calendarSize"; "format": "format"; "formatOptions": "formatOptions"; "locales": "locales"; "selectedDate": "selectedDate"; }, { "dateChanged": "dateChanged"; }, never, never>;
}
