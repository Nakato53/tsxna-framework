import Color from '../Color';
import MathHelper from '../MathHelper';
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
    protected _angle:number = 0;

    constructor(
        texture:Texture2D

    ){
        this._texture = texture
    }

    /**
     * @description Set the angle rotation
     * @param angle Angle value in Radians.
     * @param isDegree Define if the angle parameter is in Degree, false by default.
     */
    public setAngle(angle:number, isDegree:boolean = false):DrawCallParameter{
        if(isDegree){
            angle = MathHelper.ToRadians(angle);
        }
        this._angle = angle;
        return this;
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
        if(this._destination != null){
            console.warn("DrawCallParameter : Destination have already been set, Position will not be used.")
        }
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