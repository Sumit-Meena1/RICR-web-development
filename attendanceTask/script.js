
document.getElementById("a").disabled = true;
document.getElementById("p").disabled = true;



function submit(){
    document.getElementById("a").style.backgroundColor = "red";
     document.getElementById("p").style.backgroundColor = "green";

}


function take(){
document.getElementById("a").disabled = false;
document.getElementById("p").disabled = false;


}


function add(){
    window.location.href = "add.html";
}
function done(){
    window.location.href = "index.html";
}