/*
  filename: integralui.menu.module.js
  version : 4.0.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),integralui_core_module_1=require("./integralui.core.module"),integralui_contextmenu_1=require("./directives/integralui.contextmenu"),integralui_core_1=require("./components/integralui.core"),integralui_menu_1=require("./components/integralui.menu"),integralui_menuitem_1=require("./components/integralui.menuitem"),i0=require("@angular/core"),IntegralUIMenuModule=function(){function a(){}a.\u0275mod=
i0.\u0275\u0275defineNgModule({type:a});a.\u0275inj=i0.\u0275\u0275defineInjector({factory:function(b){return new (b||a)},imports:[[common_1.CommonModule,forms_1.FormsModule,integralui_core_module_1.IntegralUICoreModule]]});return a}();exports.IntegralUIMenuModule=IntegralUIMenuModule;
(function(){("undefined"===typeof ngJitMode||ngJitMode)&&i0.\u0275\u0275setNgModuleScope(IntegralUIMenuModule,{declarations:[integralui_contextmenu_1.IntegralUIContextMenu,integralui_contextmenu_1.IntegralUIContextMenuComponent,integralui_menu_1.IntegralUIMenu,integralui_menuitem_1.IntegralUIMenuItem],imports:[common_1.CommonModule,forms_1.FormsModule,integralui_core_module_1.IntegralUICoreModule],exports:[integralui_contextmenu_1.IntegralUIContextMenu,integralui_core_1.IntegralUIFocus,integralui_core_1.IntegralUITemplate,
integralui_menu_1.IntegralUIMenu,integralui_menuitem_1.IntegralUIMenuItem]})})();
(function(){i0.\u0275setClassMetadata(IntegralUIMenuModule,[{type:core_1.NgModule,args:[{imports:[common_1.CommonModule,forms_1.FormsModule,integralui_core_module_1.IntegralUICoreModule],declarations:[integralui_contextmenu_1.IntegralUIContextMenu,integralui_contextmenu_1.IntegralUIContextMenuComponent,integralui_menu_1.IntegralUIMenu,integralui_menuitem_1.IntegralUIMenuItem],exports:[integralui_contextmenu_1.IntegralUIContextMenu,integralui_core_1.IntegralUIFocus,integralui_core_1.IntegralUITemplate,
integralui_menu_1.IntegralUIMenu,integralui_menuitem_1.IntegralUIMenuItem],entryComponents:[integralui_contextmenu_1.IntegralUIContextMenuComponent]}]}],null,null)})();