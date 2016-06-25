
$(document).ready(function(){
	var secretNumber = 0;
	var guess = null;
	var count = 0;

	newGame();

	$(".new").click(function(){
		newGame();
	});

	/*--- Display) information modal box ---*/

  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	$("#guessButton").click(function(){
  		var guessVal = $("input:text").val();
  		processGuess(+(guessVal));
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	function newGame() {
  		secretNumber = Math.floor((Math.random() * 100) + 1);
  		count = 0;
  		guess = null;
  		$('input:text').val('');
  		$("#count").text('');
  		$("#guessList").empty();
  		$("#feedback").text("Make your Guess!");
  	}

  	function processGuess(guessValue) {
  		if(guessValue % 1 != 0){
  			$("#feedback").text("Guess needs to be an integer");
  		}
  		else {
  			guess = parseInt(guessValue);
  			if(guess < 0 || guess > 100) {
  				$("#feedback").text("Guess must be between 1 and 100");
  			}
  			else {
  				count++;
  				$("#count").text(count);
  				$("#guessList").append("<li>" + guess +" </li>");
  				giveFeedback();
  			}
  		}
  	}

  	function giveFeedback(){
  		var distance = Math.abs( guess - secretNumber );

  		if(distance == 0 ){
  			$("#feedback").text("Right guess!!!");
  		}
  		else if(distance >= 50){
  			$("#feedback").text("Ice cold");
  		}
  		else if(distance >= 30)
  		{
  			$("#feedback").text("Cold");
  		}
  		else if(distance >= 20)
  		{
  			$("#feedback").text("Warm");
  		}
  		else if(distance >= 10)
  		{
  			$("#feedback").text("Hot");
  		}
  		else if(distance >= 1)
  		{
  			$("#feedback").text("Very hot");
  		}
  	}

});


