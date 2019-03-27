import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList, Renderer, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseService, IntegralUIMoveDirection, IntegralUITemplate } from './integralui.core';
import { IntegralUIBaseGrid } from './integralui.base.grid';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIDragDropService } from '../services/integralui.dragdrop.service';
import { IntegralUIFilterService } from '../services/integralui.filter.service';
import { IntegralUIScrollBar } from './integralui.scrollbar';
export declare class IntegralUITreeGrid extends IntegralUIBaseGrid {
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
    private expandTimeout;
    private expandRow;
    protected currentExpandColumnID: any;
    private horScrollOrientation;
    private isThereChildRows;
    blockMarginTop: number;
    blockSize: any;
    private updateTimer;
    templates: QueryList<IntegralUITemplate>;
    columnElems: QueryList<ElementRef>;
    footerElems: QueryList<ElementRef>;
    rowElems: QueryList<ElementRef>;
    cellElems: QueryList<ElementRef>;
    headerElem: ElementRef;
    headerRowElem: ElementRef;
    footerElem: ElementRef;
    bodyElem: ElementRef;
    verScrollCmp: IntegralUIScrollBar;
    horScrollCmp: IntegralUIScrollBar;
    contentRef: ViewContainerRef;
    paginatorElem: ElementRef;
    private templateList;
    ctrlCursor: string;
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
    autoExpand: boolean;
    expandColumnIndex: number;
    expandColumnID: number;
    indent: number;
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
    ngAfterContentChecked(): void;
    protected updateScrollColumnList(): void;
    protected updateScrollRowList(flag?: boolean): void;
    protected createScrollObjFromRow(row: any, rowObj?: any, scrollIndex?: number): any;
    private addColumnToCurrentList(column);
    protected updateCurrentColumnList(): void;
    protected updateCurrentRowList(): void;
    protected updatePageList(): void;
    private addChildRows(parentRow, indent, pid, flag);
    private addRowToCurrentList(row, indent, pid, flag);
    getFullList(): Array<any>;
    updateFullList(): any[];
    loadData(data: Array<any>, parent?: any, fields?: any, flat?: boolean): void;
    expandOnDelay(row: any): void;
    rowDragStart(e: any, obj: any): void;
    rowDragOver(e: any, obj: any, index: number): void;
    rowDragDrop(e: any, obj: any): void;
    protected isParentOf(targetRow: any, row: any): boolean;
    protected isChildOf(targetRow: any, row: any): boolean;
    openDropDown(e: any, obj: any, i: number, j: number): void;
    collapse(row?: any): void;
    expand(row?: any): void;
    toggle(row?: any, value?: boolean): void;
    findColumnById(id: any): any;
    protected getCellIndexById(list: Array<any>, colIndex: number, id: any): number;
    private getColumnFromCell(cell, index);
    protected getCellAlignment(column: any): string;
    getColumnAlignment(column: any, flag?: boolean): string;
    isRowExpanded(row: any): boolean;
    protected isThereVisibleChildren(row: any): boolean;
    columnMouseDown(e: any, obj: any): void;
    columnMouseUp(e: any, obj: any): void;
    columnMouseMove(e: any, obj: any): void;
    columnMouseEnter(e: any, obj: any): void;
    columnMouseLeave(e: any, obj: any): void;
    gridMouseMove(e: any): void;
    gridMouseUp(e: any): void;
    gridMouseLeave(e: any): void;
    rowMouseEnter(e: any, obj: any): void;
    rowMouseLeave(e: any, obj: any): void;
    processLeftArrowKey(cell: any): any;
    processRightArrowKey(cell: any): any;
    protected updateRange(): void;
    protected updateCurrentLayout(full?: boolean): void;
    private updateBlockSize();
    private resetLayoutTimer();
    protected updateExpandingColumn(): void;
    updateLayout(): void;
    private updateVisibleRange();
    private updateScrollSize();
    private getRowScrollIndex(row);
    onWindowMouseMove(e: any): void;
    onWindowMouseUp(e: any): void;
    getRowLevel(row: any): number;
    getRowParent(row: any): any;
    getPrevRow(row: any): any;
    getNextRow(row: any): any;
    moveRow(row: any, direction: IntegralUIMoveDirection, targetRow?: any, position?: number): void;
    protected moveRowAt(row: any, targetRow: any, direction: IntegralUIMoveDirection, position?: number): void;
    beginLoad(row?: any): void;
    endLoad(row?: any): void;
    private isRowLoading(row);
    protected getHeaderRect(): any;
    scrollTo(row: any): void;
    rowMouseDown(e: any, obj: any): void;
    rowMouseUp(e: any, obj: any): void;
    getControlStyle(): any;
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
    protected getDefaultGridStyle(): {
        general: {
            disabled: any;
            focused: any;
            hovered: any;
            normal: any;
            selected: any;
        } | {
            disabled?: undefined;
            focused?: undefined;
            hovered?: undefined;
            normal?: undefined;
            selected?: undefined;
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
