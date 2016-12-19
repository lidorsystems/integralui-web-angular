import { ElementRef, EventEmitter } from '@angular/core';
export declare class IntegralUIPaginator {
    inputLabelElem: ElementRef;
    private currentPageNumber;
    private maxPageNumber;
    private minPageNumber;
    private numPages;
    private inputWidth;
    private prevValue;
    maxPages: number;
    currentPage: number;
    pageChanged: EventEmitter<any>;
    ngAfterViewInit(): void;
    firstPage(): void;
    lastPage(): void;
    nextPage(): void;
    prevPage(): void;
    private onCurrentPageChange(value);
    private updateCurrentPage;
    protected updateLayout(): void;
}
