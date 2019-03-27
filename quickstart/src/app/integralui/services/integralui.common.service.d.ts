export declare class IntegralUICommonService {
    constructor();
    calcMargin(elem: any): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    checkHit(x: number, y: number, bounds: any): boolean;
    getBodyElem(elem: any): any;
    getBorderWidth(elem: any): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    getClientPos(e: any, elem: any): {
        x: number;
        y: number;
    };
    getMargin(elem: any): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    getMousePos(e: any): {
        x: any;
        y: any;
    };
    getObjFromListById(list: Array<any>, id: any): any;
    getPadding(elem: any): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    getPageRect(elem?: any): any;
    getShiftPos(): {
        x: number;
        y: number;
    };
    getTouchData(e: any): any;
    getUniqueId(separator?: string): string;
    isEqual(first: any, second: any): boolean;
    isFieldAvailable(field: any, value: any): any;
    isIndexInRange(index: number, list: Array<any>): boolean;
    isObject(value: any): boolean;
    isString(value: any): boolean;
    moveObject(from: number, to: number, list: Array<any>): void;
    pointToView(pos: any): any;
}
