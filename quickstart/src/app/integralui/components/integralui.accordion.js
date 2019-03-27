/*
  filename: integralui.accordion.js
  version : 1.5.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])};return function(b,a){function c(){this.constructor=b}h(b,a);b.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),integralui_groupbox_1=require("./integralui.groupbox"),IntegralUIAccordion=function(h){function b(a,c,b,g,e){var d=h.call(this,b)||this;d.dataService=a;d.elemRef=c;d.commonService=b;d.cmpResolver=g;d.baseService=e;d.numGroups=0;d.currentSelection=null;d.currentSelectedIndex=
-1;d.selectedComponent=null;d.prevComponent=null;d.removeIndex=-1;d.toggleTimer=null;d.trialRef=null;d.afterCollapse=new core_1.EventEmitter;d.afterExpand=new core_1.EventEmitter;d.afterSelect=new core_1.EventEmitter;d.beforeCollapse=new core_1.EventEmitter;d.beforeExpand=new core_1.EventEmitter;d.beforeSelect=new core_1.EventEmitter;d.groupAdding=new core_1.EventEmitter;d.groupAdded=new core_1.EventEmitter;d.clear=new core_1.EventEmitter;d.groupRemoving=new core_1.EventEmitter;d.groupRemoved=new core_1.EventEmitter;
d.selectionChanged=new core_1.EventEmitter;d.groupList=[];return d}__extends(b,h);Object.defineProperty(b.prototype,"selectedIndex",{get:function(){return this.currentSelectedIndex},set:function(a){this.currentSelectedIndex!=a&&(this.currentSelectedIndex=a,this.selectComponentByIndex(a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"selectedGroup",{get:function(){return this.currentSelection},set:function(a){this.currentSelection!=a&&(this.currentSelection=a,this.selectGroup(a))},
enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.dataService.init([{data:this.groups}]);this.generalClassName="iui-accordion";this.initStyle()};b.prototype.ngAfterViewInit=function(){var a=this,c=setTimeout(function(){var b=a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);b&&a.contentRef&&(a.trialRef=a.contentRef.createComponent(b));clearTimeout(c)},100)};b.prototype.ngAfterContentInit=function(){this.groupList=this.contentList.toArray();
this.numGroups=this.groupList.length;0<this.numGroups&&(0<=this.selectedIndex?this.selectComponentByIndex(this.selectedIndex):this.selectedGroup&&this.groups?this.selectComponentByIndex(this.groups.indexOf(this.selectedGroup)):this.selectComponentByIndex(0));this.updateLayout()};b.prototype.ngOnDestroy=function(){this.toggleTimer&&clearInterval(this.toggleTimer);this.trialRef&&this.trialRef.destroy()};b.prototype.ngAfterContentChecked=function(){this.contentList&&(this.groupList=this.contentList.toArray(),
this.numGroups!=this.groupList.length&&(this.numGroups=this.groupList.length,this.selectComponentByIndex(this.selectedIndex)),0==this.numGroups&&(this.currentSelection=this.selectedComponent=null));this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth,height:this.elemRef.nativeElement.firstElementChild.clientHeight};this.clientRect.width!=this.prevClientRect.width?(this.updateLayout(),this.prevClientRect.width=this.clientRect.width):this.clientRect.height!=this.prevClientRect.height&&
(this.updateLayout(),this.prevClientRect.height=this.clientRect.height)};b.prototype.addGroup=function(a){this.callEventAdd("add",a)};b.prototype.clearGroups=function(){this.dataService.clear();this.clear.emit(null)};b.prototype.insertGroupAt=function(a,c){this.callEventAdd("at",a,c)};b.prototype.insertGroupBefore=function(a,c){this.callEventAdd("ref",a,-1,c)};b.prototype.insertGroupAfter=function(a,c){this.callEventAdd("ref",a,-1,c,!0)};b.prototype.removeGroup=function(a){this.callEventRemove(a)};
b.prototype.removeGroupAt=function(a){this.groups&&0<=a&&a<this.groups.length&&this.callEventRemove(this.groups[a])};b.prototype.callEventAdd=function(a,c,b,g,e){var d={cancel:!1,group:c};this.groupAdding.emit(d);if(1!=d.cancel){switch(a){case "at":this.dataService.insert(c,b);break;case "ref":this.dataService.insertByRef(c,g,e);break;default:this.dataService.insert(c)}this.groupAdded.emit({group:c});this.selectedComponent||this.selectComponentByIndex(0)}};b.prototype.callEventRemove=function(a){var c=
{cancel:!1,group:a};this.groupRemoving.emit(c);1!=c.cancel&&(this.removeIndex=this.groups?this.groups.indexOf(a):-1,this.dataService.removeAt(a),this.groupRemoved.emit({group:a}))};b.prototype.collapse=function(a){if(a=this.getComponentFromGroup(a))a.expanded=!1};b.prototype.expand=function(a){if(a=this.getComponentFromGroup(a))a.expanded=!0};b.prototype.closeGroups=function(a){this.groupList=this.contentList.toArray();this.groupList.forEach(function(c){c!=a&&(c.selected=!1,c.collapse())})};b.prototype.collapseComponent=
function(a){if(a)var c=this,b=setTimeout(function(){var f=0,e=a.getContentHeight();if(c.allowAnimation)var d=setInterval(function(){0<e?(f=0==f?1:f+2,e-=f,e=0<e?e:0,a.setContentHeight(e+"px")):(a.setContentHeight("0"),a.expanded=!1,c.invokeEvent("AFTER_COLLAPSE",a),clearInterval(d))},25);else a.setContentHeight("0"),a.expanded=!1,c.invokeEvent("AFTER_COLLAPSE",a);clearInterval(b)},100)};b.prototype.toggleGroups=function(){var a=this;a.toggleTimer&&(a.endToggle(),clearInterval(a.toggleTimer));a.selectedComponent&&
(a.toggleTimer=setTimeout(function(){var c=0,b=0,g=0,e=a.selectedComponent.getContentHeight(),d=0;if(a.selectedComponent.expanded)if(a.prevComponent&&(c=a.prevComponent.getContentHeight()),a.allowAnimation)var h=setInterval(function(){b<e?(g=0==g?1:g+2,b+=g,c-=g,c=0<c?c:0,d=.75*b/e,a.selectedComponent.setOpacity(d),a.selectedComponent.setContentHeight(b+"px"),a.prevComponent&&a.prevComponent.setContentHeight(c+"px")):(d=1,a.endToggle(),clearInterval(h))},25);else d=1,a.endToggle();else a.selectedComponent.setContentHeight("0"),
a.prevComponent&&a.prevComponent.setContentHeight("auto");clearTimeout(a.toggleTimer);a.toggleTimer=null},100))};b.prototype.endToggle=function(){this.selectedComponent.setOpacity(1);this.selectedComponent.setContentHeight("auto");this.prevComponent&&(this.prevComponent.setContentHeight("0"),this.prevComponent.expanded=!1,this.invokeEvent("AFTER_COLLAPSE",this.prevComponent));this.invokeEvent("AFTER_EXPAND",this.selectedComponent)};b.prototype.getGroupCurrentIndex=function(a){this.groupList=this.contentList.toArray();
return a&&this.groupList?this.groupList.indexOf(a):-1};b.prototype.getGroupDataIndex=function(a){return a&&(a=this.getGroupCurrentIndex(a),this.groups&&0<=a&&a<this.groups.length)?a:-1};b.prototype.getGroupData=function(a){return this.groups&&0<=a&&a<this.groups.length?this.groups[a]:null};b.prototype.getGroupIndex=function(a){return a&&this.groups?this.groups.indexOf(a):-1};b.prototype.getComponentData=function(a){if(a){if(a.data)return a.data;a=this.getGroupDataIndex(a);if(this.groups&&0<=a&&a<
this.groups.length)return this.groups[a]}return null};b.prototype.getComponentFromGroup=function(a){var b=null;if(a){this.groupList=this.contentList.toArray();for(var f=0;f<this.groupList.length;f++)if(this.groupList[f].data&&this.groupList[f].data==a){b=this.groupList[f];break}}return b};b.prototype.invokeEvent=function(a,b,f){f=!0;if(this.isEnabled){var c=this.getComponentData(b),e={cancel:!1,group:c};switch(a){case "AFTER_COLLAPSE":this.afterCollapse.emit({group:c});break;case "AFTER_EXPAND":this.afterExpand.emit({group:c});
this.closeGroups(b);break;case "AFTER_SELECT":this.afterSelect.emit({group:c});break;case "BEFORE_COLLAPSE":this.beforeCollapse.emit(e);f=!e.cancel;break;case "BEFORE_EXPAND":this.beforeExpand.emit(e);f=!e.cancel;break;case "BEFORE_SELECT":this.beforeSelect.emit(e),f=!e.cancel}}return f};b.prototype.invokeMethod=function(a,b){var c=!0;if(this.isEnabled){var g;switch(a){case "COLLAPSE_GROUP":this.collapseComponent(b);break;case "SELECT_GROUP":(g=this.invokeEvent("BEFORE_SELECT",b))&&(c=this.selectComponent(b))&&
this.invokeEvent("AFTER_SELECT",b);break;case "TOGGLE_GROUPS":this.selectComponent(b),this.toggleGroups(),c=!1}}return c};b.prototype.isIndexInRange=function(a){this.contentList&&(this.groupList=this.contentList.toArray());return this.groupList?0<=a&&a<this.groupList.length:!1};b.prototype.updateLayout=function(){};b.prototype.clearSelection=function(){this.clearCmpSelection()};b.prototype.clearCmpSelection=function(a){this.groupList=this.contentList.toArray();this.groupList.forEach(function(b){b!=
a&&(b.selected=!1,b.expanded=!1)});a||(this.selectedComponent=null);this.prevComponent&&!this.prevComponent.expanded&&(this.prevComponent=null)};b.prototype.selectComponent=function(a){if(a&&a!=this.selectedComponent){var b=this.getGroupCurrentIndex(a);this.currentSelectedIndex=b;this.groups&&0<=b&&b<this.groups.length&&(this.currentSelection=this.groups[b]);this.prevComponent=this.selectedComponent;this.selectedComponent=a;this.clearCmpSelection(a);a.selected=!0;a.expanded=!0;this.selectionChanged.emit({index:b,
group:this.getGroupData(this.getGroupDataIndex(a))});return!0}return!1};b.prototype.selectComponentByIndex=function(a){var b=this,f=setTimeout(function(){b.isIndexInRange(a)&&b.selectComponent(b.groupList[a]);clearTimeout(f)},100)};b.prototype.selectGroup=function(a){this.groups&&(this.currentSelectedIndex=this.groups.indexOf(a),this.selectComponentByIndex(this.currentSelectedIndex))};b.prototype.getControlStyle=function(){var a={};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&
(a.height=this.ctrlSize.height+"px");return a};b.prototype.refresh=function(){this.updateStyle(this.controlStyle);this.updateControlClass()};b.decorators=[{type:core_1.Component,args:[{selector:"iui-accordion",template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()">\n\t\t\t<div #content>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</div>\n\t',inputs:"controlStyle data enabled name size state".split(" "),providers:[integralui_core_1.IntegralUIBaseService,integralui_data_service_1.IntegralUIDataService],
encapsulation:core_1.ViewEncapsulation.None}]}];b.ctorParameters=function(){return[{type:integralui_data_service_1.IntegralUIDataService},{type:core_1.ElementRef},{type:integralui_common_service_1.IntegralUICommonService},{type:core_1.ComponentFactoryResolver},{type:integralui_core_1.IntegralUIBaseService}]};b.propDecorators={contentList:[{type:core_1.ContentChildren,args:[integralui_groupbox_1.IntegralUIGroupBox]}],contentRef:[{type:core_1.ViewChild,args:["content",{read:core_1.ViewContainerRef}]}],
groups:[{type:core_1.Input}],selectedIndex:[{type:core_1.Input}],selectedGroup:[{type:core_1.Input}],afterCollapse:[{type:core_1.Output}],afterExpand:[{type:core_1.Output}],afterSelect:[{type:core_1.Output}],beforeCollapse:[{type:core_1.Output}],beforeExpand:[{type:core_1.Output}],beforeSelect:[{type:core_1.Output}],groupAdding:[{type:core_1.Output}],groupAdded:[{type:core_1.Output}],clear:[{type:core_1.Output}],groupRemoving:[{type:core_1.Output}],groupRemoved:[{type:core_1.Output}],selectionChanged:[{type:core_1.Output}]};
return b}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUIAccordion=IntegralUIAccordion;