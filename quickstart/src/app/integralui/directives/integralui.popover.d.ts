import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList } from '@angular/core';
import { IntegralUITemplate } from '../components/integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUITooltip, IntegralUITooltipComponent } from './integralui.tooltip';
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
    options: any;
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
}
export declare class IntegralUIPopOver extends IntegralUITooltip {
    protected elemRef: ElementRef;
    protected cmpResolver: ComponentFactoryResolver;
    protected commonService?: IntegralUICommonService;
    private currentSettings;
    private templateData;
    private currentMousePos;
    private isVisible;
    templates: QueryList<IntegralUITemplate>;
    private templateList;
    settings: any;
    popoverRef: any;
    popOverShow: boolean;
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
}
