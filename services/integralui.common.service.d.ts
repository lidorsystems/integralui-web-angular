export declare class IntegralUICommonService {
    constructor();
    calcMargin(elem: any): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    getBodyElem(elem: any): any;
    getBorderWidth(elem: any): {
        top: number;
        right: number;
        bottom: number;
        left: number;
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
    getPadding(elem: any): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    getPageRect(elem: any): any;
    getShiftPos(): {
        x: number;
        y: number;
    };
    getUniqueId(separator?: any): string;
    isEqual(first: any, second: any): boolean;
    isFieldAvailable(field: any, value: any): any;
    isString(value: any): boolean;
}
