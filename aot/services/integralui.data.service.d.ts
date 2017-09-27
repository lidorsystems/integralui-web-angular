export declare class IntegralUIDataService {
    private data;
    constructor();
    init(list: Array<any>): void;
    private getDataFields(value?);
    updateDataFields(value?: any, key?: string): void;
    clear(parent?: any, key?: string): void;
    insertAt(obj: any, index?: number, parent?: any, key?: any): void;
    insert(obj: any, index?: number, parent?: any, refObject?: any, flag?: boolean, key?: any): void;
    insertByRef(obj: any, refObject: any, flag?: boolean, key?: any): number;
    removeAt(obj: any, index?: number, parent?: any, key?: any): {
        obj: any;
        result: boolean;
    };
    private createCloneIds(obj, newPid, fields);
    clone(obj: any, key?: any): any;
    findObjectById(id: any, key?: any): any;
    findObjectByText(text: string, key?: any): any;
    private searchObj(value, list, fields, type?);
    findParent(obj: any, list: Array<any>, fields: any): any;
    getData(key?: any): any;
    getKey(key?: any): any;
    getList(obj?: any, key?: any): any;
    getParent(obj: any, key?: any): any;
    getUniqueId(separator?: string): string;
}
