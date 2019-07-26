let friendCounter = 99


let btn = document.getElementsByTagName("button")[0]
btn.addEventListener("click", function () {

    let tray = document.createElement("div")
    tray.className = "friend"
    let headTray = document.createElement("h3")
    let headTrayText = document.createTextNode("Tray")
    headTray.appendChild(headTrayText)
    tray.appendChild(headTray)
    let trayP = document.createElement("p")
    let trayPText = document.createTextNode(friendCounter + " lines of code in the file, " + friendCounter + " lines of code; " + " tray " + " strikes one out, clears it all out, ")
    if (friendCounter > 0) {
        trayP.appendChild(trayPText)
        tray.appendChild(trayP)
        document.body.appendChild(tray)
    }

    let manny = document.createElement("div")
    manny.className = "friend"
    let headManny = document.createElement("h3")
    let headMannyText = document.createTextNode("Manny")
    headManny.appendChild(headMannyText)
    manny.appendChild(headManny)
    let mannyP = document.createElement("p")
    let mannyPText = document.createTextNode(friendCounter + " lines of code in the file, " + friendCounter + " lines of code; " + " manny " + " strikes one out, clears it all out, ")
    if (friendCounter > 0) {
        mannyP.appendChild(mannyPText)
        manny.appendChild(mannyP)
        document.body.appendChild(manny)
    }

    let sydney = document.createElement("div")
    sydney.className = "friend"
    let headSydney = document.createElement("h3")
    let headSydneyText = document.createTextNode("Sydney")
    headSydney.appendChild(headSydneyText)
    sydney.appendChild(headSydney)
    let sydneyP = document.createElement("p")
    let sydneyPText = document.createTextNode(friendCounter + " lines of code in the file, " + friendCounter + " lines of code; " + " sydney " + " strikes one out, clears it all out, ")
    if (friendCounter > 0) {
        sydneyP.appendChild(sydneyPText)
        sydney.appendChild(sydneyP)
        document.body.appendChild(sydney)
    }

    let sean = document.createElement("div")
    sean.className = "friend"
    let headSean = document.createElement("h3")
    let headSeanText = document.createTextNode("Sean")
    headSean.appendChild(headSeanText)
    sean.appendChild(headSean)
    let seanP = document.createElement("p")
    let seanPText = document.createTextNode(friendCounter + " lines of code in the file, " + friendCounter + " lines of code; " + " sean " + " strikes one out, clears it all out, ")
    if (friendCounter > 0) {
        seanP.appendChild(seanPText)
        sean.appendChild(seanP)
        document.body.appendChild(sean)
    }

    let amy = document.createElement("div")
    amy.className = "friend"
    let headAmy = document.createElement("h3")
    let headAmyText = document.createTextNode("Amy")
    headAmy.appendChild(headAmyText)
    amy.appendChild(headAmy)
    let amyP = document.createElement("p")
    let amyPText = document.createTextNode(friendCounter + " lines of code in the file, " + friendCounter + " lines of code; " + " Amy " + " strikes one out, clears it all out, ")
    if (friendCounter > 0) {
        amyP.appendChild(amyPText)
        amy.appendChild(amyP)
        document.body.appendChild(amy)

        friendCounter--;
    }

})

