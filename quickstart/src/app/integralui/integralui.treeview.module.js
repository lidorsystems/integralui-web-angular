/*
  filename: integralui.treeview.module.js
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
var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),integralui_core_module_1=require("./integralui.core.module"),integralui_common_module_1=require("./integralui.common.module"),integralui_core_1=require("./components/integralui.core"),integralui_treeitem_1=require("./components/integralui.treeitem"),integralui_treeview_1=require("./components/integralui.treeview"),IntegralUITreeViewModule=function(){function a(){}a.decorators=[{type:core_1.NgModule,
args:[{imports:[common_1.CommonModule,forms_1.FormsModule,integralui_core_module_1.IntegralUICoreModule,integralui_common_module_1.IntegralUICommonModule],declarations:[integralui_treeitem_1.IntegralUITreeItem,integralui_treeview_1.IntegralUITreeView],exports:[integralui_core_1.IntegralUIFocus,integralui_core_1.IntegralUITemplate,integralui_treeitem_1.IntegralUITreeItem,integralui_treeview_1.IntegralUITreeView]}]}];return a}();exports.IntegralUITreeViewModule=IntegralUITreeViewModule;