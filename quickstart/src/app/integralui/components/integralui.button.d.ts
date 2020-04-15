import { ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseComponent } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import * as i0 from "@angular/core";
export declare class IntegralUIButton extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    animationState: string;
    protected pressedValue: boolean;
    protected contentClassName: string;
    protected contentClass: Array<any>;
    protected clientRect: {
        width: number;
        height: number;
    };
    set pressed(value: boolean);
    get pressed(): boolean;
    pressedChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    protected initStyle(): void;
    refresh(): void;
    ctrlMouseEnter(e: any): void;
    ctrlMouseLeave(e: any): void;
    getControlStyle(): any;
    protected updateContentClass(): void;
    getContentClass(): any[];
    protected getContentStyle(value: any): any;
    protected updateStyle(value: any): void;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUIButton, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IntegralUIButton, "iui-button", never, { "controlStyle": "controlStyle"; "data": "data"; "enabled": "enabled"; "name": "name"; "size": "size"; "state": "state"; "pressed": "pressed"; }, { "pressedChanged": "pressedChanged"; }, never, ["*"]>;
}
