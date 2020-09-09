/*
  filename: integralui.grid.module.js
  version : 20.2.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),integralui_core_module_1=require("./integralui.core.module"),integralui_common_module_1=require("./integralui.common.module"),integralui_core_1=require("./components/integralui.core"),integralui_grid_1=require("./components/integralui.grid"),i0=require("@angular/core"),IntegralUIGridModule=function(){function e(){}e.ɵmod=i0.ɵɵdefineNgModule({type:e});e.ɵinj=i0.ɵɵdefineInjector({factory:function(r){return new(r||e)},imports:[[common_1.CommonModule,forms_1.FormsModule,integralui_core_module_1.IntegralUICoreModule,integralui_common_module_1.IntegralUICommonModule]]});return e}();exports.IntegralUIGridModule=IntegralUIGridModule;("undefined"===typeof ngJitMode||ngJitMode)&&i0.ɵɵsetNgModuleScope(IntegralUIGridModule,{declarations:[integralui_grid_1.IntegralUIGrid],imports:[common_1.CommonModule,forms_1.FormsModule,integralui_core_module_1.IntegralUICoreModule,integralui_common_module_1.IntegralUICommonModule],exports:[integralui_core_1.IntegralUIDraggable,integralui_core_1.IntegralUIFocus,integralui_core_1.IntegralUITemplate,integralui_grid_1.IntegralUIGrid]});