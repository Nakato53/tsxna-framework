import Vector2 from '../Vector2';
import GameCanvas from './../GameCanvas';
import Texture2D from '../Content/Texture2D';
import Color from '../Color';
import Rectangle from '../Rectangle';
import DrawCallParameter from './DrawCallParameter';


class DrawCallParameterExtended extends DrawCallParameter{
    public getTexture() : Texture2D {
        return this._texture;
    }
    public get Texture() : Texture2D {
        return this._texture;
    }
    public get Position() : Vector2 {
        return this._position;
    }
    public get Color() : Color {
        return this._color;
    }
    public get Destination() : Rectangle {
        return this._destination;
    }
    public get Source() : Rectangle {
        return this._source;
    }
    public get Origin() : Vector2 {
        return this._origin;
    }
}

export default class SpriteBatch{
    private _gameCanvas:GameCanvas;
    private _buffer:CanvasRenderingContext2D;
    

    constructor(canvas:GameCanvas){
        this._gameCanvas = canvas;
     //   this._gameCanvas.context.globalCompositeOperation = "lighter";
    }

    public Begin(){
        this._buffer = (<HTMLCanvasElement>document.createElement('canvas')).getContext("2d");
        this._buffer.imageSmoothingEnabled = false;
        this._buffer.canvas.width = this._gameCanvas.width;
        this._buffer.canvas.height = this._gameCanvas.height;
    }

    public End(){
        this._gameCanvas.context.drawImage(this._buffer.canvas,0,0);
    }


    public Draw(params:DrawCallParameter){
        let paramsExtended:any = params;
        ;
        if(paramsExtended._texture !== undefined && paramsExtended._texture.Loaded){
            let source = paramsExtended._source;
            if(source == null){
                source = (new Rectangle(0,0,paramsExtended._texture.Width, paramsExtended._texture.Height));
            }
            /* Test if source rectangle outbound of the texture */
            if(source.X + source.Width > paramsExtended._texture.Width){
                source.Width = paramsExtended._texture.Width - source.X;
            }
            if(source.Y + source.Height > paramsExtended._texture.Height){
                source.Height = paramsExtended._texture.Height - source.Y;
            }

            paramsExtended.setSource(source);

            if(paramsExtended._destination == null){
                paramsExtended.setDestination(new Rectangle(paramsExtended._position.x,paramsExtended._position.y,paramsExtended._texture.Width, paramsExtended._texture.Height));
            }
            
            this._buffer.translate(Math.floor(paramsExtended._destination.X), Math.floor(paramsExtended._destination.Y));
            if(paramsExtended._color.ToHEX()+paramsExtended._color.A !== Color.White.ToHEX()+255){
                var img = paramsExtended._texture.cacheColor(paramsExtended._color);
                if(paramsExtended._color.A < 255){                   
                    
                    this._buffer.globalAlpha = paramsExtended._color.A/255;
                    if(paramsExtended._angle != 0)
                        this._buffer.rotate(paramsExtended._angle*Math.PI/180);              
                    this.drawTexture(   img, 
                        paramsExtended._source.X, paramsExtended._source.Y, paramsExtended._source.Width, paramsExtended._source.Height,
                        0,0, paramsExtended._destination.Width, paramsExtended._destination.Height,
                        paramsExtended._origin.x,paramsExtended._origin.y
                    );

                    if(paramsExtended._angle != 0)
                        this._buffer.rotate(-paramsExtended._angle*Math.PI/180);  
                    this._buffer.globalAlpha = 1;
                }else
                {

                    if(paramsExtended._angle != 0)
                        this._buffer.rotate(paramsExtended._angle*Math.PI/180);  
                this.drawTexture(   img, 
                    paramsExtended._source.X, paramsExtended._source.Y, paramsExtended._source.Width, paramsExtended._source.Height,
                    0,0, paramsExtended._destination.Width, paramsExtended._destination.Height,
                    paramsExtended._origin.x,paramsExtended._origin.y
);

                    if(paramsExtended._angle != 0)
                        this._buffer.rotate(-paramsExtended._angle*Math.PI/180);  
                }
            }else{
                
                if(paramsExtended._angle != 0)
                this._buffer.rotate(paramsExtended._angle*Math.PI/180);  
                this.drawTexture(   paramsExtended._texture.Image, 
                    paramsExtended._source.X, paramsExtended._source.Y, paramsExtended._source.Width, paramsExtended._source.Height,
                    0,0, paramsExtended._destination.Width, paramsExtended._destination.Height,
                    paramsExtended._origin.x,paramsExtended._origin.y
);

if(paramsExtended._angle != 0)
this._buffer.rotate(-paramsExtended._angle*Math.PI/180);  
                
            }
            this._buffer.translate(-Math.floor(paramsExtended._destination.X), -Math.floor(paramsExtended._destination.Y));
        }
    }

    private drawTexture(
        image:HTMLImageElement, 
        sourceX:number, sourceY:number, sourceWidth:number, sourceHeight:number, 
        destinationX:number, destinationY:number, destinationWidth:number, destinationHeight:number, 
        originX:number, originY:number
    ){
        this._buffer.drawImage( image, 
                                Math.floor(sourceX), Math.floor(sourceY), Math.floor(sourceWidth), Math.floor(sourceHeight),
                                Math.floor(destinationX-originX), Math.floor(destinationY-originY), Math.floor(destinationWidth), Math.floor(destinationHeight),
        );
    }


}