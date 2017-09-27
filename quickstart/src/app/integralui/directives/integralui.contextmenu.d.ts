import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService } from '../components/integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIMenuItem } from '../components/integralui.menuitem';
export declare class IntegralUIContextMenuComponent extends IntegralUIBaseComponent {
    protected dataService: IntegralUIDataService;
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    protected cmpResolver: ComponentFactoryResolver;
    protected baseService: IntegralUIBaseService;
    private itemList;
    blockDisplay: string;
    blockElemWidth: string;
    blockElemHeight: string;
    blockOverflow: string;
    blockOpacity: number;
    contentRef: ViewContainerRef;
    contentList: QueryList<IntegralUIMenuItem>;
    private trialRef;
    items: Array<any>;
    position: {
        x: string;
        y: string;
    };
    itemClick: EventEmitter<any>;
    menuOpened: EventEmitter<any>;
    menuClosed: EventEmitter<any>;
    constructor(dataService: IntegralUIDataService, elemRef: ElementRef, commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    onBlur(e: any): void;
    onRightClick(e: any): void;
    protected getItemFromComponent(cmp: IntegralUIMenuItem): any;
    invokeMethod(name: string, value: any): void;
    open(e: any): void;
}
export declare class IntegralUIContextMenu {
    protected elemRef: ElementRef;
    private viewContainer;
    protected cmpResolver: ComponentFactoryResolver;
    private isMenuActive;
    private eventList;
    private cmpRef;
    settings: any;
    contextMenuRef: any;
    itemClick: EventEmitter<any>;
    menuClick: EventEmitter<any>;
    menuOpening: EventEmitter<any>;
    menuOpened: EventEmitter<any>;
    menuClosed: EventEmitter<any>;
    constructor(elemRef: ElementRef, viewContainer: ViewContainerRef, cmpResolver: ComponentFactoryResolver);
    ngOnDestroy(): void;
    closeMenu(e?: any): void;
    onContextMenu(e: any): void;
    private createMenuList(list);
}
