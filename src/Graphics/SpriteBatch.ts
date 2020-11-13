import Vector2 from '../Vector2';
import GameCanvas from './../GameCanvas';
import Texture2D from '../Content/Texture2D';
import Color from '../Color';
import Rectangle from '../Rectangle';
import DrawCallParameter from './DrawCallParameter';
import DrawStringCallParameter from './DrawStringCallParameter';

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
        this._buffer.canvas.width = this._gameCanvas.Width;
        this._buffer.canvas.height = this._gameCanvas.Height;
    }

    public End(){
        this._gameCanvas.Context.drawImage(this._buffer.canvas,0,0);
    }


    public Draw(params:DrawCallParameter){
        let paramsExtended:any = params;
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
                paramsExtended.setDestination(new Rectangle(paramsExtended._position.x,paramsExtended._position.y,source.Width, source.Height));
            }
            
            this._buffer.translate(Math.floor(paramsExtended._destination.X), Math.floor(paramsExtended._destination.Y));
            if(paramsExtended._color.ToHEX()+paramsExtended._color.A !== Color.White.ToHEX()+255){
                var img = paramsExtended._texture.cacheColor(paramsExtended._color);
                if(paramsExtended._color.A < 255){                   
                    
                    this._buffer.globalAlpha = paramsExtended._color.A/255;
                    if(paramsExtended._angle != 0)
                        this._buffer.rotate(paramsExtended._angle);              
                    this.drawTexture(   img, 
                        paramsExtended._source.X, paramsExtended._source.Y, paramsExtended._source.Width, paramsExtended._source.Height,
                        0,0, paramsExtended._destination.Width, paramsExtended._destination.Height,
                        paramsExtended._origin.x,paramsExtended._origin.y
                    );

                    if(paramsExtended._angle != 0)
                        this._buffer.rotate(-paramsExtended._angle);  
                    this._buffer.globalAlpha = 1;
                }else
                {

                    if(paramsExtended._angle != 0)
                        this._buffer.rotate(paramsExtended._angle);  
                this.drawTexture(   img, 
                    paramsExtended._source.X, paramsExtended._source.Y, paramsExtended._source.Width, paramsExtended._source.Height,
                    0,0, paramsExtended._destination.Width, paramsExtended._destination.Height,
                    paramsExtended._origin.x,paramsExtended._origin.y
);

                    if(paramsExtended._angle != 0)
                        this._buffer.rotate(-paramsExtended._angle);  
                }
            }else{
                
                if(paramsExtended._angle != 0)
                this._buffer.rotate(paramsExtended._angle);  
                this.drawTexture(   paramsExtended._texture.Image, 
                    paramsExtended._source.X, paramsExtended._source.Y, paramsExtended._source.Width, paramsExtended._source.Height,
                    0,0, paramsExtended._destination.Width, paramsExtended._destination.Height,
                    paramsExtended._origin.x,paramsExtended._origin.y
                );

                if(paramsExtended._angle != 0)
                    this._buffer.rotate(-paramsExtended._angle);  
                
            }
            this._buffer.translate(-Math.floor(paramsExtended._destination.X), -Math.floor(paramsExtended._destination.Y));
        }
    }

    public DrawString(params:DrawStringCallParameter){
        let paramsExtended:any = params;
        if(paramsExtended._font != undefined && paramsExtended._font.Loaded && paramsExtended._text !== undefined && paramsExtended._text !== ""){
            this._buffer.translate(Math.floor(paramsExtended._position.X), Math.floor(paramsExtended._position.Y));

            if(paramsExtended._angle != 0)
                this._buffer.rotate(paramsExtended._angle);  
        
            this._buffer.font = paramsExtended._size+'px '+paramsExtended._font.Name;

            this._buffer.fillStyle = Color.RGBAtoHEX(paramsExtended._color.R,paramsExtended._color.G,paramsExtended._color.B,paramsExtended._color.A);
            this._buffer.fillText(paramsExtended._text, 0,paramsExtended._size -2);

            

            if(paramsExtended._angle != 0)
                this._buffer.rotate(-paramsExtended._angle);  
                           
            this._buffer.translate(-Math.floor(paramsExtended._position.X), -Math.floor(paramsExtended._position.Y));
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