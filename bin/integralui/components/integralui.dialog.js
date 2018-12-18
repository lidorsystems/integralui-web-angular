/*
  filename: integralui.dialog.js
  version : 1.1.0
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return function(a,b){function c(){this.constructor=a}d(a,b);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),IntegralUIDialog=function(d){function a(b){var a=d.call(this,b)||this;a.commonService=b;a.isEnabled=!0;a.isVisible=!1;a.closed=new core_1.EventEmitter;a.closing=new core_1.EventEmitter;a.opened=new core_1.EventEmitter;a.opening=new core_1.EventEmitter;return a}__extends(a,d);Object.defineProperty(a.prototype,"visible",{get:function(){return this.isVisible},
set:function(a){this.isVisible!=a&&(a?this.open():this.close())},enumerable:!0,configurable:!0});a.prototype.ngOnInit=function(){this.generalClassName="iui-dialog";this.initStyle()};a.prototype.updateLayout=function(){};a.prototype.open=function(){if(!this.isVisible){var a={cancel:!1};this.opening.emit(a);a.cancel||(this.isVisible=!0,this.opened.emit(null))}};a.prototype.close=function(){if(this.isVisible){var a={cancel:!1};this.closing.emit(a);a.cancel||(this.isVisible=!1,this.closed.emit(null))}};
a.prototype.getControlStyle=function(){var a={};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};a.decorators=[{type:core_1.Component,args:[{selector:"iui-dialog",template:'\n  \t\t<div *ngIf="visible" class="iui-dialog-animation" [ngClass]="getControlClass()" [ngStyle]="getControlStyle()">\n  \t\t\t<ng-content></ng-content>\n  \t\t\t<div class="iui-dialog-buttons">\n  \t\t\t\t<span *ngIf="closeButton" class="iui-dialog-icon iui-dialog-button-close" (click)="close()"></span>\n  \t\t\t</div>\n\t\t</div>\n\t\t<p *ngIf="visible" class="iui-dialog-overlay iui-overlay-animation" (click)="close()"></p>\n\t',
inputs:"controlStyle data enabled name size state".split(" "),encapsulation:core_1.ViewEncapsulation.None}]}];a.ctorParameters=function(){return[{type:integralui_common_service_1.IntegralUICommonService}]};a.propDecorators={inputLabelElem:[{type:core_1.ViewChild,args:["inputLabel",{read:core_1.ElementRef}]}],closeButton:[{type:core_1.Input}],visible:[{type:core_1.Input}],closed:[{type:core_1.Output}],closing:[{type:core_1.Output}],opened:[{type:core_1.Output}],opening:[{type:core_1.Output}]};return a}(integralui_core_1.IntegralUIBaseComponent);
exports.IntegralUIDialog=IntegralUIDialog;