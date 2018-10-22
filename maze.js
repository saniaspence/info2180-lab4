/*Exercise 1: Single boundary turns red
window.onload = function(){
	
	const boundary = document.getElementById("boundary1");
	
	boundary.onmouseover = function(){
		boundary.classList.add("youlose");
	};
};*/
lose = false;
alreadylost = false;

window.onload = function(){

	const boundaries = document.getElementById("maze").querySelectorAll(".boundary");
	const end = document.getElementById("end");
	const start = document.getElementById("start");

	for (let i=0;i<boundaries.length;i++){
	boundaries[i].addEventListener("mouseover", function(){
		lose = true;
		for (i=0;i<boundaries.length;i++){
			boundaries[i].classList.add("youlose")
		}
		if(alreadylost == false){
			alert("You Lose!");
			alreadylost = true;
		}

	});
	}

	end.addEventListener("mouseover", function(){
		if (lose == false){
			alert("You Win!");
		}
	});

	start.addEventListener("click", function(){
		lose = false;
		alreadylost = false;
		for (let i=0;i<boundaries.length;i++){
				boundaries[i].classList.remove("youlose");
			}
	});

};