//Login Form Animation
   (function() {
function addBorder() {
const kVrAtr = document.querySelector(".kVrAtr");
if (!kVrAtr) {
return;
} kVrAtr.style.position = "relative";

    const border = document.createElement("div");
    border.style.position = "absolute";
    border.style.top = 0;
    border.style.left = 0;
    border.style.bottom = 0;
    border.style.right = 0;
    border.style.border = "2px solid purple";
    border.style.animation = "border-pulse 1s ease-out infinite alternate";
    border.style.zIndex = "-1";

    kVrAtr.appendChild(border);

    const keyframes = `
      @keyframes border-pulse {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(1.05);
        }
      }
    `;

    const style = document.createElement("style");
    style.innerHTML = keyframes;
    document.head.appendChild(style);
}

let intervalId;

function checkJfSaSs() {
    const jfSaSs = document.querySelector(".jfSaSs");
    if (jfSaSs) {
        intervalId = setInterval(function() {
            addBorder();
        }, 500);
    } else {
        clearInterval(intervalId);
    }
}

checkJfSaSs();
setInterval(checkJfSaSs, 1000);
})();

//Login Logo

(function() {
    'use strict';

    let applyGradient = function() {
        let element1 = document.querySelector(".jhvmvA");
        if (element1) {
            element1.style.background = "radial-gradient(50% 100% at 50% 100%, rgb(129, 0, 247, 0.65) 0%, rgb(0, 0, 0) 100%)";
        }

        let element2 = document.querySelector(".dKAHNu");
        if (element2) {
            element2.style.background = "radial-gradient(50% 100% at 50% 100%, rgba(129, 0, 247, 0.65) 0%, rgb(0 0 0) 100%)";
        }

        let element3 = document.querySelector(".jQLjp");
        if (element3) {
            element3.style.background = "radial-gradient(50% 100% at 50% 100%, rgb(129, 0, 247, 0.65) 0%, rgb(0, 0, 0) 100%)";
        }

        let element4 = document.querySelector(".kijgND");
        if (element4) {
            element4.style.background = "radial-gradient(50% 100% at 50% 100%, rgb(129, 0, 247, 0.65) 0%, rgb(0, 0, 0) 100%)";
        }

       let element5 = document.querySelector(".hWZnyd");
        if (element5) {
            element5.style.background = "radial-gradient(50% 100% at 50% 100%, rgb(129, 0, 247, 0.65) 0%, rgb(0, 0, 0) 100%)";

         }
        let element6 = document.querySelector(".Yfwvt");
        if (element6) {
           element6.style.background = "radial-gradient(50% 100% at 50% 100%, rgb(129, 0, 247, 0.65) 0%, rgb(0, 0, 0) 100%)";
        }
        let element7 = document.querySelector(".dsItLK");
        if (element7) {
           element7.style.background = "radial-gradient(50% 100% at 50% 100%, rgb(129, 0, 247, 0.65) 0%, rgb(0, 0, 0) 100%)";
        }
        let element8 = document.querySelector(".liPcsK");
        if (element8) {
           element8.style.background = "radial-gradient(50% 100% at 50% 100%, rgba(129, 0, 247, 0.65) 0%, rgb(33 13 76) 100%)";
        }
        let element9 = document.querySelector(".jKmoYC");
        if (element9) {
           element9.style.background = "rgb(0 0 0 / 75%)";
        }
        };

    applyGradient();
    document.addEventListener("DOMSubtreeModified", applyGradient);
})();



(function() {
    'use strict';

    let applyGradient = function() {
        let element1 = document.querySelector(".klaDRA");
        if (element1) {
            element1.style.background = "radial-gradient(20em at 50% 43.45%, rgb(42 12 82) 0%, rgb(0, 0, 0) 100%)";
        }
        let element2 = document.querySelector(".bOComm");
        if (element2) {
            element2.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(140 0 255 / 75%) 0%, rgba(255, 204, 0, 0) 100%), rgb(17 0 38 / 75%)";
        }
        };
    applyGradient();
    document.addEventListener("DOMSubtreeModified", applyGradient);
})();

let applyGradient = function() {
    let element1 = document.querySelector(".eQefek");
    if (element1) {
        element1.style.background = "radial-gradient(50% 100% at 50% 100%, rgb(129, 0, 247, 0.65) 0%, rgb(0, 0, 0) 100%)";
    }
       let element2 = document.querySelector(".jKmoYC");
    if (element2) {
      element2.style.background = "radial-gradient(50% 100% at 50% 100%, rgb(129, 0, 247, 0.65) 0%, rgb(0, 0, 0) 100%)";
    }       
    let element3 = document.querySelector(".leseTv");
    if (element3) {
     element3.style.background = "radial-gradient(50% 100% at 50% 100%, rgb(88 0 185) 0%, rgb(0 0 0) 100%)";
       }  
};
applyGradient();
document.addEventListener("DOMSubtreeModified", applyGradient);
//Other Overlays
(function() {
    'use strict';

    let applyGradient = function() {
        let element1 = document.querySelector(".hsDbCm");
        if (element1) {
           element1.style.background = "radial-gradient(100% 100% at 0% 0%, rgba(218 0 255 / 75%) 0%, rgba(255, 204, 0, 0) 100%), rgba(20 0 35 / 75%)";
        }
        };
    applyGradient();
    document.addEventListener("DOMSubtreeModified", applyGradient);
})();
//Text
let intervalId;

const updateText = () => {
    const element = document.querySelector(".irJYKY");
    element.innerHTML = 'CP9 Strongest Clan';
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
