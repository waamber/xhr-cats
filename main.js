function domString(){
	var catString = "";
	for(var i = 0; i < cats.length; i ++){
		var currentCat = cats[i];
		catString += `<div class="catCard">
											<h1>${currentCat.name}</h1>
											<h2>${currentCat.color}</h2> 
											<div class= "catImg"><img src ="${currentCat.url}"></div>
										</div>`;
	writeToDom(catString);
	}
}; 

function writeToDom(strang){
	var catContainer = document.getElementById("kat-koral");
	catContainer.innerHTML = strang;
};

domString(cats);