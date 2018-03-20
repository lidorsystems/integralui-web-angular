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
    itemDragStart(e: any): void;
    itemDragOver(e: any, flag?: boolean): void;
    itemDragDrop(e: any): void;
    private allowSelection;
    onMouseDown(e: any): void;
    onMouseUp(e: any): void;
    selectItem(): void;
    onTouchStart(e: any): void;
}
