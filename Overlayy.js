(function() {
    'use strict';

    let applyGradient = function() { //Pause
        let element1 = document.querySelector(".lcOZsa");
        if (element1) {
            element1.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(0 255 222 / 61%) 0%, rgba(255, 204, 0, 0) 100%), rgb(17 84 233 / 46%); 
        }

        let element2 = document.querySelector(".lcataQ"); //Tab
        if (element2) {
            element2.style.background = "rgb(0 0 0 / 75%)";
        }

        let element3 = document.querySelector(".ejkSHP"); //Tab 2
        if (element3) {
            element3.style.background = "rgb(0 0 0 / 75%)";
        }

        let element4 = document.querySelector(".dXutBR"); //End Tab
        if (element4) {
            element4.style.background = "radial-gradient(50% 100% at 50% 100%, rgb(20 131 241 / 67%) 0%, rgb(0 0 0 / 95%) 100%)";
        }

       let element5 = document.querySelector(".iDgqtr"); //Main
        if (element5) {
            element5.style.background = "radial-gradient(50% 100% at 50% 100%, rgb(20 131 241 / 67%) 0%, rgb(0 0 0 / 95%) 100%)";

         }
        let element6 = document.querySelector(".iJwFyD"); //Before Join
        if (element6) {
           element6.style.background = "(100% 100% at 0% 0%, rgb(0 255 222 / 61%) 0%, rgba(255, 204, 0, 0) 100%), rgb(17 84 233 / 46%)";
        }
        };

    applyGradient();
    document.addEventListener("DOMSubtreeModified", applyGradient);
})();


//Text
let intervalId;

const updateText = () => {
    const element = document.querySelector(".dkFkic");
    element.innerHTML = 'CP9 Strongest Clanby Marcel';
};

const checkClass = () => {
    const element = document.querySelector(".liPcsK");
    if (element && element.offsetParent !== null) {
        clearInterval(intervalId);
        intervalId = setInterval(updateText, 1000);
    } else {
        clearInterval(intervalId);
    }
};

checkClass();
document.addEventListener('DOMSubtreeModified', checkClass);
