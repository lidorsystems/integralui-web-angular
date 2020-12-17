/*
  filename: integralui.slidebar.module.js
  version : 20.3.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),integralui_core_module_1=require("./integralui.core.module"),integralui_slidebar_1=require("./components/integralui.slidebar"),i0=require("@angular/core"),IntegralUISlideBarModule=function(){function e(){}e.ɵmod=i0.ɵɵdefineNgModule({type:e});e.ɵinj=i0.ɵɵdefineInjector({factory:function(r){return new(r||e)},imports:[[common_1.CommonModule,forms_1.FormsModule,integralui_core_module_1.IntegralUICoreModule]]});return e}();exports.IntegralUISlideBarModule=IntegralUISlideBarModule;("undefined"===typeof ngJitMode||ngJitMode)&&i0.ɵɵsetNgModuleScope(IntegralUISlideBarModule,{declarations:[integralui_slidebar_1.IntegralUISlideBar,integralui_slidebar_1.IntegralUISlide],imports:[common_1.CommonModule,forms_1.FormsModule,integralui_core_module_1.IntegralUICoreModule],exports:[integralui_slidebar_1.IntegralUISlideBar,integralui_slidebar_1.IntegralUISlide]});