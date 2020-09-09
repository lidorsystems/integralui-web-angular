import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIOrientation } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import * as i0 from "@angular/core";
export declare class IntegralUISplitter extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer2;
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
    isVisible: boolean;
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
    set splitterDistance(value: number);
    get splitterDistance(): number;
    private currentPanel2;
    set panel2(value: any);
    get panel2(): any;
    set visible(value: boolean);
    get visible(): boolean;
    orientationChanged: EventEmitter<any>;
    splitterMoved: EventEmitter<any>;
    splitterMoving: EventEmitter<any>;
    constructor(elemRef: ElementRef, elemRenderer: Renderer2, commonService?: IntegralUICommonService);
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
    static ɵfac: i0.ɵɵFactoryDef<IntegralUISplitter, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IntegralUISplitter, "iui-splitter", never, { "controlStyle": "controlStyle"; "data": "data"; "enabled": "enabled"; "name": "name"; "size": "size"; "state": "state"; "orientation": "orientation"; "panel1": "panel1"; "panel3": "panel3"; "splitterDistance": "splitterDistance"; "panel2": "panel2"; "visible": "visible"; }, { "orientationChanged": "orientationChanged"; "splitterMoved": "splitterMoved"; "splitterMoving": "splitterMoving"; }, never, never>;
}
