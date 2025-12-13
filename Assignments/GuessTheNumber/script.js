let num = Math.floor(Math.random() * 10) + 1;
let nom = Number(1);

function submit() {
  let btn = document.getElementById("btn");
  let guess = Number(document.getElementById("guess").value);
  let icon = document.getElementById("icon");
  

  if (btn.innerText === "Re-Start") {
    num = Math.floor(Math.random() * 10) + 1;
    document.getElementById("result").innerText =
      "Submit To See If You Guess It Right!";
    document.getElementById("guess").value = "";
    btn.innerText = "Submit";
    icon.innerText = "";  
    return;
  }
  if (!guess) {
    document.getElementById("result").innerText = "Please Enter Your Guess";
    return;
  }
  if (guess === num) {
    document.getElementById(
      "result"
    ).innerText = ` Congratulations! You Get It Right \n in ${nom} guesses `;
    icon.innerHTML = `<i class="bi bi-emoji-smile-fill" style="color: green;"></i>`;
    btn.innerText = "Re-Start";
  } else if (guess < num) {
    document.getElementById("result").innerText = "Oops! Try a larger number";
    icon.innerHTML = `<i class="bi bi-emoji-frown-fill" style="color: red;"></i>`;
    nom = Number(nom+1);
  } else {
    document.getElementById("result").innerText = "Oops! Try a smaller number";
    icon.innerHTML = `<i class="bi bi-emoji-frown-fill" style="color: red;"></i>`;
    nom = Number(nom+1);
  }
}
