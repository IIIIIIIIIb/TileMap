var AStar = (function () {
    function AStar() {
        this.ClosedList = [];
        this.OpenList = [];
        this.PATH = [];
        //设置启发函数
        this.heuristic = this.diagonal;
        this.straightCost = 1.0;
        this.diagCost = Math.SQRT2;
    }
    var d = __define,c=AStar,p=c.prototype;
    p.findPath = function (grid) {
        this.GRID = grid;
        this.OpenList = new Array();
        this.ClosedList = new Array();
        this.StartTile = this.GRID.StartNode;
        this.EndTile = this.GRID.EndNode;
        this.StartTile.g = 0;
        this.StartTile.h = this.heuristic(this.StartTile);
        this.StartTile.f = this.StartTile.g + this.StartTile.h;
        return this.search();
    };
    //一直到找到路为止
    p.search = function () {
        var currentNode = this.StartTile;
        while (currentNode != this.EndTile) {
            //保证节点不在地图外
            var startX = Math.max(0, currentNode.x - 1);
            var endX = Math.min(this.GRID.NumCols - 1, currentNode.x + 1);
            var startY = Math.max(0, currentNode.y - 1);
            var endY = Math.min(this.GRID.NumRows - 1, currentNode.y + 1);
            for (var i = startX; i <= endX; i++) {
                for (var j = startY; j <= endY; j++) {
                    var test = this.GRID.Nodes[i][j];
                    //检测节点为当前节点或不可通过时，无需计算代价
                    if (test == currentNode || !test.walkable || !this.GRID.Nodes[currentNode.x][test.y].walkable || !this.GRID.Nodes[test.x][currentNode.y].walkable) {
                        continue;
                    }
                    var cost = this.straightCost;
                    if (!((currentNode.x == test.x) || (currentNode.y == test.y))) {
                        cost = this.diagCost;
                    }
                    var g = currentNode.g + cost;
                    var h = this.heuristic(test);
                    var f = g + h;
                    if (this.isOpen(test) || this.isClosed(test)) {
                        if (test.f > f) {
                            test.f = f;
                            test.g = g;
                            test.h = h;
                            test.parent = currentNode;
                        }
                    }
                    else {
                        test.f = f;
                        test.g = g;
                        test.h = h;
                        test.parent = currentNode;
                        this.OpenList.push(test);
                    }
                }
            }
            this.ClosedList.push(currentNode);
            //待查列表
            if (this.OpenList.length == 0) {
                return false;
            }
            this.OpenList.sort(function (a, b) {
                return a.f - b.f;
            });
            currentNode = this.OpenList.shift();
        }
        this.buildPath();
        return true;
    };
    p.isOpen = function (node) {
        for (var i = 0; i < this.OpenList.length; i++) {
            if (this.OpenList[i] == node) {
                return true;
            }
        }
        return false;
    };
    p.isClosed = function (node) {
        for (var i = 0; i < this.ClosedList.length; i++) {
            if (this.ClosedList[i] == node) {
                return true;
            }
        }
        return false;
    };
    p.buildPath = function () {
        this.PATH = new Array();
        var node = this.EndTile;
        this.PATH.push(node);
        while (node != this.StartTile) {
            node = node.parent;
            this.PATH.unshift(node);
        }
    };
    p.manhattan = function (node) {
        return Math.abs(this.EndTile.x - node.x) * this.straightCost + Math.abs(this.EndTile.y - node.y) * this.straightCost;
    };
    p.euclidian = function (node) {
        var dx = this.EndTile.x - node.x;
        var dy = this.EndTile.y - node.y;
        return Math.sqrt(dx * dx + dy * dy) * this.straightCost;
    };
    p.diagonal = function (node) {
        var dx = Math.abs(this.EndTile.x - node.x);
        var dy = Math.abs(this.EndTile.y - node.y);
        var diag = Math.min(dx, dy);
        var straight = dx + dy;
        return this.diagCost * diag + this.straightCost * (straight - 2 * diag);
    };
    return AStar;
}());
egret.registerClass(AStar,'AStar');
//# sourceMappingURL=AStar.js.map