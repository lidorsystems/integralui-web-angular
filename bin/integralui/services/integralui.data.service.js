/*
  filename: integralui.data.service.js
  version : 3.3.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __decorate=this&&this.__decorate||function(d,a,b,c){var e=arguments.length,h=3>e?a:null===c?c=Object.getOwnPropertyDescriptor(a,b):c,f;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)h=Reflect.decorate(d,a,b,c);else for(var g=d.length-1;0<=g;g--)if(f=d[g])h=(3>e?f(h):3<e?f(a,b,h):f(a,b))||h;return 3<e&&h&&Object.defineProperty(a,b,h),h},__metadata=this&&this.__metadata||function(d,a){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(d,
a)};Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),IntegralUIDataService=function(){function d(){this.data=[]}d.prototype.init=function(a){for(var b=this.data.length=0;b<a.length;b++){var c={data:a[b].data,fields:this.getDataFields(a[b].fields),key:a[b].key};this.data.push(c)}};d.prototype.getDataFields=function(a){return a?{content:a.content?a.content:"content",icon:a.icon?a.icon:"icon",id:a.id?a.id:"id",pid:a.pid?a.pid:"pid",objects:a.objects?a.objects:"items",statusIcon:a.statusIcon?a.statusIcon:"statusIcon",
subobjects:a.subobjects?a.subobjects:"subitems",text:a.text?a.text:"text"}:{content:"content",icon:"icon",id:"id",pid:"pid",objects:"items",statusIcon:"statusIcon",subobjects:"subitems",text:"text"}};d.prototype.updateDataFields=function(a,b){var c=this.getData(b);c&&(c.fields=this.getDataFields(a))};d.prototype.clear=function(a,b){this.getList(a,b).length=0};d.prototype.insertAt=function(a,b,c,e){this.insert(a,b,c,null,!1,e)};d.prototype.insert=function(a,b,c,e,h,d){a&&(e=this.getData(d))&&(e=e.fields,
a[e.pid]=c?c[e.id]:"",c=this.getList(c,d))&&(0>b||null===b||void 0===b?c.push(a):(b=Math.max(Math.min(b,c.length),0),c.splice(b,0,a)),a[e.id]||(a[e.id]=this.getUniqueId()))};d.prototype.insertByRef=function(a,b,c,e){if(a&&b){var d=this.getParent(b,e),f=this.getList(d,e).indexOf(b);c&&(f+=1);this.insert(a,f,d,b,c,e);return f}};d.prototype.removeAt=function(a,b,c,e){var d=null,f=this.getData(e);if(f){if(a){c=this.getParent(a,e);var g=this.getList(c,e);b=g.indexOf(a)}if(null===b||void 0===b)return{obj:d,
result:!1};g=this.getList(c,e);if(0<=b&&b<g.length)return d=g[b],d[f.fields.pid]="",g.splice(b,1),{obj:d,result:!0}}return{obj:d,result:!1}};d.prototype.createCloneIds=function(a,b,c){a[c.id]=this.getUniqueId();a[c.pid]=b;if(b=a[c.objects])for(var e=0;e<b.length;e++)this.createCloneIds(b[e],a[c.id],c)};d.prototype.clone=function(a,b){var c=this.getData(b);if(c){var e=JSON.parse(JSON.stringify(a));this.createCloneIds(e,null,c.fields);return e}return{}};d.prototype.findObjectById=function(a,b){var c=
this.getData(b);if(c){var e=c.fields;c=c.data;return a?this.searchObj(a,c,e):null}return null};d.prototype.findObjectByText=function(a,b){var c=this.getData(b);if(c){var e=c.fields;c=c.data;return void 0!=a?this.searchObj(a,c,e,"text"):null}return null};d.prototype.searchObj=function(a,b,c,e){var d=null;if(a&&b)for(var f=0,g=!1;!d&&f<b.length;){switch(e){case "text":b[f][c.text]&&(g=b[f][c.text].toString()===a.toString());break;default:b[f][c.id]&&(g=b[f][c.id].toString()===a.toString())}d=g?b[f]:
this.searchObj(a,b[f][c.objects],c,e);f++}return d};d.prototype.findParent=function(a,b,c){var e=null;if(a&&b)for(var d=0;!e&&d<b.length;)e=b[d][c.id]&&a[c.pid]&&b[d][c.id].toString()===a[c.pid].toString()?b[d]:this.findParent(a,b[d][c.objects],c),d++;return e};d.prototype.getData=function(a){var b=null;if(!this.getKey(a)&&0<this.data.length)b=this.data[0];else for(var c=0;c<this.data.length;c++)if(this.data[c].key==a){b=this.data[c];break}return b};d.prototype.getKey=function(a){return a?a:null};
d.prototype.getList=function(a,b){var c=this.getData(b);if(c){var d=c.fields;return a?(a[d.objects]||(a[d.objects]=[]),a[d.objects]):c.data}return[]};d.prototype.getParent=function(a,b){if(a){var c=this.getData(b);if(c)return this.findParent(a,c.data,c.fields)}return null};d.prototype.getUniqueId=function(a){function b(){return(65536*(1+Math.random())|0).toString(16).substring(1)}a=a||"-";return b()+b()+a+b()+a+b()+a+b()+a+b()+b()+b()};return d=__decorate([core_1.Injectable(),__metadata("design:paramtypes",
[])],d)}();exports.IntegralUIDataService=IntegralUIDataService;