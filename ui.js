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
        };

    applyGradient();
    document.addEventListener("DOMSubtreeModified", applyGradient);
