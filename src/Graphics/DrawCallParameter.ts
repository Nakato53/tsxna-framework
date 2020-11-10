import Color from '../Color';
import Rectangle from '../Rectangle';
import Texture2D from './../Content/Texture2D';
import Vector2 from './../Vector2';


export default class DrawCallParameter {
    protected _texture:Texture2D;
    protected _position:Vector2 = Vector2.Zero;
    protected _color:Color = Color.White;
    protected _destination:Rectangle|null = null;
    protected _source:Rectangle|null = null;
    protected _origin:Vector2 = Vector2.Zero;

    constructor(
        texture:Texture2D

    ){
        this._texture = texture
    }
    
    public setColor(color : Color):DrawCallParameter {
        this._color = color;
        return this;    
    }
    public setOrigin(origin : Vector2):DrawCallParameter {
        this._origin = origin;    
        return this;    
    }
    public setPosition(position : Vector2):DrawCallParameter {
        this._position = position;    
        return this;    
    }
    public setSource(source : Rectangle):DrawCallParameter {
        this._source = source;    
        return this;    
    }    
    public setDestination(dest : Rectangle):DrawCallParameter {
        this._destination = dest;
        return this;    
    }
}