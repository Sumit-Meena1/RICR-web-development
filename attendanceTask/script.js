// -------- Navigation ----------
function add() {
  window.location.href = "add.html";
}

function take() {
  window.location.href = "index.html";
}

function submit() {
  alert("Attendance Submitted Successfully!");
}

// -------- Add Student ----------
function done() {
  const nameInput = document.getElementById("name");
  const error = document.getElementById("error");
  const studentName = nameInput.value.trim();

  if (!studentName) {
    error.innerText = "Required";
    return;
  }

  error.innerText = "";

  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.push({ name: studentName, status: "" });

  localStorage.setItem("students", JSON.stringify(students));

  alert("Student Added Successfully!");
  nameInput.value = "";

  window.location.href = "index.html";
}

// -------- Load Students ----------
function loadStudents() {
  const main = document.getElementById("main");
  if (!main) return;

  main.innerHTML = "";

  let students = JSON.parse(localStorage.getItem("students")) || [];

  students.forEach((student, index) => {
    const div = document.createElement("div");
    div.className = "d-flex justify-content-between align-content-center";
    div.style.borderBottom = "1px solid gainsboro";

    div.innerHTML = `
      <p class="w-100 text-light fs-4">${student.name}</p>

      <div class="d-flex w-75">
        <button class="w-25 btn mx-2 my-2 fw-bold fs-4 text-light"
          style="border:1px solid white"
          onclick="markPresent(${index})">P</button>

        <button class="w-25 btn my-2 fw-bold fs-4 text-light"
          style="border:1px solid white"
          onclick="markAbsent(${index})">A</button>
      </div>
    `;
    main.appendChild(div);
  });
}

// -------- Attendance ----------
function markPresent(index) {
  let students = JSON.parse(localStorage.getItem("students"));
  students[index].status = "P";
  localStorage.setItem("students", JSON.stringify(students));
}

function markAbsent(index) {
  let students = JSON.parse(localStorage.getItem("students"));
  students[index].status = "A";
  localStorage.setItem("students", JSON.stringify(students));
}

// -------- Auto Load ----------
window.onload = loadStudents;


// document.getElementById("a").disabled = true;
// document.getElementById("p").disabled = true;
// let name = document.getElementById("name").value.trim();
// console.log(name);
// function add() {
//   window.location.href = "add.html";
// }
// function done() {
//   let name = document.getElementById("name").value.trim();

//   if (!name) {
//     document.getElementById("error").innerText = "Required";
//   } else {
//     document.getElementById("error").innerText = "";
//     alert("Student Added Successfully!!");
//      let div = document.createElement("div");
//      div.innerHTML = `<div class="d-flex justify-content-between align-content-center" id="data" style="border-bottom: 1px solid gainsboro;">
//           <p class="w-100 text-light align-content-center fs-4" id="name">Sumit Meena</p>
//           <div class="d-flex w-75 float-end">
//             <button class="w-25 btn mx-2 my-2 rounded-2 text-center align-content-center fw-bold fs-4 text-light" style="border: 1px solid white;" id="p">P</button>
//             <button class="w-25 btn rounded-2 my-2  text-center align-content-center fw-bold fs-4 text-light" style="border: 1px solid white;" id="a">A</button>
//           </div>
//         </div>`
//         document.getElementById("main").appendChild(div);
//   }
// }
// function take()
// {
//   window.location.href = "index.html";

// }

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
