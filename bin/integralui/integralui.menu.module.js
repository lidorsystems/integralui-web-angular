/*
  filename: integralui.menu.module.js
  version : 3.3.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __decorate=this&&this.__decorate||function(b,c,d,e){var f=arguments.length,a=3>f?c:null===e?e=Object.getOwnPropertyDescriptor(c,d):e,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(b,c,d,e);else for(var h=b.length-1;0<=h;h--)if(g=b[h])a=(3>f?g(a):3<f?g(c,d,a):g(c,d))||a;return 3<f&&a&&Object.defineProperty(c,d,a),a};Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),integralui_core_module_1=require("./integralui.core.module"),integralui_contextmenu_1=require("./directives/integralui.contextmenu"),integralui_core_1=require("./components/integralui.core"),integralui_menu_1=require("./components/integralui.menu"),integralui_menuitem_1=require("./components/integralui.menuitem"),IntegralUIMenuModule=function(){function b(){}return b=__decorate([core_1.NgModule({imports:[common_1.CommonModule,
forms_1.FormsModule,integralui_core_module_1.IntegralUICoreModule],declarations:[integralui_contextmenu_1.IntegralUIContextMenu,integralui_contextmenu_1.IntegralUIContextMenuComponent,integralui_menu_1.IntegralUIMenu,integralui_menuitem_1.IntegralUIMenuItem],exports:[integralui_contextmenu_1.IntegralUIContextMenu,integralui_core_1.IntegralUIFocus,integralui_core_1.IntegralUITemplate,integralui_menu_1.IntegralUIMenu,integralui_menuitem_1.IntegralUIMenuItem],entryComponents:[integralui_contextmenu_1.IntegralUIContextMenuComponent]})],
b)}();exports.IntegralUIMenuModule=IntegralUIMenuModule;