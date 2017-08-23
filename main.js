var cats =[
	{name: "Fluffy", color: "Tabby AF", url: "https://i.pinimg.com/736x/1a/19/7f/1a197f0581e490029fd743ea25aa7eb7--double-chin-the-double.jpg"},
	{name: "Carol", color: "White", url: "https://i.pinimg.com/736x/44/ee/62/44ee62c565cecd0bd136bfc88389638d--cat-memes-animal-memes.jpg"},
	{name: "Bob", color: "Greyish", url: "https://pbs.twimg.com/media/C2E4LWIW8AAo2Re.jpg"},
];



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