import { ElementRef, EventEmitter, OnChanges, Renderer, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUIDraggable {
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    settings: boolean;
    constructor(elemRef: ElementRef, elemRenderer: Renderer);
    ngAfterViewInit(): void;
}
export declare class IntegralUITemplate {
    settings: any;
    template: TemplateRef<any>;
    constructor();
    getTemplate(): TemplateRef<any>;
}
export declare class IntegralUITemplateOutlet implements OnChanges {
    private containerRef;
    private viewRef;
    iuiTemplateOutletContext: Object;
    iuiTemplateOutlet: TemplateRef<any>;
    constructor(containerRef: ViewContainerRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private createView();
    private removeView();
}
export declare enum IntegralUIAnchorStyle {
    None = 0,
    Top = 1,
    Right = 2,
    Bottom = 4,
    Left = 8,
}
export declare enum IntegralUICheckState {
    Unchecked = 0,
    Indeterminate = 1,
    Checked = 2,
}
export declare enum IntegralUIDirection {
    None = 0,
    Above = 1,
    Right = 2,
    Below = 4,
    Left = 8,
}
export declare enum IntegralUINumericDisplayMode {
    InBound = 0,
    LeftRight = 1,
    UpDown = 2,
}
export declare enum IntegralUIItemDisplayMode {
    Partial = 0,
    Full = 1,
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
export declare enum IntegralUIIncrementMode {
    Free = 0,
    Partial = 1,
    Full = 2,
}
export declare enum IntegralUIPlacement {
    Top = 0,
    Right = 1,
    Bottom = 2,
    Left = 3,
}
export declare enum IntegralUIScrollMode {
    Horizontal = 0,
    Vertical = 1,
}
export declare enum IntegralUISelectionMode {
    None = 0,
    One = 1,
    MultiSimple = 2,
    MultiExtended = 3,
}
export declare enum IntegralUISortOrder {
    None = 0,
    Ascending = 1,
    Descending = 2,
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
    protected isEnabled: boolean;
    protected options: any;
    protected generalClassName: string;
    protected defaultStyle: any;
    protected ctrlClass: Array<any>;
    controlStyle: any;
    data: any;
    name: string;
    enabled: boolean;
    state: IntegralUIObjectState;
    styleChanged: EventEmitter<any>;
    stateChanged: EventEmitter<any>;
    constructor(commonService?: IntegralUICommonService);
    ngOnInit(): void;
    protected initStyle(): void;
    protected processStateChanged(): void;
    protected updateControlClass(): void;
    getControlClass(): any[];
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
import { ControlValueAccessor } from '@angular/forms';
export declare class IntegralUIBaseValueComponent extends IntegralUIBaseComponent implements ControlValueAccessor {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    value: any;
    writeValue(val: any): void;
    onChange: (_: any) => void;
    onTouched: () => void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    processValueChange(): void;
    protected currentValue: any;
    protected clientRect: {
        width: number;
        height: number;
    };
    protected prevClientRect: {
        width: number;
        height: number;
    };
    protected contentClassName: string;
    protected contentClass: Array<any>;
    autoUpdate: boolean;
    valueChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    protected initStyle(): void;
    updateLayout(): void;
    protected updateContentClass(): void;
    getContentClass(): any[];
    protected getContentStyle(value: any): any;
    protected updateStyle(value: any): void;
}
export declare class IntegralUIItem extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    itemPos: {
        top: number;
        left: number;
    };
    positionType: string;
    contentElem: ElementRef;
    protected contentClassName: string;
    protected contentClass: Array<any>;
    icon: string;
    iconUrl: string;
    iconSize: any;
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
    getContentClass(): any[];
    protected getContentStyle(value: any): any;
    protected updateStyle(value: any): void;
    protected processStateChanged(): void;
    onClick(e: any): void;
    onMouseDown(e: any): void;
    onMouseUp(e: any): void;
    onMouseEnter(e: any): void;
    onMouseMove(e: any): void;
    onMouseLeave(e: any): void;
    getContentSize(): any;
    getIconStatus(): "inline-block" | "none";
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
    getExpandVerticalClass(): any[];
    getExpandHorizontalClass(): any[];
    getExpandArrowBottomLeftClass(): any[];
    getExpandArrowBottomRightClass(): any[];
    getExpandArrowVerticalClass(): any[];
    getExpandArrowTopLeftClass(): any[];
    getExpandArrowTopRightClass(): any[];
    expandBoxClicked(e: any): void;
    protected updateStyle(value: any): void;
}
export declare class IntegralUITComponent {
    tvStyle: string;
    constructor();
    private crpar();
    private crtr(params);
    tvData: string;
    private tvTimer;
    private tvCycle;
    private tvDefault;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
