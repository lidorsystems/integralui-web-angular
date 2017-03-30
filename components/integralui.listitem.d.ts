import { ElementRef } from '@angular/core';
import { IntegralUIBaseService, IntegralUIItem } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUIListItem extends IntegralUIItem {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    protected baseService: IntegralUIBaseService;
    contentElem: ElementRef;
    dragElem: ElementRef;
    protected parentCtrl: any;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    protected itemDragStart(e: any): void;
    protected itemDragOver(e: any, flag?: boolean): void;
    protected itemDragDrop(e: any): void;
    private allowSelection;
    protected onMouseDown(e: any): void;
    protected onMouseUp(e: any): void;
    selectItem(): void;
}
