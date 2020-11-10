import MouseButtons from './MouseButtons';
import Mouse from './Mouse';

export default class MouseState{
    private _x:number;
    private _y:number;
    
    private _buttons = [];

    constructor(){
        this._buttons[MouseButtons.Button1] = Mouse.buttons[0];
        this._buttons[MouseButtons.Button2] = Mouse.buttons[1];
        this._buttons[MouseButtons.Button3] = Mouse.buttons[2];

        this._x = Mouse.x;
        this._y = Mouse.y;
    }

    get X(){
        return this._x;
    }

    get Y(){
        return this._y;
    }

    public IsMouseButtonDown(button:MouseButtons):boolean{
        if(this._buttons[button] === undefined || this._buttons[button] === null){
            return false;
        }
        return this._buttons[button] === true;
    }

    public IsMouseButtonUp(button:MouseButtons):boolean{
        if(this._buttons[button] === undefined || this._buttons[button] === null){
            return false;
        }
        return this._buttons[button] === false;
    }

}