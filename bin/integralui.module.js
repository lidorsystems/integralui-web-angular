"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
  filename: integralui.module.js
  version : 1.2.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library.
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.
*/
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var integralui_core_module_1 = require("./integralui.core.module");
var integralui_common_module_1 = require("./integralui.common.module");
var integralui_accordion_module_1 = require("./integralui.accordion.module");
var integralui_basegrid_module_1 = require("./integralui.basegrid.module");
var integralui_baselist_module_1 = require("./integralui.baselist.module");
var integralui_grid_module_1 = require("./integralui.grid.module");
var integralui_listbar_module_1 = require("./integralui.listbar.module");
var integralui_listbox_module_1 = require("./integralui.listbox.module");
var integralui_listview_module_1 = require("./integralui.listview.module");
var integralui_menu_module_1 = require("./integralui.menu.module");
var integralui_slidebar_module_1 = require("./integralui.slidebar.module");
var integralui_splitcontainer_module_1 = require("./integralui.splitcontainer.module");
var integralui_tabstrip_module_1 = require("./integralui.tabstrip.module");
var integralui_treegrid_module_1 = require("./integralui.treegrid.module");
var integralui_treelist_module_1 = require("./integralui.treelist.module");
var integralui_treeview_module_1 = require("./integralui.treeview.module");
var integralui_accordion_1 = require("./components/integralui.accordion");
var integralui_base_grid_1 = require("./components/integralui.base.grid");
var integralui_base_list_1 = require("./components/integralui.base.list");
var integralui_core_1 = require("./components/integralui.core");
var integralui_combobox_1 = require("./components/integralui.combobox");
var integralui_contextmenu_1 = require("./directives/integralui.contextmenu");
var integralui_dropdown_1 = require("./directives/integralui.dropdown");
var integralui_frame_1 = require("./directives/integralui.frame");
var integralui_grid_1 = require("./components/integralui.grid");
var integralui_groupbox_1 = require("./components/integralui.groupbox");
var integralui_listbar_1 = require("./components/integralui.listbar");
var integralui_listbox_1 = require("./components/integralui.listbox");
var integralui_listgroup_1 = require("./components/integralui.listgroup");
var integralui_listitem_1 = require("./components/integralui.listitem");
var integralui_listview_1 = require("./components/integralui.listview");
var integralui_menu_1 = require("./components/integralui.menu");
var integralui_menuitem_1 = require("./components/integralui.menuitem");
var integralui_paginator_1 = require("./components/integralui.paginator");
var integralui_range_1 = require("./directives/integralui.range");
var integralui_slidebar_1 = require("./components/integralui.slidebar");
var integralui_splitcontainer_1 = require("./components/integralui.splitcontainer");
var integralui_splitter_1 = require("./components/integralui.splitter");
var integralui_tab_1 = require("./components/integralui.tab");
var integralui_tabstrip_1 = require("./components/integralui.tabstrip");
var integralui_tooltip_1 = require("./directives/integralui.tooltip");
var integralui_treegrid_1 = require("./components/integralui.treegrid");
var integralui_treeitem_1 = require("./components/integralui.treeitem");
var integralui_treelist_1 = require("./components/integralui.treelist");
var integralui_treeview_1 = require("./components/integralui.treeview");
var IntegralUIModule = (function () {
    function IntegralUIModule() {
    }
    return IntegralUIModule;
}());
IntegralUIModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            integralui_core_module_1.IntegralUICoreModule,
            integralui_common_module_1.IntegralUICommonModule,
            integralui_accordion_module_1.IntegralUIAccordionModule,
            integralui_basegrid_module_1.IntegralUIBaseGridModule,
            integralui_baselist_module_1.IntegralUIBaseListModule,
            integralui_grid_module_1.IntegralUIGridModule,
            integralui_listbar_module_1.IntegralUIListBarModule,
            integralui_listbox_module_1.IntegralUIListBoxModule,
            integralui_listview_module_1.IntegralUIListViewModule,
            integralui_menu_module_1.IntegralUIMenuModule,
            integralui_slidebar_module_1.IntegralUISlideBarModule,
            integralui_splitcontainer_module_1.IntegralUISplitContainerModule,
            integralui_tabstrip_module_1.IntegralUITabStripModule,
            integralui_treegrid_module_1.IntegralUITreeGridModule,
            integralui_treelist_module_1.IntegralUITreeListModule,
            integralui_treeview_module_1.IntegralUITreeViewModule
        ],
        exports: [
            integralui_accordion_1.IntegralUIAccordion,
            integralui_base_grid_1.IntegralUIBaseGrid,
            integralui_base_list_1.IntegralUIBaseList,
            integralui_combobox_1.IntegralUIComboBox,
            integralui_contextmenu_1.IntegralUIContextMenu,
            integralui_dropdown_1.IntegralUIDropDown,
            integralui_core_1.IntegralUIFocus,
            integralui_frame_1.IntegralUIFrame,
            integralui_grid_1.IntegralUIGrid,
            integralui_groupbox_1.IntegralUIGroupBox, integralui_groupbox_1.IntegralUIGroupBoxTags,
            integralui_core_1.IntegralUIHeaderItem,
            integralui_core_1.IntegralUIItem,
            integralui_listbar_1.IntegralUIListBar,
            integralui_listbox_1.IntegralUIListBox,
            integralui_listgroup_1.IntegralUIListGroup,
            integralui_listitem_1.IntegralUIListItem,
            integralui_listview_1.IntegralUIListView,
            integralui_menu_1.IntegralUIMenu,
            integralui_menuitem_1.IntegralUIMenuItem,
            integralui_paginator_1.IntegralUIPaginator,
            integralui_range_1.IntegralUIRange,
            integralui_slidebar_1.IntegralUISlideBar,
            integralui_slidebar_1.IntegralUISlide,
            integralui_splitcontainer_1.IntegralUISplitContainer,
            integralui_splitcontainer_1.IntegralUISplitContainerTags,
            integralui_splitter_1.IntegralUISplitter,
            integralui_tab_1.IntegralUITab,
            integralui_tabstrip_1.IntegralUITabStrip,
            integralui_core_1.IntegralUITemplate,
            integralui_core_1.IntegralUITemplateOutlet,
            integralui_tooltip_1.IntegralUITooltip,
            integralui_treegrid_1.IntegralUITreeGrid,
            integralui_treeitem_1.IntegralUITreeItem,
            integralui_treelist_1.IntegralUITreeList,
            integralui_treeview_1.IntegralUITreeView
        ]
    })
], IntegralUIModule);
exports.IntegralUIModule = IntegralUIModule;
//# sourceMappingURL=integralui.module.js.map