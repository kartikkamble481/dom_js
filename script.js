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

// practice set 1 in dom manipulation

let newBtn = document.createElement("button");

newBtn.innerText = "click me..!";

document.querySelector("button");

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

let newdiv = document.createElement("div");

newdiv.innerText = "click me..!";

document.querySelector("div");

newdiv.style.color = "white";
newdiv.style.backgroundColor = "red";
newdiv.style.height = "100px";
newdiv.style.width = "100px";
newdiv.style.border = "2px solid black";
newdiv.style.alignItems = "center";
newdiv.style.textAlign = "center";
newdiv.style.alignContent = "center";

document.querySelector("body").after(newdiv);
