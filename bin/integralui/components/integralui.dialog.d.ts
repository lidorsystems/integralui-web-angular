import { ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseComponent } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import * as i0 from "@angular/core";
export declare class IntegralUIDialog extends IntegralUIBaseComponent {
    protected commonService?: IntegralUICommonService;
    inputLabelElem: ElementRef;
    protected isEnabled: boolean;
    protected isVisible: boolean;
    closeButton: boolean;
    set visible(value: boolean);
    get visible(): boolean;
    closed: EventEmitter<any>;
    closing: EventEmitter<any>;
    opened: EventEmitter<any>;
    opening: EventEmitter<any>;
    constructor(commonService?: IntegralUICommonService);
    ngOnInit(): void;
    protected updateLayout(): void;
    open(): void;
    close(): void;
    getControlStyle(): any;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUIDialog, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IntegralUIDialog, "iui-dialog", never, { "controlStyle": "controlStyle"; "data": "data"; "enabled": "enabled"; "name": "name"; "size": "size"; "state": "state"; "closeButton": "closeButton"; "visible": "visible"; }, { "closed": "closed"; "closing": "closing"; "opened": "opened"; "opening": "opening"; }, never, ["*"]>;
}
