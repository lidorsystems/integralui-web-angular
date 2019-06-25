import { ComponentFactoryResolver, ElementRef, QueryList, Renderer, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseService } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIDragDropService } from '../services/integralui.dragdrop.service';
import { IntegralUIFilterService } from '../services/integralui.filter.service';
import { IntegralUIBaseList } from './integralui.base.list';
import { IntegralUIListItem } from './integralui.listitem';
export declare class IntegralUIListBox extends IntegralUIBaseList {
    protected dataService: IntegralUIDataService;
    protected dragDropService: IntegralUIDragDropService;
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    protected commonService: IntegralUICommonService;
    protected filterService: IntegralUIFilterService;
    protected cmpResolver: ComponentFactoryResolver;
    protected baseService: IntegralUIBaseService;
    contentList: QueryList<IntegralUIListItem>;
    contentRef: ViewContainerRef;
    contentElem: ElementRef;
    itemElems: QueryList<ElementRef>;
    itemTemplate: any;
    private tRef;
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
    private addItemToCurrentList(item);
    loadData(data: Array<any>, fields?: any): void;
    protected updateCurrentList(): void;
    protected updateScrollItemList(): void;
    getItemFromComponent(cmp: IntegralUIListItem): any;
    protected updateItemList(): void;
    invokeEvent(key: string, item: any): boolean;
    protected updateBlockSize(): void;
    protected getContentSize(): {
        width: any;
        height: any;
    };
    protected getItemElemList(): ElementRef<any>[];
    updateLayout(): void;
    getControlStyle(): any;
    private resetRefresh();
    refresh(obj?: any): void;
}
