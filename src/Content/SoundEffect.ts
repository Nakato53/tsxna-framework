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

    public Play():void{
        this._audio.play();
    }

    public Pause():void{
        this._audio.pause();
    }

    public get Paused():boolean{
        return this._audio.paused;
    }

    public get CurrentTime():number{
        return this._audio.currentTime;
    }

    public get inProgress():boolean{
        return this._audio.currentTime > 0 && !this._audio.ended;
    }

    

}