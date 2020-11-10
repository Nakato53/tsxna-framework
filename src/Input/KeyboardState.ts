import Keyboard from './Keyboard';
import Keys from './Keys';
import Utils from './../Utils';

export default class KeyboardState{

    private _keys = [];

    constructor(){
        for (let item in Keys) {
            if (isNaN(Number(item))) {
                this._keys[item] = Keyboard.keys[item];
            }
        }
    }

    public IsKeyDown(key:Keys):boolean{
        if(this._keys[key] === undefined || this._keys[key] === null){
            return false;
        }
        return this._keys[key] === true;
    }

    public IsKeyUp(key:Keys):boolean{
        if(this._keys[key] === undefined || this._keys[key] === null){
            return false;
        }
        return this._keys[key] === false;
    }

}