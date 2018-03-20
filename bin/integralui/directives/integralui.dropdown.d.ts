import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUITemplate } from '../components/integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUIDropDownComponent extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    private dropdownOptions;
    templateObj: any;
    private showTimer;
    private popupTimer;
    private mousePos;
    dropdownDisplay: string;
    dropdownPos: {
        top: number;
        left: number;
    };
    dropdownSize: {
        width: number;
        height: number;
    };
    options: any;
    closed: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    updateAdjustment(value?: any): {
        top: any;
        right: any;
        bottom: any;
        left: any;
    };
    private updateOptions(value?);
    private updateDropDownSize(value?);
    onBlur(e: any): void;
    onMouseDown(e: any): void;
    private removeTimers();
    open(elemPageRect: any, elemSize: any, appSize?: any): void;
    show(elemPageRect: any, elemSize: any, appSize?: any): void;
    size(): any;
    updateMousePos(value: any): void;
    protected updateControlClass(): void;
}
export declare class IntegralUIDropDown {
    protected elemRef: ElementRef;
    protected cmpResolver: ComponentFactoryResolver;
    protected commonService: IntegralUICommonService;
    private eventList;
    private templateData;
    private isDropDownOpen;
    templates: QueryList<IntegralUITemplate>;
    private cmpRef;
    private templateList;
    settings: any;
    dropDownRef: any;
    showDropDown: boolean;
    dropDownOpen: EventEmitter<any>;
    dropDownOpening: EventEmitter<any>;
    dropDownClose: EventEmitter<any>;
    constructor(elemRef: ElementRef, cmpResolver: ComponentFactoryResolver, commonService?: IntegralUICommonService);
    ngAfterContentInit(): void;
    closeDropDown(): void;
    close(): void;
    open(mouseEvent?: any): void;
    size(): {
        width: any;
        height: any;
    };
    onMouseDown(e: any): void;
}
