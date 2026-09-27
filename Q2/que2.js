let para = document.querySelector("p");

para.classList.add("newclass");

para.style.color = "white";
para.style.height = "100px";
para.style.width = "100px";

console.log(para);

let newBtn = document.createElement("button");

newBtn.innerText = "click me..!";

document.querySelector("button");

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);
console.log(newBtn);

let newbtn2 = document.createElement("button");

newbtn2.innerText = "on";

document.querySelector("button");
newbtn2.style.color = "white";
newbtn2.style.backgroundColor = "black";
newbtn2.style.marginRight = "10px";

document.querySelector("body").prepend(newbtn2);
console.log(newbtn2);

let newdiv = document.createElement("div");

newdiv.innerText = "KARTIK";

document.querySelector("div");
newdiv.style.color = "brown";
newdiv.style.backgroundColor = "pink";
newdiv.style.height = "100px";
newdiv.style.width = "100px";
newdiv.style.marginBottom = "10px";

document.querySelector("body").prepend(newdiv);

console.log(newdiv);

let newh1 = document.createElement("h1");
newh1.innerText = "Welcome";

newh1.style.color = "blue";
console.log(newh1);

document.querySelector("body").prepend(newh1);

// document.querySelector("div").append(newh1);

let newdiv2 = document.createElement("div");

document.querySelector("div");

document.querySelector("newdiv2");

newdiv2.style.color = "red";
newdiv2.style.backgroundColor = "skyblue";
newdiv2.style.height = "100px";
newdiv2.style.width = "100px";

newdiv2.innerText = "this is new div 2";

console.log(newdiv2);

document.querySelector("body").append(newdiv2);
