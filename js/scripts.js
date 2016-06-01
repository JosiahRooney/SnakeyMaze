lowLag.init({
	'sm2url': '/swf/',
	'urlPrefix':'fx/'
});
lowLag.load('game_over.wav');
lowLag.load('beep.wav');
lowLag.load('death.wav');

document.getElementById("bgvid").playbackRate = 1.0;

var world = [
	[ //
		[2,2,2,2,2,2,2], //
		[2,0,0,0,0,0,2], //
		[2,0,1,1,2,0,2], //
		[2,0,2,2,2,0,2], //
		[2,0,0,0,0,1,2], //
		[2,2,2,2,2,2,2]  //
	], //
	[
		[2,2,2,2,2,2,2,2,2,2,2,2,2], //
		[2,0,0,2,0,0,2,0,2,0,2,1,2], //
		[2,0,0,0,0,0,2,0,1,0,0,0,2], //
		[2,1,0,2,0,0,2,0,2,2,2,0,2], //
		[2,1,0,2,0,0,0,0,1,0,0,0,2], //
		[2,1,0,2,0,0,2,0,1,0,2,0,2], //
		[2,1,0,0,0,0,2,0,1,0,2,0,2], //
		[2,0,0,2,0,0,2,0,0,0,0,1,2], //
		[2,2,2,2,2,2,2,2,2,2,2,2,2]  //
	], //
	[
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], //
		[2,0,1,1,1,1,1,2,1,1,7,1,1,1,1,1,1,1,1,2,1,2], //
		[2,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1,2,1,2], //
		[2,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1,2,1,2], //
		[2,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1,2,1,2], //
		[2,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1,2,1,2], //
		[2,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1,2,1,2], //
		[2,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1,2,1,2], //
		[2,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1,2,1,2], //
		[2,1,1,1,1,1,7,2,1,1,1,1,2,1,1,1,2,1,1,2,1,2], //
		[2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,7,2,7,1,1,1,2], //
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]  //
	], //
	[
		[2,2,2,2,2,8,8,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], //
		[2,0,0,0,2,8,8,2,0,0,2,1,1,1,0,0,0,0,0,0,2,0,0,0,7,0,0,0,0,2], //
		[2,0,2,0,2,2,2,2,0,1,2,1,2,2,2,2,2,0,2,2,2,2,2,2,0,0,0,0,0,2], //
		[2,0,2,0,0,0,0,2,0,0,2,1,2,0,0,0,0,1,0,0,0,0,0,0,0,0,2,0,0,2], //
		[2,0,2,0,2,0,1,2,0,2,2,1,2,0,2,2,2,0,2,2,2,0,2,0,2,0,2,1,0,2], //
		[2,0,2,0,2,2,2,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,2,0,0,0,2,0,0,2], //
		[2,0,0,0,0,1,0,0,0,2,2,2,2,0,2,2,2,0,2,2,2,2,2,2,2,0,2,2,2,2], //
		[2,2,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,2], //
		[2,7,0,0,0,0,2,0,0,0,2,0,0,2,2,0,2,2,0,0,0,2,0,0,2,0,0,0,0,2], //
		[2,0,0,2,2,2,2,0,2,0,2,0,2,2,7,0,0,2,2,0,0,2,0,0,2,2,0,2,0,2], //
		[2,2,0,0,0,1,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2], //
		[2,2,2,0,0,0,2,0,1,0,2,0,2,2,0,0,0,2,2,0,2,2,0,0,0,0,0,2,8,8], //
		[2,0,2,2,0,0,2,0,0,0,2,0,7,2,0,1,0,2,0,0,0,2,2,0,7,0,2,2,2,2], //
		[2,0,1,2,2,0,0,0,0,2,2,0,0,2,0,0,0,2,0,0,1,0,2,2,0,0,0,0,0,2], //
		[2,0,0,1,2,2,0,0,2,2,0,0,0,0,0,2,0,0,0,0,0,2,2,0,2,0,0,1,0,2], //
		[2,0,2,0,7,0,0,0,0,0,0,0,0,2,0,1,0,2,0,0,2,2,0,0,2,0,1,1,0,2], //
		[2,0,0,0,0,0,2,2,2,0,0,0,2,2,0,0,0,2,2,0,0,0,0,0,2,0,0,0,0,2], //
		[2,2,2,2,2,2,2,8,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]  //
	], //
	[
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,8,8,2,2,2,2,2,2,2,2,2,2,2,2,2], //
		[2,0,7,0,1,0,7,2,7,1,0,0,0,2,8,8,8,2,0,0,1,0,0,0,0,0,1,0,0,2], //
		[2,0,1,0,7,0,7,2,7,1,0,2,0,2,8,8,8,2,0,2,2,2,2,0,2,2,2,2,0,2], //
		[2,2,2,2,2,0,7,2,7,1,0,2,0,2,8,8,8,2,0,2,0,0,0,0,0,0,0,2,0,2], //
		[2,0,2,0,0,0,7,2,7,1,0,2,0,2,2,2,2,2,0,2,1,2,2,2,2,2,1,2,0,2], //
		[2,0,2,0,1,0,7,2,7,1,0,2,0,2,0,1,0,2,0,2,0,2,0,0,0,2,0,2,0,2], //
		[2,0,0,0,1,0,7,2,7,1,0,2,0,0,0,1,0,0,0,2,0,2,0,0,0,2,0,2,0,2], //
		[2,2,2,0,1,0,0,0,0,0,0,2,0,0,2,2,2,0,0,2,0,2,0,1,0,2,0,2,0,2], //
		[8,8,2,0,0,0,0,0,0,0,0,0,0,0,2,8,2,0,0,2,0,2,0,1,0,2,0,2,0,2], //
		[8,8,2,0,2,2,2,0,0,0,0,0,0,0,2,2,2,0,0,2,0,2,0,1,0,2,0,2,0,2], //
		[8,8,2,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,2,0,2,0,0,0,2,0,2,0,2], //
		[8,8,2,2,2,0,2,2,2,2,2,2,0,2,0,1,0,2,0,2,0,2,0,2,0,2,0,2,0,2], //
		[8,8,2,0,2,0,0,0,0,0,1,2,0,2,0,1,0,2,0,2,0,2,0,2,0,2,0,2,0,2], //
		[2,2,2,0,0,0,0,2,0,2,0,2,0,2,2,2,2,2,0,2,1,2,0,2,0,2,1,2,0,2], //
		[2,0,0,0,2,0,0,2,1,0,0,2,0,2,8,8,8,2,0,2,0,0,0,0,0,0,0,2,0,2], //
		[2,1,0,2,2,0,0,2,2,2,0,2,0,2,8,8,8,2,0,2,2,2,2,2,2,2,2,2,0,2], //
		[2,0,0,2,0,1,0,0,0,7,0,0,1,2,8,8,8,2,0,0,1,0,0,0,0,0,1,0,0,2], //
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,8,8,2,2,2,2,2,2,2,2,2,2,2,2,2]  //
	], //
	[
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], //
		[2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2], //
		[2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2], //
		[2,0,2,0,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,0,2], //
		[2,0,2,0,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,0,2], //
		[2,0,2,0,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,0,2], //
		[2,0,2,0,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,0,2], //
		[2,0,2,0,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,0,2], //
		[2,0,2,0,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,0,2], //
		[2,0,2,0,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,0,2], //
		[2,0,2,0,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,0,2], //
		[2,0,2,0,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,0,2], //
		[2,0,2,0,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,0,2], //
		[2,0,2,0,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,0,2], //
		[2,0,2,1,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,0,2], //
		[2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2], //
		[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2], //
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]  //
	] //
]; //

var current_world = 0;

var world_storage = jQuery.extend(true, {}, world);

var snake = {
	x: 1,
	y: 1
}

var enemy = {
	x: 15,
	y: 10
}

var enemyShown = false;
var game_active = true;
var score = seg = 0;
var high_score = localStorage.getItem('highscore') || 0;
var lives = 3;

function displaySnake() {
	$('#snake').css('left', snake.x * 40);
	$('#snake').css('top', snake.y * 40);
}

function displayEnemy() {
	if ( current_world > 3 ) {
		$('#enemy').show();
		$('#enemy').css('left', enemy.x * 40);
		$('#enemy').css('top', enemy.y * 40);
	} else {
		$('#enemy').hide();
	}
}

function buildWorld() {
	var width = (world[current_world][0].length) * 40;
	$('.game').width(width);
	var output = "";
	showEnemy();

	for (var i = 0; i < world[current_world].length; i++) {
		output += "\n<div class='row'>";
		for (var j = 0; j < world[current_world][i].length; j++) {
			
			switch( world[current_world][i][j] ) {
				case 0:
				output += "<div class='empty'></div>";
				break;
				case 1:
				output += "<div class='item'><img src='img/orb.gif'></div>";
				break;
				case 2:
				output += "<div class='brick'></div>";
				break;
				case 3:
				output += "<div class='snake'></div>";
				break;
				case 4:
				output += "<div class='ghost'></div>";
				break;
				case 5:
				output += "<div class='bonus'></div>";
				break;
				case 7:
				output += "<div class='enemy_box'><img src='img/enemy.gif'></div>";
				break;
				case 8:
				output += "<div class='gap'></div>";
				break;
				case 9:
				output += "<div class='segment_box'></div>";
				break;
			}

		}
		output += "\n</div>";
	}

	document.getElementById('world').innerHTML = output;
}

function updateHighScore() {
	if (score > high_score) {
		high_score = score;
	}
	$('#high_score').text(high_score);
	localStorage.setItem('highscore',high_score);
}

function updateScore(num) {
	score += num;
	$('#score').text(score + "");
	updateHighScore();
}

function updateLives(num) {
	lives += num;
	$('#lives').text(lives + "");
}

function showEnemy() {
	if ( enemyShown == false ) {
		if ( current_world == 4 ) {
			setInterval(moveEnemy, 500);
			enemyShown = true;
		}
	}
}

buildWorld();
displaySnake();
displayEnemy();
updateScore(0);
updateLives(0);

function grow() {
	world[current_world][snake.y][snake.x] = 9;
	$('#snake').after('<div class="segment segment'+seg+'"></div>');
	$('.segment'+seg).css('top',snake.y * 40);
	$('.segment'+seg).css('left',snake.x * 40);
	seg++;
}

function shrink(){
	if ($('.segment').length > 0) {
		// There are segments, remove the oldest one
		var left = parseInt($('.segment').last().css('left')) / 40;
		var top = parseInt($('.segment').last().css('top')) / 40;
		world[current_world][top][left] = 0;
		$('.segment').last().remove();
	}
}

function death(num) {
	lowLag.play('death.wav');
	if ( num == 1 ) {
		alert('You were killed!');
	} else {
		alert("No moves left!");
	}
	updateLives(-1);
	updateScore(-(score));
	if ( lives == 0 ) {
		// Game over
		lowLag.play('game_over.wav');
		alert("Game over!!");
		$('#snake').hide();
		$('#enemy, .item img, .segment, .enemy_box img').remove();
		$('.enemy_box').addClass('empty').removeClass('enemy_box');
		setTimeout(function(){
			var newGame = confirm('New game?');
			if ( newGame == true ) {
				// New game
				$('#snake').show();
				$('.segment').remove();
				seg = score = current_world = 0;
				snake.x = snake.y = 1;
				updateLives(3);
				world = world_storage;
				world_storage = jQuery.extend(true, {}, world);
				buildWorld();
				displaySnake();
			}
		},300);
	} else {
		// Respawn
		$('.segment').remove();
		seg = 0;
		snake.x = snake.y = 1;
		displaySnake();
		world = world_storage;
		world_storage = jQuery.extend(true, {}, world);
		buildWorld();
	}
}

function win() {
	var coinsLeft = 0;
	for (var i = 0; i < world[current_world].length; i++) {
		for (var j = 0; j < world[current_world][i].length; j++) {
			if ( world[current_world][i][j] == 1 ) {
				coinsLeft += 1;
			}
		}
	}
	if (coinsLeft == 0) {
		alert("Level complete!");
		$('.segment').remove();
		snake.y = snake.x = 1;
		current_world += 1;
		if ( current_world == 5 ) {
			$('#enemy').hide();
			enemyShown = false;
		}
		if ( current_world > world.length - 1 ) {
			alert( "Thank you for playing my game. I will improve it over time. This is just the start of many game projects that I will create. I will be adding more levels as soon as I can. Check out my other stuff at rooneydev.com. Thanks!\n\n - Josiah" );
			$('.enemy_box').addClass('empty').removeClass('enemy_box');
			$('#snake').remove();
		} else {
			buildWorld();
			displaySnake();
			enemy.y = 28;
			enemy.x = 1;
			displayEnemy();
		}
	}
}

function moveEnemy() {

	if ( game_active ) {

		var random = Math.floor(Math.random() * 4);

		console.log(random);

		switch (random) {
			case 0:
			if ( world[current_world][enemy.y - 1][enemy.x] != 2 ) {
				world[current_world][enemy.y][enemy.x] = 0;
				enemy.y -= 1;
				displayEnemy();
			} else {
				console.log("Can't go up!");
			}
			break;
			case 1:
			if ( world[current_world][enemy.y + 1][enemy.x] != 2 ) {
				world[current_world][enemy.y][enemy.x] = 0;
				enemy.y += 1;
				displayEnemy();
			} else {
				console.log("Can't go down!");
			}
			break;
			case 2:
			if ( world[current_world][enemy.y][enemy.x - 1] != 2 ) {
				world[current_world][enemy.y][enemy.x] = 0;
				enemy.x -= 1;
				displayEnemy();
			} else {
				console.log("Can't go left!");
			}
			break;
			case 3:
			if ( world[current_world][enemy.y][enemy.x + 1] != 2 ) {
				world[current_world][enemy.y][enemy.x] = 0;
				enemy.x += 1;
				displayEnemy();
			} else {
				console.log("Can't go right!");
			}
			break;
		}

		world[current_world][enemy.y][enemy.x] = 7;
		buildWorld();

		if ( world[current_world][enemy.y][enemy.x] == 9 ) {
			death(1);
		}
		if ( world[current_world][enemy.y][enemy.x] == world[current_world][snake.y][snake.x] ) {
			death(1);
		}

	}
}

document.onkeydown = function(e) {
	if ( e.keyCode == 38 ) {
		e.preventDefault();
		$('#snake img').css('transform','rotate(180deg)');
			// Up
			if ( world[current_world][snake.y - 1][snake.x] != 2 && world[current_world][snake.y - 1][snake.x] != 9 ) {
				if ( world[current_world][snake.y - 1][snake.x] == 1 ) {
					// Grow
					lowLag.play('beep.wav');
					grow();
					snake.y -= 1;
				} else {
					// Delete last segment
					grow();
					shrink();
					snake.y -= 1;
				}
			}
		}
		if ( e.keyCode == 40 ) {
			e.preventDefault();
			$('#snake img').css('transform','rotate(0deg)');
			// Down
			if ( world[current_world][snake.y + 1][snake.x] != 2 && world[current_world][snake.y + 1][snake.x] != 9 ) {
				if ( world[current_world][snake.y + 1][snake.x] == 1 ) {
					// Grow
					lowLag.play('beep.wav');
					grow();
					snake.y += 1;
				} else {
					grow();
					shrink();
					snake.y += 1;
				}
			}
		}
		if ( e.keyCode == 37 ) {
			e.preventDefault();
			$('#snake img').css('transform','rotate(90deg)');
			// Left
			if ( world[current_world][snake.y][snake.x - 1] != 2 && world[current_world][snake.y][snake.x - 1] != 9 ) {
				if ( world[current_world][snake.y][snake.x - 1] == 1 ) {
					// Grow
					lowLag.play('beep.wav');
					grow();
					snake.x -= 1;
				} else {
					grow();
					shrink();
					snake.x -= 1;
				}
			}
		}
		if ( e.keyCode == 39 ) {
			e.preventDefault();
			$('#snake img').css('transform','rotate(-90deg)');
			// Right
			if ( world[current_world][snake.y][snake.x + 1] != 2 && world[current_world][snake.y][snake.x + 1] != 9 ) {
				if ( world[current_world][snake.y][snake.x + 1] == 1 ) {
					// Grow
					lowLag.play('beep.wav');
					grow();
					snake.x += 1;
				} else {
					grow();
					shrink();
					snake.x += 1;
				}
			}
		}

		if ( world[current_world][snake.y][snake.x] == 1) {
			world[current_world][snake.y][snake.x] = 0;
			buildWorld();
			updateScore(100);
		}

		if ( world[current_world][snake.y][snake.x] == 7 ) {
			death(1);
		}

		displaySnake();
		win();

		if ( 

		// Top
		(world[current_world][snake.y - 1][snake.x] == 9 || world[current_world][snake.y - 1][snake.x] == 2) &&

		// Bottom
		(world[current_world][snake.y + 1][snake.x] == 9 || world[current_world][snake.y + 1][snake.x] == 2) &&
		
		// Left
		(world[current_world][snake.y][snake.x - 1] == 9 || world[current_world][snake.y][snake.x - 1] == 2) &&
		
		// Right 
		(world[current_world][snake.y][snake.x + 1] == 9 || world[current_world][snake.y][snake.x + 1] == 2)

		) {
			console.log('top: '+world[current_world][snake.y - 1][snake.x]+'\nleft: '+world[current_world][snake.y][snake.x - 1]+'\nright: '+world[current_world][snake.y][snake.x + 1]+'\nbottom: '+world[current_world][snake.y + 1][snake.x]);
		death();
	}
}


































