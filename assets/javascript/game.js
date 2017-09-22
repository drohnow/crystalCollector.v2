$(document).ready(function() {


//set background image
$("body").css("background-image", "url('./assets/images/background_img.jpg')");

//jQuery DOM Manipulation - creation of all HTML elements. ----- BEGINNING  -------//

var divCCBanner = document.createElement("div");
$(divCCBanner).attr("class", "divCCBanner");
$('body').append(divCCBanner);
$(".divCCBanner").html("<h1>CrystalsCollector!</h1>");

//Create directions div + paragraph//
var divDirections = document.createElement("div");
$(divDirections).attr("class", "divDirections");
$('body').append(divDirections);
$(".divDirections").append("<br><p>You will be given a random number at the start of the game.</p>");
$(".divDirections").append("<p>There are four crystals below.  By clicking on a crystal you add a specific amount of points to your total score.</p>");
$(".divDirections").append("<p>You will win the game by matching your total score to the random number.  You lose the game if your total score goes above the random number.");
$(".divDirections").append("<p>The value of each crystal is hidden from you until you click on it.</p>");
$(".divDirections").append("<p>Each time the game starts, the game will change the value of each crystal.</p>");

//Create RandowTarget Div and h1 tag//
var divRandTarget = document.createElement("div");
$(divRandTarget).addClass("divRandTarget");
$('body').append(divRandTarget);
$(".divRandTarget").append("<h1>0</h1>");
$('.divRandTarget').find('h1:first-child').attr("id", "H1-RandTargetID");

//Create ScoreBoard Div and h1 ta
var divScoreBoard = document.createElement("div");
$(divScoreBoard).addClass("divScoreBoard");
$('body').append(divScoreBoard);

$(".divScoreBoard").append("<p>Wins: </p>");

$('.divScoreBoard').find('p:first-child').addClass('pWins')

//var pWinsSpan = $("#pWins").append("<h<span>0</span></h2>");
$(".divScoreBoard").append("<p>Loses: </p>");
$('.divScoreBoard').find('p:last-child').addClass('pLoses')

$('.divScoreBoard').find('p:first-child').attr("id", "pWinsID")
$('.divScoreBoard').find('p:last-child').attr("id", "pLosesID")
$("#pWinsID").append("<span>0</span>");
$('#pWinsID').find('span:first-child').attr("id", "pWinSpanID")
$("#pLosesID").append("<span>0</span>");
$('#pLosesID').find('span:first-child').attr("id", "pLoseSpanID")



//create image container and place images; added id's //
var divImgContainer = document.createElement("div");
$(divImgContainer).attr("class", "divImgContainer");
$('body').append(divImgContainer);


//Add images to divImgContainer//
var redC = $(".divImgContainer").append("<img src='./assets/images/redCrystal.png'>");
var blueC = $(".divImgContainer").append("<img src='./assets/images/blueCrystal.png'>");
var yellowC = $(".divImgContainer").append("<img src='./assets/images/yellowCrystal.png'>");
var greenC = $(".divImgContainer").append("<img src='./assets/images/greenCrystal.png'>");

$('.divImgContainer').find('img:nth-child(1)').attr("id", "redCrystalID")
$('.divImgContainer').find('img:nth-child(2)').attr("id", "blueCrystalID")
$('.divImgContainer').find('img:nth-child(3)').attr("id", "yellowCrystalID")
$('.divImgContainer').find('img:nth-child(4)').attr("id", "greenCrystalID")



//Add Player Score Report div//
var divScoreReport = document.createElement("div");
$(divScoreReport).attr("class", "divScoreReport");
$('body').append(divScoreReport);
$(".divScoreReport").html("<h1>Your Total Score Is</h1>");

//Add Player Score Board div//
var divPlayerBoard = document.createElement("div");
$(divPlayerBoard).attr("class", "divPlayerBoard");
$('body').append(divPlayerBoard);
$(".divPlayerBoard").html("<h1>0</h1>");
$('.divPlayerBoard').find('h1:first-child').attr("id", "H1-PlayerBoardID")


//jQuery DOM Manipulation - creation of all HTML elements. ------ END -------------//

//Javascript Game Code -------------------------   BEGINNING  --------------------//

var redCrystalV = fnCrystalRandom(1,12);
var blueCrystalV = fnCrystalRandom(1,12);
var yellowCrystalV = fnCrystalRandom(1,12);
var greenCrystalV = fnCrystalRandom(1,12);
var crystalCountTotal  = 0;
var totalCount = 0;
var crystalTargetRandNumV = fnCrystalRandom(9, 120);
var pWin = 0;
var pLose = 0;



$("#H1-RandTargetID").html(crystalTargetRandNumV);


function fnCrystalRandom(minNum, maxNum) {
 	var crystalRandom = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
 	return crystalRandom;
}

console.log(crystalTargetRandNumV);
console.log(redCrystalV);
console.log(blueCrystalV);
console.log(yellowCrystalV);
console.log(greenCrystalV);

function fnPlayerCrystalCount() {
	//Adds player's crytal count//                                     
	totalCount = redCrystalV + blueCrystalV + yellowCrystalV + greenCrystalV
	$("#H1-PlayerBoardID").html(totalCount);
	return totalCount;
}


function fnCompareCounts() {
	if (totalCount == crystalTargetRandNumV) {
		fnWin();
		console.log("Winner")
	} else if  (totalCount > crystalTargetRandNumV) {
		fnLost();
	} else {
		console.log("keep Going!")
	}
}


function fnLost() {
	++pLose;
	$("#pLoseSpanID").html(pLose);
	gameStart()
	console.log(pWin);
}

function fnWin() {
	++pWin;
	$("#pWinSpanID").html(pWin);
	gameStart()
	console.log(pWin);
}


function gameStart() {
	crystalTargetRandNumV = fnCrystalRandom(9, 120);
	redCrystalV = fnCrystalRandom(1,12);
	blueCrystalV = fnCrystalRandom(1,12);
	yellowCrystalV = fnCrystalRandom(1,12);
	greenCrystalV = fnCrystalRandom(1,12);
	totalCount = 0;
	$("#H1-PlayerBoardID").html(totalCount);
	$("#H1-RandTargetID").html(crystalTargetRandNumV);


}

//Javascript Game Code -------------------------   END  --------------------//



//Crystql Buttons - Action On Click//
$("#redCrystalID").click(function() {
	totalCount += redCrystalV
	$("#H1-PlayerBoardID").html(totalCount);
	fnCompareCounts() 
	return totalCount
});

$("#blueCrystalID").click(function() {
	totalCount += blueCrystalV
	$("#H1-PlayerBoardID").html(totalCount);
	fnCompareCounts() 
	return totalCount
});



$("#yellowCrystalID").click(function() {
	totalCount += yellowCrystalV
	$("#H1-PlayerBoardID").html(totalCount);
	fnCompareCounts() 
	return totalCount
});

$("#greenCrystalID").click(function() {
	totalCount += greenCrystalV
	$("#H1-PlayerBoardID").html(totalCount);
	fnCompareCounts() 
	return totalCount
});





 });



