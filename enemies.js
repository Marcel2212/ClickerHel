// JavaScript-Code mit setInterval und clearInterval
let intervalId; // Variable zum Speichern des Intervals

function markTextsWithinSpan() {
  const turquoiseTags = ["[YSL]", "[CP9]", "[Mad]", "[Nike]", "[Naka]", "[Cube]", "[1v9]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]"]; //allies
  
  const redTags = ["[KOA]", "[NL]", "[D3S]", "[sRev]", "[ly]", "[R8]", "[Do.it]", "[808]", "[K0A]", "[Kuduro]", "[C.at]", "[Sarah.girl]", "[HTP]", "[AR]", "[Nvm]", "[1994]", "[Cruel]", "[888]", "[Aura]", "[Q2]", "[99]", "[INRX]", "[CVS]", "[SXN]", "[6ang]", "[Way]", "[lKOAl]"
                  , "[Bay]", "[LLC]", "[Ms.Pwo]", "[Ditsy]", "[Batzen]", "[44]", "[ZX]", "[VS]", "[Love]", "[Suits]", "[OL]", "[19]", "[RoRo]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]"
                  , "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]"
                  , "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]"]; //enemys

  const whiteSpaceNoWrapElements = document.querySelectorAll(".Common-whiteSpaceNoWrap");

  whiteSpaceNoWrapElements.forEach(element => {
    let marked = false; // Eine Flagge, um zu überprüfen, ob das Element bereits markiert wurde

    turquoiseTags.forEach(tag => {
      if (element.textContent.includes(tag)) {
        element.style.color = "rgb(7, 247, 255)"; // Türkis markieren
        marked = true;
      }
    });

    if (!marked) {
      redTags.forEach(tag => {
        if (element.textContent.includes(tag)) {
          element.style.color = "red"; // Rot markieren
          marked = true;
        }
      });
    }

    if (!marked) {
      element.style.color = ""; // Setze die Farbe zurück, wenn keine Übereinstimmung gefunden wurde
    }
  });
}

function startUpdating() {
  intervalId = setInterval(function() {
    const containerElement = document.querySelector("x");
    if (!containerElement) {
      markTextsWithinSpan();
    } else {
      clearInterval(intervalId); // Stoppe die Aktualisierung, wenn der Benutzer sich im ".BattleTabStatisticComponentStyle-container" befindet
    }
  }, 300);
}

startUpdating(); // Starte die Aktualisierung
