import Vector2 from "./Vector2";

export default class Rectangle{
    private _x:number;
    private _y:number;
    private _width:number;
    private _height:number;

    constructor(x:number, y:number, width:number, height:number){
        this._x = x;
        this._y = y;
        this._height = height;
        this._width = width;
    }

    public get X():number{
        return this._x;
    }
    public get Y():number{
        return this._y;
    }
    public get Width():number{
        return this._width;
    }
    public get Height():number{
        return this._height;
    }

    
    public set X(x : number) {
        this._x = x;
    }
    public set Y(y : number) {
        this._y = y;
    }
    public set Width(width : number) {
        this._width = width;
    }
    public set Height(height : number) {
        this._height = height;
    }
    

    public get Left():number{
        return this._x;
    }
    public get Top():number{
        return this._y;
    }
    public get Right():number{
        return this._x + this._width;
    }
    public get Bottom():number{
        return this._y + this._height;
    }

    public get Position():Vector2{
        return new Vector2(this._x, this._y);   
    }

    /**
     * @description Detect if current rectangle intersect with other rectangle
     * @typeParam Rectangle
     * @returns true/false
     */
    public intersect(other:Rectangle):boolean{
        return !(other.Left > this.Right || 
            other.Right < this.Left || 
            other.Top > this.Bottom ||
            other.Bottom < this.Top);
    }
}