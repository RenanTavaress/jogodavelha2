const jogada = document.querySelectorAll(".jogada");

const quadrado = document.querySelectorAll(".quadrado");
var numJogadas = 0;


function jogadorContraJogador() {
	var jogador = 0;

	quadrado.forEach((box) =>
		box.addEventListener("click", () => {
			if (jogador === 0 && box.textContent == "") {
				box.textContent = "O";
				jogador++;
				numJogadas++;
			} else if (jogador === 1 && box.textContent == "") {
				box.textContent = "X";
				jogador--;
				numJogadas++;
			}

			verificarVencendor();
			if (numJogadas === 9) {
				alert("EMPATEE!!");
				location.reload();
			}
		})
	);
}

function computadorComeca() {
	jogaComputador(quadrado);
	lacoNoTabuleiro(quadrado);
}

function voceComeca() {
	lacoNoTabuleiro(quadrado);
   //jogaComputador(quadrado);
}

function recomecar() {
	location.reload();
}




function jogaComputador(quadrado) {
	verificarVencendor();
	for (let i = 0; i < 1; i++) {
		let number = gerarNumeroRandom();
		if (quadrado[number].textContent === "") {
			setTimeout(() => {
				quadrado[number].textContent = "O";
				verificarVencendor();
				if (numJogadas === 9) {
					alert("EMPATEE!!");
					location.reload();
				}
			}, 500);
			numJogadas++;
		} else {
			i--;
		}
	}
}

function lacoNoTabuleiro(quadrado) {
	quadrado.forEach((box) =>
		box.addEventListener("click", () => {
			if (box.textContent === "") {
				box.textContent = "X";
				jogaComputador(quadrado);
				verificarVencendor();
            if (numJogadas === 9) {
					alert("EMPATEE!!");
					location.reload();
				}
            numJogadas++;
			}
         verificarVencendor();
		})
	);
}


function gerarNumeroRandom() {
	const numRandom = Math.floor(Math.random() * 9);
	return numRandom;
}





function verificarVencendor() {
	let qrd1 = document.getElementById("qrd1");
	let qrd2 = document.getElementById("qrd2");
	let qrd3 = document.getElementById("qrd3");

	let qrd4 = document.getElementById("qrd4");
	let qrd5 = document.getElementById("qrd5");
	let qrd6 = document.getElementById("qrd6");

	let qrd7 = document.getElementById("qrd7");
	let qrd8 = document.getElementById("qrd8");
	let qrd9 = document.getElementById("qrd9");

	if (
		qrd1.textContent === qrd2.textContent &&
		qrd1.textContent === qrd3.textContent &&
		qrd1.textContent !== ""
	) {
		alert(`Jogado com o simbolo "${qrd1.textContent}" foi o vencendor!!!`);
		location.reload();
	} else if (
		qrd4.textContent === qrd5.textContent &&
		qrd4.textContent === qrd6.textContent &&
		qrd4.textContent !== ""
	) {
		alert(`Jogado com o simbolo "${qrd4.textContent}" foi o vencendor!!!`);
		location.reload();
	} else if (
		qrd7.textContent === qrd8.textContent &&
		qrd7.textContent === qrd9.textContent &&
		qrd7.textContent !== ""
	) {
		alert(`Jogado com o simbolo "${qrd7.textContent}" foi o vencendor!!!`);
		location.reload();
	} else if (
		qrd1.textContent === qrd4.textContent &&
		qrd1.textContent === qrd7.textContent &&
		qrd1.textContent !== ""
	) {
		alert(`Jogado com o simbolo "${qrd1.textContent}" foi o vencedor!!!`);
		location.reload();
	} else if (
		qrd2.textContent === qrd5.textContent &&
		qrd2.textContent === qrd8.textContent &&
		qrd2.textContent !== ""
	) {
		alert(`Jogado com o simbolo "${qrd2.textContent}" foi o vencedor!!!`);
		location.reload();
	} else if (
		qrd3.textContent === qrd6.textContent &&
		qrd3.textContent === qrd9.textContent &&
		qrd3.textContent !== ""
	) {
		alert(`Jogado com o simbolo "${qrd3.textContent}" foi o vencedor!!!`);
		location.reload();
	} else if (
		qrd1.textContent === qrd5.textContent &&
		qrd1.textContent === qrd9.textContent &&
		qrd1.textContent !== ""
	) {
		alert(`Jogado com o simbolo "${qrd1.textContent}" foi o vencedor!!!`);
		location.reload();
	} else if (
		qrd3.textContent === qrd5.textContent &&
		qrd3.textContent === qrd7.textContent &&
		qrd3.textContent !== ""
	) {
		alert(`Jogado com o simbolo "${qrd3.textContent}" foi o vencedor!!!`);
		location.reload();
	}
}