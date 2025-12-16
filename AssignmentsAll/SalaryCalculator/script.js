function calculate() {
  let salary = Number(document.getElementById("salary").value.trim());
  if (!salary) {
    document.getElementById("error").innerText = "Please Enter Salary";
  } else if (salary < 0) {
    document.getElementById("error").innerText = "Please Enter Correct Salary";
  } else {
    document.getElementById("error").innerText = "";
    document.getElementById("btn").disabled = true;
    spin();

    let { hra, da, gross } = grossSalary(salary);
    setTimeout(() => {
      document.getElementById("basic").innerText =
        " Rs. " + salary.toLocaleString("en-IN");
      document.getElementById("hra").innerText =
        " Rs. " + hra.toLocaleString("en-IN");
      document.getElementById("da").innerText =
        " Rs. " + da.toLocaleString("en-IN");
      document.getElementById("gross").innerText =
        " Rs. " + gross.toLocaleString("en-IN");
      document.getElementById("done").innerText =
        "Gross Salary Calculated Successfully!!";
    }, 1000);
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

function grossSalary(salary) {
  let hra = parseFloat(salary * 0.2).toFixed(2);
  let da = parseFloat(salary * 0.5).toFixed(2);
  let gross = (Number(salary) + Number(hra) + Number(da)).toFixed(2);
  return { hra, da, gross };
}

function reset() {
  window.location.reload();
}
