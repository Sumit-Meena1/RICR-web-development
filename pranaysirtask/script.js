  

function states() {
  
  const sname = document.getElementById("state").value;
  if (sname === "jammu & kashmir") {
    placeFlag(900, 300);
  } else if (sname === "himachal pradesh") {
    placeFlag(900, 340);
  } else if (sname === "punjab") {
    placeFlag(880, 360);
  } else if (sname === "uttrakhand") {
    placeFlag(880, 360);
  } else if (sname === "hariyana") {
    placeFlag(900, 400);
  } else if (sname === "delhi") {
    placeFlag(908, 412);
  } else if (sname === "rajsthan") {
    placeFlag(820, 470);
  } else if (sname === "uttar pradesh") {
    placeFlag(970, 470);
  } else if (sname === "madhya pradesh") {
    placeFlag(910, 540);
  } else if (sname === "gujarat") {
    placeFlag(810, 540);
  } else if (sname === "daman & div") {
    placeFlag(784, 580);
  } else if (sname === "bihar") {
    placeFlag(1080, 480);
  } else if (sname === "jharkhand") {
    placeFlag(1080, 520);
  } else if (sname === "west bengal") {
    placeFlag(1110, 520);
  } else if (sname === "sikkim") {
    placeFlag(1125, 430);
  } else if (sname === "asam") {
    placeFlag(1225, 450);
  } else if (sname === "arunachal pradesh") {
    placeFlag(1225, 410);
  } else if (sname === "nagaland") {
    placeFlag(1245, 450);
  } else if (sname === "manipur") {
    placeFlag(1240, 480);
  } else if (sname === "mizoram") {
    placeFlag(1220, 510);
  } else if (sname === "tirpura") {
    placeFlag(1190, 510);
  } else if (sname === "meghalya") {
    placeFlag(1190, 470);
  } else if (sname === "chhattisgarh") {
    placeFlag(1000, 570);
  } else if (sname === "maharashtra") {
    placeFlag(900, 600);
  } else if (sname === "telangana") {
    placeFlag(930, 650);
  } else if (sname === "orissa") {
    placeFlag(1050, 600);
  } else if (sname === "andhra pradesh") {
    placeFlag(940, 700);
  } else if (sname === "goa") {
    placeFlag(840, 700);
  } else if (sname === "karnataka") {
    placeFlag(880, 700);
  } else if (sname === "panducheri") {
    placeFlag(960, 770);
  } else if (sname === "tamilnadu") {
    placeFlag(930, 790);
  } else if (sname === "kerala") {
    placeFlag(880, 790);
  } else if (sname === "dadra nagar haveli") {
    placeFlag(825, 590);
  }
}


function placeFlag(x, y,t) {
  const flag = document.createElement("img");

  flag.src =
    "https://static.vecteezy.com/system/resources/previews/016/763/895/non_2x/flag-pointer-location-free-vector.jpg"; // <-- change to your flag URL

  flag.style.position = "absolute";
  flag.style.left = x + "px";
  flag.style.top = y + "px";
  flag.style.width = "30px";
  flag.style.height = "20px";
  flag.style.pointerEvents = "none";
  flag.style.zIndex = 5;
  flag.title = "this is flag";
  

  document.body.appendChild(flag);
}
