function input(char) {
  if (char === "=") {
    const exp = document.getElementById("display").value;
    document.getElementById("display").value = eval(exp);
  } else if (char === "c") {
    document.getElementById("display").value = "";
  } else {
    let exp = document.getElementById("display").value;
    exp = exp + char;

    document.getElementById("display").value = exp;
  }
}

document.addEventListener("keydown", (sum) => {
  console.log(sum.key);
  if (sum.key === "Enter") {
    input("=");
  } else if (
    sum.key === "1" ||
    sum.key === "2" ||
    sum.key === "3" ||
    sum.key === "4" ||
    sum.key === "5" ||
    sum.key === "6" ||
    sum.key === "7" ||
    sum.key === "8" ||
    sum.key === "9" ||
    sum.key === "0" ||
    sum.key === "+" ||
    sum.key === "-" ||
    sum.key === "*" ||
    sum.key === "/" ||
    sum.key === "."
  ) {
    input(sum.key);
  } else if (sum.key === "Backspace") {
    input("c");
  }
});
