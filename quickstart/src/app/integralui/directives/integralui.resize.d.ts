import { ElementRef, EventEmitter } from '@angular/core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import * as i0 from "@angular/core";
export declare class IntegralUIResize {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    private changeTimer;
    private elemSize;
    private prevElemSize;
    settings: any;
    elemSizeChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    checkForSizeChanges(): void;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUIResize, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<IntegralUIResize, "[iuiResize]", never, { "settings": "iuiResize"; }, { "elemSizeChanged": "elemSizeChanged"; }, never>;
}
