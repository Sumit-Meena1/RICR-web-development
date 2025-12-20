
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
function loadStudents() {
  const main = document.getElementById("main");
  if (!main) return;

  main.innerHTML = "";

  let students = JSON.parse(localStorage.getItem("students")) || [];

  students.forEach((student, index) => {
    const div = document.createElement("div");
    div.className = "d-flex justify-content-between align-content-center";
    div.style.borderBottom = "1px solid gainsboro";

    const presentDisabled = student.status ? "disabled" : "";
    const absentDisabled = student.status ? "disabled" : "";

    let pColor = "";
    let aColor = "";

    if (student.status === "P") pColor = "background-color:green;";
    if (student.status === "A") aColor = "background-color:red;";

    div.innerHTML = `
      <p class="w-100 text-light fs-4">${student.name}</p>

      <div class="d-flex w-75">
        <button class="w-25 btn mx-2 my-2 fw-bold fs-4 text-light"
          style="border:1px solid white; ${pColor}"
          ${presentDisabled}
          onclick="markPresent(this, ${index})">P</button>

        <button class="w-25 btn my-2 fw-bold fs-4 text-light"
          style="border:1px solid white; ${aColor}"
          ${absentDisabled}
          onclick="markAbsent(this, ${index})">A</button>
      </div>
    `;

    main.appendChild(div);
  });
}


function markPresent(btn, index) {
  let students = JSON.parse(localStorage.getItem("students"));

  // prevent re-click
  if (students[index].status) return;

  students[index].status = "P";
  localStorage.setItem("students", JSON.stringify(students));

  btn.style.backgroundColor = "green";
  btn.disabled = true;

  // disable Absent button
  btn.nextElementSibling.disabled = true;
}

function markAbsent(btn, index) {
  let students = JSON.parse(localStorage.getItem("students"));

  // prevent re-click
  if (students[index].status) return;

  students[index].status = "A";
  localStorage.setItem("students", JSON.stringify(students));

  btn.style.backgroundColor = "red";
  btn.disabled = true;

  // disable Present button
  btn.previousElementSibling.disabled = true;
}


window.onload = loadStudents;
