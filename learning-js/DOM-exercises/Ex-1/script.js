
const container = document.querySelector("#container");
const content = document.querySelector(".content");
container.appendChild(content);

const para = document.createElement("p");

para.textContent = "Hey I'm red!";
para.style.color = "red";
content.appendChild(para);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
content.appendChild(h3);

const div1 = document.createElement("div");
div1.setAttribute("style" , "border: 2px solid black; background: pink");
content.appendChild(div1);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div1.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div1.appendChild(p2);