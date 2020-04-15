import { ElementRef, QueryList } from '@angular/core';
import { IntegralUIBaseValueComponent } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIRadioButton } from './integralui.radiobutton';
import * as i0 from "@angular/core";
export declare class IntegralUIRadioGroup extends IntegralUIBaseValueComponent {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    private buttonList;
    contentList: QueryList<IntegralUIRadioButton>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    processValueChange(): void;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUIRadioGroup, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IntegralUIRadioGroup, "iui-radio-group", never, { "controlStyle": "controlStyle"; "data": "data"; "enabled": "enabled"; "name": "name"; "state": "state"; }, {}, ["contentList"], ["*"]>;
}
