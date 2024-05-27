
const blogWeeks = [
	"week1.html",
	"week2.html",
	"week3.html",
	"week4.html",
	"week6.html",
	"week8.html",
	"week9.html",
	"week10.html",
	"week11.html",
    "week12.html",
    "week13.html",

]
let blogIndex = 0;

function moveNext() {
	if (blogIndex < blogWeeks.length - 1) {
		blogIndex++;
		let post = document.getElementById("blogFrame");
		post.src = blogWeeks[blogIndex];
	}
}

function moveBack() {
	if (blogIndex > 0) {
		blogIndex--;
		let post = document.getElementById("blogFrame");
		post.src = blogWeeks[blogIndex];
	}
}