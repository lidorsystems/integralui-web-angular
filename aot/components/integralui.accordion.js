/*
  filename: integralui.accordion.js
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
import { Component, ComponentFactoryResolver, ContentChildren, EventEmitter, Input, Output, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService, IntegralUITComponent } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIGroupBox } from './integralui.groupbox';
var IntegralUIAccordion = (function (_super) {
__extends(IntegralUIAccordion,_super);
function IntegralUIAccordion(a,b,d,e){var c=_super.call(this,b)||this;c.dataService=a;c.commonService=b;c.cmpResolver=d;c.baseService=e;c.numGroups=0;c.currentSelection=null;c.currentSelectedIndex=-1;c.selectedComponent=null;c.prevComponent=null;c.removeIndex=-1;c.toggleTimer=null;c.trialRef=null;c.afterCollapse=new EventEmitter;c.afterExpand=new EventEmitter;c.afterSelect=new EventEmitter;c.beforeCollapse=new EventEmitter;c.beforeExpand=new EventEmitter;c.beforeSelect=new EventEmitter;c.groupAdding=
new EventEmitter;c.groupAdded=new EventEmitter;c.clear=new EventEmitter;c.groupRemoving=new EventEmitter;c.groupRemoved=new EventEmitter;c.selectionChanged=new EventEmitter;c.groupList=[];return c}Object.defineProperty(IntegralUIAccordion.prototype,"selectedIndex",{get:function(){return this.currentSelectedIndex},set:function(a){this.currentSelectedIndex!=a&&(this.currentSelectedIndex=a,this.selectComponentByIndex(a))},enumerable:!0,configurable:!0});
Object.defineProperty(IntegralUIAccordion.prototype,"selectedGroup",{get:function(){return this.currentSelection},set:function(a){this.currentSelection!=a&&(this.currentSelection=a,this.selectGroup(a))},enumerable:!0,configurable:!0});IntegralUIAccordion.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.dataService.init([{data:this.groups}]);this.generalClassName="iui-accordion";this.initStyle()};
IntegralUIAccordion.prototype.ngAfterViewInit=function(){var a=this,b=setTimeout(function(){var d=a.cmpResolver.resolveComponentFactory(IntegralUITComponent);d&&a.contentRef&&(a.trialRef=a.contentRef.createComponent(d));clearTimeout(b)},100)};
IntegralUIAccordion.prototype.ngAfterContentInit=function(){this.groupList=this.contentList.toArray();this.numGroups=this.groupList.length;0<this.numGroups&&(0<=this.selectedIndex?this.selectComponentByIndex(this.selectedIndex):this.selectedGroup&&this.groups?this.selectComponentByIndex(this.groups.indexOf(this.selectedGroup)):this.selectComponentByIndex(0));this.updateLayout()};IntegralUIAccordion.prototype.ngOnDestroy=function(){this.toggleTimer&&clearInterval(this.toggleTimer);this.trialRef&&this.trialRef.destroy()};
IntegralUIAccordion.prototype.ngAfterContentChecked=function(){this.contentList&&(this.groupList=this.contentList.toArray(),this.numGroups!=this.groupList.length&&(this.numGroups=this.groupList.length,this.selectComponentByIndex(this.selectedIndex)),0==this.numGroups&&(this.currentSelection=this.selectedComponent=null))};IntegralUIAccordion.prototype.addGroup=function(a){this.callEventAdd("add",a)};IntegralUIAccordion.prototype.clearGroups=function(){this.dataService.clear();this.clear.emit(null)};
IntegralUIAccordion.prototype.insertGroupAt=function(a,b){this.callEventAdd("at",a,b)};IntegralUIAccordion.prototype.insertGroupBefore=function(a,b){this.callEventAdd("ref",a,-1,b)};IntegralUIAccordion.prototype.insertGroupAfter=function(a,b){this.callEventAdd("ref",a,-1,b,!0)};IntegralUIAccordion.prototype.removeGroup=function(a){this.callEventRemove(a)};IntegralUIAccordion.prototype.removeGroupAt=function(a){this.groups&&0<=a&&a<this.groups.length&&this.callEventRemove(this.groups[a])};
IntegralUIAccordion.prototype.callEventAdd=function(a,b,d,e,c){var f={cancel:!1,group:b};this.groupAdding.emit(f);if(1!=f.cancel){switch(a){case "at":this.dataService.insert(b,d);break;case "ref":this.dataService.insertByRef(b,e,c);break;default:this.dataService.insert(b)}this.groupAdded.emit({group:b});this.selectedComponent||this.selectComponentByIndex(0)}};
IntegralUIAccordion.prototype.callEventRemove=function(a){var b={cancel:!1,group:a};this.groupRemoving.emit(b);1!=b.cancel&&(this.removeIndex=this.groups?this.groups.indexOf(a):-1,this.dataService.removeAt(a),this.groupRemoved.emit({group:a}))};IntegralUIAccordion.prototype.collapse=function(a){if(a=this.getComponentFromGroup(a))a.expanded=!1};IntegralUIAccordion.prototype.expand=function(a){if(a=this.getComponentFromGroup(a))a.expanded=!0};
IntegralUIAccordion.prototype.closeGroups=function(a){this.groupList=this.contentList.toArray();this.groupList.forEach(function(b){b!=a&&(b.selected=!1,b.collapse())})};IntegralUIAccordion.prototype.collapseComponent=function(a){if(a)var b=this,d=setTimeout(function(){var e=0,c=a.getContentHeight(),f=setInterval(function(){0<c?(e=0==e?1:e+2,c-=e,c=0<c?c:0,a.setContentHeight(c+"px")):(a.setContentHeight("0"),a.expanded=!1,b.invokeEvent("AFTER_COLLAPSE",a),clearInterval(f))},25);clearInterval(d)},100)};
IntegralUIAccordion.prototype.toggleGroups=function(){var a=this;a.toggleTimer&&(a.endToggle(),clearInterval(a.toggleTimer));a.selectedComponent&&(a.toggleTimer=setTimeout(function(){var b=0,d=0,e=0,c=a.selectedComponent.getContentHeight(),f=0;if(a.selectedComponent.expanded){a.prevComponent&&(b=a.prevComponent.getContentHeight());var g=setInterval(function(){d<c?(e=0==e?1:e+2,d+=e,b-=e,b=0<b?b:0,f=.75*d/c,a.selectedComponent.setOpacity(f),a.selectedComponent.setContentHeight(d+"px"),a.prevComponent&&
a.prevComponent.setContentHeight(b+"px")):(f=1,a.endToggle(),clearInterval(g))},25)}else a.selectedComponent.setContentHeight("0"),a.prevComponent&&a.prevComponent.setContentHeight("auto");clearInterval(a.toggleTimer);a.toggleTimer=null},100))};
IntegralUIAccordion.prototype.endToggle=function(){this.selectedComponent.setOpacity(1);this.selectedComponent.setContentHeight("auto");this.prevComponent&&(this.prevComponent.setContentHeight("0"),this.prevComponent.expanded=!1,this.invokeEvent("AFTER_COLLAPSE",this.prevComponent));this.invokeEvent("AFTER_EXPAND",this.selectedComponent)};IntegralUIAccordion.prototype.getGroupCurrentIndex=function(a){this.groupList=this.contentList.toArray();return a&&this.groupList?this.groupList.indexOf(a):-1};
IntegralUIAccordion.prototype.getGroupDataIndex=function(a){return a&&(a=this.getGroupCurrentIndex(a),this.groups&&0<=a&&a<this.groups.length)?a:-1};IntegralUIAccordion.prototype.getGroupData=function(a){return this.groups&&0<=a&&a<this.groups.length?this.groups[a]:null};IntegralUIAccordion.prototype.getGroupIndex=function(a){return a&&this.groups?this.groups.indexOf(a):-1};
IntegralUIAccordion.prototype.getComponentData=function(a){if(a){if(a.data)return a.data;a=this.getGroupDataIndex(a);if(this.groups&&0<=a&&a<this.groups.length)return this.groups[a]}return null};IntegralUIAccordion.prototype.getComponentFromGroup=function(a){var b=null;if(a){this.groupList=this.contentList.toArray();for(var d=0;d<this.groupList.length;d++)if(this.groupList[d].data&&this.groupList[d].data==a){b=this.groupList[d];break}}return b};
IntegralUIAccordion.prototype.invokeEvent=function(a,b){var d=!0,e=this.getComponentData(b),c={cancel:!1,group:e};switch(a){case "AFTER_COLLAPSE":this.afterCollapse.emit({group:e});break;case "AFTER_EXPAND":this.afterExpand.emit({group:e});this.closeGroups(b);break;case "AFTER_SELECT":this.afterSelect.emit({group:e});break;case "BEFORE_COLLAPSE":this.beforeCollapse.emit(c);d=!c.cancel;break;case "BEFORE_EXPAND":this.beforeExpand.emit(c);d=!c.cancel;break;case "BEFORE_SELECT":this.beforeSelect.emit(c),
d=!c.cancel}return d};IntegralUIAccordion.prototype.invokeMethod=function(a,b){var d=!0,e;switch(a){case "COLLAPSE_GROUP":this.collapseComponent(b);break;case "SELECT_GROUP":(e=this.invokeEvent("BEFORE_SELECT",b))&&(d=this.selectComponent(b))&&this.invokeEvent("AFTER_SELECT",b);break;case "TOGGLE_GROUPS":this.selectComponent(b),this.toggleGroups(),d=!1}return d};
IntegralUIAccordion.prototype.isIndexInRange=function(a){this.contentList&&(this.groupList=this.contentList.toArray());return this.groupList?0<=a&&a<this.groupList.length:!1};IntegralUIAccordion.prototype.updateLayout=function(){};IntegralUIAccordion.prototype.clearSelection=function(){this.clearCmpSelection()};
IntegralUIAccordion.prototype.clearCmpSelection=function(a){this.groupList=this.contentList.toArray();this.groupList.forEach(function(b){b!=a&&(b.selected=!1,b.expanded=!1)});a||(this.selectedComponent=null);this.prevComponent&&!this.prevComponent.expanded&&(this.prevComponent=null)};
IntegralUIAccordion.prototype.selectComponent=function(a){if(a&&a!=this.selectedComponent){var b=this.getGroupCurrentIndex(a);this.currentSelectedIndex=b;this.groups&&0<=b&&b<this.groups.length&&(this.currentSelection=this.groups[b]);this.prevComponent=this.selectedComponent;this.selectedComponent=a;this.clearCmpSelection(a);a.selected=!0;a.expanded=!0;this.selectionChanged.emit({index:b,group:this.getGroupData(this.getGroupDataIndex(a))});return!0}return!1};
IntegralUIAccordion.prototype.selectComponentByIndex=function(a){var b=this,d=setTimeout(function(){b.isIndexInRange(a)&&b.selectComponent(b.groupList[a]);clearTimeout(d)},100)};IntegralUIAccordion.prototype.selectGroup=function(a){this.groups&&(this.currentSelectedIndex=this.groups.indexOf(a),this.selectComponentByIndex(this.currentSelectedIndex))};IntegralUIAccordion.prototype.refresh=function(){this.updateStyle(this.controlStyle);this.updateControlClass()};    return IntegralUIAccordion;
}(IntegralUIBaseComponent));
export { IntegralUIAccordion };
IntegralUIAccordion.decorators = [
    { type: Component, args: [{
                selector: 'iui-accordion',
                template: "\n\t\t<div [ngClass]=\"getControlClass()\">\n\t\t\t<div #content>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</div>\n\t",
                inputs: ['controlStyle', 'data', 'name', 'state'],
                providers: [IntegralUIBaseService, IntegralUIDataService],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUIAccordion.ctorParameters = function () { return [
    { type: IntegralUIDataService, },
    { type: IntegralUICommonService, },
    { type: ComponentFactoryResolver, },
    { type: IntegralUIBaseService, },
]; };
IntegralUIAccordion.propDecorators = {
    'contentList': [{ type: ContentChildren, args: [IntegralUIGroupBox,] },],
    'contentRef': [{ type: ViewChild, args: ['content', { read: ViewContainerRef },] },],
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
//# sourceMappingURL=integralui.accordion.js.map