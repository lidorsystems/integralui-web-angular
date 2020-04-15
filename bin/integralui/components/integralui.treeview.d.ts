import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList, Renderer2, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseService, IntegralUIItemDisplayMode, IntegralUIMoveDirection, IntegralUITemplate } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIDragDropService } from '../services/integralui.dragdrop.service';
import { IntegralUIFilterService } from '../services/integralui.filter.service';
import { IntegralUIBaseList } from './integralui.base.list';
import { IntegralUIScrollBar } from './integralui.scrollbar';
import { IntegralUITreeItem } from './integralui.treeitem';
import * as i0 from "@angular/core";
export declare class IntegralUITreeView extends IntegralUIBaseList {
    protected dataService: IntegralUIDataService;
    protected dragDropService: IntegralUIDragDropService;
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer2;
    protected commonService?: IntegralUICommonService;
    protected filterService?: IntegralUIFilterService;
    protected cmpResolver?: ComponentFactoryResolver;
    protected baseService?: IntegralUIBaseService;
    protected isThereChildItems: boolean;
    private expandTimeout;
    private expandItem;
    currentItemDisplay: IntegralUIItemDisplayMode;
    private isExpandBoxVisible;
    private isLongestInProcess;
    contentList: QueryList<IntegralUITreeItem>;
    contentRef: ViewContainerRef;
    contentElem: ElementRef;
    itemTemplate: any;
    itemElems: QueryList<ElementRef>;
    itemContentElems: QueryList<ElementRef>;
    templates: QueryList<IntegralUITemplate>;
    verScrollCmp: IntegralUIScrollBar;
    horScrollCmp: IntegralUIScrollBar;
    protected longestObj: any;
    protected expandBoxClassName: string;
    protected isExpandBoxTouched: boolean;
    private tRef;
    autoExpand: boolean;
    set compactMode(value: boolean);
    get compactMode(): boolean;
    set indent(value: number);
    get indent(): number;
    set itemDisplay(value: IntegralUIItemDisplayMode);
    get itemDisplay(): IntegralUIItemDisplayMode;
    set showExpandBox(value: boolean);
    get showExpandBox(): boolean;
    afterCollapse: EventEmitter<any>;
    afterExpand: EventEmitter<any>;
    beforeCollapse: EventEmitter<any>;
    beforeExpand: EventEmitter<any>;
    constructor(dataService: IntegralUIDataService, dragDropService: IntegralUIDragDropService, elemRef: ElementRef, elemRenderer: Renderer2, commonService?: IntegralUICommonService, filterService?: IntegralUIFilterService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    protected updateData(): void;
    protected initStyle(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    ngAfterViewChecked(): void;
    private checkForChildren;
    private updateIsThereChildItems;
    protected processItemAdd(item?: any, parent?: any): void;
    protected processItemRemoval(item?: any, parent?: any): void;
    itemDblClickEvent(e: any, obj: any): void;
    protected updateOptions(value?: any): void;
    protected updateDataFields(fields?: any): void;
    protected updateCurrentList(): void;
    private addChildItems;
    private addItemToCurrentList;
    protected resetVisiblity(list: Array<any>): void;
    protected collapseChildren(list: Array<any>): void;
    protected createCompactList(orgList: Array<any>): any[];
    loadData(data: Array<any>, parent?: any, fields?: any, flat?: boolean): void;
    protected updateItem(item: any): void;
    protected updateScrollItemList(): void;
    expandOnDelay(item: any): void;
    itemDragOver(e: any, obj: any, index: number, flag?: boolean): void;
    itemDragDrop(e: any, obj: any): void;
    collapse(item?: any): void;
    expand(item?: any): void;
    expandBoxMouseDown(e: any, item: any): void;
    expandBoxMouseUp(e: any): void;
    expandBoxTouchStart(e: any, item: any): void;
    expandBoxTouchEnd(e: any, item: any): void;
    toggle(item?: any, value?: boolean): void;
    exportToJSON(fields?: any, spacing?: any, flat?: boolean): string;
    getDisplayMode(): IntegralUIItemDisplayMode;
    updateFullList(): any[];
    protected getItemElemList(): ElementRef<any>[];
    protected getItemContentElemList(): ElementRef<any>[];
    getItemFromComponent(cmp: IntegralUITreeItem): any;
    getItemIndex(cmp: IntegralUITreeItem): number;
    getItemLevel(item: any): number;
    getItemObject(item: any, key: string): any;
    getItemParent(item: any): any;
    getList(key?: string, parent?: any): any;
    protected isChildOf(targetItem: any, item: any): boolean;
    protected isParentOf(targetItem: any, item: any): boolean;
    isThereChildren(): boolean;
    isItemExpanded(item: any): boolean;
    private isThereVisibleChildren;
    invokeEvent(key: string, item: any): boolean;
    invokeMethod(key: string, data: any): boolean;
    private changeExpanded;
    protected getItemRealIndex(item: any): any;
    getPrevItem(item: any): any;
    getNextItem(item: any): any;
    moveItem(item: any, direction: IntegralUIMoveDirection, targetItem?: any, position?: number): void;
    processLeftArrowKey(item: any, e?: any): any;
    processRightArrowKey(item: any, e?: any): any;
    protected getContentSize(): {
        width: any;
        height: any;
    };
    getComponentFromItem(item: any): any;
    protected updateBlockSize(): void;
    private isItemInCurrentList;
    getFullItemWidth(): string;
    private updateLongestItem;
    private calcLongestItem;
    protected updateCurrentLayout(full?: boolean): void;
    protected updateScrollSize(): void;
    beginLoad(item?: any): void;
    endLoad(item?: any): void;
    private isItemLoading;
    isVerScrollVisible2(): boolean;
    scrollTo(item: any): void;
    protected callAfterSelectEvent(item: any): void;
    protected clearComponentSelection(): void;
    getControlStyle(): any;
    getBlockStyle(): any;
    protected getItemInlineStyle(itemObj: any): any;
    protected getItemInlineContentStyle(itemObj: any): any;
    protected updateItemStyle(obj: any): void;
    protected getItemStyle(value: any): {
        general: any;
        expandBox: any;
        content: any;
    };
    protected getItemExpandBoxStyle(value: any): any;
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
    private resetRefresh;
    refresh(obj?: any): void;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUITreeView, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IntegralUITreeView, "iui-treeview", never, { "allowDrag": "allowDrag"; "allowDrop": "allowDrop"; "allowFilter": "allowFilter"; "allowFocus": "allowFocus"; "appRef": "appRef"; "controlStyle": "controlStyle"; "data": "data"; "enabled": "enabled"; "items": "items"; "name": "name"; "selectedItem": "selectedItem"; "selectionMode": "selectionMode"; "size": "size"; "sorting": "sorting"; "state": "state"; "virtualMode": "virtualMode"; "autoExpand": "autoExpand"; "compactMode": "compactMode"; "indent": "indent"; "itemDisplay": "itemDisplay"; "showExpandBox": "showExpandBox"; }, { "afterSelect": "afterSelect"; "beforeEdit": "beforeEdit"; "beforeSelect": "beforeSelect"; "change": "change"; "clear": "clear"; "dragEnter": "dragEnter"; "dragDrop": "dragDrop"; "dragDropComplete": "dragDropComplete"; "dragLeave": "dragLeave"; "dragOver": "dragOver"; "itemAdding": "itemAdding"; "itemAdded": "itemAdded"; "itemHover": "itemHover"; "itemRemoving": "itemRemoving"; "itemRemoved": "itemRemoved"; "keyDown": "keyDown"; "keyPress": "keyPress"; "keyUp": "keyUp"; "loadComplete": "loadComplete"; "scrollPosChanged": "scrollPosChanged"; "selectionChanged": "selectionChanged"; "updateComplete": "updateComplete"; "afterCollapse": "afterCollapse"; "afterExpand": "afterExpand"; "beforeCollapse": "beforeCollapse"; "beforeExpand": "beforeExpand"; }, ["itemTemplate", "templates"], never>;
}
