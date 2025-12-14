function calculate() {
  const dobInput = document.getElementById("birth").value;
  const currentInput = document.getElementById("current").value;

  if (!dobInput || !currentInput) {
    document.getElementById("result").innerText = "Please Select Both Dates!";
    return;
  }

  const dob = new Date(dobInput);
  const current = new Date(currentInput);

  if (current < dob) {
    document.getElementById("result").innerText = "Please Enter Correct Dates";
    return;
  }

  let age = current.getFullYear() - dob.getFullYear();
  let monthDiff = current.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && current.getDate() < dob.getDate())) {
    age--;
  }

  document.getElementById("result").innerText = `Your age is ${age} years.`;
}
