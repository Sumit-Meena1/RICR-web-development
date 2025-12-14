function calculate() {
  let units = Number(document.getElementById("units").value.trim());
  if (!units) {
    document.getElementById("unitsError").innerText = "Please Enter Units";
  } else if (units <= 0) {
    document.getElementById("unitsError").innerText =
      "Please Enter Correct Units";
  } else {
    document.getElementById("unitsError").innerText = "";

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
      slb2 = 0o0;
      slb3 = 0o0;
      slb4 = 0o0;
      chrg1 = parseFloat(units * 0.5);
      chrg2 = 0o0;
      chrg3 = 0o0;
      chrg4 = 0o0;
    } else if (units <= 200) {
      slb1 = 50;
      slb2 = units - 50;
      slb3 = 0o0;
      slb4 = 0o0;
      chrg1 = parseFloat(50 * 0.5);
      chrg2 = parseFloat((units - 50) * 0.75);
      chrg3 = 0o0;
      chrg4 = 0o0;
    } else if (units <= 450) {
      slb1 = 50;
      slb2 = 150;
      slb3 = units - 200;
      slb4 = 0o0;
      chrg1 = parseFloat(50 * 0.5);
      chrg2 = parseFloat(150 * 0.75);
      chrg3 = parseFloat((units - 200) * 1.2);
      chrg4 = 0o0;
    } else {
      slb1 = 50;
      slb2 = 150;
      slb3 = 250;
      slb4 = units - 450;
      chrg1 = parseFloat(50 * 0.5);
      chrg2 = parseFloat(150 * 0.75);
      chrg3 = parseFloat(250 * 1.2);
      chrg4 = parseFloat((units - 450) * 1.5);
    }

    let total = parseFloat(chrg1 + chrg2 + chrg3 + chrg4);
    let surcharge = parseFloat(total * 0.2);
    let final = total + surcharge;

    document.getElementById("sl1").innerText = slb1;
    document.getElementById("sl2").innerText = slb2;
    document.getElementById("sl3").innerText = slb3;
    document.getElementById("sl4").innerText = slb4;

    document.getElementById("ch1").innerText = "\u20B9 " + chrg1.toFixed(2);
    document.getElementById("ch2").innerText = "\u20B9 " + chrg2.toFixed(2);
    document.getElementById("ch3").innerText = "\u20B9 " + chrg3.toFixed(2);
    document.getElementById("ch4").innerText = "\u20B9 " + chrg4.toFixed(2);

    document.getElementById("ttl").innerText = "\u20B9 " + total.toFixed(2);
    document.getElementById("sur").innerText = "\u20B9 " + surcharge.toFixed(2);
    document.getElementById("final").innerText = "\u20B9 " + final.toFixed(2);
  }
}

function clean() {
  window.location.reload();
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
