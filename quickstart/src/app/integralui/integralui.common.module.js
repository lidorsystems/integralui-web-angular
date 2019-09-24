/*
  filename: integralui.common.module.js
  version : 3.2.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __decorate=this&&this.__decorate||function(b,c,d,e){var f=arguments.length,a=3>f?c:null===e?e=Object.getOwnPropertyDescriptor(c,d):e,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(b,c,d,e);else for(var h=b.length-1;0<=h;h--)if(g=b[h])a=(3>f?g(a):3<f?g(c,d,a):g(c,d))||a;return 3<f&&a&&Object.defineProperty(c,d,a),a};Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),integralui_core_module_1=require("./integralui.core.module"),integralui_autocomplete_1=require("./components/integralui.autocomplete"),integralui_breadcrumb_1=require("./components/integralui.breadcrumb"),integralui_button_1=require("./components/integralui.button"),integralui_calendar_1=require("./components/integralui.calendar"),integralui_checkbox_1=require("./components/integralui.checkbox"),
integralui_combobox_1=require("./components/integralui.combobox"),integralui_datepicker_1=require("./components/integralui.datepicker"),integralui_dialog_1=require("./components/integralui.dialog"),integralui_dropdown_1=require("./directives/integralui.dropdown"),integralui_frame_1=require("./directives/integralui.frame"),integralui_listscroller_1=require("./components/integralui.listscroller"),integralui_numeric_updown_1=require("./components/integralui.numeric-updown"),integralui_paginator_1=require("./components/integralui.paginator"),
integralui_popover_1=require("./directives/integralui.popover"),integralui_progressbar_1=require("./components/integralui.progressbar"),integralui_radiobutton_1=require("./components/integralui.radiobutton"),integralui_radiogroup_1=require("./components/integralui.radiogroup"),integralui_range_1=require("./directives/integralui.range"),integralui_rating_1=require("./components/integralui.rating"),integralui_resize_1=require("./directives/integralui.resize"),integralui_slider_1=require("./components/integralui.slider"),
integralui_splitter_1=require("./components/integralui.splitter"),integralui_toolbar_1=require("./components/integralui.toolbar"),integralui_toolitem_1=require("./components/integralui.toolitem"),IntegralUICommonModule=function(){function b(){}return b=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,integralui_core_module_1.IntegralUICoreModule],declarations:[integralui_autocomplete_1.IntegralUIAutoComplete,integralui_breadcrumb_1.IntegralUIBreadCrumb,integralui_button_1.IntegralUIButton,
integralui_calendar_1.IntegralUICalendar,integralui_datepicker_1.IntegralUICalendarPopup,integralui_checkbox_1.IntegralUICheckBox,integralui_combobox_1.IntegralUIComboBox,integralui_datepicker_1.IntegralUIDatePicker,integralui_dialog_1.IntegralUIDialog,integralui_dropdown_1.IntegralUIDropDown,integralui_dropdown_1.IntegralUIDropDownComponent,integralui_frame_1.IntegralUIFrame,integralui_listscroller_1.IntegralUIListScroller,integralui_numeric_updown_1.IntegralUINumericUpDown,integralui_paginator_1.IntegralUIPaginator,
integralui_popover_1.IntegralUIPopOver,integralui_popover_1.IntegralUIPopOverComponent,integralui_progressbar_1.IntegralUIProgressBar,integralui_radiobutton_1.IntegralUIRadioButton,integralui_radiogroup_1.IntegralUIRadioGroup,integralui_range_1.IntegralUIRange,integralui_rating_1.IntegralUIRating,integralui_resize_1.IntegralUIResize,integralui_slider_1.IntegralUISlider,integralui_splitter_1.IntegralUISplitter,integralui_toolbar_1.IntegralUIToolBar,integralui_toolitem_1.IntegralUIToolItem],exports:[integralui_autocomplete_1.IntegralUIAutoComplete,
integralui_breadcrumb_1.IntegralUIBreadCrumb,integralui_button_1.IntegralUIButton,integralui_calendar_1.IntegralUICalendar,integralui_checkbox_1.IntegralUICheckBox,integralui_combobox_1.IntegralUIComboBox,integralui_datepicker_1.IntegralUIDatePicker,integralui_dialog_1.IntegralUIDialog,integralui_dropdown_1.IntegralUIDropDown,integralui_frame_1.IntegralUIFrame,integralui_listscroller_1.IntegralUIListScroller,integralui_numeric_updown_1.IntegralUINumericUpDown,integralui_paginator_1.IntegralUIPaginator,
integralui_popover_1.IntegralUIPopOver,integralui_popover_1.IntegralUIPopOverComponent,integralui_progressbar_1.IntegralUIProgressBar,integralui_radiobutton_1.IntegralUIRadioButton,integralui_radiogroup_1.IntegralUIRadioGroup,integralui_range_1.IntegralUIRange,integralui_rating_1.IntegralUIRating,integralui_resize_1.IntegralUIResize,integralui_slider_1.IntegralUISlider,integralui_splitter_1.IntegralUISplitter,integralui_toolbar_1.IntegralUIToolBar,integralui_toolitem_1.IntegralUIToolItem],entryComponents:[integralui_datepicker_1.IntegralUICalendarPopup,
integralui_dropdown_1.IntegralUIDropDownComponent,integralui_popover_1.IntegralUIPopOverComponent]})],b)}();exports.IntegralUICommonModule=IntegralUICommonModule;