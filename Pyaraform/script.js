function submit(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const dob = document.getElementById("dob").value;
    const phone = document.getElementById("phone").value;
//[A-Z ]+[a-z ]+
    
    if(!/^[A-Za-z ]+$/.test(name))
    {
        alert("Please Enter A Valid Name");
        
    }
    if(!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(email))
    {
        alert("Please Enter A Valid Email");
    }

    if(!/^[6-9]\d{9}$/.test(phone))
    {
        alert("Please Enter A Valid Phone Number");
    }

    if(age<18)
    {
        alert("Please Enter Your Age");
    }



    
    
    const data = {
        name: name,
        email: email,
        age:age,
        dob:dob,
    };


}