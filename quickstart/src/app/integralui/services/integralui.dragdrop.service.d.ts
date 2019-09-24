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
    getDropPos(pos: any, bounds: any, flag?: boolean, type?: string): 1 | 0 | 2 | -1;
}
