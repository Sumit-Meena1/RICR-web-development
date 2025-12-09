function calculate(){
    const dob = new Date(document.getElementById("birth").value);
    const current = new Date(document.getElementById("current").value);
    if(!dob || !current || isNaN(dob) || isNaN(current))
    {
        document.getElementById("result").innerText = "Please Select Both Dates!"
        return;
    }

    let age = current.getFullYear()-dob.getFullYear();
    const months = current.getMonth()-dob.getMonth();
    const days = current.getDate()-dob.getDate();

    // if(months<0 || (months===0 && days<0))
    // {
    //     age--;
    // }


    document.getElementById("result").innerText=`Your age is ${age} years.`
    
}