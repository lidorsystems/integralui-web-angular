import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList } from '@angular/core';
import { IntegralUIBaseComponent } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
export declare class IntegralUIBreadCrumb extends IntegralUIBaseComponent {
    protected dataService: IntegralUIDataService;
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    protected cmpResolver?: ComponentFactoryResolver;
    private dataItems;
    currentList: Array<any>;
    protected isThereChildItems: boolean;
    protected options: any;
    private activeObj;
    hoverItem: any;
    private isListOpened;
    private prevActiveObj;
    private isRootActive;
    private isRootHovered;
    blockOpacity: number;
    protected isPopupDelayed: boolean;
    itemSize: any;
    private listSize;
    startIndex: number;
    protected updateTimeout: any;
    itemTemplate: any;
    blockElem: ElementRef;
    topButtonElem: ElementRef;
    itemElems: QueryList<ElementRef>;
    buttonElems: QueryList<ElementRef>;
    private dropListRef;
    private dropList;
    protected currentSelection: any;
    protected expandBoxClassName: string;
    protected itemClassName: string;
    protected itemContentClassName: string;
    protected rootButtonClassName: string;
    rootButtonStyle: Array<any>;
    protected isExpandBoxTouched: boolean;
    appRef: any;
    dataFields: any;
    dropDownWidth: number;
    items: Array<any>;
    selectedItem: any;
    selectionChanged: EventEmitter<any>;
    constructor(dataService: IntegralUIDataService, elemRef: ElementRef, commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver);
    ngOnInit(): void;
    protected initStyle(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    getItemObject(item: any, key: string): any;
    protected updateCurrentList(): void;
    protected updateData(): void;
    protected updateDataFields(fields?: any): void;
    protected updateOptions(value?: any): void;
    protected addDropList(): void;
    protected removeDropList(): void;
    protected hideDropList(): void;
    protected showPopup(e: any, obj: any, index: number): void;
    private getButtonElemRect;
    expandBoxMouseDown(e: any, obj: any, index: number): void;
    expandBoxMouseUp(e: any): void;
    expandBoxTouchStart(e: any, obj: any): void;
    toggle(obj?: any, value?: boolean): void;
    itemMouseEnter(e: any, obj: any, index: number): void;
    itemMouseLeave(e: any, obj: any): void;
    itemMouseDown(e: any, obj: any): void;
    itemMouseUp(e: any, obj: any): void;
    itemTouchStart(e: any, obj: any): void;
    itemTouchEnd(e: any, obj: any): void;
    getRootButtonHeight(): string;
    getItemHeight(): string;
    getItemParent(item: any): any;
    protected isItemAllowed(item: any): boolean;
    protected isItemEnabled(item: any): boolean;
    protected isItemHovered(item: any): boolean;
    private isItemLoading;
    protected isItemSelected(obj: any): boolean;
    private isThereVisibleChildren;
    private updateActiveObj;
    protected getButtonElemList(): ElementRef<any>[];
    protected getItemElemList(): ElementRef<any>[];
    protected resetLayoutTimer(): void;
    updateLayout(): void;
    private getRootList;
    rootMouseEnter(e: any): void;
    rootMouseLeave(e: any): void;
    rootMouseDown(e: any): void;
    rootTouchStart(e: any): void;
    protected showRootList(e: any, list: Array<any>): void;
    getControlStyle(): any;
    protected getItemInlineStyle(obj: any): any;
    refresh(obj?: any): void;
    protected updateItemStyle(obj: any): void;
    protected updateRootButtonStyle(): void;
    protected getItemStyle(value: any): {
        general: any;
        expandBox: any;
        content: any;
    };
    protected getItemExpandBoxStyle(value: any): any;
    protected getItemGeneralStyle(value: any): any;
    protected getItemContentStyle(value: any): any;
    protected getDefaultListStyle(): {
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
        item: {
            general: {
                disabled: any;
                focused: any;
                normal: any;
                hovered: any;
                selected: any;
            };
            expandBox: {
                general: any;
                load: any;
                expanded: any;
                collapsed: any;
            };
            content: {
                disabled: any;
                focused: any;
                normal: any;
                hovered: any;
                selected: any;
            };
        };
    };
    protected getDefaultItemStyle(): {
        general: {
            disabled: any;
            focused: any;
            normal: any;
            hovered: any;
            selected: any;
        };
        expandBox: {
            general: any;
            load: any;
            expanded: any;
            collapsed: any;
        };
        content: {
            disabled: any;
            focused: any;
            normal: any;
            hovered: any;
            selected: any;
        };
    };
    protected getDefaultItemExpandBoxStyle(): {
        general: any;
        load: any;
        expanded: any;
        collapsed: any;
    };
    protected getDefaultItemGeneralStyle(): {
        disabled: any;
        focused: any;
        normal: any;
        hovered: any;
        selected: any;
    };
    protected getDefaultItemContentStyle(): {
        disabled: any;
        focused: any;
        normal: any;
        hovered: any;
        selected: any;
    };
    protected updateStyle(value: any): void;
}
