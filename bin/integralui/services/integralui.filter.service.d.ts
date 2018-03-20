export declare class IntegralUIFilterService {
    constructor();
    private isString(value);
    private isFilterCondition(symbol);
    beginsWith(value: any, match: any, caseSensitive: boolean): boolean;
    endsWith(value: any, match: any, caseSensitive: boolean): boolean;
    private getFilterCondition(conditionList, symbol);
    private createFilterNode();
    private setFilterNode(node, conditionList, symbol, negative);
    private getMatchResult(value, operation, match, negative, caseSensitive);
    private getFilterResult(value, condition, negative, caseSensitive);
    private applyFilter(value, tree, caseSensitive);
    createTree(conditionList: Array<any>, formula: Array<any>): any;
    match(value: any, conditions: any, formula?: Array<any>, tree?: any, caseSensitive?: boolean): any;
    filter(list: Array<any>, field: any, conditions: any, formula: Array<any>, tree: any, caseSensitive: boolean): any[];
}
