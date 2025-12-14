// Double total ;
// 		if(distance <=10)
// 		{
// 			total = distance *11;
// 		}
// 		else if(distance<=100)
// 		{
// 			total = (10*11)+((distance-10)*10);
// 		}
// 		else 
// 		{
// 			total = (10*11)+(90*10)+((distance-100)*9);
// 		}
// 		return total;


function calculate(){
    let distance = parseFloat(document.getElementById("km").value);
    if(!distance){
        document.getElementById("error").innerText = "Please Enter The Distance";
    }
    else if(distance<=0){
        document.getElementById("error").innerText = "Please Enter Positive Distance";
    }else{
        document.getElementById("error").innerText = "";
        let total = 0o0;
        let sl1 = 0o0;
        let sl2 = 0o0;
        let sl3 = 0o0;
        let ch1 = 0o0;
        let ch2 = 0o0; 
        let ch3 = 0o0;


        if(distance <=10){
            sl1 = distance;
            ch1 = distance*11;
        }else if(distance<=100){
            sl1 = 10;
            sl2 = (distance-10)*10;
        }








    }



}