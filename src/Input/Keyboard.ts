import KeyboardState from "./KeyboardState";
import Keys from './Keys';
import Utils from './../Utils';

export default class Keyboard{

    public static keys:Array<Boolean> = [];

    public static GetState():KeyboardState{
        return new KeyboardState();
    }

    private static onLoadKeyboard = () => {
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
                                        Keyboard.keys[e.key] = false;
                                    },
                                    false
            );
    }
    
}
