/*
  filename: integralui.layout.js
  version : 1.1.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var e=function(b,a){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,d){a.__proto__=d}||function(a,d){for(var b in d)d.hasOwnProperty(b)&&(a[b]=d[b])};return e(b,a)};return function(b,a){function c(){this.constructor=b}e(b,a);b.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)}}(),__decorate=this&&this.__decorate||function(e,b,a,c){var d=arguments.length,g=3>d?b:null===c?c=Object.getOwnPropertyDescriptor(b,a):c,h;
if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)g=Reflect.decorate(e,b,a,c);else for(var f=e.length-1;0<=f;f--)if(h=e[f])g=(3>d?h(g):3<d?h(b,a,g):h(b,a))||g;return 3<d&&g&&Object.defineProperty(b,a,g),g},__metadata=this&&this.__metadata||function(e,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,b)};Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),IntegralUILayout=function(e){function b(a,b,d){var c=e.call(this,d)||this;c.dataService=a;c.elemRef=b;c.commonService=d;c.currentList=[];c.dataPanels=[];c.fullList=[];c.options={dataFields:null};c.updateTimer=null;c.updateOptions();return c}__extends(b,e);Object.defineProperty(b.prototype,
"data",{get:function(){return this.ctrlData},set:function(a){(this.ctrlData=a)&&a[this.options.dataFields.panels]&&(this.dataPanels=a[this.options.dataFields.panels],this.updateData());this.updateLayout()},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.updateData();this.updateCurrentList();this.generalClassName="iui-layout";this.initStyle()};b.prototype.updateData=function(){this.dataService.init([{data:this.dataPanels}])};b.prototype.ngAfterContentChecked=function(){1==this.autoUpdate&&
(this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth,height:this.elemRef.nativeElement.firstElementChild.clientHeight},this.clientRect.width!=this.prevClientRect.width?(this.updateLayout(),this.prevClientRect.width=this.clientRect.width):this.clientRect.height!=this.prevClientRect.height&&(this.updateLayout(),this.prevClientRect.height=this.clientRect.height))};b.prototype.updateOptions=function(a){a?this.options={dataFields:null}:(this.options={dataFields:null},this.updateDataFields())};
b.prototype.updateDataFields=function(a){this.options.dataFields=a?{enabled:a.enabled?a.enabled:"enabled",id:a.id?a.id:"id",objects:a.panels?a.panels:"panels",orientation:a.orientation?a.orientation:"orientation",panels:a.panels?a.panels:"panels",pid:a.pid?a.pid:"pid",size:a.size?a.size:"size",visible:a.visible?a.visible:"visible"}:{enabled:"enabled",id:"id",objects:"panels",orientation:"orientation",panels:"panels",pid:"pid",size:"size",visible:"visible"};this.dataService&&this.dataService.updateDataFields(this.options.dataFields)};
b.prototype.updateCurrentList=function(){var a=this;a.currentList.length=0;var c=a.dataService.getList();c&&c.forEach(function(c){a.addChildPanels(c,null)})};b.prototype.addChildPanels=function(a,c,b){var d=this,e=!0;if(!a[d.options.dataFields.panels])return e=d.addPanelToCurrentList(a,c,b);e&&(c=a[d.options.dataFields.panels])&&c.forEach(function(c){d.addChildPanels(c,a[d.options.dataFields.id],b)});return e};b.prototype.addPanelToCurrentList=function(a,c,b){a.type="panel";a[this.options.dataFields.id]||
(a[this.options.dataFields.id]=this.commonService.getUniqueId());c&&(a[this.options.dataFields.pid]=c);(c=this.isPanelAllowed(a))&&(b?this.fullList.push(a):this.currentList.push({data:a,position:{top:0,left:0},size:{width:0,height:0}}));return c};b.prototype.isPanelAllowed=function(a){return!0};b.prototype.resetLayout=function(){this.updateTimer&&clearTimeout(this.updateTimer);this.updateTimer=null};b.prototype.updateLayout=function(){var a=this;a.resetLayout();a.updateTimer=setTimeout(function(){a.updateCurrentList();
a.clientRect={width:a.elemRef.nativeElement.firstElementChild.clientWidth,height:a.elemRef.nativeElement.firstElementChild.clientHeight};a.updatePanelLayout(a.data,{top:0,left:0,width:a.clientRect.width,height:a.clientRect.height});clearTimeout(a.updateTimer)},100)};b.prototype.updatePanelLayout=function(a,c){var b=this.getCurrentPanelObj(a[this.options.dataFields.id]);b&&(b.position={top:c.top,left:c.left},b.size={width:c.width,height:c.height});b={top:c.top,left:c.left,width:c.width,height:c.height};
var e=a[this.options.dataFields.orientation]?a[this.options.dataFields.orientation]:integralui_core_1.IntegralUIOrientation.Horizontal,h=1,f=a[this.options.dataFields.panels];if(f&&0<f.length)for(var k=0;k<f.length;k++){var l=f[k][this.options.dataFields.size]?f[k][this.options.dataFields.size]:h/(f.length-k);l<=h&&(e==integralui_core_1.IntegralUIOrientation.Horizontal?b.height=c.height*l:b.width=c.width*l,this.updatePanelLayout(f[k],b),e==integralui_core_1.IntegralUIOrientation.Horizontal?b.top+=
b.height:b.left+=b.width,h-=l)}};b.prototype.getCurrentPanelObj=function(a){for(var b=null,d=0;d<this.currentList.length;d++)if(this.currentList[d].data[this.options.dataFields.id]==a){b=this.currentList[d];break}return b};b.prototype.getControlStyle=function(){var a={};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};__decorate([core_1.ContentChild(core_1.TemplateRef,{"static":!1}),__metadata("design:type",Object)],b.prototype,
"panelTemplate",void 0);__decorate([core_1.Input(),__metadata("design:type",Boolean)],b.prototype,"autoUpdate",void 0);__decorate([core_1.Input(),__metadata("design:type",Object),__metadata("design:paramtypes",[Object])],b.prototype,"data",null);return b=__decorate([core_1.Component({selector:"iui-layout",template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()">\n\t        <div *ngFor="let panel of currentList; let i = index" style="background:#cecece;border:thin solid gray;position:absolute;" [ngStyle]="{ top: panel.position.top + \'px\', left: panel.position.left + \'px\', width: panel.size.width + \'px\', height: panel.size.height + \'px\' }" #panelElem>\n\t\t\t\t<span [iuiTemplateOutlet]="panelTemplate" [iuiTemplateOutletContext]="{$implicit: (panel.data)}"></span>\n\t        </div>\n\t\t</div>\n\t',
inputs:"controlStyle data enabled name size state".split(" "),providers:[integralui_data_service_1.IntegralUIDataService],encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[integralui_data_service_1.IntegralUIDataService,core_1.ElementRef,integralui_common_service_1.IntegralUICommonService])],b)}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUILayout=IntegralUILayout;