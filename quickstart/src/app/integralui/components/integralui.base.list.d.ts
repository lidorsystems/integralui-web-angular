import { ComponentFactoryResolver, ElementRef, EventEmitter, Renderer } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIOrientation, IntegralUIMoveDirection, IntegralUISelectionMode, IntegralUISortOrder, IntegralUISpeedMode } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIDragDropService } from '../services/integralui.dragdrop.service';
import { IntegralUIFilterService } from '../services/integralui.filter.service';
export declare class IntegralUIBaseList extends IntegralUIBaseComponent {
    protected dataService: IntegralUIDataService;
    protected dragDropService: IntegralUIDragDropService;
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    protected commonService: IntegralUICommonService;
    protected filterService: IntegralUIFilterService;
    protected cmpResolver: ComponentFactoryResolver;
    animateItemSize: any;
    protected prevClickedObj: any;
    protected currentList: Array<any>;
    protected options: any;
    private dataItems;
    protected itemList: Array<any>;
    scrollItemList: Array<any>;
    private dropMarkElem;
    private dragCmpRef;
    private dragCmp;
    private cloneElem;
    private cloneElemStartPos;
    protected isCtrlDragEntered: boolean;
    protected isDragActive: boolean;
    protected filterParams: any;
    ctrlCursor: string;
    hoverItem: any;
    protected currentFocusItem: any;
    protected isKeyboardActive: boolean;
    protected allowUpdate: boolean;
    protected avgItemHeight: number;
    blockSize: {
        width: number;
        height: number;
    };
    contentSize: {
        width: number;
        height: number;
    };
    protected currentIndex: number;
    protected prevIndex: number;
    private virtualization;
    protected visibleRange: number;
    protected updateTimer: any;
    currentScrollPos: any;
    maxScrollPos: any;
    private accelerator;
    protected isScrollActive: boolean;
    protected isScrollTimerActive: boolean;
    protected prevScrollPos: {
        x: number;
        y: number;
    };
    protected scrollBarSize: {
        width: number;
        height: number;
    };
    private scrollCount;
    scrollLargeChange: {
        x: number;
        y: number;
    };
    protected scrollSize: {
        width: number;
        height: number;
    };
    private scrollTimerID;
    horScrollOrientation: IntegralUIOrientation;
    protected currentSelection: any;
    protected currentSelectionMode: IntegralUISelectionMode;
    private shiftFirstSelectedItem;
    private removeIndex;
    protected currentSelectedItems: Array<any>;
    protected sortComparer: any;
    protected itemClassName: string;
    protected itemContentClassName: string;
    protected refreshTimer: any;
    protected touchStartPos: any;
    protected touchEndPos: any;
    appRef: any;
    allowDrag: boolean;
    allowDrop: boolean;
    allowFilter: boolean;
    allowFocus: boolean;
    dataFields: any;
    focusedItem: any;
    items: Array<any>;
    itemSpacing: number;
    mouseWheelSpeed: IntegralUISpeedMode;
    showScroll: any;
    selectedItem: any;
    selectionMode: IntegralUISelectionMode;
    sorting: IntegralUISortOrder;
    virtualMode: boolean;
    afterSelect: EventEmitter<any>;
    beforeEdit: EventEmitter<any>;
    beforeSelect: EventEmitter<any>;
    change: EventEmitter<any>;
    clear: EventEmitter<any>;
    dragEnd: EventEmitter<any>;
    dragEnter: EventEmitter<any>;
    dragDrop: EventEmitter<any>;
    dragDropComplete: EventEmitter<any>;
    dragLeave: EventEmitter<any>;
    dragOver: EventEmitter<any>;
    dragStart: EventEmitter<any>;
    itemAdding: EventEmitter<any>;
    itemAdded: EventEmitter<any>;
    itemClick: EventEmitter<any>;
    itemDblClick: EventEmitter<any>;
    itemHover: EventEmitter<any>;
    itemRemoving: EventEmitter<any>;
    itemRemoved: EventEmitter<any>;
    itemRightClick: EventEmitter<any>;
    keyDown: EventEmitter<any>;
    keyPress: EventEmitter<any>;
    keyUp: EventEmitter<any>;
    loadComplete: EventEmitter<any>;
    scrollPosChanged: EventEmitter<any>;
    selectionChanged: EventEmitter<any>;
    updateComplete: EventEmitter<any>;
    constructor(dataService: IntegralUIDataService, dragDropService: IntegralUIDragDropService, elemRef: ElementRef, elemRenderer: Renderer, commonService?: IntegralUICommonService, filterService?: IntegralUIFilterService, cmpResolver?: ComponentFactoryResolver);
    ngOnInit(): void;
    protected initStyle(): void;
    addItem(item: any, parent?: any): void;
    clearItems(parent?: any): void;
    insertItemAt(item: any, index: number, parent?: any): void;
    insertItemBefore(item: any, refItem: any): void;
    insertItemAfter(item: any, refItem: any): void;
    removeItem(item: any): boolean;
    removeItemAt(index: number, parent?: any): boolean;
    protected callEventAdd(type: string, item: any, index?: number, parent?: any, refItem?: any, flag?: boolean): void;
    protected callEventRemove(item: any, index?: number, parent?: any): boolean;
    protected processItemAdd(item?: any, parent?: any): void;
    protected processItemRemoval(item?: any, parent?: any): void;
    itemClickEvent(e: any, obj: any): void;
    itemDblClickEvent(e: any, obj: any): void;
    itemRightClickEvent(e: any, obj: any): void;
    getDataFields(): any;
    protected updateCurrentList(): void;
    protected updateData(): void;
    protected updateOptions(value?: any): void;
    protected updateDataFields(fields?: any): void;
    protected updateShowScroll(value?: any): void;
    protected processLoadData(data: Array<any>, parent?: any, fields?: any, flat?: boolean): void;
    protected updateItem(item: any): void;
    protected updateScrollItemList(): void;
    private addDropMark(pos);
    removeDropMark(): void;
    protected callDragDropEvent(e: any, data: any, flag?: boolean): boolean;
    private checkEmptySpace(e);
    ctrlDragEnd(e: any): void;
    ctrlDragEnter(e: any): void;
    ctrlDragDrop(e: any): void;
    ctrlDragLeave(e: any): void;
    ctrlDragOver(e: any): void;
    private dropMark(e, flag?);
    private updateDragComponent(value);
    protected isDragAllowed(item: any): boolean;
    protected isDropAllowed(sourceData: any, targetItem: any, dropPos: number): any;
    protected processDragStart(e: any, item: any): void;
    protected processDragEnter(e: any): void;
    protected processDragLeave(e: any): void;
    protected processDragOver(e: any, item?: any, itemBounds?: any, flag?: boolean): void;
    protected processDragDrop(e: any, item?: any): void;
    protected drop(e: any, data: any): void;
    protected processDataDrop(e: any, item: any, data: any): void;
    protected callAfterSelectEvent(item: any): void;
    itemDragStart(e: any, obj: any): void;
    itemDragOver(e: any, obj: any, index: number, flag?: boolean): void;
    itemDragDrop(e: any, obj: any): void;
    itemDragEnd(e: any, obj: any): void;
    exportToJSON(fields?: any, spacing?: any): string;
    filter(params?: any): void;
    cloneItem(item: any): any;
    protected createCloneList(list: Array<any>): any[];
    protected getFilterTree(params: any): any;
    protected getObjFromItem(item: any): any;
    protected getObjFromScrollItem(item: any): any;
    protected getItemCurrentIndex(item: any): number;
    protected getItemElemList(): any;
    getItemFromComponent(cmp: any): any;
    getList(key?: string): any;
    getTopItem(): any;
    invokeMethod(key: string, data: any): boolean;
    protected isChildOf(targetItem: any, item: any): boolean;
    protected isComponentIndexInRange(index: number): boolean;
    protected isIndexInRange(index: number): boolean;
    protected isItemAllowed(item: any): boolean;
    protected filterIsThereChildren(item: any): boolean;
    protected isItemEnabled(item: any): boolean;
    protected isItemHovered(item: any): boolean;
    protected isItemSelected(item: any): boolean;
    protected isParentOf(targetItem: any, item: any): boolean;
    protected updateItemList(): void;
    protected getLastItemIndex(): number;
    getPrevItem(item: any): any;
    getNextItem(item: any): any;
    moveItem(item: any, direction: IntegralUIMoveDirection, targetItem?: any, position?: number): void;
    protected moveItemAt(item: any, targetItem: any, direction: IntegralUIMoveDirection, position?: number): void;
    itemMouseEnter(e: any, obj: any): void;
    itemMouseLeave(e: any, obj: any): void;
    itemGotFocus(item: any): void;
    itemLostFocus(item: any): void;
    itemKeyDown(e: any, item: any): void;
    itemKeyPress(e: any, item: any): void;
    itemKeyUp(e: any, item: any): void;
    processDownArrowKey(item: any, e?: any): any;
    processEndKey(item: any, e?: any): any;
    processHomeKey(item: any, e?: any): any;
    processLeftArrowKey(item: any, e?: any): any;
    processPageDownKey(item: any, e?: any): any;
    processPageUpKey(item: any, e?: any): any;
    processRightArrowKey(item: any, e?: any): any;
    processUpArrowKey(item: any, e?: any): any;
    protected getDownItem(item: any): any;
    protected getUpItem(item: any): any;
    protected isFirstItem(item: any): boolean;
    protected isLastItem(item: any): boolean;
    moveFocusFromItem(item: any, direction: string): any;
    onWindowKeyDown(e: any): void;
    onWindowKeyUp(e: any): void;
    protected getContentSize(): {
        width: number;
        height: number;
    };
    refresh(): void;
    protected updateBlockSize(): void;
    protected resetLayoutTimer(): void;
    suspendLayout(): void;
    resumeLayout(): void;
    protected updateCurrentLayout(): void;
    updateLayout(): void;
    protected updateScrollSize(): void;
    protected updateVisibleRange(): void;
    updateView(): void;
    private updateCloneElemPos(e);
    onCtrlMouseEnter(e: any): void;
    onCtrlMouseLeave(e: any): void;
    itemMouseDown(e: any, obj: any): void;
    itemMouseUp(e: any, obj: any): void;
    onScroll(e: any): void;
    scrollPos(value?: any): any;
    protected changeHorizontalScrollPos(value: number): void;
    protected changeVerticalScrollPos(value: number): void;
    processMouseWheel(e: any, flag?: boolean): void;
    isVerScrollVisible(): boolean;
    isHorScrollVisible(): boolean;
    onVerticalScrollStart(e: any): void;
    onVerticalScrollEnd(e: any): void;
    onVerticalScrollChanged(e: any): void;
    onHorizontalScrollStart(e: any): void;
    onHorizontalScrollEnd(e: any): void;
    onHorizontalScrollChanged(e: any): void;
    protected processScroll(e: any): void;
    private startScrollTimer(flag, interval?);
    private stopScrollTimer();
    private scrollTimerElapsed(flag);
    scrollTo(item: any): void;
    findItemById(id: any): any;
    findItemByText(text: string): any;
    clearSelection(): void;
    protected clearComponentSelection(): void;
    private clearPrevSelection(item?);
    private isItemInSelectionList(item);
    protected processSelection(e: any, item: any, value?: any): boolean;
    selectItems(items: Array<any>): void;
    protected updateSelection(e: any, item: any): void;
    protected applySorting(list: Array<any>): void;
    protected isSortingAllowed(): boolean;
    sort(order: IntegralUISortOrder, comparer?: any): void;
    protected getItemInlineStyle(itemObj: any): any;
    protected updateItemStyle(obj: any): void;
    protected getItemStyle(value: any): {
        general: any;
        content: any;
    };
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
        content: {
            disabled: any;
            focused: any;
            normal: any;
            hovered: any;
            selected: any;
        };
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
    itemTouchStart(e: any, obj: any): void;
    itemTouchMove(e: any, obj: any): void;
    itemTouchEnd(e: any, obj: any): void;
    ctrlTouchStart(e: any): void;
    ctrlTouchEnd(e: any): void;
}
