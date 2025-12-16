function calculate() {
  let salary = Number(document.getElementById("salary").value.trim());
  if (!salary) {
    document.getElementById("error").innerText = "Please Enter Salary";
  } else if (salary <= 0) {
    document.getElementById("error").innerText = "Please Enter Correct Salary";
  } else {
    document.getElementById("error").innerText = "";
    document.getElementById("btn").disabled = true;
    spin();
    document.getElementById("btn").disabled = false;

    document.getElementById("basic").innerText = "Rs. " + salary;
    let hra = parseFloat(salary*0.20);
    let da = parseFloat(salary*0.50);
    let gross = (salary+hra+da).toFixed(2);
    document.getElementById("hra").innerText = "Rs. " + hra;
    document.getElementById("da").innerText = "Rs. " + da;
    document.getElementById("gross").innerText = "Rs. " + gross;










  }
}
function spin() {
  const loader = document.getElementById("loader");
  loader.style.display = "block";

  setTimeout(() => {
    loader.style.display = "none";
    document.getElementById("btn").disabled = false;
  }, 1000);
}

// Gross Salary Calculated Successfully!!
