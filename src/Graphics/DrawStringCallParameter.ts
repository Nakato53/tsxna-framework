import Color from '../Color';
import MathHelper from '../MathHelper';
import SpriteFront from '../Content/SpriteFont';
import Vector2 from '../Vector2';


export default class DrawStringCallParameter {
    protected _text:string;
    protected _font:SpriteFront = null;
    protected _position:Vector2 = Vector2.Zero;
    protected _color:Color = Color.White;
    protected _origin:Vector2 = Vector2.Zero;
    protected _angle:number = 0;
    protected _size:number = 10;

    constructor(
        text:string,
        font:SpriteFront

    ){
        this._text = text;
        this._font = font;
    }

    /**
     * @description Set the angle rotation
     * @param angle Angle value in Radians.
     * @param isDegree Define if the angle parameter is in Degree, false by default.
     */
    public setAngle(angle:number, isDegree:boolean = false):DrawStringCallParameter{
        if(isDegree){
            angle = MathHelper.ToRadians(angle);
        }
        this._angle = angle;
        return this;
    }
    public setColor(color : Color):DrawStringCallParameter {
        this._color = color;
        return this;    
    }
    public setOrigin(origin : Vector2):DrawStringCallParameter {
        this._origin = origin;    
        return this;    
    }
    public setPosition(position : Vector2):DrawStringCallParameter {
        this._position = position;    
        return this;    
    }
    public setSize(size : number):DrawStringCallParameter {
        this._size = size;    
        return this;    
    }
    public setSpriteFront(font : SpriteFront):DrawStringCallParameter {
        this._font = font;    
        return this;    
    }
}