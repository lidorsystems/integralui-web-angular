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
