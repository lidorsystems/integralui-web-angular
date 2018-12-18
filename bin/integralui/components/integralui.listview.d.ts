import { ComponentFactoryResolver, ElementRef, QueryList, Renderer, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseService, IntegralUIScrollMode } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIDragDropService } from '../services/integralui.dragdrop.service';
import { IntegralUIFilterService } from '../services/integralui.filter.service';
import { IntegralUIBaseList } from './integralui.base.list';
import { IntegralUIListItem } from './integralui.listitem';
export declare class IntegralUIListView extends IntegralUIBaseList {
    protected dataService: IntegralUIDataService;
    protected dragDropService: IntegralUIDragDropService;
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    protected commonService: IntegralUICommonService;
    protected filterService: IntegralUIFilterService;
    protected cmpResolver: ComponentFactoryResolver;
    protected baseService: IntegralUIBaseService;
    protected clientSpace: any;
    contentPos: any;
    protected currentItemSize: any;
    private itemsPerColumn;
    private itemsPerRow;
    private numColumns;
    private numRows;
    contentList: QueryList<IntegralUIListItem>;
    contentRef: ViewContainerRef;
    contentElem: ElementRef;
    itemElems: QueryList<ElementRef>;
    itemTemplate: any;
    private currentScrollMode;
    overflowSettings: any;
    private trialRef;
    itemSize: any;
    scrollMode: IntegralUIScrollMode;
    protected updateOverflowSettings(): void;
    constructor(dataService: IntegralUIDataService, dragDropService: IntegralUIDragDropService, elemRef: ElementRef, elemRenderer: Renderer, commonService?: IntegralUICommonService, filterService?: IntegralUIFilterService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    protected updateData(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    addItem(item: any): void;
    clearItems(): void;
    insertItemAt(item: any, index: number): void;
    removeItemAt(index: number): boolean;
    itemDragOver(e: any, obj: any, index: number, flag?: boolean): void;
    protected updateCurrentList(): void;
    private addItemToCurrentList(item);
    protected updateScrollItemList(): void;
    getItem(cmp: IntegralUIListItem): any;
    getItemFromComponent(cmp: IntegralUIListItem): any;
    getItemIndex(cmp: IntegralUIListItem): number;
    protected updateItemList(): void;
    invokeEvent(key: string, item: any): boolean;
    processDownArrowKey(item: any, e?: any): any;
    processEndKey(item: any, e?: any): any;
    processHomeKey(item: any, e?: any): any;
    processLeftArrowKey(item: any, e?: any): any;
    processPageDownKey(item: any, e?: any): any;
    processPageUpKey(item: any, e?: any): any;
    processRightArrowKey(item: any, e?: any): any;
    processUpArrowKey(item: any, e?: any): any;
    protected getDownItem(item: any): any;
    protected getLeftItem(item: any): any;
    protected getRightItem(item: any): any;
    protected getUpItem(item: any): any;
    itemMouseDown(e: any, obj: any): void;
    protected getContentSize(): {
        width: any;
        height: any;
    };
    updateLayout(): void;
    updateLayoutNormal(): void;
    updateLayoutVirtual(): void;
    protected updateScrollSize(): void;
    protected updateVisibleRange(): void;
    protected getItemElemList(): ElementRef<any>[];
    protected changeHorizontalScrollPos(value: number): void;
    isVerScrollVisible(): boolean;
    isHorScrollVisible(): boolean;
    onHorizontalScrollChanged(e: any): void;
    updateView(): void;
    listViewMouseWheel(e: any): void;
    scrollTo(item: any): void;
    clearSelection(): void;
    selectItem(cmp: IntegralUIListItem): void;
    private updateSelectedItemFromElem(cmp);
    private updateSelectedItem(item);
    getControlStyle(): any;
    protected getItemInlineStyle(itemObj: any): any;
    private resetRefresh();
    refresh(obj?: any): void;
}
