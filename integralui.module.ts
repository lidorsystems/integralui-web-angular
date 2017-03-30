/*
  filename: integralui.module.ts
  version : 1.0.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IntegralUICoreModule } from './integralui.core.module';
import { IntegralUICommonModule } from './integralui.common.module';

import { IntegralUIAccordionModule } from './integralui.accordion.module';
import { IntegralUIGridModule } from './integralui.grid.module';
import { IntegralUIListBarModule } from './integralui.listbar.module';
import { IntegralUIListBoxModule } from './integralui.listbox.module';
import { IntegralUIListViewModule } from './integralui.listview.module';
import { IntegralUIMenuModule } from './integralui.menu.module';
import { IntegralUISlideBarModule } from './integralui.slidebar.module';
import { IntegralUISplitContainerModule } from './integralui.splitcontainer.module';
import { IntegralUITabStripModule } from './integralui.tabstrip.module';
import { IntegralUITreeGridModule } from './integralui.treegrid.module';
import { IntegralUITreeListModule } from './integralui.treelist.module';
import { IntegralUITreeViewModule } from './integralui.treeview.module';


import { IntegralUIAccordion } from './components/integralui.accordion';
import { IntegralUIFocus, IntegralUIItem, IntegralUITemplate } from './components/integralui.core';
import { IntegralUIComboBox } from './components/integralui.combobox';
import { IntegralUIContextMenu } from './directives/integralui.contextmenu';
import { IntegralUIFrame } from './directives/integralui.frame';
import { IntegralUIGrid } from './components/integralui.grid';
import { IntegralUIGroupBox } from './components/integralui.groupbox';
import { IntegralUIListBar } from './components/integralui.listbar';
import { IntegralUIListBox } from './components/integralui.listbox';
import { IntegralUIListGroup } from './components/integralui.listgroup';
import { IntegralUIListItem } from './components/integralui.listitem';
import { IntegralUIListView } from './components/integralui.listview';
import { IntegralUIMenu } from './components/integralui.menu';
import { IntegralUIMenuItem } from './components/integralui.menuitem';
import { IntegralUIPaginator } from './components/integralui.paginator';
import { IntegralUIRange } from './directives/integralui.range';
import { IntegralUIScrollBar } from './components/integralui.scrollbar';
import { IntegralUISlideBar, IntegralUISlide } from './components/integralui.slidebar';
import { IntegralUISplitContainer, IntegralUISplitContainerTags } from './components/integralui.splitcontainer';
import { IntegralUISplitter } from './components/integralui.splitter';
import { IntegralUITab } from './components/integralui.tab';
import { IntegralUITabStrip } from './components/integralui.tabstrip';
import { IntegralUITooltip } from './directives/integralui.tooltip';
import { IntegralUITreeGrid } from './components/integralui.treegrid';
import { IntegralUITreeItem } from './components/integralui.treeitem';
import { IntegralUITreeList } from './components/integralui.treelist';
import { IntegralUITreeView } from './components/integralui.treeview';


@NgModule({
  	imports: [ 
        CommonModule, 
        FormsModule,
        IntegralUICoreModule,
        IntegralUICommonModule,
        IntegralUIAccordionModule,
        IntegralUIGridModule,
        IntegralUIListBarModule,
        IntegralUIListBoxModule,
        IntegralUIListViewModule,
        IntegralUIMenuModule,
        IntegralUISlideBarModule,
        IntegralUISplitContainerModule,
        IntegralUITabStripModule,
        IntegralUITreeGridModule,
        IntegralUITreeListModule,
        IntegralUITreeViewModule
    ],
  	exports: [ 
  		  IntegralUIAccordion,
        IntegralUIComboBox,
        IntegralUIContextMenu,
        IntegralUIFocus, 
        IntegralUIFrame,
        IntegralUIGrid,
  		  IntegralUIGroupBox, 
        IntegralUIItem, 
        IntegralUIListBar, 
        IntegralUIListBox, 
        IntegralUIListGroup, 
        IntegralUIListItem, 
        IntegralUIListView, 
        IntegralUIMenu,
        IntegralUIMenuItem,
  		  IntegralUIPaginator, 
        IntegralUIRange,
  		  IntegralUISlideBar, 
  		  IntegralUISlide, 
        IntegralUISplitContainer,
        IntegralUISplitContainerTags,
        IntegralUISplitter,
        IntegralUITab, 
        IntegralUITabStrip, 
        IntegralUITemplate,
  		  IntegralUITooltip,
        IntegralUITreeGrid,
        IntegralUITreeItem, 
        IntegralUITreeList,
        IntegralUITreeView
  	]
})
export class IntegralUIModule { }
