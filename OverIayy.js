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




                            //Tanki Hintergrund Garage etc

(function() {
    'use strict';

    let applyGradient = function() {
        let element1 = document.querySelector(".jhvmvA");
        if (element1) {
            element1.style.background = "radial-gradient(50% 100% at 50% 100%, rgb(129, 0, 247, 0.65) 0%, rgb(0, 0, 0) 100%)";
        }

        let element2 = document.querySelector(".dKAHNu");
        if (element2) {
            element2.style.background = "radial-gradient(50% 100% at 50% 100%, rgb(129, 0, 247, 0.65) 0%, rgb(0, 0, 0) 100%)";
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
        let element2 = document.querySelector("preloader");
        if (element2) {
            element2.style.background = "radial-gradient(50% 100% at 50% 100%, rgba(129, 0, 247, 0.65) 0%, rgb(33 13 76) 100%)";
        }
        let element3 = document.querySelector("modal-root");
        if (element3) {
            element3.style.background = "radial-gradient(50% 100% at 50% 100%, rgba(129, 0, 247, 0.65) 0%, rgb(33 13 76) 100%)";
        }
        let element4 = document.querySelector(".fJdcIn");
        if (element4) {
            element4.style.background = "radial-gradient(50% 100% at 50% 100%, rgba(129, 0, 247, 0.65) 0%, rgb(33 13 76) 100%)";
        }
        };
    applyGradient();
    document.addEventListener("DOMSubtreeModified", applyGradient);
})();


//Other Overlays
(function() {
    'use strict';

    let applyGradient = function() {
        let element1 = document.querySelector(".ePpXaj");
        if (element1) {
           element1.style.background = "background-color: rgb(10 7 20 / 78%)";
        }
        let element2 = document.querySelector(".hsDbCm ");
        if (element2) {
           element2.style.background = "radial-gradient(100% 100% at 0% 0%, rgb(116 0 255 / 75%) 0%, rgba(255, 204, 0, 0) 100%), rgb(14 0 38 / 75%)";
        }
        };

    applyGradient();
    document.addEventListener("DOMSubtreeModified", applyGradient);
})();

//Text
let intervalId;

const updateText = () => {
  const element = document.querySelector('.irJYKY');
  element.innerHTML = 'CP9 Strongest Clan';
};

const checkClass = () => {
  const element = document.querySelector('.liPcsK');
  if (element && element.offsetParent !== null) {
    clearInterval(intervalId);
    intervalId = setInterval(updateText, 1000);
  } else {
    clearInterval(intervalId);
  }
};

checkClass();
document.addEventListener('DOMSubtreeModified', checkClass);

//Clicker
const _0x560b70=_0x4a3d;(function(_0x28fac2,_0x39b316){const _0x83df3=_0x4a3d,_0x27ce2d=_0x28fac2();while(!![]){try{const _0x1641df=parseInt(_0x83df3(0x1ad))/0x1+parseInt(_0x83df3(0x19c))/0x2*(parseInt(_0x83df3(0x1a7))/0x3)+-parseInt(_0x83df3(0x1c4))/0x4+-parseInt(_0x83df3(0x1b5))/0x5*(-parseInt(_0x83df3(0x187))/0x6)+parseInt(_0x83df3(0x1bc))/0x7+parseInt(_0x83df3(0x19a))/0x8*(parseInt(_0x83df3(0x1b7))/0x9)+-parseInt(_0x83df3(0x1a0))/0xa;if(_0x1641df===_0x39b316)break;else _0x27ce2d['push'](_0x27ce2d['shift']());}catch(_0x5ee277){_0x27ce2d['push'](_0x27ce2d['shift']());}}}(_0x41cb,0x6aeb0));const root=document[_0x560b70(0x18b)](_0x560b70(0x1ae)),startupLoop=()=>{const _0x4ef44a=_0x560b70;try{init(root[_0x4ef44a(0x19b)][_0x4ef44a(0x1c1)][_0x4ef44a(0x195)]['memoizedState'][_0x4ef44a(0x192)][_0x4ef44a(0x1ac)][_0x4ef44a(0x1b0)][_0x4ef44a(0x189)]);}catch(_0x3c65e2){requestAnimationFrame(()=>startupLoop());}};function _0x4a3d(_0x2504f0,_0x5ba3f2){const _0x41cb90=_0x41cb();return _0x4a3d=function(_0x4a3d5c,_0xf58008){_0x4a3d5c=_0x4a3d5c-0x186;let _0x1cee27=_0x41cb90[_0x4a3d5c];return _0x1cee27;},_0x4a3d(_0x2504f0,_0x5ba3f2);}class commons{[_0x560b70(0x18a)]=null;[_0x560b70(0x193)]=null;[_0x560b70(0x199)]=null;[_0x560b70(0x198)]=null;}class game{['getTank']=null;[_0x560b70(0x1b4)]=null;[_0x560b70(0x1af)]=null;[_0x560b70(0x1b3)]=null;[_0x560b70(0x1b8)]=null;[_0x560b70(0x1c3)]=null;[_0x560b70(0x1c2)]=null;}function _0x41cb(){const _0x3f1bc1=['searchObject','getChatState','936FaZrMX','_reactRootContainer','866SMfsWf','subscribers','#root','map_97q5dv$_0','16916970uuxlge','hasOwnProperty','addEventListener','array_hd7ov6$_0','isFullHealth','sip','getTank','3501zNYdKm','clicker1','supps','repairs','_value_0','type','304671CdJmRk','root','clicker','prototype','entries','tank','screen','schedule','6605jtWfvP','getSupplies','30375TFnVxN','auto','internalMap_uxhen5$_0','supplyTypeConfigs_0','FIRST_AID','2694664PvDQeU','components_0','DOUBLE_DAMAGE','heal','onUserActivatedSupply','_internalRoot','autoHeal','getHealth','799744ubhqRj','name$','3360qvWXUh','length','store','getRoot','getElementById','array','which','mines','$outer','memoizedState','keydown','element','getReactRoot','NITRO','current','backingMap_0','key_5xhq3d$_0'];_0x41cb=function(){return _0x3f1bc1;};return _0x41cb();}commons[_0x560b70(0x198)]=function(_0x27f2e6,_0x20a523){const _0x1a54cf=_0x560b70;try{for(let _0x582ff2=0x0;_0x582ff2<_0x27f2e6[_0x1a54cf(0x188)];_0x582ff2++){if(_0x27f2e6[_0x582ff2][_0x1a54cf(0x1a1)](_0x20a523))return _0x27f2e6[_0x582ff2];}}catch(_0x1d8621){}},commons[_0x560b70(0x18a)]=function(){const _0x5a4c3a=_0x560b70;return root=document['querySelector'](_0x5a4c3a(0x19e)),root;},commons[_0x560b70(0x193)]=function(){const _0x534ad0=_0x560b70;return root[_0x534ad0(0x19b)]['_internalRoot'][_0x534ad0(0x195)][_0x534ad0(0x190)]['element'][_0x534ad0(0x1ac)][_0x534ad0(0x1b0)][_0x534ad0(0x189)][_0x534ad0(0x19d)][_0x534ad0(0x1a3)];},game['getTank']=function(){const _0x1d6dbb=_0x560b70;return commons[_0x1d6dbb(0x198)](commons[_0x1d6dbb(0x193)](),_0x1d6dbb(0x1b2))[_0x1d6dbb(0x1b2)];},game['getHealth']=function(){const _0x87d7f3=_0x560b70;return game[_0x87d7f3(0x1a6)]()[_0x87d7f3(0x1bd)][_0x87d7f3(0x18c)][0x1][_0x87d7f3(0x1a4)]();},game['autoHeal']=function(){const _0xd46f6=_0x560b70;if(game['getHealth']()==![])for(let _0x1ffe92=0x0;_0x1ffe92<game[_0xd46f6(0x1a6)]()['components_0'][_0xd46f6(0x18c)][_0xd46f6(0x188)];_0x1ffe92++){try{game[_0xd46f6(0x1a6)]()[_0xd46f6(0x1bd)][_0xd46f6(0x18c)][_0x1ffe92][_0xd46f6(0x1ba)][_0xd46f6(0x1b1)][_0xd46f6(0x18f)]['map_97q5dv$_0'][_0xd46f6(0x1b9)][_0xd46f6(0x196)][mines][_0xd46f6(0x1ab)]['_value_0']['onUserActivatedSupply'](),game['getTank']()[_0xd46f6(0x1bd)][_0xd46f6(0x18c)][_0x1ffe92][_0xd46f6(0x1ba)]['entries'][_0xd46f6(0x18f)][_0xd46f6(0x19f)]['internalMap_uxhen5$_0'][_0xd46f6(0x196)][repairs][_0xd46f6(0x1ab)][_0xd46f6(0x1ab)][_0xd46f6(0x1c0)](),game[_0xd46f6(0x1a6)]()[_0xd46f6(0x1bd)][_0xd46f6(0x18c)][_0x1ffe92][_0xd46f6(0x1ba)][_0xd46f6(0x1b1)][_0xd46f6(0x18f)]['map_97q5dv$_0'][_0xd46f6(0x1b9)][_0xd46f6(0x196)][mines][_0xd46f6(0x1ab)]['_value_0'][_0xd46f6(0x1c0)](),game[_0xd46f6(0x1a6)]()[_0xd46f6(0x1bd)][_0xd46f6(0x18c)][_0x1ffe92][_0xd46f6(0x1ba)][_0xd46f6(0x1b1)][_0xd46f6(0x18f)][_0xd46f6(0x19f)]['internalMap_uxhen5$_0'][_0xd46f6(0x196)][repairs][_0xd46f6(0x1ab)][_0xd46f6(0x1ab)][_0xd46f6(0x1c0)]();}catch(_0x3794e0){}}window[_0xd46f6(0x1bf)]=requestAnimationFrame(game[_0xd46f6(0x1c2)],0x32);},game[_0x560b70(0x1b6)]=function(_0x5b29b0){const _0x2c8c6b=_0x560b70;for(let _0xcdd606=0x0;_0xcdd606<game[_0x2c8c6b(0x1a6)]()[_0x2c8c6b(0x1bd)][_0x2c8c6b(0x18c)]['length'];_0xcdd606++){try{for(key in game[_0x2c8c6b(0x1a6)]()['components_0'][_0x2c8c6b(0x18c)][_0xcdd606][_0x2c8c6b(0x1ba)][_0x2c8c6b(0x1b1)][_0x2c8c6b(0x18f)][_0x2c8c6b(0x19f)]['internalMap_uxhen5$_0']['backingMap_0']){if(game[_0x2c8c6b(0x1a6)]()[_0x2c8c6b(0x1bd)]['array'][_0xcdd606]['supplyTypeConfigs_0']['entries'][_0x2c8c6b(0x18f)][_0x2c8c6b(0x19f)][_0x2c8c6b(0x1b9)]['backingMap_0'][key][_0x2c8c6b(0x197)][_0x2c8c6b(0x186)]==_0x5b29b0)return key;}}catch(_0x41f783){}}};function getSupplyArrays(){const _0x19214d=_0x560b70;try{window[_0x19214d(0x18e)]=game['getSupplies']('MINE'),window[_0x19214d(0x1aa)]=game[_0x19214d(0x1b6)](_0x19214d(0x1bb)),window['DA']=game[_0x19214d(0x1b6)]('DOUBLE_ARMOR'),window['DD']=game[_0x19214d(0x1b6)](_0x19214d(0x1be)),window[_0x19214d(0x194)]=game['getSupplies'](_0x19214d(0x194));}catch(_0x153df5){}}window[_0x560b70(0x1a9)]=setInterval(getSupplyArrays,0x1388),game['clicker']=function(){const _0x299daf=_0x560b70;for(let _0x5b0f41=0x0;_0x5b0f41<game[_0x299daf(0x1a6)]()[_0x299daf(0x1bd)][_0x299daf(0x18c)][_0x299daf(0x188)];_0x5b0f41++){try{game['getTank']()[_0x299daf(0x1bd)][_0x299daf(0x18c)][_0x5b0f41][_0x299daf(0x1ba)][_0x299daf(0x1b1)]['$outer']['map_97q5dv$_0'][_0x299daf(0x1b9)][_0x299daf(0x196)][mines][_0x299daf(0x1ab)][_0x299daf(0x1ab)][_0x299daf(0x1c0)](),game[_0x299daf(0x1a6)]()[_0x299daf(0x1bd)][_0x299daf(0x18c)][_0x5b0f41][_0x299daf(0x1ba)][_0x299daf(0x1b1)][_0x299daf(0x18f)]['map_97q5dv$_0']['internalMap_uxhen5$_0'][_0x299daf(0x196)][repairs][_0x299daf(0x1ab)]['_value_0'][_0x299daf(0x1c0)]();}catch(_0x24e3de){}}window['clicker']=requestAnimationFrame(game[_0x299daf(0x1af)],0x1f4);},game[_0x560b70(0x1a8)]=function(){const _0x686249=_0x560b70;for(let _0xcfc11d=0x0;_0xcfc11d<game[_0x686249(0x1a6)]()['components_0'][_0x686249(0x18c)]['length'];_0xcfc11d++){try{game[_0x686249(0x1a6)]()[_0x686249(0x1bd)][_0x686249(0x18c)][_0xcfc11d][_0x686249(0x1ba)][_0x686249(0x1b1)][_0x686249(0x18f)][_0x686249(0x19f)]['internalMap_uxhen5$_0'][_0x686249(0x196)][DA]['_value_0']['_value_0'][_0x686249(0x1c0)](),game[_0x686249(0x1a6)]()[_0x686249(0x1bd)][_0x686249(0x18c)][_0xcfc11d][_0x686249(0x1ba)][_0x686249(0x1b1)][_0x686249(0x18f)][_0x686249(0x19f)][_0x686249(0x1b9)][_0x686249(0x196)][DD][_0x686249(0x1ab)]['_value_0'][_0x686249(0x1c0)](),game[_0x686249(0x1a6)]()['components_0'][_0x686249(0x18c)][_0xcfc11d][_0x686249(0x1ba)]['entries'][_0x686249(0x18f)][_0x686249(0x19f)][_0x686249(0x1b9)][_0x686249(0x196)][NITRO]['_value_0'][_0x686249(0x1ab)][_0x686249(0x1c0)]();}catch(_0x2ee719){}}window['clicker1']=requestAnimationFrame(game[_0x686249(0x1a8)],0x61a8);},SP={'sip':0x0},document[_0x560b70(0x1a2)](_0x560b70(0x191),_0x334390=>{const _0x206982=_0x560b70;_0x334390[_0x206982(0x18d)]==0x76&&(SP[_0x206982(0x1a5)]+=0x1,SP['sip']%0x2==0x1&&game['clicker'](),SP[_0x206982(0x1a5)]%0x2==0x0&&cancelAnimationFrame(window['clicker']));}),document['addEventListener'](_0x560b70(0x191),_0x5128a3=>{const _0x4ab6cc=_0x560b70;_0x5128a3[_0x4ab6cc(0x18d)]==0x77&&(SP['sip']+=0x1,SP[_0x4ab6cc(0x1a5)]%0x2==0x1&&game[_0x4ab6cc(0x1a8)](),SP[_0x4ab6cc(0x1a5)]%0x2==0x0&&cancelAnimationFrame(window['clicker1']));}),document[_0x560b70(0x1a2)]('keydown',_0x53e56e=>{const _0x5e353f=_0x560b70;_0x53e56e[_0x5e353f(0x18d)]==0x23&&(SP['sip']+=0x1,SP[_0x5e353f(0x1a5)]%0x2==0x1&&game[_0x5e353f(0x1c2)](),SP['sip']%0x2==0x0&&(cancelAnimationFrame(window[_0x5e353f(0x1bf)]),clearInterval(window[_0x5e353f(0x1a9)])));});
