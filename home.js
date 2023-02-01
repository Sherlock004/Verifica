let p, q, e;
let prodotto;
let phi;
let messaggio;

function getData() {
  p = document.getElementById("p").value;
  q = document.getElementById("q").value;
  e = document.getElementById("e").value;
  messaggio = document.getElementById("msg").value;
  calcoli();
}

function Chiavi() {
  getData();
  document.getElementById("ChiavePubblica").innerHTML = `Chiave pubblica: (${e},${prodotto})`;
  document.getElementById("ChiavePrivata").innerHTML = `Chiave privata: (${chiavePrivata(e, phi)},${prodotto})`;
}

function calcoli() {
  prodotto = product(p, q);
  phi = CalcoloPhi(p, q);
}

function chiavePrivata(e, phi) {
  let d = 0;
  for (let i = 1; i < phi; i++) {
    if ((e * i) % phi == 1) {
      d = i;
      break;
    }
  }

  return d;
}

function product(p, q) {
  return p * q;
}

function CalcoloPhi(p, q) {
  return (p - 1) * (q - 1);
}

let c = 1;
function Cripta() {
  if(c != 1) c = 1;
  for (let i = 0; i < e; i++) {
    c = (c * messaggio) % prodotto;
  }
  document.getElementById("msgCriptato").innerHTML = `Messaggio criptato: ${c}`;
}

function Decripta() {
  let m2 = 1;
  for (let i = 0; i < chiavePrivata(e, phi); i++) {
    m2 = (m2 * c) % prodotto;
  }
  document.getElementById("msgDecriptato").innerHTML = `Messaggio decriptato: ${m2}`;
}

let chiaviPubblicaS;
let chiaviPrivataS;

function getChiavi() {
  let temp1 = document.getElementById("chiavePubblica").value;
  chiaviPubblicaS = temp1.split(",").map(i => parseInt(i));

  let temp2 = document.getElementById("chiavePrivata").value;
  chiaviPrivataS = temp2.split(",").map(i => parseInt(i));

  let m = document.getElementById("messaggio").value;
  let c = 1;
  for (let i = 0; i < chiaviPubblicaS[0]; i++) {
    c = (c * m) % chiaviPubblicaS[1];
  }

  document.getElementById("criptato").innerHTML = `Messaggio criptato: ${c}`;

  let m2 = 1;
  for (let i = 0; i < chiaviPrivataS[0]; i++) {
    m2 = (m2 * c) % chiaviPrivataS[1];
  }

  
  document.getElementById("decriptato").innerHTML = `Messaggio decriptato: ${m2}`;
}
