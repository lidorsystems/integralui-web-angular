import { ElementRef, EventEmitter } from '@angular/core';
import { IntegralUICommonService } from '../services/integralui.common.service';
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
}
