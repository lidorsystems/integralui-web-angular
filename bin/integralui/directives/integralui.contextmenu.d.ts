import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService, IntegralUITemplate } from '../components/integralui.core';
import { IntegralUIDirection } from '../components/integralui.core';
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
    adjustment: {
        top: number;
        left: number;
    };
    autoClose: boolean;
    direction: IntegralUIDirection;
    inverse: boolean;
    items: Array<any>;
    mode: string;
    position: {
        x: number;
        y: number;
    };
    itemTemplate: any;
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
    size(): {
        width: any;
        height: any;
    };
    adjustPosition(e: any, openMode: string, pos: any, appSize?: any, elemPageRect?: any): void;
    open(e: any, openMode: string, pos: any, appSize?: any, elemPageRect?: any): void;
}
export declare class IntegralUIContextMenu {
    protected elemRef: ElementRef;
    private viewContainer;
    protected cmpResolver: ComponentFactoryResolver;
    private isMenuActive;
    private eventList;
    templates: QueryList<IntegralUITemplate>;
    private cmpRef;
    private templateList;
    itemTemplate: any;
    settings: any;
    contextMenuRef: any;
    itemClick: EventEmitter<any>;
    menuClick: EventEmitter<any>;
    menuOpening: EventEmitter<any>;
    menuOpened: EventEmitter<any>;
    menuClosed: EventEmitter<any>;
    constructor(elemRef: ElementRef, viewContainer: ViewContainerRef, cmpResolver: ComponentFactoryResolver);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    size(): {
        width: any;
        height: any;
    };
    closeMenu(e?: any): void;
    onContextMenu(e: any): void;
    onMouseDown(e: any): void;
    processMenuOpen(e: any, position?: string): void;
    private createMenuList(list);
}
