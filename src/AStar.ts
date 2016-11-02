class AStar {
		  ClosedList: TileNode[] = [];  

		  OpenList: TileNode[] = [];

		  PATH: TileNode[] = [];

		  GRID: Grid;

		  StartTile: TileNode;
		  EndTile: TileNode;

		  
          //设置启发函数
	      heuristic: Function = this.diagonal;

		  straightCost: number = 1.0;
		  diagCost: number = Math.SQRT2;


	      public findPath(grid: Grid): Boolean {
			  
			  this.GRID = grid;
			  this.OpenList = new Array();
			  this.ClosedList = new Array();
			  this.StartTile = this.GRID.StartNode;
			  this.EndTile = this.GRID.EndNode;
			  
			  this.StartTile.g = 0;
			  this.StartTile.h = this.heuristic(this.StartTile);
			  this.StartTile.f = this.StartTile.g + this.StartTile.h;

			  return this.search();

			}


			//一直到找到路为止
			public search(): Boolean {
				
				var currentNode: TileNode = this.StartTile;

				while (currentNode != this.EndTile) {
					
					//保证节点不在地图外
					var startX: number = Math.max(0, currentNode.x - 1);
					var endX: number = Math.min(this.GRID.NumCols - 1, currentNode.x + 1);
					var startY: number = Math.max(0, currentNode.y - 1);
					var endY: number = Math.min(this.GRID.NumRows - 1, currentNode.y + 1);
					
					for (var i: number = startX; i <= endX; i++) {
						
						for (var j: number = startY; j <= endY; j++) {
							
							var test: TileNode = this.GRID.Nodes[i][j];

							//检测节点为当前节点或不可通过时，无需计算代价
							if (test == currentNode || !test.walkable||!this.GRID.Nodes[currentNode.x][test.y].walkable||!this.GRID.Nodes[test.x][currentNode.y].walkable){
								continue;
							}

							var cost: number = this.straightCost;
							if (!((currentNode.x == test.x) || (currentNode.y == test.y))){

								cost = this.diagCost;
							}
							
							var g: number = currentNode.g + cost;
							var h: number = this.heuristic(test);
							var f: number = g + h;
							
							if (this.isOpen(test) || this.isClosed(test)) {
								if (test.f > f) {
									test.f = f;
									test.g = g;
									test.h = h;
									test.parent = currentNode;
								}
							}else{
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
					
					currentNode = this.OpenList.shift() as TileNode;
				}
				
				this.buildPath();
				
				return true;
			}
			
			
			public isOpen(node: TileNode): Boolean {
				
				for (var i: number = 0; i < this.OpenList.length; i++) {

					if (this.OpenList[i] == node) {

						return true;
					}
				}

				return false;
			}
			
			
			
			public isClosed(node: TileNode): Boolean {
				
				for (var i: number = 0; i < this.ClosedList.length; i++) {
					
					if (this.ClosedList[i] == node) {
						
						return true;
					}
				}
				
				return false;
			}
			
			

			public buildPath(): void {
				
				this.PATH = new Array();
				var node: TileNode = this.EndTile;
				this.PATH.push(node);

				while (node != this.StartTile){

					node = node.parent;
					this.PATH.unshift(node);  
				}
			}
			
			

			public manhattan(node: TileNode): number {
				
				return Math.abs(this.EndTile.x - node.x) * this.straightCost + Math.abs(this.EndTile.y - node.y) * this.straightCost;
			}
			
			
			
			public euclidian(node: TileNode): number {
				
				var dx: number = this.EndTile.x - node.x;
				var dy: number = this.EndTile.y - node.y;
				
				return Math.sqrt(dx * dx + dy * dy) * this.straightCost;
			}
			
			
			
			public diagonal(node: TileNode): number {
				
				var dx: number = Math.abs(this.EndTile.x - node.x);
				var dy: number = Math.abs(this.EndTile.y - node.y);
				
				var diag: number = Math.min(dx, dy);
				var straight: number = dx + dy;
				
				return this.diagCost * diag + this.straightCost * (straight - 2 * diag);
				
			}
			
		}