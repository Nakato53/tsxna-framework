/**
 * @description An X/Y position in space
 */
export default class Vector2{
    /**
     * @description X value
     */
    public x:number;
    /**
     * @description Y value
     */
    public y:number;

    constructor(x:number = 0, y:number = 0){
        this.x = x;
        this.y = y;
    }

    public get X():number{
        return this.x;
    }
    public get Y():number{
        return this.y;
    }

    public static Zero:Vector2 = new Vector2(0,0);
    public static Left:Vector2 = new Vector2(-1,0);
    public static Right:Vector2 = new Vector2(1,0);
    public static Up:Vector2 = new Vector2(0,-1);
    public static Down:Vector2 = new Vector2(0,1);
}