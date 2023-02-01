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

function download() {
  
}

