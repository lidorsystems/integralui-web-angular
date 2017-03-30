import { ElementRef, EventEmitter, TemplateRef } from '@angular/core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUITemplate {
    settings: any;
    template: TemplateRef<any>;
    constructor();
    getTemplate(): TemplateRef<any>;
}
export declare enum IntegralUIAnchorStyle {
    None = 0,
    Top = 1,
    Right = 2,
    Bottom = 4,
    Left = 8,
}
export declare enum IntegralUIObjectState {
    normal = 0,
    hovered = 1,
    selected = 2,
    focused = 4,
    disabled = 8,
}
export declare enum IntegralUIOrientation {
    Horizontal = 0,
    Vertical = 1,
}
export declare enum IntegralUISelectionMode {
    None = 0,
    One = 1,
    MultiSimple = 2,
    MultiExtended = 3,
}
export declare enum IntegralUITabStripPlacement {
    Top = 0,
    Right = 1,
    Middle = 2,
    Bottom = 3,
    Left = 4,
}
export declare enum IntegralUIVisibility {
    None = 0,
    Hover = 1,
    Click = 2,
    Always = 3,
}
export declare class IntegralUIBaseComponent {
    protected commonService: IntegralUICommonService;
    private ctrlState;
    protected options: any;
    protected generalClassName: string;
    protected defaultStyle: any;
    protected ctrlClass: Array<any>;
    controlStyle: any;
    data: any;
    state: IntegralUIObjectState;
    styleChanged: EventEmitter<any>;
    stateChanged: EventEmitter<any>;
    constructor(commonService?: IntegralUICommonService);
    ngOnInit(): void;
    protected initStyle(): void;
    protected processStateChanged(): void;
    protected updateControlClass(): void;
    protected getControlClass(): any[];
    protected getDefaultStyle(): {
        general: {
            disabled: any;
            focused: any;
            hovered: any;
            normal: any;
            selected: any;
        };
    };
    protected getDefaultGeneralStyle(): {
        disabled: any;
        focused: any;
        hovered: any;
        normal: any;
        selected: any;
    };
    protected getGeneralStyle(value: any): any;
    protected updateStyle(value: any): void;
}
export declare class IntegralUIBaseService {
    private componentRef;
    constructor();
    getComponent(): any;
    setComponent(ref: any): void;
}
export declare class IntegralUIDragWindow {
    iconClass: string;
    position: {
        x: number;
        y: number;
    };
    size: {
        width: number;
        height: number;
    };
    title: string;
    display: string;
    updatePos(value: any): void;
}
export declare class IntegralUIItem extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    private itemPos;
    private positionType;
    contentElem: ElementRef;
    protected contentClassName: string;
    protected contentClass: Array<any>;
    icon: string;
    text: string;
    click: EventEmitter<any>;
    mouseDown: EventEmitter<any>;
    mouseUp: EventEmitter<any>;
    mouseEnter: EventEmitter<any>;
    mouseMove: EventEmitter<any>;
    mouseLeave: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    protected initStyle(): void;
    protected updateContentClass(): void;
    protected getContentClass(): any[];
    protected getContentStyle(value: any): any;
    protected updateStyle(value: any): void;
    protected processStateChanged(): void;
    protected onClick(e: any): void;
    protected onMouseDown(e: any): void;
    protected onMouseUp(e: any): void;
    protected onMouseEnter(e: any): void;
    protected onMouseMove(e: any): void;
    protected onMouseLeave(e: any): void;
    getContentSize(): any;
    protected getIconStatus(): string;
    getMargin(): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    getPageRect(): any;
    getSize(): any;
    private resetPos();
    updateLayout(ref: any, pos: any): void;
    updatePos(pos: any): void;
}
export declare class IntegralUIFocus {
    private elemRef;
    private isFocused;
    settings: boolean;
    constructor(elemRef: ElementRef);
}
export declare class IntegralUIHeaderItem extends IntegralUIItem {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    protected expandBoxClassName: string;
    protected expandHorizontalClass: Array<any>;
    protected expandVerticalClass: Array<any>;
    protected expandArrowBottomLeftClass: Array<any>;
    protected expandArrowBottomRightClass: Array<any>;
    protected expandArrowVerticalClass: Array<any>;
    protected expandArrowTopLeftClass: Array<any>;
    protected expandArrowTopRightClass: Array<any>;
    animationType: string;
    animationState: string;
    expandClicked: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    protected initStyle(): void;
    protected getExpandVerticalClass(): any[];
    protected getExpandHorizontalClass(): any[];
    protected getExpandArrowBottomLeftClass(): any[];
    protected getExpandArrowBottomRightClass(): any[];
    protected getExpandArrowVerticalClass(): any[];
    protected getExpandArrowTopLeftClass(): any[];
    protected getExpandArrowTopRightClass(): any[];
    expandBoxClicked(e: any): void;
    protected updateStyle(value: any): void;
}
export declare class IntegralUITComponent {
    tvStyle: string;
    constructor();
    private crpar();
    private crtr(params);
    private tvData;
    private tvTimer;
    private tvCycle;
    private tvDefault;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
