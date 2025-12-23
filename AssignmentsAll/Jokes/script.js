async function newJoke(){
    const res = await fetch("https://official-joke-api.appspot.com/jokes/random");
    const data = await res.json();

    document.getElementById("setup").innerText = data.setup;
    document.getElementById("punchline").innerText = data.punchline;
    document.getElementById("photo").innerText = "";
    

}