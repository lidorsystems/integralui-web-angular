/*
  filename: integralui.layout.js
  version : 20.3.1
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)if(e.hasOwnProperty(i))t[i]=e[i]})(e,i)};return function(e,i){t(e,i);function n(){this.constructor=e}e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),i0=require("@angular/core"),i1=require("../services/integralui.data.service"),i2=require("../services/integralui.common.service"),i3=require("@angular/common"),i4=require("./integralui.core"),_c0=function(t,e,i,n){return{top:t,left:e,width:i,height:n}},_c1=function(t){return{$implicit:t}};function IntegralUILayout_div_1_Template(t,e){if(1&t){i0.ɵɵelementStart(0,"div",2,3);i0.ɵɵelement(2,"span",4);i0.ɵɵelementEnd()}if(2&t){var i=e.$implicit,n=i0.ɵɵnextContext();i0.ɵɵproperty("ngStyle",i0.ɵɵpureFunction4(3,_c0,i.position.top+"px",i.position.left+"px",i.size.width+"px",i.size.height+"px"));i0.ɵɵadvance(2);i0.ɵɵproperty("iuiTemplateOutlet",n.panelTemplate)("iuiTemplateOutletContext",i0.ɵɵpureFunction1(8,_c1,i.data))}}var IntegralUILayout=function(t){__extends(e,t);function e(e,i,n){var a=t.call(this,n)||this;a.dataService=e;a.elemRef=i;a.commonService=n;a.currentList=[];a.dataPanels=[];a.fullList=[];a.options={dataFields:null};a.updateTimer=null;a.updateOptions();return a}Object.defineProperty(e.prototype,"data",{get:function(){return this.ctrlData},set:function(t){this.ctrlData=t;if(t&&t[this.options.dataFields.panels]){this.dataPanels=t[this.options.dataFields.panels];this.updateData()}this.updateLayout()},enumerable:!0,configurable:!0});e.prototype.ngOnInit=function(){this.updateData();this.updateCurrentList();this.generalClassName="iui-layout";this.initStyle()};e.prototype.updateData=function(){this.dataService.init([{data:this.dataPanels}])};e.prototype.ngAfterContentChecked=function(){if(1==this.autoUpdate){this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth,height:this.elemRef.nativeElement.firstElementChild.clientHeight};if(this.clientRect.width!=this.prevClientRect.width){this.updateLayout();this.prevClientRect.width=this.clientRect.width}else if(this.clientRect.height!=this.prevClientRect.height){this.updateLayout();this.prevClientRect.height=this.clientRect.height}}};e.prototype.updateOptions=function(t){if(t)this.options={dataFields:null};else{this.options={dataFields:null};this.updateDataFields()}};e.prototype.updateDataFields=function(t){if(t)this.options.dataFields={enabled:t.enabled?t.enabled:"enabled",id:t.id?t.id:"id",objects:t.panels?t.panels:"panels",orientation:t.orientation?t.orientation:"orientation",panels:t.panels?t.panels:"panels",pid:t.pid?t.pid:"pid",size:t.size?t.size:"size",visible:t.visible?t.visible:"visible"};else this.options.dataFields={enabled:"enabled",id:"id",objects:"panels",orientation:"orientation",panels:"panels",pid:"pid",size:"size",visible:"visible"};if(this.dataService)this.dataService.updateDataFields(this.options.dataFields)};e.prototype.updateCurrentList=function(){var t=this;t.currentList.length=0;var e=t.dataService.getList();if(e)e.forEach(function(e){t.addChildPanels(e,null)})};e.prototype.addChildPanels=function(t,e,i){var n=this,a=!0;if(!t[n.options.dataFields.panels])return a=n.addPanelToCurrentList(t,e,i);if(a){var r=t[n.options.dataFields.panels];if(r)r.forEach(function(e){n.addChildPanels(e,t[n.options.dataFields.id],i)})}return a};e.prototype.addPanelToCurrentList=function(t,e,i){t.type="panel";if(!t[this.options.dataFields.id])t[this.options.dataFields.id]=this.commonService.getUniqueId();if(e)t[this.options.dataFields.pid]=e;var n=this.isPanelAllowed(t);if(n)if(i)this.fullList.push(t);else this.currentList.push({data:t,position:{top:0,left:0},size:{width:0,height:0}});return n};e.prototype.isPanelAllowed=function(t){return!0};e.prototype.resetLayout=function(){if(this.updateTimer)clearTimeout(this.updateTimer);this.updateTimer=null};e.prototype.updateLayout=function(){var t=this;t.resetLayout();t.updateTimer=setTimeout(function(){t.updateCurrentList();t.clientRect={width:t.elemRef.nativeElement.firstElementChild.clientWidth,height:t.elemRef.nativeElement.firstElementChild.clientHeight};var e={top:0,left:0,width:t.clientRect.width,height:t.clientRect.height};t.updatePanelLayout(t.data,e);clearTimeout(t.updateTimer)},100)};e.prototype.updatePanelLayout=function(t,e){var i=this.getCurrentPanelObj(t[this.options.dataFields.id]);if(i){i.position={top:e.top,left:e.left};i.size={width:e.width,height:e.height}}var n={top:e.top,left:e.left,width:e.width,height:e.height},a=t[this.options.dataFields.orientation]?t[this.options.dataFields.orientation]:integralui_core_1.IntegralUIOrientation.Horizontal,r=0,o=1,l=t[this.options.dataFields.panels];if(l&&l.length>0)for(var s=0;s<l.length;s++)if((r=l[s][this.options.dataFields.size]?l[s][this.options.dataFields.size]:o/(l.length-s))<=o){if(a==integralui_core_1.IntegralUIOrientation.Horizontal)n.height=e.height*r;else n.width=e.width*r;this.updatePanelLayout(l[s],n);if(a==integralui_core_1.IntegralUIOrientation.Horizontal)n.top+=n.height;else n.left+=n.width;o-=r}};e.prototype.getCurrentPanelObj=function(t){for(var e=null,i=0;i<this.currentList.length;i++)if(this.currentList[i].data[this.options.dataFields.id]==t){e=this.currentList[i];break}return e};e.prototype.getControlStyle=function(){var t={};if(this.ctrlSize.width>0)t.width=this.ctrlSize.width+"px";if(this.ctrlSize.height>0)t.height=this.ctrlSize.height+"px";return t};e.ɵfac=function(t){return new(t||e)(i0.ɵɵdirectiveInject(i1.IntegralUIDataService),i0.ɵɵdirectiveInject(i0.ElementRef),i0.ɵɵdirectiveInject(i2.IntegralUICommonService))};e.ɵcmp=i0.ɵɵdefineComponent({type:e,selectors:[["iui-layout"]],contentQueries:function(t,e,i){if(1&t)i0.ɵɵcontentQuery(i,core_1.TemplateRef,!0);if(2&t){var n;i0.ɵɵqueryRefresh(n=i0.ɵɵloadQuery())&&(e.panelTemplate=n.first)}},inputs:{controlStyle:"controlStyle",data:"data",enabled:"enabled",name:"name",size:"size",state:"state",autoUpdate:"autoUpdate"},features:[i0.ɵɵProvidersFeature([integralui_data_service_1.IntegralUIDataService]),i0.ɵɵInheritDefinitionFeature],decls:2,vars:3,consts:[[3,"ngClass","ngStyle"],["style","background:#cecece;border:thin solid gray;position:absolute;",3,"ngStyle",4,"ngFor","ngForOf"],[2,"background","#cecece","border","thin solid gray","position","absolute",3,"ngStyle"],["panelElem",""],[3,"iuiTemplateOutlet","iuiTemplateOutletContext"]],template:function(t,e){if(1&t){i0.ɵɵelementStart(0,"div",0);i0.ɵɵtemplate(1,IntegralUILayout_div_1_Template,3,10,"div",1);i0.ɵɵelementEnd()}if(2&t){i0.ɵɵproperty("ngClass",e.getControlClass())("ngStyle",e.getControlStyle());i0.ɵɵadvance(1);i0.ɵɵproperty("ngForOf",e.currentList)}},directives:[i3.NgClass,i3.NgStyle,i3.NgForOf,i4.IntegralUITemplateOutlet],encapsulation:2});return e}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUILayout=IntegralUILayout;