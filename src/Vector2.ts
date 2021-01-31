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

    public Clone():Vector2{
        return new Vector2(this.x, this.y);
    }

    public get X():number{
        return this.x;
    }
    public get Y():number{
        return this.y;
    }

    public Distance(b:Vector2){
        return Vector2.Distance(this, b);
    }

    public static Zero:Vector2 = new Vector2(0,0);
    public static Left:Vector2 = new Vector2(-1,0);
    public static Right:Vector2 = new Vector2(1,0);
    public static Up:Vector2 = new Vector2(0,-1);
    public static Down:Vector2 = new Vector2(0,1);

    public static Distance(a:Vector2, b:Vector2):number{
        return Math.sqrt(Math.pow(a.X - b.X, 2) + Math.pow(a.Y - b.Y, 2));
    }
}