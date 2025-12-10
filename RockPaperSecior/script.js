
function rock()
{
    let ai = Math.floor(Math.random() * 3) + 1;
    document.getElementById("userimg").src="https://cbx-prod.b-cdn.net/COLOURBOX8093018.jpg?width=800&height=800&quality=70"
    if(ai===1)
    {
        document.getElementById("aiimg").src="https://cbx-prod.b-cdn.net/COLOURBOX8093018.jpg?width=800&height=800&quality=70"
        document.getElementById("result").innerText = "Draw!"
    }
    else if(ai===2)
    {
         document.getElementById("aiimg").src="https://cbx-prod.b-cdn.net/COLOURBOX8093037.jpg?width=800&height=800&quality=70"
        document.getElementById("result").innerText = "You Lose!"
    }
    else if(ai===3)
    {
         document.getElementById("aiimg").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgZRZd0XtqRI6NVNzzXX_V1pwDfrOV7-d2w&s"
        document.getElementById("result").innerText = "You Won!"
    }

}

function paper()
{
    let ai = Math.floor(Math.random() * 3) + 1;
    document.getElementById("userimg").src="https://cbx-prod.b-cdn.net/COLOURBOX8093037.jpg?width=800&height=800&quality=70"
    if(ai===1)
    {
        document.getElementById("aiimg").src="https://cbx-prod.b-cdn.net/COLOURBOX8093018.jpg?width=800&height=800&quality=70"
        document.getElementById("result").innerText = "You Won!"
    }
    else if(ai===2)
    {
         document.getElementById("aiimg").src="https://cbx-prod.b-cdn.net/COLOURBOX8093037.jpg?width=800&height=800&quality=70"
        document.getElementById("result").innerText = "Draw!"
    }
    else if(ai===3)
    {
         document.getElementById("aiimg").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgZRZd0XtqRI6NVNzzXX_V1pwDfrOV7-d2w&s"
        document.getElementById("result").innerText = "You Lose!"
    }

}

function secissor()
{
    let ai = Math.floor(Math.random() * 3) + 1;
    document.getElementById("userimg").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgZRZd0XtqRI6NVNzzXX_V1pwDfrOV7-d2w&s"
    if(ai===1)
    {
        document.getElementById("aiimg").src="https://cbx-prod.b-cdn.net/COLOURBOX8093018.jpg?width=800&height=800&quality=70"
        document.getElementById("result").innerText = "You lose!"
    }
    else if(ai===2)
    {
         document.getElementById("aiimg").src="https://cbx-prod.b-cdn.net/COLOURBOX8093037.jpg?width=800&height=800&quality=70"
        document.getElementById("result").innerText = "You Won!"
    }
    else if(ai===3)
    {
         document.getElementById("aiimg").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgZRZd0XtqRI6NVNzzXX_V1pwDfrOV7-d2w&s"
        document.getElementById("result").innerText = "Draw!"
    }

}
