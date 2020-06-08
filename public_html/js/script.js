var number =1; //question number
var playingScore =0;//score of the player

//answers array
var answers = ["q1optC", "q2optD", "q3optB", "q4optB"]



function questionSeries() {
	//printing the question series 
	if (number <5) {
		
		document.getElementById('ques' + number).style.display = "block";
		if (number > 1) {
			document.getElementById('ques' +
                                (number-1)).style.display = "none";
		}
	}else{
		document.querySelector('.sc').textContent = playingScore;
		document.getElementById('score').style["display"] = "block";
		document.getElementById('ques' +
                        [number-1]).style["display"]= "none";
	}
}

//getting next question on the screen when next question button is clicked
document.getElementById('nxtQues').addEventListener('click', function () {
	number++;
	document.getElementById('correct').style.display = "none";
	document.getElementById('wrong').style.display = "none";
	questionSeries();
});