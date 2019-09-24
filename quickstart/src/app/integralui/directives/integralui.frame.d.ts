import { ElementRef, EventEmitter, Renderer } from '@angular/core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUIFrame {
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    protected commonService?: IntegralUICommonService;
    private isActive;
    private startPos;
    private currentPos;
    private newSizeDistance;
    private parentElem;
    private resizerElem;
    private _elRend;
    settings: any;
    sizeChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, elemRenderer: Renderer, commonService?: IntegralUICommonService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onMouseEnter(e: any): void;
    onMouseLeave(): void;
    onMouseDown(e: any): void;
    onMouseUp(e: any): void;
    onWindowMouseMove(e: any): void;
    onWindowMouseUp(e: any): void;
    private hideFrame;
    private showFrame;
    private getElemSize;
    updateSize(value: any): void;
}
