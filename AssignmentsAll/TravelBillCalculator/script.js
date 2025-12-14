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
            sl2 = distance-10;
            ch1 = 10*11;
            ch2 = (sl2*10);
        }else{
            sl1 = 10;
            sl2 = 90;
            sl3 = distance-100;
            ch1 = 10*11;
            ch2 = 90*10;
            ch3 = sl3*9;
        }
        total = (ch1+ch2+ch3).toFixed(2);
        document.getElementById("sl1").innerText = sl1;
        document.getElementById("sl2").innerText = sl2;
        document.getElementById("sl3").innerText = sl3;


        document.getElementById("ch1").innerText = "Rs." + ch1;
        document.getElementById("ch2").innerText = "Rs." +  ch2;
        document.getElementById("ch3").innerText =  "Rs." + ch3;


        document.getElementById("ttlcharg").innerText = "Rs." +  total;








    }



}