interface TileData{
    x:number;
    y:number;
    walkable:boolean;
    image: string;
} 

var config:TileData[] = [
    {x:0,y:0,walkable:true,image:"true_png"},
    {x:1,y:0,walkable:true,image:"true_png"},
    {x:2,y:0,walkable:true,image:"true_png"},
    {x:3,y:0,walkable:false,image:"false_png"},
    {x:4,y:0,walkable:true,image:"true_png"},
    {x:5,y:0,walkable:true,image:"true_png"},
    {x:6,y:0,walkable:true,image:"true_png"},
    {x:7,y:0,walkable:true,image:"true_png"},
    {x:8,y:0,walkable:true,image:"true_png"},
    {x:9,y:0,walkable:true,image:"true_png"},
    {x:0,y:1,walkable:true,image:"true_png"},
    {x:1,y:1,walkable:false,image:"false_png"},
    {x:2,y:1,walkable:true,image:"true_png"},
    {x:3,y:1,walkable:false,image:"false_png"},
    {x:4,y:1,walkable:false,image:"false_png"},
    {x:5,y:1,walkable:false,image:"false_png"},
    {x:6,y:1,walkable:false,image:"false_png"},
    {x:7,y:1,walkable:true,image:"true_png"},
    {x:8,y:1,walkable:false,image:"false_png"},
    {x:9,y:1,walkable:true,image:"true_png"},
    {x:0,y:2,walkable:true,image:"true_png"},
    {x:1,y:2,walkable:false,image:"false_png"},
    {x:2,y:2,walkable:true,image:"true_png"},
    {x:3,y:2,walkable:true,image:"true_png"},
    {x:4,y:2,walkable:true,image:"true_png"},
    {x:5,y:2,walkable:true,image:"true_png"},
    {x:6,y:2,walkable:true,image:"true_png"},
    {x:7,y:2,walkable:true,image:"true_png"},
    {x:8,y:2,walkable:false,image:"false_png"},
    {x:9,y:2,walkable:true,image:"true_png"},
    {x:0,y:3,walkable:true,image:"true_png"},
    {x:1,y:3,walkable:false,image:"false_png"},
    {x:2,y:3,walkable:false,image:"false_png"},
    {x:3,y:3,walkable:false,image:"false_png"},
    {x:4,y:3,walkable:true,image:"true_png"},
    {x:5,y:3,walkable:true,image:"true_png"},
    {x:6,y:3,walkable:false,image:"false_png"},
    {x:7,y:3,walkable:false,image:"false_png"},
    {x:8,y:3,walkable:false,image:"false_png"},
    {x:9,y:3,walkable:true,image:"true_png"},
    {x:0,y:4,walkable:true,image:"true_png"},
    {x:1,y:4,walkable:true,image:"true_png"},
    {x:2,y:4,walkable:true,image:"true_png"},
    {x:3,y:4,walkable:false,image:"false_png"},
    {x:4,y:4,walkable:true,image:"true2_png"},
    {x:5,y:4,walkable:true,image:"true2_png"},
    {x:6,y:4,walkable:false,image:"false_png"},
    {x:7,y:4,walkable:true,image:"true_png"},
    {x:8,y:4,walkable:true,image:"true_png"},
    {x:9,y:4,walkable:true,image:"true_png"},
    {x:0,y:5,walkable:true,image:"true_png"},
    {x:1,y:5,walkable:true,image:"true_png"},
    {x:2,y:5,walkable:true,image:"true_png"},
    {x:3,y:5,walkable:false,image:"false_png"},
    {x:4,y:5,walkable:true,image:"true2_png"},
    {x:5,y:5,walkable:true,image:"true2_png"},
    {x:6,y:5,walkable:false,image:"false_png"},
    {x:7,y:5,walkable:true,image:"true_png"},
    {x:8,y:5,walkable:true,image:"true_png"},
    {x:9,y:5,walkable:true,image:"true_png"}, 
    {x:0,y:6,walkable:true,image:"true_png"},
    {x:1,y:6,walkable:false,image:"false_png"},
    {x:2,y:6,walkable:false,image:"false_png"},
    {x:3,y:6,walkable:false,image:"false_png"},
    {x:4,y:6,walkable:false,image:"false_png"},
    {x:5,y:6,walkable:false,image:"false_png"},
    {x:6,y:6,walkable:false,image:"false_png"},
    {x:7,y:6,walkable:false,image:"false_png"},
    {x:8,y:6,walkable:false,image:"false_png"},
    {x:9,y:6,walkable:true,image:"true_png"},
    {x:0,y:7,walkable:true,image:"true_png"},
    {x:1,y:7,walkable:false,image:"false_png"},
    {x:2,y:7,walkable:true,image:"true_png"},
    {x:3,y:7,walkable:true,image:"true_png"},
    {x:4,y:7,walkable:true,image:"true_png"},
    {x:5,y:7,walkable:true,image:"true_png"},
    {x:6,y:7,walkable:true,image:"true_png"},
    {x:7,y:7,walkable:true,image:"true_png"},
    {x:8,y:7,walkable:false,image:"false_png"},
    {x:9,y:7,walkable:true,image:"true_png"},
    {x:0,y:8,walkable:true,image:"true_png"},
    {x:1,y:8,walkable:false,image:"false_png"},
    {x:2,y:8,walkable:true,image:"true_png"},
    {x:3,y:8,walkable:false,image:"false_png"},
    {x:4,y:8,walkable:false,image:"false_png"},
    {x:5,y:8,walkable:false,image:"false_png"},
    {x:6,y:8,walkable:false,image:"false_png"},
    {x:7,y:8,walkable:true,image:"true_png"},
    {x:8,y:8,walkable:false,image:"false_png"},
    {x:9,y:8,walkable:true,image:"true_png"},
    {x:0,y:9,walkable:true,image:"true_png"},
    {x:1,y:9,walkable:true,image:"true_png"},
    {x:2,y:9,walkable:true,image:"true_png"},
    {x:3,y:9,walkable:true,image:"true_png"},
    {x:4,y:9,walkable:true,image:"true_png"},
    {x:5,y:9,walkable:true,image:"true_png"},
    {x:6,y:9,walkable:false,image:"false_png"},
    {x:7,y:9,walkable:true,image:"true_png"},
    {x:8,y:9,walkable:true,image:"true_png"},
    {x:9,y:9,walkable:true,image:"true_png"},
]

class Tile extends egret.DisplayObjectContainer{

    x : number;
    y : number;
    image : string;

    constructor(data:TileData){

        super();
        this.init(data);
    }

    private init(data){

        this.x = data.x * TileMap.TileSize;
        this.y = data.y * TileMap.TileSize;
        this.image = data.image;

        var bitmap = new egret.Bitmap();
        bitmap.width = TileMap.TileSize;
        bitmap.height = TileMap.TileSize;
        bitmap.texture = RES.getRes(this.image);
        this.addChild(bitmap);

    }


}


class Player extends egret.DisplayObjectContainer {
    public static PlayerSpeed = 2;
    public Polepic: egret.Bitmap;
    private statemachine: StateMachine = new StateMachine;
    public Modle: number = 0;
    public IdleAnime: Array<egret.Texture> = new Array<egret.Texture>();
    public MoveAnime: Array<egret.Texture> = new Array<egret.Texture>();
    public constructor() {
        super();
        this.Polepic = this.createBitmapByName("01_png");
        this.Polepic.width = 0.7*TileMap.TileSize;
        this.Polepic.height = TileMap.TileSize;
        this.addChild(this.Polepic);
        this.LoadPic(); 
    }
    private LoadPic() {
        var texture: egret.Texture = RES.getRes("01_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("01_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("02_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("03_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("04_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("05_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("06_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("07_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("08_png");
        this.IdleAnime.push(texture);
        texture = RES.getRes("09_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("2_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("3_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("4_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("5_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("6_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("7_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("8_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("9_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("10_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("11_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("12_png");
        this.MoveAnime.push(texture);
        texture = RES.getRes("13_png");
    }
    private createBitmapByName(name:string):egret.Bitmap {
        var result = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    public PlayAnimation(Ani: Array<egret.Texture>) {

        var count = 0;
        var Bit = this.Polepic;
        var M = this.Modle;
        //console.log("M:"+M);
        var timer: egret.Timer = new egret.Timer(100, 0);
        timer.addEventListener(egret.TimerEvent.TIMER, Play, this);
        timer.start();

        function Play() {
            Bit.texture = Ani[count];
            if (count < Ani.length - 1) {
                //   console.log(Ani.length+" "+count);
                count++;
            }
            else { count = 0; }
            if (this.Modle != M) {
                //console.log("tM:"+M+" nowM:"+this.Modle); 
                timer.stop();
            }
        }
    }

    public Move() {

        var MS: Move = new Move(this);
        this.statemachine.Reload(MS);

    }

    public Idle() {

        var IS: Idle = new Idle(this);
        this.statemachine.Reload(IS);


    }
}

class Idle implements State {
    private Player: Player;
    constructor(Player: Player) {
        this.Player = Player;
    }
    Load() {
        this.Player.Modle = 0;
        this.Player.PlayAnimation(this.Player.IdleAnime);

    }
    exit() {
       
    }

}



class Move implements State {
    private Player: Player;
    private X:number;
    private Y:number;
    constructor(Player: Player) {
        this.Player = Player;
    }

     Load() {
        this.Player.Modle++;
        this.Player.PlayAnimation(this.Player.MoveAnime);

    }
    exit() {
    }

}

interface State {
    Load();
    exit();

}

class StateMachine {
    private nowSta: State;

    public Reload(S: State): void {
        if (this.nowSta) {
            this.nowSta.exit();
        }
        this.nowSta = S;
        this.nowSta.Load();
    }
}


class TileMap extends egret.DisplayObjectContainer{

    public static TileSize = 64;
    public static Playerwidth = 64;
    public static Playerheight = 64;
    private timer: egret.Timer;
    private Time: number;


    constructor(){

        super();  
        this.init();

    }


    private init(){

        //地图
        for(var i = 0; i < config.length; i++){

            var data = config[i];                       
            var tile = new Tile(data);
            this.addChild(tile);
        }

        //角色
        var player = new Player();
        player.width = TileMap.Playerwidth;
        player.height = TileMap.Playerheight;
        var playerX = 0;
        var playerY = 0;
        this.addChild(player);
        //站立
        player.Idle();
        var playerTween;
        //this.timer = new egret.Timer(50, time);

        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,function(e: egret.TouchEvent){
            
            playerTween = egret.Tween.get(player);

            var localX = e.localX;
            var localY = e.localY;
            var gridX = Math.floor(localX / TileMap.TileSize);
            var gridY = Math.floor(localY / TileMap.TileSize);
            
            //tilenode节点
            var grid = new Grid(10, 10);

            for(var i = 0; i < config.length; i++){
                grid.setWalkable(config[i].x, config[i].y, config[i].walkable);
            }

            var aStar : AStar  = new AStar();
            grid.setStartNode(playerX, playerY);
            grid.setEndNode(gridX,gridY);

            //findPath
            if(aStar.findPath(grid))
            {
                var path = aStar.PATH; 
                var pathX = 0;
                var pathY = 0;      
                var distance = 0; 
                for(var i = 0; i < path.length; i++)
                    {
                        pathX = path[i].x * TileMap.TileSize;
                        pathY = path[i].y * TileMap.TileSize
                        playerX = gridX;
                        playerY = gridY;
                        distance = path.length*TileMap.TileSize;
                        console.log("distance:",distance);
                        //time = distance / Player.PlayerSpeed;
                        console.log("start");
                        //this.timer.start();
                        playerTween.to({x : pathX, y: pathY}, distance/Player.PlayerSpeed, egret.Ease.sineIn).call(function()
                        { 
                            console.log("time",distance/Player.PlayerSpeed);
                             if(Math.abs(player.x - (gridX * TileMap.TileSize)) < 10 && Math.abs(player.y - (gridY * TileMap.TileSize)) < 10){
                                   player.Idle();
                             }
                            
                         }); 
                         player.Move();
                        //player.PlayAnimation(player.IdleAnime);
                                       
                    }
                }
        },this);
    }
}





















