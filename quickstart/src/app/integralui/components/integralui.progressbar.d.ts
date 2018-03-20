import { ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseValueComponent, IntegralUIOrientation } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUIProgressBar extends IntegralUIBaseValueComponent {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    protected currentOrientation: IntegralUIOrientation;
    protected contentSize: any;
    orientation: IntegralUIOrientation;
    orientationChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentChecked(): void;
    processValueChange(): void;
    updateLayout(): void;
    getProgressStyle(): any;
}
