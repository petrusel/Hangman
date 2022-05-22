let word;
const findWord = [];
let lives = 15;

function addWord() {
	word = document.getElementById("id_insertWord_input").value;
	for (let i = 0; i < word.length; ++i) {
		findWord.push("_");
	}
	console.log(word);
	document.getElementById("id").innerHTML += `
		<h1 id="id_changedWord">` + findWord.join(' ') + `</h1>
		<br>
		<div id="id_inputBtn" class="input-group mb-3" style="width: 20rem; margin:0 auto;">
			<input id="insertLetter_input" type="text" class="form-control" placeholder="Introduceti o litera">
				<button id="insertLetter_button" class="btn btn-outline-danger" type="button" onclick="findLetter()"><i class="las la-angle-double-left"></i></button>
		</div>
		<p id="id_lives">Numar de vieti: ` + lives + `</p>
		`;
}
  	
function findLetter() {
	const letter = document.getElementById("insertLetter_input").value;
	if (word.includes(letter)) {
		console.log("cuvantul contine litera " + letter);
		for (let i = 0; i < word.length; ++i) {
			if (word[i] == letter) {
				findWord[i] = letter.toUpperCase();
			}
			document.getElementById("id_changedWord").innerHTML = findWord.join(' '); 
		}
	} else {
		console.log("cuvantul NU contine litera " + letter);
		--lives;
		document.getElementById("id_lives").innerHTML = "Vieti ramase: " + lives;
	}
	
	document.getElementById("id").innerHTML += `
		` + letter.toUpperCase() + `
			`;
	if (lives == 0) {
	document.getElementById("id_inputBtn").innerHTML = `
		<div class="card-body text-center" style="width: 30rem; margin:0 auto;">
			<h1 style="color:red">GAME OVER</h>
		</div>
	`;
	}
	if(!findWord.includes("_")) {
		document.getElementById("id_inputBtn").innerHTML = `
		<div class="card-body text-center" style="width: 30rem; margin:0 auto;">
			<h1 style="color:blue">WINNER</h>
		</div>
	`;
	}
}
