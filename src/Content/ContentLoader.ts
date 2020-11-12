import Loadable from "./Loadable";
import Texture2D from "./Texture2D";
import SoundEffect from "./SoundEffect";
import Song from "./Song";

export default class ContentLoader{

    public async Load<T extends Loadable>(type: { new(): T ;}, path:string):Promise<T>{
        
        let myObject:Loadable;
        try {
            myObject = new type();
            if(myObject.Type == undefined){
                throw new Error("Wrong type for the file : " + path);
                
            }
        } catch (error) {
            console.log(error);
            throw new Error("Wrong type for the file : " + path);
        }
        if((myObject.Type) == "Texture2D"){
            return await (this.LoadTexture2D(path) as unknown as Promise<T>);
        }
        if(myObject.Type ==  "SoundEffect" || myObject.Type == "Song"){
            return await (this.LoadAudio(path) as unknown as Promise<T>);
        }
    }

    private async LoadAudio(path:string):Promise<SoundEffect|Song>{
        return await (async () => {
            let loadedAudio:SoundEffect = new SoundEffect();
            loadedAudio.Audio = new Audio(path);
            try {
                await loadedAudio.Audio.load();
            } catch (error) {
                console.error("Error while loading audio : '"+path+"'");
            }            
            loadedAudio.Loaded = true;
            return loadedAudio;
        })();
    }
    private async LoadTexture2D(path:string):Promise<Texture2D>{
        return await (async () => {
            let loadedImage:Texture2D = new Texture2D();
            loadedImage.Image = new Image();
            loadedImage.Image.src = path;
            try {
                await loadedImage.Image.decode();
            } catch (error) {
                console.error("Error while loading image : '"+path+"'");
            }
            
            loadedImage.Loaded = true;
            return loadedImage;
        })();
    }

   
}