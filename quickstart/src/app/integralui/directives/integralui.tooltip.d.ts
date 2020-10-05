import { ComponentFactoryResolver, ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseComponent } from '../components/integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import * as i0 from "@angular/core";
export declare class IntegralUITooltipComponent extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    private animationTimer;
    currentOpacity: number;
    tooltipOptions: any;
    protected showTimer: any;
    protected popupTimer: any;
    protected mousePos: {
        x: number;
        y: number;
    };
    currentPos: {
        x: number;
        y: number;
    };
    currentSize: {
        width: number;
        height: number;
    };
    tooltipDisplay: string;
    startPos: {
        x: number;
        y: number;
    };
    private tooltipSize;
    contentElem: ElementRef;
    set settings(value: any);
    get settings(): any;
    closed: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    animateHide(): void;
    animateShow(): void;
    protected getAnimationFactor(): number;
    private removeAnimationTimer;
    protected updateOptions(value?: any): void;
    protected removeTimers(): void;
    close(): void;
    open(elemPageRect: any, elemSize: any): void;
    show(elemPageRect: any, elemSize: any): void;
    getSize(): any;
    updateMousePos(value: any): void;
    protected updateControlClass(): void;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUITooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IntegralUITooltipComponent, "iui-tooltip", never, { "controlStyle": "controlStyle"; "data": "data"; "state": "state"; "settings": "settings"; }, { "closed": "closed"; }, never, never>;
}
export declare class IntegralUITooltip {
    protected elemRef: ElementRef;
    protected cmpResolver: ComponentFactoryResolver;
    protected commonService?: IntegralUICommonService;
    protected currentSettings: any;
    protected eventList: Array<any>;
    protected cmpRef: any;
    protected cmp: any;
    set settings(value: any);
    get settings(): any;
    tooltipRef: any;
    constructor(elemRef: ElementRef, cmpResolver: ComponentFactoryResolver, commonService?: IntegralUICommonService);
    ngOnDestroy(): void;
    closeTooltip(): void;
    removeTooltip(): void;
    getSize(): {
        width: any;
        height: any;
    };
    onMouseEnter(e: any): void;
    onMouseLeave(e: any): void;
    onMouseMove(e: any): void;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUITooltip, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<IntegralUITooltip, "[iuiTooltip]", never, { "settings": "iuiTooltip"; "tooltipRef": "tooltipRef"; }, {}, never>;
}
