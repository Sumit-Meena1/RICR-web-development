document.getElementById("a").disabled = true;
document.getElementById("p").disabled = true;
let name = document.getElementById("name").value.trim();
function submit() {
  document.getElementById("a").style.backgroundColor = "red";
  document.getElementById("p").style.backgroundColor = "green";
}

function take() {
  document.getElementById("a").disabled = false;
  document.getElementById("p").disabled = false;
  window.location.href = "index.html";
}

function add() {
  window.location.href = "add.html";
  
//   if (!name) {
//     document.getElementById("error").innerText = "Required";
//   } else {
//     alert("Student Added Successfully!!")
//   }
}
done(name);

function done(name) {
//   window.location.href = "index.html";
  if (!name) {
    document.getElementById("error").innerText = "Required";
  } else {
    alert("Student Added Successfully!!")
  }
}
