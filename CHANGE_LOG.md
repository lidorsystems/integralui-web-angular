v20.1.0  
- Compatible with Angular 9
- Reduced overall bundle size
- Option to add a Toolbar on left and right side of the TabStrip
- New TabStrip animations: Fade and Slide
- TabStrip display modes for tabs: AutoSized, Compressed and Justified
- Scroll buttons in TabStrip components now can appear on demand
- Improved animations in Grid and TreeGrid for dropdown editors: Date and List
- In Resize directive change detection on attached element is improved
- Option to set animation speed in editors: DatePicker and DropList
- TreeList component now shows a scrollbar on demand
- Option to add items in groups in TreeList and customize the group appearance
- TreeList items with children can expand horizontally or vertically
- New Theme: Midnight
- Content from Hover and Select templates now remains visible when TreeView layout is updated manually from code
- Fixed the issue in Breadcrumb that caused flickering during resize
- Fixed the issue that caused popup editors like DropList and DatePicker to not appear when multi-level headers are in use
- Fixed the issue with horizontal scrollbar appearance during expand/collapse of TreeView items when hover and/or select templates are in use
- The horizontal scrolling in TreeView now correctly shows the longest item in full
- On Initialization of ColorPicker if click is made outside the component, with pre-selected color and without opening the dropdown panel, the selected color becomes empty
- Fixed the issue of showing content in TreeView items in multiple lines not aligned with expand box, when display mode is set to Full
- Interference of tab selection and drag start in TabStrip when scroll mode is set OutBound

v19.4.368
- Fixed the issue that causes flickering of toolbar in TreeView 
- Other small improvements

v19.4.352
- Breadcrumb is now optimized. Flickering no longer appears
- Breadcrumb now clears the path when there is no selected item
- Frame directive fires a new event sizeChanging before the element size is changed
- Option to choose whether Frame directive resizes only width, height or both

v19.4.347
- TreeView item is now correctly rendered in full width when horizontal scrollbar is present

v19.4.325
- Reduced overall bundle size

v19.4.278
- Fixed the issue with horizontal scrollbar appearance during expand/collapse of TreeView items when hover and/or select templates are in use
- The horizontal scrolling in TreeView now correctly shows the longest item in full

v19.4.211 
- iurResize directive change detection on attached element is improved
- Fixed the issue in Breadcrumb that caused flickering during resize

v19.4.115  
- Fixed the type error with IntegralUIContentVisibility enumeration

v19.4.0  
- New components: ColorPicker and SideBar
- Option to use a Color Picker as Editor in Grid and TreeGrid
- Multi-level headers in Grid and TreeGrid
- Custom content when rows are hovered or selected in Grid, ListBox, TreeGrid and TreeView
- Option to determine when custom content appears for items or rows: None, Hover, Select or Both
- Reorder multi-level columns from code using the moveColumn method
- Option to manually set the scrolling position of tabs and handle the scrolling event in TabStrip
- New and updated samples

- Fixed the issue that caused menu item clicks to open the dropdown editor In Grid and TreeGrid when menu is opened over grid cells
- Fixed the issue that caused editor to open on mouseUp if mouse button is released over editor cell during scrolling
- selectionChanged event is now fired when selected item or row is removed from list or grid component
- Whenever data source is changed and component updated, the current selection is also updated and selection events are fired
- When selecting items or rows from code, the previous selected items are now cleared
- Fixed the issue that caused hover content to remain visible when item is no longer hovered
- Fixed the issue that prevented scrolling using touch in Grid and TreeGrid
- Fixed the issue in DropDown directive that prevented opening the dropdown list using touch
- Selecting items using touch from DropList editor is now fixed
- Calendar is updated to work with touch when included as part of DatePicker editor
- Fixed the issue that caused group panel to disappear during reordering of groups when only one group is present
- Appearance of resize cursor on left in first column when auto-sized is now fixed
- Cell Editor is now active on click in Grid and TreeGrid
- Changes to the page size in TreeGrid pagination now correctly updates the grid view

v19.3.0  
- Compatible with Angular 8
- Reduced bundle size for all individual component modules
- Option to choose whether you want the dropdown to appear downwards or upwards
- Tooltips can now appear without animation
- Option to reorder tabs through code using the moveTab method accompanied with change event
- Option to scroll to specified tab
- Option to change the drag drop position in user code and display the correct icon
- Option to set drag drop action to copy or move in code
- Drop mark icon for ListView changes to left/right in vertical mode
- Option to show expanded boxes in TreeView only on hover, in normal mode
- Editors now open only on left mouse click or touch
- Option to change calendar style from DatePicker controlStyle property
- Breadcrumb now adjust visible items based on its size and provides a root dropdown menu
- Samples are updated to work on Angular 8

- Space between ListBox items that appears under IE is now corrected
- In drop event in user code, selection of items now can be cleared
- Fixed the issue that caused getValue for DropList in ToolItem to thrown a style error exception
- Fixed the issue that shows previous item from where dragging starts to appear as hovered, after drag and drop completes 
- The image of dragged item is now correctly shown in FireFox and appears the same in all browsers
- When TabStrip is scrolled, the empty space position is now correctly set during drag and drop
- Fixed the issue that caused tab headers view to reset its position when tab is drag and dropped when OutBound scrolling mode is active
- Calendar and dropdown list in Toolbar now appear only on left mouse click
- Fixed the issue that prevented loading icon from appearing during load on demand in TreeView
- Changes to the data field names in Breadcrumb is now correctly applied
- Fixed the issue that caused style error to be thrown when Breadcrumb is initialized
- Other minor bug fixes

v19.2.0        
- Fixed columns on left and right in Grid and TreeGrid
- Option to show custom content like command buttons, when row is hovered in Grid and TreeGrid
- A new event is added named dragDropComplete, which is fired after drag drop finishes and grid layout is updated. This event is present in Grid, ListBox, ListView, TreeGrid and TreeView components
- Sorting and Filtering icon improvements
- New theme Office (animations are added on hovering, selection etc. for most components)
- Option to show expand boxes only on hover in TreeGrid
- Option to set header and footer height from code
- New  and updated samples

- Improve performance on grid update (internal data size scalling based on columns and rows)
- While dragging a row close to top or bottom grid border, the view is scrolled vertically is now corrected
- Vertical scrolling is now correctly updated during drag drop in Grid and TreeGrid
- Vertical scrollbar doesn't appear when row is expanded in the TreeGrid with only one row
- Fixed the issue that caused horizontal scrollbar to appear incorrectly in TreeView
- Fixed the issue that caused dropdown list editor to appear for cells that has it set to hidden
- ListPopup now longer causes style error with its position is set in Grid
- CalendarPopup and ListPopup are added to the DOM from the Grid only when associated editor is present
- With many columns in Grid scrolling speed is now increased when using touch
- Fixed the issue of closing the DropDown editors when touch is made outside the editor
- Tooltip no longer appears after the attached element is removed

v19.1.0
- New components: AutoComplete, Breadcrumb, Popover, Toolbar
- Compact Mode in TreeView, displays limited set of tree hierarchy based on selected item
- Improved overall performance of Grid and TreeGrid components
- Option to disable editing from built-in editor in specific cell
- Option to show or hide cell editor on demand
- Item spacing is now available in ListView
- New  and updated samples

- CSS settings for editors are now moved in separate style sheet
- Fixed the issue that incorrectly changes the rating values when division is larger than 1 in Rating component
- cellValueChanged event for TextBox now includes the original text
- TextBox editor with padding set, no longer causes cropping of the right border in the grid cell
- When editor becomes active, the row is auto-selected in Grid and TreeGrid
- mousewheel in ListView with horizontal layout now also works when virtual mode is not used
- TabStrip layout is now correctly updated on parent resize
- tabOrderChanged event now correctly includes the tab object
- Fixed the issue that caused the Filter panel in Grid sample to remain open when clicked outside its space
- Fixed the issue that causes resize cursor in grids to remain visible after mouse button is released over rows
- cellvalueChanging event now correctly carries the new value 
- The mousedown event is now suspended from bubbling up, when item is selected from dropdown list in ComboBox
- Other minor bug fixes

v18.4.0
- New components: Calendar and DatePicker
- Grid and TreeGrid components have built-in editors for: Boolean, Date, Image, List, Numeric, Progress, Rating and Text values
- Option to select a different editor for each column cells
- Cell editors are fully customizable via CSS
- Components now have built-in animations during hovering or selection
- All components now have a property  that determines whether animations are enabled or not
- New events: cellValueChanging and cellValueChanged, fired when cell value changes
- A getClientPos method is added to CommonService, which returns the mouse position in client coordinates based on specified element<
- New and updated samples

- Changes to the value property when common component is disabled is no longer applied
- Fixed the issue that caused columnClick event to fire twice when column is clicked in Grid and TreeGrid components
- When mouse cursor is moved from side of column border over rows, it no longer remains as resize cursor
- Fixed the issue with MultiExtended selection in Grid and TreeGrid that caused deselection when SHIFT key is pressed
- When moving an item from one TreeView to another with drag drop, the drop marker from the first tree view is now correctly removed from the DOM
- Drop mark now correctly appears over the first row during drag drop operation
- Fixed the issue that caused changes to the sorting order twice, when column header is clicked
- Themes are updated to reflect component changes
- Other minor bug fixes

v18.3.0
- SplitContainer now have buttons in splitter space to quickly change orientation to vertical or horizontal layout
- TabStrip scrolling options: None, InBound and OutBound
- Option to reorder columns from code in Grid and TreeGrid, using moveColumn method
- Option to reorder items from code in ListBox, ListView and TreeView using moveItem method
- Menu opening with or no animation
- Click, Right Click and Double Click events for all List and Grid components (item, cell, row, column)
- Whenever component enabled state changes, the enabledChanged event is now fired
- Option to show or hide navigation buttons in SlideBar component
- Option to show or hide command buttons in SplitContainer component
- There are five scrolling speed levels to choose from, when using mouse wheel
- Option to show or hide the expand box in TreeView, Grid and TreeGrid components
- New dragStart and dragEnd events for all Grid and List components
- Drag Drop with scrolling in TabStrip
- New and updated samples

- In SplitContainer, the position of splitter handle in horizontal layout is now correctly set when orientation changes
- Expand/Collapse now works with double click in TreeView items in non-virtual mode
- Fixed the issue when using Left/Right keys during keyboard navigation in ListView
- Changing the scroll mode in ListView component, now resets the scroll position
- Cursor icon over scrollbars now remains as the default one
- Mapping of data fields in TreeView when not in virtual mode is now correctly set for all item fields
- ListBar now correctly sets a group as selected when header is clicked
- The clone object during drag drop is now correctly attached with the drag drop data
- Fixed the issue that caused interference between dragging a grid row and selecting a new Rating value inside grid cells
- Fixed the issue in Rating when displaying large values within small component size
- Themes are updated to reflect component changes
- Other minor bug fixes

v18.2.0
- New themes: Office 360, Windows 10, Bootstrap, Blue, Red, Green, Dark
- Each group in Grid component can have a different appearance
- Create groups that display summary, average values or any result using custom aggregation functions
- Reorder tabs in TabStrip component with smooth drag and drop
- Option to set component size on demand from code
- Hover events for column, row, cell and items are now available
- Option to hide expand box in Grid and TreeGrid components
- Option to apply inline styles on demand to items in ListBox, ListView and TreeView
- Each item in Menu and ContextMenu can have custom inline style, separatelly from other items
- New samples

- Rating component when included in Grid cells no longer causes flickering
- Changes to the controlStyle property of DropDown Button are now applied correctly
- The text outside ComboBox header is now hidden
- MouseWheel operation in ComboBox no longer bubbles up in parent elements
- Frame directlive now correctly resizes the attached element when element has a border
- Fixed the issue that caused columnClick event to fire when column resize finishes
- Fixed the issue that allowed groups in Grid component to become dragged
- Fixed the issue that caused drop mark to remain visible in TreeView component, after item is dropped
- Hovering is now disabled when row or item is dragged
- Fixed the issue that caused incorrect functionalty of loadData method when flat parameter is not provided
- Opening of context menu no longer causes window to scroll
- The Splitter size is now correctly calculated and updated when attached panels or parent elements resize
- decreaseValue and increaseValue methods in ListScroller are changed to to prevItem, nextItem
- When TreeView is in virtual mode, the item width is now correctly set
- Other minor bug fixes

v18.1.0
- Angular 5 compatible
- 10 new components: Button, CheckBox, Dialog, DropDownButton, ListScroller, Numeric, ProgressBar, RadioButton, Rating, Slider
- Column reordering, allows columns to be reordered during run-time
- dragEnter and dragLeave events for most components
- Pagination is now available for Grid and TreeGrid components
- Touch events support for basic functionalities: scrolling, selection, expand/collapse etc.
- Option to set a style for column, row and cell objects on individual level from code
- Export to JSON for List components: ListBox, ListView and TreeView
- New samples that demonstrates: pagination, functionality of all new components, and more

v17.4.0
- Grouping for Grid component, allows dynamic arrangement of data in different groups
- Groups can have custom templates
- Export to JSON, Excel CSV file formats
- Move rows in direction: left, right, top, bottom, up, down and change their level
- Column resize options: allow resize on left, right or both sides
- Option to set minimum and maximum width to each column in Grid and TreeGrid
- Grid and TreeGrid has option to set columns to occupy the whole space, no horizontal scroll
- Menu virtualization
- Multi level Context Menu
- Menu templates, option to add custom HTML elements of Angular components in each menu item
- Option to persists the expand/collapse state of groups
- Group events: groupAdding, groupAdded, groupRemoving, groupRemoved, groupsCleared, groupOrderChanged
- getTopItem for TreeView and getTopRow for Grid and TreeGrid, returns the first visible item or row in the current view
- getList method now can return the current list of all visible items or rows, without children of collapsed items or rows
- Option to change the scrollbar visibility on demand, separately for horizontal and vertical scroll
- expandColumnID a property that sets the column which cells has the expand box
- Option to auto-adjust the position of the Context Menu when close to right or bottom window border
- Cancel option is added in menuOpening event
- canSelect field for columns, rows and items to prevent their selection
- enabled property for all components: appearance and functionality
- New samples that demonstrates: dynamic grouping, export to CSV or JSON, menu templates, multi-level context menu, and more

v17.3.0
- Version number changes to correspond with official product release 	
- Filter service - provides a set of related functions for custom filter operations
- DropDown directive - represents a dropdown window
- IntegralUITemplateOutlet directive - replaces the standard ngTemplateOutlet that solves the problem with memory usage by removing the generated view automatically
- Virtualization for list components: ListBox, ListView and TreeView
- Option to show/hide or enable/disable each item in Menu and Context Menu
- New events for ContextMenu that allows changes to menu content on demand before it appears
- Performance improvements in Grid, TreeGrid and TreeView
- Option to show/hide column, row and items on demand
- Drag Drop Multiple rows and items
- Keyboard navigation for all list and grid components
- keyDown, keyPress, keyUp events for all list and grid components
- All components now have a name property that uniquely identifies the component
- Option to change the distance between parent-child items and rows
- Improve performance by suspending and resuming the component layout
- Option to quickly navigate to specific item or row by showing it in the current view
- Option to auto-expand the parent item or row during drag drop operations
- Filtering is now available for all list and grid components
- New samples that demonstrates: filtering, keyboard navigation, excel like editing and virtualization

v1.1.0
- All components are now built on top of Angular 4 framework
- AOT (Ahead Of Time compilation) is now supported
- Sorting is now available for all list and grid components
- Option to create custom header for groups (using selectors)
- New samples available in QuickStart application
- columnSizeChanged event for Grid and TreeGrid components
- clearSelection method for all list and grid components
- Grid and TreeGrid can have cells with a dropdown list
- refresh, clearSelection and collapse/expand methods for Accordion component
- beforeSelect and afterSelect events for Accordion component

v1.0.0
- First official version of the product

v0.9.012
- Following methods are now available in TreeView: collapse, expand, findItemById, findItemByText, scrollPos and toggle
- Fixed the issue with addItem method when parent argument is ised

v0.9.0
- Added two new components: Grid and TreeGrid
- Expand/Collapse events in TreeView are now fired

v0.7.524
- Fixed the problem with Angular CLI, the error stating that IntegralUIModule is not recognized no longer appears

v0.7.519
- Fixed the problem with CSS relative paths in Angular CLI

v0.7.5
- During drag drop when child item is moved and placed as a root item, when there are no child items, the layout is correctly updated and all root items are aligned


v0.7.239
Added two new components: SplitContainer and Splitter

v0.5.0 
- Initial Release
