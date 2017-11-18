$(document).ready(function(){	

//Global variables
	var numberWins = 1;
	var numberLosses = 1;
	var crystalOne = Math.floor(Math.random()*12) + 1;
	var crystalTwo = Math.floor(Math.random()*12) + 1;
	var crystalThree = Math.floor(Math.random()*12) + 1;
	var crystalFour = Math.floor(Math.random()*12) + 1;
	var total = 0;
	var isClicked = false;
	var userTotal = $('#userTotal')


//Random number generator
 	var randomNumber = Math.floor(Math.random() * 120) + 19;
 	$('#randomNum').html(randomNumber);

//Clicking on and generating random numbers 1<x<12 for each crystal
	/*Problem is I don't know how to make each image the
	SAME value each time you click...*/

	//Crystals
	// $('.gemImage').on("click", function(){
	// 	isClicked = true;
	// 	var randomBlue = Math.floor(Math.random() * 12) + 1;
	// 		$('#userTotal').html(randomBlue + randomGreen + randomRed + randomYellow);
	// 	var randomGreen = Math.floor(Math.random() * 12) + 1;
	// 		$('#userTotal').html(randomBlue + randomGreen + randomRed + randomYellow);
	// 	var randomRed = Math.floor(Math.random() * 12) + 1;
	// 		$('#userTotal').html(randomBlue + randomGreen + randomRed + randomYellow);
	// 	var randomYellow = Math.floor(Math.random() * 12) + 1;
	// 		$('#userTotal').html(randomBlue + randomGreen + randomRed + randomYellow);

	// })
	
	//Blue
	$('#crystalOne').on("click", function(){
		isClicked = true;
  		total += crystalOne
  		userTotal.html(total);

  		console.log('userTotal', userTotal.text());
  		checkGame();

	});
		console.log(crystalOne);
	
	//Green
	$('#crystalTwo').on("click", function(){
		isClicked = true;
		total += crystalTwo
		userTotal.html(total);
		checkGame();
	});	
		console.log(crystalTwo);
	
	//Red
	$('#crystalThree').on("click", function(){
  		isClicked = true;
  		total += crystalThree
  		userTotal.html(total);
  		checkGame();
	});
		console.log(crystalThree);
	
	//Yellow
	$('#crystalFour').on("click", function(){
  		isClicked = true;
  		total += crystalFour
  		userTotal.html(total);
		checkGame();
	});
		console.log(crystalFour);

//User Total/Results	
	// $(".gemImage").on("click", function(){
	// 	if ($('#userTotal').value === 'plus') {
	// 		userTotal.html(total);
	// 		userTotal.append(total);
	// 	}	
	// });

	// console.log(userTotal)

//Alerts if Win/Lose

var checkGame = function (){
	if (total == randomNumber) {
		alert("You win!");
		$('#numberWins').html(numberWins++);
		resetGame();
		$('#userTotal').empty();

	} else if (total > randomNumber){
		alert("Sorry, you lose.");
		$('#numberLosses').html(numberLosses++);
		resetGame();
		$('#userTotal').empty();
	}
}

var resetGame = function (){
	alert("Try Again!");
	//Global variables
	numberWins;
	numberLosses;
	crystalOne = Math.floor(Math.random()*12) + 1;
	crystalTwo = Math.floor(Math.random()*12) + 1;
	crystalThree = Math.floor(Math.random()*12) + 1;
	crystalFour = Math.floor(Math.random()*12) + 1;
	total = 0;
	isClicked = false;
	userTotal = $('#userTotal')


//Random number generator for new game
 	randomNumber = Math.floor(Math.random() * 120) + 19;
 	$('#randomNum').html(randomNumber);
}

});
