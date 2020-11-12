export default class Loadable{
    
    constructor(){   
    }

    private _loaded:boolean = false;

    public get Loaded():boolean{
        return this._loaded;
    }

    public set Loaded(loaded : boolean) {
        this._loaded = loaded;
    }
    
    public get Type():string{
        return "Loadable";
    } 
}