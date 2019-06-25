import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList, Renderer, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIMenuItem } from '../components/integralui.menuitem';
export declare class IntegralUIMenu extends IntegralUIBaseComponent {
    protected dataService: IntegralUIDataService;
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    protected commonService: IntegralUICommonService;
    protected cmpResolver: ComponentFactoryResolver;
    protected baseService: IntegralUIBaseService;
    protected itemList: Array<IntegralUIMenuItem>;
    private virtualization;
    contentList: QueryList<IntegralUIMenuItem>;
    contentRef: ViewContainerRef;
    itemTemplate: any;
    private tRef;
    appRef: any;
    items: Array<any>;
    showAnimation: boolean;
    virtualMode: boolean;
    itemClick: EventEmitter<any>;
    constructor(dataService: IntegralUIDataService, elemRef: ElementRef, elemRenderer: Renderer, commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    protected getItemFromComponent(cmp: IntegralUIMenuItem): any;
    getItemParent(item: any): any;
    invokeMethod(name: string, value: any): void;
    updateLayout(): void;
    getControlStyle(): any;
}
