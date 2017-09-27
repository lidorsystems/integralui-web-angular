/*
  filename: integralui.tabstrip.js
  version : 1.2.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ComponentFactoryResolver, ContentChildren, ElementRef, EventEmitter, Input, Output, Renderer, ViewChild, ViewChildren, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService, IntegralUIObjectState, IntegralUITabStripPlacement, IntegralUITComponent } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUITab } from './integralui.tab';
var IntegralUITabStrip = (function (_super) {
__extends(IntegralUITabStrip,_super);
function IntegralUITabStrip(a,b,d,g,k,h){var c=_super.call(this,g)||this;c.dataService=a;c.elemRef=b;c.elemRenderer=d;c.commonService=g;c.cmpResolver=k;c.baseService=h;c.dataTabs=[];c.eventList=[];c.numTabs=0;c.autoSizeValue=!1;c.currentTabPlacement=IntegralUITabStripPlacement.Top;c.blockPos={top:"0",right:"auto",bottom:"auto",left:"0"};c.tabSize={width:0,height:0};c.currentSelection=null;c.currentSelectedIndex=-1;c.selectedComponent=null;c.prevComponent=null;c.removeIndex=-1;c.trialRef=null;c.tabSpacing=
0;c.afterSelect=new EventEmitter;c.beforeSelect=new EventEmitter;c.tabAdding=new EventEmitter;c.tabAdded=new EventEmitter;c.clear=new EventEmitter;c.tabRemoving=new EventEmitter;c.tabRemoved=new EventEmitter;c.selectionChanged=new EventEmitter;c.tabList=[];return c}Object.defineProperty(IntegralUITabStrip.prototype,"autoSize",{get:function(){return this.autoSizeValue},set:function(a){this.autoSizeValue!=a&&(this.autoSizeValue=a,this.updateLayout())},enumerable:!0,configurable:!0});
Object.defineProperty(IntegralUITabStrip.prototype,"selectedIndex",{get:function(){return this.currentSelectedIndex},set:function(a){this.currentSelectedIndex!=a&&(this.currentSelectedIndex=a,this.selectComponentByIndex(a))},enumerable:!0,configurable:!0});Object.defineProperty(IntegralUITabStrip.prototype,"selectedTab",{get:function(){return this.currentSelection},set:function(a){this.currentSelection!=a&&(this.currentSelection=a,this.selectTab(a))},enumerable:!0,configurable:!0});
Object.defineProperty(IntegralUITabStrip.prototype,"tabs",{get:function(){return this.dataTabs},set:function(a){this.dataTabs=a;this.updateData();var b=this;setTimeout(function(){b.tabList=b.contentList.toArray();b.numTabs=b.tabList.length;0<b.numTabs&&(0<=b.selectedIndex?b.selectComponentByIndex(b.selectedIndex):b.selectedTab&&b.tabs?b.selectComponentByIndex(b.tabs.indexOf(b.selectedTab)):b.selectComponentByIndex(0));b.updateLayout()},100)},enumerable:!0,configurable:!0});
Object.defineProperty(IntegralUITabStrip.prototype,"tabStripPlacement",{get:function(){return this.currentTabPlacement},set:function(a){this.currentTabPlacement!=a&&(this.currentTabPlacement=a,this.updateLayout())},enumerable:!0,configurable:!0});IntegralUITabStrip.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.updateData();this.generalClassName="iui-tabstrip";this.tabHeaderClassName="iui-tab-header";this.initStyle()};IntegralUITabStrip.prototype.updateData=function(){this.dataService.init([{data:this.tabs}])};
IntegralUITabStrip.prototype.ngAfterViewInit=function(){var a=this,b=setTimeout(function(){var d=a.cmpResolver.resolveComponentFactory(IntegralUITComponent);d&&a.tabBlockRef&&(a.trialRef=a.tabBlockRef.createComponent(d));clearTimeout(b)},100)};IntegralUITabStrip.prototype.ngAfterContentInit=function(){};IntegralUITabStrip.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};IntegralUITabStrip.prototype.addTab=function(a){this.callEventAdd("add",a)};
IntegralUITabStrip.prototype.clearTabs=function(){this.dataService.clear();this.clear.emit(null)};IntegralUITabStrip.prototype.insertTabAt=function(a,b){this.callEventAdd("at",a,b)};IntegralUITabStrip.prototype.insertTabBefore=function(a,b){this.callEventAdd("ref",a,-1,b)};IntegralUITabStrip.prototype.insertTabAfter=function(a,b){this.callEventAdd("ref",a,-1,b,!0)};IntegralUITabStrip.prototype.removeTab=function(a){this.callEventRemove(a)};
IntegralUITabStrip.prototype.removeTabAt=function(a){this.tabs&&0<=a&&a<this.tabs.length&&this.callEventRemove(this.tabs[a])};IntegralUITabStrip.prototype.callEventAdd=function(a,b,d,g,k){var h={cancel:!1,tab:b};this.tabAdding.emit(h);if(1!=h.cancel){switch(a){case "at":this.dataService.insert(b,d);break;case "ref":this.dataService.insertByRef(b,g,k);break;default:this.dataService.insert(b)}this.tabAdded.emit({tab:b});this.selectedComponent||this.selectComponentByIndex(0)}};
IntegralUITabStrip.prototype.callEventRemove=function(a){var b={cancel:!1,tab:a};this.tabRemoving.emit(b);1!=b.cancel&&(this.removeIndex=this.tabs?this.tabs.indexOf(a):-1,this.dataService.removeAt(a),this.tabRemoved.emit({tab:a}))};IntegralUITabStrip.prototype.attachTabEvents=function(){};IntegralUITabStrip.prototype.getTabCurrentIndex=function(a){this.tabList=this.contentList.toArray();return a&&this.tabList?this.tabList.indexOf(a):-1};
IntegralUITabStrip.prototype.getTabDataIndex=function(a){return a&&(a=this.getTabCurrentIndex(a),this.tabs&&0<=a&&a<this.tabs.length)?a:-1};IntegralUITabStrip.prototype.getTabData=function(a){return this.tabs&&0<=a&&a<this.tabs.length?this.tabs[a]:null};IntegralUITabStrip.prototype.getTabIndex=function(a){return a&&this.tabs?this.tabs.indexOf(a):-1};IntegralUITabStrip.prototype.getComponentData=function(a){if(a){if(a.data)return a.data;a=this.getTabDataIndex(a);if(this.tabs&&0<=a&&a<this.tabs.length)return this.tabs[a]}return null};
IntegralUITabStrip.prototype.isIndexInRange=function(a){this.contentList&&(this.tabList=this.contentList.toArray());return this.tabList?0<=a&&a<this.tabList.length:!1};IntegralUITabStrip.prototype.updateLayout=function(){this.updateTabLayout()};
IntegralUITabStrip.prototype.updateTabLayout=function(){var a=this,b=setTimeout(function(){a.tabList=a.contentList.toArray();if(a.tabHeaders){var d=0,g=0,k=0,h=0,c={top:0,left:0},l={width:0,height:0};a.tabSize={width:0,height:0};var m=a.tabHeaders.toArray();if(m&&0<m.length){m.forEach(function(b,c){k=b.nativeElement.offsetWidth;h=b.nativeElement.offsetHeight;var e=a.commonService.getPadding(b.nativeElement);switch(a.currentTabPlacement){case IntegralUITabStripPlacement.Right:a.blockPos={top:"0",right:"0",
bottom:"auto",left:"auto"};a.elemRenderer.setElementStyle(b.nativeElement,"top",g+"px");a.elemRenderer.setElementStyle(b.nativeElement,"right","0");a.elemRenderer.setElementStyle(b.nativeElement,"bottom","auto");a.elemRenderer.setElementStyle(b.nativeElement,"left","auto");a.tabSize.width<k&&(a.tabSize.width=k-(e.left+e.right)-1);break;case IntegralUITabStripPlacement.Bottom:a.blockPos={top:"auto",right:"auto",bottom:"0",left:"0"};a.elemRenderer.setElementStyle(b.nativeElement,"top","auto");a.elemRenderer.setElementStyle(b.nativeElement,
"right","auto");a.elemRenderer.setElementStyle(b.nativeElement,"bottom","0");a.elemRenderer.setElementStyle(b.nativeElement,"left",d+"px");a.tabSize.height<h&&(a.tabSize.height=h-(e.top+e.bottom));break;case IntegralUITabStripPlacement.Left:a.blockPos={top:"0",right:"auto",bottom:"auto",left:"0"};a.elemRenderer.setElementStyle(b.nativeElement,"top",g+"px");a.elemRenderer.setElementStyle(b.nativeElement,"right","auto");a.elemRenderer.setElementStyle(b.nativeElement,"bottom","auto");a.elemRenderer.setElementStyle(b.nativeElement,
"left","0");a.tabSize.width<k&&(a.tabSize.width=k-(e.left+e.right)-1);break;default:a.blockPos={top:"0",right:"auto",bottom:"auto",left:"0"},a.elemRenderer.setElementStyle(b.nativeElement,"top","0"),a.elemRenderer.setElementStyle(b.nativeElement,"right","auto"),a.elemRenderer.setElementStyle(b.nativeElement,"bottom","auto"),a.elemRenderer.setElementStyle(b.nativeElement,"left",d+"px"),a.tabSize.height<h&&(a.tabSize.height=h)}e=a.tabSpacing;d+=k+e-1;g+=h+e-1});var f=a.commonService.getBorderWidth(a.elemRef.nativeElement.children[0]);
m.forEach(function(b,d){var e=a.commonService.getPadding(b.nativeElement);switch(a.currentTabPlacement){case IntegralUITabStripPlacement.Right:a.elemRenderer.setElementStyle(b.nativeElement,"width",a.tabSize.width+"px");c={top:0,left:0};l={width:a.elemRef.nativeElement.children[0].clientWidth-(f.left+f.right-1)-a.tabSize.width-(e.left+e.right)-2,height:a.elemRef.nativeElement.children[0].clientHeight-(f.top+f.bottom)};break;case IntegralUITabStripPlacement.Bottom:a.elemRenderer.setElementStyle(b.nativeElement,
"height",a.tabSize.height+"px");c={top:0,left:0};l={width:a.elemRef.nativeElement.children[0].clientWidth-(f.left+f.right),height:a.elemRef.nativeElement.children[0].clientHeight-a.tabSize.height-(e.top+e.bottom)-2-(f.top+f.bottom-1)};break;case IntegralUITabStripPlacement.Left:a.elemRenderer.setElementStyle(b.nativeElement,"width",a.tabSize.width+"px");c={top:0,left:a.tabSize.width+(e.left+e.right)+1};l={width:a.elemRef.nativeElement.children[0].clientWidth-(f.left+f.right-1)-a.tabSize.width-(e.left+
e.right)-2,height:a.elemRef.nativeElement.children[0].clientHeight-(f.top+f.bottom)};break;default:c={top:a.tabSize.height-1,left:0},l={width:a.elemRef.nativeElement.children[0].clientWidth-(f.left+f.right),height:a.elemRef.nativeElement.children[0].clientHeight-a.tabSize.height-(f.top+f.bottom-1)},a.autoSizeValue&&(l.height="auto")}})}a.tabList&&0<a.tabList.length&&a.tabList.forEach(function(a){a.updateLayout(c,l)})}clearTimeout(b)},1)};IntegralUITabStrip.prototype.tabClicked=function(a,b){this.selectComponent(b)};
IntegralUITabStrip.prototype.tabEnter=function(a,b){b.selected||(b.state|=IntegralUIObjectState.hovered)};IntegralUITabStrip.prototype.tabLeave=function(a,b){b.state&=~IntegralUIObjectState.hovered};IntegralUITabStrip.prototype.clearSelection=function(a){this.tabList=this.contentList.toArray();this.tabList.forEach(function(b,d){b!=a&&(b.selected=!1)})};
IntegralUITabStrip.prototype.selectComponent=function(a){if(a&&a!=this.selectedComponent){var b=this.getTabCurrentIndex(a),d=this.getComponentData(a),g={cancel:!1,index:b,tab:d};this.beforeSelect.emit(g);if(1!=g.cancel)return this.currentSelectedIndex=b,this.tabs&&0<=b&&b<this.tabs.length&&(this.currentSelection=this.tabs[b]),this.prevComponent=this.selectedComponent,this.selectedComponent=a,this.clearSelection(a),a.selected=!0,this.afterSelect.emit({index:b,tab:d}),this.selectionChanged.emit({index:b,
tab:d}),!0}return!1};IntegralUITabStrip.prototype.selectComponentByIndex=function(a){this.isIndexInRange(a)&&this.selectComponent(this.tabList[a])};IntegralUITabStrip.prototype.selectTab=function(a){this.tabs&&(this.currentSelectedIndex=this.tabs.indexOf(a),this.selectComponentByIndex(this.currentSelectedIndex))};
IntegralUITabStrip.prototype.getTabHeaderClass=function(a){var b=a.getCurrentTabStyle(),d=b.header.normal;if(a.state&IntegralUIObjectState.disabled)d+=" "+b.header.disabled;else if(a.state&IntegralUIObjectState.focused)d+=" "+b.header.focused;else if(a.state&IntegralUIObjectState.selected)switch(d+=" "+b.header.selected,this.currentTabPlacement){case IntegralUITabStripPlacement.Right:d+=" iui-tab-selected-right";break;case IntegralUITabStripPlacement.Bottom:d+=" iui-tab-selected-bottom";break;case IntegralUITabStripPlacement.Left:d+=
" iui-tab-selected-left";break;default:d+=" iui-tab-selected-top"}else a.state&IntegralUIObjectState.hovered&&(d+=" "+b.header.hovered);return d};    return IntegralUITabStrip;
}(IntegralUIBaseComponent));
export { IntegralUITabStrip };
IntegralUITabStrip.decorators = [
    { type: Component, args: [{
                selector: 'iui-tabstrip',
                template: "\n\t\t<div [ngClass]=\"getControlClass()\">\n\t\t\t<ul [ngStyle]=\"{ 'top': blockPos.top , 'right': blockPos.right, 'bottom': blockPos.bottom, 'left': blockPos.left }\" #tabBlock>\n\t\t\t\t<li *ngFor=\"let tab of tabList\" (mouseenter)=\"tabEnter($event, tab)\" (mouseleave)=\"tabLeave($event, tab)\" (mousedown)=\"tabClicked($event, tab)\" [ngClass]=\"getTabHeaderClass(tab)\" [ngStyle]=\"{ 'z-index': tab.elemOrder }\" #tabHeader>\n\t\t\t\t\t<span *ngIf=\"tab.icon\" [ngClass]=\"tab.icon\"></span>\n\t\t\t\t    <span *ngIf=\"tab.text\" class=\"iui-tab-label\">{{tab.text}}</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t",
                inputs: ['controlStyle', 'data', 'name', 'state'],
                providers: [IntegralUIBaseService, IntegralUIDataService],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUITabStrip.ctorParameters = function () { return [
    { type: IntegralUIDataService, },
    { type: ElementRef, },
    { type: Renderer, },
    { type: IntegralUICommonService, },
    { type: ComponentFactoryResolver, },
    { type: IntegralUIBaseService, },
]; };
IntegralUITabStrip.propDecorators = {
    'contentList': [{ type: ContentChildren, args: [IntegralUITab,] },],
    'tabBlock': [{ type: ViewChild, args: ['tabBlock',] },],
    'tabBlockRef': [{ type: ViewChild, args: ['tabBlock', { read: ViewContainerRef },] },],
    'tabHeaders': [{ type: ViewChildren, args: ['tabHeader',] },],
    'autoSize': [{ type: Input },],
    'tabSpacing': [{ type: Input },],
    'selectedIndex': [{ type: Input },],
    'selectedTab': [{ type: Input },],
    'tabs': [{ type: Input },],
    'tabStripPlacement': [{ type: Input },],
    'afterSelect': [{ type: Output },],
    'beforeSelect': [{ type: Output },],
    'tabAdding': [{ type: Output },],
    'tabAdded': [{ type: Output },],
    'clear': [{ type: Output },],
    'tabRemoving': [{ type: Output },],
    'tabRemoved': [{ type: Output },],
    'selectionChanged': [{ type: Output },],
};
//# sourceMappingURL=integralui.tabstrip.js.map