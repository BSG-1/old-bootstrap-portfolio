//Creating jQuery function
$.fn.triviaGame = function(){
	//The variable Trivia will store all question/choices information
	var trivia = this;
	trivia.userPick = null;
	trivia.answers = {
		correct: 0,
		incorrect: 0
	};
	trivia.images = null;
	trivia.count = 30;
	trivia.current = 0;
	trivia.questions = [{
		question: "Who was Luke Skywalker's Father?", 
		choices: ["A: Assaj Ventress", "B: Darth Vader", "C: Lando Calrissian", "D: Obi-Wan Kenobi"],
		correct: 1
	}, {
		question: "Han Solo & Leia Skywalker had a son. What was his name?",
		choices: ["A: General Akbar", "B: Count Duku", "C: Darth Maul", "D: Jacen"],
		correct: 3	
	}, {
		question: "General Akbar famously exclaimed which of these?",
		choices: ["A: Its a trap!", "B: The war is lost, go home.", "C: Anakin is pissed.", "D: I am General Akbar."],
		correct: 0		
	}, {
		question: "Which Sith Lord created the Rule of Two?",
		choices: ["A: Darth Bane", "B: Star Killer", "C: Darth Revan", "D: Darth Malgus"],
		correct: 0
	}];

	//Start the Game, Reset
	/*trivia.ask = function(){
		if(trivia.questions[trivia.current]){
			$("#timer").html("Time Remaining: " + trivia.count);
			$("#questions").html(trivia.questions[trivia.current].question);
			var choicesArr = trivia.questions[trivia.current].choices;
			var buttonsArr = [];

			//Iterate through the choices & provide buttons to click per choice
			for (var i = 0; i < choicesArr.length; i++) {
				var button = $('<button>');
				button.text(choicesArr[i]);
				button.attr('data-id', i);
				button.attr('class', 'hvr-radial-out');
				$('#answers').append(button);
			}

			//Make the game wait & show results of choice per question; 3 seconds
			window.triviaCounter = setInterval(trivia.timer, 3000)
		} else {
			$('body').append($('<div />', {
				text: 'Unanswered: ' + (trivia.questions.length - (trivia.answers.correct +
					trivia.answers.incorrect)),
				class: 'Result'
			}));
			$("#startButton").text("Restart").appendTo('body').show();
		}
	};*/

	//Game Timer runs as a function
	trivia.timer = function(){
		trivia.count--;
		if(trivia.count <= 0){
			setTimeOut(function(){
				trivia.nextQuestion();
			});
		} else {
			$("#timer").html("Time Remaining: " + trivia.count);
		}
	};
	console.log(trivia.timer);

	//Send the Game to the next question
	trivia.nextQuestion = function(){
		trivia.current++;
		clearInterval(window.triviaCounter);
		trivia.count = 30;
		$("#timer").html("");
		setTimeOut(function(){
			trivia.cleanUp();
			trivia.ask();
		}, 3000)
	};

	//CleanUp function...?
	trivia.cleanUp = function(){
		$('div[id]').each(function(item){
			$(this).html('');
		});
		$('.correct').html('Correct answers: ' + trivia.answers.correct);
		$('.incorrect').html('Incorrect answers: ' + trivia.answers.incorrect);
	};

	//Comparing the answers...?
	trivia.answer = function(correct) {
		var string = correct ? 'correct' : 'incorrect';
		trivia.answers[string]++;
		$('.' + string).html(string + ' answers: ' + trivia.answers[string]);
	};
	return trivia;
};

//Reset Game
var Trivia;

$("#startButton").click(function(){
	$(this).hide();
	$('.result').remove();
	$('div').html('');
	Trivia = new $(window).triviaGame();
	Trivia.ask();
});

$("#answers").on("click", "button", function(e){
	var userPick = $(this).data("id"),
		trivia = Trivia || $(window).trivia(),
		index = trivia.questions[trivia.current].correct,
		correct = trivia.questions[trivia.current].choices[index];

	if (userPick !== index){
		$("#answers").text("Incorrect, my young apprentice. The correct answer was: " + correct);
		trivia.answer(false);
	} else {
		$("#answers").text("Very good! The correct answer  was: " + correct);
		trivia.answer(true);
	}
	trivia.nextQuestion();
});