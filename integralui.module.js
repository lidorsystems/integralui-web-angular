"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var integralui_accordion_1 = require('./components/integralui.accordion');
var integralui_core_1 = require('./components/integralui.core');
var integralui_base_list_1 = require('./components/integralui.base.list');
var integralui_combobox_1 = require('./components/integralui.combobox');
var integralui_contextmenu_1 = require('./directives/integralui.contextmenu');
var integralui_frame_1 = require('./directives/integralui.frame');
var integralui_groupbox_1 = require('./components/integralui.groupbox');
var integralui_listbar_1 = require('./components/integralui.listbar');
var integralui_listbox_1 = require('./components/integralui.listbox');
var integralui_listgroup_1 = require('./components/integralui.listgroup');
var integralui_listitem_1 = require('./components/integralui.listitem');
var integralui_listview_1 = require('./components/integralui.listview');
var integralui_menu_1 = require('./components/integralui.menu');
var integralui_menuitem_1 = require('./components/integralui.menuitem');
var integralui_paginator_1 = require('./components/integralui.paginator');
var integralui_range_1 = require('./directives/integralui.range');
var integralui_slidebar_1 = require('./components/integralui.slidebar');
var integralui_splitcontainer_1 = require('./components/integralui.splitcontainer');
var integralui_splitter_1 = require('./components/integralui.splitter');
var integralui_tab_1 = require('./components/integralui.tab');
var integralui_tabstrip_1 = require('./components/integralui.tabstrip');
var integralui_tooltip_1 = require('./directives/integralui.tooltip');
var integralui_treeitem_1 = require('./components/integralui.treeitem');
var integralui_treelist_1 = require('./components/integralui.treelist');
var integralui_treeview_1 = require('./components/integralui.treeview');
var integralui_common_service_1 = require('./services/integralui.common.service');
var integralui_dragdrop_service_1 = require('./services/integralui.dragdrop.service');
var IntegralUIModule = (function () {
    function IntegralUIModule() {
    }
    IntegralUIModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [
                integralui_accordion_1.IntegralUIAccordion,
                integralui_base_list_1.IntegralUIBaseList,
                integralui_combobox_1.IntegralUIComboBox,
                integralui_contextmenu_1.IntegralUIContextMenu,
                integralui_contextmenu_1.IntegralUIContextMenuComponent,
                integralui_core_1.IntegralUIDragWindow,
                integralui_core_1.IntegralUIFocus,
                integralui_frame_1.IntegralUIFrame,
                integralui_groupbox_1.IntegralUIGroupBox,
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
                integralui_splitcontainer_1.IntegralUISplitContainer, integralui_splitcontainer_1.IntegralUISplitContainerTags,
                integralui_splitter_1.IntegralUISplitter,
                integralui_tab_1.IntegralUITab,
                integralui_tabstrip_1.IntegralUITabStrip,
                integralui_core_1.IntegralUITComponent,
                integralui_core_1.IntegralUITemplate,
                integralui_tooltip_1.IntegralUITooltip,
                integralui_tooltip_1.IntegralUITooltipComponent,
                integralui_treeitem_1.IntegralUITreeItem,
                integralui_treelist_1.IntegralUITreeList,
                integralui_treelist_1.IntegralUITreeListItem,
                integralui_treeview_1.IntegralUITreeView
            ],
            exports: [
                integralui_accordion_1.IntegralUIAccordion,
                integralui_combobox_1.IntegralUIComboBox,
                integralui_contextmenu_1.IntegralUIContextMenu,
                integralui_core_1.IntegralUIFocus,
                integralui_frame_1.IntegralUIFrame,
                integralui_groupbox_1.IntegralUIGroupBox,
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
                integralui_splitcontainer_1.IntegralUISplitContainer, integralui_splitcontainer_1.IntegralUISplitContainerTags,
                integralui_splitter_1.IntegralUISplitter,
                integralui_tab_1.IntegralUITab,
                integralui_tabstrip_1.IntegralUITabStrip,
                integralui_core_1.IntegralUITemplate,
                integralui_tooltip_1.IntegralUITooltip,
                integralui_treeitem_1.IntegralUITreeItem,
                integralui_treelist_1.IntegralUITreeList,
                integralui_treeview_1.IntegralUITreeView
            ],
            entryComponents: [integralui_contextmenu_1.IntegralUIContextMenuComponent, integralui_core_1.IntegralUIDragWindow, integralui_core_1.IntegralUITComponent, integralui_tooltip_1.IntegralUITooltipComponent],
            providers: [integralui_common_service_1.IntegralUICommonService, integralui_dragdrop_service_1.IntegralUIDragDropService]
        }), 
        __metadata('design:paramtypes', [])
    ], IntegralUIModule);
    return IntegralUIModule;
}());
exports.IntegralUIModule = IntegralUIModule;
//# sourceMappingURL=integralui.module.js.map