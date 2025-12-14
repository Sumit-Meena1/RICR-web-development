function rock() {
  let ai = Math.floor(Math.random() * 3) + 1;
  document.getElementById("userimg").src =
    "https://cbx-prod.b-cdn.net/COLOURBOX8093018.jpg?width=800&height=800&quality=70";
  if (ai === 1) {
    document.getElementById("aiimg").src =
      "https://cbx-prod.b-cdn.net/COLOURBOX8093018.jpg?width=800&height=800&quality=70";
    document.getElementById("result").innerText = "Draw!";
  } else if (ai === 2) {
    document.getElementById("aiimg").src =
      "https://cbx-prod.b-cdn.net/COLOURBOX8093037.jpg?width=800&height=800&quality=70";
    document.getElementById("result").innerText = "You Lose!";
    let span = document.getElementById("aiscore");
    span.innerText = Number(span.innerText) + 1;
  } else if (ai === 3) {
    document.getElementById("aiimg").src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgZRZd0XtqRI6NVNzzXX_V1pwDfrOV7-d2w&s";
    document.getElementById("result").innerText = "You Won!";
    let span = document.getElementById("userscore");
    span.innerText = Number(span.innerText) + 1;
  }
}

function paper() {
  let ai = Math.floor(Math.random() * 3) + 1;
  document.getElementById("userimg").src =
    "https://cbx-prod.b-cdn.net/COLOURBOX8093037.jpg?width=800&height=800&quality=70";
  if (ai === 1) {
    document.getElementById("aiimg").src =
      "https://cbx-prod.b-cdn.net/COLOURBOX8093018.jpg?width=800&height=800&quality=70";
    document.getElementById("result").innerText = "You Won!";
    let span = document.getElementById("userscore");
    span.innerText = Number(span.innerText) + 1;
  } else if (ai === 2) {
    document.getElementById("aiimg").src =
      "https://cbx-prod.b-cdn.net/COLOURBOX8093037.jpg?width=800&height=800&quality=70";
    document.getElementById("result").innerText = "Draw!";
  } else if (ai === 3) {
    document.getElementById("aiimg").src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgZRZd0XtqRI6NVNzzXX_V1pwDfrOV7-d2w&s";
    document.getElementById("result").innerText = "You Lose!";
    let span = document.getElementById("aiscore");
    span.innerText = Number(span.innerText) + 1;
  }
}

function secissor() {
  let ai = Math.floor(Math.random() * 3) + 1;
  document.getElementById("userimg").src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgZRZd0XtqRI6NVNzzXX_V1pwDfrOV7-d2w&s";
  if (ai === 1) {
    document.getElementById("aiimg").src =
      "https://cbx-prod.b-cdn.net/COLOURBOX8093018.jpg?width=800&height=800&quality=70";
    document.getElementById("result").innerText = "You lose!";
    let span = document.getElementById("aiscore");
    span.innerText = Number(span.innerText) + 1;
  } else if (ai === 2) {
    document.getElementById("aiimg").src =
      "https://cbx-prod.b-cdn.net/COLOURBOX8093037.jpg?width=800&height=800&quality=70";
    document.getElementById("result").innerText = "You Won!";
    let span = document.getElementById("userscore");
    span.innerText = Number(span.innerText) + 1;
  } else if (ai === 3) {
    document.getElementById("aiimg").src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgZRZd0XtqRI6NVNzzXX_V1pwDfrOV7-d2w&s";
    document.getElementById("result").innerText = "Draw!";
  }
}