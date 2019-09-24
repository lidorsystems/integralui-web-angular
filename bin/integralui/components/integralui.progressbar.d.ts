import { ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseValueComponent, IntegralUIOrientation } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUIProgressBar extends IntegralUIBaseValueComponent {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    private ctrlPadding;
    protected currentOrientation: IntegralUIOrientation;
    protected contentSize: any;
    protected fadingSize: any;
    orientation: IntegralUIOrientation;
    orientationChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    private delayTimeout;
    protected animateProgress(): void;
    private removeDelayTimeout;
    processValueChange(): void;
    updateLayout(): void;
    getControlStyle(): any;
    getProgressStyle(): any;
    getProgressFadingStyle(): any;
}
