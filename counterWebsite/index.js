let count = 0
function increment(){
    count = count + 1
    document.getElementById("counter").innerText = count
}

function save(){
    saves = document.getElementById("saves")
    saves.innerText += count 
    saves.innerText += " _ "
}

function decrease(){
    count = count - 1
    document.getElementById("counter").innerText = count
}

function reset(){
    count = 0
    document.getElementById("counter").innerText = count
}

function clean(){
    document.getElementById("saves").innerText = "Saves: "
}
