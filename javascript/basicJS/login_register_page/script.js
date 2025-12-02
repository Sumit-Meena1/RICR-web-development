function login() {
  console.log("Login Button Clicked");

  const em = document.getElementById("LoginEmail").value;
  const ps = document.getElementById("LoginPassword").value;
  console.log( "Email : "+em);
  console.log("password : "+ps);
  document.getElementById("LoginEmail").value = "";
  document.getElementById("LoginPassword").value ="";

  alert("login done");
  
}
function registration() {
  console.log("Registration Button Clicked");
  const nm = document.getElementById("name").value;
  const em = document.getElementById("registrationEmail").value;
  const crp = document.getElementById("crPassword").value;
  const cnp = document.getElementById("cnPassword").value;
  console.log(nm);
  console.log(em);
  console.log(crp);
  console.log(cnp);
  alert("registration done");

  document.getElementById("name").value ="";
  document.getElementById("registrationEmail").value ="";
  document.getElementById("crPassword").value ="";
  document.getElementById("cnPassword").value ="";
  


}
