import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList } from '@angular/core';
import { IntegralUITemplate } from '../components/integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUITooltip, IntegralUITooltipComponent } from './integralui.tooltip';
import * as i0 from "@angular/core";
export declare class IntegralUIPopOverComponent extends IntegralUITooltipComponent {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    popoverOptions: any;
    templateObj: any;
    popoverDisplay: string;
    popoverPos: {
        top: number;
        left: number;
    };
    private popoverSize;
    set settings(value: any);
    get settings(): any;
    closed: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    protected updateOptions(value?: any): void;
    preventBubbleUp(e: any): void;
    close(): void;
    open(elemPageRect: any, elemSize: any): void;
    show(elemPageRect: any, elemSize: any): void;
    getSize(): any;
    updateMousePos(value: any): void;
    protected updateControlClass(): void;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUIPopOverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IntegralUIPopOverComponent, "iui-popover", never, { "controlStyle": "controlStyle"; "data": "data"; "state": "state"; "settings": "settings"; }, { "closed": "closed"; }, never, never>;
}
export declare class IntegralUIPopOver extends IntegralUITooltip {
    protected elemRef: ElementRef;
    protected cmpResolver: ComponentFactoryResolver;
    protected commonService?: IntegralUICommonService;
    private templateData;
    private currentMousePos;
    private isVisible;
    templates: QueryList<IntegralUITemplate>;
    private templateList;
    set settings(value: any);
    get settings(): any;
    popoverRef: any;
    set popOverShow(value: boolean);
    get popOverShow(): boolean;
    popOverClosed: EventEmitter<any>;
    constructor(elemRef: ElementRef, cmpResolver: ComponentFactoryResolver, commonService?: IntegralUICommonService);
    ngAfterContentInit(): void;
    private updateTemplate;
    closePopOver(): void;
    openPopOver(pos?: any): void;
    toggle(): void;
    onMouseEnter(e: any): void;
    onMouseLeave(e: any): void;
    onMouseMove(e: any): void;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUIPopOver, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<IntegralUIPopOver, "[iuiPopOver]", never, { "settings": "iuiPopOver"; "popoverRef": "popoverRef"; "popOverShow": "popOverShow"; }, { "popOverClosed": "popOverClosed"; }, ["templates"]>;
}
