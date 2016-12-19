export declare class IntegralUIDataService {
    private data;
    private dataFields;
    constructor();
    init(list: Array<any>, fields?: any): void;
    private updateDataFields(value?);
    clear(parent?: any): void;
    insertAt(obj: any, index: number, parent: any): void;
    insert(obj: any, index?: number, parent?: any, refObject?: any, flag?: boolean): void;
    insertByRef(obj: any, refObject: any, flag?: boolean): number;
    removeAt(obj: any, index?: number, parent?: any): {
        obj: any;
        result: boolean;
    };
    clone(obj: any, pid?: any): {
        id: string;
        icon: any;
        text: any;
    };
    findParent(obj: any, list: any): any;
    getList(obj?: any): any;
    getParent(obj: any): any;
    getUniqueId(separator?: string): string;
}
