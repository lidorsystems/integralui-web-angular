import { ComponentFactoryResolver, ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseComponent } from '../components/integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUITooltipComponent extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    tooltipOptions: any;
    protected showTimer: any;
    protected popupTimer: any;
    protected mousePos: {
        x: number;
        y: number;
    };
    tooltipDisplay: string;
    tooltipPos: {
        top: number;
        left: number;
    };
    private tooltipSize;
    options: any;
    closed: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    protected updateOptions(value?: any): void;
    protected removeTimers(): void;
    close(): void;
    open(elemPageRect: any, elemSize: any): void;
    show(elemPageRect: any, elemSize: any): void;
    getSize(): any;
    updateMousePos(value: any): void;
    protected updateControlClass(): void;
}
export declare class IntegralUITooltip {
    protected elemRef: ElementRef;
    protected cmpResolver: ComponentFactoryResolver;
    protected commonService?: IntegralUICommonService;
    protected eventList: Array<any>;
    protected cmpRef: any;
    protected cmp: any;
    settings: any;
    tooltipRef: any;
    constructor(elemRef: ElementRef, cmpResolver: ComponentFactoryResolver, commonService?: IntegralUICommonService);
    ngOnDestroy(): void;
    closeTooltip(): void;
    getSize(): {
        width: any;
        height: any;
    };
    onMouseEnter(e: any): void;
    onMouseLeave(e: any): void;
    onMouseMove(e: any): void;
}
