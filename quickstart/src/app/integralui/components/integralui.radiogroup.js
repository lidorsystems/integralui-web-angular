/*
  filename: integralui.radiogroup.js
  version : 20.2.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)if(e.hasOwnProperty(i))t[i]=e[i]})(e,i)};return function(e,i){t(e,i);function n(){this.constructor=e}e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_radiobutton_1=require("./integralui.radiobutton"),forms_1=require("@angular/forms"),i0=require("@angular/core"),i1=require("../services/integralui.common.service"),i2=require("@angular/common"),_c0=["*"],IntegralUIRadioGroup=function(t){__extends(e,t);function e(e,i){var n=t.call(this,e,i)||this;n.elemRef=e;n.commonService=i;return n}e.prototype.ngOnInit=function(){this.generalClassName="iui-radio-group";this.contentClassName=this.generalClassName+"-content";this.initStyle()};e.prototype.ngAfterViewInit=function(){};e.prototype.ngAfterContentInit=function(){this.buttonList=this.contentList.toArray();if(this.buttonList.length>0)this.processValueChange()};e.prototype.ngAfterContentChecked=function(){if(this.contentList){this.buttonList=this.contentList.toArray();for(var t=0;t<this.buttonList.length;t++)if(this.buttonList[t].checked&&this.value!=this.buttonList[t].value){this.value=this.buttonList[t].value;break}this.processValueChange()}};e.prototype.processValueChange=function(){if(this.buttonList)for(var t=0;t<this.buttonList.length;t++)if(this.buttonList[t].value==this.currentValue)this.buttonList[t].checked=!0;else this.buttonList[t].checked=!1};e.ɵfac=function(t){return new(t||e)(i0.ɵɵdirectiveInject(i0.ElementRef),i0.ɵɵdirectiveInject(i1.IntegralUICommonService))};e.ɵcmp=i0.ɵɵdefineComponent({type:e,selectors:[["iui-radio-group"]],contentQueries:function(t,e,i){if(1&t)i0.ɵɵcontentQuery(i,integralui_radiobutton_1.IntegralUIRadioButton,!0);if(2&t){var n;i0.ɵɵqueryRefresh(n=i0.ɵɵloadQuery())&&(e.contentList=n)}},inputs:{controlStyle:"controlStyle",data:"data",enabled:"enabled",name:"name",state:"state"},features:[i0.ɵɵProvidersFeature([{provide:forms_1.NG_VALUE_ACCESSOR,useExisting:core_1.forwardRef(function(){return e}),multi:!0}]),i0.ɵɵInheritDefinitionFeature],ngContentSelectors:_c0,decls:3,vars:2,consts:[[3,"ngClass"]],template:function(t,e){if(1&t){i0.ɵɵprojectionDef();i0.ɵɵelementStart(0,"div",0);i0.ɵɵelementStart(1,"div",0);i0.ɵɵprojection(2);i0.ɵɵelementEnd();i0.ɵɵelementEnd()}if(2&t){i0.ɵɵproperty("ngClass",e.getControlClass());i0.ɵɵadvance(1);i0.ɵɵproperty("ngClass",e.getContentClass())}},directives:[i2.NgClass],encapsulation:2});return e}(integralui_core_1.IntegralUIBaseValueComponent);exports.IntegralUIRadioGroup=IntegralUIRadioGroup;