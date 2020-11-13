import Color from '../Color';
import Loadable from './Loadable';

export default class Texture2D extends Loadable{

    public get Type():string{
        return "Texture2D";
    } 

    private _image:HTMLImageElement;

    private _colorCache:any = [];

    constructor(){
        super();
        this._image = new Image();
    }

    get Width():number{
        return this._image.width;
    }

    get Height():number{
        return this._image.height;
    }

    public get Image():HTMLImageElement{
        return this._image;
    }
    
    public set Image(image : HTMLImageElement) {
        this._image = image;
    }

    private cacheColor(color:Color):HTMLImageElement{
        if(color.ToHEX() !== Color.White.ToHEX()){
            if(this._colorCache[color.ToHEX()] === undefined){
                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                context.drawImage(this.Image, 0, 0 );
                var img = context.getImageData(0, 0, this.Image.width, this.Image.height);
                var data = img.data;
                var len = data.length; // Length of data array.

                for (var i = 0; i < len;) {

                
                    let percent = data[i] / 255;
                    data[i] = data[i]*(1-percent) + (color.R*percent);
                    i++;
                    percent = data[i] / 255;
                    data[i] = data[i]*(1-percent) + (color.G*percent);
                    i++;
                    percent = data[i] / 255;
                    data[i] = data[i]*(1-percent) + (color.B*percent);
                    i++;
                    // data[i] = data[i] * color.A/255;
                    i++; // move the transparency offset
                }

                var canvas2 = document.createElement('canvas');
                var ctx2 = canvas2.getContext('2d');
                canvas2.width = this.Image.width;
                canvas2.height = this.Image.height;
                ctx2.putImageData(img, 0, 0);

                var image = new Image();
                image.src = canvas2.toDataURL();
                this._colorCache[color.ToHEX()] = image;
            }
        }else{
            this._colorCache[color.ToHEX()] = this.Image;
        }
        return this._colorCache[color.ToHEX()];
    }

    private hasCacheColor(color:Color):boolean{
       return this._colorCache[color.ToHEX()] !== undefined;
    }


    

}