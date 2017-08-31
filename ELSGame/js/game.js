var Game = function() {
	// dom元素
	var gameDiv;
	var nextDiv;
	// 游戏矩阵
	var gameData = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	];
	// 当前方块
	var cur;
	// 下一个方块
	var next;

	// 每格div
	var nextDivs = [];
	var gameDivs = [];

	// 初始化Div
	var initDiv = function(container, data, divs) {
		for (var i = 0; i < data.length; i++) {
			var div = [];
			for (var j = 0; j < data[0].length; j++) {
				var newNode = document.createElement('div');
				newNode.className = 'none';
				newNode.style.top = (i*20) + 'px';
				newNode.style.left = (j*20) + 'px';
				container.appendChild(newNode);
				div.push(newNode);
			}

			divs.push(div);

		}
	}

	// 刷新Div
	var refreshDiv = function(data, divs) {
		for (var i = 0; i < data.length; i++) {
			for (var j = 0; j < data[0].length; j++) {
				if(data[i][j] == 0) {
					divs[i][j].className = "none";
				} else if(data[i][j] == 1) {
					divs[i][j].className = "done";
				} else if(data[i][j] == 2) {
					divs[i][j].className = "current";
				}
			}
		}
	}
	// 监听是否溢出
	var check = function(pos, x, y) {
		if(pos.x + x < 0) {
			return false;
		} else if(pos.x + x >= gameData.length) {// 超出下边界
			return false;
		} else if(pos.y + y < 0) {// 超出左边界
			return false;
		} else if(pos.y + y >= gameData[0].length) {// 超出右边界
			return false;
		} else if(gameData[pos.x + x][pos.y + y] == 1) {// 该位置已有方块
			return false;
		} else {
			return true;
		}
	}
	// 检测数据是否合法
	var isValid = function(pos, data) {
		for(var i = 0; i < data.length; i++) {
			for (var j = 0; j < data[0].length; j++) {
				if(data[i][j] != 0) {
					if(!check(pos, i, j)) {
						return false;
					}
				}
			}
		}
		return true;
	}

	// 清除数据
	var clearData = function() {
		for (var i = 0; i < cur.data.length; i++) {
			for (var j = 0; j < cur.data[0].length; j++) {
				if(check(cur.origin, i, j)) {
					gameData[cur.origin.x + i][cur.origin.y + j] = 0;
				}
			}
		}
	}

	// 设置数据
	var setData = function() {
		for (var i = 0; i < cur.data.length; i++) {
			for (var j = 0; j < cur.data[0].length; j++) {
				if(check(cur.origin, i, j)) {
					gameData[cur.origin.x + i][cur.origin.y + j] = cur.data[i][j];
				}
			}
		}
	}

	// 下移
	var down = function() {
		if(cur.canDown(isValid)) {
			clearData();
			cur.down();
			setData();
			refreshDiv(gameData, gameDivs);
			return true;//判断是否可以继续向下
		} else {
			return false;
		}
	}

	// 旋转
	var rotate = function() {
		if(cur.canRotate(isValid)) {
			clearData();
			cur.rotate();
			setData();
			refreshDiv(gameData, gameDivs);
		}
		
	}
		// 右移
	var right = function() {
		if(cur.canRight(isValid)) {
			clearData();
			cur.right();
			setData();
			refreshDiv(gameData, gameDivs);
		}
		
	}
		// 左移
	var left = function() {
		if(cur.canLeft(isValid)) {
			clearData();
			cur.left();
			setData();
			refreshDiv(gameData, gameDivs);
		}
		
	}

	// 初始化
	var init = function(doms) {
		gameDiv = doms.gameDiv;
		nextDiv = doms.nextDiv;
		cur = new Square();
		next = new Square();
		initDiv(gameDiv, gameData, gameDivs);//游戏主体
		initDiv(nextDiv, next.data, nextDivs);//下一个
		cur.origin.x = 10;
		cur.origin.y = 5;
		setData();
		refreshDiv(gameData, gameDivs);
		refreshDiv(next.data, nextDivs);
	}

	// 导出API
	this.init = init;
	this.down = down;
	this.left = left;
	this.right = right;
	this.rotate = rotate;
	this.fall = function() {while(down());}
}