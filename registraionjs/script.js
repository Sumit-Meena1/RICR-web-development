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
  let time = document.querySelector('input[name="timing"]:checked');
  let address = document.getElementById("ad1").value.trim();
  let city = document.getElementById("city").value.trim();
  let pin = document.getElementById("pinCode").value.trim();

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
  const grdName = document.getElementById("guardianName").value;
  const grdcntct = document.getElementById("cntc").value;

  let valid = true;

  if (!nm) {
    document.getElementById("nameError").innerText = "Required";
    valid = false;
  } else if (!/^[A-Za-z ]+$/.test(nm)) {
    document.getElementById("nameError").innerText =
      "Please Enter A Valid Name";
    valid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }
  if (!em) {
    document.getElementById("emailError").innerText = "Required";
    valid = false;
  } else if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)) {
    document.getElementById("emailError").innerText =
      "Please Enter A Valid Email";
    valid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  if (!cntct) {
    document.getElementById("phoneError").innerText = "Required";
    valid = false;
  } else if (!/^[6-9]\d{9}$/.test(cntct)) {
    document.getElementById("phoneError").innerText =
      "Enter a 10-digit Indian mobile number";
    valid = false;
  } else {
    document.getElementById("phoneError").innerText = "";
  }

  if (!dob) {
    document.getElementById("dobError").innerText = "Required";
    valid = false;
  }
  else{
    document.getElementById("dobError").innerText = "";
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
  }else{
    document.getElementById("qlfError").innerText = "";
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
  }else{
    document.getElementById("grdError").innerText = "";
  }
  if (!crs) {
    document.getElementById("crsError").innerText = "Please select a Course";
    valid = false;
  }else{
    document.getElementById("crsError").innerText = "";
  }

  if (!selected) {
    document.getElementById("batchError").innerText =
      "Please Select one Batch Timing";
    valid = false;
  }else{
    document.getElementById("batchError").innerText = "";
  }
  if (!time) {
    document.getElementById("timeError").innerText = "Please Select Timing";
    valid = false;
  }else{
    document.getElementById("timeError").innerText = "";
  }

  if (!address) {
    document.getElementById("addressError").innerText = "Required";
    valid = false;
  } else if (!/^[A-Za-z0-9\s,./-]{5,100}$/.test(address)) {
    document.getElementById("addressError").innerText =
      "Please Enter Correct Address";
    valid = false;
  } else {
    document.getElementById("addressError").innerText = "";
  }

  if (!city) {
    document.getElementById("cityError").innerText = "Required";
    valid = false;
  } else if (!/^[A-Za-z\s]{2,30}$/.test(city)) {
    document.getElementById("cityError").innerText =
      "Please Enter City Name Properly";
    valid = false;
  } else {
    document.getElementById("cityError").innerText = "";
  }

  if (!pin) {
    document.getElementById("pinError").innerText = "Required";
    valid = false;
  } else if (!/^[1-9][0-9]{5}$/.test(pin)) {
    document.getElementById("pinError").innerText =
      "Please Enter Correct 6-Digit Pin Code";
    valid = false;
  } else {
    document.getElementById("pinError").innerText = "";
  }

  if (!grdName) {
    document.getElementById("grdNameError").innerText = "Required";
    valid = false;
  } else if (!/^[A-Za-z ]+$/.test(grdName)) {
    document.getElementById("grdNameError").innerText =
      "Please Enter Full Guardian Name";
    valid = false;
  }else{
    document.getElementById("grdNameError").innerText = "";
  }

  if (!grdcntct) {
    document.getElementById("grdPhoneError").innerText = "Required";
    valid = false;
  } else if (!/^[6-9]\d{9}$/.test(grdcntct)) {
    document.getElementById("grdPhoneError").innerText =
      "Enter a 10-digit Indian mobile number";
    valid = false;
  }else{
    document.getElementById("grdPhoneError").innerText = "";
  }
  if (valid) {
    alert("Form submitted successfully!");
  }
  else{
     alert("Check all Information");
  }
}

function reset() {
  window.location.reload();
}
