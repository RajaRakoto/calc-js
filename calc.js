const allBtnInput = document.querySelectorAll('.btn'); //recuperer tout les 'buttons "btn" class input'
const allBtnOthersInput = document.querySelectorAll('.btn-others'); //recuperer tout les 'buttons "btn-others" class input'
const allBtnOperatorsInput = document.querySelectorAll('.btn-operators'); //recuperer tout les 'buttons "btn-operators" class input'
const equal = document.getElementById('equal'); //recuperer 'equal button (egale)'
const clear = document.getElementById('clear'); //recuperer 'clear button (effacer)'
const expression = document.getElementById('expression');
const output = document.getElementById('output');
const counter = document.getElementById('counter');
const synopsis = document.getElementById('synopsis');
let counterValue = 1;
let result = '';

function clearAll() {
	//nettoyer les elements inutiles
	synopsis.style.display = 'none';
}

function expressionOverflowTest() {
	//verifier le debordement d'expression
	if (counterValue === 29) {
		result = ''; //vider le resultat
		output.innerText = "[error]: trop d'expression !";
		counterValue = 1; //reinitialiser le compteur d'expression a 1
	}
}

function inputEvent(inputName) {
	inputName.forEach(input => {
		input.addEventListener('click', e => {
			input = e.target.innerText; //recuperer la valeur de chaque 'button' clickE
			result += input; //concatener chaque valeur pour les stockEs dans la variable result
			expression.innerText = result; //afficher l'expression
			counter.innerText = counterValue++; //dynamiser le compteur d'expression
			expressionOverflowTest();
		});
	});
}

inputEvent(allBtnInput); //ecouteur d'evenement pour les bouttons classique (0 ... 9)
inputEvent(allBtnOthersInput); //ecouteur d'evenement pour les autres bouttons
inputEvent(allBtnOperatorsInput); //ecouteur d'evenement pour les bouttons d'operateurs (+, -, *, et /)

// allBtnInput.forEach(input => {
// 	input.addEventListener('click', e => {
// 		input = e.target.innerText; //recuperer la valeur de chaque 'button' clickE
// 		result += input; //concatener chaque valeur pour les stockEs dans la variable result
// 		expression.innerText = result; //afficher l'expression
// 		counter.innerText = counterValue++; //dynamiser le compteur d'expression
// 		expressionOverflowTest();
// 	});
// });

clear.addEventListener('click', () => {
	expression.innerHTML = '&nbsp;'; //reinitialiser l'affichage
	result = ''; //vider le resultat
	counterValue = 0; //reinitialiser le compteur d'expression a 0
	counter.innerText = counterValue;
	counterValue = 1;
	clearAll();
});

equal.addEventListener('click', () => {
	if (eval(result) == undefined) {
		output.innerText = '[error]: expression vide !';
	} else {
		output.innerText = eval(result);
	}
});

/* ----- SPECS BUTTONS (begin) ----- */

function specsEngine(specsValue) {
	//injecte comme expression une valeur entrE comme argument
	result += specsValue;
	expression.innerHTML = result;
	counter.innerText = counterValue++;
	expressionOverflowTest();
}

//mod
const mod = document.getElementById('mod');
mod.addEventListener('click', () => {
	specsEngine('%');
});

//pi
const pi = document.getElementById('pi');
pi.addEventListener('click', () => {
	specsEngine(3.141592654);
});

//rac
const rac = document.getElementById('rac');

rac.addEventListener('click', () => {
	synopsis.style.display = 'inline';
	synopsis.innerText = 'synopsis: Math.sqrt(64) = 8';
	specsEngine('Math.sqrt(');
});

//carre
const carre = document.getElementById('carre');

carre.addEventListener('click', () => {
	synopsis.style.display = 'inline';
	synopsis.innerText = 'synopsis: Math.pow(7,2) = 49';
	specsEngine('Math.pow(');
});

/* ------ SPECS BUTTONS (end) ------ */
