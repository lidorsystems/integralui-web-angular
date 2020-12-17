/*
  filename: integralui.popover.js
  version : 20.3.1
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
"use strict";var __extends=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)if(t.hasOwnProperty(o))e[o]=t[o]})(t,o)};return function(t,o){e(t,o);function i(){this.constructor=t}t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}();Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),integralui_core_1=require("../components/integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_tooltip_1=require("./integralui.tooltip"),i0=require("@angular/core"),i1=require("../services/integralui.common.service"),i2=require("@angular/common");function IntegralUIPopOverComponent_div_1_div_1_Template(e,t){if(1&e){var o=i0.ɵɵgetCurrentView();i0.ɵɵelementStart(0,"div",7);i0.ɵɵlistener("click",function(){i0.ɵɵrestoreView(o);return i0.ɵɵnextContext(2).close()});i0.ɵɵelement(1,"span");i0.ɵɵelementEnd()}}function IntegralUIPopOverComponent_div_1_span_2_Template(e,t){if(1&e){i0.ɵɵelementStart(0,"span",8);i0.ɵɵtext(1);i0.ɵɵelementEnd()}if(2&e){var o=i0.ɵɵnextContext(2);i0.ɵɵadvance(1);i0.ɵɵtextInterpolate(o.popoverOptions.title)}}function IntegralUIPopOverComponent_div_1_Template(e,t){if(1&e){i0.ɵɵelementStart(0,"div",4);i0.ɵɵtemplate(1,IntegralUIPopOverComponent_div_1_div_1_Template,2,0,"div",5);i0.ɵɵtemplate(2,IntegralUIPopOverComponent_div_1_span_2_Template,2,1,"span",6);i0.ɵɵelementEnd()}if(2&e){var o=i0.ɵɵnextContext();i0.ɵɵadvance(1);i0.ɵɵproperty("ngIf",o.popoverOptions.closeButton);i0.ɵɵadvance(1);i0.ɵɵproperty("ngIf",o.popoverOptions.title)}}function IntegralUIPopOverComponent_ng_template_3_Template(e,t){}var _c0=function(e,t,o){return{display:e,top:t,left:o}},_c1=function(e){return[e]},IntegralUIPopOverComponent=function(e){__extends(t,e);function t(t,o){var i=e.call(this,t,o)||this;i.elemRef=t;i.commonService=o;i.templateObj={};i.popoverDisplay="none";i.popoverPos={top:0,left:0};i.popoverSize={width:0,height:0};i.closed=new core_1.EventEmitter;i.updateOptions();return i}Object.defineProperty(t.prototype,"settings",{get:function(){return this.popoverOptions},set:function(e){this.updateOptions(e)},enumerable:!0,configurable:!0});t.prototype.updateOptions=function(e){if(e)this.popoverOptions={activation:this.commonService.isFieldAvailable(e.activation,"auto"),autoPopDelay:this.commonService.isFieldAvailable(e.autoPopDelay,5e3),closeButton:this.commonService.isFieldAvailable(e.closeButton,!0),enabled:this.commonService.isFieldAvailable(e.enabled,!0),header:this.commonService.isFieldAvailable(e.header,!0),initialDelay:this.commonService.isFieldAvailable(e.initialDelay,500),position:this.commonService.isFieldAvailable(e.position,"mouse"),showMarker:this.commonService.isFieldAvailable(e.showMarker,!0),title:this.commonService.isFieldAvailable(e.title,"")};else this.popoverOptions={activation:"auto",autoPopDelay:5e3,closeButton:!0,enabled:!0,header:!0,initialDelay:500,position:"mouse",showMarker:!0,title:""}};t.prototype.preventBubbleUp=function(e){e.stopPropagation()};t.prototype.close=function(){this.closed.emit(null)};t.prototype.open=function(e,t){var o=this;o.popoverPos.top=-9999999;o.popoverDisplay="block";var i=setTimeout(function(){o.popoverSize=o.getSize();o.popoverDisplay="none";o.removeTimers();if(o.popoverOptions.enabled)o.showTimer=setTimeout(function(){o.show(e,t);if("auto"==o.popoverOptions.activation)o.popupTimer=setTimeout(function(){o.closed.emit(null);clearTimeout(o.popupTimer)},o.popoverOptions.autoPopDelay);clearTimeout(o.showTimer)},o.popoverOptions.initialDelay);clearTimeout(i)},1)};t.prototype.show=function(e,t){this.popoverPos={top:this.mousePos.y+24,left:this.mousePos.x};switch(this.popoverOptions.position){case"above":this.popoverPos={top:e.top-4-this.popoverSize.height,left:e.left+Math.floor((t.width-this.popoverSize.width)/2)};break;case"below":this.popoverPos={top:e.bottom+4,left:e.left+Math.floor((t.width-this.popoverSize.width)/2)};break;case"left":this.popoverPos={top:e.top+Math.floor((t.height-this.popoverSize.height)/2),left:e.left-4-this.popoverSize.width};break;case"right":this.popoverPos={top:e.top+Math.floor((t.height-this.popoverSize.height)/2),left:e.right+4}}this.popoverDisplay="block"};t.prototype.getSize=function(){return{width:this.elemRef.nativeElement.firstElementChild.offsetWidth,height:this.elemRef.nativeElement.firstElementChild.offsetHeight}};t.prototype.updateMousePos=function(e){if(this.mousePos!=e)this.mousePos=e};t.prototype.updateControlClass=function(){this.ctrlClass.length=0;this.ctrlClass.push("iui-popover");if(this.popoverOptions.showMarker)switch(this.popoverOptions.position){case"above":this.ctrlClass.push("iui-popover-marker-bottom");break;case"right":this.ctrlClass.push("iui-popover-marker-left");break;case"below":this.ctrlClass.push("iui-popover-marker-top");break;case"left":this.ctrlClass.push("iui-popover-marker-right")}};t.ɵfac=function(e){return new(e||t)(i0.ɵɵdirectiveInject(i0.ElementRef),i0.ɵɵdirectiveInject(i1.IntegralUICommonService))};t.ɵcmp=i0.ɵɵdefineComponent({type:t,selectors:[["iui-popover"]],inputs:{controlStyle:"controlStyle",data:"data",state:"state",settings:"settings"},outputs:{closed:"closed"},features:[i0.ɵɵInheritDefinitionFeature],decls:4,vars:11,consts:[[1,"iui-popover",2,"opacity","1 !important",3,"ngClass","ngStyle","click","mousedown","mouseup"],["class","iui-popover-header",4,"ngIf"],[1,"iui-popover-content"],["ngFor","",3,"ngForOf","ngForTemplate"],[1,"iui-popover-header"],["class","iui-popover-close-button",3,"click",4,"ngIf"],["class","iui-popover-title",4,"ngIf"],[1,"iui-popover-close-button",3,"click"],[1,"iui-popover-title"]],template:function(e,t){if(1&e){i0.ɵɵelementStart(0,"div",0);i0.ɵɵlistener("click",function(e){return t.preventBubbleUp(e)})("mousedown",function(e){return t.preventBubbleUp(e)})("mouseup",function(e){return t.preventBubbleUp(e)});i0.ɵɵtemplate(1,IntegralUIPopOverComponent_div_1_Template,3,2,"div",1);i0.ɵɵelementStart(2,"div",2);i0.ɵɵtemplate(3,IntegralUIPopOverComponent_ng_template_3_Template,0,0,"ng-template",3);i0.ɵɵelementEnd();i0.ɵɵelementEnd()}if(2&e){i0.ɵɵproperty("ngClass",t.getControlClass())("ngStyle",i0.ɵɵpureFunction3(5,_c0,t.popoverDisplay,t.popoverPos.top+"px",t.popoverPos.left+"px"));i0.ɵɵadvance(1);i0.ɵɵproperty("ngIf",t.popoverOptions.header);i0.ɵɵadvance(2);i0.ɵɵproperty("ngForOf",i0.ɵɵpureFunction1(9,_c1,t.templateObj.data))("ngForTemplate",t.templateObj.template)}},directives:[i2.NgClass,i2.NgStyle,i2.NgIf,i2.NgForOf],encapsulation:2});return t}(integralui_tooltip_1.IntegralUITooltipComponent);exports.IntegralUIPopOverComponent=IntegralUIPopOverComponent;var IntegralUIPopOver=function(e){__extends(t,e);function t(t,o,i){var n=e.call(this,t,o,i)||this;n.elemRef=t;n.cmpResolver=o;n.commonService=i;n.templateData=[];n.currentMousePos={x:0,y:0};n.templateList=[];n.popOverClosed=new core_1.EventEmitter;return n}Object.defineProperty(t.prototype,"settings",{get:function(){return this.currentSettings},set:function(e){if(this.currentSettings!=e){this.currentSettings=e;this.updateTemplate()}},enumerable:!0,configurable:!0});Object.defineProperty(t.prototype,"popOverShow",{get:function(){return this.isVisible},set:function(e){if(this.isVisible!=e){this.isVisible=e;this.toggle()}},enumerable:!0,configurable:!0});t.prototype.ngAfterContentInit=function(){this.updateTemplate()};t.prototype.updateTemplate=function(){this.templateData.length=0;if(this.templates){this.templateList=this.templates.toArray();for(var e=0;e<this.templateList.length;e++)if(this.templateList[e].settings)switch(this.templateList[e].settings.type){case"popover":this.templateData.push(this.templateList[e].getTemplate())}}};t.prototype.closePopOver=function(){if(this.cmpRef){if(this.eventList)this.eventList.forEach(function(e){return e.unsubscribe()});this.cmpRef.destroy()}this.cmpRef=null};t.prototype.openPopOver=function(e){var t=this,o=t.popoverRef?t.popoverRef:t.settings.appRef;if(o){t.closePopOver();var i=t.cmpResolver.resolveComponentFactory(IntegralUIPopOverComponent);if(i){t.cmpRef=o.createComponent(i);if(t.cmpRef){var n=null;if(t.cmpRef.instance)n=t.cmpRef.instance;if(n){n.settings=t.settings;if(t.templateData[0])n.templateObj={data:t.settings.data||{},template:t.templateData[0]};if(e)n.updateMousePos(e);var r=this.elemRef.nativeElement.getBoundingClientRect();n.open(r,t.getSize());t.eventList.push(n.closed.subscribe(function(e){t.closePopOver();t.popOverClosed.emit(null)}))}}}}};t.prototype.toggle=function(){if(1==this.popOverShow)this.openPopOver(0!=this.currentMousePos.x&&0!=this.currentMousePos.y?this.currentMousePos:void 0);else this.closePopOver()};t.prototype.onMouseEnter=function(e){if(void 0==this.popOverShow){var t=this.commonService.getMousePos(e);this.openPopOver(t)}};t.prototype.onMouseLeave=function(e){if(void 0==this.popOverShow)this.closePopOver()};t.prototype.onMouseMove=function(e){if(this.cmpRef&&void 0==this.popOverShow){if(this.cmpRef.instance){this.cmpRef.instance.updateMousePos(this.commonService.getMousePos(e))}}else this.currentMousePos=this.commonService.getMousePos(e)};t.ɵfac=function(e){return new(e||t)(i0.ɵɵdirectiveInject(i0.ElementRef),i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver),i0.ɵɵdirectiveInject(i1.IntegralUICommonService))};t.ɵdir=i0.ɵɵdefineDirective({type:t,selectors:[["","iuiPopOver",""]],contentQueries:function(e,t,o){if(1&e)i0.ɵɵcontentQuery(o,integralui_core_1.IntegralUITemplate,!0);if(2&e){var i;i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(t.templates=i)}},hostBindings:function(e,t){if(1&e)i0.ɵɵlistener("mouseenter",function(e){return t.onMouseEnter(e)})("mouseleave",function(e){return t.onMouseLeave(e)})("mousemove",function(e){return t.onMouseMove(e)})},inputs:{settings:["iuiPopOver","settings"],popoverRef:"popoverRef",popOverShow:"popOverShow"},outputs:{popOverClosed:"popOverClosed"},features:[i0.ɵɵInheritDefinitionFeature]});return t}(integralui_tooltip_1.IntegralUITooltip);exports.IntegralUIPopOver=IntegralUIPopOver;