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
        if(Mouse.x >= 0 && Mouse.x <= window.TSXNA.Canvas.width && Mouse.y >= 0 && Mouse.y <= window.TSXNA.Canvas.height)
            Mouse.buttons[e.button] = true;
    });

    document.addEventListener('mousemove', e => {
        Mouse.x = (Math.floor(e.clientX/window.TSXNA.Canvas.scale) - Math.floor((window.TSXNA.Canvas.canvas as HTMLCanvasElement).offsetLeft/window.TSXNA.Canvas.scale));
        Mouse.y = (Math.floor(e.clientY/window.TSXNA.Canvas.scale) - Math.floor((window.TSXNA.Canvas.canvas as HTMLCanvasElement).offsetTop/window.TSXNA.Canvas.scale));
    });

    document.addEventListener('mouseup', e => {
        Mouse.buttons[e.button] = false;
    });
}