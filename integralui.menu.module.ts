/*
  filename: integralui.menu.module.ts
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
import { IntegralUICommonModule }   from './integralui.common.module';

import { IntegralUIContextMenu, IntegralUIContextMenuComponent } from './directives/integralui.contextmenu';
import { IntegralUIFocus, IntegralUITemplate } from './components/integralui.core';
import { IntegralUIMenu } from './components/integralui.menu';
import { IntegralUIMenuItem } from './components/integralui.menuitem';

@NgModule({
    imports: [ CommonModule, FormsModule, IntegralUICoreModule, IntegralUICommonModule ],
    declarations: [ 
      	IntegralUIContextMenu,
      	IntegralUIContextMenuComponent, 
      	IntegralUIMenu,
      	IntegralUIMenuItem 
    ],
    exports: [ 
      	IntegralUIContextMenu,
        IntegralUIFocus, 
        IntegralUITemplate,
      	IntegralUIMenu,
       	IntegralUIMenuItem
    ],
    entryComponents: [ IntegralUIContextMenuComponent ],
})
export class IntegralUIMenuModule { }
