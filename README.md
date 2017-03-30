# IntegralUI Web for Angular 2

IntegralUI Web is a library built on top of Angular 2 framework. It consists of user interface components, directives and services that can help you create modern web applications. 

Here is a brief overview of what is included:

## Components

[Accordion](http://www.lidorsystems.com/support/articles/angular/accordion/accordion-component.aspx) - Displays a list of expandable groups in vertical layout

[ComboBox](http://www.lidorsystems.com/support/articles/angular/combobox/combobox-component.aspx) - Advanced version of standard ComboBox element

[Grid](http://www.lidorsystems.com/support/articles/angular/grid/grid-component.aspx) - Displays tabular data sets

[GroupBox](http://www.lidorsystems.com/support/articles/angular/groupbox/groupbox-component.aspx) - An expandable container with header and content

[ListBar](http://www.lidorsystems.com/support/articles/angular/listbar/listbar-component.aspx) - Displays a list of expandable groups with items

[ListBox](http://www.lidorsystems.com/support/articles/angular/listbox/listbox-component.aspx) - Displays a collection of items with content in custom layouts

[ListView](http://www.lidorsystems.com/support/articles/angular/listview/listview-component.aspx) - Displays a collection of items using several different views

[Menu](http://www.lidorsystems.com/support/articles/angular/menu/menu-component.aspx) - Allows you to create static or dynamic menus

[Paginator](http://www.lidorsystems.com/support/articles/angular/paginator/paginator-component.aspx) - Allows you to divide the content in multiple views in single page

[SlideBar](http://www.lidorsystems.com/support/articles/angular/slidebar/slidebar-component.aspx) - Animates slides composed of custom content

[SplitContainer](http://www.lidorsystems.com/support/articles/angular/splitcontainer/splitcontainer-component.aspx) - Consists of two resizable panels separated by a splitter with tabs and command buttons

[Splitter](http://www.lidorsystems.com/support/articles/angular/splitter/splitter-component.aspx) - Allows you to resize two block elements during run-time

[TabStrip](http://www.lidorsystems.com/support/articles/angular/tabstrip/tabstrip-component.aspx) - Consists of multiple scrollable panels that share the same space 

[TreeGrid](http://www.lidorsystems.com/support/articles/angular/treegrid/treegrid-component.aspx) - Displays hierarchical data structures in multiple columns

[TreeList](http://www.lidorsystems.com/support/articles/angular/treelist/treelist-component.aspx) - Allows you to navigate through tree hierarchy showing only one list at a time

[TreeView](http://www.lidorsystems.com/support/articles/angular/treeview/treeview-component.aspx) - Displays hierarchical data structures


## Directives

[ContextMenu](http://www.lidorsystems.com/support/articles/angular/contextmenu/contextmenu-component.aspx) - Represents a shortcut menu

[Frame](http://www.lidorsystems.com/support/articles/angular/frame/frame-component.aspx) - Places a grip handle that allows you to resize a container during run-time

[Range](http://www.lidorsystems.com/support/articles/angular/range/range-component.aspx) - Allows you to set limits in which an element can resize during run-time

[Tooltip](http://www.lidorsystems.com/support/articles/angular/tooltip/tooltip-component.aspx) - Adds a tooltip to an element

## Services

<b>Common</b> - Includes a set of common functions usable in most applications

<b>Data</b> - Includes a set of data related functions for different operations like: add/remove, search, etc.

<b>DragDrop</b> - Provides a way to use drag drop operations between custom components or elements.


All components are inheritable, you can further extend functionalities of specific component by simple create a subclass of component main class. To get access to a specific component, the best way is to import the IntegralUIModule in your application.

## Dependencies

IntegralUI Web requires only the following library:

Angular - v2.0 and above

## Installation

Install the repository by running

```bash
npm install https://github.com/lidorsystems/integralui-web.git
```

Open your application module and add a reference to IntegralUI module

```bash
import { IntegralUIModule } from 'integralui-web/integralui.module';

@NgModule({
  imports:      [ IntegralUIModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

<b>Note</b>   In order to use a specific component or directive in your application, follow the guidelines from corresponding article. From above links, you can find a separate article available for each component or directive.

### Angular CLI

After installation, in angular-cli.json under styles section add this code line:

```bash
"../node_modules/integralui-web/css/integralui.module.css"
```

### Angular QuickStart App

Add following lines to the app.components.ts file:

```bash
    styleUrls: ['../node_modules/integralui-web/css/integralui.module.css'],
    encapsulation: ViewEncapsulation.None
```

Also copy/paste the content of node_modules/integralui-web/resources/ folder to your project src/resources folder.

If you are using SystemJS, make sure you have the following settings in systemjs.config.js file

```bash
    map: {
      'integralui-web': 'npm:integralui-web'
    },
    packages: {
      'integralui-web': {
        defaultExtension: 'js'
      }
    }
```

## Release Notes

This is Trial version of the product. All features are fully functional, except that each component displays a pop-up trial window.

## License Information

You may use this version for the limited purposes of demonstrations, trials or design-time evaluations.

This project has been released under the IntegralUI Web License, and may not be used except in compliance with the License.
A copy of the License should have been installed in the product's root installation directory or it can be found here: [License Agreement](http://www.lidorsystems.com/products/web/iui-web-license-agreement.pdf).

This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language governing rights and limitations under the License.