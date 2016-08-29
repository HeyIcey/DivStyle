function showboard(){
	if (!document.getElementById) {return false;}
	if (!document.getElementById("set")) {return false;}
	var set = document.getElementById("set");
	set.onclick = function disboard(){
		if (!document.getElementById("board")) {return false;}
		var board = document.getElementById("board");
		board.style.display = "block";
	}
}
window.onload = showboard;