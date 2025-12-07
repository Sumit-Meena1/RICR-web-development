function submitData(){
    const name = document.getElementById("name").value;
    alert("Thank You For Enrolling " + name );
}


function contactSubmit(){
    const name = document.getElementById("name").value;
     alert("Thank You For Enrolling " + name );

}




const courses = [
  {
    title: "Web Development",
    level: "Beginner",
    price: "$49",
  },

   {
    title: "Python Programming",
    level: "Intermediate",
    price: "$59",
  },
  {
    title: "Data Science & DSA",
    level: "Advanced",
    price: "$79",
  },
  
];

const container = document.getElementById("coursesDiv");

courses.forEach((course) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
        <h3>${course.title}</h3>
        <p><strong>Level:</strong> ${course.level}</p>
        <p><strong>Price:</strong> ${course.price}</p>
        <a href="registration.html" id="enroll" class="btn btn-primary">Enroll</a>
    `;

  container.appendChild(card);
});
