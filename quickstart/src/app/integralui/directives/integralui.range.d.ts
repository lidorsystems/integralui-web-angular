import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import * as i0 from "@angular/core";
export declare class IntegralUIRange {
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer2;
    protected commonService?: IntegralUICommonService;
    private defaultSettings;
    private resizeInterval;
    private originalElemSize;
    settings: any;
    sizeChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, elemRenderer: Renderer2, commonService?: IntegralUICommonService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onMouseEnter(): void;
    onChange(e: any): void;
    onResize(e: any): void;
    updateSize(currentSettings: any, sizeChange: any): void;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUIRange, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<IntegralUIRange, "[iuiRange]", never, { "settings": "iuiRange"; }, { "sizeChanged": "sizeChanged"; }, never>;
}
