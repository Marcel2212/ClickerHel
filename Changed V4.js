
// Hier die JavaScript-Code Blöcke einfügen
let codeBlock1 = `// Code-Block 1
 // Hier ist der JavaScript-Code für den ersten Block:
let applyGradient = function() { //Pause
        let element1 = document.querySelector(".Common-entranceGradient");
        if (element1) {
            element1.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(0 198 255 / 75%) 0%, rgba(255, 204, 0, 0) 75%), rgb(6 28 59 / 75%)";
        }

        let element2 = document.querySelector(".BattleTabStatisticComponentStyle-containerInsideTeams"); //Tab
        if (element2) {
            element2.style.background = "(100% 100% at 0% 0%, rgba(0, 170, 255, 0.75) 0%, rgba(255, 204, 0, 0) 100%), rgba(0, 20, 38, 0.75)";
        }

        let element3 = document.querySelector(".BattleTabStatisticComponentStyle-containerInsideResults"); //Tab 2
        if (element3) {
            element3.style.background = "(100% 100% at 0% 0%, rgba(0, 170, 255, 0.75) 0%, rgba(255, 204, 0, 0) 100%), rgba(0, 20, 38, 0.75)";
        }

        let element4 = document.querySelector(".LobbyLoaderComponentStyle-container"); //Lobby Loading Screen
        if (element4) {
            element4.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(0 198 255 / 75%) 0%, rgba(255, 204, 0, 0) 75), rgb(6 28 59 / 75%)";
        }

       let element5 = document.querySelector(".Common-container "); //Main
        if (element5) {
            element5.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(0 198 255 / 75%) 0%, rgba(255, 204, 0, 0) 75%), rgb(6 28 59 / 75%)";
         }
        let element6 = document.querySelector(".NewsComponentStyle-newsWindow"); //News
        if (element6) {
           element6.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(0 198 255 / 75%) 0%, rgba(255, 204, 0, 0) 75%), rgb(6 28 59 / 75%)";
        }
         let element7 = document.querySelector(".DialogContainerComponentStyle-container"); //Pause
        if (element7) {
           element7.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(0 198 255 / 75%) 0%, rgba(255, 204, 0, 0) 75%), rgb(6 28 59 / 75%)";
        }
         let element8 = document.querySelector(".LobbyLoaderComponentStyle-container"); //Loading Screen
        if (element8) {
           element8.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(0 198 255 / 75%) 0%, rgba(255, 204, 0, 0) 75%), rgb(6 28 59 / 75%)";
        }
           let element9 = document.querySelector(".ChatComponentStyle-chatWindow"); //Chat
        if (element9) {
           element9.style.background = "background-color: rgb(9 7 14);";
        }
    const element12 = document.querySelector(".BattlePassLobbyComponentStyle-menuBattlePass");
    if (element12) {
        element12.style.background = "radial-gradient(106.67% 100% at 0% 0%, rgb(44 255 244) 0%, rgba(0, 25, 38, 0.5) 100%)";
        element12.style.borderRadius = "0.5em";
        element12.style.backdropFilter = "blur(0.781em)";
        element12.style.webkitBackdropFilter = "blur(0.781em)"; // Safari-Unterstützung
        element12.style.boxShadow = "rgb(44 255 244) 0em 0em 0em 1px";
    }
    const element53 = document.querySelector(".EventBattlePassLobbyComponentStyle-buttonEventBattlePass");
    if (element53) {
        element53.style.background = "radial-gradient(106.67% 100% at 0% 0%, rgb(174 252 255) 0%, rgba(0, 25, 38, 0.5) 100%)";
        element53.style.borderRadius = "0.5em";
        element53.style.backdropFilter = "blur(0.781em)";
        element53.style.webkitBackdropFilter = "blur(0.781em)"; // Safari-Unterstützung
        element53.style.boxShadow = "rgb(174 252 255) 0em 0em 0em 1px";
    }
    const container = document.querySelector(".BattleTabStatisticComponentStyle-containerInsideTeams");
    if (container) {
        container.style.backgroundColor = "transparent";
        container.style.backdropFilter = "blur(5px)";
        container.style.webkitBackdropFilter = "blur(5px)";
        container.style.boxShadow = "0.1em 0.1em 50px rgb(0 246 255 / 100%)";
   }
const container554 = document.querySelector(".BattleTabStatisticComponentStyle-containerInsideResults");
    if (container554) {
        container554.style.backgroundColor = "transparent";
        container554.style.backdropFilter = "blur(5px)";
        container554.style.webkitBackdropFilter = "blur(5px)";
        container554.style.boxShadow = "0.1em 0.1em 50px rgb(0 246 255 / 100%)";
    }
    const container4 = document.querySelector(".ChatComponentStyle-chatWindow");
    if (container4) {
        container4.style.backgroundColor = "rgb(0 168 255 / 15%)";
        container4.style.backdropFilter = "blur(5px)";
        container4.style.webkitBackdropFilter = "blur(5px)";
}

};
    applyGradient();
    document.addEventListener("DOMSubtreeModified", applyGradient);

// Funktion, die eine neue CSS-Regel hinzufügt
function addCSSRule(selector, rule) {
  if (document.styleSheets && document.styleSheets.length > 0) {
    const styleSheet = document.styleSheets[document.styleSheets.length - 1];
    if (styleSheet.insertRule) {
      styleSheet.insertRule(selector + '{' + rule + '}', styleSheet.cssRules.length);
    } else if (styleSheet.addRule) {
      styleSheet.addRule(selector, rule, -1);
    }
  }
}

// Funktion, die eine neue CSS-Regel hinzufügt
function addCSSRule(selector, rule) {
  if (document.styleSheets && document.styleSheets.length > 0) {
    const styleSheet = document.styleSheets[document.styleSheets.length - 1];
    if (styleSheet.insertRule) {
      styleSheet.insertRule(selector + '{' + rule + '}', styleSheet.cssRules.length);
    } else if (styleSheet.addRule) {
      styleSheet.addRule(selector, rule, -1);
    }
  }
}

// Funktion zum Ändern der Farbe für die ausgewählten Klassen
function changeColorForClasses(classList) {
  const elements = document.querySelectorAll(classList);

  elements.forEach(element => {
    element.style.color = 'rgb(174 252 255)';
  });
}

// Hinzufügen einer neuen CSS-Regel für die Klasse .Common-menuItemActive
let classListToChangeColor = [
  '.Common-activeMenu',
  '.UserInfoContainerStyle-textDecoration',
  '.Common-maskImageContain',
  '.ScrollingCardsComponentStyle-cardCount',
  '.Font-regular',
  '.Common-menuItemActive'
];

classListToChangeColor.forEach(className => {
  addCSSRule(className, 'color: rgb(174 252 255) !important;');
});

// Hinzufügen der zusätzlichen CSS-Eigenschaften für die Klasse .Common-menuItemActive
addCSSRule('.Common-menuItemActive', 'position: absolute;');
addCSSRule('.Common-menuItemActive', 'bottom: 0px;');
addCSSRule('.Common-menuItemActive', 'background-color: rgb(174 252 255);');
addCSSRule('.Common-menuItemActive', 'box-shadow: rgb(163, 0, 255) 0em 0em 0.375em;');
addCSSRule('.Common-menuItemActive', 'filter: drop-shadow(rgb(0 231 255) 0em 0em 0.375em);');
addCSSRule('.Common-menuItemActive', 'width: 100%;');
addCSSRule('.Common-menuItemActive', 'height: 0.0625em;');
addCSSRule('.Common-menuItemActive', 'margin-bottom: -0.1em;');

// Farbe für die ausgewählten Klassen ändern
window.addEventListener('DOMContentLoaded', () => {
  changeColorForClasses(classListToChangeColor.join(', '));
});
// Füge hier den Code für Code-Block 1 ein`;

let codeBlock2 = `// Code-Block 2
 let applyGradient = function() { //Pause
        let element1 = document.querySelector(".Common-entranceGradient");
        if (element1) {
            element1.style.background = "linear-gradient(rgb(0 0 0) 0%, rgb(255 0 93 / 45%) 75%)";
        }

        let element2 = document.querySelector(".BattleTabStatisticComponentStyle-containerInsideTeams"); //Tab
        if (element2) {
            element2.style.background = "(100% 100% at 0% 0%, rgba(0, 170, 255, 0.75) 0%, rgba(255, 204, 0, 0) 100%), rgba(0, 20, 38, 0.75)";
        }

        let element3 = document.querySelector(".BattleTabStatisticComponentStyle-containerInsideResults"); //Tab 2
        if (element3) {
            element3.style.background = "(100% 100% at 0% 0%, rgba(0, 170, 255, 0.75) 0%, rgba(255, 204, 0, 0) 100%), rgba(0, 20, 38, 0.75)";
        }

        let element4 = document.querySelector(".LobbyLoaderComponentStyle-container"); //Lobby Loading Screen
        if (element4) {
            element4.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(255 0 67 / 75%) 0%, rgba(255, 204, 0, 0) 100%), rgb(59 6 39 / 75%)";
        }

       let element5 = document.querySelector(".Common-container "); //Main
        if (element5) {
            element5.style.background = "radial-gradient(50% 100% at 50% 100%, rgb(255 0 88) 0%, rgba(0, 0, 0, 0.95) 100%)";
         }
        let element6 = document.querySelector(".NewsComponentStyle-newsWindow"); //News
        if (element6) {
           element6.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(255 0 67 / 75%) 0%, rgba(255, 204, 0, 0) 100%), rgb(59 6 39 / 75%)";
        }
         let element7 = document.querySelector(".DialogContainerComponentStyle-container"); //Pause
        if (element7) {
           element7.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(255 0 67 / 75%) 0%, rgba(255, 204, 0, 0) 100%), rgb(59 6 39 / 75%)";
        }
         let element8 = document.querySelector(".LobbyLoaderComponentStyle-container"); //Loading Screen
        if (element8) {
           element8.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(255 0 67 / 75%) 0%, rgba(255, 204, 0, 0) 100%), rgb(59 6 39 / 75%)";
        }
           let element9 = document.querySelector(".ChatComponentStyle-chatWindow"); //Chat
        if (element9) {
           element9.style.background = "background-color: rgb(9 7 14);";
        }
    const element12 = document.querySelector(".BattlePassLobbyComponentStyle-menuBattlePass");
    if (element12) {
        element12.style.background = "radial-gradient(106.67% 100% at 0% 0%, rgb(255 0 88) 0%, rgba(0, 25, 38, 0.5) 100%)";
        element12.style.borderRadius = "0.5em";
        element12.style.backdropFilter = "blur(0.781em)";
        element12.style.webkitBackdropFilter = "blur(0.781em)"; // Safari-Unterstützung
        element12.style.boxShadow = "rgb(255 0 88) 0em 0em 0em 1px";
    }
    const element53 = document.querySelector(".EventBattlePassLobbyComponentStyle-buttonEventBattlePass");
    if (element53) {
        element53.style.background = "radial-gradient(106.67% 100% at 0% 0%, rgb(255 0 84) 0%, rgba(0, 25, 38, 0.5) 100%)";
        element53.style.borderRadius = "0.5em";
        element53.style.backdropFilter = "blur(0.781em)";
        element53.style.webkitBackdropFilter = "blur(0.781em)"; // Safari-Unterstützung
        element53.style.boxShadow = "rgb(255 0 111) 0em 0em 0em 1px";
    }
    const container = document.querySelector(".BattleTabStatisticComponentStyle-containerInsideTeams");
    if (container) {
        container.style.backgroundColor = "transparent";
        container.style.backdropFilter = "blur(5px)";
        container.style.webkitBackdropFilter = "blur(5px)";
        container.style.boxShadow = "0.1em 0.1em 23px rgb(255 0 99 / 88%)";
    }
};
    applyGradient();
    document.addEventListener("DOMSubtreeModified", applyGradient);

// Funktion, die eine neue CSS-Regel hinzufügt
function addCSSRule(selector, rule) {
  if (document.styleSheets && document.styleSheets.length > 0) {
    const styleSheet = document.styleSheets[document.styleSheets.length - 1];
    if (styleSheet.insertRule) {
      styleSheet.insertRule(selector + '{' + rule + '}', styleSheet.cssRules.length);
    } else if (styleSheet.addRule) {
      styleSheet.addRule(selector, rule, -1);
    }
  }
}

// Funktion, die eine neue CSS-Regel hinzufügt
function addCSSRule(selector, rule) {
  if (document.styleSheets && document.styleSheets.length > 0) {
    const styleSheet = document.styleSheets[document.styleSheets.length - 1];
    if (styleSheet.insertRule) {
      styleSheet.insertRule(selector + '{' + rule + '}', styleSheet.cssRules.length);
    } else if (styleSheet.addRule) {
      styleSheet.addRule(selector, rule, -1);
    }
  }
}

// Funktion zum Ändern der Farbe für die ausgewählten Klassen
function changeColorForClasses(classList) {
  const elements = document.querySelectorAll(classList);

  elements.forEach(element => {
    element.style.color = 'rgb(255 133 182)';
  });
}

// Hinzufügen einer neuen CSS-Regel für die Klasse .Common-menuItemActive
let classListToChangeColor = [
  '.Common-activeMenu',
  '.UserInfoContainerStyle-textDecoration',
  '.Common-maskImageContain',
  '.ScrollingCardsComponentStyle-cardCount',
  '.Font-regular',
  '.Common-menuItemActive'
];

classListToChangeColor.forEach(className => {
  addCSSRule(className, 'color: rgb(255 133 182) !important;');
});

// Hinzufügen der zusätzlichen CSS-Eigenschaften für die Klasse .Common-menuItemActive
addCSSRule('.Common-menuItemActive', 'position: absolute;');
addCSSRule('.Common-menuItemActive', 'bottom: 0px;');
addCSSRule('.Common-menuItemActive', 'background-color: rgb(112, 5, 255);');
addCSSRule('.Common-menuItemActive', 'box-shadow: rgb(163, 0, 255) 0em 0em 0.375em;');
addCSSRule('.Common-menuItemActive', 'filter: drop-shadow(rgb(163, 0, 255) 0em 0em 0.375em);');
addCSSRule('.Common-menuItemActive', 'width: 100%;');
addCSSRule('.Common-menuItemActive', 'height: 0.0625em;');
addCSSRule('.Common-menuItemActive', 'margin-bottom: -0.1em;');

// Farbe für die ausgewählten Klassen ändern
window.addEventListener('DOMContentLoaded', () => {
  changeColorForClasses(classListToChangeColor.join(', '));
});

// Füge hier den Code für Code-Block 2 ein`;

let codeBlock3 = `// Code-Block 3

 let applyGradient = function() { //Pause
        let element1 = document.querySelector(".x");
        if (element1) {
            element1.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(0 255 222 / 61%) 0%, rgba(255, 204, 0, 0) 100%), rgb(17 84 233 / 46%)";
        }

        let element2 = document.querySelector(".BattleTabStatisticComponentStyle-containerInsideTeams"); //Tab
        if (element2) {
            element2.style.background = "(100% 100% at 0% 0%, rgba(0, 170, 255, 0.75) 0%, rgba(255, 204, 0, 0) 100%), rgba(0, 20, 38, 0.75)";
        }

        let element3 = document.querySelector(".BattleTabStatisticComponentStyle-containerInsideResults"); //Tab 2
        if (element3) {
            element3.style.background = "(100% 100% at 0% 0%, rgba(0, 170, 255, 0.75) 0%, rgba(255, 204, 0, 0) 100%), rgba(0, 20, 38, 0.75)";
        }

        let element4 = document.querySelector(".LobbyLoaderComponentStyle-container"); //Lobby Loading Screen
        if (element4) {
            element4.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(215 0 255 / 75%) 0%, rgba(255, 204, 0, 0) 100%), rgb(31 0 38 / 75%)";
        }

       let element5 = document.querySelector(".Common-container "); //Main
        if (element5) {
            element5.style.background = "radial-gradient(50% 100% at 50% 100%, rgb(226 0 255) 0%, rgb(0 0 0 / 95%) 100%)";
         }
        let element6 = document.querySelector(".NewsComponentStyle-newsWindow"); //News
        if (element6) {
           element6.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(215 0 255 / 75%) 0%, rgba(255, 204, 0, 0) 100%), rgb(31 0 38 / 75%)";
        }
         let element7 = document.querySelector(".DialogContainerComponentStyle-container"); //Before Join
        if (element7) {
           element7.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(215 0 255 / 75%) 0%, rgba(255, 204, 0, 0) 100%), rgb(31 0 38 / 75%)";
        }
         let element8 = document.querySelector(".LobbyLoaderComponentStyle-container"); //Loading Screen
        if (element8) {
           element8.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(215 0 255 / 75%) 0%, rgba(255, 204, 0, 0) 100%), rgb(31 0 38 / 75%)";
        }
           let element9 = document.querySelector(".ChatComponentStyle-chatWindow"); //Chat
        if (element9) {
           element9.style.background = "background-color: rgb(9 7 14);";
        }
    const element12 = document.querySelector(".BattlePassLobbyComponentStyle-menuBattlePass");
    if (element12) {
        element12.style.background = "radial-gradient(106.67% 100% at 0% 0%, rgb(212, 127, 255) 0%, rgba(0, 25, 38, 0.5) 100%)";
        element12.style.borderRadius = "0.5em";
        element12.style.backdropFilter = "blur(0.781em)";
        element12.style.webkitBackdropFilter = "blur(0.781em)"; // Safari-Unterstützung
        element12.style.boxShadow = "rgb(213, 128, 255) 0em 0em 0em 1px";
    }

    const container = document.querySelector(".BattleTabStatisticComponentStyle-containerInsideTeams");
    if (container) {
        container.style.backgroundColor = "transparent";
        container.style.backdropFilter = "blur(5px)";
        container.style.webkitBackdropFilter = "blur(5px)";
        container.style.boxShadow = "0.1em 0.1em 13px rgb(255, 0, 219)";
    }
};
    applyGradient();
    document.addEventListener("DOMSubtreeModified", applyGradient);

// Funktion, die eine neue CSS-Regel hinzufügt
function addCSSRule(selector, rule) {
  if (document.styleSheets && document.styleSheets.length > 0) {
    const styleSheet = document.styleSheets[document.styleSheets.length - 1];
    if (styleSheet.insertRule) {
      styleSheet.insertRule(selector + '{' + rule + '}', styleSheet.cssRules.length);
    } else if (styleSheet.addRule) {
      styleSheet.addRule(selector, rule, -1);
    }
  }
}

// Funktion, die eine neue CSS-Regel hinzufügt
function addCSSRule(selector, rule) {
  if (document.styleSheets && document.styleSheets.length > 0) {
    const styleSheet = document.styleSheets[document.styleSheets.length - 1];
    if (styleSheet.insertRule) {
      styleSheet.insertRule(selector + '{' + rule + '}', styleSheet.cssRules.length);
    } else if (styleSheet.addRule) {
      styleSheet.addRule(selector, rule, -1);
    }
  }
}

// Funktion zum Ändern der Farbe für die ausgewählten Klassen
function changeColorForClasses(classList) {
  const elements = document.querySelectorAll(classList);

  elements.forEach(element => {
    element.style.color = 'rgb(219, 176, 255)';
  });
}

// Hinzufügen einer neuen CSS-Regel für die Klasse .Common-menuItemActive
let classListToChangeColor = [
  '.Common-activeMenu',
  '.UserInfoContainerStyle-textDecoration',
  '.Common-maskImageContain',
  '.ScrollingCardsComponentStyle-cardCount',
  '.Font-regular',
  '.Common-menuItemActive'
];

classListToChangeColor.forEach(className => {
  addCSSRule(className, 'color: rgb(219, 176, 255) !important;');
});

// Hinzufügen der zusätzlichen CSS-Eigenschaften für die Klasse .Common-menuItemActive
addCSSRule('.Common-menuItemActive', 'position: absolute;');
addCSSRule('.Common-menuItemActive', 'bottom: 0px;');
addCSSRule('.Common-menuItemActive', 'background-color: rgb(112, 5, 255);');
addCSSRule('.Common-menuItemActive', 'box-shadow: rgb(163, 0, 255) 0em 0em 0.375em;');
addCSSRule('.Common-menuItemActive', 'filter: drop-shadow(rgb(163, 0, 255) 0em 0em 0.375em);');
addCSSRule('.Common-menuItemActive', 'width: 100%;');
addCSSRule('.Common-menuItemActive', 'height: 0.0625em;');
addCSSRule('.Common-menuItemActive', 'margin-bottom: -0.1em;');

// Farbe für die ausgewählten Klassen ändern
window.addEventListener('DOMContentLoaded', () => {
  changeColorForClasses(classListToChangeColor.join(', '));
});
  // Füge hier den Code aus dem dritten Code-Block ein
// Füge hier den Code für Code-Block 3 ein`;

// Funktion zum Ausführen des JavaScript-Codes
function executeCode(selectedField) {
  let codeToExecute = '';
  if (selectedField === '1') {
    codeToExecute = codeBlock1;
  } else if (selectedField === '2') {
    codeToExecute = codeBlock2;
  } else if (selectedField === '3') {
    codeToExecute = codeBlock3;
  } else {
    console.warn('Ungültige Eingabe! Bitte eine Zahl zwischen 1 und 3 eingeben.');
    return;
  }

  if (codeToExecute) {
    try {
      eval(codeToExecute);
      console.log(`Code Block ${selectedField} erfolgreich ausgeführt.`);
      localStorage.setItem('lastUsedCodeBlock', selectedField); // Speichern des zuletzt verwendeten Code-Blocks
    } catch (error) {
      console.error(`Fehler beim Ausführen von Code Block ${selectedField}:`, error);
    }
  } else {
    console.warn(`Code Block ${selectedField} ist leer oder nicht definiert.`);
  }
}

// Laden des zuletzt verwendeten Code-Blocks aus dem localStorage
let lastUsedCodeBlock = localStorage.getItem('lastUsedCodeBlock');

// Wenn ein zuletzt verwendeter Code-Block vorhanden ist, führe ihn aus
if (lastUsedCodeBlock) {
  executeCode(lastUsedCodeBlock);
}

// Event Listener für die Eingabe der Taste "Ü"
document.addEventListener('keydown', function(event) {
  if (event.key.toLowerCase() === 'ü') {
    const selectedField = prompt('Select 1 Theme from 3, 1 Blue 2nd red and 3th Purple:');
    executeCode(selectedField);
  }
});

