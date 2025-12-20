document.getElementById("a").disabled = true;
document.getElementById("p").disabled = true;
let name = document.getElementById("name").value.trim();
console.log(name);
function add() {
  window.location.href = "add.html";
}
function done() {
  let name = document.getElementById("name").value.trim();

  if (!name) {
    document.getElementById("error").innerText = "Required";
  } else {
    document.getElementById("error").innerText = "";
    alert("Student Added Successfully!!");
     let div = document.createElement("div");
     div.innerHTML = `<div class="d-flex justify-content-between align-content-center" id="data" style="border-bottom: 1px solid gainsboro;">
          <p class="w-100 text-light align-content-center fs-4" id="name">Sumit Meena</p>
          <div class="d-flex w-75 float-end">
            <button class="w-25 btn mx-2 my-2 rounded-2 text-center align-content-center fw-bold fs-4 text-light" style="border: 1px solid white;" id="p">P</button>
            <button class="w-25 btn rounded-2 my-2  text-center align-content-center fw-bold fs-4 text-light" style="border: 1px solid white;" id="a">A</button>
          </div>
        </div>`
        document.getElementById("main").appendChild(div);
  }
}
function take()
{
  window.location.href = "index.html";

}






// // document.getElementById("a").disabled = true;
// // document.getElementById("p").disabled = true;
// // function submit() {
// //   document.getElementById("a").style.backgroundColor = "red";
// //   document.getElementById("p").style.backgroundColor = "green";
// // }

// // function take() {
// //   document.getElementById("a").disabled = false;
// //   document.getElementById("p").disabled = false;
// //   window.location.href = "index.html";
// // }

// // function add() {
// //   window.location.href = "add.html";
// //   let name = document.getElementById("name").value.trim();

// //   if (!name) {
// //     document.getElementById("error").innerText = "Required";
// //   } else {
// //     alert("Student Added Successfully!!");

// //     function done(name) {
// //       //   window.location.href = "index.html";
// //       if (!name) {
// //         document.getElementById("error").innerText = "Required";
// //       } else {
// //         alert("Student Added Successfully!!");
// //       }
// //     }
// //   }
// // }
// // done(name);

// // function done(name) {
// // //   window.location.href = "index.html";
// //   if (!name) {
// //     document.getElementById("error").innerText = "Required";
// //   } else {
// //     alert("Student Added Successfully!!")
// //   }
// // }
// document.getElementById("a").disabled = true;
// document.getElementById("p").disabled = true;

// function submit() {
//   document.getElementById("a").style.backgroundColor = "red";
//   document.getElementById("p").style.backgroundColor = "green";
// }

// function take() {
//   document.getElementById("a").disabled = false;
//   document.getElementById("p").disabled = false;
//   window.location.href = "index.html";
// }

// function add() {
//   let name = document.getElementById("name").value.trim();

//   if (!name) {
//     document.getElementById("error").innerText = "Required";
//   } else {
//     document.getElementById("error").innerText = "";
//     alert("Student Added Successfully!!");
//     window.location.href = "index.html";
//   }
// }
