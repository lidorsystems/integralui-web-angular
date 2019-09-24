import { ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseComponent } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUIDialog extends IntegralUIBaseComponent {
    protected commonService?: IntegralUICommonService;
    inputLabelElem: ElementRef;
    protected isEnabled: boolean;
    protected isVisible: boolean;
    closeButton: boolean;
    visible: boolean;
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
}
