import { ComponentFactoryResolver, ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIDateFormat, IntegralUIPopup, IntegralUIWeekDays } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUICalendar } from './integralui.calendar';
export declare class IntegralUICalendarPopup extends IntegralUIPopup {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    calendarDisplayPosition: string;
    calendarPos: any;
    calendarOpacity: number;
    calendarSize: any;
    calendar: IntegralUICalendar;
    date: Date;
    calendarStyle: any;
    firstDayOfWeek: IntegralUIWeekDays;
    size: any;
    closed: EventEmitter<any>;
    dateChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    open(): void;
    close(value: Date): void;
    calendarDateChanged(e: any): void;
    onBlur(e: any): void;
    refresh(): void;
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
    appRef: any;
    calendarFirstDayOfWeek: IntegralUIWeekDays;
    calendarSize: any;
    format: IntegralUIDateFormat;
    formatOptions: any;
    locales: string;
    selectedDate: Date;
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
}
