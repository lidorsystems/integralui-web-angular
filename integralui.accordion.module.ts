/*
  filename: integralui.accordion.module.ts
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

import { IntegralUIAccordion } from './components/integralui.accordion';
import { IntegralUIGroupBox } from './components/integralui.groupbox';

@NgModule({
  	imports: [ CommonModule, FormsModule, IntegralUICoreModule ],
  	declarations: [ 
  		IntegralUIAccordion, 
  		IntegralUIGroupBox 
  	],
  	exports: [ 
      	IntegralUIAccordion, 
  		IntegralUIGroupBox
  	]
})
export class IntegralUIAccordionModule { }
