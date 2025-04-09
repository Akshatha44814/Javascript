const nodeCreate = () => {
  const divE = document.createElement("div");

  divE.innerHTML = "<h1>Header</h1>";

  const pE = document.createElement("p");
  pE.innerText = "paragraph";
  divE.appendChild(pE);
  document.body.appendChild(divE);
};

const be = document.createElement("button");
be.innerText = "click";
be.addEventListener("click", () => {
  nodeCreate();
});
document.body.appendChild(be);

