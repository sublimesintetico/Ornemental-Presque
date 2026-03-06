/*import { Previewer } from 'pagedjs';
let paged = new Previewer();
let flow = paged.preview(DOMContent, ["path/to/css/file.css"], document.body).then((flow) => {
	console.log("Rendered", flow.total, "pages.");
})*/

window.addEventListener("load", () => {
	escribirType();
})

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let gridRows = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13];
let gridColumns = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13];
let zIndex = 0
let rotX = 0
let rotY = 0

rS = Math.max(1, rS); rE = Math.min(25, rE);
cS = Math.max(1, cS); cE = Math.min(25, cE);

function centralOrnament(i, row, col, size) {
	// Recortar size si se sale del borde inferior/derecho
	size = Math.min(size, 26 - row, 26 - col);
	size = Math.max(1, size);

	let rS, cS;

	if (i === 1) {
		rS = row;
		cS = col;
	} else if (i === 2) {
		rS = row;
		cS = 27 - col - size;
	} else if (i === 3) {
		rS = 27 - row - size;
		cS = col;
	} else { // i === 4
		rS = 27 - row - size;
		cS = 27 - col - size;
	}

	const rE = rS + size;
	const cE = cS + size;

	return `grid-area: ${rS} / ${cS} / ${rE} / ${cE};`;
}


function rotation(i) {
	if (i === 1) {
			return 'transform: scale(1, 1);';
		} else if (i === 2) {
			return 'transform: scaleX(-1);';
		} else if (i === 3) {
			return 'transform: scaleY(-1);';
		} else { // i === 4
			return 'transform: scale(-1, -1);';
	}
}

function escribirType() {
	texto = document.getElementById("texto-input");
	escribir = document.getElementById("escribime");
	let funcUses = 0;
	let row = 13;
	let col = 13;

	texto.addEventListener("keydown", function(e){

		if (alphabet.includes(e.key.toLowerCase())) {
			zIndex ++ 
			funcUses ++			
			let size = Math.floor(Math.random()*3) + 2

			for (var i = 1; i <= 4; i++) {
				let img = document.createElement('img');
				img.src = '/media/trying0/ornaments/No-Contour/' + e.key.toLowerCase() + '.png';
				img.style = centralOrnament(i, row, col, size) +"z-index:" + zIndex + "; justify-items: center; align-items: center; object-fit: contain; width: 100%; border: solid; border-width: 0.5px; border-color: white; outline: 0.5px solid black;" + rotation(i)
				document.getElementById('grid').appendChild(img);
			}

			if (funcUses % 2 === 0) {
				row += Math.floor(Math.random() * 2) + 1
				if ((Math.floor(Math.random() * 6) + 1) === 2) {
					col -= Math.floor(Math.random() * 4) + 1
				}
				if ((Math.floor(Math.random() * 6) + 1) === 3) {
					col += Math.floor(Math.random() * 4) + 1
					if (col + 4 > 25) {
						col = 13
					}
				}
				if (row + 4 > 25) {
					row = 13
				}
			} else {
				col += Math.floor(Math.random() * 2) + 1
				if ((Math.floor(Math.random() * 6) + 1) === 2) {
					row -= Math.floor(Math.random() * 3) + 1
				}
				if ((Math.floor(Math.random() * 6) + 1) === 3) {
					row += Math.floor(Math.random() * 3) + 1
					if (row + 4 > 25) {
						row = 13
					}
				}
				if (col + 4 > 25) {
					col = 13
				}
			}

		}
	})
}

/* window.addEventListener("load", () => {
	escribirType();
})

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let zIndex = 0

/*
 * SISTEMA DE COORDENADAS
 * ─────────────────────────────────────────────────────
 * El grid es 25 filas × 24 columnas (índices CSS: 1–25 filas, 1–25 cols).
 * El eje de simetría horizontal está entre la fila 13 y 14.
 * El eje de simetría vertical  está entre la col  12 y 13.
 *
 * Para un ornamento que empieza en (row, col) con tamaño size:
 *   Cuadrante 1 (abajo-derecha):    rS=row,          cS=col
 *   Cuadrante 2 (abajo-izquierda):  rS=row,          cS=27-col-size
 *   Cuadrante 3 (arriba-derecha):   rS=27-row-size,  cS=col
 *   Cuadrante 4 (arriba-izquierda): rS=27-row-size,  cS=27-col-size
 *
 * rEnd = rS + size,  cEnd = cS + size  (siempre)
 * /

function centralOrnament(i, row, col, size) {
	// Recortar size si se sale del borde inferior/derecho
	size = Math.min(size, 25 - row, 25 - col);
	size = Math.max(1, size);

	let rS, cS;

	if (i === 1) {
		rS = row;
		cS = col;
	} else if (i === 2) {
		rS = row;
		cS = 27 - col - size;
	} else if (i === 3) {
		rS = 27 - row - size;
		cS = col;
	} else { // i === 4
		rS = 27 - row - size;
		cS = 27 - col - size;
	}

	const rE = rS + size;
	const cE = cS + size;

	return `grid-area: ${rS} / ${cS} / ${rE} / ${cE};`;
}

function rotation(i) {
	if      (i === 1) return 'transform: scale(1, 1);';
	else if (i === 2) return 'transform: scaleX(-1);';
	else if (i === 3) return 'transform: scaleY(-1);';
	else              return 'transform: scale(-1, -1);';
}

/*
 * ESTRATEGIA DE COBERTURA
 * ─────────────────────────────────────────────────────
 * Se genera una lista de anclas en la mitad inferior-derecha del grid:
 * row ∈ [14..25], col ∈ [13..24]. Los 4 cuadrantes simétricos
 * cubren automáticamente el resto del grid.
 * Las anclas se recorren en orden aleatorio y se remezclan al agotarse.
 * /

function buildAnchors() {
	const anchors = [];
	for (let r = 14; r <= 24; r += 2) {
		for (let c = 13; c <= 24; c += 2) {
			anchors.push([r, c]);
		}
	}
	// Fisher-Yates shuffle
	for (let k = anchors.length - 1; k > 0; k--) {
		const j = Math.floor(Math.random() * (k + 1));
		[anchors[k], anchors[j]] = [anchors[j], anchors[k]];
	}
	return anchors;
}

function escribirType() {
	const texto   = document.getElementById("texto-input");
	let anchors   = buildAnchors();
	let anchorIdx = 0;

	texto.addEventListener("keydown", function(e) {
		if (!alphabet.includes(e.key.toLowerCase())) return;

		zIndex++;

		// Tomar la siguiente ancla; si se agotaron, remezclar
		if (anchorIdx >= anchors.length) {
			anchors   = buildAnchors();
			anchorIdx = 0;
		}

		const [row, col] = anchors[anchorIdx++];

		// Tamaño aleatorio 2–4
		const size = Math.floor(Math.random() * 4) + 2;

		for (let i = 1; i <= 4; i++) {
			const img = document.createElement('img');
			img.src   = '/media/trying0/ornaments/' + e.key.toLowerCase() + '.jpg';
			img.style = centralOrnament(i, row, col, size)
				+ `z-index: ${zIndex}; object-fit: contain; width: 100%;`
				+ rotation(i);
			document.getElementById('grid').appendChild(img);
		}
	});
} */

