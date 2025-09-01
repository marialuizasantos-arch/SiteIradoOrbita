english();

function portugues() {
	document.querySelectorAll("[lang$=pt]").forEach((tag)=>{tag.style.display = ""})
	document.querySelectorAll("[lang$=en]").forEach((tag)=>{tag.style.display = "none"})
}

function english() {
	document.querySelectorAll("[lang$=pt]").forEach((tag)=>{tag.style.display = "none"})
	document.querySelectorAll("[lang$=en]").forEach((tag)=>{tag.style.display = ""})
}

document.addEventListener("keydown", function (event) {
	if(event.key === "e") english(); 
    else if(event.key === "p") portugues();
	console.log(event.key);
});