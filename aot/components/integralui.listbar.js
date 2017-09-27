/*
  filename: integralui.listbar.js
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
import { Component, ComponentFactoryResolver, ContentChildren, ElementRef, EventEmitter, Input, Output, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService, IntegralUITComponent } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIListGroup } from './integralui.listgroup';
var IntegralUIListBar = (function (_super) {
__extends(IntegralUIListBar,_super);
function IntegralUIListBar(a,b,d,f,e){var c=_super.call(this,d)||this;c.elemRef=a;c.dataService=b;c.commonService=d;c.cmpResolver=f;c.baseService=e;c.numGroups=0;c.blockMarginTop=0;c.scrollPos={x:0,y:0};c.maxScrollPos={x:0,y:0};c.buttonWidth=0;c.groupEventList=[];c.initScrollPos=0;c.isScrollActive=!1;c.isScrollVisible=!1;c.scrollCount=0;c.scrollTimer=null;c.stopScrolling=!1;c.currentSelection=null;c.currentSelectedIndex=-1;c.selectedComponent=null;c.prevComponent=null;c.removeIndex=-1;c.trialRef=
null;c.afterCollapse=new EventEmitter;c.afterExpand=new EventEmitter;c.afterSelect=new EventEmitter;c.beforeCollapse=new EventEmitter;c.beforeExpand=new EventEmitter;c.beforeSelect=new EventEmitter;c.groupAdding=new EventEmitter;c.groupAdded=new EventEmitter;c.clear=new EventEmitter;c.groupRemoving=new EventEmitter;c.groupRemoved=new EventEmitter;c.selectionChanged=new EventEmitter;c.groupList=[];return c}
Object.defineProperty(IntegralUIListBar.prototype,"selectedIndex",{get:function(){return this.currentSelectedIndex},set:function(a){this.currentSelectedIndex!=a&&(this.currentSelectedIndex=a,this.selectComponentByIndex(a))},enumerable:!0,configurable:!0});Object.defineProperty(IntegralUIListBar.prototype,"selectedGroup",{get:function(){return this.currentSelection},set:function(a){this.currentSelection!=a&&(this.currentSelection=a,this.selectGroup(a))},enumerable:!0,configurable:!0});
IntegralUIListBar.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.dataService.init([{data:this.groups}]);this.generalClassName="iui-listbar";this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"}};this.updateStyle(this.controlStyle);this.updateControlClass()};
IntegralUIListBar.prototype.ngAfterViewInit=function(){var a=this,b=setTimeout(function(){var d=a.cmpResolver.resolveComponentFactory(IntegralUITComponent);d&&a.contentRef&&(a.trialRef=a.contentRef.createComponent(d));clearTimeout(b)},100)};
IntegralUIListBar.prototype.ngAfterContentInit=function(){this.groupList=this.contentList.toArray();this.numGroups=this.groupList.length;this.attachGroupEvents();0<this.numGroups&&(0<=this.selectedIndex?this.selectComponentByIndex(this.selectedIndex):this.selectedGroup&&this.groups&&this.selectComponentByIndex(this.groups.indexOf(this.selectedGroup)));this.updateLayout()};IntegralUIListBar.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};
IntegralUIListBar.prototype.ngAfterContentChecked=function(){this.contentList&&(this.groupList=this.contentList.toArray(),this.numGroups!=this.groupList.length&&(this.attachGroupEvents(),this.numGroups=this.groupList.length,this.selectComponentByIndex(this.selectedIndex)),0==this.numGroups&&(this.selectedComponent=null));this.updateLayout()};IntegralUIListBar.prototype.clearGroups=function(){this.dataService.clear();this.clear.emit(null)};
IntegralUIListBar.prototype.addGroup=function(a){this.callEventAdd("add",a)};IntegralUIListBar.prototype.insertGroupAt=function(a,b){this.callEventAdd("at",a,b)};IntegralUIListBar.prototype.insertGroupBefore=function(a,b){this.callEventAdd("ref",a,-1,b)};IntegralUIListBar.prototype.insertGroupAfter=function(a,b){this.callEventAdd("ref",a,-1,b,!0)};IntegralUIListBar.prototype.removeGroup=function(a){this.callEventRemove(a)};
IntegralUIListBar.prototype.removeGroupAt=function(a){this.groups&&0<=a&&a<this.groups.length&&this.callEventRemove(this.groups[a])};IntegralUIListBar.prototype.callEventAdd=function(a,b,d,f,e){var c={cancel:!1,group:b};this.groupAdding.emit(c);if(1!=c.cancel){switch(a){case "at":this.dataService.insert(b,d);break;case "ref":this.dataService.insertByRef(b,f,e);break;default:this.dataService.insert(b)}this.groupAdded.emit({group:b});this.selectedComponent||this.selectComponentByIndex(0)}};
IntegralUIListBar.prototype.callEventRemove=function(a){var b={cancel:!1,group:a};this.groupRemoving.emit(b);1!=b.cancel&&(this.removeIndex=this.groups?this.groups.indexOf(a):-1,this.dataService.removeAt(a),this.groupRemoved.emit({group:a}))};IntegralUIListBar.prototype.closeGroups=function(a){this.groupList=this.contentList.toArray();this.groupList.forEach(function(b,d){b!=a&&(b.selected=!1,b.collapse())})};
IntegralUIListBar.prototype.toggleGroups=function(){var a=this;if(a.selectedComponent)var b=setTimeout(function(){var d=0,f=0,e=0,c=a.selectedComponent.getContentHeight();if(a.selectedComponent.expanded){a.prevComponent&&(d=a.prevComponent.getContentHeight());var g=setInterval(function(){f<c?(e=0==e?1:e+2,f+=e,d-=e,d=0<d?d:0,a.selectedComponent.setContentHeight(f+"px"),a.prevComponent&&a.prevComponent.setContentHeight(d+"px")):(a.selectedComponent.setContentHeight("auto"),a.prevComponent&&(a.prevComponent.setContentHeight("0"),
a.prevComponent.expanded=!1,a.invokeEvent("AFTER_COLLAPSE",a.prevComponent)),a.invokeEvent("AFTER_EXPAND",a.selectedComponent),clearInterval(g))},25)}else a.selectedComponent.setContentHeight("0"),a.prevComponent&&a.prevComponent.setContentHeight("auto");clearInterval(b)},100)};IntegralUIListBar.prototype.getGroupCurrentIndex=function(a){this.groupList=this.contentList.toArray();return a&&this.groupList?this.groupList.indexOf(a):-1};
IntegralUIListBar.prototype.getGroupDataIndex=function(a){return a&&(a=this.getGroupCurrentIndex(a),this.groups&&0<=a&&a<this.groups.length)?a:-1};IntegralUIListBar.prototype.getGroupData=function(a){return this.groups&&0<=a&&a<this.groups.length?this.groups[a]:null};IntegralUIListBar.prototype.getGroupIndex=function(a){return a&&this.groups?this.groups.indexOf(a):-1};
IntegralUIListBar.prototype.getComponentData=function(a){if(a){if(a.data)return a.data;a=this.getGroupDataIndex(a);if(this.groups&&0<=a&&a<this.groups.length)return this.groups[a]}return null};
IntegralUIListBar.prototype.invokeEvent=function(a,b){var d=!0,f=this.getComponentData(b),e={cancel:!1,group:f};switch(a){case "AFTER_COLLAPSE":this.afterCollapse.emit({group:f});break;case "AFTER_EXPAND":this.afterExpand.emit({group:f});this.closeGroups(b);break;case "BEFORE_COLLAPSE":this.beforeCollapse.emit(e);d=!e.cancel;break;case "BEFORE_EXPAND":this.beforeExpand.emit(e),d=!e.cancel}return d};IntegralUIListBar.prototype.invokeMethod=function(a,b){var d=!0;switch(a){case "SELECT_GROUP":d=this.selectComponent(b)}return d};
IntegralUIListBar.prototype.isIndexInRange=function(a){this.contentList&&(this.groupList=this.contentList.toArray());return this.groupList?0<=a&&a<this.groupList.length:!1};
IntegralUIListBar.prototype.attachGroupEvents=function(){var a=this;this.groupList=this.contentList.toArray();a.groupEventList&&(a.groupEventList.forEach(function(a){a.forEach(function(a){a.unsubscribe()})}),a.groupEventList.length=0);this.groupList&&0<this.groupList.length&&this.groupList.forEach(function(b){var d=[];d.push(b.beforeSelect.subscribe(function(d){var e={cancel:!1,group:a.getComponentData(b)};a.beforeSelect.emit(e);d.cancel=e.cancel}));d.push(b.afterSelect.subscribe(function(d){a.clearSelection(b)}));
d.push(b.selectedChanged.subscribe(function(d){b.selected&&a.clearSelection(b)}));a.groupEventList.push(d)})};
IntegralUIListBar.prototype.updateLayout=function(){this.contentElem&&(this.isScrollVisible=this.elemRef.nativeElement.firstElementChild.offsetHeight<this.contentElem.nativeElement.offsetHeight,this.maxScrollPos={x:0,y:this.isScrollVisible?this.elemRef.nativeElement.firstElementChild.offsetHeight-this.contentElem.nativeElement.offsetHeight-(this.buttonUpElem.nativeElement.offsetHeight+this.buttonDownElem.nativeElement.offsetHeight)-2:0},this.initScrollPos=this.isScrollVisible?this.buttonUpElem.nativeElement.offsetHeight:
0,this.isScrollVisible||(this.scrollPos.y=0))};IntegralUIListBar.prototype.scrollUpPressed=function(){this.startScroll(!1)};IntegralUIListBar.prototype.scrollUpReleased=function(){this.stopScroll()};IntegralUIListBar.prototype.scrollDownPressed=function(){this.startScroll(!0)};IntegralUIListBar.prototype.scrollDownReleased=function(){this.stopScroll()};
IntegralUIListBar.prototype.startScroll=function(a){var b=this;b.scrollTimer&&clearInterval(b.scrollTimer);b.scrollCount=0;b.isScrollActive=!0;b.scrollTimer=setInterval(function(){b.scrollTimerElapsed(a)},100)};IntegralUIListBar.prototype.stopScroll=function(){this.scrollTimer&&clearInterval(this.scrollTimer);this.isScrollActive=!1};
IntegralUIListBar.prototype.scrollTimerElapsed=function(a){0==this.scrollCount&&(this.scrollCount=1);this.scrollCount+=5;this.stopScrolling=!1;this.processScroll(a);this.stopScrolling&&this.stopScroll()};
IntegralUIListBar.prototype.processScroll=function(a){a?this.scrollPos.y-this.scrollCount>this.maxScrollPos.y?this.scrollPos.y-=this.scrollCount:(this.stopScrolling=!0,this.scrollPos.y=this.maxScrollPos.y):0>this.scrollPos.y+this.scrollCount?this.scrollPos.y+=this.scrollCount:(this.stopScrolling=!0,this.scrollPos.y=0)};
IntegralUIListBar.prototype.listMouseWheel=function(a){a.preventDefault();var b=0;a.wheelDelta?b=Math.max(-1,Math.min(1,a.wheelDelta||-a.detail)):a.originalEvent&&(b=Math.max(-1,Math.min(1,a.originalEvent.wheelDelta||-a.originalEvent.detail)));this.setScrollPos({x:0,y:this.scrollPos.y- -30*b})};IntegralUIListBar.prototype.setScrollPos=function(a){a.y<this.maxScrollPos.y&&(a.y=this.maxScrollPos.y);0<a.y&&(a.y=0);this.scrollPos={x:0,y:a.y}};
IntegralUIListBar.prototype.clearSelection=function(a){this.groupList=this.contentList.toArray();this.groupList.forEach(function(b,d){b!=a&&(b.selected=!1,b.clearSelection())})};
IntegralUIListBar.prototype.selectComponent=function(a){var b=this.getComponentData(a),d={cancel:!1,group:b};this.beforeSelect.emit(d);return 1!=d.cancel&&a&&a!=this.selectedComponent?(this.currentSelectedIndex=d=this.getGroupCurrentIndex(a),this.groups&&0<=d&&d<this.groups.length&&(this.currentSelection=this.groups[d]),this.prevComponent=this.selectedComponent,this.selectedComponent=a,this.clearSelection(a),a.selected=!0,a.expanded=!0,this.afterSelect.emit({group:b}),this.selectionChanged.emit({index:d,
group:this.getGroupData(this.getGroupDataIndex(a))}),!0):!1};IntegralUIListBar.prototype.selectComponentByIndex=function(a){this.isIndexInRange(a)&&this.selectComponent(this.groupList[a])};IntegralUIListBar.prototype.selectGroup=function(a){this.groups&&(this.currentSelectedIndex=this.groups.indexOf(a),this.selectComponentByIndex(this.currentSelectedIndex))};    return IntegralUIListBar;
}(IntegralUIBaseComponent));
export { IntegralUIListBar };
IntegralUIListBar.decorators = [
    { type: Component, args: [{
                selector: 'iui-listbar',
                template: "\n\t\t<div [ngClass]=\"getControlClass()\" (mousewheel)=\"listMouseWheel($event)\">\n\t\t\t<div class=\"iui-listbar-button-up\" [ngStyle]=\"{ 'display': isScrollVisible ? 'block' : 'none' }\" (mousedown)=\"scrollUpPressed()\" (mouseup)=\"scrollUpReleased()\" [ngStyle]=\"{ 'width': buttonWidth + 'px' }\" #buttonUp>\n\t\t\t\t<span class=\"iui-listbar-button-up-icon\" [ngStyle]=\"{ 'display': scrollPos.y != 0 ? 'inline-block' : 'none' }\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"iui-listbar-content\" [ngStyle]=\"{ 'margin-top': scrollPos.y + initScrollPos - 1 + 'px' }\" #content>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t\t<div class=\"iui-listbar-button-down\" [ngStyle]=\"{ 'display': isScrollVisible ? 'block' : 'none' }\" (mousedown)=\"scrollDownPressed()\" (mouseup)=\"scrollDownReleased()\" [ngStyle]=\"{ 'width': buttonWidth + 'px' }\" #buttonDown>\n\t\t\t\t<span class=\"iui-listbar-button-down-icon\" [ngStyle]=\"{ 'display': scrollPos.y != maxScrollPos.y ? 'inline-block' : 'none' }\"></span>\n\t\t\t</div>\n\t\t</div>\n\t",
                providers: [IntegralUIBaseService, IntegralUIDataService],
                inputs: ['controlStyle', 'data', 'name', 'state'],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUIListBar.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: IntegralUIDataService, },
    { type: IntegralUICommonService, },
    { type: ComponentFactoryResolver, },
    { type: IntegralUIBaseService, },
]; };
IntegralUIListBar.propDecorators = {
    'buttonUpElem': [{ type: ViewChild, args: ['buttonUp', { read: ElementRef },] },],
    'buttonDownElem': [{ type: ViewChild, args: ['buttonDown', { read: ElementRef },] },],
    'contentRef': [{ type: ViewChild, args: ['content', { read: ViewContainerRef },] },],
    'contentElem': [{ type: ViewChild, args: ['content', { read: ElementRef },] },],
    'contentList': [{ type: ContentChildren, args: [IntegralUIListGroup,] },],
    'groups': [{ type: Input },],
    'selectedIndex': [{ type: Input },],
    'selectedGroup': [{ type: Input },],
    'afterCollapse': [{ type: Output },],
    'afterExpand': [{ type: Output },],
    'afterSelect': [{ type: Output },],
    'beforeCollapse': [{ type: Output },],
    'beforeExpand': [{ type: Output },],
    'beforeSelect': [{ type: Output },],
    'groupAdding': [{ type: Output },],
    'groupAdded': [{ type: Output },],
    'clear': [{ type: Output },],
    'groupRemoving': [{ type: Output },],
    'groupRemoved': [{ type: Output },],
    'selectionChanged': [{ type: Output },],
};
//# sourceMappingURL=integralui.listbar.js.map