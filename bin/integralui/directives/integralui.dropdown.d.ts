import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUITemplate } from '../components/integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import * as i0 from "@angular/core";
export declare class IntegralUIDropDownComponent extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
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
    set settings(value: any);
    get settings(): any;
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
    private updateOptions;
    private updateDropDownSize;
    onBlur(e: any): void;
    onMouseDown(e: any): void;
    private removeTimers;
    open(elemPageRect: any, elemSize: any, appSize?: any): void;
    show(elemPageRect: any, elemSize: any, appSize?: any): void;
    getSize(): any;
    updateMousePos(value: any): void;
    protected updateControlClass(): void;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUIDropDownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IntegralUIDropDownComponent, "iui-dropdown", never, { "controlStyle": "controlStyle"; "data": "data"; "state": "state"; "settings": "settings"; }, { "closed": "closed"; }, never, never>;
}
export declare class IntegralUIDropDown {
    protected elemRef: ElementRef;
    protected cmpResolver: ComponentFactoryResolver;
    protected commonService?: IntegralUICommonService;
    private currentSettings;
    private eventList;
    private templateData;
    protected isDropDownOpen: boolean;
    protected isTouchProcessed: boolean;
    private winScrollPos;
    templates: QueryList<IntegralUITemplate>;
    private cmpRef;
    private templateList;
    set settings(value: any);
    get settings(): any;
    dropDownRef: any;
    set showDropDown(value: boolean);
    get showDropDown(): boolean;
    dropDownOpen: EventEmitter<any>;
    dropDownOpening: EventEmitter<any>;
    dropDownClose: EventEmitter<any>;
    constructor(elemRef: ElementRef, cmpResolver: ComponentFactoryResolver, commonService?: IntegralUICommonService);
    ngAfterContentInit(): void;
    private updateTemplate;
    closeDropDown(): void;
    close(): void;
    open(e?: any, flag?: boolean): void;
    getSize(): {
        width: any;
        height: any;
    };
    onMouseDown(e: any): void;
    onTouchStart(e: any): void;
    onTouchEnd(e: any): void;
    private processOpen;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUIDropDown, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<IntegralUIDropDown, "[iuiDropDown]", never, { "settings": "iuiDropDown"; "dropDownRef": "dropDownRef"; "showDropDown": "showDropDown"; }, { "dropDownOpen": "dropDownOpen"; "dropDownOpening": "dropDownOpening"; "dropDownClose": "dropDownClose"; }, ["templates"]>;
}
