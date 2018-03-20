/*
  filename: integralui.menu.module.js
  version : 2.0.0
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __decorate=this&&this.__decorate||function(g,b,c,d){var e=arguments.length,a=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,f;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(g,b,c,d);else for(var h=g.length-1;0<=h;h--)if(f=g[h])a=(3>e?f(a):3<e?f(b,c,a):f(b,c))||a;return 3<e&&a&&Object.defineProperty(b,c,a),a},core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),integralui_core_module_1=require("./integralui.core.module"),
integralui_contextmenu_1=require("./directives/integralui.contextmenu"),integralui_core_1=require("./components/integralui.core"),integralui_menu_1=require("./components/integralui.menu"),integralui_menuitem_1=require("./components/integralui.menuitem"),IntegralUIMenuModule=function(){return function(){}}();
IntegralUIMenuModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,integralui_core_module_1.IntegralUICoreModule],declarations:[integralui_contextmenu_1.IntegralUIContextMenu,integralui_contextmenu_1.IntegralUIContextMenuComponent,integralui_menu_1.IntegralUIMenu,integralui_menuitem_1.IntegralUIMenuItem],exports:[integralui_contextmenu_1.IntegralUIContextMenu,integralui_core_1.IntegralUIFocus,integralui_core_1.IntegralUITemplate,integralui_menu_1.IntegralUIMenu,integralui_menuitem_1.IntegralUIMenuItem],
entryComponents:[integralui_contextmenu_1.IntegralUIContextMenuComponent]})],IntegralUIMenuModule);exports.IntegralUIMenuModule=IntegralUIMenuModule;