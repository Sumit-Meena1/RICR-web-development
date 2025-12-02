function submit(){
    console.log("Submitted Data Succesfully");

    alert("datat submitted");

    const nm = document.getElementById("PersonName").value;
    const cn = document.getElementById("contact").value;
    const em = document.getElementById("email").value;
    const qfn = document.getElementById("Qualification").value;
    const clg = document.getElementById("college").value;
    const yr = document.getElementById("Year").value;
    const brch = document.getElementById("Branch").value;
    const src = document.getElementById("Source").value;
    const chek = document.getElementById("Full Stack Web Development").value;


    console.log("Name : " + nm);
    console.log("Contact Number : " + cn);
    console.log("Email : " + em);
    console.log("Qualification : " + qfn);
    console.log("College : " + clg);
    console.log("Year : " + yr);
    console.log("Branch : " + brch);
    console.log("Source : " + src);
    console.log("intrested in : " + chek);
    



    document.getElementById("PersonName").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("email").value = "";
    document.getElementById("Qualification").value = "";
    document.getElementById("college").value = "";
    document.getElementById("Year").value = "";
    document.getElementById("Branch").value = "";
    document.getElementById("Source").value = "";
    
}