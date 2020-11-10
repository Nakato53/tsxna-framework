import KeyboardState from "./KeyboardState";
import Keys from './Keys';
import Utils from './../Utils';

export default class Keyboard{

    public static keys:Array<Boolean> = [];

    public static GetState():KeyboardState{
        return new KeyboardState();
    }
    
}

if(window.TSXNA === undefined){
    window.TSXNA = {};
    
}
if(window.TSXNA.Input === undefined){
    window.TSXNA.Input = {};
    
}
window.TSXNA.Input.onLoadKeyboard = () => {
    window.addEventListener("keydown",
                                (e) => {
                                    Keyboard.keys[e.key] = true;
                                    switch(e.key){
                                        case Keys.ArrowUp: case Keys.ArrowDown: case Keys.ArrowLeft:  case Keys.ArrowRight: 
                                        case Keys.Space: e.preventDefault(); break; 
                                        default: break;
                                    }
                                },
                                false
        );
        window.addEventListener('keyup',
                                (e) => {
                                    Keyboard.keys[Keys[e.key]] = false;
                                },
                                false
        );
}