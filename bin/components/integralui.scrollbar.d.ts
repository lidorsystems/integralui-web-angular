import { ElementRef, EventEmitter, Renderer } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIOrientation } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUIScrollBar extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    protected commonService: IntegralUICommonService;
    private currentMaxValue;
    private currentMinValue;
    private currentValue;
    private currentSplitterDistance;
    private emptySpace;
    private maxPos;
    private scrollSize;
    thumbSize: {
        width: number;
        height: number;
    };
    thumbPos: {
        x: number;
        y: number;
    };
    private smallChange;
    private largeChangeValue;
    height: number;
    largeChange: number;
    max: number;
    min: number;
    orientation: IntegralUIOrientation;
    value: number;
    width: number;
    scrollStart: EventEmitter<any>;
    scrollEnd: EventEmitter<any>;
    valueChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, elemRenderer: Renderer, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    isVertical(): boolean;
    getSize(): {
        width: any;
        height: any;
    };
    setScrollSize(value: any): void;
    updateLayout(): void;
    private thumbStartPos;
    private isThumbActive;
    private prevPos;
    thumbMouseDown(e: any): void;
    onWindowMouseMove(e: any): void;
    onWindowMouseUp(e: any): void;
    private scrollInterval;
    private scrollTimeout;
    changeScrollPos(e: any): void;
    private processLargeChange(e);
    private clearScrolling();
    getScrollBarStyle(): any;
}
