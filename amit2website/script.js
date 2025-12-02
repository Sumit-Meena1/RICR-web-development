// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
});

// Extra fade animation on scroll
const boxes = document.querySelectorAll(".fade-in");

function showBoxes(){
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < window.innerHeight - 50){
            box.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showBoxes);