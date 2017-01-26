import { ElementRef, EventEmitter, Renderer } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIOrientation } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUISplitter extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    protected commonService: IntegralUICommonService;
    protected clientSize: {
        width: number;
        height: number;
    };
    protected currentSplitterDistance: number;
    protected maxPos: {
        x: number;
        y: number;
    };
    protected panel1Size: {
        width: number;
        height: number;
    };
    protected panel2Size: {
        width: number;
        height: number;
    };
    protected splitterSize: {
        width: number;
        height: number;
    };
    protected splitterHandleSize: any;
    handleElem: ElementRef;
    protected handleClassName: string;
    protected handleClass: Array<any>;
    orientation: IntegralUIOrientation;
    panel1: any;
    panel2: any;
    splitterDistance: number;
    orientationChanged: EventEmitter<any>;
    splitterMoved: EventEmitter<any>;
    splitterMoving: EventEmitter<any>;
    constructor(elemRef: ElementRef, elemRenderer: Renderer, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    protected initStyle(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    private calcSplitterDistance(startPos?, endPos?);
    updateLayout(startPos?: any, endPos?: any): void;
    private splitterStartPos;
    private isSplitterActive;
    splitterMouseDown(e: any): void;
    onWindowMouseMove(e: any): void;
    onWindowMouseUp(e: any): void;
    protected getSplitterStyle(): {
        cursor: string;
        width: string;
        height: string;
    };
    protected getSplitterHandleStyle(): {
        'margin-top': string;
        'margin-left': string;
    };
    protected updateHandleClass(): void;
    protected getHandleClass(): any[];
    protected getHandleStyle(value: any): any;
    protected updateStyle(value: any): void;
}
