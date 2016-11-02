interface TileData{
    x:number;
    y:number;
    walkable:boolean;
    image: string;
} 

var config:TileData[] = [
    {x:0,y:0,walkable:true,image:"true_jpg"},
    {x:1,y:0,walkable:true,image:"true_jpg"},
    {x:2,y:0,walkable:true,image:"true_jpg"},
    {x:3,y:0,walkable:false,image:"false_jpg"},
    {x:4,y:0,walkable:true,image:"true_jpg"},
    {x:5,y:0,walkable:true,image:"true_jpg"},
    {x:6,y:0,walkable:true,image:"true_jpg"},
    {x:7,y:0,walkable:true,image:"true_jpg"},
    {x:8,y:0,walkable:true,image:"true_jpg"},
    {x:9,y:0,walkable:true,image:"true_jpg"},
    {x:0,y:1,walkable:true,image:"true_jpg"},
    {x:1,y:1,walkable:false,image:"false_jpg"},
    {x:2,y:1,walkable:true,image:"true_jpg"},
    {x:3,y:1,walkable:false,image:"false_jpg"},
    {x:4,y:1,walkable:false,image:"false_jpg"},
    {x:5,y:1,walkable:false,image:"false_jpg"},
    {x:6,y:1,walkable:false,image:"false_jpg"},
    {x:7,y:1,walkable:true,image:"true_jpg"},
    {x:8,y:1,walkable:false,image:"false_jpg"},
    {x:9,y:1,walkable:true,image:"true_jpg"},
    {x:0,y:2,walkable:true,image:"true_jpg"},
    {x:1,y:2,walkable:false,image:"false_jpg"},
    {x:2,y:2,walkable:true,image:"true_jpg"},
    {x:3,y:2,walkable:true,image:"true_jpg"},
    {x:4,y:2,walkable:true,image:"true_jpg"},
    {x:5,y:2,walkable:true,image:"true_jpg"},
    {x:6,y:2,walkable:true,image:"true_jpg"},
    {x:7,y:2,walkable:true,image:"true_jpg"},
    {x:8,y:2,walkable:false,image:"false_jpg"},
    {x:9,y:2,walkable:true,image:"true_jpg"},
    {x:0,y:3,walkable:true,image:"true_jpg"},
    {x:1,y:3,walkable:false,image:"false_jpg"},
    {x:2,y:3,walkable:false,image:"false_jpg"},
    {x:3,y:3,walkable:false,image:"false_jpg"},
    {x:4,y:3,walkable:true,image:"true_jpg"},
    {x:5,y:3,walkable:true,image:"true_jpg"},
    {x:6,y:3,walkable:false,image:"false_jpg"},
    {x:7,y:3,walkable:false,image:"false_jpg"},
    {x:8,y:3,walkable:false,image:"false_jpg"},
    {x:9,y:3,walkable:true,image:"true_jpg"},
    {x:0,y:4,walkable:true,image:"true_jpg"},
    {x:1,y:4,walkable:true,image:"true_jpg"},
    {x:2,y:4,walkable:true,image:"true_jpg"},
    {x:3,y:4,walkable:false,image:"false_jpg"},
    {x:4,y:4,walkable:true,image:"true_jpg"},
    {x:5,y:4,walkable:true,image:"true_jpg"},
    {x:6,y:4,walkable:false,image:"false_jpg"},
    {x:7,y:4,walkable:true,image:"true_jpg"},
    {x:8,y:4,walkable:true,image:"true_jpg"},
    {x:9,y:4,walkable:true,image:"true_jpg"},
    {x:0,y:5,walkable:true,image:"true_jpg"},
    {x:1,y:5,walkable:true,image:"true_jpg"},
    {x:2,y:5,walkable:true,image:"true_jpg"},
    {x:3,y:5,walkable:false,image:"false_jpg"},
    {x:4,y:5,walkable:true,image:"true_jpg"},
    {x:5,y:5,walkable:true,image:"true_jpg"},
    {x:6,y:5,walkable:false,image:"false_jpg"},
    {x:7,y:5,walkable:true,image:"true_jpg"},
    {x:8,y:5,walkable:true,image:"true_jpg"},
    {x:9,y:5,walkable:true,image:"true_jpg"}, 
    {x:0,y:6,walkable:true,image:"true_jpg"},
    {x:1,y:6,walkable:false,image:"false_jpg"},
    {x:2,y:6,walkable:false,image:"false_jpg"},
    {x:3,y:6,walkable:false,image:"false_jpg"},
    {x:4,y:6,walkable:false,image:"false_jpg"},
    {x:5,y:6,walkable:false,image:"false_jpg"},
    {x:6,y:6,walkable:false,image:"false_jpg"},
    {x:7,y:6,walkable:false,image:"false_jpg"},
    {x:8,y:6,walkable:false,image:"false_jpg"},
    {x:9,y:6,walkable:true,image:"true_jpg"},
    {x:0,y:7,walkable:true,image:"true_jpg"},
    {x:1,y:7,walkable:false,image:"false_jpg"},
    {x:2,y:7,walkable:true,image:"true_jpg"},
    {x:3,y:7,walkable:true,image:"true_jpg"},
    {x:4,y:7,walkable:true,image:"true_jpg"},
    {x:5,y:7,walkable:true,image:"true_jpg"},
    {x:6,y:7,walkable:true,image:"true_jpg"},
    {x:7,y:7,walkable:true,image:"true_jpg"},
    {x:8,y:7,walkable:false,image:"false_jpg"},
    {x:9,y:7,walkable:true,image:"true_jpg"},
    {x:0,y:8,walkable:true,image:"true_jpg"},
    {x:1,y:8,walkable:false,image:"false_jpg"},
    {x:2,y:8,walkable:true,image:"true_jpg"},
    {x:3,y:8,walkable:false,image:"false_jpg"},
    {x:4,y:8,walkable:false,image:"false_jpg"},
    {x:5,y:8,walkable:false,image:"false_jpg"},
    {x:6,y:8,walkable:false,image:"false_jpg"},
    {x:7,y:8,walkable:true,image:"true_jpg"},
    {x:8,y:8,walkable:false,image:"false_jpg"},
    {x:9,y:8,walkable:true,image:"true_jpg"},
    {x:0,y:9,walkable:true,image:"true_jpg"},
    {x:1,y:9,walkable:true,image:"true_jpg"},
    {x:2,y:9,walkable:true,image:"true_jpg"},
    {x:3,y:9,walkable:true,image:"true_jpg"},
    {x:4,y:9,walkable:true,image:"true_jpg"},
    {x:5,y:9,walkable:true,image:"true_jpg"},
    {x:6,y:9,walkable:false,image:"false_jpg"},
    {x:7,y:9,walkable:true,image:"true_jpg"},
    {x:8,y:9,walkable:true,image:"true_jpg"},
    {x:9,y:9,walkable:true,image:"true_jpg"},
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


class TileMap extends egret.DisplayObjectContainer{

    public static TileSize = 64;
    public static Playerwidth = 64;
    public static Playerheight = 64;
    public static PlayerSpeed = 10;


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
        var player = new egret.Bitmap();
        player.width = TileMap.Playerwidth;
        player.height = TileMap.Playerheight;
        var playerX = 0;
        var playerY = 0;
        player.texture = RES.getRes("egret_icon_png");
        this.addChild(player);

        var playerTween;

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
                    playerTween.to({x : pathX, y: pathY}, distance/TileMap.PlayerSpeed, egret.Ease.sineIn).call(function(){ });  
                }
            }
        },this);
    }
}





















