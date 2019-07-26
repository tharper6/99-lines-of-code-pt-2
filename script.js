let btn = document.getElementsByTagName("button")[0]
btn.addEventListener("click", function () {
    for (i = 0; i < friends.length; i++) {
        for (j = 99; j > 0; j--) {
            let friends = ["Tray", "Manny", "Sydney", "Sean", "Amy"];
            for (i = 0; i < friends.length; i++) {
                for (j = 99; j > 0; j--) {
                    let pText = document.createTextNode("j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, "")
document.getElementsByClassName("friend").appendChild(pText)

                }
            }
let tray = document.createElement("div")
tray.className = "friend"
let headTray = document.createElement("h3")
let headTrayText = document.createTextNode("Tray")
headtray.appendChild(headTrayText)
tray.appendChild(headtray)

let manny = document.createElement("div")
manny.className = "friend"
let headmanny = document.createElement("h3")
let headMannyText = document.createTextNode("Manny")
headManny.appendChild(headMannyText)
manny.appendChild(headManny)

let sydney = document.createElement("div")
sydney.className = "friend"
let headsydney = document.createElement("h3")
let headSydneyText = document.createTextNode("Sydney")
headSydney.appendChild(headSydneyText)
sydney.appendChild(headsydney)

let sean = document.createElement("div")
sean.className = "friend"
let headsean = document.createElement("h3")
let headSeanText = document.createTextNode("Sean")
headSean.appendChild(headSeanText)
sean.appendChild(headsean)

let amy = document.createElement("div")
amy.className = "friend"
let headamy = document.createElement("h3")
let headAmyText = document.createTextNode("Amy")
headAmy.appendChild(headAmyText)
amy.appendChild(headamy)

let p = document.createElement("p")
let pText = document.createTextNode("j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, "")
document.getElementsByClassName("friend").appendChild(pText)
})

let friends = ["Tray", "Manny", "Sydney", "Sean", "Amy"]
for (i = 0; i < friends.length; i++);



{
    let friends = ["Tray", "Manny", "Sydney", "Sean", "Amy"]
    for (i = 0; i < friends.length; i++) {
        let p = document.createElement("p")
        let pText = document.createTextNode(friendCounter + " lines of code in the file, " + friendCounter + " lines of code; " + friends[i] + " strikes one out, clears it all out, ")
        friendCounter--;
        if (friendCounter < 1) {
            alert("Last code!")
        }
        p.appendChild(pText)
        document.body.appendChild(p)
    }