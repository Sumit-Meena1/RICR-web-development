function calculate() {
  let bill = Number(document.getElementById("billAmount").value);
  let service = parseFloat(document.getElementById("service").value) / 100;
  let people = Number(document.getElementById("people").value);

  let billEach = Number((bill / people).toFixed(2));
  let tipEach = Number(((bill * service) / people).toFixed(2));
  let total = Number((billEach + tipEach).toFixed(2));

  if (!people || !bill || !service) {
    document.getElementById("result").innerText = "Please Enter Correct Data";
  } else {
    document.getElementById(
      "result"
    ).innerText = `Bill Amount: ${billEach}$ \n Tip: ${tipEach}$ \n Total Bill: ${total}$ \n For Each`;
  }
}