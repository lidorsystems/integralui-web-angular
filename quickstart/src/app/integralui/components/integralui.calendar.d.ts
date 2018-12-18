import { ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIWeekDays } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUICalendar extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    animateCurrentPos: number;
    animateNextPos: number;
    animatePrevPos: number;
    animateCurrentOpacity: number;
    animateNextOpacity: number;
    animatePrevOpacity: number;
    decadeOpacity: number;
    monthOpacity: number;
    yearOpacity: number;
    isDecadeAnimated: boolean;
    isMonthAnimated: boolean;
    isYearAnimated: boolean;
    protected currentDate: Date;
    protected currentSelectedDate: Date;
    protected currentTodayDate: Date;
    listDayWeek: Array<any>;
    title: string;
    listYears: Array<any>;
    nextListYears: Array<any>;
    prevListYears: Array<any>;
    listMonths: Array<any>;
    nextListMonths: Array<any>;
    prevListMonths: Array<any>;
    listDaysInMonth: Array<any>;
    nextListDaysInMonth: Array<any>;
    prevListDaysInMonth: Array<any>;
    protected hoverDate: Date;
    protected prevHoverDate: Date;
    buttonMargin: any;
    ctrlOpacity: number;
    contentSize: any;
    displayMode: number;
    headerSize: any;
    prevDisplayMode: number;
    titleMargin: any;
    titleSize: any;
    protected updateTimer: any;
    headerElem: ElementRef;
    headerButtonElem: ElementRef;
    headerTitleElem: ElementRef;
    protected cellClassName: string;
    protected contentCellClass: Array<any>;
    ctrlClassObj: string;
    protected currentControlStyle: any;
    controlStyle: any;
    firstDayOfWeek: IntegralUIWeekDays;
    locales: string;
    selectedDate: Date;
    showToday: boolean;
    todayDate: Date;
    dateChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    protected initDefaultStyle(): void;
    protected initStyle(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    private clearDisplayAnimation();
    animateDisplayChanges(flag?: boolean): void;
    private getCorrectDayInMonth(year, month, day);
    private getLastDayFromMonth(month, year);
    private getPrevMonth(value);
    private getPrevYear(value);
    private getNextMonth(value);
    private getNextYear(value);
    private getWeekNames();
    private isDateEqual(first, second);
    private isMonthEqual(first, second);
    private isYearEqual(first, second);
    reset(): void;
    refresh(): void;
    updateLayout(): void;
    private updateHeaderLayout();
    private updateHeaderTitle(value);
    private updateDecadeLayout(list, value);
    private updateMonthLayout(list, value);
    private updateYearLayout(list, value);
    private updateCurrentDate(value?, flag?);
    private isNavigationActive;
    private navTimer;
    btnNextClicked(e: any): void;
    btnPrevClicked(e: any): void;
    ctrlClick(e: any): void;
    ctrlMouseDown(e: any): void;
    ctrlMouseEnter(e: any): void;
    ctrlMouseLeave(e: any): void;
    ctrlMouseUp(e: any): void;
    dayClicked(e: any, day: any): void;
    dayEnter(e: any, day: any): void;
    dayLeave(e: any, day: any): void;
    headerClicked(e: any): void;
    monthClicked(e: any, month: any): void;
    monthEnter(e: any, month: any): void;
    monthLeave(e: any, month: any): void;
    yearClicked(e: any, year: any): void;
    yearEnter(e: any, year: any): void;
    yearLeave(e: any, year: any): void;
    next(e: any, value?: Date): void;
    prev(e: any, value?: Date): void;
    private removeNavigationTimer();
    onWindowMouseUp(e: any): void;
    private getDayObjectStyle(objDate, day, isGrayed);
    private getMonthObjectStyle(objDate, month, isGrayed);
    private getYearObjectStyle(objDate, year, isGrayed);
    private getCellObjectStyle(objDate, valueDate, isGrayed);
    getControlStyle(): any;
    protected getCellStyle(value: any): any;
    protected updateControlClass(): void;
    protected updateStyle(value: any): void;
}
