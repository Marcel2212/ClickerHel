// JavaScript-Code mit setInterval und clearInterval
let intervalId; // Variable zum Speichern des Intervals

function markTextsWithinSpan() {
  const turquoiseTags = ["[YSL]", "[CP9]", "[Mad]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]"]; // Tags, die in Türkis markiert werden sollen
  const redTags = ["[KOA]", "[NL]", "[D3S]", "[sRev]", "[ly]", "[R8]", "[Do.it]", "[808]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]", "[xxxxxxx]"]; // Tags, die in Rot markiert werden sollen

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
    const containerElement = document.querySelector(".BattleTabStatisticComponentStyle-container");
    if (!containerElement) {
      markTextsWithinSpan();
    } else {
      clearInterval(intervalId); // Stoppe die Aktualisierung, wenn der Benutzer sich im ".BattleTabStatisticComponentStyle-container" befindet
    }
  }, 1000);
}

startUpdating(); // Starte die Aktualisierung
