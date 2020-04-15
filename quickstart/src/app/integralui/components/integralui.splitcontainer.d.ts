import { ComponentFactoryResolver, ElementRef, EventEmitter, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService, IntegralUIOrientation } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import * as i0 from "@angular/core";
export declare class IntegralUISplitContainerTags {
    static ɵfac: i0.ɵɵFactoryDef<IntegralUISplitContainerTags, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<IntegralUISplitContainerTags, "iui-panel1, iui-panel2", never, {}, {}, never>;
}
export declare class IntegralUISplitContainer extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    protected cmpResolver?: ComponentFactoryResolver;
    protected baseService?: IntegralUIBaseService;
    panel1Data: any;
    panel2Data: any;
    private blockPos;
    private cmdButtonsAllowed;
    private maxPos;
    private swap;
    private tabSize;
    protected currentOrientation: IntegralUIOrientation;
    buttonBlockElem: ElementRef;
    handleElem: ElementRef;
    panel1Elem: ElementRef;
    panel2Elem: ElementRef;
    splitterElem: ElementRef;
    splitterRef: ViewContainerRef;
    tab1ContentElem: ElementRef;
    tab2ContentElem: ElementRef;
    protected ctrlRect: any;
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
    protected splitterButtonBlockSize: {
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
    protected buttonClass: Array<any>;
    protected buttonClassName: string;
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
    private tRef;
    set orientation(value: IntegralUIOrientation);
    get orientation(): IntegralUIOrientation;
    set panel1(value: any);
    get panel1(): any;
    set panel2(value: any);
    get panel2(): any;
    set showButtons(value: boolean);
    get showButtons(): boolean;
    set splitterDistance(value: number);
    get splitterDistance(): number;
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
    ngAfterContentChecked(): void;
    swapButtonClicked(): void;
    updateLayout(): void;
    private splitterStartPos;
    private isSplitterActive;
    ctrlMouseMove(e: any): void;
    splitterMouseDown(e: any): void;
    onWindowMouseUp(e: any): void;
    changeOrientation(vertical?: boolean): void;
    getControlStyle(): any;
    getInlinePanel1Style(): {
        top: string;
        left: string;
        width: string;
        height: string;
    };
    getInlinePanel2Style(): {
        top: string;
        left: string;
        width: string;
        height: string;
    };
    getInlineSplitterStyle(): {
        top: string;
        left: string;
        width: string;
        height: string;
    };
    getInlineTab1Style(): {
        top: string;
        left: string;
        width: string;
        height: string;
    };
    getInlineTab1ContentStyle(): {
        top: string;
        left: string;
    };
    getInlineTab2Style(): {
        top: string;
        right: string;
        bottom: string;
        left: string;
        width: string;
        height: string;
    };
    getInlineTab2ContentStyle(): {
        top: string;
        right: string;
    };
    getInlineHandleBlockStyle(): {
        cursor: string;
        width: string;
        height: string;
        top: string;
        left: string;
    };
    getInlineHandleStyle(): {
        'margin-top': string;
        'margin-left': string;
    };
    getInlineSwapButtonStyle(): {
        top: string;
        left: string;
    };
    getInlineButtonBlockStyle(): {
        top: string;
        right: string;
        bottom: string;
        left: string;
    };
    protected updateButtonClass(): void;
    getButtonClass(): any[];
    protected updateSplitterClass(): void;
    getSplitterClass(): any[];
    protected updateHandleClass(): void;
    getHandleClass(): any[];
    protected updatePanelClass(): void;
    getPanelClass(): any[];
    protected updateSwapButtonClass(): void;
    getSwapButtonClass(): any[];
    protected updateTabClass(): void;
    getTabClass(): any[];
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
        } | {
            disabled?: undefined;
            focused?: undefined;
            hovered?: undefined;
            normal?: undefined;
            selected?: undefined;
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
    static ɵfac: i0.ɵɵFactoryDef<IntegralUISplitContainer, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IntegralUISplitContainer, "iui-splitcontainer", never, { "controlStyle": "controlStyle"; "data": "data"; "enabled": "enabled"; "name": "name"; "size": "size"; "state": "state"; "orientation": "orientation"; "panel1": "panel1"; "panel2": "panel2"; "showButtons": "showButtons"; "splitterDistance": "splitterDistance"; }, { "orientationChanged": "orientationChanged"; "panelsSwapped": "panelsSwapped"; "splitterMoved": "splitterMoved"; "splitterMoving": "splitterMoving"; }, never, ["iui-panel1", "iui-panel2"]>;
}
