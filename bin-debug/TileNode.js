var TileNode = (function () {
    function TileNode(x, y) {
        this.costMultiplier = 1.0;
        this.x = x;
        this.y = y;
    }
    var d = __define,c=TileNode,p=c.prototype;
    return TileNode;
}());
egret.registerClass(TileNode,'TileNode');
var Grid = (function () {
    function Grid(numCols, numRows) {
        this.NumCols = numCols;
        this.NumRows = numRows;
        this.Nodes = new Array();
        for (var i = 0; i < this.NumCols; i++) {
            this.Nodes[i] = new Array();
            for (var j = 0; j < this.NumRows; j++) {
                this.Nodes[i][j] = new TileNode(i, j);
            }
        }
    }
    var d = __define,c=Grid,p=c.prototype;
    p.setStartNode = function (x, y) {
        this.StartNode = this.Nodes[x][y];
    };
    p.getStartNode = function () {
        return this.StartNode;
    };
    p.getNode = function (x, y) {
        return this.Nodes[x][y];
    };
    p.setEndNode = function (x, y) {
        this.EndNode = this.Nodes[x][y];
    };
    p.getEndNode = function () {
        return this.EndNode;
    };
    p.setWalkable = function (x, y, value) {
        this.Nodes[x][y].walkable = value;
    };
    p.getNumCols = function () {
        return this.NumCols;
    };
    p.getNumRows = function () {
        return this.NumRows;
    };
    return Grid;
}());
egret.registerClass(Grid,'Grid');
//# sourceMappingURL=TileNode.js.map