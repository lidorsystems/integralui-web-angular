/*
  filename: integralui.module.ts
  version : 0.7.524 BETA
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/iui-web-license-agreement.pdf.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IntegralUIAccordion } from './components/integralui.accordion';
import { IntegralUIAnchorStyle, IntegralUIDragWindow, IntegralUIFocus, IntegralUIHeaderItem, IntegralUIItem, IntegralUIObjectState, IntegralUISelectionMode, IntegralUITComponent, IntegralUITemplate, IntegralUIVisibility } from './components/integralui.core';
import { IntegralUIBaseList } from './components/integralui.base.list';
import { IntegralUIComboBox } from './components/integralui.combobox';
import { IntegralUIContextMenu, IntegralUIContextMenuComponent } from './directives/integralui.contextmenu';
import { IntegralUIFrame } from './directives/integralui.frame';
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
import { IntegralUISlideBar, IntegralUISlide } from './components/integralui.slidebar';
import { IntegralUISplitContainer, IntegralUISplitContainerTags } from './components/integralui.splitcontainer';
import { IntegralUISplitter } from './components/integralui.splitter';
import { IntegralUITab } from './components/integralui.tab';
import { IntegralUITabStrip } from './components/integralui.tabstrip';
import { IntegralUITooltip, IntegralUITooltipComponent } from './directives/integralui.tooltip';
import { IntegralUITreeItem } from './components/integralui.treeitem';
import { IntegralUITreeList, IntegralUITreeListItem } from './components/integralui.treelist';
import { IntegralUITreeView } from './components/integralui.treeview';

import { IntegralUICommonService } from './services/integralui.common.service';
import { IntegralUIDragDropService } from './services/integralui.dragdrop.service';

@NgModule({
  	imports: [ CommonModule, FormsModule ],
  	declarations: [ 
  		IntegralUIAccordion,
      IntegralUIBaseList, 
      IntegralUIComboBox,
      IntegralUIContextMenu,
      IntegralUIContextMenuComponent, 
      IntegralUIDragWindow,
      IntegralUIFocus,
      IntegralUIFrame,
  		IntegralUIGroupBox, 
  		IntegralUIHeaderItem, 
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
      IntegralUISplitContainer, IntegralUISplitContainerTags,
      IntegralUISplitter,
      IntegralUITab, 
      IntegralUITabStrip, 
      IntegralUITComponent,
      IntegralUITemplate,
  		IntegralUITooltip, 
  		IntegralUITooltipComponent, 
      IntegralUITreeItem, 
      IntegralUITreeList,
      IntegralUITreeListItem,
      IntegralUITreeView
  	],
  	exports: [ 
  		IntegralUIAccordion,
      IntegralUIComboBox,
      IntegralUIContextMenu,
      IntegralUIFocus, 
      IntegralUIFrame,
  		IntegralUIGroupBox, 
  		IntegralUIHeaderItem, 
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
      IntegralUISplitContainer, IntegralUISplitContainerTags,
      IntegralUISplitter,
      IntegralUITab, 
      IntegralUITabStrip, 
      IntegralUITemplate,
  		IntegralUITooltip,
      IntegralUITreeItem, 
      IntegralUITreeList,
      IntegralUITreeView
  	],
    entryComponents: [ IntegralUIContextMenuComponent, IntegralUIDragWindow, IntegralUITComponent, IntegralUITooltipComponent ],
    providers: [ IntegralUICommonService, IntegralUIDragDropService ]
})
export class IntegralUIModule { }
