function on() {
  document.getElementById("bulb").style.backgroundColor = "yellow";
}

function of() {
  document.getElementById("bulb").style.backgroundColor = "white";
}

function red() {
  document.getElementById("bulb").style.backgroundColor = "red";
}

function blue() {
  document.getElementById("bulb").style.backgroundColor = "blue";
}
const userclr = document.getElementById("color");

userclr.addEventListener("change", () => changeBulbColor(userclr.value));

function changeBulbColor(color) {
  document.getElementById("bulb").style.backgroundColor = color;
}

function SB_control() {
  const btn = document.getElementById("sbbutton");

  if (btn.innerText === "on") {
    document.getElementById("sbbutton").innerText = "off";
    document.getElementById("smartBulb").classList.add("on");
  } else {
    document.getElementById("sbbutton").innerText = "on";
    document.getElementById("smartBulb").classList.remove("on");
  }
}

function SB_control2() {
  document.getElementById("smartBulb").classList.toggle("on");
}
