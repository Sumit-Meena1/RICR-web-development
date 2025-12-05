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

document.getElementById("c1").addEventListener("mouseover", () => {
  fillColour("pink");
});

document.getElementById("c1").addEventListener("mouseleave", () => {
  fillColour("white");
});

document.getElementById("c2").addEventListener("mouseover", () => {
  fillColour("red");
});

document.getElementById("c2").addEventListener("mouseleave", () => {
  fillColour("white");
});

document.getElementById("c3").addEventListener("mouseover", () => {
  fillColour("green");
});

document.getElementById("c3").addEventListener("mouseleave", () => {
  fillColour("white");
});

document.getElementById("c4").addEventListener("mouseover", () => {
  fillColour("blue");
});

document.getElementById("c4").addEventListener("mouseleave", () => {
  fillColour("white");
});

document.getElementById("c5").addEventListener("mouseover", () => {
  fillColour("violet");
});

document.getElementById("c5").addEventListener("mouseleave", () => {
  fillColour("white");
});

document.getElementById("c6").addEventListener("mouseover", () => {
  fillColour("yellow");
});

document.getElementById("c6").addEventListener("mouseleave", () => {
  fillColour("white");
});

document.getElementById("c7").addEventListener("mouseover", () => {
  fillColour("gray");
});

document.getElementById("c7").addEventListener("mouseleave", () => {
  fillColour("white");
});

function fillColour(color) {
  console.log(color);
  document.getElementById("satrangi").style.backgroundColor = color;
}
