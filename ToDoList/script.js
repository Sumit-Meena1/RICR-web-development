function addTask() {
  const task = document.getElementById("newtask").value.trim();

  console.log(task);

  if (task === "") {
    alert("Please Enter Task");
  } else {
    const l = document.createElement("li");
    l.classList.add("p-2", "d-flex", "align-item-center", "border-bottom");

    const d = document.createElement("div");
    d.classList.add("w-75");
    d.innerText = task;

    const b = document.createElement("button");
    b.classList.add("btn", "btn-danger", "ms-3");
    b.innerHTML = `<i class="bi bi-trash"></i> Delete`;
    b.onclick = () => {
      l.remove();
    };

    l.appendChild(d);
    l.appendChild(b);

    document.getElementById("list").appendChild(l);
    document.getElementById("newtask").value = "";
  }
}
