function submit() {
  const nm = document.getElementById("fullName").value;
  const em = document.getElementById("email").value;
  const cntct = document.getElementById("contact").value;
  const dob = document.getElementById("dob").value;

  const qlfn = document.getElementById("qualification").value;
  const grade = document.getElementById("grade").value;

  const valid = true;

  document.querySelectorAll(".error").forEach((element) => {
    element.innerHTML = "";
  });

  if (!nm) {
    document.getElementById("nameError").innerText = "Required"; valid = false;
  } else if (!/^[A-Za-z ]+$/.test(nm)) {
    document.getElementById("nameError").innerText =
      "Please Enter A Valid Name"; valid = false;
  }
  if(!em){
    document.getElementById("emailError").innerText = "Required"; valid = false;
  }else
  if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)) {
    alert("Please Enter A Valid Email"); valid = false;
  }

  if(!cntct){
    document.getElementById("phoneError").innerText = "Required"; valid = false;
  }else
  if (!/^[6-9]\d{9}$/.test(cntct)) {
    alert("Enter a 10-digit Indian mobile number");valid=false;
  }

  if (age < 18) {
    alert("Please Enter Your Age");
  }
}

function reset() {
  window.location.reload();
}
