import Loadable from './Loadable';

export default class SoundEffect extends Loadable{

    public get Type():string{
        return "SoundEffect";
    } 
    protected _audio:HTMLAudioElement;

    constructor(){
        super();
    }

    public get Audio():HTMLAudioElement{
        return this._audio;
    }
    
    public set Audio(audio : HTMLAudioElement) {
        this._audio = audio;
    }    

}