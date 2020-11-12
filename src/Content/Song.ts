import SoundEffect from './SoundEffect';

export default class Song extends SoundEffect{

    public get Type():string{
        return "Song";
    } 
    
    constructor(){
        super();
    }


}