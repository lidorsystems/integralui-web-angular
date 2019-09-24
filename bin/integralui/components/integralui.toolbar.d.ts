import { ElementRef, QueryList } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIToolItem } from './integralui.toolitem';
export declare class IntegralUIToolBar extends IntegralUIBaseComponent {
    protected dataService: IntegralUIDataService;
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    protected baseService?: IntegralUIBaseService;
    private dataItems;
    protected itemList: Array<any>;
    protected options: any;
    contentList: QueryList<IntegralUIToolItem>;
    appRef: any;
    dataFields: any;
    items: Array<any>;
    constructor(dataService: IntegralUIDataService, elemRef: ElementRef, commonService?: IntegralUICommonService, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    protected updateData(): void;
    ngAfterContentInit(): void;
    private prevItemCount;
    ngAfterContentChecked(): void;
    getDataFields(): any;
    protected updateOptions(value?: any): void;
    protected updateDataFields(fields?: any): void;
    getItemFromComponent(cmp: IntegralUIToolItem): any;
    protected updateItemList(): void;
    updateLayout(): void;
    refresh(): void;
}
