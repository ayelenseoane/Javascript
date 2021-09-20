console.log(document.body);

class Asesoria {
  constructor(modalidad, ambientes, precio, id) {
    this.modalidad = modalidad;
    this.ambientes = ambientes;
    this.precio = precio;
    this.id = id;
  }
}

const asesorias = [];

const asesoria0 = new Asesoria("online", 1, 4000, 1);
const asesoria1 = new Asesoria("presencial", 1, 4000, 2);
const asesoria2 = new Asesoria("online", 2, 8000, 3);
const asesoria3 = new Asesoria("presencial", 2, 8000, 4);
const asesoria4 = new Asesoria("online", 3, 12000, 5);
const asesoria5 = new Asesoria("presencial", 3, 12000, 6);

asesorias.push(asesoria0);
asesorias.push(asesoria1);
asesorias.push(asesoria2);
asesorias.push(asesoria3);
asesorias.push(asesoria4);
asesorias.push(asesoria5);

console.log(asesorias);

let toJson = JSON.stringify(asesorias);
localStorage.setItem("asesorias", toJson);

//////////////DOM
const listaJSON = localStorage.getItem("asesorias");
const arrayNormal = JSON.parse(listaJSON);

let selector = document.getElementById("imprimirAsesorias");

arrayNormal.forEach((element) => {
  let contenedor = document.createElement("div");
  contenedor.setAttribute("class", "div");

  let div1 = document.createElement("div");
  div1.setAttribute("class", "card col-3");
  div1.setAttribute("id", "card");

  let div2 = document.createElement("div");
  div2.setAttribute("class", "card-body text-center");
  div1.appendChild(div2);

  let h5 = document.createElement("h5");
  h5.setAttribute("class", "text-center");
  h5.textContent = `Modalidad ${element.modalidad}`;
  div1.appendChild(h5);

  let p1 = document.createElement("p");
  p1.setAttribute("class", "text-center");
  p1.textContent = `Ambientes ${element.ambientes}`;
  div1.appendChild(p1);

  let p2 = document.createElement("p");
  p2.setAttribute("class", "text-center");
  p2.textContent = `${element.precio} $`;
  div1.appendChild(p2);

  let button = document.createElement("button");
  button.setAttribute("class", "btn btn-outline-secondary");
  button.setAttribute("id", `${element.id}`);
  button.setAttribute("onclick", `testing(${element.id})`);
  button.textContent = "Comprar";
  div1.appendChild(button);

  selector.appendChild(div1);
});

//////Funciones
const testing = (onclick) => {
  const objetoComprado = asesorias.find((e) => e.id == onclick);
  console.log(objetoComprado);
};

const venta = () => {
  console.log("Venta");
};

let button1 = document.getElementById("1");
let button2 = document.getElementById("2");
let button3 = document.getElementById("3");
let button4 = document.getElementById("4");
let button5 = document.getElementById("5");
let button6 = document.getElementById("6");

button1.addEventListener("click", venta);
button2.addEventListener("click", venta);
button3.addEventListener("click", venta);
button4.addEventListener("click", venta);
button5.addEventListener("click", venta);
button6.addEventListener("click", venta);

//Efecto (Show)
$("#1").on("click", () => {
  $("#1a").show();
});
$("#2").on("click", () => {
  $("#2a").show();
});
$("#3").on("click", () => {
  $("#3a").show();
});
$("#4").on("click", () => {
  $("#4a").show();
});
$("#5").on("click", () => {
  $("#5a").show();
});
$("#6").on("click", () => {
  $("#6a").show();
});
