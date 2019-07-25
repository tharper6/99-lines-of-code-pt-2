let btn = document.getElementsByTagName("button")[0]
btn.addEventListener("click", function () {
    for (i = 0; i < friends.length; i++) {
        for (j = 99; j > 0; j--) {
            let friends = ["Tray", "Manny", "Sydney", "Sean", "Amy"];
            for (i = 0; i < friends.length; i++) {
                for (j = 99; j > 0; j--) {
                    console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, ");
                }
            }
            let tray = document.createElement("div")
            tray.className = "friend"
            let headTray = document.createElement("h3")
            tray.appendChild(headtray)
            let manny = document.createElement("div")
            manny.className = "friend"
            let headmanny = document.createElement("h3")
            manny.appendChild(headmanny)
            let sydney = document.createElement("div")
            sydney.className = "friend"
            let headsydney = document.createElement("h3")
            sydney.appendChild(headsydney)
            let sean = document.createElement("div")
            sean.className = "friend"
            let headsean = document.createElement("h3")
            sean.appendChild(headsean)
            let amy = document.createElement("div")
            amy.className = "friend"
            let headamy = document.createElement("h3")
            amy.appendChild(headamy)
            let p = document.createElement("p")
            let pText = document.createTextNode("j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, "")
document.body.className("friend").appendChild(pText)
})

