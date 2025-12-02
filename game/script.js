function start() {
  console.log("Game Started");

  document.getElementById("roll1").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
}

function restart() {
  window.location.reload();
}

function roll1() {
  console.log("pl1playing");
  let score1 = Number(document.getElementById("score1").innerText);

  const df = Math.floor(Math.random() * 6) + 1;

  switch (df) {
    case 1: {
      document.getElementById("p1dice").src =
        "https://i.pinimg.com/1200x/ea/74/64/ea7464d0770902b7914e50d999f74281.jpg";
        break;
    }
    case 2: {
      document.getElementById("p1dice").src =
        "https://www.iconpacks.net/icons/free-icons-6/free-red-dice-number-two-icon-20203-thumb.png";
        break;
    }
    case 3: {
      document.getElementById("p1dice").src =
        "https://i.pinimg.com/736x/cd/9d/9b/cd9d9b0305278ceebf3640475261864b.jpg";
        break;
    }
    case 4: {
      document.getElementById("p1dice").src =
        "https://static.vecteezy.com/system/resources/previews/000/365/695/non_2x/dice-four-vector-icon.jpg";
        break;
    }
    case 5: {
      document.getElementById("p1dice").src =
        "https://i.pinimg.com/736x/eb/e0/9c/ebe09c40004e078ce01afeeb8fb70767.jpg";
        break;
    }
    case 6: {
      document.getElementById("p1dice").src =
        "https://as1.ftcdn.net/jpg/05/35/79/02/1000_F_535790228_kAwKtmOh1GaihRPEJt4fiVY4y53g3yIv.jpg";
    }

  }
  if (df === 6) {
    document.getElementById("roll1").disabled = true;
    document.getElementById("roll2").disabled = false;
  } else {
  }

  score1 = score1 + df;
  document.getElementById("score1").innerText = score1;
}

function roll2() {
  console.log("pl2playing");
  let score2 = Number(document.getElementById("score2").innerText);

  const df = Math.floor(Math.random() * 6) + 1;
  console.log(df);

  if (df === 6) {
    document.getElementById("roll1").disabled = false;
    document.getElementById("roll2").disabled = true;
  } else {
  }

  score2 = score2 + df;
  document.getElementById("score2").innerText = score2;
}
