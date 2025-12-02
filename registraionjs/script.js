function submit(){



    const nm = document.getElementById("fullName").value;
    const em = document.getElementById("email").value;
    const cntct = document.getElementById("contact").value;
    const dob = document.getElementById("dob").value;




    const qlfn = document.getElementById("qualification").value;
    const grade = document.getElementById("grade").value;







    console.log("name : " + nm);
    console.log("email : " + em);
    console.log("contact : "+ cntct);
    console.log("dob : "+ cntct);



    console.log("qualification : "+ qlfn);
    console.log("grade : "+ grade);
    





    let selectedBatchTiming = [];




    document
    .querySelectorAll("input[name='batch']:checked")
    .forEach((element)=>{
        selectedBatchTiming.push(element.value);

    });



    console.log(selectedBatchTiming);




    
    

    // const selectedBatch = batch.forEach()
}

function reset(){
    window.location.reload();
}