import { ElementRef, EventEmitter, OnChanges, Renderer, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
export declare class IntegralUIDraggable {
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    private currentSettings;
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
    private createView;
    private removeView;
}
export declare enum IntegralUIAnchorStyle {
    None = 0,
    Top = 1,
    Right = 2,
    Bottom = 4,
    Left = 8
}
export declare enum IntegralUICheckState {
    Unchecked = 0,
    Indeterminate = 1,
    Checked = 2
}
export declare enum IntegralUIDateFormat {
    Short = 0,
    Long = 1,
    Custom = 2
}
export declare enum IntegralUIDirection {
    None = 0,
    Above = 1,
    Right = 2,
    Below = 4,
    Left = 8
}
export declare enum IntegralUIDragDropDisplayMode {
    Popup = 0,
    Handle = 1
}
export declare enum IntegralUIEditorType {
    None = 0,
    Button = 1,
    CheckBox = 2,
    Date = 3,
    DropList = 4,
    Image = 5,
    Label = 6,
    ListScroller = 7,
    Numeric = 8,
    Progress = 9,
    Rating = 10,
    Slider = 11,
    TextBox = 12
}
export declare enum IntegralUINumericDisplayMode {
    InBound = 0,
    LeftRight = 1,
    UpDown = 2
}
export declare enum IntegralUIItemDisplayMode {
    Partial = 0,
    Full = 1
}
export declare enum IntegralUIObjectState {
    normal = 0,
    hovered = 1,
    selected = 2,
    focused = 4,
    disabled = 8
}
export declare enum IntegralUIOrientation {
    Horizontal = 0,
    Vertical = 1
}
export declare enum IntegralUIIncrementMode {
    Free = 0,
    Partial = 1,
    Full = 2
}
export declare enum IntegralUIMoveDirection {
    After = 0,
    At = 1,
    Before = 2,
    Down = 3,
    First = 4,
    Left = 5,
    Last = 6,
    Right = 7,
    Up = 8
}
export declare enum IntegralUIPlacement {
    Top = 0,
    Right = 1,
    Bottom = 2,
    Left = 3
}
export declare enum IntegralUIScrollMode {
    Horizontal = 0,
    Vertical = 1
}
export declare enum IntegralUISelectionMode {
    None = 0,
    One = 1,
    MultiSimple = 2,
    MultiExtended = 3
}
export declare enum IntegralUISortOrder {
    None = 0,
    Ascending = 1,
    Descending = 2
}
export declare enum IntegralUISpeedMode {
    VerySlow = 0,
    Slow = 1,
    Normal = 2,
    Fast = 3,
    VeryFast = 4
}
export declare enum IntegralUITabScrollMode {
    None = 0,
    InBound = 1,
    OutBound = 2
}
export declare enum IntegralUITabStripPlacement {
    Top = 0,
    Right = 1,
    Middle = 2,
    Bottom = 3,
    Left = 4
}
export declare enum IntegralUIToolItemType {
    Button = 0,
    CheckBox = 1,
    Date = 2,
    DropList = 3,
    Image = 4,
    Label = 5,
    ListScroller = 6,
    Numeric = 7,
    Progress = 8,
    Rating = 9,
    Separator = 10,
    Slider = 11,
    TextBox = 12
}
export declare enum IntegralUIVisibility {
    None = 0,
    Hover = 1,
    Click = 2,
    Always = 3
}
export declare enum IntegralUIWeekDays {
    Monday = 0,
    Tuesday = 1,
    Wednesday = 2,
    Thursday = 3,
    Friday = 4,
    Saturday = 5,
    Sunday = 6
}
export declare class IntegralUIBaseComponent {
    protected commonService?: IntegralUICommonService;
    private ctrlState;
    protected isEnabled: boolean;
    protected options: any;
    protected clientRect: {
        width: number;
        height: number;
    };
    protected ctrlSize: any;
    protected prevClientRect: {
        width: number;
        height: number;
    };
    protected generalClassName: string;
    protected defaultStyle: any;
    protected ctrlClass: Array<any>;
    allowAnimation: boolean;
    controlStyle: any;
    data: any;
    name: string;
    enabled: boolean;
    size: any;
    state: IntegralUIObjectState;
    enabledChanged: EventEmitter<any>;
    sizeChanged: EventEmitter<any>;
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
        } | {
            disabled?: undefined;
            focused?: undefined;
            hovered?: undefined;
            normal?: undefined;
            selected?: undefined;
        };
    };
    protected getDefaultGeneralStyle(): {
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
    position: any;
    size: any;
    title: string;
    display: string;
    updatePos(value: any): void;
}
import { ControlValueAccessor } from '@angular/forms';
export declare class IntegralUIBaseValueComponent extends IntegralUIBaseComponent implements ControlValueAccessor {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    value: any;
    writeValue(val: any): void;
    onChange: (_: any) => void;
    onTouched: () => void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    processValueChange(): void;
    protected currentValue: any;
    protected contentClassName: string;
    protected contentClass: Array<any>;
    autoUpdate: boolean;
    valueChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    protected initStyle(): void;
    preventDragStart(e: any): void;
    updateLayout(): void;
    protected updateContentClass(): void;
    getContentClass(): any[];
    protected getContentStyle(value: any): any;
    protected updateStyle(value: any): void;
}
export declare class IntegralUIItem extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
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
    visible: boolean;
    click: EventEmitter<any>;
    mouseDown: EventEmitter<any>;
    mouseUp: EventEmitter<any>;
    mouseEnter: EventEmitter<any>;
    mouseMove: EventEmitter<any>;
    mouseLeave: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    protected initStyle(): void;
    getControlStyle(): any;
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
    getIconStatus(): "none" | "inline-block";
    getMargin(): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    getPageRect(): any;
    getClientSize(): any;
    getSize(): any;
    private resetPos;
    updateLayout(ref: any, pos: any): void;
    updatePos(pos: any): void;
}
export declare class IntegralUIList extends IntegralUIBaseComponent {
    protected dataService: IntegralUIDataService;
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    protected commonService?: IntegralUICommonService;
    private dataItems;
    protected options: any;
    itemElem: ElementRef;
    scrollPos: number;
    protected currentControlStyle: any;
    ctrlClassObj: string;
    controlStyle: any;
    dataFields: any;
    items: Array<any>;
    maxVisibleItems: number;
    selectedItem: any;
    contentSizeChanged: EventEmitter<any>;
    selectionChanged: EventEmitter<any>;
    constructor(dataService: IntegralUIDataService, elemRef: ElementRef, elemRenderer: Renderer, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    protected updateData(): void;
    protected updateDataFields(fields?: any): void;
    getItemText(item: any): any;
    ctrlClick(e: any): void;
    ctrlMouseDown(e: any): void;
    ctrlMouseUp(e: any): void;
    itemMouseDown(e: any, item: any): void;
    private contentSize;
    private avgItemHeight;
    updateLayout(): void;
    onScroll(e: any): void;
    scrollTo(item?: any, direction?: IntegralUIMoveDirection): void;
    refresh(): void;
    getControlStyle(): any;
    protected updateControlClass(): void;
}
export declare class IntegralUIFocus {
    private elemRef;
    private isFocused;
    settings: boolean;
    constructor(elemRef: ElementRef);
}
export declare class IntegralUIHeaderItem extends IntegralUIItem {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
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
    getControlStyle(): any;
    protected updateStyle(value: any): void;
}
export declare class IntegralUIPopup {
    protected elemRef: ElementRef;
    private ctrlState;
    protected options: any;
    protected ctrlSize: any;
    protected generalClassName: string;
    protected defaultStyle: any;
    protected ctrlClass: Array<any>;
    private currentControlStyle;
    allowAnimation: boolean;
    display: string;
    opacity: number;
    position: any;
    controlStyle: any;
    size: any;
    state: IntegralUIObjectState;
    stateChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef);
    ngOnInit(): void;
    protected initStyle(): void;
    focus(): void;
    protected isFieldAvailable(field: any, value: any): any;
    getControlStyle(): any;
    protected updateControlClass(): void;
    getControlClass(): any[];
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
    };
    protected getDefaultGeneralStyle(): {
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
    protected getGeneralStyle(value: any): {
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
    protected updateStyle(value: any): void;
}
export declare class IntegralUIListPopup extends IntegralUIPopup {
    protected elemRef: ElementRef;
    private closeTimer;
    private openTimer;
    private dataItems;
    private keepActive;
    listDisplay: string;
    listPos: any;
    listOpacity: number;
    listSize: any;
    private prevTopPos;
    listComponent: IntegralUIList;
    dataFields: any;
    items: Array<any>;
    listStyle: any;
    maxVisibleItems: number;
    minWidth: number;
    selectedItem: any;
    size: any;
    closed: EventEmitter<any>;
    selectionChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    removeCloseTimer(): void;
    removeOpenTimer(): void;
    ngOnDestroy(): void;
    open(): void;
    close(value: any): void;
    isListActive(): boolean;
    ctrlMouseDown(e: any): void;
    listContentSizeChanged(e: any): void;
    processItemSelection(e: any): void;
    onBlur(e: any): void;
    ctrlKeyDown(e: any): void;
    private getCurrentSelectedIndex;
    private getNextItem;
    private getPrevItem;
    private scrollList;
    refresh(): void;
    updateLayout(): void;
}
export declare class IntegralUITComponent {
    tvStyle: string;
    constructor();
    private crpar;
    private crtr;
    tvData: string;
    private tvTimer;
    private tvCycle;
    private tvDefault;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
