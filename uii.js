
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
        let element6 = document.querySelector("x"); //Loading screen
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
           let element9 = document.querySelector(".NewsComponentStyle-newsWindow"); //News
        if (element9) {
           element9.style.background = "radial-gradient(50% 100% at 50% 100%, rgb(226 0 255) 0%, rgba(0, 0, 0, 0.9) 100%);";
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
  '.Common-whiteSpaceNoWrap',
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

