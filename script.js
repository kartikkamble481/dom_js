let h2 = document.querySelector("h2");

console.log(h2);

h2.innerText = h2.innerText + "from apna collage ..!";

console.log(h2.innertext);

let divs = document.querySelectorAll(".box");

console.log(divs[0], divs[1], divs[2]);

for (diva of divs) {
  diva.innerText = "OVIIIXII";
  diva++;
}

// divs[0].innerText = "hii";
// divs[1].innerText = "hii";
// divs[2].innerText = "hii";

console.log(divs);

let lovecode = document.querySelectorAll(".love");

console.log(lovecode[0]);

for (love of lovecode) {
  love.innerText = "KARTYAA + KRITII = OVIIIXII Forever";
  love++;
}

console.log(lovecode);

let boxs = document.querySelectorAll(".box1");

for (boxa of boxs) {
  boxa.innerText = "hey babe";
  boxa++;
}

console.log(boxs);

let infos = document.querySelectorAll(".info");
let idx = 1;
for (info of infos) {
  info.innerText = `name = kartik\n age = 21\n DOB = 12/11/2005\n ${idx} `;
  idx++;
}

info.style.backgroundColor = "red";
info.style.color = "white";
info.style.border = "2px solid black";

console.log(info);

let cubes = document.querySelectorAll(".cube");
let index = 1;
console.log(cubes);

for (cube of cubes) {
  cube.innerText = "OVIII";
  index++;
}

cube.style.backgroundColor = "brown";
cube.style.color = "white";
cube.style.fontSize = "20px";
cube.style.border = "2px solid black";

console.log(cube);

let div = document.querySelector("cube");

cube.after(boxs);
cube.style.color = "red";
cube.style.height = "30px";
cube.style.backgroundColor = "pink";

console.log(cube);

// let dox = document.createElement("div");
