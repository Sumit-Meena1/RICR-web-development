function add()
{
    const Wname = document.getElementById("Wname").value.trim();
    const Uname = document.getElementById("Uname").value.trim();
    const password = document.getElementById("password").value.trim();


    const dataPacket = {
        webSite:Wname,
        userName:Uname,
        password:password,
    }



    const data = JSON.parse(localStorage.getItem("passwordManager")) || [];
    data.push(dataPacket);

    localStorage.setItem("passwordManager", JSON.stringify(dataPacket));


    document.getElementById("Wname").value="";
    document.getElementById("Uname").value="";
    document.getElementById("password").value="";


}