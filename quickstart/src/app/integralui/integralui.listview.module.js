/*
  filename: integralui.listview.module.js
  version : 2.2.0
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __decorate=this&&this.__decorate||function(g,b,c,d){var e=arguments.length,a=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,f;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(g,b,c,d);else for(var h=g.length-1;0<=h;h--)if(f=g[h])a=(3>e?f(a):3<e?f(b,c,a):f(b,c))||a;return 3<e&&a&&Object.defineProperty(b,c,a),a},core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),integralui_core_module_1=require("./integralui.core.module"),
integralui_common_module_1=require("./integralui.common.module"),integralui_core_1=require("./components/integralui.core"),integralui_listview_1=require("./components/integralui.listview"),integralui_listitem_1=require("./components/integralui.listitem"),IntegralUIListViewModule=function(){return function(){}}();
IntegralUIListViewModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,integralui_core_module_1.IntegralUICoreModule,integralui_common_module_1.IntegralUICommonModule],declarations:[integralui_listview_1.IntegralUIListView],exports:[integralui_core_1.IntegralUIFocus,integralui_listview_1.IntegralUIListView,integralui_listitem_1.IntegralUIListItem,integralui_core_1.IntegralUITemplate]})],IntegralUIListViewModule);exports.IntegralUIListViewModule=IntegralUIListViewModule;