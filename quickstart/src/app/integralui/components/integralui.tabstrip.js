/*
  filename: integralui.tabstrip.js
  version : 1.7.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,a){c.__proto__=a}||function(c,a){for(var b in a)a.hasOwnProperty(b)&&(c[b]=a[b])};return function(c,a){function b(){this.constructor=c}m(c,a);c.prototype=null===a?Object.create(a):(b.prototype=a.prototype,new b)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),integralui_tab_1=require("./integralui.tab"),IntegralUITabStrip=function(m){function c(a,b,c,e,g,h,f){var d=m.call(this,g)||this;d.dataService=a;d.elemRef=b;d.elemRenderer=c;d.changeRef=e;d.commonService=g;d.cmpResolver=h;d.baseService=f;d.dataTabs=[];d.eventList=[];d.numTabs=
0;d.reorderTab=null;d.tabReorderActive=!1;d.reorderTabPos={top:0,left:0};d.reorderTabStartPos={top:0,left:0};d.reorderTabCurrentPos={top:0,left:0};d.startTabReorder=!1;d.reorderTabIndex=-1;d.reorderNewTabIndex=-1;d.orgHeaderList=[];d.orgReorderTabIndex=-1;d.ctrlCursor="default";d.autoSizeValue=!1;d.blockPos={top:"0",right:"auto",bottom:"auto",left:"0"};d.clientRect={width:0,height:0};d.currentTabPlacement=integralui_core_1.IntegralUITabStripPlacement.Top;d.scrollBlockSize={width:0,height:0};d.scrollButtonSize=
{width:0,height:0};d.tabSize={width:0,height:0};d.tabStripSize={width:0,height:0};d.updateTimer=null;d.currentScrollMode=integralui_core_1.IntegralUITabScrollMode.None;d.isScrollActive=!1;d.scrollCount=0;d.scrollPos=0;d.scrollTimer=null;d.stopScrolling=!0;d.maxScrollPos=0;d.currentSelection=null;d.currentSelectedIndex=-1;d.selectedComponent=null;d.prevComponent=null;d.removeIndex=-1;d.tRef=null;d.allowDrag=!1;d.allowDrop=!0;d.tabSpacing=0;d.afterSelect=new core_1.EventEmitter;d.beforeSelect=new core_1.EventEmitter;
d.tabAdding=new core_1.EventEmitter;d.tabAdded=new core_1.EventEmitter;d.tabOrderChanged=new core_1.EventEmitter;d.clear=new core_1.EventEmitter;d.tabRemoving=new core_1.EventEmitter;d.tabRemoved=new core_1.EventEmitter;d.selectionChanged=new core_1.EventEmitter;d.tabList=[];return d}__extends(c,m);Object.defineProperty(c.prototype,"autoSize",{get:function(){return this.autoSizeValue},set:function(a){this.autoSizeValue!=a&&(this.autoSizeValue=a,this.updateLayout())},enumerable:!0,configurable:!0});
Object.defineProperty(c.prototype,"scrollMode",{get:function(){return this.currentScrollMode},set:function(a){this.currentScrollMode!=a&&(this.currentScrollMode=a,this.scrollPos=0,this.updateLayout())},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"selectedIndex",{get:function(){return this.currentSelectedIndex},set:function(a){this.currentSelectedIndex!=a&&(this.currentSelectedIndex=a,this.selectComponentByIndex(a))},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,
"selectedTab",{get:function(){return this.currentSelection},set:function(a){this.currentSelection!=a&&(this.currentSelection=a,this.selectTab(a))},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"tabs",{get:function(){return this.dataTabs},set:function(a){this.dataTabs=a;this.updateData();var b=this;setTimeout(function(){b.tabList=b.contentList.toArray();b.numTabs=b.tabList.length;0<b.numTabs&&(0<=b.selectedIndex?b.selectComponentByIndex(b.selectedIndex):b.selectedTab&&b.tabs?b.selectComponentByIndex(b.tabs.indexOf(b.selectedTab)):
b.selectComponentByIndex(0));b.updateLayout()},100)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"tabStripPlacement",{get:function(){return this.currentTabPlacement},set:function(a){this.currentTabPlacement!=a&&(this.currentTabPlacement=a,this.scrollPos=0,this.updateLayout())},enumerable:!0,configurable:!0});c.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.updateData();this.generalClassName="iui-tabstrip";this.tabHeaderClassName="iui-tab-header";this.initStyle()};
c.prototype.updateData=function(){this.dataService.init([{data:this.tabs}])};c.prototype.ngAfterViewInit=function(){var a=this,b=setTimeout(function(){var c=a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);c&&a.tabBlockRef&&(a.tRef=a.tabBlockRef.createComponent(c));clearTimeout(b)},100)};c.prototype.ngAfterContentInit=function(){};c.prototype.ngOnDestroy=function(){this.scrollTimer&&clearInterval(this.scrollTimer);this.tRef&&this.tRef.destroy()};c.prototype.ngAfterContentChecked=
function(){this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth,height:this.elemRef.nativeElement.firstElementChild.clientHeight};this.clientRect.width!=this.prevClientRect.width?(this.updateLayout(),this.prevClientRect.width=this.clientRect.width):this.clientRect.height!=this.prevClientRect.height&&(this.updateLayout(),this.prevClientRect.height=this.clientRect.height)};c.prototype.addTab=function(a){this.callEventAdd("add",a)};c.prototype.clearTabs=function(){this.dataService.clear();
this.clear.emit(null)};c.prototype.insertTabAt=function(a,b){this.callEventAdd("at",a,b)};c.prototype.insertTabBefore=function(a,b){this.callEventAdd("ref",a,-1,b)};c.prototype.insertTabAfter=function(a,b){this.callEventAdd("ref",a,-1,b,!0)};c.prototype.removeTab=function(a){this.callEventRemove(a)};c.prototype.removeTabAt=function(a){this.tabs&&0<=a&&a<this.tabs.length&&this.callEventRemove(this.tabs[a])};c.prototype.callEventAdd=function(a,b,c,e,g){var l={cancel:!1,tab:b};this.tabAdding.emit(l);
if(1!=l.cancel){switch(a){case "at":this.dataService.insert(b,c);break;case "ref":this.dataService.insertByRef(b,e,g);break;default:this.dataService.insert(b)}this.tabAdded.emit({tab:b});this.selectedComponent||this.selectComponentByIndex(0)}};c.prototype.callEventRemove=function(a){var b={cancel:!1,tab:a};this.tabRemoving.emit(b);1!=b.cancel&&(this.removeIndex=this.tabs?this.tabs.indexOf(a):-1,this.dataService.removeAt(a),this.tabRemoved.emit({tab:a}))};c.prototype.attachTabEvents=function(){};c.prototype.getTabCurrentIndex=
function(a){this.tabList=this.contentList.toArray();return a&&this.tabList?this.tabList.indexOf(a):-1};c.prototype.getTabDataIndex=function(a){return a&&(a=this.getTabCurrentIndex(a),this.tabs&&0<=a&&a<this.tabs.length)?a:-1};c.prototype.getTabData=function(a){return this.tabs&&0<=a&&a<this.tabs.length?this.tabs[a]:null};c.prototype.getTabIndex=function(a){return a&&this.tabs?this.tabs.indexOf(a):-1};c.prototype.getComponentData=function(a){if(a){if(a.data)return a.data;a=this.getTabDataIndex(a);
if(this.tabs&&0<=a&&a<this.tabs.length)return this.tabs[a]}return null};c.prototype.isIndexInRange=function(a){this.contentList&&(this.tabList=this.contentList.toArray());return this.tabList?0<=a&&a<this.tabList.length:!1};c.prototype.resetLayout=function(){this.updateTimer&&clearTimeout(this.updateTimer);this.updateTimer=null};c.prototype.updateLayout=function(){this.updateTabLayout()};c.prototype.updateTabLayout=function(){var a=this;a.resetLayout();a.updateTimer=setTimeout(function(){a.clientRect=
{width:a.elemRef.nativeElement.firstElementChild.clientWidth,height:a.elemRef.nativeElement.firstElementChild.clientHeight};a.scrollBlockSize=a.scrollInBoundElem?{width:a.scrollInBoundElem.nativeElement.offsetWidth,height:a.scrollInBoundElem.nativeElement.offsetHeight}:{width:0,height:0};a.scrollButtonSize=a.scrollButtonElem?{width:a.scrollButtonElem.nativeElement.offsetWidth,height:a.scrollButtonElem.nativeElement.offsetHeight}:{width:0,height:0};a.tabList=a.contentList.toArray();if(a.tabHeaders){var b=
0,c=0,e=0,g=0,h={top:0,left:0},f={width:0,height:0};a.tabSize={width:0,height:0};var d=a.tabHeaders.toArray();if(d&&0<d.length){d.forEach(function(d,l){a.elemRenderer.setElementStyle(d.nativeElement,"width","auto");a.elemRenderer.setElementStyle(d.nativeElement,"height","auto");e=d.nativeElement.offsetWidth;g=d.nativeElement.offsetHeight;var f=a.commonService.getPadding(d.nativeElement);switch(a.currentTabPlacement){case integralui_core_1.IntegralUITabStripPlacement.Right:a.blockPos={top:-a.scrollPos+
"px",right:"0",bottom:"auto",left:"auto"};a.currentScrollMode==integralui_core_1.IntegralUITabScrollMode.OutBound&&(a.blockPos.top=a.scrollButtonSize.height+4-a.scrollPos+"px");a.elemRenderer.setElementStyle(d.nativeElement,"top",c+"px");a.elemRenderer.setElementStyle(d.nativeElement,"right","0");a.elemRenderer.setElementStyle(d.nativeElement,"bottom","auto");a.elemRenderer.setElementStyle(d.nativeElement,"left","auto");a.tabSize.width<e&&(a.tabSize.width=e-(f.left+f.right)-1);break;case integralui_core_1.IntegralUITabStripPlacement.Bottom:a.blockPos=
{top:"auto",right:"auto",bottom:"0",left:-a.scrollPos+"px"};a.currentScrollMode==integralui_core_1.IntegralUITabScrollMode.OutBound&&(a.blockPos.left=a.scrollButtonSize.width+2-a.scrollPos+"px");a.elemRenderer.setElementStyle(d.nativeElement,"top","auto");a.elemRenderer.setElementStyle(d.nativeElement,"right","auto");a.elemRenderer.setElementStyle(d.nativeElement,"bottom","0");a.elemRenderer.setElementStyle(d.nativeElement,"left",b+"px");a.tabSize.height<g&&(a.tabSize.height=g-(f.top+f.bottom));break;
case integralui_core_1.IntegralUITabStripPlacement.Left:a.blockPos={top:-a.scrollPos+"px",right:"auto",bottom:"auto",left:"0"};a.currentScrollMode==integralui_core_1.IntegralUITabScrollMode.OutBound&&(a.blockPos.top=a.scrollButtonSize.height+4-a.scrollPos+"px");a.elemRenderer.setElementStyle(d.nativeElement,"top",c+"px");a.elemRenderer.setElementStyle(d.nativeElement,"right","auto");a.elemRenderer.setElementStyle(d.nativeElement,"bottom","auto");a.elemRenderer.setElementStyle(d.nativeElement,"left",
"0");a.tabSize.width<e&&(a.tabSize.width=e-(f.left+f.right)-1);break;default:a.blockPos={top:"0",right:"auto",bottom:"auto",left:-a.scrollPos+"px"},a.currentScrollMode==integralui_core_1.IntegralUITabScrollMode.OutBound&&(a.blockPos.left=a.scrollPos+a.scrollButtonSize.width+2-a.scrollPos+"px"),a.elemRenderer.setElementStyle(d.nativeElement,"top","0"),a.elemRenderer.setElementStyle(d.nativeElement,"right","auto"),a.elemRenderer.setElementStyle(d.nativeElement,"bottom","auto"),a.elemRenderer.setElementStyle(d.nativeElement,
"left",b+"px"),a.tabSize.height<g&&(a.tabSize.height=g)}f=a.tabSpacing;b+=e+f-1;c+=g+f-1});var k=a.commonService.getBorderWidth(a.elemRef.nativeElement.children[0]);d.forEach(function(b,c){var d=a.commonService.getPadding(b.nativeElement);switch(a.currentTabPlacement){case integralui_core_1.IntegralUITabStripPlacement.Right:a.elemRenderer.setElementStyle(b.nativeElement,"width",a.tabSize.width+"px");h={top:0,left:0};f={width:a.elemRef.nativeElement.children[0].clientWidth-(k.left+k.right-1)-a.tabSize.width-
(d.left+d.right)-2,height:a.elemRef.nativeElement.children[0].clientHeight-(k.top+k.bottom)};break;case integralui_core_1.IntegralUITabStripPlacement.Bottom:a.elemRenderer.setElementStyle(b.nativeElement,"height",a.tabSize.height+"px");h={top:0,left:0};f={width:a.elemRef.nativeElement.children[0].clientWidth-(k.left+k.right),height:a.elemRef.nativeElement.children[0].clientHeight-a.tabSize.height-(d.top+d.bottom)-2-(k.top+k.bottom-1)};break;case integralui_core_1.IntegralUITabStripPlacement.Left:a.elemRenderer.setElementStyle(b.nativeElement,
"width",a.tabSize.width+"px");h={top:0,left:a.tabSize.width+(d.left+d.right)+1};f={width:a.elemRef.nativeElement.children[0].clientWidth-(k.left+k.right-1)-a.tabSize.width-(d.left+d.right)-2,height:a.elemRef.nativeElement.children[0].clientHeight-(k.top+k.bottom)};break;default:h={top:a.tabSize.height-1,left:0},f={width:a.elemRef.nativeElement.children[0].clientWidth-(k.left+k.right),height:a.elemRef.nativeElement.children[0].clientHeight-a.tabSize.height-(k.top+k.bottom-1)},a.autoSizeValue&&(f.height=
"auto")}});a.tabStripSize={width:a.clientRect.width,height:a.clientRect.height};switch(a.currentTabPlacement){case integralui_core_1.IntegralUITabStripPlacement.Right:a.tabStripSize.width=e;break;case integralui_core_1.IntegralUITabStripPlacement.Bottom:a.tabStripSize.height=g;break;case integralui_core_1.IntegralUITabStripPlacement.Left:a.tabStripSize.width=e;break;default:a.tabStripSize.height=g}}a.tabList&&0<a.tabList.length&&a.tabList.forEach(function(a){a.updateLayout(h,f)});a.maxScrollPos=0;
a.currentTabPlacement==integralui_core_1.IntegralUITabStripPlacement.Left||a.currentTabPlacement==integralui_core_1.IntegralUITabStripPlacement.Right?(a.maxScrollPos+=c-a.tabSpacing+1-a.clientRect.height,a.maxScrollPos=a.currentScrollMode==integralui_core_1.IntegralUITabScrollMode.OutBound?a.maxScrollPos+2*(a.scrollButtonSize.height+4):a.maxScrollPos+a.scrollBlockSize.height):(a.maxScrollPos+=b-a.tabSpacing+1-a.clientRect.width,a.maxScrollPos=a.currentScrollMode==integralui_core_1.IntegralUITabScrollMode.OutBound?
a.maxScrollPos+2*(a.scrollButtonSize.width+2):a.maxScrollPos+a.scrollBlockSize.width);a.maxScrollPos=Math.max(a.maxScrollPos,0)}clearTimeout(a.updateTimer)},1)};c.prototype.updateTabHeaders=function(){var a=this,b=0,c=0,e=0,g=0,h=a.tabHeaders.toArray();h&&0<h.length&&h.forEach(function(f,d){e=f.nativeElement.offsetWidth;g=f.nativeElement.offsetHeight;a.commonService.getPadding(f.nativeElement);switch(a.currentTabPlacement){case integralui_core_1.IntegralUITabStripPlacement.Right:a.elemRenderer.setElementStyle(f.nativeElement,
"top",c+"px");a.elemRenderer.setElementStyle(f.nativeElement,"right","0");a.elemRenderer.setElementStyle(f.nativeElement,"bottom","auto");a.elemRenderer.setElementStyle(f.nativeElement,"left","auto");break;case integralui_core_1.IntegralUITabStripPlacement.Bottom:a.elemRenderer.setElementStyle(f.nativeElement,"top","auto");a.elemRenderer.setElementStyle(f.nativeElement,"right","auto");a.elemRenderer.setElementStyle(f.nativeElement,"bottom","0");a.elemRenderer.setElementStyle(f.nativeElement,"left",
b+"px");break;case integralui_core_1.IntegralUITabStripPlacement.Left:a.elemRenderer.setElementStyle(f.nativeElement,"top",c+"px");a.elemRenderer.setElementStyle(f.nativeElement,"right","auto");a.elemRenderer.setElementStyle(f.nativeElement,"bottom","auto");a.elemRenderer.setElementStyle(f.nativeElement,"left","0");break;default:a.elemRenderer.setElementStyle(f.nativeElement,"top","0"),a.elemRenderer.setElementStyle(f.nativeElement,"right","auto"),a.elemRenderer.setElementStyle(f.nativeElement,"bottom",
"auto"),a.elemRenderer.setElementStyle(f.nativeElement,"left",b+"px")}var l=a.tabSpacing;b+=e+l-1;c+=g+l-1})};c.prototype.tabMouseDown=function(a,b){this.isEnabled&&this.selectComponent(b);if(this.isEnabled)switch(a.which){case 1:this.selectComponent(b);this.allowDrag&&b.allowDrag&&(this.startTabReorder=!0,this.reorderTabStartPos={top:a.pageY+this.scrollPos,left:a.pageX+this.scrollPos},this.currentScrollMode==integralui_core_1.IntegralUITabScrollMode.OutBound&&(this.currentTabPlacement==integralui_core_1.IntegralUITabStripPlacement.Left||
this.currentTabPlacement==integralui_core_1.IntegralUITabStripPlacement.Right?this.reorderTabStartPos.top-=this.scrollButtonSize.height+4:this.reorderTabStartPos.left-=this.scrollButtonSize.width+2));break;case 2:this.selectComponent(b)}};c.prototype.tabMouseMove=function(a,b){if(this.isEnabled&&this.startTabReorder){this.reorderTabCurrentPos={top:a.pageY,left:a.pageX};var c=Math.abs(this.reorderTabCurrentPos.left-this.reorderTabStartPos.left),e=Math.abs(this.reorderTabCurrentPos.top-this.reorderTabStartPos.top);
!this.tabReorderActive&&(3<c||3<e)&&(this.tabReorderActive=!0,this.reorderTab=b,this.ctrlCursor="move",this.orgHeaderList=this.tabHeaders.toArray(),this.orgReorderTabIndex=this.tabList.indexOf(this.reorderTab),this.updateReorderTabPos())}};c.prototype.tabEnter=function(a,b){this.isEnabled&&!b.selected&&(b.state|=integralui_core_1.IntegralUIObjectState.hovered)};c.prototype.tabLeave=function(a,b){b.state&=~integralui_core_1.IntegralUIObjectState.hovered};c.prototype.ctrlMouseMove=function(a){this.isEnabled&&
1==a.which&&this.tabReorderActive&&this.reorderTab&&(this.reorderTabCurrentPos.left=a.pageX,this.updateReorderTabPos(),this.processDragScroll(a),a.stopPropagation())};c.prototype.ctrlMouseUp=function(a){var b=this;if(1==a.which&&b.reorderTab&&0<=b.reorderNewTabIndex&&b.reorderNewTabIndex<b.tabList.length&&b.orgReorderTabIndex!=b.reorderNewTabIndex){var c={tab:b.getComponentData(b.reorderTab)};b.commonService.moveObject(b.orgReorderTabIndex,b.reorderNewTabIndex,b.tabs);setTimeout(function(){b.tabList=
b.contentList.toArray();b.updateLayout();b.tabOrderChanged.emit(c)},1)}this.resetReorderTabSettings()};c.prototype.updateReorderTabPos=function(){if(this.reorderTab){var a=0,b=0;this.reorderNewTabIndex=this.reorderTabIndex=this.tabList.indexOf(this.reorderTab);var c=this.orgHeaderList,e;for(e=0;e<c.length&&e<this.orgReorderTabIndex;e++){var g=c[e].nativeElement.offsetWidth;var h=c[e].nativeElement.offsetHeight;this.currentTabPlacement==integralui_core_1.IntegralUITabStripPlacement.Left||this.currentTabPlacement==
integralui_core_1.IntegralUITabStripPlacement.Right?b+=h+this.tabSpacing-1:a+=g+this.tabSpacing-1}e<c.length&&e==this.orgReorderTabIndex&&(g=c[e].nativeElement.offsetWidth,h=c[e].nativeElement.offsetHeight,this.currentTabPlacement==integralui_core_1.IntegralUITabStripPlacement.Left||this.currentTabPlacement==integralui_core_1.IntegralUITabStripPlacement.Right?(this.reorderTabPos.top=b+this.reorderTabCurrentPos.top-this.reorderTabStartPos.top,this.reorderTabPos.top=Math.max(0,Math.min(this.reorderTabPos.top,
this.clientRect.height-h))):(this.reorderTabPos.left=a+this.reorderTabCurrentPos.left-this.reorderTabStartPos.left,this.reorderTabPos.left=Math.max(0,Math.min(this.reorderTabPos.left,this.clientRect.width-g))));b=a=0;e=this.commonService.getPageRect(this.elemRef.nativeElement);for(var f=0;f<this.tabs.length;f++)if(f<c.length)if(g=c[f].nativeElement.offsetWidth,h=c[f].nativeElement.offsetHeight,this.currentTabPlacement==integralui_core_1.IntegralUITabStripPlacement.Left||this.currentTabPlacement==
integralui_core_1.IntegralUITabStripPlacement.Right){if(b+=h,this.reorderTabCurrentPos.top-e.top<b){this.reorderNewTabIndex=f;break}}else if(a+=g,this.reorderTabCurrentPos.left-e.left<a){this.reorderNewTabIndex=f;break}this.reorderTabIndex!=this.reorderNewTabIndex&&(this.commonService.moveObject(this.reorderTabIndex,this.reorderNewTabIndex,this.tabList),this.changeRef.detectChanges(),this.updateTabHeaders())}};c.prototype.resetReorderTabSettings=function(){this.reorderTab=null;this.startTabReorder=
this.tabReorderActive=!1;this.ctrlCursor="default";this.reorderTabStartPos={top:0,left:0};this.reorderTabCurrentPos={top:0,left:0};this.reorderTabPos={top:0,left:0}};c.prototype.getTabOpacity=function(a){return this.tabReorderActive&&a==this.reorderTab?0:1};c.prototype.onWindowMouseUp=function(a){this.resetReorderTabSettings()};c.prototype.startScroll=function(a){var b=this;b.scrollTimer&&clearInterval(b.scrollTimer);b.scrollCount=0;b.isScrollActive=!0;b.scrollTimer=setInterval(function(){b.scrollTimerElapsed(a)},
100)};c.prototype.stopScroll=function(){this.scrollTimer&&clearInterval(this.scrollTimer);this.isScrollActive=!1};c.prototype.processScroll=function(a){a?this.scrollPos+this.scrollCount<this.maxScrollPos?this.scrollPos+=this.scrollCount:(this.stopScrolling=!0,this.scrollPos=this.maxScrollPos):0<this.scrollPos-this.scrollCount?this.scrollPos-=this.scrollCount:(this.stopScrolling=!0,this.scrollPos=0);this.scrollTabs()};c.prototype.processDragScroll=function(a){if(this.isEnabled){var b=this.commonService.getShiftPos();
a=this.commonService.getMousePos(a);a.x-=b.x;a.y-=b.y;var c=this.commonService.getPageRect(this.elemRef.nativeElement.firstElementChild);b=c.top+25;var e=c.right-25,g=c.bottom-25;c=c.left+25;this.currentScrollMode==integralui_core_1.IntegralUITabScrollMode.OutBound?(b+=this.scrollButtonSize.height+4,e-=this.scrollButtonSize.width+2,g-=this.scrollButtonSize.height+4,c+=this.scrollButtonSize.width+2):(e-=this.scrollBlockSize.width,g-=this.scrollBlockSize.height);this.currentTabPlacement==integralui_core_1.IntegralUITabStripPlacement.Left||
this.currentTabPlacement==integralui_core_1.IntegralUITabStripPlacement.Right?a.y<b?this.startScroll():a.y>g?this.startScroll(!0):this.stopScroll():a.x<c?this.startScroll():a.x>e?this.startScroll(!0):this.stopScroll()}};c.prototype.scrollTimerElapsed=function(a){0==this.scrollCount&&(this.scrollCount=1);this.scrollCount+=5;this.stopScrolling=!1;this.processScroll(a);this.stopScrolling&&(clearInterval(this.scrollTimer),this.isScrollActive=!1)};c.prototype.scrollTabs=function(){switch(this.currentTabPlacement){case integralui_core_1.IntegralUITabStripPlacement.Right:var a=
-this.scrollPos;this.currentScrollMode==integralui_core_1.IntegralUITabScrollMode.OutBound&&(a+=this.scrollButtonSize.height+4);this.blockPos={top:a+"px",right:"0",bottom:"auto",left:"auto"};break;case integralui_core_1.IntegralUITabStripPlacement.Bottom:a=-this.scrollPos;this.currentScrollMode==integralui_core_1.IntegralUITabScrollMode.OutBound&&(a+=this.scrollButtonSize.width+2);this.blockPos={top:"auto",right:"auto",bottom:"0",left:a+"px"};break;case integralui_core_1.IntegralUITabStripPlacement.Left:a=
-this.scrollPos;this.currentScrollMode==integralui_core_1.IntegralUITabScrollMode.OutBound&&(a+=this.scrollButtonSize.height+4);this.blockPos={top:a+"px",right:"auto",bottom:"auto",left:"0"};break;default:a=-this.scrollPos,this.currentScrollMode==integralui_core_1.IntegralUITabScrollMode.OutBound&&(a+=this.scrollButtonSize.width+2),this.blockPos={top:"0",right:"auto",bottom:"auto",left:a+"px"}}};c.prototype.scrollButtonMouseDown=function(a,b){this.startScroll(b);a.stopPropagation()};c.prototype.scrollButtonMouseUp=
function(a){this.stopScroll();a.stopPropagation()};c.prototype.clearSelection=function(a){this.tabList.forEach(function(b,c){b!=a&&(b.selected=!1)})};c.prototype.selectComponent=function(a){if(a&&a!=this.selectedComponent){var b=this.getTabCurrentIndex(a),c=this.getComponentData(a),e={cancel:!1,index:b,tab:c};this.beforeSelect.emit(e);if(1!=e.cancel)return this.currentSelectedIndex=b,this.tabs&&0<=b&&b<this.tabs.length&&(this.currentSelection=this.tabs[b]),this.prevComponent=this.selectedComponent,
this.selectedComponent=a,this.clearSelection(a),a.selected=!0,this.afterSelect.emit({index:b,tab:c}),this.selectionChanged.emit({index:b,tab:c}),!0}return!1};c.prototype.selectComponentByIndex=function(a){this.isIndexInRange(a)&&this.selectComponent(this.tabList[a])};c.prototype.selectTab=function(a){this.tabs&&(this.currentSelectedIndex=this.tabs.indexOf(a),this.selectComponentByIndex(this.currentSelectedIndex))};c.prototype.getScrollInBoundStyle=function(){var a={top:"auto",right:"auto",bottom:"auto",
left:"auto",opacity:"1",padding:"0",width:"auto",height:"auto"};switch(this.currentTabPlacement){case integralui_core_1.IntegralUITabStripPlacement.Right:a.bottom="0px";a.right="0";a.padding="2px 0 0 0";a.width=this.tabStripSize.width+"px";break;case integralui_core_1.IntegralUITabStripPlacement.Bottom:a.right="0px";a.bottom="0";a.padding="0 0 0 2px";a.height=this.tabStripSize.height+1+"px";break;case integralui_core_1.IntegralUITabStripPlacement.Left:a.bottom="0px";a.left="0";a.padding="2px 0 0 0";
a.width=this.tabStripSize.width+"px";break;default:a.right="0px",a.top="0",a.padding="0 0 0 2px",a.height=this.tabStripSize.height-1+"px"}0==this.maxScrollPos&&(a.opacity="0.4");return a};c.prototype.getScrollInBoundButtonStyle=function(a){a={"margin-left":"auto","margin-top":"auto"};switch(this.currentTabPlacement){case integralui_core_1.IntegralUITabStripPlacement.Right:a["margin-left"]="2px";break;case integralui_core_1.IntegralUITabStripPlacement.Bottom:a["margin-top"]="2px";break;case integralui_core_1.IntegralUITabStripPlacement.Left:a["margin-left"]=
this.tabStripSize.width-this.scrollButtonSize.width-2+"px";break;default:a["margin-top"]=this.tabStripSize.height-this.scrollButtonSize.height-2+"px"}return a};c.prototype.getScrollOutBoundStyle=function(a){var b={top:"auto",right:"auto",bottom:"auto",left:"auto",opacity:"1",padding:"0",width:"auto",height:"auto"};switch(this.currentTabPlacement){case integralui_core_1.IntegralUITabStripPlacement.Right:1==a?(b.top="0",b.padding="0  0 2px 0"):(b.bottom="0",b.padding="2px 0 0 0");b.right="0";b.width=
this.tabStripSize.width+"px";break;case integralui_core_1.IntegralUITabStripPlacement.Bottom:1==a?(b.left="0",b.padding="0 2px 0 0"):(b.right="0",b.padding="0 0 0 2px");b.bottom="0";b.height=this.tabStripSize.height+1+"px";break;case integralui_core_1.IntegralUITabStripPlacement.Left:1==a?(b.top="0",b.padding="0  0 2px 0"):(b.bottom="0",b.padding="2px 0 0 0");b.left="0";b.width=this.tabStripSize.width+"px";break;default:1==a?(b.left="0",b.padding="0 2px 0 0"):(b.right="0",b.padding="0 0 0 2px"),b.top=
"0",b.height=this.tabStripSize.height-1+"px"}0==this.maxScrollPos&&(b.opacity="0.4");return b};c.prototype.getControlStyle=function(){var a={cursor:this.ctrlCursor};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};c.prototype.getTabHeaderClass=function(a,b){var c=a.getCurrentTabStyle(),e=c.header.normal;if(a.state&integralui_core_1.IntegralUIObjectState.disabled)e+=" "+c.header.disabled;else if(a.state&integralui_core_1.IntegralUIObjectState.focused)e+=
" "+c.header.focused;else if(a.state&integralui_core_1.IntegralUIObjectState.selected)switch(e+=" "+c.header.selected,this.currentTabPlacement){case integralui_core_1.IntegralUITabStripPlacement.Right:e+=" iui-tab-selected-right";break;case integralui_core_1.IntegralUITabStripPlacement.Bottom:e+=" iui-tab-selected-bottom";break;case integralui_core_1.IntegralUITabStripPlacement.Left:e+=" iui-tab-selected-left";break;default:e+=" iui-tab-selected-top"}else a.state&integralui_core_1.IntegralUIObjectState.hovered&&
(e+=" "+c.header.hovered);return e};c.prototype.getReorderTabStyle=function(){var a={position:"absolute","pointer-events":"none","z-index":999};switch(this.currentTabPlacement){case integralui_core_1.IntegralUITabStripPlacement.Right:a.top=this.reorderTabPos.top+"px";a.right=0;a.bottom="auto";a.left="auto";a.width=this.tabSize.width-1+"px";break;case integralui_core_1.IntegralUITabStripPlacement.Bottom:a.top="auto";a.right="auto";a.bottom=0;a.left=this.reorderTabPos.left+"px";a.height=this.tabSize.height-
1+"px";break;case integralui_core_1.IntegralUITabStripPlacement.Left:a.top=this.reorderTabPos.top+"px";a.right="auto";a.bottom="auto";a.left=0;a.width=this.tabSize.width-1+"px";break;default:a.top=0,a.right="auto",a.bottom="auto",a.left=this.reorderTabPos.left+"px",a.height="auto"}return a};c.prototype.tabTouchStart=function(a,b){this.isEnabled&&this.selectComponent(b)};c.decorators=[{type:core_1.Component,args:[{selector:"iui-tabstrip",template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()">\n\t\t\t<div *ngIf="scrollMode==2" class="iui-tabstrip-scroll-outbound" [ngStyle]="getScrollOutBoundStyle(1)" #scrollOutBound>\n\t\t\t\t<div class="iui-tabstrip-scroll-button" [ngClass]="{ \'iui-tabstrip-scroll-button-up\': tabStripPlacement == 1 || tabStripPlacement == 4, \'iui-tabstrip-scroll-button-left\': tabStripPlacement == 0 || tabStripPlacement == 3  }" [ngStyle]="getScrollInBoundButtonStyle()" (mousedown)="scrollButtonMouseDown($event)" (mouseup)="scrollButtonMouseUp($event)" #scrollButton><span></span></div>\n\t\t\t</div>\n\t\t\t<ul [ngStyle]="{ \'top\': blockPos.top , \'right\': blockPos.right, \'bottom\': blockPos.bottom, \'left\': blockPos.left }" (mousemove)="ctrlMouseMove($event)" (mouseup)="ctrlMouseUp($event)" #tabBlock>\n\t\t\t\t<li *ngFor="let tab of tabList" (mouseenter)="tabEnter($event, tab)" (mouseleave)="tabLeave($event, tab)" (mousedown)="tabMouseDown($event, tab)" (mousemove)="tabMouseMove($event, tab)" (touchstart)="tabTouchStart($event, tab)"  [ngClass]="getTabHeaderClass(tab)" [ngStyle]="{ opacity: getTabOpacity(tab), \'z-index\': tab.elemOrder }" #tabHeader>\n\t\t\t\t\t<span *ngIf="tab.icon" [ngClass]="tab.icon"></span>\n\t\t\t\t    <span *ngIf="tab.text" class="iui-tab-label">{{tab.text}}</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<li *ngIf="reorderTab" [ngClass]="getTabHeaderClass(reorderTab, true)" [ngStyle]="getReorderTabStyle()">\n\t\t\t\t<div [ngStyle]="{ opacity: \'0.5\' }">\n\t\t\t\t\t<span *ngIf="reorderTab.icon" [ngClass]="reorderTab.icon"></span>\n\t\t\t\t    <span *ngIf="reorderTab.text" class="iui-tab-label">{{reorderTab.text}}</span>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<div *ngIf="scrollMode==1" class="iui-tabstrip-scroll-inbound" [ngStyle]="getScrollInBoundStyle()" #scrollInBound>\n\t\t\t\t<div class="iui-tabstrip-scroll-button" [ngClass]="{ \'iui-tabstrip-scroll-button-up\': tabStripPlacement == 1 || tabStripPlacement == 4, \'iui-tabstrip-scroll-button-left\': tabStripPlacement == 0 || tabStripPlacement == 3  }" [ngStyle]="getScrollInBoundButtonStyle()" (mousedown)="scrollButtonMouseDown($event)" (mouseup)="scrollButtonMouseUp($event)" #scrollButton><span></span></div>\n\t\t\t\t<div class="iui-tabstrip-scroll-button"  [ngClass]="{ \'iui-tabstrip-scroll-button-down\': tabStripPlacement == 1 || tabStripPlacement == 4, \'iui-tabstrip-scroll-button-right\': tabStripPlacement == 0 || tabStripPlacement == 3  }" [ngStyle]="getScrollInBoundButtonStyle()" (mousedown)="scrollButtonMouseDown($event, true)" (mouseup)="scrollButtonMouseUp($event)"><span></span></div>\n\t\t\t</div>\n\t\t\t<div *ngIf="scrollMode==2" class="iui-tabstrip-scroll-outbound" [ngStyle]="getScrollOutBoundStyle()" #scrollInBound>\n\t\t\t\t<div class="iui-tabstrip-scroll-button"  [ngClass]="{ \'iui-tabstrip-scroll-button-down\': tabStripPlacement == 1 || tabStripPlacement == 4, \'iui-tabstrip-scroll-button-right\': tabStripPlacement == 0 || tabStripPlacement == 3  }" [ngStyle]="getScrollInBoundButtonStyle()" (mousedown)="scrollButtonMouseDown($event, true)" (mouseup)="scrollButtonMouseUp($event)"><span></span></div>\n\t\t\t</div>\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t',
inputs:"controlStyle data enabled name size state".split(" "),providers:[integralui_core_1.IntegralUIBaseService,integralui_data_service_1.IntegralUIDataService],encapsulation:core_1.ViewEncapsulation.None}]}];c.ctorParameters=function(){return[{type:integralui_data_service_1.IntegralUIDataService},{type:core_1.ElementRef},{type:core_1.Renderer},{type:core_1.ChangeDetectorRef},{type:integralui_common_service_1.IntegralUICommonService},{type:core_1.ComponentFactoryResolver},{type:integralui_core_1.IntegralUIBaseService}]};
c.propDecorators={contentList:[{type:core_1.ContentChildren,args:[integralui_tab_1.IntegralUITab]}],scrollInBoundElem:[{type:core_1.ViewChild,args:["scrollInBound"]}],scrollButtonElem:[{type:core_1.ViewChild,args:["scrollButton"]}],tabBlock:[{type:core_1.ViewChild,args:["tabBlock"]}],tabBlockRef:[{type:core_1.ViewChild,args:["tabBlock",{read:core_1.ViewContainerRef}]}],tabHeaders:[{type:core_1.ViewChildren,args:["tabHeader"]}],allowDrag:[{type:core_1.Input}],allowDrop:[{type:core_1.Input}],autoSize:[{type:core_1.Input}],
scrollMode:[{type:core_1.Input}],selectedIndex:[{type:core_1.Input}],selectedTab:[{type:core_1.Input}],tabs:[{type:core_1.Input}],tabSpacing:[{type:core_1.Input}],tabStripPlacement:[{type:core_1.Input}],afterSelect:[{type:core_1.Output}],beforeSelect:[{type:core_1.Output}],tabAdding:[{type:core_1.Output}],tabAdded:[{type:core_1.Output}],tabOrderChanged:[{type:core_1.Output}],clear:[{type:core_1.Output}],tabRemoving:[{type:core_1.Output}],tabRemoved:[{type:core_1.Output}],selectionChanged:[{type:core_1.Output}],
onWindowMouseUp:[{type:core_1.HostListener,args:["document:mouseup",["$event"]]}]};return c}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUITabStrip=IntegralUITabStrip;