
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

window.onload = loadStudents;
