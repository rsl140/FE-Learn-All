var Local = function() {
	// 游戏对象
	var game;
	// 时间间隔
	var INTERVAL = 500;
	// 定时器
	var timer = null;
	// 时间计数器
	var timeCount = 0;
	// 时间
	var time = 0;
	//绑定键盘事件
	var bindKeyEvent = function() {
		document.onkeydown = function(e) {
			if(e.keyCode == 38) {// 旋转 up
				game.rotate();
			} else if(e.keyCode == 39) { // 右 right
				game.right();
			} else if(e.keyCode == 40) { // 下 down
				game.down();
			} else if(e.keyCode == 37) { // 左 left
				game.left();
			} else if(e.keyCode == 32) { // 下落 space
				game.fall();
			} else if(e.keyCode == 78) { // 重新开始 N
				newGame();
			} else if(e.keyCode == 80) { // 暂停 P
				pause();
			}
		}
	}
	// 绑定点击事件
	var bindClickEvent = function() {
		document.onclick = function(e) {
            var target = e.target.getAttribute("id");
            if (target === "up") {
                game.rotate();
            } else if (target === "right") {
                game.right();
            } else if (target === "down") {
                game.down();
            } else if (target === "left") {
                game.left();
            } else if (target === "fall") {
                game.fall();
            } else if (target === "pause") {
                pause();
            } else if (target === "new") {
                newGame();
            }
        }
	}
	// 移动
	var move = function() {
		timeFunc();
		if(!game.down()) {
			game.fixed();
			var line = game.checkClear();
			if(line) {
				// 通过分数加快速度
				var score =game.addScore(line);
				switch(score) {
					case 100:
						INTERVAL = 400;
						break;
					case 400:
						INTERVAL = 300;
						break;
					case 1000:
						INTERVAL = 200;
						break;
					case 2000:
						INTERVAL = 100;
						break;
				}
				clearInterval(timer);
				timer = null;
				timer = setInterval(move, INTERVAL);
			}
			var gameOver = game.checkGameOver();
			if(gameOver) {
				game.gameOver(false);
				stop();
			}else{
				game.performNext(generateType(), generateDir());
			}
		}
	}
	// 计时函数
	var timeFunc = function() {
		timeCount = timeCount + 1;
		if(timeCount == 5) {
			timeCount = 0;
			time = time + 1;
			game.setTime(time);
		}
	}
	// 随机生成一个方块种类
	var generateType = function() {
		return Math.ceil(Math.random() * 7) - 1;
	}

	// 随机生成一个旋转样式
	var generateDir = function() {
		return Math.ceil(Math.random() * 4) - 1;
	}
	// 开始
	var start = function() {
		var doms = {
			gameDiv: document.getElementById('game'),
			nextDiv: document.getElementById('next'),
			timeDiv: document.getElementById('time'),
			scoreDiv: document.getElementById('score'),
			resultDiv: document.getElementById('gameover')

		}
		game = new Game();
		game.init(doms, generateType(), generateDir());
		bindKeyEvent();
		bindClickEvent();
		game.performNext(generateType(), generateDir());
		timer = setInterval(move, INTERVAL);
	}
	// 结束
	var stop = function() {
		if(timer) {
			clearInterval(timer);
			timer = null;
		}
		// document.onkeydown = null;
	}
	// 暂停
	var pause = function() {
		if(timer){
			clearInterval(timer);
			timer = null;
		} else {
			timer = setInterval(move, INTERVAL);
		}
	}
	// 重新开始
	var newGame = function() {
		document.getElementById("gameover").innerHTML = "";
        document.getElementById("time").innerHTML = "0";
        document.getElementById("score").innerHTML = "0";
        stop();
        time = 0;
        start();
	}

	// 导出API
	this.start = start;
}