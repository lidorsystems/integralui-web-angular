import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService, IntegralUIItem, IntegralUIObjectState } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
export declare class IntegralUITreeListItem extends IntegralUIItem {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    protected baseService: IntegralUIBaseService;
    templateData: Array<any>;
    protected parentCtrl: any;
    templateRef: any;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
}
export declare class IntegralUITreeList extends IntegralUIBaseComponent {
    protected dataService: IntegralUIDataService;
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    protected cmpResolver: ComponentFactoryResolver;
    protected baseService: IntegralUIBaseService;
    private animSpeed;
    protected itemList: Array<IntegralUITreeListItem>;
    prevData: any;
    itemData: any;
    nextData: any;
    private hoverItem;
    blockPos: {
        top: number;
        left: number;
    };
    leftBlockPos: {
        top: number;
        left: number;
    };
    rightBlockPos: {
        top: number;
        left: number;
    };
    leftBlockWidth: number;
    blockWidth: number;
    rightBlockWidth: number;
    leftBlockOpacity: number;
    blockOpacity: number;
    rightBlockOpacity: number;
    private elemSize;
    contentList: QueryList<IntegralUITreeListItem>;
    contentRef: ViewContainerRef;
    headerElem: ElementRef;
    leftBlockElem: ElementRef;
    blockElem: ElementRef;
    rightBlockElem: ElementRef;
    itemTemplate: any;
    private currentSelection;
    headerItem: any;
    headerText: string;
    private selList;
    private trialRef;
    items: Array<any>;
    title: string;
    selectedItem: any;
    afterSelect: EventEmitter<any>;
    beforeSelect: EventEmitter<any>;
    clear: EventEmitter<any>;
    itemAdding: EventEmitter<any>;
    itemAdded: EventEmitter<any>;
    itemRemoving: EventEmitter<any>;
    itemRemoved: EventEmitter<any>;
    selectionChanged: EventEmitter<any>;
    constructor(dataService: IntegralUIDataService, elemRef: ElementRef, commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onItemMouseEnter(e: any, item: any): void;
    onItemMouseLeave(e: any, item: any): void;
    onItemMouseDown(e: any, item: any): void;
    onHeaderMouseDown(e: any): void;
    protected getItemState(item: any): IntegralUIObjectState;
}
