/*
  filename: integralui.core.module.js
  version : 3.0.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),animations_1=require("@angular/platform-browser/animations"),integralui_core_1=require("./components/integralui.core"),integralui_common_service_1=require("./services/integralui.common.service"),integralui_dragdrop_service_1=require("./services/integralui.dragdrop.service"),integralui_filter_service_1=require("./services/integralui.filter.service"),IntegralUICoreModule=function(){function a(){}
a.decorators=[{type:core_1.NgModule,args:[{imports:[animations_1.BrowserAnimationsModule,common_1.CommonModule,forms_1.FormsModule],declarations:[integralui_core_1.IntegralUIBaseComponent,integralui_core_1.IntegralUIBaseValueComponent,integralui_core_1.IntegralUIDraggable,integralui_core_1.IntegralUIDragWindow,integralui_core_1.IntegralUIFocus,integralui_core_1.IntegralUIHeaderItem,integralui_core_1.IntegralUIItem,integralui_core_1.IntegralUIList,integralui_core_1.IntegralUIListPopup,integralui_core_1.IntegralUIPopup,
integralui_core_1.IntegralUITComponent,integralui_core_1.IntegralUITemplate,integralui_core_1.IntegralUITemplateOutlet],exports:[integralui_core_1.IntegralUIBaseComponent,integralui_core_1.IntegralUIBaseValueComponent,integralui_core_1.IntegralUIDraggable,integralui_core_1.IntegralUIFocus,integralui_core_1.IntegralUIHeaderItem,integralui_core_1.IntegralUIItem,integralui_core_1.IntegralUIPopup,integralui_core_1.IntegralUITemplate,integralui_core_1.IntegralUITemplateOutlet],entryComponents:[integralui_core_1.IntegralUIDragWindow,
integralui_core_1.IntegralUIListPopup,integralui_core_1.IntegralUITComponent],providers:[integralui_common_service_1.IntegralUICommonService,integralui_dragdrop_service_1.IntegralUIDragDropService,integralui_filter_service_1.IntegralUIFilterService]}]}];return a}();exports.IntegralUICoreModule=IntegralUICoreModule;