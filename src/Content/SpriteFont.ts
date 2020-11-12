import Loadable from './Loadable';
import * as fontface from './FontFace';

export default class SpriteFont extends Loadable{

    public get Type():string{
        return "SpriteFont";
    } 
    protected _font:FontFace;
    protected _name:string;

    public constructor(){
        super();
    }

    public get Name():string{
        return this._name;
    }
    
    public set Name(name : string) {
        this._name = name;
    }    

    public get Font():FontFace{
        return this._font;
    }
    
    public set Font(font : FontFace) {
        this._font = font;
    }   
    
    private static createSpriteFont(name:string):SpriteFont{
        let newFont = new SpriteFont();
        newFont.Name = name;
        newFont.Loaded = true;
        return newFont;
    }
    
    public static readonly Arial:SpriteFont = SpriteFont.createSpriteFont('Arial');
}