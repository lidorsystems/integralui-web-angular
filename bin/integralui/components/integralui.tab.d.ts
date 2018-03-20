import { ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUITab extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    protected baseService: IntegralUIBaseService;
    contentElem: ElementRef;
    protected parentCtrl: any;
    protected contentClassName: string;
    protected headerClassName: string;
    protected contentClass: Array<any>;
    private isSelected;
    topPos: number;
    leftPos: number;
    elemWidth: string;
    elemHeight: string;
    elemOrder: number;
    elemBorderColor: string;
    text: string;
    icon: string;
    selected: boolean;
    selectedChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    protected initStyle(): void;
    protected processStateChanged(): void;
    private getSize(elem);
    updateLayout(pos: any, size: any): void;
    getLayoutParams(): {
        size: {
            width: number;
            height: number;
        };
        padding: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
    };
    protected updateContentClass(): void;
    getContentClass(): any[];
    protected getContentStyle(value: any): any;
    protected getHeaderClass(): string;
    protected getHeaderStyle(value: any): any;
    protected updateStyle(value: any): void;
    getCurrentTabStyle(): any;
    getTabContentClass(): string;
}
