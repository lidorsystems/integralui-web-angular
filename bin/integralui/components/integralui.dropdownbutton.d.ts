import { ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIButton } from './integralui.button';
import { IntegralUIDirection, IntegralUIPlacement } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUIDropDownButton extends IntegralUIButton {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    protected originalDropDownSettings: any;
    protected dropDownSettings: any;
    protected placementValue: IntegralUIPlacement;
    protected openDirection: IntegralUIDirection;
    buttonElem: ElementRef;
    protected buttonClassName: string;
    protected buttonClass: Array<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    protected initStyle(): void;
    ngAfterViewInit(): void;
    placement: IntegralUIPlacement;
    direction: IntegralUIDirection;
    settings: any;
    itemClick: EventEmitter<any>;
    dropDownOpening: EventEmitter<any>;
    dropDownOpened: EventEmitter<any>;
    dropDownClosed: EventEmitter<any>;
    private getAdjustmentValue(value?);
    private updateDropDownSettings(value?);
    updateAdjustment(): void;
    onDropDownItemClick(e: any): void;
    onDropDownOpening(e: any): void;
    onDropDownOpened(e: any): void;
    onDropDownClosed(e: any): void;
    getDefaultDropDownStyle(): {
        general: {
            normal: string;
        };
    };
    protected updateButtonClass(): void;
    getButtonClass(): any[];
    protected getButtonStyle(value: any): any;
    protected updateStyle(value: any): void;
    refresh(): void;
}
