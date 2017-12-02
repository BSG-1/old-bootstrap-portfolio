//Global variables
var questions = 
{
	q1: ['Who was Luke Skywalkers Father?'],
	q2: ['Han Solo & Leia Skywalker had a son. What was his name?'],
	q3: ['General Akbar famously exclaimed which of these?'],
	q4: ['Which Sith Lord created the Rule of Two?']
};

var answers = 
{
	a1: [{A: 'Assaj Ventress',
	 	  B: 'Darth Vader', //correct answer
	 	  C: 'Lando Calrissian', 
	 	  D: 'Obi-Wan Kenobi'
	 	}],
	a2: [{A: 'General Akbar', 
		  B: 'Count Duku', 
		  C: 'Darth Maul', 
		  D: 'Jacen' //correct answer
		}],
	a3: [{A: 'Its a trap!', //correct answer
		  B: 'The war is lost, go home.', 
		  C: 'Anakin is quite angry.', 
		  D: 'I am General Akbar.'
		}],
	a4: [{A: 'Darth Bane', //correct answer
		  B: 'Star Killer', 
		  C: 'Darth Revan', 
		  D: 'Darth Malgus'
		}]
};

//Counting variables
var isCorrect = false;
var questionCount = 0;
var time = 0;
var correct = 0;
var incorrect = 0;

//Reset the time
var interval;

//FUNCTIONS

//Run/begin the game
function playGame(){
	$("#startButton").on("click", function(){
		
		//once startbutton clicked, hide button
		$("#startButton").hide();
		
		//once startbutton clicked, run these functions
		timeCount();
		quest1();
		chooseCheckAnswer();
	});
}

//Run the timecounter
function timeCount(){
	time = 30;
	interval = setInterval(timeLeft, 1000);

	//Shove html content of "time remaining" into "timer" div
	$("#timer").html
}































