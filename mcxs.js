class Teams {

    static getElementByText(type, text) {
        const elements = document.querySelectorAll(type);
        for (let i = 0; i < elements.length; i++) {
            const curr = elements[i];
            if (curr && curr.textContent.toLowerCase().trim() === text.toLowerCase().trim()) {
                return curr;
            }
        }
    }

    static getInternalInstance(element) {
        for (let i in element) {
            if (i.includes("__reactInternalInstance$")) {
                return element[i];
            }
        }
    }

    static getEventHandler(element) {
        for (let i in element) {
            if (i.includes("__reactEventHandlers$")) {
                return element[i];
            }
        }
    }
}

class TeamA {

    static setA() {
        const clickA = Teams.getElementByText('span', 'join team alfa ')?.parentElement;
        if (!clickA) {
            return;
        }
        const reactInstance = Teams.getEventHandler(clickA);
        this.clickA = reactInstance?.onClick;
    }

    static setJoin() {
        const join = Teams.getElementByText('span', 'join ')?.parentElement;
        if (!join) {
            return
        }
        const reactInstance = Teams.getEventHandler(join);
        this.join = reactInstance?.onClick;
    }

    static initJoinA() {
        this.setA();
        this.clickA ? this.clickA() : null;
        this.setJoin();
        this.join ? this.join() : null;
    }
}

class TeamB {

    static setB() {
        const clickB = Teams.getElementByText('span', 'join team bravo ')?.parentElement;
        if (!clickB) {
            return;
        }
        const reactInstance = Teams.getEventHandler(clickB);
        this.clickB = reactInstance?.onClick;
    }

    static setJoinB() {
        const joinB = Teams.getElementByText('span', 'join ')?.parentElement;
        if (!joinB) {
            return
        }
        const reactInstance = Teams.getEventHandler(joinB);
        this.joinB = reactInstance?.onClick;
    }

    static initJoinB() {
        this.setB();
        this.clickB ? this.clickB() : null;
        this.setJoinB();
        this.joinB ? this.joinB() : null;
    }
}

class DM {

    static setJoinDM() {
        const joinDM = Teams.getElementByText('span', 'join ')?.parentElement;
        if (!joinDM) {
            return
        }
        const reactInstance = Teams.getEventHandler(joinDM);
        this.joinDM = reactInstance?.onClick;
    }
    static initJoinDM() {
        this.setJoinDM();
        this.joinDM ? this.joinDM() : null;
    }
}

window.Clicker = setInterval(() => {
  const root = document.querySelector(".Common-flexStartAlignStretchColumn");
  if (typeof root != "undefined" && root != null) {
    const stateWindow = document.createElement("div");
    stateWindow.classList.add("sc-clicker");
    stateWindow.style.display = "flex";
      stateWindow.style.alignItems = "flex-start";
      stateWindow.style.justifyContent = "flex-start";
      stateWindow.style.width = "100%";
      stateWindow.style.height = "100%";
    root.appendChild(stateWindow);
      const Abutton = document.createElement("div")
      Abutton.classList.add("alhpa")
      Abutton.style.width = "100%";
      Abutton.style.height = "100%";
      Abutton.style.display = "flex";
      Abutton.style.alignItems = "center";
      Abutton.style.justifyContent = "center";
      Abutton.style.position = "relative";
      Abutton.style.marginTop = "0px";
      Abutton.style.marginRight = "0px";
      Abutton.style.textAlign = "center";
      Abutton.style.borderRadius = "0px";
      Abutton.style.cursor = "pointer";
      Abutton.style.backgroundColor = "rgba(118, 255, 51, 0.25)";
      Abutton.style.boxShadow = "rgb(118 255 51 / 50%) 0em 0em 0em 0.063em";
      Abutton.style.transition = "background 0.3s ease 0s";
      Abutton.style.minWidth = "12.375em";
      Abutton.style.minHeight = "3.125em";
      Abutton.innerHTML = "<span>Click Team Alpha</span>"
      Abutton.style.fontSize = "1em"
      Abutton.style.fontWeight = "500";
      Abutton.style.fontFamily = "RubikBold";
      Abutton.style.fontStyle = "cursive";
      Abutton.style.lineHeight = "normal";
      Abutton.style.textTransform = "uppercase"
      Abutton.onclick = "clickAlhpa"
      root.appendChild(Abutton);

      const Bbutton = document.createElement("div")
      Bbutton.classList.add("bravo")
      Bbutton.style.width = "100%";
      Bbutton.style.height = "100%";
      Bbutton.style.display = "flex";
      Bbutton.style.alignItems = "center";
      Bbutton.style.justifyContent = "center";
      Bbutton.style.position = "relative";
      Bbutton.style.marginTop = "0px";
      Bbutton.style.marginRight = "0px";
      Bbutton.style.textAlign = "center";
      Bbutton.style.borderRadius = "0px";
      Bbutton.style.cursor = "pointer";
      Bbutton.style.backgroundColor = "rgba(118, 255, 51, 0.25)";
      Bbutton.style.boxShadow = "rgb(118 255 51 / 50%) 0em 0em 0em 0.063em";
      Bbutton.style.transition = "background 0.3s ease 0s";
      Bbutton.style.minWidth = "12.375em";
      Bbutton.style.minHeight = "3.125em";
      Bbutton.innerHTML = "<span>Click Team Bravo</span>"
      Bbutton.style.fontSize = "1em"
      Bbutton.style.fontWeight = "500";
      Bbutton.style.fontFamily = "RubikBold";
      Bbutton.style.fontStyle = "cursive";
      Bbutton.style.lineHeight = "normal";
      Bbutton.style.textTransform = "uppercase"
      Bbutton.onclick = "clickBravo"
      root.appendChild(Bbutton);
  }
});


window.ButtonClicker = setInterval(() => {
  const button = document.querySelector(".sc-clicker");
  if (typeof button != "undefined" && button != null) {
    clearInterval(window.Clicker);
  } else {
      const root = document.querySelector(".SettingsComponentStyle-scrollCreateBattle");
  if (typeof root != "undefined" && root != null) {
    const stateWindow = document.createElement("div");
    stateWindow.classList.add("sc-clicker");
    stateWindow.style.display = "flex";
      stateWindow.style.alignItems = "flex-start";
      stateWindow.style.justifyContent = "flex-start";
      stateWindow.style.width = "100%";
      stateWindow.style.height = "15%";
root.append(stateWindow);

      const getButton = document.querySelector(".sc-clicker");
      const Abutton = document.createElement("div")
      Abutton.classList.add("alhpa")
      Abutton.style.width = "100%";
      Abutton.style.height = "100%";
      Abutton.style.display = "flex";
      Abutton.style.alignItems = "center";
      Abutton.style.justifyContent = "center";
      Abutton.style.position = "relative";
      Abutton.style.marginTop = "0px";
      Abutton.style.marginRight = "0px";
      Abutton.style.textAlign = "center";
      Abutton.style.borderRadius = "0px";
      Abutton.style.cursor = "pointer";
      Abutton.style.backgroundColor = "rgba(118, 255, 51, 0.25)";
      Abutton.style.boxShadow = "rgb(118 255 51 / 50%) 0em 0em 0em 0.063em";
      Abutton.style.transition = "background 0.3s ease 0s";
      Abutton.style.minWidth = "12.375em";
      Abutton.style.minHeight = "3.125em";
      Abutton.innerHTML = "<span>Click Team Alpha</span>"
      Abutton.style.fontSize = "1em"
      Abutton.style.fontWeight = "500";
      Abutton.style.fontFamily = "RubikBold";
      Abutton.style.fontStyle = "cursive";
      Abutton.style.lineHeight = "normal";
      Abutton.style.textTransform = "uppercase"
      Abutton.onclick = "clickAlhpa"
      getButton.appendChild(Abutton);
      let A = 0
Abutton.addEventListener('click', () => {
A+=1
if(A%2==1){
document.querySelector(".alhpa").style.background = "rgba(255, 255, 255, 0.1)"
    window.joinerA = setInterval(function() {
    TeamA.initJoinA();
}, 1)
}

if(A%2==0){
clearInterval(window.joinerA)
document.querySelector(".alhpa").style.background = "rgba(118, 255, 51, 0.25)";
    }})

      const Bbutton = document.createElement("div")
      Bbutton.classList.add("bravo")
      Bbutton.style.width = "100%";
      Bbutton.style.height = "100%";
      Bbutton.style.display = "flex";
      Bbutton.style.alignItems = "center";
      Bbutton.style.justifyContent = "center";
      Bbutton.style.position = "relative";
      Bbutton.style.marginTop = "0px";
      Bbutton.style.marginRight = "0px";
      Bbutton.style.textAlign = "center";
      Bbutton.style.borderRadius = "0px";
      Bbutton.style.cursor = "pointer";
      Bbutton.style.backgroundColor = "rgba(118, 255, 51, 0.25)";
      Bbutton.style.boxShadow = "rgb(118 255 51 / 50%) 0em 0em 0em 0.063em";
      Bbutton.style.transition = "background 0.3s ease 0s";
      Bbutton.style.minWidth = "12.375em";
      Bbutton.style.minHeight = "3.125em";
      Bbutton.innerHTML = "<span>Click Team Bravo</span>"
      Bbutton.style.fontSize = "1em"
      Bbutton.style.fontWeight = "500";
      Bbutton.style.fontFamily = "RubikBold";
      Bbutton.style.fontStyle = "cursive";
      Bbutton.style.lineHeight = "normal";
      Bbutton.style.textTransform = "uppercase"
      Bbutton.onclick = "clickBravo"
      getButton.appendChild(Bbutton);
      let B = 0
Bbutton.addEventListener('click', () => {
B+=1
if(B%2==1){
document.querySelector(".bravo").style.background = "rgba(255, 255, 255, 0.1)"
    window.joinerB = setInterval(function() {
    TeamB.initJoinB();
}, 1)
}

if(B%2==0){
clearInterval(window.joinerB)
document.querySelector(".bravo").style.background = "rgba(118, 255, 51, 0.25)";
    }})
  }
    }
}); 
