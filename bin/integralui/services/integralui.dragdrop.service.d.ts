import * as i0 from "@angular/core";
export declare class IntegralUIDragDropService {
    private data;
    constructor();
    private getDropPosHalf;
    private getDropPosHorizontal;
    private getDropPosVertical;
    private checkHit;
    clearData(): void;
    getData(): any;
    setData(value: any): void;
    hitTest(x: any, y: any, bounds: any): boolean;
    getDropPos(pos: any, bounds: any, flag?: boolean, type?: string): 1 | -1 | 0 | 2;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUIDragDropService, never>;
    static ɵprov: i0.ɵɵInjectableDef<IntegralUIDragDropService>;
}
