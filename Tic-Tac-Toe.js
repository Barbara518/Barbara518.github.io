var players = ['x', 'o'];

var $winnersCircle = $('.winners-circle');
var	//s1 = document.getElementsByClassName('one'),
	$s1 = $('.one'), //grab everything using jquery so that you can use .text om them.  remind yourself by putting $ at the front of the variable name
	$s2 = $('.two'),
	$s3 = $('.three'),
	$s4 = $('.four'),
	$s5 = $('.five'),
	$s6 = $('.six'),
	$s7 = $('.seven'),
	$s8 = $('.eight'),
	$s9 = $('.nine');

var icon = "x";

var winner = "",
	xWins = 0,
	oWins = 0
	$xWinsView = $('.x-wins'),
	$oWinsView = $('.o-wins');

var $playButton = $('.play'),
	$nextGameButon = $('.next-game'),
	$startOverButton = $('.start-over');

var game = {
	done: false,
	winner: function () {
		if (game.done) { return; }

		if ($s1.html() == 'x' && $s5.html() == 'x' && $s9.html() == 'x' || 
			$s3.html() == 'x' && $s5.html() == 'x' && $s7.html() == 'x' ||
			$s1.html() == 'x' && $s2.html() == 'x' && $s3.html() == 'x' ||
			$s4.html() == 'x' && $s5.html() == 'x' && $s6.html() == 'x' ||
			$s7.html() == 'x' && $s8.html() == 'x' && $s9.html() == 'x' ||
			$s1.html() == 'x' && $s4.html() == 'x' && $s7.html() == 'x' ||
			$s2.html() == 'x' && $s5.html() == 'x' && $s8.html() == 'x' ||
			$s3.html() == 'x' && $s6.html() == 'x' && $s9.html() == 'x'){
			$winnersCircle.text('X Has Won!');
			game.done = true;
			xWins = xWins + 1;
		}
		else if ($s1.html() == 'o' && $s5.html() == 'o' && $s9.html() == 'o' || 
				 $s3.html() == 'o' && $s5.html() == 'o' && $s7.html() == 'o' ||
				 $s1.html() == 'o' && $s2.html() == 'o' && $s3.html() == 'o' ||
				 $s4.html() == 'o' && $s5.html() == 'o' && $s6.html() == 'o' ||
				 $s7.html() == 'o' && $s8.html() == 'o' && $s9.html() == 'o' ||
				 $s1.html() == 'o' && $s4.html() == 'o' && $s7.html() == 'o' ||
				 $s2.html() == 'o' && $s5.html() == 'o' && $s8.html() == 'o' ||
				 $s3.html() == 'o' && $s6.html() == 'o' && $s9.html() == 'o'){
			$winnersCircle.text('O Has Won!');
			game.done = true;
			oWins = oWins + 1;
		}
		else if ($s1.html() !== '' && $s5.html() !== '' && $s9.html() !== '' && 
				 $s3.html() !== '' && $s5.html() !== '' && $s7.html() !== '' &&
				 $s1.html() !== '' && $s2.html() !== '' && $s3.html() !== '' &&
				 $s4.html() !== '' && $s5.html() !== '' && $s6.html() !== '' &&
				 $s7.html() !== '' && $s8.html() !== '' && $s9.html() !== '' &&
				 $s1.html() !== '' && $s4.html() !== '' && $s7.html() !== '' &&
				 $s2.html() !== '' && $s5.html() !== '' && $s8.html() !== '' &&
				 $s3.html() !== '' && $s6.html() !== '' && $s9.html() !== ''){
			$winnersCircle.text('TIE!');
			game.done = true;
		}
		else {
			console.log ('the game goes on');
		}

		///maybe row and colums arrays to determine winner
	},
	whoGoesFirst: function (){
		///will decide who goes first
		
		var randomNum = Math.floor(Math.random() * 10)

		if (randomNum < 5){
			icon = players[0];
		}
		else if (randomNum > 10){
			icon = players[1];
		}
		
		$winnersCircle.text(icon + " Goes First")
		console.log(icon);

		///announce first player
	},
	nextPlayer: function () {
		players.push(players.shift());
		icon = players[0];
		$winnersCircle.text(icon + "'s Turn")
		console.log(icon)
	},
	resetBoard: function () {
		$s1.html(''),
		$s2.html(''), 
		$s3.html(''),
		$s4.html(''),
		$s5.html(''),
		$s6.html(''),
		$s7.html(''),
		$s8.html(''),
		$s9.html('');
		game.done = false;
	},
	resetAll: function (){
		game.resetBoard();
		xWins = 0;
		oWins = 0;
		game.updateWins();
		game.done = false;
	},
	updateWins: function (){
		$xWinsView.html('x:' + xWins);
		$oWinsView.html('o:' + oWins);
	},
	play: function () {
		var $board = $('.board');


		$($s1).on('click', function (e) {
			console.log(this);
			$s1.text(icon);
		})

		$($s2).on('click', function () {
			$s2.text(icon);
		})

		$($s3).on('click', function () {
			$s3.text(icon);
		})

		$($s4).on('click', function () {
			$s4.text(icon);
		})

		$($s5).on('click', function () {
			$s5.text(icon);
		})

		$($s6).on('click', function () {
			$s6.text(icon);
		})

		$($s7).on('click', function () {
			$s7.text(icon);
		})

		$($s8).on('click', function () {
			$s8.text(icon);
		})

		$($s9).on('click', function () {
			$s9.text(icon);
		})


		game.whoGoesFirst();
		game.nextPlayer();
		$($board).on('click',function () {
			game.nextPlayer();
			game.winner();
			game.updateWins();
		})
	}
}

$playButton.on('click', game.play);
$nextGameButon.on('click', function (){
	game.resetBoard();
	game.nextPlayer();
});
$startOverButton.on('click', function () {
	game.resetAll();
	game.nextPlayer();
});
		
	
