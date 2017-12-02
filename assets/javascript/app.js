/* This that I wanted to accomplish, but could not configure:

	1) Couldn't figure out how to pass indidviual gifs into each 
	   correct/incorrect output
	
	2) Couldn't get timer to reset itself properly;
	  - had to configure in a way that adds extra seconds to clock to allow 
	    user to have 30 sec to answer each individual question 
	  - when timer hits 0, does not move to next screen output with incorrect++

*/


//Global Variables
var questions = [{
		question: "Who was Luke Skywalker's Father?",
		choice: ["A: Assaj Ventress", "B: Darth Vader", "C: Lando Calrissian", "D: Obi-Wan Kenobi"],
		images: ["<img src=\"assets/images/vader.gif\">"],
		correct: 1
}, {
		question: "Han & Leia had a son. What was his name? (Old Republic, not canon)",
		choice: ["A: General Akbar", "B: Count Dooku", "C: Darth Maul", "D: Jacen Solo"], 
		images: ["<img src=\"assets/images/jacen.gif\">"],
		correct: 3
}, {
		question: "General Akbar famously exclaimed which of these?", 		
		choice: ["A: Its a trap!", "B: The war is lost, go home.", "C: Anakin is pretty pissed.", "D: I am General Akbar."],
		images: ["<img src=\"assets/images/akbar.gif\">"],
		correct: 0
}, {
		question: "Which Sith Lord created the Rule of Two?",
		choice: ["A: Darth Bane", "B: Star Killer", "C: Darth Revan", "D: Darth Malgus"],
		images: ["<img src=\"assets/images/bane.gif\">"],
		correct: 0
}, {
		question: "On what planet were both Luke and his father raised?",
		choice: ["A: Kamino", "B: Tattooine", "C: Onkar Plutt", "D: Sebulba"],
		images: ["<img src=\"assets/images/tattooine.gif\">"],
		correct: 1
}, {
		question: "Who was the fastest podracer in the history of the Republic?",	
		choice: ["A: Anakin Skywalker", "B: Star Killer", "C: Sebulba", "D: Rey Solo/Skywalker"],
		images: ["<img src=\"assets/images/anakin.gif\">"],
		correct: 0
}, {
		question: "Which Sith was successful in his attempt to overthrow the capital city of the Galactic Republic, Coruscant?",	
		choice: ["A: Darth Bane", "B: Darth Nihilus", "C: Darth Malgus", "D: Darth Malak"],
		images: ["<img src=\"assets/images/malgus.gif\">"],
		correct: 2
}, {
		question: "In the attempted arrest of Darth Sidious, how many Jedi were felled before his duel with Mace Windu?",	
		choice: ["A: 1", "B: 2", "C: 3", "D: 10"],
		images: ["<img src=\"assets/images/sheev.gif\">"],
		correct: 2
}, {
		question: "What is widely considered the reason Anakin Skywalker was seduced by the Dark Side?",	
		choice: ["A: He was just emo", "B: He had to save Padme", "C: Anakins hatred of sand", "D: He was jealous of Obi-Wan's beard"],
		images: ["<img src=\"assets/images/turnt.gif\">"],
		correct: 1
}, {
		question: "What powers a lightsaber?",	
		choice: ["A: The Force", "B: The Senate", "C: Anakin hatred of sand", "D: Kyber Crystals"],
		images: ["<img src=\"assets/images/kyber.gif\">"],
		correct: 3
}, {
		question: "How would a Star Wars purist rank the movies?",	
		choice: ["A: 4, 5, 6, 1, 2, 3", "B: 1, 2, 3, 4, 5, 6", "C: What are you talking about?", "D: It's a trap!"],
		images: ["<img src=\"assets/images/yodadance.gif\">"],
		correct: 0
}]

var right = 0;
var wrong = 0;
var time = 31;
var timeID;
var current = 0;
var currentObj = [];
var txt;
var amSmart = false;


//jQuery ready
$(document).ready(function(){

	//Click start button to begin game
	$("#startButton").click(function(){
		$("#startButton").hide();
		timer();
		timeID = setInterval(timer,1000);
		makeGame();
	});

	//Run the timer function
	function timer(){
		if (time !== 0){
			time--;
			var $t = $("<h3>Time Remaining: " + time + "</h3>");
			$("#timer").html($t);
		} 
	};

	//Make the game parameters
	function makeGame(){
		$("#questions").empty();
		var q = $("<h3>"+ "<br>");
			currentObj = questions[current];
		q.text(currentObj.question);

		var divQuestion = $('<div>').attr('id','Question');
		$("#questions").append(divQuestion)
		$("#Question").append(q);

		var divAnswer = $('<div>').attr('id', 'A');
		$("#questions").append(divAnswer);

		for (var i = 0; i < currentObj.choice.length; i++) {
			var choices = $('<button>');
			choices.text(currentObj.choice[i]);
			$("#A").append(choices);
		};

		$('#A button').on("click", function(){
			if($(this).text() === currentObj.choice[currentObj.correct]){
				console.log('Good job, youngling');
				amSmart = true;
				setTimeout(nextQuestion, 3000);
				console.log(setTimeout);
			} else {
				txt = currentObj.choice[currentObj.correct];
				amSmart = false;
				setTimeout(nextQuestion, 3000);
				console.log(setTimeout);
			};
		});
	};

	//Next question
	function nextQuestion(){
		if (time = 0){
			wrong++
			$("#questions").html("<h3>Incorrect, young apprentice. The answer was " + txt + "</h3>");
		}
		if (amSmart){
			$("#questions").empty();
			right++;
			$("#questions").html("<h3>Congratulations! That is the correct answer!</h3>")
			var img = $('<img>').attr("src", "assets/images/yodadance.gif");
			$("#questions").append(img);

		} else {
			$("#questions").empty();
			wrong++;
			$("#questions").html("<h3>Incorrect, young apprentice. The answer was " + txt + "</h3>");
			var img = $('<img>').attr("src", "assets/images/kyber.gif");
			$("#questions").append(img);

		};

		if (current !== 10){
			current++;
			setTimeout(makeGame, 5000);
			time = 35;
		} else {
			gameEnd();
		}
	};

	//GameEnd
	function gameEnd(){
		$("#questions").empty();
		$("#timer").empty();
		clearInterval(timeID);

		$("#questions").append('<h3>Much have you to learn, young one</h3>');
		$("#questions").append('<h3>Correct: ' + right + 
						'<br><br> Incorrect: ' + wrong + ' </h3>'); 
			//insert img/gif refer to line 164-165	

		var $newStartButton = $('<button>').attr('id', 'restart').text("Try Again");
		$("#timer").prepend($newStartButton);

		//GameEnd button
		$('#restart').on("click", function(){
			$('#restart').hide();
			restart();
		})
	}

	//Restart game function
	function restart(){
		right = 0;
		wrong = 0;
		time = 30;
		current = 0;
		timer();
		timeID = setInterval(timer, 1000);
		makeGame();
	}

});