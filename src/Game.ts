import GameTime from './GameTime';
import GameCanvas from './GameCanvas';
import Keyboard from './Input/Keyboard';
import Mouse from './Input/Mouse';
import Keys from './Input/Keys';
import Utils from './Utils';
let gameLoop = require('./GameLoop');

export default class Game{
    
    protected canvas:GameCanvas;
    private _totalTime:number;
    private _gameLoop: any;

    constructor(){
        this._totalTime = 0;
        this.SetupInput();
        setTimeout( () => {this.LoadContent();}, 100);

        window.TSXNA.Game = this;
    }

    private SetupInput(){
        window.TSXNA.Input.onLoadKeyboard();
        window.TSXNA.Input.onLoadMouse();
    }

    public async LoadContent():Promise<void>{

        if(this.canvas === undefined || this.canvas === null){
            throw new Error("Game.Canvas must be define as GameCanvas Instance");
        } 

        this._gameLoop = new gameLoop({
            renderer: this.canvas.context,
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

		
		this._gameLoop.start();
    }

    public Update(gameTime:GameTime):void{
        if(this.canvas === undefined || this.canvas === null){
            throw new Error("Game.Canvas must be define as GameCanvas Instance");
        } 

    }

    public Draw(){

    }    
}