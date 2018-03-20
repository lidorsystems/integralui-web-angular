import { ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseValueComponent, IntegralUICheckState } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUICheckBox extends IntegralUIBaseValueComponent {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    protected buttonClassName: string;
    protected buttonClass: Array<any>;
    checked: boolean;
    checkState: IntegralUICheckState;
    threeState: boolean;
    checkedChanged: EventEmitter<any>;
    checkStateChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    protected initStyle(): void;
    ngAfterViewInit(): void;
    protected updateCheckValue(val: any): void;
    processValueChange(): void;
    checkMouseDown(e: any): void;
    protected updateButtonClass(): void;
    getButtonClass(): any[];
    protected getButtonStyle(value: any): any;
    protected updateStyle(value: any): void;
}
