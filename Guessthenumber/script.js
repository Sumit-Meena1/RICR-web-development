let num = Math.floor(Math.random() * 10) + 1;

function submit() {
    let btn = document.getElementById("btn");
    let guess = Number(document.getElementById("guess").value);

    if (btn.innerText === "Re-Start") {
        num = Math.floor(Math.random() * 10) + 1; 
        document.getElementById("result").innerText = "";
        document.getElementById("guess").value = "";
        btn.innerText = "Submit";
        return;
    }
    if (guess === num) {
        document.getElementById("result").innerText = "Congratulations! You Get It Right";
        btn.innerText = "Re-Start"; 
    }
    else if (guess < num) {
        document.getElementById("result").innerText = "Oops! Try a larger number";
    }
    else {
        document.getElementById("result").innerText = "Oops! Try a smaller number";
    }
}
