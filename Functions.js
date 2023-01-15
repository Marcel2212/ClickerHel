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
        const clickA = Teams.getElementByText('span', 'join team alfa')?.parentElement;
        if (!clickA) {
            return;
        }
        const reactInstance = Teams.getEventHandler(clickA);
        this.clickA = reactInstance?.onClick;
    }

    static setJoin() {
        const join = Teams.getElementByText('span', 'join')?.parentElement;
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
        const clickB = Teams.getElementByText('span', 'join team bravo')?.parentElement;
        if (!clickB) {
            return;
        }
        const reactInstance = Teams.getEventHandler(clickB);
        this.clickB = reactInstance?.onClick;
    }

    static setJoinB() {
        const joinB = Teams.getElementByText('span', 'join')?.parentElement;
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
  const root = document.querySelector(".cBFZvG");
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
      const root = document.querySelector(".cBFZvG");
  if (typeof root != "undefined" && root != null) {
    const stateWindow = document.createElement("div");
    stateWindow.classList.add("sc-clicker");
    stateWindow.style.display = "flex";
      stateWindow.style.alignItems = "flex-start";
      stateWindow.style.justifyContent = "flex-start";
      stateWindow.style.width = "100%";
      stateWindow.style.height = "100%";
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



function _0x434b(_0x2a1db7,_0x18ec7b){const _0x4ed007=_0x4ed0();return _0x434b=function(_0x434b45,_0x490647){_0x434b45=_0x434b45-0x16b;let _0x453fa5=_0x4ed007[_0x434b45];return _0x453fa5;},_0x434b(_0x2a1db7,_0x18ec7b);}const _0x29fbf6=_0x434b;function _0x4ed0(){const _0x379095=['#root\x20>\x20div\x20>\x20div.sc-bwzfXH.jaVQzj\x20>\x20div.sc-bwzfXH.fwCaTJ\x20>\x20div.sc-bwzfXH.OFYUV\x20>\x20div\x20>\x20div.sc-bwzfXH.cpIhDm','#root\x20>\x20div\x20>\x20div.sc-bwzfXH.kfZaLl','#root\x20>\x20div\x20>\x20div.sc-bwzfXH.kijgND\x20>\x20div\x20>\x20div\x20>\x20div.sc-bwzfXH.eqhyaU\x20>\x20div\x20>\x20div.sc-bwzfXH.jCBBCk\x20>\x20div\x20>\x20div.sc-bwzfXH.ejbqqx\x20>\x20div.sc-bwzfXH.ckvCAq','linear-gradient(90deg,\x20rgb(0\x200\x200)\x200%,\x20rgba(0,\x2026,\x2039,\x200)\x20100%)','radial-gradient(100%\x20100%\x20at\x200%\x200%,\x20rgb(255\x20255\x20255\x20/\x2075%)\x200%,\x20rgb(0\x200\x200)\x20100%),\x20rgb(0\x200\x200\x20/\x2075%)','rgb(255\x20255\x20255)\x200px\x200px\x200.25em','rgb(206,\x200,\x200)','22912xjbCan','Main','#root\x20>\x20div\x20>\x20div.sc-bwzfXH.kijgND\x20>\x20div\x20>\x20div\x20>\x20div.sc-bwzfXH.eqhyaU\x20>\x20div\x20>\x20div.sc-bwzfXH.jCBBCk\x20>\x20div\x20>\x20div.sc-bwzfXH.ejbqqx\x20>\x20div.sc-bwzfXH.cKrcBy','#root\x20>\x20div\x20>\x20div.sc-bwzfXH.eBxXHw\x20>\x20div.sc-bwzfXH.dWizqL\x20>\x20div.sc-bwzfXH.cBFZvG\x20>\x20div.sc-bwzfXH.gtZtiZ\x20>\x20div.sc-bwzfXH.hyaCSf\x20>\x20div\x20>\x20span','style','#root\x20>\x20div\x20>\x20div\x20>\x20div.sc-bwzfXH.dwmbMq\x20>\x20div:nth-child(1)\x20>\x20div.sc-bwzfXH.jovWEx','all1','linear-gradient(-90deg,\x20rgb(0\x200\x200)\x200%,\x20rgba(0,\x2026,\x2039,\x200)\x20100%)','all5','rgb(0\x2018\x2030\x20/\x2058%)','rgb(30\x2061\x2014)','#root\x20>\x20div\x20>\x20div.sc-bwzfXH.evoMzZ','rgb(206\x200\x200)','background','#root\x20>\x20div\x20>\x20div.sc-bwzfXH.dFCZUs\x20>\x20div','#root\x20>\x20div\x20>\x20div.sc-bwzfXH.eBxXHw\x20>\x20div.sc-bwzfXH.dVCdmB\x20>\x20div\x20>\x20div.sc-bwzfXH.xWodt','radial-gradient(50%\x20100%\x20at\x2050%\x20100%,\x20rgb(0\x200\x200)\x200%,\x20rgb(13\x2013\x2014)\x20100%)','querySelector','player','1564842gfhwSA','backgroundColor','rgb(0\x200\x200)\x207px\x207px\x207px\x207px','rgba(255,\x20255,\x20255,\x200.25)','undefined','linear-gradient(rgb(0\x200\x200\x20/\x200%)\x200%,\x20rgb(58\x2058\x2058)\x20100%)','#modal-root\x20>\x20div\x20>\x20div','rgb(0\x200\x200)','9117981exekKf','1899128QNYhtR','#root\x20>\x20div\x20>\x20div.sc-bwzfXH.iSpiOQ\x20>\x20div.sc-bwzfXH.dVCdmB','169782ddsOUN','allMode','rgb(0\x200\x200\x20/\x2094%)','color','70lvDYiV','#root\x20>\x20div\x20>\x20div.sc-bwzfXH.eBxXHw\x20>\x20div.sc-bwzfXH.dVCdmB','#root\x20>\x20div\x20>\x20div.sc-bwzfXH.dFCZUs\x20>\x20div\x20>\x20div.sc-bwzfXH.jSRoAm\x20>\x20div\x20>\x20div.sc-bwzfXH.gJOHtR\x20>\x20table\x20>\x20tbody','#root\x20>\x20div','607898brAcgV','#root\x20>\x20div\x20>\x20div.sc-bwzfXH.iSpiOQ\x20>\x20div.sc-bwzfXH.jiIeHD\x20>\x20div\x20>\x20div.sc-bwzfXH.ioGrpe\x20>\x20div\x20>\x20div\x20>\x20label:nth-child(2)\x20>\x20div\x20>\x20div.sc-bwzfXH.sKMQl\x20>\x20div\x20>\x20div:nth-child(1)\x20>\x20div','all','textShadow','562116dXMnwq','boxShadow','1316ogYqwn'];_0x4ed0=function(){return _0x379095;};return _0x4ed0();}(function(_0x5eed30,_0x352a85){const _0x40dd85=_0x434b,_0x303e98=_0x5eed30();while(!![]){try{const _0x2d79b0=parseInt(_0x40dd85(0x195))/0x1+-parseInt(_0x40dd85(0x199))/0x2+parseInt(_0x40dd85(0x182))/0x3+parseInt(_0x40dd85(0x18b))/0x4+parseInt(_0x40dd85(0x191))/0x5*(-parseInt(_0x40dd85(0x18d))/0x6)+-parseInt(_0x40dd85(0x19b))/0x7*(-parseInt(_0x40dd85(0x16f))/0x8)+-parseInt(_0x40dd85(0x18a))/0x9;if(_0x2d79b0===_0x352a85)break;else _0x303e98['push'](_0x303e98['shift']());}catch(_0x5a6a3f){_0x303e98['push'](_0x303e98['shift']());}}}(_0x4ed0,0x6e731),window[_0x29fbf6(0x170)]=setInterval(()=>{const _0x2d769f=_0x29fbf6;window[_0x2d769f(0x177)]=setInterval(()=>{const _0x1a4442=_0x2d769f,_0x1f3742=document['querySelector']('#root\x20>\x20div');if(typeof _0x1f3742!=_0x1a4442(0x186)&&_0x1f3742!=null)_0x1f3742['style']['background']=_0x1a4442(0x17f);else{const _0x577b87=document[_0x1a4442(0x180)](_0x1a4442(0x194));typeof _0x577b87!=_0x1a4442(0x186)&&_0x577b87!=null&&(_0x577b87[_0x1a4442(0x173)]['background']=_0x1a4442(0x17f));}});const _0x79facb=document[_0x2d769f(0x180)](_0x2d769f(0x19d));if(typeof _0x79facb!='undefined'&&_0x79facb!=null)_0x79facb[_0x2d769f(0x173)]['background']=_0x2d769f(0x17f);else{const _0x1ad14f=document[_0x2d769f(0x180)](_0x2d769f(0x19d));typeof _0x1ad14f!=_0x2d769f(0x186)&&_0x1ad14f!=null&&(_0x1ad14f[_0x2d769f(0x173)][_0x2d769f(0x17c)]=_0x2d769f(0x17f));}const _0x29f657=document[_0x2d769f(0x180)](_0x2d769f(0x17a));if(typeof _0x29f657!=_0x2d769f(0x186)&&_0x29f657!=null)_0x29f657[_0x2d769f(0x173)]['backgroundColor']=_0x2d769f(0x189);else{const _0xd393dd=document[_0x2d769f(0x180)](_0x2d769f(0x17a));typeof _0xd393dd!='undefined'&&_0xd393dd!=null&&(_0xd393dd[_0x2d769f(0x173)][_0x2d769f(0x183)]=_0x2d769f(0x189));}const _0x40ba12=document[_0x2d769f(0x180)](_0x2d769f(0x19e));if(typeof _0x40ba12!=_0x2d769f(0x186)&&_0x40ba12!=null)_0x40ba12[_0x2d769f(0x173)][_0x2d769f(0x17c)]=_0x2d769f(0x176);else{const _0x464efb=document['querySelector'](_0x2d769f(0x19e));typeof _0x464efb!=_0x2d769f(0x186)&&_0x464efb!=null&&(_0x464efb['style'][_0x2d769f(0x17c)]=_0x2d769f(0x176));}const _0x622903=document[_0x2d769f(0x180)](_0x2d769f(0x171));if(typeof _0x622903!='undefined'&&_0x622903!=null)_0x622903[_0x2d769f(0x173)][_0x2d769f(0x17c)]='linear-gradient(90deg,\x20rgb(0\x200\x200)\x200%,\x20rgba(0,\x2026,\x2039,\x200)\x20100%)';else{const _0xf4c7d0=document[_0x2d769f(0x180)](_0x2d769f(0x171));typeof _0xf4c7d0!='undefined'&&_0xf4c7d0!=null&&(_0xf4c7d0[_0x2d769f(0x173)][_0x2d769f(0x17c)]=_0x2d769f(0x16b));}const _0x285007=document[_0x2d769f(0x180)]('#root\x20>\x20div\x20>\x20div.sc-bwzfXH.eBxXHw\x20>\x20div.sc-bwzfXH.eQIdEy\x20>\x20div\x20>\x20table\x20>\x20tbody\x20>\x20tr.modeLimitIcon.sc-kAzzGY.fpvDhZ\x20>\x20td.sc-cSHVUG.jvypUO\x20>\x20span.sc-bxivhb.hrWwGF');if(typeof _0x285007!=_0x2d769f(0x186)&&_0x285007!=null)_0x285007[_0x2d769f(0x173)]['color']=_0x2d769f(0x17b);else{const _0x8f2f2=document['querySelector']('#root\x20>\x20div\x20>\x20div.sc-bwzfXH.eBxXHw\x20>\x20div.sc-bwzfXH.eQIdEy\x20>\x20div\x20>\x20table\x20>\x20tbody\x20>\x20tr.modeLimitIcon.sc-kAzzGY.fpvDhZ\x20>\x20td.sc-cSHVUG.jvypUO\x20>\x20span.sc-bxivhb.hrWwGF');typeof _0x8f2f2!=_0x2d769f(0x186)&&_0x8f2f2!=null&&(_0x8f2f2['style']['color']=_0x2d769f(0x17b));}const _0x193f0f=document[_0x2d769f(0x180)](_0x2d769f(0x172));if(typeof _0x193f0f!=_0x2d769f(0x186)&&_0x193f0f!=null)_0x193f0f[_0x2d769f(0x173)][_0x2d769f(0x198)]=_0x2d769f(0x16d);else{const _0xc27656=document[_0x2d769f(0x180)](_0x2d769f(0x172));typeof _0xc27656!=_0x2d769f(0x186)&&_0xc27656!=null&&(_0xc27656[_0x2d769f(0x173)][_0x2d769f(0x198)]=_0x2d769f(0x16d));}window[_0x2d769f(0x18e)]=setInterval(()=>{const _0x523f6b=_0x2d769f,_0x48e47a=document[_0x523f6b(0x180)](_0x523f6b(0x192));if(typeof _0x48e47a!=_0x523f6b(0x186)&&_0x48e47a!=null)_0x48e47a[_0x523f6b(0x173)]['backgroundColor']=_0x523f6b(0x185);else{const _0x3af547=document[_0x523f6b(0x180)](_0x523f6b(0x192));typeof _0x3af547!=_0x523f6b(0x186)&&_0x3af547!=null&&(_0x3af547[_0x523f6b(0x173)][_0x523f6b(0x183)]=_0x523f6b(0x185));}const _0x7f5185=document[_0x523f6b(0x180)](_0x523f6b(0x18c));if(typeof _0x7f5185!='undefined'&&_0x7f5185!=null)_0x7f5185[_0x523f6b(0x173)]['backgroundColor']=_0x523f6b(0x185);else{const _0x309fa1=document['querySelector'](_0x523f6b(0x18c));typeof _0x309fa1!=_0x523f6b(0x186)&&_0x309fa1!=null&&(_0x309fa1[_0x523f6b(0x173)][_0x523f6b(0x183)]=_0x523f6b(0x185));}});const _0x1543b1=document[_0x2d769f(0x180)](_0x2d769f(0x17e));if(typeof _0x1543b1!=_0x2d769f(0x186)&&_0x1543b1!=null)_0x1543b1[_0x2d769f(0x173)][_0x2d769f(0x183)]=_0x2d769f(0x179);else{const _0x27f8fe=document[_0x2d769f(0x180)](_0x2d769f(0x17e));typeof _0x27f8fe!='undefined'&&_0x27f8fe!=null&&(_0x27f8fe[_0x2d769f(0x173)][_0x2d769f(0x183)]=_0x2d769f(0x179));}const _0x4a21aa=document['querySelector'](_0x2d769f(0x196));if(typeof _0x4a21aa!=_0x2d769f(0x186)&&_0x4a21aa!=null)_0x4a21aa['style'][_0x2d769f(0x19a)]=_0x2d769f(0x184);else{const _0x1d1cc6=document[_0x2d769f(0x180)](_0x2d769f(0x196));typeof _0x1d1cc6!='undefined'&&_0x1d1cc6!=null&&(_0x1d1cc6[_0x2d769f(0x173)][_0x2d769f(0x19a)]=_0x2d769f(0x184));}const _0x417b85=document[_0x2d769f(0x180)](_0x2d769f(0x188));typeof _0x417b85!=_0x2d769f(0x186)&&_0x417b85!=null&&(_0x417b85[_0x2d769f(0x173)][_0x2d769f(0x17c)]=_0x2d769f(0x16c));window[_0x2d769f(0x181)]=setInterval(()=>{const _0x5b2a14=_0x2d769f,_0x1b55e5=document['querySelector'](_0x5b2a14(0x17d));typeof _0x1b55e5!='undefined'&&_0x1b55e5!=null&&(_0x1b55e5[_0x5b2a14(0x173)][_0x5b2a14(0x17c)]=_0x5b2a14(0x17f));},0xfa),window[_0x2d769f(0x175)]=setInterval(()=>{const _0x1e7b02=_0x2d769f,_0x1db4ac=document[_0x1e7b02(0x180)](_0x1e7b02(0x188));typeof _0x1db4ac!=_0x1e7b02(0x186)&&_0x1db4ac!=null&&(_0x1db4ac[_0x1e7b02(0x173)][_0x1e7b02(0x19a)]='rgb(0\x200\x200\x20/\x2062%)\x2025px\x2015em\x2053em\x2025px',_0x1db4ac[_0x1e7b02(0x173)][_0x1e7b02(0x17c)]=_0x1e7b02(0x16c));},0xfa);const _0x9e0841=document[_0x2d769f(0x180)](_0x2d769f(0x188));typeof _0x9e0841!=_0x2d769f(0x186)&&_0x9e0841!=null&&(_0x9e0841[_0x2d769f(0x173)][_0x2d769f(0x17c)]=_0x2d769f(0x16c));const _0x1fece5=document[_0x2d769f(0x180)]('#root\x20>\x20div\x20>\x20div\x20>\x20div.sc-bwzfXH.dwmbMq\x20>\x20div:nth-child(1)\x20>\x20div.sc-bwzfXH.iRBkHZ');typeof _0x1fece5!='undefined'&&_0x1fece5!=null&&(_0x1fece5['style']['backgroundColor']=_0x2d769f(0x189));const _0x4f01dc=document[_0x2d769f(0x180)](_0x2d769f(0x174));typeof _0x4f01dc!=_0x2d769f(0x186)&&_0x4f01dc!=null&&(_0x4f01dc[_0x2d769f(0x173)]['backgroundColor']=_0x2d769f(0x189));const _0x3bc595=document[_0x2d769f(0x180)]('#root\x20>\x20div\x20>\x20div\x20>\x20div.sc-bwzfXH.dwmbMq\x20>\x20div:nth-child(1)\x20>\x20div.sc-bwzfXH.inHDzr');typeof _0x3bc595!=_0x2d769f(0x186)&&_0x3bc595!=null&&(_0x3bc595[_0x2d769f(0x173)][_0x2d769f(0x183)]=_0x2d769f(0x189));const _0x36b3ab=document['querySelector'](_0x2d769f(0x193));typeof _0x36b3ab!='undefined'&&_0x36b3ab!=null&&(_0x36b3ab[_0x2d769f(0x173)]['backgroundColor']=_0x2d769f(0x178));const _0x4e1812=document['querySelector']('#root\x20>\x20div\x20>\x20div.sc-bwzfXH.jaVQzj\x20>\x20div.sc-bwzfXH.fwCaTJ\x20>\x20div.sc-bwzfXH.OFYUV');typeof _0x4e1812!=_0x2d769f(0x186)&&_0x4e1812!=null&&(_0x4e1812[_0x2d769f(0x173)]['background']=_0x2d769f(0x187));const _0x34fea8=document['querySelector']('#root\x20>\x20div\x20>\x20div.sc-bwzfXH.jaVQzj\x20>\x20div.sc-bwzfXH.fwCaTJ\x20>\x20div.sc-bwzfXH.OFYUV\x20>\x20div\x20>\x20div.sc-bwzfXH.dKcbgr');typeof _0x34fea8!=_0x2d769f(0x186)&&_0x34fea8!=null&&(_0x34fea8[_0x2d769f(0x173)]['background']=_0x2d769f(0x176));const _0x23b117=document[_0x2d769f(0x180)](_0x2d769f(0x19c));typeof _0x23b117!=_0x2d769f(0x186)&&_0x23b117!=null&&(_0x23b117[_0x2d769f(0x173)][_0x2d769f(0x17c)]='linear-gradient(90deg,\x20rgb(0\x200\x200)\x200%,\x20rgba(0,\x2026,\x2039,\x200)\x20100%)');const _0x4db2eb=document[_0x2d769f(0x180)]('#root\x20>\x20div\x20>\x20div.sc-bwzfXH.eBxXHw\x20>\x20div.sc-bwzfXH.eQIdEy\x20>\x20div\x20>\x20table\x20>\x20tbody\x20>\x20tr:nth-child(2)\x20>\x20td.sc-cSHVUG.jvypUO\x20>\x20span.sc-bxivhb.ccKwbJ');typeof _0x4db2eb!='undefined'&&_0x4db2eb!=null&&(_0x4db2eb[_0x2d769f(0x173)][_0x2d769f(0x190)]=_0x2d769f(0x16e)),window[_0x2d769f(0x197)]=setInterval(()=>{const _0x48ce44=_0x2d769f,_0x47f203=document[_0x48ce44(0x180)]('#root\x20>\x20div\x20>\x20div\x20>\x20div.sc-bwzfXH.dwEnBm\x20>\x20div\x20>\x20div');typeof _0x47f203!=_0x48ce44(0x186)&&_0x47f203!=null&&(_0x47f203[_0x48ce44(0x173)]['backgroundColor']=_0x48ce44(0x18f));},0xfa),window[_0x2d769f(0x197)]=setInterval(()=>{const _0x3be334=_0x2d769f,_0x2a53c5=document[_0x3be334(0x180)]('.sc-bwzfXH.jhvmvA');typeof _0x2a53c5!=_0x3be334(0x186)&&_0x2a53c5!=null&&(_0x2a53c5[_0x3be334(0x173)][_0x3be334(0x17c)]=_0x3be334(0x17f));});},0x2ee));
