export declare class IntegralUIDragDropService {
    private data;
    constructor();
    private getDropPosHalf(pos, bounds, type);
    private getDropPosHorizontal(pos, bounds);
    private getDropPosVertical(pos, bounds);
    private checkHit(x, y, bounds);
    clearData(): void;
    getData(): any;
    setData(value: any): void;
    hitTest(x: any, y: any, bounds: any): boolean;
    getDropPos(pos: any, bounds: any, flag?: boolean, type?: string): 0 | 1 | 2 | -1;
}
