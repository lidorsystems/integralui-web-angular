import { ComponentFactoryResolver, ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseComponent } from '../components/integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUITooltipComponent extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    private tooltipOptions;
    private showTimer;
    private popupTimer;
    private mousePos;
    private tooltipDisplay;
    private tooltipPos;
    private tooltipSize;
    options: any;
    closed: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    private updateOptions(value?);
    private removeTimers();
    open(elemPageRect: any, elemSize: any): void;
    show(elemPageRect: any, elemSize: any): void;
    size(): any;
    updateMousePos(value: any): void;
    protected updateControlClass(): void;
}
export declare class IntegralUITooltip {
    protected elemRef: ElementRef;
    protected cmpResolver: ComponentFactoryResolver;
    protected commonService: IntegralUICommonService;
    private eventList;
    private cmpRef;
    settings: any;
    constructor(elemRef: ElementRef, cmpResolver: ComponentFactoryResolver, commonService?: IntegralUICommonService);
    closeTooltip(): void;
    size(): {
        width: any;
        height: any;
    };
    onMouseEnter(e: any): void;
    onMouseLeave(e: any): void;
    onMouseMove(e: any): void;
}
