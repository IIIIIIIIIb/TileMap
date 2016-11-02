class TileNode {

    public x : number;
    public y : number;
    public f : number;
    public g : number;
    public h : number;
    public walkable : boolean;
    public parent : TileNode;
    public costMultiplier : number = 1.0;

    public constructor(x:number,y:number) {

        this.x = x;
        this.y = y;
    }

}

class Grid {

    public Nodes;
    public StartNode : TileNode;
    public EndNode : TileNode;
    public NumCols : number;
    public NumRows : number;

    public constructor(numCols:number,numRows:number) {

        this.NumCols = numCols;
        this.NumRows = numRows;
        this.Nodes = new Array();

        for(var i = 0; i < this.NumCols; i++) {

            this.Nodes[i] =  new Array();

            for(var j = 0; j < this.NumRows; j++) {
                
                this.Nodes[i][j] = new TileNode(i,j);
            }
        }
    }
    public setStartNode(x:number,y:number):void {

        this.StartNode = this.Nodes[x][y] as TileNode;
    }

    public getStartNode():TileNode {

        return this.StartNode;
    }


    public getNode(x:number,y:number) : TileNode {

        return this.Nodes[x][y] as TileNode;
    }

    public setEndNode(x:number,y:number):void {

        this.EndNode = this.Nodes[x][y] as TileNode; 
    }

    public getEndNode():TileNode {

        return this.EndNode;
    }

    
    public setWalkable(x:number,y:number,value:boolean) {

        this.Nodes[x][y].walkable = value;
    }

    public getNumCols():number {

        return this.NumCols;
    }

    public getNumRows():number {

        return this.NumRows;
    }

}