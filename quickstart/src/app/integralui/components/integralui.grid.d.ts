import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList, Renderer, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseService, IntegralUITemplate } from './integralui.core';
import { IntegralUIBaseGrid } from './integralui.base.grid';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIDragDropService } from '../services/integralui.dragdrop.service';
import { IntegralUIFilterService } from '../services/integralui.filter.service';
import { IntegralUIScrollBar } from './integralui.scrollbar';
export declare class IntegralUIGrid extends IntegralUIBaseGrid {
    protected dataService: IntegralUIDataService;
    protected dragDropService: IntegralUIDragDropService;
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    protected commonService: IntegralUICommonService;
    protected filterService: IntegralUIFilterService;
    protected cmpResolver: ComponentFactoryResolver;
    protected baseService: IntegralUIBaseService;
    headerData: Array<any>;
    rowData: Array<any>;
    cellData: Array<any>;
    footerData: Array<any>;
    private fullList;
    protected expandColIndex: number;
    private horScrollOrientation;
    private isThereChildRows;
    private currentPageList;
    private currentPageNumber;
    private onlyCurrentPage;
    private pageNumber;
    private pageList;
    private pageRowCount;
    blockMarginTop: number;
    blockSize: any;
    private columnPadding;
    private updateTimer;
    templates: QueryList<IntegralUITemplate>;
    columnElems: QueryList<ElementRef>;
    rowElems: QueryList<ElementRef>;
    headerElem: ElementRef;
    footerElem: ElementRef;
    bodyElem: ElementRef;
    verScrollCmp: IntegralUIScrollBar;
    horScrollCmp: IntegralUIScrollBar;
    contentRef: ViewContainerRef;
    private templateList;
    gridCursor: string;
    protected cellClassName: string;
    protected cellBorderClassName: string;
    protected columnClassName: string;
    protected columnHeaderClassName: string;
    protected columnBodyClassName: string;
    protected columnFooterClassName: string;
    protected expandBoxClassName: string;
    protected generalClassName: string;
    protected gridLinesClassName: string;
    protected rowClassName: string;
    protected sortingClassName: string;
    private refreshTimer;
    private trialRef;
    showHeader: boolean;
    showFooter: boolean;
    afterCollapse: EventEmitter<any>;
    afterExpand: EventEmitter<any>;
    beforeCollapse: EventEmitter<any>;
    beforeExpand: EventEmitter<any>;
    constructor(dataService: IntegralUIDataService, dragDropService: IntegralUIDragDropService, elemRef: ElementRef, elemRenderer: Renderer, commonService?: IntegralUICommonService, filterService?: IntegralUIFilterService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    protected updateData(): void;
    protected initStyle(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    protected updateScrollColumnList(): void;
    protected updateScrollRowList(): void;
    private addColumnToCurrentList(column);
    protected updateCurrentColumnList(): void;
    protected updateCurrentRowList(): void;
    private addChildRows(parentRow, indent, pid, flag);
    private addRowToCurrentList(row, indent, pid, flag);
    getFullList(): any[];
    loadData(data: Array<any>, fields?: any, flat?: boolean): void;
    rowDragStart(e: any, obj: any): void;
    rowDragOver(e: any, obj: any, index: number): void;
    rowDragDrop(e: any, obj: any): void;
    protected isParentOf(targetRow: any, row: any): boolean;
    protected isChildOf(targetRow: any, row: any): boolean;
    collapse(row?: any): void;
    expandBoxClicked(e: any, row: any): void;
    expand(row?: any): void;
    private isRowLoading(row);
    toggle(row?: any, value?: boolean): void;
    protected getColumnRealIndex(j: number): any;
    protected getCellIndexById(list: Array<any>, colIndex: number, id: any): number;
    private getColumnFromCell(cell, index);
    protected getCellAlignment(column: any): string;
    protected getCellWidth(rowObj: any, column: any): number;
    getColumnAlignment(column: any, flag?: boolean): string;
    getColumnWidth(column: any): number;
    protected getRowIndent(rowObj: any, column: any): number;
    protected isExpandBoxAllowed(column: any): boolean;
    isRowExpanded(row: any): boolean;
    protected isThereVisibleChildren(row: any): boolean;
    private columnStartPos;
    protected resizeColumn: any;
    private resizeColumnIndex;
    private columnMouseDown(e, obj);
    private columnMouseUp(e, obj);
    private isColumnWidthFixed(j);
    columnMouseMove(e: any, obj: any): void;
    columnMouseEnter(e: any, obj: any): void;
    columnMouseLeave(e: any, obj: any): void;
    gridMouseLeave(e: any): void;
    rowMouseEnter(e: any, obj: any): void;
    rowMouseLeave(e: any, obj: any): void;
    getFooterBottomPos(): 0 | 16;
    protected updateRange(): void;
    protected updateCurrentLayout(): void;
    private updateBlockSize();
    private resetLayout();
    updateLayout(): void;
    private updateVisibleRange();
    private updateScrollSize();
    private getRowScrollIndex(row);
    onWindowMouseMove(e: any): void;
    onWindowMouseUp(e: any): void;
    private updateCellWidth(column);
    getRowParent(row: any): any;
    rowMouseDown(e: any, obj: any): void;
    rowMouseUp(e: any, obj: any): void;
    rowClickEvent(e: any, obj: any): void;
    rowDblClickEvent(e: any, obj: any): void;
    protected updateColumnStyle(obj: any): void;
    protected updateRowStyle(obj: any): void;
    protected getColumnStyle(value: any): {
        header: any;
        body: any;
        footer: any;
        sorting: {
            normal: any;
            selected: any;
        };
    };
    protected getColumnHeaderStyle(value: any): any;
    protected getColumnBodyStyle(value: any): any;
    protected getColumnFooterStyle(value: any): any;
    protected getColumnSortingStyle(value: any): {
        normal: any;
        selected: any;
    };
    protected getColumnSortingNormalStyle(value: any): any;
    protected getColumnSortingSelectedStyle(value: any): any;
    protected getRowStyle(value: any): {
        general: any;
        expandBox: any;
        cell: any;
    };
    protected getRowGeneralStyle(value: any): any;
    protected getRowExpandBoxStyle(value: any): any;
    protected getRowCellStyle(value: any): any;
    protected getGridLinesStyle(value: any): {
        none: any;
        horizontal: any;
        vertical: any;
        both: any;
    };
    protected getDefaultStyle(): {
        general: {
            disabled: any;
            focused: any;
            hovered: any;
            normal: any;
            selected: any;
        };
        column: {
            header: {
                cell: any;
                disabled: any;
                normal: any;
                hovered: any;
                selected: any;
            };
            body: {
                cell: any;
                disabled: any;
                normal: any;
                hovered: any;
                selected: any;
            };
            footer: {
                cell: any;
                disabled: any;
                normal: any;
                hovered: any;
                selected: any;
            };
            sorting: {
                normal: {
                    ascending: any;
                    descending: any;
                };
                selected: {
                    ascending: any;
                    descending: any;
                };
            };
        };
        row: {
            general: {
                disabled: any;
                focused: any;
                normal: any;
                hovered: any;
                selected: any;
            };
            expandBox: {
                general: any;
                load: any;
                expanded: any;
                collapsed: any;
            };
            cell: {
                disabled: any;
                focused: any;
                normal: any;
                hovered: any;
                selected: any;
            };
        };
        gridLines: {
            none: any;
            horizontal: any;
            vertical: any;
            both: any;
        };
    };
    protected getDefaultColumnStyle(): {
        header: {
            cell: any;
            disabled: any;
            normal: any;
            hovered: any;
            selected: any;
        };
        body: {
            cell: any;
            disabled: any;
            normal: any;
            hovered: any;
            selected: any;
        };
        footer: {
            cell: any;
            disabled: any;
            normal: any;
            hovered: any;
            selected: any;
        };
        sorting: {
            normal: {
                ascending: any;
                descending: any;
            };
            selected: {
                ascending: any;
                descending: any;
            };
        };
    };
    protected getDefaultColumnHeaderStyle(): {
        cell: any;
        disabled: any;
        normal: any;
        hovered: any;
        selected: any;
    };
    protected getDefaultColumnBodyStyle(): {
        cell: any;
        disabled: any;
        normal: any;
        hovered: any;
        selected: any;
    };
    protected getDefaultColumnFooterStyle(): {
        cell: any;
        disabled: any;
        normal: any;
        hovered: any;
        selected: any;
    };
    protected getDefaultColumnSortingStyle(): {
        normal: {
            ascending: any;
            descending: any;
        };
        selected: {
            ascending: any;
            descending: any;
        };
    };
    protected getDefaultRowStyle(): {
        general: {
            disabled: any;
            focused: any;
            normal: any;
            hovered: any;
            selected: any;
        };
        expandBox: {
            general: any;
            load: any;
            expanded: any;
            collapsed: any;
        };
        cell: {
            disabled: any;
            focused: any;
            normal: any;
            hovered: any;
            selected: any;
        };
    };
    protected getDefaultRowGeneralStyle(): {
        disabled: any;
        focused: any;
        normal: any;
        hovered: any;
        selected: any;
    };
    protected getDefaultRowExpandBoxStyle(): {
        general: any;
        load: any;
        expanded: any;
        collapsed: any;
    };
    protected getDefaultRowCellStyle(): {
        disabled: any;
        focused: any;
        normal: any;
        hovered: any;
        selected: any;
    };
    protected getDefaultGridLinesStyle(): {
        none: any;
        horizontal: any;
        vertical: any;
        both: any;
    };
    protected updateStyle(value: any): void;
    private resetRefresh();
    refresh(obj?: any): void;
}
