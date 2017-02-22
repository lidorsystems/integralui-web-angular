import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IntegralUIAccordion } from './components/integralui.accordion';
import { IntegralUIAnchorStyle, IntegralUIDragWindow, IntegralUIFocus, IntegralUIHeaderItem, IntegralUIItem, IntegralUIObjectState, IntegralUISelectionMode, IntegralUITComponent, IntegralUITemplate, IntegralUIVisibility } from './components/integralui.core';
import { IntegralUIBaseGrid, IntegralUIGridLines } from './components/integralui.base.grid';
import { IntegralUIBaseList } from './components/integralui.base.list';
import { IntegralUIComboBox } from './components/integralui.combobox';
import { IntegralUIContextMenu, IntegralUIContextMenuComponent } from './directives/integralui.contextmenu';
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
import { IntegralUITooltip, IntegralUITooltipComponent } from './directives/integralui.tooltip';
import { IntegralUITreeGrid } from './components/integralui.treegrid';
import { IntegralUITreeItem } from './components/integralui.treeitem';
import { IntegralUITreeList, IntegralUITreeListItem } from './components/integralui.treelist';
import { IntegralUITreeView } from './components/integralui.treeview';

import { IntegralUICommonService } from './services/integralui.common.service';
import { IntegralUIDragDropService } from './services/integralui.dragdrop.service';

@NgModule({
  	imports: [ CommonModule, FormsModule ],
  	declarations: [ 
  		IntegralUIAccordion,
      IntegralUIBaseGrid,
      IntegralUIBaseList, 
      IntegralUIComboBox,
      IntegralUIContextMenu,
      IntegralUIContextMenuComponent, 
      IntegralUIDragWindow,
      IntegralUIFocus,
      IntegralUIFrame,
      IntegralUIGrid,
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
      IntegralUIScrollBar,
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
      IntegralUITreeGrid,
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
      IntegralUIGrid,
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
      //IntegralUIScrollBar,
  		IntegralUISlideBar, 
  		IntegralUISlide, 
      IntegralUISplitContainer, IntegralUISplitContainerTags,
      IntegralUISplitter,
      IntegralUITab, 
      IntegralUITabStrip, 
      IntegralUITemplate,
  		IntegralUITooltip,
      IntegralUITreeGrid,
      IntegralUITreeItem, 
      IntegralUITreeList,
      IntegralUITreeView
  	],
    entryComponents: [ IntegralUIContextMenuComponent, IntegralUIDragWindow, IntegralUITComponent, IntegralUITooltipComponent ],
    providers: [ IntegralUICommonService, IntegralUIDragDropService ]
})
export class IntegralUIModule { }
