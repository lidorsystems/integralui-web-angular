/*
  filename: integralui.common.module.js
  version : 1.0.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __decorate=this&&this.__decorate||function(a,b,d,e){var f=arguments.length,c=3>f?b:null===e?e=Object.getOwnPropertyDescriptor(b,d):e,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(a,b,d,e);else for(var h=a.length-1;0<=h;h--)if(g=a[h])c=(3>f?g(c):3<f?g(b,d,c):g(b,d))||c;return 3<f&&c&&Object.defineProperty(b,d,c),c},__metadata=this&&this.__metadata||function(a,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(a,
b)},core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),integralui_core_module_1=require("./integralui.core.module"),integralui_combobox_1=require("./components/integralui.combobox"),integralui_frame_1=require("./directives/integralui.frame"),integralui_listitem_1=require("./components/integralui.listitem"),integralui_paginator_1=require("./components/integralui.paginator"),integralui_range_1=require("./directives/integralui.range"),integralui_scrollbar_1=
require("./components/integralui.scrollbar"),integralui_splitter_1=require("./components/integralui.splitter"),integralui_tooltip_1=require("./directives/integralui.tooltip"),IntegralUICommonModule=function(){function a(){}return a=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,integralui_core_module_1.IntegralUICoreModule],declarations:[integralui_combobox_1.IntegralUIComboBox,integralui_frame_1.IntegralUIFrame,integralui_listitem_1.IntegralUIListItem,integralui_paginator_1.IntegralUIPaginator,
integralui_range_1.IntegralUIRange,integralui_scrollbar_1.IntegralUIScrollBar,integralui_splitter_1.IntegralUISplitter,integralui_tooltip_1.IntegralUITooltip,integralui_tooltip_1.IntegralUITooltipComponent],exports:[integralui_combobox_1.IntegralUIComboBox,integralui_frame_1.IntegralUIFrame,integralui_listitem_1.IntegralUIListItem,integralui_paginator_1.IntegralUIPaginator,integralui_range_1.IntegralUIRange,integralui_scrollbar_1.IntegralUIScrollBar,integralui_splitter_1.IntegralUISplitter,integralui_tooltip_1.IntegralUITooltip],
entryComponents:[integralui_tooltip_1.IntegralUITooltipComponent]}),__metadata("design:paramtypes",[])],a)}();exports.IntegralUICommonModule=IntegralUICommonModule;