import { ComponentFactoryResolver, ElementRef, QueryList, Renderer, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseService } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIDragDropService } from '../services/integralui.dragdrop.service';
import { IntegralUIBaseList } from './integralui.base.list';
import { IntegralUIListItem } from './integralui.listitem';
export declare class IntegralUIListBox extends IntegralUIBaseList {
    protected dataService: IntegralUIDataService;
    protected dragDropService: IntegralUIDragDropService;
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    protected commonService: IntegralUICommonService;
    protected cmpResolver: ComponentFactoryResolver;
    protected baseService: IntegralUIBaseService;
    contentList: QueryList<IntegralUIListItem>;
    contentRef: ViewContainerRef;
    contentElem: ElementRef;
    private trialRef;
    constructor(dataService: IntegralUIDataService, dragDropService: IntegralUIDragDropService, elemRef: ElementRef, elemRenderer: Renderer, commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    addItem(item: any): void;
    clearItems(): void;
    insertItemAt(item: any, index: number): void;
    removeItemAt(index: number): boolean;
    private updateCurrentList();
    private addItemToCurrentList(item);
    getItemFromComponent(cmp: IntegralUIListItem): any;
    protected getContentSize(): {
        width: any;
        height: any;
    };
    updateLayout(): void;
}
