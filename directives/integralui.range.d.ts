import { ElementRef, EventEmitter, Renderer } from '@angular/core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUIRange {
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    protected commonService: IntegralUICommonService;
    private defaultSettings;
    private resizeInterval;
    private originalElemSize;
    settings: any;
    sizeChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, elemRenderer: Renderer, commonService?: IntegralUICommonService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onMouseEnter(): void;
    onChange(e: any): void;
    onResize(e: any): void;
    updateSize(currentSettings: any, sizeChange: any): void;
}
