import { ComponentFactoryResolver, ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUISortOrder } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIFilterService } from '../services/integralui.filter.service';
export declare class IntegralUIAutoComplete extends IntegralUIBaseComponent {
    protected dataService: IntegralUIDataService;
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    protected filterService: IntegralUIFilterService;
    protected cmpResolver: ComponentFactoryResolver;
    private dataList;
    protected currentList: Array<any>;
    protected options: any;
    private originalData;
    protected filterParams: any;
    isFocused: boolean;
    private keepActive;
    protected isPopupDelayed: boolean;
    protected isPopupVisible: boolean;
    private listSize;
    private dropListRef;
    private dropList;
    protected sortComparer: any;
    appRef: any;
    dataFields: any;
    dropDownWidth: number;
    list: Array<any>;
    maxVisibleItems: number;
    placeHolder: string;
    text: string;
    valueChanged: EventEmitter<any>;
    constructor(dataService: IntegralUIDataService, elemRef: ElementRef, commonService?: IntegralUICommonService, filterService?: IntegralUIFilterService, cmpResolver?: ComponentFactoryResolver);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    protected updateDataFields(fields?: any): void;
    protected updateOptions(value?: any): void;
    private addItemToCurrentList(item);
    protected updateCurrentList(): void;
    protected updateData(): void;
    protected addDropList(): void;
    protected removeDropList(): void;
    protected hideDropList(): void;
    protected showPopup(): void;
    protected callValueChanged(): void;
    ctrlKeyDown(e: any): void;
    ctrlLostFocus(): void;
    processDownKey(step?: number): void;
    textChanged(e: any): void;
    applyFilter(): void;
    protected getFilterTree(params: any): any;
    resetFilter(): void;
    filter(params?: any): void;
    protected isItemAllowed(item: any): boolean;
    selectContent(e: any): void;
    protected applySorting(list: Array<any>): void;
    protected isSortingAllowed(): boolean;
    sort(order: IntegralUISortOrder, comparer?: any): void;
    getControlStyle(): any;
}
