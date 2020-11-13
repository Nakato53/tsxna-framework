import MouseState from "./MouseState";
import Utils from './../Utils';

export default class Mouse{

    public static x:number;
    public static y:number;
    public static buttons:Array<boolean> = [false,false,false];

    public static GetState():MouseState{
        return new MouseState();
    }
}



if(window.TSXNA === undefined){
    window.TSXNA = {};
    
}
if(window.TSXNA.Input === undefined){
    window.TSXNA.Input = {};
    
}
window.TSXNA.Input.onLoadMouse = () => { 
    document.addEventListener('mousedown', e => {
        if(Mouse.x >= 0 && Mouse.x <= window.TSXNA.Canvas.Width && Mouse.y >= 0 && Mouse.y <= window.TSXNA.Canvas.Height)
            Mouse.buttons[e.button] = true;
    });

    document.addEventListener('mousemove', e => {
        Mouse.x = (Math.floor(e.clientX/window.TSXNA.Canvas.Scale) - Math.floor((window.TSXNA.Canvas.Canvas as HTMLCanvasElement).offsetLeft/window.TSXNA.Canvas.Scale));
        Mouse.y = (Math.floor(e.clientY/window.TSXNA.Canvas.Scale) - Math.floor((window.TSXNA.Canvas.Canvas as HTMLCanvasElement).offsetTop/window.TSXNA.Canvas.Scale));
    });

    document.addEventListener('mouseup', e => {
        Mouse.buttons[e.button] = false;
    });
}