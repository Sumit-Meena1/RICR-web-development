const bgl = document.getElementById("bgcl");

const hdg = document.getElementById("hdcl");


const prg = document.getElementById("pcl");


bgl.addEventListener("change", () => changeBgl(bgl.value));

function changeBgl(color) {
  document.getElementById("inner").style.backgroundColor = color;
}



hdg.addEventListener("change", () => changehdcl(hdg.value));

function changehdcl(color) {
  document.getElementById("h2").style.color = color;
}




prg.addEventListener("change", () => changeprg(prg.value));

function changeprg(color) {
  document.getElementById("para").style.color = color;
}
