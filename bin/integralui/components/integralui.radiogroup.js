/*
  filename: integralui.radiogroup.js
  version : 1.2.0
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])};return function(b,a){function c(){this.constructor=b}d(b,a);b.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_radiobutton_1=require("./integralui.radiobutton"),forms_1=require("@angular/forms"),IntegralUIRadioGroup=function(d){function b(a,b){var c=d.call(this,a,b)||this;c.elemRef=a;c.commonService=b;return c}__extends(b,d);b.prototype.ngOnInit=function(){this.generalClassName="iui-radio-group";this.contentClassName=this.generalClassName+
"-content";this.initStyle()};b.prototype.ngAfterViewInit=function(){};b.prototype.ngAfterContentInit=function(){this.buttonList=this.contentList.toArray();0<this.buttonList.length&&this.processValueChange()};b.prototype.ngAfterContentChecked=function(){if(this.contentList){this.buttonList=this.contentList.toArray();for(var a=0;a<this.buttonList.length;a++)if(this.buttonList[a].checked&&this.value!=this.buttonList[a].value){this.value=this.buttonList[a].value;break}this.processValueChange()}};b.prototype.processValueChange=
function(){if(this.buttonList)for(var a=0;a<this.buttonList.length;a++)this.buttonList[a].checked=this.buttonList[a].value==this.currentValue?!0:!1};b.decorators=[{type:core_1.Component,args:[{selector:"iui-radio-group",template:'\n\t\t<div [ngClass]="getControlClass()">\n            <div [ngClass]="getContentClass()">\n                <ng-content></ng-content>\n            </div>\n\t\t</div>\n\t',inputs:["controlStyle","data","enabled","name","state"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,
useExisting:core_1.forwardRef(function(){return b}),multi:!0}],encapsulation:core_1.ViewEncapsulation.None}]}];b.ctorParameters=function(){return[{type:core_1.ElementRef},{type:integralui_common_service_1.IntegralUICommonService}]};b.propDecorators={contentList:[{type:core_1.ContentChildren,args:[integralui_radiobutton_1.IntegralUIRadioButton]}]};return b}(integralui_core_1.IntegralUIBaseValueComponent);exports.IntegralUIRadioGroup=IntegralUIRadioGroup;