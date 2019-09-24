/*
  filename: integralui.dragdrop.service.js
  version : 3.2.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __decorate=this&&this.__decorate||function(e,a,b,c){var d=arguments.length,f=3>d?a:null===c?c=Object.getOwnPropertyDescriptor(a,b):c,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)f=Reflect.decorate(e,a,b,c);else for(var h=e.length-1;0<=h;h--)if(g=e[h])f=(3>d?g(f):3<d?g(a,b,f):g(a,b))||f;return 3<d&&f&&Object.defineProperty(a,b,f),f},__metadata=this&&this.__metadata||function(e,a){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,
a)};Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),IntegralUIDragDropService=function(){function e(){this.data={action:"move",clone:null,dropPos:-1,handle:null,source:null,sourceCtrl:null,sourceData:null,sourceIndex:-1,target:null,targetCtrl:null,type:""}}e.prototype.getDropPosHalf=function(a,b,c){var d={left:b.x,top:b.y,right:b.x+b.width,bottom:b.y+b.height};switch(c){case "full":if(this.checkHit(a.x,a.y,d))return 0;break;case "horizontal":d.right=b.x+b.width/2;if(this.checkHit(a.x,a.y,d))return 1;d.left=d.right;
d.right=b.x+b.width;if(this.checkHit(a.x,a.y,d))return 2;break;default:d.bottom=b.y+b.height/2;if(this.checkHit(a.x,a.y,d))return 1;d.top=d.bottom;d.bottom=b.y+b.height;if(this.checkHit(a.x,a.y,d))return 2}return-1};e.prototype.getDropPosHorizontal=function(a,b,c){if(c)return this.getDropPosHalf(a,b,"horizontal");c={left:b.x+b.width/4,top:b.y,right:b.x+3*b.width/4,bottom:b.y+b.height};if(this.checkHit(a.x,a.y,c))return 0;c.right=c.left;c.left=b.x;if(this.checkHit(a.x,a.y,c))return 1;c.left=b.x+3*
b.width/4;c.right=b.x+b.width;return this.checkHit(a.x,a.y,c)?2:-1};e.prototype.getDropPosVertical=function(a,b,c){if(c)return this.getDropPosHalf(a,b,"vertical");c={left:b.x,top:b.y+b.height/4,right:b.x+b.width,bottom:b.y+3*b.height/4};if(this.checkHit(a.x,a.y,c))return 0;c.bottom=c.top;c.top=b.y;if(this.checkHit(a.x,a.y,c))return 1;c.top=b.y+3*b.height/4;c.bottom=b.y+b.height;return this.checkHit(a.x,a.y,c)?2:-1};e.prototype.checkHit=function(a,b,c){return a>=c.left&&a<=c.right&&b>=c.top&&b<=c.bottom?
!0:!1};e.prototype.clearData=function(){this.data={action:"move",clone:null,dropPos:-1,handle:null,source:null,sourceCtrl:null,sourceData:null,sourceIndex:-1,target:null,targetCtrl:null,type:""}};e.prototype.getData=function(){return this.data};e.prototype.setData=function(a){a&&(a.action&&(this.data.action=a.action),isNaN(a.dropPos)||(this.data.dropPos=a.dropPos),isNaN(a.sourceIndex)||(this.data.sourceIndex=a.sourceIndex),this.data.clone=void 0!=a.clone?a.clone:null,this.data.source=void 0!=a.source?
a.source:null,this.data.handle=void 0!=a.handle?a.handle:null,this.data.sourceCtrl=void 0!=a.sourceCtrl?a.sourceCtrl:null,this.data.sourceData=void 0!=a.sourceData?a.sourceData:null,this.data.target=void 0!=a.target?a.target:null,this.data.targetCtrl=void 0!=a.targetCtrl?a.targetCtrl:null,this.data.type=void 0!=a.type?a.type:"")};e.prototype.hitTest=function(a,b,c){return this.checkHit(a,b,c)};e.prototype.getDropPos=function(a,b,c,d){return"horizontal"==d?this.getDropPosHorizontal(a,b,c):this.getDropPosVertical(a,
b,c)};return e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[])],e)}();exports.IntegralUIDragDropService=IntegralUIDragDropService;