/*
  filename: integralui.radiogroup.js
  version : 1.0.0
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(b,a){function c(){this.constructor=b}for(var d in a)a.hasOwnProperty(d)&&(b[d]=a[d]);b.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)},__decorate=this&&this.__decorate||function(b,a,c,d){var f=arguments.length,e=3>f?a:null===d?d=Object.getOwnPropertyDescriptor(a,c):d,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)e=Reflect.decorate(b,a,c,d);else for(var h=b.length-1;0<=h;h--)if(g=b[h])e=(3>f?g(e):3<f?g(a,c,e):
g(a,c))||e;return 3<f&&e&&Object.defineProperty(a,c,e),e},__metadata=this&&this.__metadata||function(b,a){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(b,a)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_radiobutton_1=require("./integralui.radiobutton"),forms_1=require("@angular/forms"),IntegralUIRadioGroup=IntegralUIRadioGroup_1=function(b){function a(a,
d){var c=b.call(this,a,d)||this;c.elemRef=a;c.commonService=d;return c}__extends(a,b);a.prototype.ngOnInit=function(){this.generalClassName="iui-radio-group";this.contentClassName=this.generalClassName+"-content";this.initStyle()};a.prototype.ngAfterViewInit=function(){};a.prototype.ngAfterContentInit=function(){this.buttonList=this.contentList.toArray();0<this.buttonList.length&&this.processValueChange()};a.prototype.ngAfterContentChecked=function(){if(this.contentList){this.buttonList=this.contentList.toArray();
for(var a=0;a<this.buttonList.length;a++)if(this.buttonList[a].checked&&this.value!=this.buttonList[a].value){this.value=this.buttonList[a].value;break}this.processValueChange()}};a.prototype.processValueChange=function(){if(this.buttonList)for(var a=0;a<this.buttonList.length;a++)this.buttonList[a].checked=this.buttonList[a].value==this.currentValue?!0:!1};return a}(integralui_core_1.IntegralUIBaseValueComponent);
__decorate([core_1.ContentChildren(integralui_radiobutton_1.IntegralUIRadioButton),__metadata("design:type",core_1.QueryList)],IntegralUIRadioGroup.prototype,"contentList",void 0);
IntegralUIRadioGroup=IntegralUIRadioGroup_1=__decorate([core_1.Component({selector:"iui-radio-group",template:'\n\t\t<div [ngClass]="getControlClass()">\n            <div [ngClass]="getContentClass()">\n                <ng-content></ng-content>\n            </div>\n\t\t</div>\n\t',inputs:["controlStyle","data","enabled","name","state"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useExisting:core_1.forwardRef(function(){return IntegralUIRadioGroup_1}),multi:!0}],encapsulation:core_1.ViewEncapsulation.None}),
__metadata("design:paramtypes",[core_1.ElementRef,integralui_common_service_1.IntegralUICommonService])],IntegralUIRadioGroup);exports.IntegralUIRadioGroup=IntegralUIRadioGroup;var IntegralUIRadioGroup_1;