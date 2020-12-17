/*
  filename: integralui.autocomplete.js
  version : 20.3.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)if(e.hasOwnProperty(i))t[i]=e[i]})(e,i)};return function(e,i){t(e,i);function r(){this.constructor=e}e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),integralui_filter_service_1=require("../services/integralui.filter.service"),i0=require("@angular/core"),i1=require("../services/integralui.data.service"),i2=require("../services/integralui.common.service"),i3=require("../services/integralui.filter.service"),i4=require("@angular/common"),i5=require("@angular/forms"),i6=require("./integralui.core"),IntegralUIAutoComplete=function(t){__extends(e,t);function e(e,i,r,s,o){var n=t.call(this,r)||this;n.dataService=e;n.elemRef=i;n.commonService=r;n.filterService=s;n.cmpResolver=o;n.dataList=[];n.currentList=[];n.options={};n.filterParams=null;n.isFocused=!1;n.keepActive=!1;n.isPopupDelayed=!1;n.isPopupVisible=!1;n.listSize={width:100,height:200};n.dropListRef=null;n.dropList=null;n.sortComparer=null;n.maxVisibleItems=5;n.placeHolder="Placeholder text";n.valueChanged=new core_1.EventEmitter;n.updateOptions();return n}Object.defineProperty(e.prototype,"dataFields",{set:function(t){this.updateDataFields(t)},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"dropDownWidth",{get:function(){return this.listSize.width},set:function(t){if(this.listSize.width!=t)this.listSize.width=t},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"list",{get:function(){return this.dataList},set:function(t){this.dataList=t;this.updateData()},enumerable:!0,configurable:!0});e.prototype.ngOnInit=function(){this.updateData();this.updateCurrentList();this.generalClassName="iui-autocomplete";this.initStyle()};e.prototype.ngAfterViewInit=function(){var t=this,e=setTimeout(function(){t.addDropList();clearTimeout(e)},100)};e.prototype.ngOnDestroy=function(){this.removeDropList()};e.prototype.updateDataFields=function(t){if(t)this.options.dataFields={icon:t.icon?t.icon:"icon",id:t.id?t.id:"id",style:t.style?t.style:"style",text:t.text?t.text:"text",visible:t.visible?t.visible:"visible",value:t.value?t.value:"value"};else this.options.dataFields={icon:"icon",id:"id",style:"style",text:"text",visible:"visible",value:"value"};if(this.dataService)this.dataService.updateDataFields(this.options.dataFields)};e.prototype.updateOptions=function(t){if(t)this.options={currentStyle:{},dataFields:null,sorting:integralui_core_1.IntegralUISortOrder.Ascending};else{this.options={currentStyle:{},dataFields:null,sorting:integralui_core_1.IntegralUISortOrder.Ascending};this.updateDataFields()}};e.prototype.addItemToCurrentList=function(t){t.type="item";if(!t[this.options.dataFields.id])t[this.options.dataFields.id]=this.commonService.getUniqueId();if(this.isItemAllowed(t))this.currentList.push(t)};e.prototype.updateCurrentList=function(){this.currentList.length=0;var t=this.dataService.getList();if(t){this.applySorting(t);for(var e=0;e<t.length;e++)this.addItemToCurrentList(t[e])}};e.prototype.updateData=function(){this.dataService.init([{data:this.list}])};e.prototype.addDropList=function(){var t=this;if(t.appRef){t.removeDropList();var e=t.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUIListPopup);if(e){t.dropListRef=t.appRef.createComponent(e);if(t.dropListRef.instance)t.dropList=t.dropListRef.instance;t.hideDropList();if(t.dropList){t.dropList.closed.subscribe(function(e){t.hideDropList();t.isFocused=!0});t.dropList.selectionChanged.subscribe(function(e){t.hideDropList();t.data=e.item;t.text=e.item[t.options.dataFields.text];t.isFocused=!0;t.callValueChanged();t.isPopupDelayed=!0;setTimeout(function(){t.isPopupDelayed=!1},250)})}}}};e.prototype.removeDropList=function(){if(this.dropList){if(this.dropList.closed)this.dropList.closed.unsubscribe();if(this.dropList.selectionChanged)this.dropList.selectionChanged.unsubscribe()}if(this.dropListRef)this.dropListRef.destroy();this.dropList=null};e.prototype.hideDropList=function(){if(this.dropList)this.dropList.display="none";this.isPopupVisible=!1};e.prototype.showPopup=function(){var t=this.commonService.getShiftPos(),e=this.commonService.getPageRect(this.elemRef.nativeElement.firstElementChild);if(this.dropList){this.dropList.allowAnimation=this.allowAnimation;this.dropList.dataFields=this.options.dataFields;this.dropList.display="block";this.dropList.items=this.currentList;this.dropList.minWidth=this.listSize.width;this.dropList.maxVisibleItems=this.maxVisibleItems;this.dropList.position={x:e.left+t.x,y:e.bottom+t.y};this.dropList.size={width:Math.max(e.width,this.dropList.minWidth),height:0};this.dropList.refresh();this.dropList.open();this.isPopupVisible=!0}};e.prototype.callValueChanged=function(){var t={data:this.data,text:this.text,value:this.text};this.valueChanged.emit(t)};e.prototype.ctrlKeyDown=function(t){var e=this;e.dropList.selectedItem=null;switch(t.keyCode){case 9:t.preventDefault();e.keepActive=!0;e.processDownKey();break;case 13:e.hideDropList();break;case 27:e.data=e.originalData;e.hideDropList();break;case 34:e.keepActive=!0;e.processDownKey(e.maxVisibleItems);break;case 40:e.keepActive=!0;e.processDownKey();break;default:var i=setTimeout(function(){e.applyFilter();e.updateCurrentList();if(e.isPopupVisible&&e.dropList)if(e.currentList.length>0){e.dropList.items=e.currentList;e.dropList.updateLayout()}else e.hideDropList();else if(e.currentList.length>0)e.showPopup();else e.hideDropList();clearTimeout(i)},1)}};e.prototype.ctrlLostFocus=function(){this.isFocused=!1;if(!this.keepActive&&!this.dropList.isListActive())this.hideDropList();this.keepActive=!1};e.prototype.processDownKey=function(t){t=t||1;if(this.isPopupVisible&&this.dropList&&this.dropList.items.length>0){this.isFocused=!1;this.dropList.focus();this.dropList.selectedItem=t>0&&t<=this.dropList.items.length?this.dropList.items[t-1]:this.dropList.items[this.dropList.items.length-1]}};e.prototype.textChanged=function(t){this.callValueChanged()};e.prototype.applyFilter=function(){if(this.text&&""!=this.text)this.filterParams={caseSensitive:!1,conditions:{value:this.text,operation:"->"}};else this.resetFilter()};e.prototype.getFilterTree=function(t){return t?this.filterService.createTree(t.conditions,t.formula):null};e.prototype.resetFilter=function(){this.filterParams={}};e.prototype.filter=function(t){this.filterParams=t};e.prototype.isItemAllowed=function(t){if(0==t[this.options.dataFields.visible])return!1;var e=!0;if(t&&this.filterParams){var i=t[this.options.dataFields.value];i=i?i:t[this.options.dataFields.text];if(this.filterParams.callback)e=this.filterParams.callback(i,t);else e=this.filterService.match(i,this.filterParams.conditions,this.filterParams.formula,this.getFilterTree(this.filterParams),this.filterParams.caseSensitive)}return e};e.prototype.selectContent=function(t){if(t.target)setTimeout(function(){t.target.setSelectionRange(0,t.target.value.length)},1)};e.prototype.applySorting=function(t){var e=this;if(t)if(e.sortComparer)t.sort(e.sortComparer);else if(e.isSortingAllowed())t.sort(function(t,i){var r=null,s=null;if(!(r=t[e.options.dataFields.value]))r=t[e.options.dataFields.text];if(e.commonService.isObject(r))r=r.value?r.value:r.text;if(!(s=i[e.options.dataFields.value]))s=i[e.options.dataFields.text];if(e.commonService.isObject(s))s=s.value?s.value:s.text;r=void 0!=r?r:null;s=void 0!=s?s:null;switch(e.options.sorting){case integralui_core_1.IntegralUISortOrder.Ascending:if(r<s)return-1;else if(r>s)return 1;break;case integralui_core_1.IntegralUISortOrder.Descending:if(r>s)return-1;else if(r<s)return 1;break;default:return 0}})};e.prototype.isSortingAllowed=function(){return this.options.sorting==integralui_core_1.IntegralUISortOrder.Ascending||this.options.sorting==integralui_core_1.IntegralUISortOrder.Descending};e.prototype.sort=function(t,e){this.options.sorting=t;this.sortComparer=e?e:null};e.prototype.getControlStyle=function(){var t={};if(this.ctrlSize.width>0)t.width=this.ctrlSize.width+"px";if(this.ctrlSize.height>0)t.height=this.ctrlSize.height+"px";return t};e.ɵfac=function(t){return new(t||e)(i0.ɵɵdirectiveInject(i1.IntegralUIDataService),i0.ɵɵdirectiveInject(i0.ElementRef),i0.ɵɵdirectiveInject(i2.IntegralUICommonService),i0.ɵɵdirectiveInject(i3.IntegralUIFilterService),i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver))};e.ɵcmp=i0.ɵɵdefineComponent({type:e,selectors:[["iui-autocomplete"]],inputs:{controlStyle:"controlStyle",data:"data",enabled:"enabled",name:"name",size:"size",state:"state",appRef:"appRef",dataFields:"dataFields",dropDownWidth:"dropDownWidth",list:"list",maxVisibleItems:"maxVisibleItems",placeHolder:"placeHolder",text:"text"},outputs:{valueChanged:"valueChanged"},features:[i0.ɵɵProvidersFeature([integralui_data_service_1.IntegralUIDataService]),i0.ɵɵInheritDefinitionFeature],decls:2,vars:6,consts:[[3,"ngClass","ngStyle"],["type","text",3,"ngModel","disabled","placeholder","iuiFocus","ngModelChange","input","keydown","focus","blur"]],template:function(t,e){if(1&t){i0.ɵɵelementStart(0,"div",0);i0.ɵɵelementStart(1,"input",1);i0.ɵɵlistener("ngModelChange",function(t){return e.text=t})("input",function(t){return e.textChanged(t)})("keydown",function(t){return e.ctrlKeyDown(t)})("focus",function(t){return e.selectContent(t)})("blur",function(){return e.ctrlLostFocus()});i0.ɵɵelementEnd();i0.ɵɵelementEnd()}if(2&t){i0.ɵɵproperty("ngClass",e.getControlClass())("ngStyle",e.getControlStyle());i0.ɵɵadvance(1);i0.ɵɵpropertyInterpolate("disabled",!e.enabled);i0.ɵɵpropertyInterpolate("placeholder",e.placeHolder);i0.ɵɵproperty("ngModel",e.text)("iuiFocus",e.isFocused)}},directives:[i4.NgClass,i4.NgStyle,i5.DefaultValueAccessor,i5.NgControlStatus,i5.NgModel,i6.IntegralUIFocus],encapsulation:2});return e}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUIAutoComplete=IntegralUIAutoComplete;