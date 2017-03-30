/*
  filename: integralui.common.module.ts
  version : 1.0.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IntegralUICoreModule }   from './integralui.core.module';

import { IntegralUIComboBox } from './components/integralui.combobox';
import { IntegralUIFrame } from './directives/integralui.frame';
import { IntegralUIListItem } from './components/integralui.listitem';
import { IntegralUIPaginator } from './components/integralui.paginator';
import { IntegralUIRange } from './directives/integralui.range';
import { IntegralUIScrollBar } from './components/integralui.scrollbar';
import { IntegralUISplitter } from './components/integralui.splitter';
import { IntegralUITooltip, IntegralUITooltipComponent } from './directives/integralui.tooltip';

@NgModule({
  	imports: [ CommonModule, FormsModule, IntegralUICoreModule ],
  	declarations: [ 
      	IntegralUIComboBox,
      	IntegralUIFrame,
        IntegralUIListItem,
  		  IntegralUIPaginator, 
      	IntegralUIRange,
      	IntegralUIScrollBar,
      	IntegralUISplitter,
  		  IntegralUITooltip, 
  		  IntegralUITooltipComponent
  	],
  	exports: [ 
      	IntegralUIComboBox,
      	IntegralUIFrame,
        IntegralUIListItem,
  		  IntegralUIPaginator, 
      	IntegralUIRange,
        IntegralUIScrollBar,
      	IntegralUISplitter,
  		  IntegralUITooltip
  	],
    entryComponents: [ IntegralUITooltipComponent ],
})
export class IntegralUICommonModule { }
