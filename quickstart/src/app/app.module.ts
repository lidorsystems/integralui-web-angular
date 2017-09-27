/*
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IntegralUIModule } from './integralui/integralui.module';

import { AppComponent } from './app.component';
import { StartComponent } from './start.component';

import { AccordionSample } from './samples/accordion/accordion-main';
import { AccordionAddRemoveSample } from './samples/accordion/accordion-add-remove';
import { AccordionAddGroupContextMenuSample } from './samples/accordion/accordion-add-group-with-context-menu';
import { AccordionCustomHeaderSample } from './samples/accordion/accordion-custom-header';
import { AccordionHeaderCheckBoxSample } from './samples/accordion/accordion-header-checkbox';
import { AccordionEventsSample } from './samples/accordion/accordion-events';
import { AccordionOverviewSample } from './samples/accordion/accordion-overview';
import { AccordionTooltipSample } from './samples/accordion/accordion-tooltip';

import { ComboBoxSample } from './samples/combobox/combobox-main';
import { ComboBoxOverviewSample } from './samples/combobox/combobox-overview';

import { ContextMenuSample } from './samples/contextmenu/contextmenu-main';
import { ContextMenuOverviewSample } from './samples/contextmenu/contextmenu-overview';

import { FrameSample } from './samples/frame/frame-main';
import { FrameOverviewSample } from './samples/frame/frame-overview';

import { GridSample } from './samples/grid/grid-main';
import { GridAddRemoveSample } from './samples/grid/grid-add-remove';
import { GridAddRowDynamicallySample } from './samples/grid/grid-add-row-dynamically';
import { GridCellDropDownSample } from './samples/grid/grid-cell-dropdown';
import { GridCellDropDownCheckedListSample } from './samples/grid/grid-cell-dropdown-checked-list';
import { GridCellTemplatesSample } from './samples/grid/grid-cell-templates';
import { GridContextMenuSample } from './samples/grid/grid-context-menu';
import { GridDragDropTreeGridSample } from './samples/grid/grid-drag-drop-treegrid';
import { GridEventsSample } from './samples/grid/grid-events';
import { GridExcelEditorSample } from './samples/grid/grid-excel-editor';
import { GridFastLoadSample } from './samples/grid/grid-fast-load';
import { GridFilterSample } from './samples/grid/grid-filter';
import { GridMultiSelectSample } from './samples/grid/grid-multi-select';
import { GridOverviewSample } from './samples/grid/grid-overview';
import { GridSortingSample } from './samples/grid/grid-sorting';
import { GridTooltipSample } from './samples/grid/grid-tooltip';

import { GroupBoxSample } from './samples/groupbox/groupbox-main';
import { GroupBoxContextMenuSample } from './samples/groupbox/groupbox-context-menu';
import { GroupBoxCustomHeaderSample } from './samples/groupbox/groupbox-custom-header';
import { GroupBoxEventsSample } from './samples/groupbox/groupbox-events';
import { GroupBoxOverviewSample } from './samples/groupbox/groupbox-overview';
import { GroupBoxTooltipSample } from './samples/groupbox/groupbox-tooltip';

import { ListBarSample } from './samples/listbar/listbar-main';
import { ListBarOverviewSample } from './samples/listbar/listbar-overview';

import { ListBoxSample } from './samples/listbox/listbox-main';
import { ListBoxFastLoadSample } from './samples/listbox/listbox-fast-load';
import { ListBoxKeyboardSample } from './samples/listbox/listbox-keyboard';
import { ListBoxOverviewSample } from './samples/listbox/listbox-overview';

import { ListViewSample } from './samples/listview/listview-main';
import { ListViewFastLoadSample } from './samples/listview/listview-fast-load';
import { ListViewKeyboardSample } from './samples/listview/listview-keyboard';
import { ListViewOverviewSample } from './samples/listview/listview-overview';

import { MenuSample } from './samples/menu/menu-main';
import { MenuOverviewSample } from './samples/menu/menu-overview';

import { SplitContainerSample } from './samples/splitcontainer/splitcontainer-main';
import { SplitContainerOverviewSample } from './samples/splitcontainer/splitcontainer-overview';

import { SplitterSample } from './samples/splitter/splitter-main';
import { SplitterOverviewSample } from './samples/splitter/splitter-overview';

import { PaginatorSample } from './samples/paginator/paginator-main';
import { PaginatorOverviewSample } from './samples/paginator/paginator-overview';

import { RangeSample } from './samples/range/range-main';
import { RangeOverviewSample } from './samples/range/range-overview';

import { SlideBarSample } from './samples/slidebar/slidebar-main';
import { SlideBarOverviewSample } from './samples/slidebar/slidebar-overview';

import { TabStripSample } from './samples/tabstrip/tabstrip-main';
import { TabStripOverviewSample } from './samples/tabstrip/tabstrip-overview';

import { TooltipSample } from './samples/tooltip/tooltip-main';
import { TooltipOverviewSample } from './samples/tooltip/tooltip-overview';

import { TreeGridSample } from './samples/treegrid/treegrid-main';
import { TreeGridAddRemoveSample } from './samples/treegrid/treegrid-add-remove';
import { TreeGridAddRowDynamicallySample } from './samples/treegrid/treegrid-add-row-dynamically';
import { TreeGridCellDropDownSample } from './samples/treegrid/treegrid-cell-dropdown';
import { TreeGridCellDropDownCheckedListSample } from './samples/treegrid/treegrid-cell-dropdown-checked-list';
import { TreeGridCellTemplatesSample } from './samples/treegrid/treegrid-cell-templates';
import { TreeGridContextMenuSample } from './samples/treegrid/treegrid-context-menu';
import { TreeGridDragDropSample } from './samples/treegrid/treegrid-drag-drop';
import { TreeGridEventsSample } from './samples/treegrid/treegrid-events';
import { TreeGridExcelEditorSample } from './samples/treegrid/treegrid-excel-editor';
import { TreeGridFastLoadSample } from './samples/treegrid/treegrid-fast-load';
import { TreeGridFilterSample } from './samples/treegrid/treegrid-filter';
import { TreeGridMultiSelectSample } from './samples/treegrid/treegrid-multi-select';
import { TreeGridOverviewSample } from './samples/treegrid/treegrid-overview';
import { TreeGridSortingSample } from './samples/treegrid/treegrid-sorting';
import { TreeGridTooltipSample } from './samples/treegrid/treegrid-tooltip';

import { TreeListSample } from './samples/treelist/treelist-main';
import { TreeListOverviewSample } from './samples/treelist/treelist-overview';

import { TreeViewSample } from './samples/treeview/treeview-main';
import { TreeViewAddRemoveSample } from './samples/treeview/treeview-add-remove';
import { TreeViewAddItemsDynamicallySample } from './samples/treeview/treeview-add-items-dynamically';
import { TreeViewCheckBoxSample } from './samples/treeview/treeview-checkbox';
import { TreeViewContextMenuSample } from './samples/treeview/treeview-context-menu';
import { TreeViewDragDropSample } from './samples/treeview/treeview-drag-drop';
import { TreeViewEditingSample } from './samples/treeview/treeview-editing';
import { TreeViewEventsSample } from './samples/treeview/treeview-events';
import { TreeViewFastLoadSample } from './samples/treeview/treeview-fast-load';
import { TreeViewFilterSample } from './samples/treeview/treeview-filter';
import { TreeViewKeyboardSample } from './samples/treeview/treeview-keyboard';
import { TreeViewLoadOnDemandSample } from './samples/treeview/treeview-load-on-demand';
import { TreeViewMultiSelectSample } from './samples/treeview/treeview-multi-select';
import { TreeViewOverviewSample } from './samples/treeview/treeview-overview';
import { TreeViewSortingSample } from './samples/treeview/treeview-sorting';
import { TreeViewTooltipSample } from './samples/treeview/treeview-tooltip';

@NgModule({
  	imports:      [ 
  		BrowserModule, 
  		FormsModule, 
  		IntegralUIModule,
  		RouterModule.forRoot([
        	{ path: '', component: StartComponent },
  			  { 
            path: 'accordion', component: AccordionSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'add-remove', component: AccordionAddRemoveSample },
              { path: 'context-menu', component: AccordionAddGroupContextMenuSample },
              { path: 'custom-header', component: AccordionCustomHeaderSample },
              { path: 'header-checkbox', component: AccordionHeaderCheckBoxSample },
              { path: 'events', component: AccordionEventsSample },
              { path: 'overview', component: AccordionOverviewSample },
              { path: 'tooltip', component: AccordionTooltipSample }
            ]
          },
	        { 
            path: 'combobox', component: ComboBoxSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: ComboBoxOverviewSample }
            ]
          },
	        { 
            path: 'contextmenu', component: ContextMenuSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: ContextMenuOverviewSample }
            ]
          },
	        { 
            path: 'frame', component: FrameSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: FrameOverviewSample }
            ]
          },
          { 
            path: 'grid', component: GridSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'add-remove', component: GridAddRemoveSample },
              { path: 'add-row-dynamically', component: GridAddRowDynamicallySample },
              { path: 'cell-dropdown', component: GridCellDropDownSample },
              { path: 'cell-dropdown-checked-list', component: GridCellDropDownCheckedListSample },
              { path: 'cell-templates', component: GridCellTemplatesSample },
              { path: 'context-menu', component: GridContextMenuSample },
              { path: 'drag-drop-treegrid', component: GridDragDropTreeGridSample },
              { path: 'events', component: GridEventsSample },
              { path: 'excel-editor', component: GridExcelEditorSample },
              { path: 'fast-load', component: GridFastLoadSample },
              { path: 'filter', component: GridFilterSample },
              { path: 'multi-select', component: GridMultiSelectSample },
              { path: 'overview', component: GridOverviewSample },
              { path: 'sorting', component: GridSortingSample },
              { path: 'tooltip', component: GridTooltipSample }
            ]
          },
	        { 
            path: 'groupbox', 
            component: GroupBoxSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'context-menu', component: GroupBoxContextMenuSample },
              { path: 'custom-header', component: GroupBoxCustomHeaderSample },
              { path: 'events', component: GroupBoxEventsSample },
              { path: 'overview', component: GroupBoxOverviewSample },
              { path: 'tooltip', component: GroupBoxTooltipSample }
            ]
          },
	        { 
            path: 'listbar', component: ListBarSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: ListBarOverviewSample }
            ]
          },
	        { 
            path: 'listbox', component: ListBoxSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'fast-load', component: ListBoxFastLoadSample },
              { path: 'keyboard', component: ListBoxKeyboardSample },
              { path: 'overview', component: ListBoxOverviewSample }
            ]
          },
	        { 
            path: 'listview', component: ListViewSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'fast-load', component: ListViewFastLoadSample },
              { path: 'keyboard', component: ListViewKeyboardSample },
              { path: 'overview', component: ListViewOverviewSample }
            ]
          },
	        { 
            path: 'menu', component: MenuSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: MenuOverviewSample }
            ]
          },
	        { 
            path: 'splitcontainer', component: SplitContainerSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: SplitContainerOverviewSample }
            ]
          },
	        { 
            path: 'splitter', component: SplitterSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: SplitterOverviewSample }
            ]
          },
	        { 
            path: 'paginator', component: PaginatorSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: PaginatorOverviewSample }
            ]
          },
	        { 
            path: 'range', component: RangeSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: RangeOverviewSample }
            ]
          },
	        { 
            path: 'slidebar', component: SlideBarSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: SlideBarOverviewSample }
            ]
          },
	        { 
            path: 'tabstrip', component: TabStripSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: TabStripOverviewSample }
            ]
          },
	        { 
            path: 'tooltip', component: TooltipSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: TooltipOverviewSample }
            ]
          },
	        { 
            path: 'treegrid', component: TreeGridSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'add-remove', component: TreeGridAddRemoveSample },
              { path: 'add-row-dynamically', component: TreeGridAddRowDynamicallySample },
              { path: 'cell-dropdown', component: TreeGridCellDropDownSample },
              { path: 'cell-dropdown-checked-list', component: TreeGridCellDropDownCheckedListSample },
              { path: 'cell-templates', component: TreeGridCellTemplatesSample },
              { path: 'context-menu', component: TreeGridContextMenuSample },
              { path: 'drag-drop', component: TreeGridDragDropSample },
              { path: 'events', component: TreeGridEventsSample },
              { path: 'excel-editor', component: TreeGridExcelEditorSample },
              { path: 'fast-load', component: TreeGridFastLoadSample },
              { path: 'filter', component: TreeGridFilterSample },
              { path: 'multi-select', component: TreeGridMultiSelectSample },
              { path: 'overview', component: TreeGridOverviewSample },
              { path: 'sorting', component: TreeGridSortingSample },
              { path: 'tooltip', component: TreeGridTooltipSample }
            ]
          },
	        { 
            path: 'treelist', component: TreeListSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: TreeListOverviewSample }
            ]
          },
	        { 
            path: 'treeview', component: TreeViewSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'add-remove', component: TreeViewAddRemoveSample },
              { path: 'add-items-dynamically', component: TreeViewAddItemsDynamicallySample },
              { path: 'checkbox', component: TreeViewCheckBoxSample },
              { path: 'context-menu', component: TreeViewContextMenuSample },
              { path: 'drag-drop', component: TreeViewDragDropSample },
              { path: 'editing', component: TreeViewEditingSample },
              { path: 'events', component: TreeViewEventsSample },
              { path: 'fast-load', component: TreeViewFastLoadSample },
              { path: 'filter', component: TreeViewFilterSample },
              { path: 'keyboard', component: TreeViewKeyboardSample },
              { path: 'load-on-demand', component: TreeViewLoadOnDemandSample },
              { path: 'multi-select', component: TreeViewMultiSelectSample },
              { path: 'overview', component: TreeViewOverviewSample },
              { path: 'sorting', component: TreeViewSortingSample },
              { path: 'tooltip', component: TreeViewTooltipSample }
            ]
          },
  			  //{ path: '**', component: NotFoundSample }
  		])
  	],
  	declarations: [ 
  		AppComponent, 
  		StartComponent,
        AccordionSample,
        AccordionAddRemoveSample,
        AccordionAddGroupContextMenuSample,
        AccordionCustomHeaderSample,
        AccordionHeaderCheckBoxSample,
        AccordionEventsSample,
        AccordionOverviewSample,
        AccordionTooltipSample,
        ComboBoxSample,
        ComboBoxOverviewSample,
        ContextMenuSample,
        ContextMenuOverviewSample,
        FrameSample,
        FrameOverviewSample,
        GridSample,
        GridAddRemoveSample,
        GridAddRowDynamicallySample,
        GridCellDropDownSample,
        GridCellDropDownCheckedListSample,
        GridCellTemplatesSample,
        GridContextMenuSample,
        GridDragDropTreeGridSample,
        GridEventsSample,
        GridExcelEditorSample,
        GridFastLoadSample,
        GridFilterSample,
        GridMultiSelectSample,
        GridOverviewSample,
        GridSortingSample,
        GridTooltipSample,
        GroupBoxSample,
        GroupBoxContextMenuSample,
        GroupBoxCustomHeaderSample,
        GroupBoxEventsSample,
        GroupBoxOverviewSample,
        GroupBoxTooltipSample,
        ListBarSample,
        ListBarOverviewSample,
        ListBoxSample,
        ListBoxFastLoadSample,
        ListBoxKeyboardSample,
        ListBoxOverviewSample,
        ListViewSample,
        ListViewFastLoadSample,
        ListViewKeyboardSample,
        ListViewOverviewSample,
        MenuSample,
        MenuOverviewSample,
        SplitContainerSample,
        SplitContainerOverviewSample,
        SplitterSample,
        SplitterOverviewSample,
        PaginatorSample,
        PaginatorOverviewSample,
        RangeSample,
        RangeOverviewSample,
        SlideBarSample,
        SlideBarOverviewSample,
        TabStripSample,
        TabStripOverviewSample,
        TooltipSample,
        TooltipOverviewSample,
        TreeGridSample,
        TreeGridAddRemoveSample,
        TreeGridAddRowDynamicallySample,
        TreeGridCellDropDownSample,
        TreeGridCellDropDownCheckedListSample,
        TreeGridCellTemplatesSample,
        TreeGridContextMenuSample,
        TreeGridDragDropSample,
        TreeGridEventsSample,
        TreeGridExcelEditorSample,
        TreeGridFastLoadSample,
        TreeGridFilterSample,
        TreeGridMultiSelectSample,
        TreeGridOverviewSample,
        TreeGridSortingSample,
        TreeGridTooltipSample,
        TreeListSample,
        TreeListOverviewSample,
        TreeViewSample,
        TreeViewAddRemoveSample,
        TreeViewAddItemsDynamicallySample,
        TreeViewCheckBoxSample,
        TreeViewContextMenuSample,
        TreeViewDragDropSample,
        TreeViewEditingSample,
        TreeViewEventsSample,
        TreeViewFastLoadSample,
        TreeViewFilterSample,
        TreeViewKeyboardSample,
        TreeViewLoadOnDemandSample,
        TreeViewMultiSelectSample,
        TreeViewOverviewSample,
        TreeViewSortingSample,
        TreeViewTooltipSample
  	],
  	bootstrap: [ AppComponent ]
})
export class AppModule { }