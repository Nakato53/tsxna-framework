import GameTime from './GameTime';
import GameCanvas from './GameCanvas';
import Keyboard from './Input/Keyboard';
import Mouse from './Input/Mouse';
import ContentLoader from './Content/ContentLoader';

let gameLoop = require('./GameLoop');

export default class Game{
    
    protected Canvas:GameCanvas;
    protected Content:ContentLoader;
    private _totalTime:number;
    private _gameLoop: any;


    constructor(){
        this.Content = new ContentLoader();
        this._totalTime = 0;
        this.SetupInput();
        setTimeout( () => {this.LoadContent();}, 100);

        window.TSXNA.Game = this;
    }

    private SetupInput(){
        Keyboard.GetState();
        Mouse.GetState();
        window.TSXNA.Input.onLoadKeyboard();
        window.TSXNA.Input.onLoadMouse();
    }

    public get IsMouseVisible():boolean{
        return this.Canvas.IsMouseVisible;
    }

    public set IsMouseVisible(visible:boolean){
        this.Canvas.IsMouseVisible = visible;        
    }

    public async LoadContent():Promise<void>{

        if(this.Canvas === undefined || this.Canvas === null){
            throw new Error("Game.Canvas must be define as GameCanvas Instance");
        } 

        this._gameLoop = new gameLoop({
            renderer: this.Canvas.context,
            fps: 60
		});

		this._gameLoop.on('update', (dt:number) => {
            let gameTime = new GameTime();
            gameTime.ElapsedGameTime = dt;
            this._totalTime+=dt;
            gameTime.TotalGameTime = this._totalTime;

			this.Update(gameTime);
		});
		
		this._gameLoop.on('draw', (ctx:CanvasRenderingContext2D)=>{
			this.Draw();
		});

		(<any>this.Canvas).resizeWindow();
		this._gameLoop.start();
    }

    public Update(gameTime:GameTime):void{
        if(this.Canvas === undefined || this.Canvas === null){
            throw new Error("Game.Canvas must be define as GameCanvas Instance");
        } 

    }

    public Draw(){

    }    
}