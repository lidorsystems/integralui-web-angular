/*
  filename: integralui.filter.service.js
  version : 4.0.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),i0=require("@angular/core"),IntegralUIFilterService=function(){function e(){}e.prototype.isString=function(a){return a?"string"==typeof a||a instanceof String:!1};e.prototype.isFilterCondition=function(a){return"a"==a||"b"==a||"c"==a||"d"==a||"e"==a||"f"==a||"g"==a||"h"==a||"i"==a||"j"==a||"k"==a||"l"==a||"m"==a||"n"==a||"o"==a||"p"==a||"q"==a||"r"==a||"s"==a||"t"==a||"u"==a||"v"==a||"w"==a||"x"==a||"y"==a||"z"==a?!0:!1};e.prototype.beginsWith=function(a,b,c){return void 0!=
a&&void 0!=b&&this.isString(a)&&this.isString(b)&&a.length>=b.length?0!=c?a.substring(0,b.length)==b?!0:!1:a.toLowerCase().substring(0,b.length)==b.toLowerCase()?!0:!1:!1};e.prototype.endsWith=function(a,b,c){return void 0!=a&&void 0!=b&&this.isString(a)&&this.isString(b)&&a.length>=b.length?0!=c?a.substring(a.length-b.length,a.length)==b?!0:!1:a.toLowerCase().substring(a.length-b.length,a.length)==b.toLowerCase()?!0:!1:!1};e.prototype.getFilterCondition=function(a,b){var c="abcdefghijklmnopqrstuvwxyz".indexOf(b);
return a&&0<=c&&c<a.length?a[c]:null};e.prototype.createFilterNode=function(){return{result:!1}};e.prototype.setFilterNode=function(a,b,c,d){var g=this.createFilterNode();g.condition=this.getFilterCondition(b,c);g.negative=d;a.left?a.right||(a.right=g):a.left=g};e.prototype.getMatchResult=function(a,b,c,d,g){var f=!1;if(void 0!=a&&void 0!=c){switch(b){case ">":f=a>c;break;case ">=":f=a>=c;break;case "<":f=a<c;break;case "<=":f=a<=c;break;case "=":f=this.isString(a)&&this.isString(c)?0!=g?a==c:a.toLowerCase()==
c.toLowerCase():a==c;break;case "!=":f=this.isString(a)&&this.isString(c)?0!=g?a!=c:a.toLowerCase()!=c.toLowerCase():a!=c;break;case "<>":f=this.isString(a)&&this.isString(c)?0!=g?a!=c:a.toLowerCase()!=c.toLowerCase():a!=c;break;case "->":f=this.beginsWith(a,c,g);break;case "<-":f=this.endsWith(a,c,g);break;case "><":f=this.isString(a)&&this.isString(c)?0!=g?-1<a.indexOf(c):-1<a.toLowerCase().indexOf(c.toLowerCase()):!1;break;case "[]":f=this.isString(a)&&this.isString(c)?0!=g?-1<a.indexOf(c):-1<
a.toLowerCase().indexOf(c.toLowerCase()):!1}1==d&&(f=!f)}return f};e.prototype.getFilterResult=function(a,b,c,d){if(b){if(Array.isArray(b.value)){for(var g=[],f=0;f<b.value.length;f++)g.push(this.getMatchResult(a,b.operation,b.value[f],c,d));a=!0;if("&"==b.join)for(f=0;f<g.length;f++)a=a&&g[f];else for(a=!1,f=0;f<g.length;f++)a=a||g[f];return a}return this.getMatchResult(a,b.operation,b.value,c,d)}return!0};e.prototype.applyFilter=function(a,b,c){if(b){var d=b;d.left&&(d.left.condition?d.left.result=
this.getFilterResult(a,d.left.condition,d.left.negative,c):(d=d.left,this.applyFilter(a,d,c)));d=b;d.right&&(d.right.condition?d.right.result=this.getFilterResult(a,d.right.condition,d.right.negative,c):(d=d.right,this.applyFilter(a,d,c)));"&"==b.operator?(b.result=!0,b.left&&(b.result=b.result&&b.left.result),b.right&&(b.result=b.result&&b.right.result)):(b.result=!1,b.left&&(b.result=b.result||b.left.result),b.right&&(b.result=b.result||b.right.result));return b.result}return!0};e.prototype.createTree=
function(a,b){if(b){for(var c=this.createFilterNode(),d=c,g,f=!1,e=0;e<b.length;e++)this.isFilterCondition(b[e])?this.setFilterNode(d,a,b[e],f):"&"==b[e]||"|"==b[e]?(f=!1,d.operator=b[e]):"!"==b[e]?f=!0:"("==b[e]?(f=!1,g=this.createFilterNode(),g.parent=d,d=g):")"==b[e]&&(f=!1,d.parent&&(d.parent.left?d.parent.right||(d.parent.right=d):d.parent.left=d),d=d.parent);return c}return null};e.prototype.match=function(a,b,c,d,e){return Array.isArray(b)?(d||(d=this.createTree(b,c)),this.applyFilter(a,d,
e)):this.getFilterResult(a,b,b?b.negative:!1,e)};e.prototype.filter=function(a,b,c,d,e,f){var g=[];if(a&&Array.isArray(a))for(var h=0;h<a.length;h++)this.match(b?a[h][b]:a[h],c,d,e,f)&&g.push(a[h]);return g};e.\u0275fac=function(a){return new (a||e)};e.\u0275prov=i0.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac});return e}();exports.IntegralUIFilterService=IntegralUIFilterService;
(function(){i0.\u0275setClassMetadata(IntegralUIFilterService,[{type:core_1.Injectable}],function(){return[]},null)})();