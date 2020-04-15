import { ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseValueComponent } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import * as i0 from "@angular/core";
export declare class IntegralUIRadioButton extends IntegralUIBaseValueComponent {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    animationState: string;
    protected checkedValue: boolean;
    protected buttonClassName: string;
    protected buttonClass: Array<any>;
    set checked(value: boolean);
    get checked(): boolean;
    checkedChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    protected initStyle(): void;
    ngAfterViewInit(): void;
    protected updateValue(val: any): void;
    checkMouseDown(e: any): void;
    getControlStyle(): any;
    protected updateButtonClass(): void;
    getButtonClass(): any[];
    protected getButtonStyle(value: any): any;
    protected updateStyle(value: any): void;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUIRadioButton, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IntegralUIRadioButton, "iui-radio-button", never, { "controlStyle": "controlStyle"; "data": "data"; "enabled": "enabled"; "name": "name"; "size": "size"; "state": "state"; "value": "value"; "checked": "checked"; }, { "valueChanged": "valueChanged"; "checkedChanged": "checkedChanged"; }, never, ["*"]>;
}
