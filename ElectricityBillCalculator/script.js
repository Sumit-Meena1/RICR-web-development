function calculate() {
  let units = Number(document.getElementById("units").value.trim());
  if (!units) {
    document.getElementById("unitsError").innerText = "Please Enter Units";
  } else if (units <= 0) {
    document.getElementById("unitsError").innerText =
      "Please Enter Correct Units";
  } else {
    document.getElementById("unitsError").innerText = "";
  }

  let slb1;
  let slb2;
  let slb3;
  let slb4;
  let chrg1;
  let chrg2;
  let chrg3;
  let chrg4;

  if (units <= 50) {
    slb1 = units;
    chrg1 = parseFloat((units * 0.5).toFixed(2));
  } else if (units <= 200) {
    slb1 = 50;
    slb2 = units - 50;
    chrg1 = parseFloat((50 * 0.5).toFixed(2));
    chrg2 = parseFloat(((units - 50) * 0.75).toFixed(2));
  } else if (units <= 450) {
    slb1 = 50;
    slb2 = 150;
    slb3 = units - 200;
    chrg1 = parseFloat((50 * 0.5).toFixed(2));
    chrg2 = parseFloat((150 * 0.75).toFixed(2));
    chrg3 = parseFloat(((units - 200) * 1.2).toFixed(2));
  }
  else
  {
    slb1 = 50;
    slb2 = 150;
    slb3 = 250;
    slb4 = units-450;
    chrg1 = parseFloat((50 * 0.5).toFixed(2));
    chrg2 = parseFloat((150 * 0.75).toFixed(2));
    chrg3 = parseFloat((250 * 1.2).toFixed(2));
    chrg4 = parseFloat(((units - 450)*1.50).toFixed(2));

  }

  let total = (chrg1+chrg2+chrg3+chrg4).toFixed(2);
}

// double bill  , subCharges;
// 		if(units<=50)
// 		{
// 			bill = units*0.50;
// 		}
// 		else if(units <=200)
// 		{
// 			bill = (50*0.50)+((units - 50)*0.75);
// 		}
// 		else if(units <= 450)
// 		{
// 			bill = (50*0.50)+(150*0.75)+((units - 200)*1.20);
// 		}
// 		else
// 		{
// 			bill = (50*0.50)+(150*0.75)+(250*1.20)+((units - 450)*1.50);
// 		}
// 		subCharges = bill*0.20;
// 		return bill+subCharges;
