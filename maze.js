/*Exercise 1: Single boundary turns red
window.onload = function(){
	
	const boundary = document.getElementById("boundary1");
	
	boundary.onmouseover = function(){
		boundary.classList.add("youlose");
	};
};*/
window.onload = function(){

	const boundaries = document.getElementById("maze").querySelectorAll(".boundary");

	for (let i=0;i<boundaries.length;i++){
	boundaries[i].addEventListener("mouseover", function(){
		
		for (i=0;i<boundaries.length;i++){
			boundaries[i].classList.add("youlose")
		}

	});
	}

};