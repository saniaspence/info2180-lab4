/*Exercise 1: Single boundary turns red
window.onload = function(){
	
	const boundary = document.getElementById("boundary1");
	
	boundary.onmouseover = function(){
		boundary.classList.add("youlose");
	};
};*/
lose = false;

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
		document.getElementById("status").textContent = "You Lose!";

	});
	}

	end.addEventListener("mouseover", function(){
		if (lose == false){
			document.getElementById("status").textContent = "You Win!";
		}
	});

	start.addEventListener("click", function(){
		lose = false;
		document.getElementById("status").innerHTML = "Move your mouse over the &quot;S&quot; to begin.";
		for (let i=0;i<boundaries.length;i++){
				boundaries[i].classList.remove("youlose");
			}
	});

};