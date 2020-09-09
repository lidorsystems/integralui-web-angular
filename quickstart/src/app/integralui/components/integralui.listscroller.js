/*
  filename: integralui.listscroller.js
  version : 20.2.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
"use strict";var __extends=this&&this.__extends||function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)if(t.hasOwnProperty(i))e[i]=t[i]})(t,i)};return function(t,i){e(t,i);function o(){this.constructor=t}t.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),i0=require("@angular/core"),i1=require("../services/integralui.data.service"),i2=require("../services/integralui.common.service"),i3=require("@angular/common"),i4=require("./integralui.core"),_c0=["block"],_c1=["leftrightButtons"],_c2=["topBottomButtons"],_c3=["topBottomButtonsChild"],_c4=function(e,t,i,o){return{position:"absolute",top:e,left:t,width:i,height:o}},_c5=function(e){return{$implicit:e}};function IntegralUIListScroller_span_2_li_7_Template(e,t){if(1&e){var i=i0.ɵɵgetCurrentView();i0.ɵɵelementStart(0,"li",13,14);i0.ɵɵlistener("click",function(e){i0.ɵɵrestoreView(i);var o=t.$implicit;return i0.ɵɵnextContext(2).itemClickEvent(e,o)})("mousedown",function(e){i0.ɵɵrestoreView(i);var o=t.$implicit;return i0.ɵɵnextContext(2).itemMouseDown(e,o)})("mouseup",function(e){i0.ɵɵrestoreView(i);var o=t.$implicit;return i0.ɵɵnextContext(2).itemMouseUp(e,o)})("mouseenter",function(e){i0.ɵɵrestoreView(i);var o=t.$implicit;return i0.ɵɵnextContext(2).itemMouseEnter(e,o)})("mouseleave",function(e){i0.ɵɵrestoreView(i);var o=t.$implicit;return i0.ɵɵnextContext(2).itemMouseLeave(e,o)});i0.ɵɵelementStart(2,"div",15);i0.ɵɵelement(3,"span",16);i0.ɵɵelementEnd();i0.ɵɵelementEnd()}if(2&e){var o=t.$implicit,n=i0.ɵɵnextContext(2);i0.ɵɵproperty("ngClass",o.style.general)("ngStyle",i0.ɵɵpureFunction4(6,_c4,o.position.y+"px",o.position.x+"px",n.currentItemSize.width+"px",n.currentItemSize.height+"px"));i0.ɵɵadvance(2);i0.ɵɵpropertyInterpolate("tabindex",o.tabIndex);i0.ɵɵproperty("ngClass",o.style.content);i0.ɵɵadvance(1);i0.ɵɵproperty("iuiTemplateOutlet",n.itemTemplate)("iuiTemplateOutletContext",i0.ɵɵpureFunction1(11,_c5,o.data))}}var _c6=function(e){return{"margin-left":e}},_c7=function(e,t,i,o,n){return{left:e,top:t,width:i,height:o,opacity:n}},_c8=function(e){return{width:e}};function IntegralUIListScroller_span_2_Template(e,t){if(1&e){var i=i0.ɵɵgetCurrentView();i0.ɵɵelementStart(0,"span");i0.ɵɵelementStart(1,"div",4,5);i0.ɵɵlistener("click",function(){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext().prevItem()})("mousedown",function(e){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext().onMouseDown(e)})("mouseup",function(e){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext().onMouseUp(e)});i0.ɵɵelement(3,"span",6,7);i0.ɵɵelementEnd();i0.ɵɵelementStart(5,"ul",8,9);i0.ɵɵtemplate(7,IntegralUIListScroller_span_2_li_7_Template,4,13,"li",10);i0.ɵɵelementEnd();i0.ɵɵelementStart(8,"div",11);i0.ɵɵlistener("click",function(){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext().nextItem()})("mousedown",function(e){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext().onMouseDown(e,!0)})("mouseup",function(e){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext().onMouseUp(e)});i0.ɵɵelement(9,"span",12);i0.ɵɵelementEnd();i0.ɵɵelementEnd()}if(2&e){var o=i0.ɵɵnextContext();i0.ɵɵadvance(3);i0.ɵɵproperty("ngStyle",i0.ɵɵpureFunction1(5,_c6,o.topBotomMarginLeft+"px"));i0.ɵɵadvance(2);i0.ɵɵproperty("ngStyle",i0.ɵɵpureFunction5(7,_c7,o.contentPos.left+"px",o.contentPos.top+"px",o.contentSize.width+"px",o.contentSize.height+"px",o.contentOpacity));i0.ɵɵadvance(2);i0.ɵɵproperty("ngForOf",o.scrollItemList);i0.ɵɵadvance(1);i0.ɵɵproperty("ngStyle",i0.ɵɵpureFunction1(13,_c8,o.contentSize.width-2+"px"));i0.ɵɵadvance(1);i0.ɵɵproperty("ngStyle",i0.ɵɵpureFunction1(15,_c6,o.topBotomMarginLeft+"px"))}}function IntegralUIListScroller_span_3_li_6_Template(e,t){if(1&e){var i=i0.ɵɵgetCurrentView();i0.ɵɵelementStart(0,"li",13,14);i0.ɵɵlistener("click",function(e){i0.ɵɵrestoreView(i);var o=t.$implicit;return i0.ɵɵnextContext(2).itemClickEvent(e,o)})("mousedown",function(e){i0.ɵɵrestoreView(i);var o=t.$implicit;return i0.ɵɵnextContext(2).itemMouseDown(e,o)})("mouseup",function(e){i0.ɵɵrestoreView(i);var o=t.$implicit;return i0.ɵɵnextContext(2).itemMouseUp(e,o)})("mouseenter",function(e){i0.ɵɵrestoreView(i);var o=t.$implicit;return i0.ɵɵnextContext(2).itemMouseEnter(e,o)})("mouseleave",function(e){i0.ɵɵrestoreView(i);var o=t.$implicit;return i0.ɵɵnextContext(2).itemMouseLeave(e,o)});i0.ɵɵelementStart(2,"div",15);i0.ɵɵelement(3,"span",16);i0.ɵɵelementEnd();i0.ɵɵelementEnd()}if(2&e){var o=t.$implicit,n=i0.ɵɵnextContext(2);i0.ɵɵproperty("ngClass",o.style.general)("ngStyle",i0.ɵɵpureFunction4(6,_c4,o.position.y+"px",o.position.x+"px",n.currentItemSize.width+"px",n.currentItemSize.height+"px"));i0.ɵɵadvance(2);i0.ɵɵpropertyInterpolate("tabindex",o.tabIndex);i0.ɵɵproperty("ngClass",o.style.content);i0.ɵɵadvance(1);i0.ɵɵproperty("iuiTemplateOutlet",n.itemTemplate)("iuiTemplateOutletContext",i0.ɵɵpureFunction1(11,_c5,o.data))}}var _c9=function(e){return{"margin-top":e}};function IntegralUIListScroller_span_3_Template(e,t){if(1&e){var i=i0.ɵɵgetCurrentView();i0.ɵɵelementStart(0,"span");i0.ɵɵelementStart(1,"div",17,18);i0.ɵɵlistener("click",function(){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext().prevItem()})("mousedown",function(e){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext().onMouseDown(e)})("mouseup",function(e){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext().onMouseUp(e)});i0.ɵɵelement(3,"span",19);i0.ɵɵelementEnd();i0.ɵɵelementStart(4,"ul",8,9);i0.ɵɵtemplate(6,IntegralUIListScroller_span_3_li_6_Template,4,13,"li",10);i0.ɵɵelementEnd();i0.ɵɵelementStart(7,"div",20);i0.ɵɵlistener("click",function(){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext().nextItem()})("mousedown",function(e){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext().onMouseDown(e,!0)})("mouseup",function(e){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext().onMouseUp(e)});i0.ɵɵelement(8,"span",21);i0.ɵɵelementEnd();i0.ɵɵelementEnd()}if(2&e){var o=i0.ɵɵnextContext();i0.ɵɵadvance(1);i0.ɵɵproperty("ngStyle",i0.ɵɵpureFunction1(4,_c9,o.leftRightMarginTop+"px"));i0.ɵɵadvance(3);i0.ɵɵproperty("ngStyle",i0.ɵɵpureFunction5(6,_c7,o.contentPos.left+"px",o.contentPos.top+"px",o.contentSize.width+"px",o.contentSize.height+"px",o.contentOpacity));i0.ɵɵadvance(2);i0.ɵɵproperty("ngForOf",o.scrollItemList);i0.ɵɵadvance(1);i0.ɵɵproperty("ngStyle",i0.ɵɵpureFunction1(12,_c9,o.leftRightMarginTop+"px"))}}var IntegralUIListScroller=function(e){__extends(t,e);function t(t,i,o,n){var r=e.call(this,o)||this;r.dataService=t;r.elemRef=i;r.commonService=o;r.cmpResolver=n;r.currentList=[];r.options={dataFields:null,selectedItem:null,sorting:integralui_core_1.IntegralUISortOrder.None};r.dataItems=[];r.scrollItemList=[];r.valueTimer=null;r.valueCount=0;r.isChangeActive=!1;r.stopTimer=!0;r.hoverItem=null;r.currentFocusItem=null;r.isKeyboardActive=!1;r.allowUpdate=!0;r.blockSize={width:0,height:0};r.clientRect={width:0,height:0};r.contentOpacity=1;r.contentSize={width:0,height:0};r.currentIndex=0;r.prevIndex=0;r.updateTimer=null;r.clientSpace={width:0,height:0};r.contentPos={top:0,left:0};r.currentItemSize={width:48,height:48};r.leftRightMarginTop=0;r.topBotomMarginLeft=0;r.currentScrollMode=integralui_core_1.IntegralUIScrollMode.Horizontal;r.currentScrollPos={x:0,y:0};r.initPos={x:0,y:0};r.maxScrollPos={x:0,y:0};r.prevScrollPos={x:0,y:0};r.scrollSize={width:0,height:0};r.removeIndex=-1;r.sortComparer=null;r.refreshTimer=null;r.mouseWheelSpeed=integralui_core_1.IntegralUISpeedMode.Normal;r.afterSelect=new core_1.EventEmitter;r.beforeSelect=new core_1.EventEmitter;r.change=new core_1.EventEmitter;r.clear=new core_1.EventEmitter;r.itemAdding=new core_1.EventEmitter;r.itemAdded=new core_1.EventEmitter;r.itemRemoving=new core_1.EventEmitter;r.itemRemoved=new core_1.EventEmitter;r.scrollModeChanged=new core_1.EventEmitter;r.scrollPosChanged=new core_1.EventEmitter;r.selectionChanged=new core_1.EventEmitter;r.updateComplete=new core_1.EventEmitter;r.updateOptions();return r}Object.defineProperty(t.prototype,"items",{get:function(){return this.dataItems},set:function(e){this.dataItems=e;this.updateData()},enumerable:!0,configurable:!0});Object.defineProperty(t.prototype,"itemSize",{get:function(){return this.currentItemSize},set:function(e){if(e){this.currentItemSize={width:e.width>0?e.width:0,height:e.height>0?e.height:0};this.updateLayout()}},enumerable:!0,configurable:!0});Object.defineProperty(t.prototype,"scrollMode",{get:function(){return this.currentScrollMode},set:function(e){if(this.currentScrollMode!=e){this.currentScrollMode=e;this.scrollPos({x:0,y:0});this.updateLayout();this.scrollModeChanged.emit(null)}},enumerable:!0,configurable:!0});Object.defineProperty(t.prototype,"selectedItem",{get:function(){return this.currentSelection},set:function(e){if(this.currentSelection!=e)var t=this,i=setTimeout(function(){t.processSelection(e);clearTimeout(i)},1)},enumerable:!0,configurable:!0});Object.defineProperty(t.prototype,"sorting",{set:function(e){this.options.sorting=e},enumerable:!0,configurable:!0});t.prototype.ngOnInit=function(){this.updateData();this.updateCurrentList();this.generalClassName="iui-listscroller";this.itemClassName="iui-listscroller-item";this.itemContentClassName=this.itemClassName+"-content";this.initStyle()};t.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},item:{general:{disabled:this.itemClassName+"-disabled",focused:this.itemClassName+"-focused",normal:this.itemClassName,hovered:this.itemClassName+"-hovered",selected:this.itemClassName+"-selected"},content:{disabled:this.itemContentClassName+"-disabled",focused:this.itemContentClassName+"-focused",normal:this.itemContentClassName,hovered:this.itemContentClassName+"-hovered",selected:this.itemContentClassName+"-selected"}}};this.updateStyle(this.controlStyle);this.updateControlClass();this.refresh()};t.prototype.addItem=function(e){this.callEventAdd("add",e,-1,parent)};t.prototype.clearItems=function(){this.currentSelection=null;this.dataService.clear();this.clear.emit(null);this.updateLayout()};t.prototype.insertItemAt=function(e,t){this.callEventAdd("at",e,t)};t.prototype.insertItemBefore=function(e,t){this.callEventAdd("ref",e,-1,t)};t.prototype.insertItemAfter=function(e,t){this.callEventAdd("ref",e,-1,t,!0)};t.prototype.removeItem=function(e){return this.callEventRemove(e)};t.prototype.removeItemAt=function(e){return this.callEventRemove(null,e)};t.prototype.callEventAdd=function(e,t,i,o,n){var r={cancel:!1,item:t};this.itemAdding.emit(r);if(1!=r.cancel){switch(e){case"at":this.dataService.insert(t,i);break;case"ref":this.dataService.insertByRef(t,o,n);break;default:this.dataService.insert(t,-1)}this.itemAdded.emit({item:t})}};t.prototype.callEventRemove=function(e,t){var i={cancel:!1,item:e};this.itemRemoving.emit(i);if(1!=i.cancel){this.removeIndex=this.items?this.items.indexOf(e):-1;var o=this.dataService.removeAt(e,t);if(o.result){this.itemRemoved.emit({item:o.obj});return!0}}return!1};t.prototype.updateCurrentList=function(){var e=this;e.currentList.length=0;var t=e.dataService.getList();if(t){e.applySorting(t);t.forEach(function(t){e.addItemToCurrentList(t)})}};t.prototype.addItemToCurrentList=function(e){e.type="item";if(!e[this.options.dataFields.id])e[this.options.dataFields.id]=this.commonService.getUniqueId();if(this.isItemAllowed(e))this.currentList.push({data:e})};t.prototype.updateScrollItemList=function(){this.scrollItemList.length=0;var e={x:this.initPos.x-this.currentScrollPos.x,y:this.initPos.y-this.currentScrollPos.y};if(this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal)e.y=0;else e.x=0;for(var t=0,i=this.currentIndex;i<this.currentList.length;i++,t++){var o={data:this.currentList[i].data,index:i-this.currentIndex,position:{x:0,y:0},style:{},tabIndex:t};if(this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal){o.position={x:e.x,y:e.y};e.x+=this.currentItemSize.width}else{o.position={x:e.x,y:e.y};e.y+=this.currentItemSize.height}this.updateItemStyle(o);this.scrollItemList.push(o)}};t.prototype.updateData=function(){this.dataService.init([{data:this.items}])};t.prototype.updateOptions=function(e){if(e)this.options={dataFields:null,selectedItem:this.commonService.isFieldAvailable(e.selectedItem,this.options.selectedItem?this.options.selectedItem:null)};else{this.options={dataFields:null,selectedItem:null};this.updateDataFields()}};t.prototype.updateDataFields=function(e){if(e)this.options.dataFields={canSelect:e.canSelect?e.canSelect:"canSelect",content:e.content?e.content:"content",contextMenu:e.contextMenu?e.contextMenu:"contextMenu",enabled:e.enabled?e.enabled:"enabled",icon:e.icon?e.icon:"icon",id:e.id?e.id:"id",items:e.items?e.items:"items",selected:e.selected?e.selected:"selected",style:e.style?e.style:"style",text:e.text?e.text:"text",tooltip:e.tooltip?e.tooltip:"tooltip",value:e.value?e.value:"value",visible:e.visible?e.visible:"visible"};else this.options.dataFields={canSelect:"canSelect",content:"content",contextMenu:"contextMenu",enabled:"enabled",icon:"icon",id:"id",items:"items",selected:"selected",style:"style",text:"text",tooltip:"tooltip",value:"value",visible:"visible"};if(this.dataService)this.dataService.updateDataFields(this.options.dataFields)};t.prototype.cloneItem=function(e){return this.dataService.clone(e)};t.prototype.getItemIndex=function(e){for(var t=-1,i=0;i<this.currentList.length;i++)if(this.currentList[i].data==e){t=i;break}return t};t.prototype.isIndexInRange=function(e){return this.currentList?e>=0&&e<this.currentList.length:!1};t.prototype.isItemAllowed=function(e){return!0};t.prototype.isItemEnabled=function(e){return!0};t.prototype.isItemHovered=function(e){return e&&e==this.hoverItem?!0:!1};t.prototype.isItemSelected=function(e){return e&&1==e[this.options.dataFields.selected]?!0:!1};t.prototype.itemMouseEnter=function(e,t){if(this.isEnabled){this.hoverItem=t.data;this.updateItemStyle(t)}};t.prototype.itemMouseLeave=function(e,t){if(this.isEnabled){this.hoverItem=null;this.updateItemStyle(t)}};t.prototype.getContentSize=function(){return{width:0,height:0}};t.prototype.refresh=function(){this.updateView()};t.prototype.resetLayout=function(){if(this.updateTimer)clearTimeout(this.updateTimer);this.updateTimer=null};t.prototype.suspendLayout=function(){this.allowUpdate=!1};t.prototype.resumeLayout=function(){this.allowUpdate=!0;this.updateLayout()};t.prototype.updateLayout=function(){var e=this;e.contentOpacity=0;e.updateTimer=setTimeout(function(){e.updateCurrentList();if(0==e.currentList.length)e.currentScrollPos={x:0,y:0};e.clientRect={width:e.elemRef.nativeElement.firstElementChild.clientWidth,height:e.elemRef.nativeElement.firstElementChild.clientHeight};e.initPos={x:(e.clientRect.width-e.itemSize.width)/2,y:(e.clientRect.height-e.itemSize.height)/2};if(e.leftrightButtonsElem)e.initPos.x-=e.leftrightButtonsElem.nativeElement.offsetWidth+1;else e.initPos.y-=e.topBottomButtonsElem.nativeElement.offsetHeight+1;e.updateScrollItemList();var t=setTimeout(function(){e.updateScrollSize();e.updateSelection();e.refresh();e.updateComplete.emit(null);clearTimeout(t)},1);e.contentOpacity=1;clearTimeout(e.updateTimer)},100)};t.prototype.updateView=function(){this.updateScrollItemList()};t.prototype.ctrlMouseWheel=function(e){if(this.isEnabled)this.processMouseWheel(e)};t.prototype.itemMouseDown=function(e,t){if(this.isEnabled){if(this.options.allowFocus&&1==e.buttons)this.currentFocusItem=t.data;this.processSelection(t.data)}e.stopPropagation()};t.prototype.itemMouseUp=function(e,t){};t.prototype.itemClickEvent=function(e,t){if(this.isEnabled);e.stopPropagation()};t.prototype.itemDblClickEvent=function(e,t){if(this.isEnabled)t.data;e.stopPropagation()};t.prototype.onMouseDown=function(e,t){this.startChange(t)};t.prototype.onMouseUp=function(e){this.stopChange()};t.prototype.onScroll=function(e){if(e.target){e.target.scrollTop=0;e.target.scrollLeft=0}};t.prototype.changeHorizontalScrollPos=function(e){this.currentScrollPos.x=Math.max(0,Math.min(e,this.maxScrollPos.x));if(this.currentScrollPos.x!=this.prevScrollPos.x){this.scrollPosChanged.emit({value:this.scrollPos()});this.prevScrollPos.x=this.currentScrollPos.x}};t.prototype.changeVerticalScrollPos=function(e){this.currentScrollPos.y=Math.max(0,Math.min(e,this.maxScrollPos.y));if(this.currentScrollPos.y!=this.prevScrollPos.y){this.scrollPosChanged.emit({value:this.scrollPos()});this.prevScrollPos.y=this.currentScrollPos.y}};t.prototype.scrollPos=function(e){if(e){this.currentScrollPos={x:Math.max(0,Math.min(e.x,this.maxScrollPos.x)),y:Math.max(0,Math.min(e.y,this.maxScrollPos.y))};this.updateSelection();this.updateView();this.scrollPosChanged.emit({value:this.currentScrollPos})}return{x:Math.floor(this.currentScrollPos.x),y:Math.floor(this.currentScrollPos.y)}};t.prototype.processMouseWheel=function(e){if(this.isEnabled){e.preventDefault();this.hoverItem=null;var t=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail)),i=1;switch(this.mouseWheelSpeed){case integralui_core_1.IntegralUISpeedMode.VerySlow:i=.25;break;case integralui_core_1.IntegralUISpeedMode.Slow:i=.5;break;case integralui_core_1.IntegralUISpeedMode.Fast:i=1.5;break;case integralui_core_1.IntegralUISpeedMode.VeryFast:i=3}if(this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal){var o=this.itemSize.width*i,n=this.currentScrollPos.x+o*t*-1;this.changeHorizontalScrollPos(n)}else{o=this.itemSize.height*i,n=this.currentScrollPos.y+o*t*-1;this.changeVerticalScrollPos(n)}this.updateSelection();this.updateView();e.stopPropagation()}};t.prototype.updateScrollSize=function(){var e=this.commonService.getBorderWidth(this.blockElem.nativeElement),t=this.commonService.getMargin(this.blockElem.nativeElement),i=this.commonService.getPadding(this.blockElem.nativeElement);switch(this.scrollMode){case integralui_core_1.IntegralUIScrollMode.Vertical:if(this.topBottomButtonsElem&&this.blockElem){this.contentSize={width:this.clientRect.width,height:this.clientRect.height-(e.top+e.bottom+t.top+t.bottom+i.top+i.bottom+2*this.topBottomButtonsElem.nativeElement.offsetHeight)-2};this.contentPos={left:0,top:this.topBottomButtonsElem.nativeElement.offsetHeight+1};if(this.topBottomButtonsChildElem)this.topBotomMarginLeft=(this.contentSize.width-this.topBottomButtonsChildElem.nativeElement.offsetWidth)/2}break;default:if(this.leftrightButtonsElem){this.contentSize={width:this.clientRect.width-(e.left+e.right+t.left+t.right+i.left+i.right+2*this.leftrightButtonsElem.nativeElement.offsetWidth)-2,height:this.clientRect.height};if(this.blockElem)this.leftRightMarginTop=(this.clientRect.height-this.leftrightButtonsElem.nativeElement.offsetHeight)/2;this.contentPos={left:this.leftrightButtonsElem.nativeElement.offsetWidth+1,top:0}}}this.scrollSize={width:this.itemSize.width*(this.currentList.length-1),height:this.itemSize.height*(this.currentList.length-1)};this.scrollSize.width=this.scrollSize.width>0?this.scrollSize.width:0;this.scrollSize.height=this.scrollSize.height>0?this.scrollSize.height:0;this.maxScrollPos={x:this.scrollSize.width,y:this.scrollSize.height};if(this.currentScrollPos.x>this.maxScrollPos.x)this.changeHorizontalScrollPos(this.maxScrollPos.x);if(this.currentScrollPos.y>this.maxScrollPos.y)this.changeVerticalScrollPos(this.maxScrollPos.y);this.clientSpace={width:this.clientRect.width,height:this.clientRect.height}};t.prototype.changeValueTimerElapsed=function(e){if(0==this.valueCount)if(this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal)this.valueCount=this.itemSize.width;else this.valueCount=this.itemSize.height;this.stopTimer=!1;this.changeValue(e);if(this.stopTimer){clearInterval(this.valueTimer);this.isChangeActive=!1}};t.prototype.changeValue=function(e){if(this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal)if(e)if(this.currentScrollPos.x+this.valueCount<this.maxScrollPos.x)this.changeHorizontalScrollPos(this.currentScrollPos.x+this.valueCount);else{this.stopTimer=!0;this.changeHorizontalScrollPos(this.maxScrollPos.x)}else if(this.currentScrollPos.x-this.valueCount>0)this.changeHorizontalScrollPos(this.currentScrollPos.x-this.valueCount);else{this.stopTimer=!0;this.changeHorizontalScrollPos(0)}else if(e)if(this.currentScrollPos.y+this.valueCount<this.maxScrollPos.y)this.changeVerticalScrollPos(this.currentScrollPos.y+this.valueCount);else{this.stopTimer=!0;this.changeVerticalScrollPos(this.maxScrollPos.y)}else if(this.currentScrollPos.y-this.valueCount>0)this.changeVerticalScrollPos(this.currentScrollPos.y-this.valueCount);else{this.stopTimer=!0;this.changeVerticalScrollPos(0)}this.updateSelection();this.updateView()};t.prototype.prevItem=function(){if(this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal)this.changeHorizontalScrollPos(this.currentScrollPos.x-this.itemSize.width);else this.changeVerticalScrollPos(this.currentScrollPos.y-this.itemSize.height);this.updateSelection();this.updateView()};t.prototype.nextItem=function(){if(this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal)this.changeHorizontalScrollPos(this.currentScrollPos.x+this.itemSize.width);else this.changeVerticalScrollPos(this.currentScrollPos.y+this.itemSize.height);this.updateSelection();this.updateView()};t.prototype.startChange=function(e){var t=this;if(t.valueTimer)clearInterval(this.valueTimer);t.valueCount=0;t.isChangeActive=!0;t.valueTimer=setInterval(function(){t.changeValueTimerElapsed(e)},100)};t.prototype.stopChange=function(){if(this.valueTimer)clearInterval(this.valueTimer);this.isChangeActive=!1};t.prototype.findItemById=function(e){return this.dataService.findObjectById(e)};t.prototype.findItemByText=function(e){return this.dataService.findObjectByText(e)};t.prototype.callAfterSelectEvent=function(e){var t={item:e};this.afterSelect.emit(t);this.selectionChanged.emit(t)};t.prototype.clearPrevSelection=function(){if(this.currentSelection)this.currentSelection[this.options.dataFields.selected]=!1;this.currentSelection=null};t.prototype.processSelection=function(e,t){var i=!0;if(e)if(!this.isItemEnabled(e)){this.clearPrevSelection();this.refresh();this.selectionChanged.emit({item:null})}else{var o=this.currentSelection,n=!0;if(o)n=!this.commonService.isEqual(o[this.options.dataFields.id],e[this.options.dataFields.id])||0==o[this.options.dataFields.selected];var r={cancel:!1,item:e};this.beforeSelect.emit(r);i=1==r.cancel?!1:!0;if(n&&1!=r.cancel){this.clearPrevSelection();this.currentSelection=e;e[this.options.dataFields.selected]=!0;var l=this.getItemIndex(e);if(l>=0)if(this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal)this.changeHorizontalScrollPos(l*this.itemSize.width);else this.changeVerticalScrollPos(l*this.itemSize.height);this.callAfterSelectEvent(e);this.refresh()}}return i};t.prototype.updateSelection=function(){var e=-1;if(this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal)e=Math.floor(this.currentScrollPos.x/this.itemSize.width);else e=Math.floor(this.currentScrollPos.y/this.itemSize.height);if(this.isIndexInRange(e))this.processSelection(this.currentList[e].data)};t.prototype.applySorting=function(e){var t=this;if(e)if(t.sortComparer)e.sort(t.sortComparer);else if(t.isSortingAllowed())e.sort(function(e,i){var o=null,n=null;if(!(o=e[t.options.dataFields.value]))o=e[t.options.dataFields.text];if(t.commonService.isObject(o))o=o.value?o.value:o.text;if(!(n=i[t.options.dataFields.value]))n=i[t.options.dataFields.text];if(t.commonService.isObject(n))n=n.value?n.value:n.text;o=void 0!=o?o:null;n=void 0!=n?n:null;switch(t.options.sorting){case integralui_core_1.IntegralUISortOrder.Ascending:if(o<n)return-1;else if(o>n)return 1;break;case integralui_core_1.IntegralUISortOrder.Descending:if(o>n)return-1;else if(o<n)return 1;break;default:return 0}})};t.prototype.isSortingAllowed=function(){return this.options.sorting==integralui_core_1.IntegralUISortOrder.Ascending||this.options.sorting==integralui_core_1.IntegralUISortOrder.Descending};t.prototype.sort=function(e,t){this.options.sorting=e;this.sortComparer=t?t:null;this.updateLayout();this.change.emit({type:"sorting"})};t.prototype.getControlStyle=function(){var e={};if(this.currentScrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal)e.height=this.currentItemSize.height+2+"px";else e.width=this.currentItemSize.width+2+"px";return e};t.prototype.updateItemStyle=function(e){if(e){e.style={general:[],content:[]};e.style.general.push(this.itemClassName);e.style.general.push(this.options.currentStyle.item.general.normal);e.style.content.push(this.itemContentClassName);e.style.content.push(this.options.currentStyle.item.content.normal);if(!this.isItemEnabled(e.data)){e.style.general.push(this.options.currentStyle.item.general.disabled);e.style.content.push(this.options.currentStyle.item.content.disabled)}else if(this.isItemSelected(e.data)){e.style.general.push(this.options.currentStyle.item.general.selected);e.style.content.push(this.options.currentStyle.item.content.selected)}else if(this.isItemHovered(e.data)){e.style.general.push(this.options.currentStyle.item.general.hovered);e.style.content.push(this.options.currentStyle.item.content.hovered)}if(e.data==this.currentFocusItem)e.style.general.push(this.options.currentStyle.item.general.focused)}};t.prototype.getItemStyle=function(e){if(e)return{general:this.getItemGeneralStyle(e.general),content:this.getItemContentStyle(e.content)};else return this.getDefaultItemStyle()};t.prototype.getItemGeneralStyle=function(e){if(this.commonService.isString(e))return e;else if(e)return{disabled:this.commonService.isFieldAvailable(e.disabled,this.itemClassName+"-disabled"),focused:this.commonService.isFieldAvailable(e.focused,this.itemClassName+"-focused"),normal:this.commonService.isFieldAvailable(e.normal,this.itemClassName),hovered:this.commonService.isFieldAvailable(e.hovered,this.itemClassName+"-hovered"),selected:this.commonService.isFieldAvailable(e.selected,this.itemClassName+"-selected")};else return this.getDefaultItemGeneralStyle()};t.prototype.getItemContentStyle=function(e){if(this.commonService.isString(e))return e;else if(e)return{disabled:this.commonService.isFieldAvailable(e.disabled,this.itemContentClassName+"-disabled"),focused:this.commonService.isFieldAvailable(e.focused,this.itemContentClassName+"-focused"),normal:this.commonService.isFieldAvailable(e.normal,this.itemContentClassName),hovered:this.commonService.isFieldAvailable(e.hovered,this.itemContentClassName+"-hovered"),selected:this.commonService.isFieldAvailable(e.selected,this.itemContentClassName+"-selected")};else return this.getDefaultItemContentStyle()};t.prototype.getDefaultListStyle=function(){return{general:this.getDefaultGeneralStyle(),item:this.getDefaultItemStyle()}};t.prototype.getDefaultItemStyle=function(){return{general:this.getDefaultItemGeneralStyle(),content:this.getDefaultItemContentStyle()}};t.prototype.getDefaultItemGeneralStyle=function(){return{disabled:this.defaultStyle.item.general.disabled,focused:this.defaultStyle.item.general.focused,normal:this.defaultStyle.item.general.normal,hovered:this.defaultStyle.item.general.hovered,selected:this.defaultStyle.item.general.selected}};t.prototype.getDefaultItemContentStyle=function(){return{disabled:this.defaultStyle.item.content.disabled,focused:this.defaultStyle.item.content.focused,normal:this.defaultStyle.item.content.normal,hovered:this.defaultStyle.item.content.hovered,selected:this.defaultStyle.item.content.selected}};t.prototype.updateStyle=function(e){if(e)this.options.currentStyle={general:this.getGeneralStyle(e.general),item:this.getItemStyle(e.item)};else this.options.currentStyle=this.getDefaultListStyle()};t.ɵfac=function(e){return new(e||t)(i0.ɵɵdirectiveInject(i1.IntegralUIDataService),i0.ɵɵdirectiveInject(i0.ElementRef),i0.ɵɵdirectiveInject(i2.IntegralUICommonService),i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver))};t.ɵcmp=i0.ɵɵdefineComponent({type:t,selectors:[["iui-listscroller"]],contentQueries:function(e,t,i){if(1&e)i0.ɵɵcontentQuery(i,core_1.TemplateRef,!0);if(2&e){var o;i0.ɵɵqueryRefresh(o=i0.ɵɵloadQuery())&&(t.itemTemplate=o.first)}},viewQuery:function(e,t){if(1&e){i0.ɵɵviewQuery(_c0,!0);i0.ɵɵviewQuery(_c1,!0);i0.ɵɵviewQuery(_c2,!0);i0.ɵɵviewQuery(_c3,!0)}if(2&e){var i;i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(t.blockElem=i.first);i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(t.leftrightButtonsElem=i.first);i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(t.topBottomButtonsElem=i.first);i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(t.topBottomButtonsChildElem=i.first)}},inputs:{controlStyle:"controlStyle",data:"data",enabled:"enabled",name:"name",size:"size",state:"state",items:"items",itemSize:"itemSize",mouseWheelSpeed:"mouseWheelSpeed",scrollMode:"scrollMode",selectedItem:"selectedItem",sorting:"sorting"},outputs:{afterSelect:"afterSelect",beforeSelect:"beforeSelect",change:"change",clear:"clear",itemAdding:"itemAdding",itemAdded:"itemAdded",itemRemoving:"itemRemoving",itemRemoved:"itemRemoved",scrollModeChanged:"scrollModeChanged",scrollPosChanged:"scrollPosChanged",selectionChanged:"selectionChanged",updateComplete:"updateComplete"},features:[i0.ɵɵProvidersFeature([integralui_data_service_1.IntegralUIDataService]),i0.ɵɵInheritDefinitionFeature],decls:4,vars:4,consts:[[3,"ngClass","ngStyle","DOMMouseScroll","mousewheel","scroll"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"iui-listscroller-updown-buttons",3,"click","mousedown","mouseup"],["topBottomButtons",""],[1,"iui-listscroller-updown-increase",3,"ngStyle"],["topBottomButtonsChild",""],[3,"ngStyle"],["block",""],[3,"ngClass","ngStyle","click","mousedown","mouseup","mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"iui-listscroller-updown-buttons",2,"position","absolute","bottom","0",3,"ngStyle","click","mousedown","mouseup"],[1,"iui-listscroller-updown-decrease",3,"ngStyle"],[3,"ngClass","ngStyle","click","mousedown","mouseup","mouseenter","mouseleave"],["itemElem",""],[3,"ngClass","tabindex"],[3,"iuiTemplateOutlet","iuiTemplateOutletContext"],[1,"iui-listscroller-leftright-buttons",2,"float","left",3,"ngStyle","click","mousedown","mouseup"],["leftrightButtons",""],[1,"iui-listscroller-leftright-decrease"],[1,"iui-listscroller-leftright-buttons",2,"float","right",3,"ngStyle","click","mousedown","mouseup"],[1,"iui-listscroller-leftright-increase"]],template:function(e,t){if(1&e){i0.ɵɵelementStart(0,"div",0);i0.ɵɵlistener("DOMMouseScroll",function(e){return t.ctrlMouseWheel(e)})("mousewheel",function(e){return t.ctrlMouseWheel(e)})("scroll",function(e){return t.onScroll(e)});i0.ɵɵelementStart(1,"span",1);i0.ɵɵtemplate(2,IntegralUIListScroller_span_2_Template,10,17,"span",2);i0.ɵɵtemplate(3,IntegralUIListScroller_span_3_Template,9,14,"span",3);i0.ɵɵelementEnd();i0.ɵɵelementEnd()}if(2&e){i0.ɵɵproperty("ngClass",t.getControlClass())("ngStyle",t.getControlStyle());i0.ɵɵadvance(1);i0.ɵɵproperty("ngSwitch",t.scrollMode);i0.ɵɵadvance(1);i0.ɵɵproperty("ngSwitchCase",1)}},directives:[i3.NgClass,i3.NgStyle,i3.NgSwitch,i3.NgSwitchCase,i3.NgSwitchDefault,i3.NgForOf,i4.IntegralUITemplateOutlet],encapsulation:2});return t}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUIListScroller=IntegralUIListScroller;