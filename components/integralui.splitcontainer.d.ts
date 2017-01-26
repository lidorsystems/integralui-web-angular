import { ComponentFactoryResolver, ElementRef, EventEmitter, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService, IntegralUIOrientation } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUISplitContainerTags {
}
export declare class IntegralUISplitContainer extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    protected cmpResolver: ComponentFactoryResolver;
    protected baseService: IntegralUIBaseService;
    private panel1Data;
    private panel2Data;
    private blockPos;
    private swap;
    private tabSize;
    private maxPos;
    protected currentOrientation: IntegralUIOrientation;
    handleElem: ElementRef;
    panel1Elem: ElementRef;
    panel2Elem: ElementRef;
    splitterElem: ElementRef;
    splitterRef: ViewContainerRef;
    tab1ContentElem: ElementRef;
    tab2ContentElem: ElementRef;
    protected ctrlRect: any;
    private clientRect;
    protected currentSplitterDistance: number;
    protected panel1Size: {
        width: number;
        height: number;
    };
    protected panel2Size: {
        width: number;
        height: number;
    };
    protected splitterSize: {
        width: number;
        height: number;
    };
    protected splitterBlockSize: {
        width: number;
        height: number;
    };
    protected splitterHandleSize: {
        width: number;
        height: number;
    };
    protected swapButtonSize: {
        width: number;
        height: number;
    };
    protected tab1Size: {
        width: number;
        height: number;
    };
    protected tab1ContentSize: {
        width: number;
        height: number;
    };
    protected tab2Size: {
        width: number;
        height: number;
    };
    protected tab2ContentSize: {
        width: number;
        height: number;
    };
    protected handleClass: Array<any>;
    protected handleClassName: string;
    protected panelClass: Array<any>;
    protected panelClassName: string;
    protected splitterClass: Array<any>;
    protected splitterClassName: string;
    protected swapButtonClass: Array<any>;
    protected swapButtonClassName: string;
    protected tabClass: Array<any>;
    protected tabClassName: string;
    private trialRef;
    orientation: IntegralUIOrientation;
    panel1: any;
    panel2: any;
    splitterDistance: number;
    orientationChanged: EventEmitter<any>;
    panelsSwapped: EventEmitter<any>;
    splitterMoved: EventEmitter<any>;
    splitterMoving: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    protected initStyle(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    swapButtonClicked(): void;
    updateLayout(): void;
    private splitterStartPos;
    private isSplitterActive;
    ctrlMouseMove(e: any): void;
    splitterMouseDown(e: any): void;
    onWindowMouseUp(e: any): void;
    private getInlinePanel1Style();
    private getInlinePanel2Style();
    private getInlineSplitterStyle();
    private getInlineTab1Style();
    private getInlineTab1ContentStyle();
    private getInlineTab2Style();
    private getInlineTab2ContentStyle();
    private getInlineHandleBlockStyle();
    private getInlineHandleStyle();
    private getInlineSwapButtonStyle();
    protected updateSplitterClass(): void;
    protected getSplitterClass(): any[];
    protected updateHandleClass(): void;
    protected getHandleClass(): any[];
    protected updatePanelClass(): void;
    protected getPanelClass(): any[];
    protected updateSwapButtonClass(): void;
    protected getSwapButtonClass(): any[];
    protected updateTabClass(): void;
    protected getTabClass(): any[];
    protected getPanelStyle(value: any): any;
    protected getSplitterGeneralStyle(value: any): any;
    protected getHandleStyle(value: any): any;
    protected getSwapButtonStyle(value: any): any;
    protected getTabStyle(value: any): any;
    protected getSplitterStyle(value: any): any;
    protected getDefaultStyle(): {
        general: {
            disabled: any;
            focused: any;
            hovered: any;
            normal: any;
            selected: any;
        };
        panel: {
            disabled: any;
            normal: any;
        };
        splitter: {
            general: {
                normal: any;
                horizontal: any;
                vertical: any;
            };
            handle: {
                general: any;
                horizontal: any;
                vertical: any;
            };
            swapButton: {
                disabled: any;
                hovered: any;
                normal: any;
                selected: any;
            };
            tab: {
                disabled: any;
                focused: any;
                hovered: any;
                normal: any;
                selected: any;
            };
        };
    };
    protected getDefaultPanelStyle(): {
        disabled: any;
        normal: any;
    };
    protected getDefaultSplitterStyle(): {
        general: {
            normal: any;
            horizontal: any;
            vertical: any;
        };
        handle: {
            general: any;
            horizontal: any;
            vertical: any;
        };
        swapButton: {
            disabled: any;
            hovered: any;
            normal: any;
            selected: any;
        };
        tab: {
            disabled: any;
            focused: any;
            hovered: any;
            normal: any;
            selected: any;
        };
    };
    protected updateStyle(value: any): void;
    refresh(): void;
}
