/*
  filename: integralui.module.js
  version : 20.3.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),integralui_core_module_1=require("./integralui.core.module"),integralui_common_module_1=require("./integralui.common.module"),integralui_accordion_module_1=require("./integralui.accordion.module"),integralui_basegrid_module_1=require("./integralui.basegrid.module"),integralui_baselist_module_1=require("./integralui.baselist.module"),integralui_grid_module_1=require("./integralui.grid.module"),integralui_layout_module_1=require("./integralui.layout.module"),integralui_listbar_module_1=require("./integralui.listbar.module"),integralui_listbox_module_1=require("./integralui.listbox.module"),integralui_listview_module_1=require("./integralui.listview.module"),integralui_menu_module_1=require("./integralui.menu.module"),integralui_sidebar_module_1=require("./integralui.sidebar.module"),integralui_slidebar_module_1=require("./integralui.slidebar.module"),integralui_splitcontainer_module_1=require("./integralui.splitcontainer.module"),integralui_tabstrip_module_1=require("./integralui.tabstrip.module"),integralui_treegrid_module_1=require("./integralui.treegrid.module"),integralui_treelist_module_1=require("./integralui.treelist.module"),integralui_treeview_module_1=require("./integralui.treeview.module"),integralui_accordion_1=require("./components/integralui.accordion"),integralui_autocomplete_1=require("./components/integralui.autocomplete"),integralui_base_grid_1=require("./components/integralui.base.grid"),integralui_base_list_1=require("./components/integralui.base.list"),integralui_breadcrumb_1=require("./components/integralui.breadcrumb"),integralui_button_1=require("./components/integralui.button"),integralui_calendar_1=require("./components/integralui.calendar"),integralui_core_1=require("./components/integralui.core"),integralui_checkbox_1=require("./components/integralui.checkbox"),integralui_colorpicker_1=require("./components/integralui.colorpicker"),integralui_combobox_1=require("./components/integralui.combobox"),integralui_contextmenu_1=require("./directives/integralui.contextmenu"),integralui_datepicker_1=require("./components/integralui.datepicker"),integralui_dialog_1=require("./components/integralui.dialog"),integralui_dropdown_1=require("./directives/integralui.dropdown"),integralui_dropdownbutton_1=require("./components/integralui.dropdownbutton"),integralui_frame_1=require("./directives/integralui.frame"),integralui_grid_1=require("./components/integralui.grid"),integralui_groupbox_1=require("./components/integralui.groupbox"),integralui_layout_1=require("./components/integralui.layout"),integralui_listbar_1=require("./components/integralui.listbar"),integralui_listbox_1=require("./components/integralui.listbox"),integralui_listgroup_1=require("./components/integralui.listgroup"),integralui_listitem_1=require("./components/integralui.listitem"),integralui_listscroller_1=require("./components/integralui.listscroller"),integralui_listview_1=require("./components/integralui.listview"),integralui_menu_1=require("./components/integralui.menu"),integralui_menuitem_1=require("./components/integralui.menuitem"),integralui_numeric_updown_1=require("./components/integralui.numeric-updown"),integralui_paginator_1=require("./components/integralui.paginator"),integralui_popover_1=require("./directives/integralui.popover"),integralui_progressbar_1=require("./components/integralui.progressbar"),integralui_radiobutton_1=require("./components/integralui.radiobutton"),integralui_radiogroup_1=require("./components/integralui.radiogroup"),integralui_range_1=require("./directives/integralui.range"),integralui_rating_1=require("./components/integralui.rating"),integralui_resize_1=require("./directives/integralui.resize"),integralui_sidebar_1=require("./components/integralui.sidebar"),integralui_slider_1=require("./components/integralui.slider"),integralui_slidebar_1=require("./components/integralui.slidebar"),integralui_splitcontainer_1=require("./components/integralui.splitcontainer"),integralui_splitter_1=require("./components/integralui.splitter"),integralui_tab_1=require("./components/integralui.tab"),integralui_tabstrip_1=require("./components/integralui.tabstrip"),integralui_toolbar_1=require("./components/integralui.toolbar"),integralui_toolitem_1=require("./components/integralui.toolitem"),integralui_tooltip_1=require("./directives/integralui.tooltip"),integralui_treegrid_1=require("./components/integralui.treegrid"),integralui_treeitem_1=require("./components/integralui.treeitem"),integralui_treelist_1=require("./components/integralui.treelist"),integralui_treeview_1=require("./components/integralui.treeview"),i0=require("@angular/core"),IntegralUIModule=function(){function e(){}e.ɵmod=i0.ɵɵdefineNgModule({type:e});e.ɵinj=i0.ɵɵdefineInjector({factory:function(i){return new(i||e)},imports:[[common_1.CommonModule,forms_1.FormsModule,integralui_core_module_1.IntegralUICoreModule,integralui_common_module_1.IntegralUICommonModule,integralui_accordion_module_1.IntegralUIAccordionModule,integralui_basegrid_module_1.IntegralUIBaseGridModule,integralui_baselist_module_1.IntegralUIBaseListModule,integralui_grid_module_1.IntegralUIGridModule,integralui_layout_module_1.IntegralUILayoutModule,integralui_listbar_module_1.IntegralUIListBarModule,integralui_listbox_module_1.IntegralUIListBoxModule,integralui_listview_module_1.IntegralUIListViewModule,integralui_menu_module_1.IntegralUIMenuModule,integralui_sidebar_module_1.IntegralUISideBarModule,integralui_slidebar_module_1.IntegralUISlideBarModule,integralui_splitcontainer_module_1.IntegralUISplitContainerModule,integralui_tabstrip_module_1.IntegralUITabStripModule,integralui_treegrid_module_1.IntegralUITreeGridModule,integralui_treelist_module_1.IntegralUITreeListModule,integralui_treeview_module_1.IntegralUITreeViewModule]]});return e}();exports.IntegralUIModule=IntegralUIModule;("undefined"===typeof ngJitMode||ngJitMode)&&i0.ɵɵsetNgModuleScope(IntegralUIModule,{declarations:[integralui_dropdownbutton_1.IntegralUIDropDownButton],imports:[common_1.CommonModule,forms_1.FormsModule,integralui_core_module_1.IntegralUICoreModule,integralui_common_module_1.IntegralUICommonModule,integralui_accordion_module_1.IntegralUIAccordionModule,integralui_basegrid_module_1.IntegralUIBaseGridModule,integralui_baselist_module_1.IntegralUIBaseListModule,integralui_grid_module_1.IntegralUIGridModule,integralui_layout_module_1.IntegralUILayoutModule,integralui_listbar_module_1.IntegralUIListBarModule,integralui_listbox_module_1.IntegralUIListBoxModule,integralui_listview_module_1.IntegralUIListViewModule,integralui_menu_module_1.IntegralUIMenuModule,integralui_sidebar_module_1.IntegralUISideBarModule,integralui_slidebar_module_1.IntegralUISlideBarModule,integralui_splitcontainer_module_1.IntegralUISplitContainerModule,integralui_tabstrip_module_1.IntegralUITabStripModule,integralui_treegrid_module_1.IntegralUITreeGridModule,integralui_treelist_module_1.IntegralUITreeListModule,integralui_treeview_module_1.IntegralUITreeViewModule],exports:[integralui_accordion_1.IntegralUIAccordion,integralui_autocomplete_1.IntegralUIAutoComplete,integralui_base_grid_1.IntegralUIBaseGrid,integralui_base_list_1.IntegralUIBaseList,integralui_breadcrumb_1.IntegralUIBreadCrumb,integralui_button_1.IntegralUIButton,integralui_calendar_1.IntegralUICalendar,integralui_checkbox_1.IntegralUICheckBox,integralui_colorpicker_1.IntegralUIColorPicker,integralui_combobox_1.IntegralUIComboBox,integralui_contextmenu_1.IntegralUIContextMenu,integralui_datepicker_1.IntegralUIDatePicker,integralui_dialog_1.IntegralUIDialog,integralui_core_1.IntegralUIDraggable,integralui_dropdown_1.IntegralUIDropDown,integralui_dropdownbutton_1.IntegralUIDropDownButton,integralui_core_1.IntegralUIFocus,integralui_frame_1.IntegralUIFrame,integralui_grid_1.IntegralUIGrid,integralui_groupbox_1.IntegralUIGroupBox,integralui_groupbox_1.IntegralUIGroupBoxTags,integralui_core_1.IntegralUIHeaderItem,integralui_core_1.IntegralUIItem,integralui_layout_1.IntegralUILayout,integralui_listbar_1.IntegralUIListBar,integralui_listbox_1.IntegralUIListBox,integralui_listgroup_1.IntegralUIListGroup,integralui_listitem_1.IntegralUIListItem,integralui_listscroller_1.IntegralUIListScroller,integralui_listview_1.IntegralUIListView,integralui_menu_1.IntegralUIMenu,integralui_menuitem_1.IntegralUIMenuItem,integralui_numeric_updown_1.IntegralUINumericUpDown,integralui_paginator_1.IntegralUIPaginator,integralui_popover_1.IntegralUIPopOver,integralui_core_1.IntegralUIPopup,integralui_progressbar_1.IntegralUIProgressBar,integralui_radiobutton_1.IntegralUIRadioButton,integralui_radiogroup_1.IntegralUIRadioGroup,integralui_range_1.IntegralUIRange,integralui_rating_1.IntegralUIRating,integralui_resize_1.IntegralUIResize,integralui_sidebar_1.IntegralUISideBar,integralui_slidebar_1.IntegralUISlideBar,integralui_slidebar_1.IntegralUISlide,integralui_slider_1.IntegralUISlider,integralui_splitcontainer_1.IntegralUISplitContainer,integralui_splitcontainer_1.IntegralUISplitContainerTags,integralui_splitter_1.IntegralUISplitter,integralui_tab_1.IntegralUITab,integralui_tabstrip_1.IntegralUITabStrip,integralui_tabstrip_1.IntegralUITabStripToolbarLeft,integralui_tabstrip_1.IntegralUITabStripToolbarRight,integralui_core_1.IntegralUITemplate,integralui_core_1.IntegralUITemplateOutlet,integralui_toolbar_1.IntegralUIToolBar,integralui_toolitem_1.IntegralUIToolItem,integralui_tooltip_1.IntegralUITooltip,integralui_treegrid_1.IntegralUITreeGrid,integralui_treeitem_1.IntegralUITreeItem,integralui_treelist_1.IntegralUITreeList,integralui_treeview_1.IntegralUITreeView]});