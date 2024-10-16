import "./style.css";

let global_container = document.createElement("div");
global_container.className = "global-container";
document.body.append(global_container);

console.log(global_container.style.backgroundColor);