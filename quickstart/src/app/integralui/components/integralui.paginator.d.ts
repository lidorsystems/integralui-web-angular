import { ElementRef, EventEmitter } from '@angular/core';
export declare class IntegralUIPaginator {
    inputLabelElem: ElementRef;
    currentPageNumber: number;
    maxPageNumber: number;
    minPageNumber: number;
    private numPages;
    inputWidth: number;
    private prevValue;
    maxPages: number;
    currentPage: number;
    pageChanged: EventEmitter<any>;
    ngAfterViewInit(): void;
    firstPage(): void;
    lastPage(): void;
    nextPage(): void;
    prevPage(): void;
    onCurrentPageChange(value: any): void;
    private updateCurrentPage;
    protected updateLayout(): void;
}
