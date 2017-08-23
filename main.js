function domString(catCrap){
	var catString = "";
	for(var i = 0; i < catCrap.length; i ++){
		catString += `<div class="catCard">
											<h1>${catCrap[i].name}</h1>
											<h2>${catCrap[i].color}</h2> 
											<div class= "catImg"><img src ="${catCrap[i].url}"></div>
										</div>`;
	writeToDom(catString);
	}
}; 

function writeToDom(strang){
	var catContainer = document.getElementById("kat-koral");
	catContainer.innerHTML = strang; 
};

function executeThisCodeAfterFileLoads(){
	var data = JSON.parse(this.responseText); //responseText gives you a string .parse turns it into JSON array
	domString(data.cats);
};

function executeThisCodeIfFileErrors() {
	console.log("Dis shit broke.");
};

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "cats.json");
myRequest.send();

//using two separate json files use separate variables and functions
var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
myRequest2.addEventListener("error", executeThisCodeIfFileErrors2);
myRequest2.open("GET", "dogs.json");
myRequest2.send();




