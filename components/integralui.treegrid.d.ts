import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList, Renderer, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseService, IntegralUITemplate } from './integralui.core';
import { IntegralUIBaseGrid } from './integralui.base.grid';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIDragDropService } from '../services/integralui.dragdrop.service';
import { IntegralUIScrollBar } from './integralui.scrollbar';
export declare class IntegralUITreeGrid extends IntegralUIBaseGrid {
    protected dataService: IntegralUIDataService;
    protected dragDropService: IntegralUIDragDropService;
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    protected commonService: IntegralUICommonService;
    protected cmpResolver: ComponentFactoryResolver;
    protected baseService: IntegralUIBaseService;
    private currentIndex;
    private prevIndex;
    private headerData;
    private rowData;
    private cellData;
    private footerData;
    private scrollColumnList;
    private scrollRowList;
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
    protected avgRowHeight: number;
    private blockMarginTop;
    private blockSize;
    private columnPadding;
    protected visibleRange: number;
    protected isHeaderVisible: boolean;
    protected isFooterVisible: boolean;
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
    protected gridCursor: string;
    protected isScrollActive: boolean;
    protected prevScrollPos: {
        x: number;
        y: number;
    };
    protected scrollBarSize: {
        width: number;
        height: number;
    };
    protected currentScrollPos: {
        x: number;
        y: number;
    };
    protected scrollLargeChange: {
        x: number;
        y: number;
    };
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
    private trialRef;
    expandColumnIndex: number;
    showHeader: boolean;
    showFooter: boolean;
    afterCollapse: EventEmitter<any>;
    afterExpand: EventEmitter<any>;
    beforeCollapse: EventEmitter<any>;
    beforeExpand: EventEmitter<any>;
    constructor(dataService: IntegralUIDataService, dragDropService: IntegralUIDragDropService, elemRef: ElementRef, elemRenderer: Renderer, commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    protected initStyle(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private updateScrollColumnList();
    private updateScrollRowList();
    private addColumnToCurrentList(column);
    protected updateCurrentColumnList(): void;
    protected updateCurrentRowList(): void;
    private addChildRows(parentRow, indent, pid, flag);
    private addRowToCurrentList(row, indent, pid, flag);
    getFullList(): any[];
    loadData(data: Array<any>, parent?: any, fields?: any, flat?: boolean): void;
    protected rowDragStart(e: any, obj: any): void;
    protected rowDragOver(e: any, obj: any, index: number): void;
    protected rowDragDrop(e: any, obj: any): void;
    protected isParentOf(targetRow: any, row: any): boolean;
    protected isChildOf(targetRow: any, row: any): boolean;
    collapse(row?: any): void;
    expandBoxClicked(e: any, row: any): void;
    expand(row?: any): void;
    toggle(row?: any, value?: boolean): void;
    protected getColumnCurrentIndex(column: any): number;
    protected getColumnRealIndex(j: number): any;
    protected getCellIndexById(list: Array<any>, colIndex: number, id: any): number;
    private getColumnFromCell(cell, index);
    protected getCellAlignment(column: any): string;
    protected getCellWidth(rowObj: any, column: any): number;
    protected getColumnAlignment(column: any, flag?: boolean): string;
    protected getColumnWidth(column: any): number;
    protected getRowIndent(rowObj: any, column: any): number;
    protected isExpandBoxAllowed(column: any): boolean;
    isRowExpanded(row: any): boolean;
    protected isThereVisibleChildren(row: any): boolean;
    private columnStartPos;
    private isColumnResizing;
    protected resizeColumn: any;
    private resizeColumnIndex;
    private columnMouseDown(e, obj);
    private columnMouseUp(e, obj);
    private isColumnWidthFixed(j);
    private columnMouseMove(e, obj);
    private columnMouseEnter(e, obj);
    private columnMouseLeave(e, obj);
    private gridMouseLeave(e);
    private rowMouseEnter(e, obj);
    private rowMouseLeave(e, obj);
    protected scrollSize: {
        width: number;
        height: number;
    };
    protected headerHeight: number;
    protected footerHeight: number;
    protected clientRect: {
        width: number;
        height: number;
    };
    private getFooterBottomPos();
    private contentLeftPos;
    private allColWidth;
    private viewIndexRange;
    protected updateRange(): void;
    protected updateCurrentLayout(): void;
    private updateBlockSize();
    updateLayout(): void;
    private updateVisibleRange();
    private updateScrollSize();
    private getRowScrollIndex(row);
    onWindowMouseMove(e: any): void;
    onWindowMouseUp(e: any): void;
    private updateCellWidth(column);
    getRowParent(row: any): any;
    beginLoad(row?: any): void;
    endLoad(row?: any): void;
    private isRowLoading(row);
    private changeHorizontalScrollPos(value);
    private changeVerticalScrollPos(value);
    private gridMouseWheel(e);
    isVerScrollVisible(): boolean;
    isHorScrollVisible(): boolean;
    private onVerticalScrollStart(e);
    private onVerticalScrollEnd(e);
    private onVerticalScrollChanged(e);
    private onHorizontalScrollStart(e);
    private onHorizontalScrollEnd(e);
    private onHorizontalScrollChanged(e);
    updateView(): void;
    private accelerator;
    private scrollTimerID;
    private isScrollTimerActive;
    private scrollCount;
    protected processScroll(e: any): void;
    private startScrollTimer(flag, interval?);
    private stopScrollTimer();
    private scrollTimerElapsed(flag);
    private rowMouseDown(e, obj);
    private rowMouseUp(e, obj);
    private rowClickEvent(e, obj);
    private rowDblClickEvent(e, obj);
    protected updateColumnStyle(obj: any): void;
    protected updateRowStyle(obj: any): void;
    protected getColumnStyle(value: any): {
        header: any;
        body: any;
        footer: any;
    };
    protected getColumnHeaderStyle(value: any): any;
    protected getColumnBodyStyle(value: any): any;
    protected getColumnFooterStyle(value: any): any;
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
    protected getDefaultGridStyle(): {
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
    refresh(obj?: any): void;
}
