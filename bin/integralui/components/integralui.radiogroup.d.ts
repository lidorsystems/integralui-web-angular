import { ElementRef, QueryList } from '@angular/core';
import { IntegralUIBaseValueComponent } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIRadioButton } from './integralui.radiobutton';
export declare class IntegralUIRadioGroup extends IntegralUIBaseValueComponent {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    private buttonList;
    contentList: QueryList<IntegralUIRadioButton>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    processValueChange(): void;
}
