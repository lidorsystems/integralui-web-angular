import { ElementRef, EventEmitter } from '@angular/core';
export declare class IntegralUIPaginator {
    inputLabelElem: ElementRef;
    currentPageNumber: number;
    protected isEnabled: boolean;
    maxPageNumber: number;
    minPageNumber: number;
    private numPages;
    inputWidth: number;
    private prevValue;
    currentPage: number;
    enabled: boolean;
    maxPages: number;
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
