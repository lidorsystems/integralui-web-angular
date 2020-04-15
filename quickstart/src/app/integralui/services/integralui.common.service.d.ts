import * as i0 from "@angular/core";
export declare class IntegralUICommonService {
    constructor();
    calcMargin(elem: any): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    checkHit(x: number, y: number, bounds: any): boolean;
    checkNumInRange(num: number, num2: number, range: number): boolean;
    colorToRgb(p: any, q: any, t: any): any;
    convertRgbaToHex(value: string): string;
    convertRgbaToHsl(value: string): string;
    convertRgbaToNum(value: string, skipAlpha?: boolean): number[];
    convertHexToRgba(value: string): any;
    convertHslToRgba(value: string): string;
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
    getColorAtPosition(context: CanvasRenderingContext2D, x: number, y: number): string;
    getMargin(elem: any): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    getMouseOffsetPos(e: any, elem: any): {
        x: number;
        y: number;
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
    setNumInRange(value: number, min: number, max: number): number;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUICommonService, never>;
    static ɵprov: i0.ɵɵInjectableDef<IntegralUICommonService>;
}
