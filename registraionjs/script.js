document.querySelectorAll(".error").forEach((element) => {
  element.innerHTML = "";
});
function submit() {
  const nm = document.getElementById("fullName").value;
  const em = document.getElementById("email").value;
  const cntct = document.getElementById("contact").value;
  const dob = document.getElementById("dob").value;

  const qlfn = document.getElementById("qualification").value;
  const grade = document.getElementById("grade").value.trim();

  const crs = document.getElementById("course").value;

  const batchInputs = document.querySelectorAll('input[name="batch"]');

  batchInputs.forEach((box) => {
    box.addEventListener("change", () => {
      batchInputs.forEach((otherBox) => {
        if (otherBox !== box) {
          otherBox.checked = false;
        }
      });
    });
  });
  const selected = document.querySelector('input[name="batch"]:checked');

  let valid = true;

  if (!nm) {
    document.getElementById("nameError").innerText = "Required";
    valid = false;
  } else if (!/^[A-Za-z ]+$/.test(nm)) {
    document.getElementById("nameError").innerText =
      "Please Enter A Valid Name";
    valid = false;
  }
  if (!em) {
    document.getElementById("emailError").innerText = "Required";
    valid = false;
  } else if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)) {
    document.getElementById("emailError").innerText =
      "Please Enter A Valid Email";
    valid = false;
  }

  if (!cntct) {
    document.getElementById("phoneError").innerText = "Required";
    valid = false;
  } else if (!/^[6-9]\d{9}$/.test(cntct)) {
    document.getElementById("phoneError").innerText =
      "Enter a 10-digit Indian mobile number";
    valid = false;
  }

  if (!dob) {
    document.getElementById("dobError").innerText = "Required";
    valid = false;
  }
  let birthDate = new Date(dob);
  let today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  let month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (age < 15) {
    document.getElementById("dobError").innerText =
      "You must be at least 15 years old";
    valid = false;
  }

  if (!qlfn) {
    document.getElementById("qlfError").innerText =
      "Please select a qualification";
    valid = false;
  }
  if (!grade) {
    document.getElementById("grdError").innerText = "Required";
    valid = false;
  } else if (
    !(/^\d{1,2}$/.test(grade) && Number(grade) <= 100) ||
    /^[A-F]$/i.test(grade)
  ) {
    document.getElementById("grdError").innerText =
      "Please Enter A Valid Percentage Or Grade";
    valid = false;
  }
  if (!crs) {
    document.getElementById("crsError").innerText = "Please select a Course";
    valid = false;
  }

  if (!selected) {
    document.getElementById("batchError").innerText =
      "Please Select one Batch Timing";
    valid = false;
    return;
  }

  
}

function reset() {
  window.location.reload();
}
