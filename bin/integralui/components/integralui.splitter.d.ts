import { ElementRef, EventEmitter, Renderer } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIOrientation } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUISplitter extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    protected commonService?: IntegralUICommonService;
    getMaxPos(): {
        x: number;
        y: number;
    };
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
    protected prevMaxPos: {
        x: number;
        y: number;
    };
    handleElem: ElementRef;
    protected handleClassName: string;
    protected handleClass: Array<any>;
    orientation: IntegralUIOrientation;
    panel1: any;
    panel3: any;
    splitterDistance: number;
    private currentPanel2;
    panel2: any;
    orientationChanged: EventEmitter<any>;
    splitterMoved: EventEmitter<any>;
    splitterMoving: EventEmitter<any>;
    constructor(elemRef: ElementRef, elemRenderer: Renderer, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    protected initStyle(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    protected initLayout(): void;
    ngAfterContentChecked(): void;
    private updateSettings;
    private calcSplitterDistance;
    updateLayout(startPos?: any, endPos?: any): void;
    private updatePanelSize;
    private splitterStartPos;
    private isSplitterActive;
    splitterMouseDown(e: any): void;
    onWindowMouseMove(e: any): void;
    onWindowMouseUp(e: any): void;
    onResize(e: any): void;
    getControlStyle(): any;
    getSplitterHandleStyle(): {
        'margin-top': string;
        'margin-left': string;
    };
    protected updateHandleClass(): void;
    getHandleClass(): any[];
    protected getHandleStyle(value: any): any;
    protected updateStyle(value: any): void;
}
