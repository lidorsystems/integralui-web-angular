export declare class IntegralUIFilterService {
    constructor();
    private isString;
    private isFilterCondition;
    beginsWith(value: any, match: any, caseSensitive: boolean): boolean;
    endsWith(value: any, match: any, caseSensitive: boolean): boolean;
    private getFilterCondition;
    private createFilterNode;
    private setFilterNode;
    private getMatchResult;
    private getFilterResult;
    private applyFilter;
    createTree(conditionList: Array<any>, formula: Array<any>): any;
    match(value: any, conditions: any, formula?: Array<any>, tree?: any, caseSensitive?: boolean): any;
    filter(list: Array<any>, field: any, conditions: any, formula: Array<any>, tree: any, caseSensitive: boolean): any[];
}
