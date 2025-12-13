function calculate() {
  const dob = new Date(document.getElementById("birth").value);
  const current = new Date(document.getElementById("current").value);
  if (!dob || !current ) {
    document.getElementById("result").innerText = "Please Select Both Dates!";
    return;
  }

  let age = current.getFullYear() - dob.getFullYear();

  if (age < 0) {
    document.getElementById("result").innerText = "Please Enter Correct Dates";
  } else {
    document.getElementById("result").innerText = `Your age is ${age} years.`;
  }
}
