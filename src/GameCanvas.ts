import Color from "./Color";
import Utils from "./Utils";

export default class GameCanvas{

    private _width:number;
    private _height:number;
    private _scale:number = 1;
    private _canvas:HTMLCanvasElement;
    private _canvas_context: CanvasRenderingContext2D;
    private _cursor:boolean = true;
    

    constructor(width:number, height:number, parent:HTMLElement = document.body ){
        this._width = Math.floor(width);
        this._height = Math.floor(height);

        this._canvas = <HTMLCanvasElement>document.createElement('canvas');

        this._canvas.id = Utils.Random.ID();

        parent.appendChild(this._canvas);
        this._canvas_context = this._canvas.getContext("2d");
        this._canvas_context.imageSmoothingEnabled = false;

        this._canvas.width = this._width;
        this._canvas.height = this._height;
        this._canvas.style['width'] = Math.floor(this._width*this._scale) + 'px';
        this._canvas.style['height'] = Math.floor(this._height*this._scale) + 'px';
        //this._canvas.style['backgroundColor'] = ""

        const style = document.createElement('style');
        style.textContent = "#"+this._canvas.id+"{\
            image-rendering: optimizeSpeed;\
            image-rendering: -moz-crisp-edges;\
            image-rendering: -webkit-optimize-contrast;\
            image-rendering: -o-crisp-edges;\
            image-rendering: pixelated;\
            -ms-interpolation-mode: nearest-neighbor;\
        }";
        document.head.append(style);

        window.TSXNA.Canvas = this;
    }

    public get IsMouseVisible():boolean{
        return this._cursor;
    }

    public set IsMouseVisible(visible:boolean){
        this._cursor = visible;

        visible ? this._canvas.style['cursor'] = "default":this._canvas.style['cursor'] = "none";
        
    }

    public get width():number{
        return this._width;
    }

    public get height():number{
        return this._height;
    }

    public resize(width:number, height:number):void{
        this._canvas.width = this._width;
        this._canvas.height = this._height;
        this._canvas.style['width'] = Math.floor(this._width*this._scale) + 'px';
        this._canvas.style['height'] = Math.floor(this._height*this._scale) + 'px';
    }

    public get scale():number{
        return this._scale;
    }

    public set scale(scale:number){
        this._scale = scale;
        this._canvas.style['width'] = Math.floor(this._width*this._scale) + 'px';
        this._canvas.style['height'] = Math.floor(this._height*this._scale) + 'px';
    }

    public get canvas():HTMLCanvasElement{
        return this._canvas;
    }
    
    public get context():CanvasRenderingContext2D{
        return this._canvas_context;
    }

    public Clear(color:Color):void{
        this._canvas_context.fillStyle = color.ToHEX();
        this._canvas_context.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }
}