import Loadable from "./Loadable";
import Texture2D from "./Texture2D";

export default class ContentLoader{

    public async Load<Loadable>(path:string):Promise<Loadable>{
        if(typeof Loadable === typeof Texture2D){
            return await (this.LoadTexture2D(path) as unknown as Promise<Loadable>);
        }
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