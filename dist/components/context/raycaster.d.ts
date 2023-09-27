import { Intersection, Object3D } from 'three';
import { IfcComponent } from '../../base-types';
import { IfcContext } from './context';
export declare class IfcRaycaster extends IfcComponent {
    private readonly raycaster;
    private readonly context;
    constructor(context: IfcContext);
    dispose(): void;
    castRay(items: Object3D[]): Intersection<Object3D<import("three").Object3DEventMap>>[];
    castRayIfc(): Intersection<Object3D<import("three").Object3DEventMap>> | null;
    private filterClippingPlanes;
}
