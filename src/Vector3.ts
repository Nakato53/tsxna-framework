import Vector2 from "./Vector2";
/**
 * @description An X/Y/Z position in space
 */
export default class Vector3 extends Vector2{
    /**
     * @description Z value
     */
    public z:number;

    constructor(x:number = 0, y:number = 0,z:number = 0){
        super(x,y);
        this.z = z;
    }
}