//Creates an array that lists all of the possible word choices within game
	var words = ['kyloren', 'skywalker', 'vader', 'darth', 'palpatine', 'lando', 'r2d2', 'chewbacca', 'hansolo','rebelscum','empire']

//Game chooses word randomly
	var randomWordFromList = Math.floor(Math.random()*words.length);
	var chosenWord = words[randomWordFromList];
	var rightWord = [];
	var wrongWord = [];
	var underScore = [];
	var winCount = 0;

//Display underscores based on how long the word is
	var htmlUnderScore = document.getElementsByClassName('underscores');
	var htmlRightGuess = document.getElementsByClassName('rightGuess');
	var htmlWrongGuess = document.getElementsByClassName('wrongGuess');

	//testing it out
	console.log(chosenWord);


	//Game creates underscores based on length of word
		var makeUnderScores = () => {
			for (var i = 0; i < chosenWord.length; i++) {
				underScore.push('_').display;
			}

			return underScore;
		}

		console.log(makeUnderScores());

	//User input letter-guess
		document.addEventListener('keypress', (event) => {
			var keyLetter = String.fromCharCode(event.keyCode);
		
		//If the user's guess is right	
			if(chosenWord.indexOf(keyLetter) > -1) {
			//then add it to the rightWord array
				rightWord.push(keyLetter);

			//replacing the underscore with a right letter
			for (var i = 0; i < rightWord.length; i++) {
				if (keyLetter === rightWord[i]){
					//replacing a duplicate letter in the word
					for (var i = 0; i < chosenWord.length; i++) {
						if (chosenWord.charAt(i)===keyLetter){
							underScore[i] = keyLetter;
					        htmlUnderScore[0].innerHTML = underScore.join(' ');
						} 
					}

					underScore[chosenWord.indexOf(keyLetter)] = keyLetter;
					htmlUnderScore[0].innerHTML = underScore.join(' ');		
						}
				} 
			}


			//htmlRightGuess[0].innerHTML = rightGuesses.join(' ');	
			//checking to see if the user-input word matches the chosen word
				if(underScore.join('') == chosenWord) {
					alert('You are strong in the Force!' + ' Win Count: ' + winCount++);				
				} 
			
		/*if guess correct, send to rightWord html display "rightGuess". The thing I can't seem to 
		fix is that the 'right' letters also show up in the "wrongGuess" html display*/
			else {
				wrongWord.push(keyLetter);
				htmlRightGuess[0].innerHTML = rightWord.join(' ');
				htmlWrongGuess[0].innerHTML = wrongWord.join(' ');
			}

		
		
		});

/* Problems with the game I couldn't work out in the alloted time :(
	1. Reset Button doesn't work

		$('#reset-button').on("click", function(){
			.empty();???? Lost on this part! 
		})
				function resetGame() {
				usedLetters = [];
				underScore = [];
				makeUnderScores();
				updateAreas();
				}
	
	2. Underscores don't display before trying to key-in letters
		
		...not sure at all

	3. CSS styling attributes

	*/ 

