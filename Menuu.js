
class commons{

}


class game{

}


class hacks{

}


class vars{

}


commons.searchObject = function(object,item){
try {
for(let i=0; i<object.length;i++){
if(object[i].hasOwnProperty(item))
return object[i]

}
} catch (error) {

}
}
commons.getRoot = function(){
root = document.querySelector("#root")
return root
}

commons.getReactRoot = function(){
return root._reactRootContainer._internalRoot.current.memoizedState.element.type.prototype.store.subscribers.array_hd7ov6$_0

}


game.getTank = function(){
return commons.searchObject(commons.getReactRoot(),"tank").tank




}

game.getWorld = function(){
return game.getTank().world

}

game.getMines = function(){
return game.getWorld().entities_0.array_hd7ov6$_0.at(0).components_0.array.at(15);



}

game.getMapBoundary = function(){
return game.getWorld().entities_0.array_hd7ov6$_0.at(0).components_0.array.at(0).bounds
}


game.getPlayers = function(){
return game.getTank().components_0.array[33].gameMode_0.tanksOnField

}
game.getBattleState = function(){

return commons.getReactRoot().at(1).state.inBattle
}

game.isNotOpenChat = function ()
{
    return (document.getElementsByClassName("sc-bwzfXH iokmvL").item(0) == null);
}

game.getStriker = function(){
for(let i=0; i>game.getTank().components_0.array.length;i++){
if(game.getTank().components_0.array[i].hasOwnProperty("strikerWeapon_jjsiik$_0")){
return game.getTank().components_0.array[i]


}
}
}


game.getHealth = function() {
    return game.getTank().components_0.array[1].isFullHealth()

}

game.getTankPhysics = function(){
return game.getTank().components_0.array[5].tankPhysicsComponent_tczrao$_0



}

game.getCamera = function(){
for (let i = 0; i < game.getTank().components_0.array.length; i++)
  {
    if(game.getTank().components_0.array[i].hasOwnProperty("followCamera_w8ai3w$_0"))
    return game.getTank().components_0.array[i].followCamera_0.currState_0

  }
}


game.getSupplies = function(supply) {
    try {
        const components = game.getTank().components_0.array;
        window.suppliesArray = commons.searchObject(components,'supplyTypeConfigs_0')
        for (key in suppliesArray.supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0) {
            if (suppliesArray.supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[key].key_5xhq3d$_0.name$ == supply) {
                return key
            }

        }
    } catch (error) {}

}

game.getMines = function(){
return game.getWorld().entities_0.array_hd7ov6$_0.at(0).components_0.array.at(15);



}

game.getWeaponName = function() {
    var weapons = ["ricochetcc", "twins", "striker", "machinegun"];
    var results = [];

    var components = game.getTank().components_0.array
    var componentKeys = null;

    for (let k = 0; k < weapons.length; k++) {
      for (let i = 0; i < components.length; i++) {
        componentKeys = Object.keys(components[i]);

        for (let j = 0; j < componentKeys.length; j++) {
          if (
            componentKeys[j].toLowerCase().includes(weapons[k].toLowerCase())
          ) {
            results.push(componentKeys[j]);
          }
        }
      }
    }

    if (results[0].toLowerCase().includes("rico")) {
      return "Ricochet";
    }

    if (results[0].toLowerCase().includes("striker")) {
      return "Striker";
    }

    if (results[0].toLowerCase().includes("twins")) {
      return "Twins";
    }

    if (results[0].toLowerCase().includes("machinegun")) {
      return "Vulcan";
    } else {
      return results;
    }
  };

function getSupplyArrays(){
try {
window.mines = game.getSupplies("MINE")
window.repairs = game.getSupplies("FIRST_AID")
window.DA = game.getSupplies("DOUBLE_ARMOR")
window.DD = game.getSupplies("DOUBLE_DAMAGE")
window.NITRO = game.getSupplies("NITRO")

} catch (error) {

}
}

supps = setInterval(getSupplyArrays,500)



hacks.supplies = function(){
try {
suppliesArray.supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[DA]._value_0._value_0.onUserActivatedSupply()
suppliesArray.supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[DD]._value_0._value_0.onUserActivatedSupply()
suppliesArray.supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[NITRO]._value_0._value_0.onUserActivatedSupply()


} catch (error) {

}


}




hacks.mines = function(){
try {
suppliesArray.supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[mines]._value_0._value_0.onUserActivatedSupply()
} catch (error) {

}}



hacks.repairs = function(){
try {
suppliesArray.supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[repairs]._value_0._value_0.onUserActivatedSupply()
} catch (error) {

}}



hacks.autoHeal = function() {
    try {
        if (game.getHealth() == false) {
        suppliesArray.supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[repairs]._value_0._value_0.onUserActivatedSupply()
        suppliesArray.supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[mines]._value_0._value_0.onUserActivatedSupply()
        }

    } catch (error) {}

}


const getMines = () => {
var mines = []
var triggers = game.getWorld().triggers_0.triggers_0.array
for(let i =0;i<triggers.length;i++){
if(!triggers[i].hasOwnProperty('bonus_0') && !triggers[i].hasOwnProperty('flagBaseTriggerListener_0') && !triggers[i].hasOwnProperty('flag_0')){
var mine = triggers[i]
mines.push(mine)
}

}



return mines

}


function getUniquePositions(){
var mines = getMines()
var minePositions = []



for(let i=0;i<mines.length;i++){
var minePos = mines[i].position
if(minePos && minePos.x){
minePositions.push(minePos.x)
}
}



return Array.from(new Set(minePositions))


}




function getDuplicateMines(){
var mines = getMines()
var duplicateMines = []
var uniquePositions = getUniquePositions()

for(let i=0;i<uniquePositions.length;i++){
var sameArray = []
for(let k=0;k<mines.length;k++){

if(mines[k].position.x == uniquePositions[i] && mines[k]){
sameArray.push(mines[k])


}



}
if(sameArray.length>1){
duplicateMines.push(sameArray)
}
}
return duplicateMines

}



function decl() {
var duplicates = getDuplicateMines()
var n = duplicates.length
var innerMines
var o

for(let i =0;i<n;i++){
innerMines = duplicates[i]
o = innerMines.length
if(o>1){

for(let k=0;k<o-1;k++){

innerMines[k].removeMine_0()


}



}

}


}

function removeMyMines() {
    let array = game.getWorld().triggers_0.triggers_0.array;
        for (let i = 0; i < array.length; i++) {
            try {
                let object = array[i];
                if(object.ownerId != null){
                    let userId = game.getTank().components_0.array[4].userId
                    if (object.ownerId.low_ == userId.low_) {
                        object.removeMine_0()
                    }
                }

            } catch (error) {}

        }
}


root = document.querySelector("#root")
stateWindow = document.createElement("div")
stateWindow_style={
    display: "flex",
    backgroundColor: "rgba(0, 0, 0, 0)",
    opacity: "0.9",
    height: "400px",
    width: "375px",
    position: "absolute",
    right: "15%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    borderWidth: "3px",
    borderStyle: "solid",
    borderColor: "#f700ff3d",
    top: "524px",
    backdropFilter: "blur(10px)",
    zIndex: "100",
    outline: "rgb(0 0 0 / 56%)",
    left: "1088px"
}
Object.assign(stateWindow.style,stateWindow_style);
root.appendChild(stateWindow)



stateWindow.style.backdropFilter = "blur(10px)"

title = document.createElement("span")
title.innerText = "Marcel"
stateWindow.appendChild(title)

title_style = {

color:"#9000ff",
textAlign:"center",
fontSize : "27px",
padding: "20px 31.5%",
fontWeight: "1000"


}



Object.assign(title.style,title_style)


function draggable1(el) {

    el.addEventListener('mousedown', function(e) {
        var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
        var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);

        function mouseMoveHandler(e) {
            if (e.target != slider3 && e.target != slider3 && e.target != slider4) {
                el.style.top = (e.clientY - offsetY) + 'px';
                el.style.left = (e.clientX - offsetX) + 'px';
            }
        }

        function reset() {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', reset);
        }

        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', reset);
    });
}

draggable1(stateWindow)


Sfps = document.createElement("span")
Ssups = document.createElement("span")
Sheal = document.createElement("span")
Sdec = document.createElement("span")
Smns = document.createElement("span")
Srps = document.createElement("span")


label_style = {
position:"absolute",
fontSize:"16px",
padding:"20px 10%",
color:"white",
fontWeight: "1000"
}


Object.assign(Sfps.style,label_style)
Object.assign(Ssups.style,label_style)
Object.assign(Sheal.style,label_style)
Object.assign(Sdec.style,label_style)
Object.assign(Smns.style,label_style)
Object.assign(Srps.style,label_style)


Sfps.innerText = "[N] Remove My Mines:"
Sheal.innerText = "[Num 4] Healing:"
Sdec.innerText = "[M] Mine Decluster:"


Ssups.style.bottom = "225px"
Sheal.style.bottom = "125px"
Sdec.style.bottom = "75px"
Sfps.style.bottom = "25px"
Smns.style.bottom = "175px"
Srps.style.bottom = "275px"


stateWindow.appendChild(Sfps)
stateWindow.appendChild(Ssups)
stateWindow.appendChild(Sheal)
stateWindow.appendChild(Srps)
stateWindow.appendChild(Sdec)
stateWindow.appendChild(Smns)



onOff_style = {
position:"absolute",
fontSize:"18px",
padding:"20px 7%",
color:"white",
right:"0%",
fontWeight: "1000"

}

slider_style = {
     position: "absolute",
     borderRadius: "8px",
     height: "5px",
     width: "60px",
     outline: "none",
     transition: "all 450ms ease-in",
     right: "20%",
 }



State1 = document.createElement("span")
State2 = document.createElement("span")
State3 = document.createElement("span")
State4 = document.createElement("span")
State5 = document.createElement("span")
State6 = document.createElement("span")



Object.assign(State1.style,onOff_style)
Object.assign(State2.style,onOff_style)
Object.assign(State3.style,onOff_style)
Object.assign(State4.style,onOff_style)
Object.assign(State5.style,onOff_style)
Object.assign(State6.style,onOff_style)


State1.innerText = "OFF"
State2.innerText = "OFF"
State3.innerText = "OFF"
State4.innerText = "OFF"
State5.innerText = "OFF"
State6.innerText = "OFF"


stateWindow.appendChild(State1)
stateWindow.appendChild(State2)
stateWindow.appendChild(State3)
stateWindow.appendChild(State4)
stateWindow.appendChild(State5)
stateWindow.appendChild(State6)


State1.style.bottom = "25px"
State2.style.bottom = "225px"
State3.style.bottom = "125px"
State4.style.bottom = "175px"
State5.style.bottom = "75px"
State6.style.bottom = "275px"




slider2 = document.createElement("input")

slider2.id = 'JHSlider'

slider2.type = "range"


slider2.step = 5

slider2.min = 0
slider2.max = 200

slider3 = document.createElement("input")

slider3.id = 'JHSlider'

slider3.type = "range"


slider3.step = 5

slider3.min = 0
slider3.max = 200


slider4 = document.createElement("input")

slider4.id = 'JHSlider'

slider4.type = "range"


slider4.step = 5

slider4.min = 0
slider4.max = 200

var b = slider2.value = 150
var c = slider3.value = 150

stateWindow.appendChild(slider2)
stateWindow.appendChild(slider3)
stateWindow.appendChild(slider4)

Object.assign(slider2.style,slider_style)
Object.assign(slider3.style,slider_style)
Object.assign(slider4.style,slider_style)


slider2.style.bottom = "250px"
slider3.style.bottom = "300px"
slider4.style.bottom = "200px"

s1p = 0
s2p = 0
s3p = 0
s4p = 0
s5p = 0



setInterval(function(){
try {
Ssups.innerText = `[Num 2] Supplies (${slider2.value}) Ms:`
} catch (error) {

}
},100)


setInterval(function(){
try {
Srps.innerText = `[Num 1] Repairs (${slider3.value}) Ms:`
} catch (error) {

}
},100)

setInterval(function(){
try {
Smns.innerText = `[ Num 3] Mines (${slider4.value}) Ms:`
} catch (error) {

}
},100)


document.addEventListener('keydown', (e) => { if (e.keyCode === 78 && game.isNotOpenChat()){

State1.innerText = "ON"
State1.style.color = "white"
removeMyMines()

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
delay(650).then(() =>
State1.innerText = "OFF");

delay(650).then(() =>
State1.style.color = "#FF0000");

}



})

document.addEventListener('keydown', (e) => { if (e.keyCode === 98 && game.isNotOpenChat()){
s1p+=1
if(s1p%2==1){
State2.innerText = "ON"
State2.style.color = "white"
window.ru = setInterval(hacks.supplies, slider2.value)


}

if(s1p%2==0){

clearInterval(window.ru)
State2.innerText = "OFF"
State2.style.color = "#FF0000"
}

}})

document.addEventListener('keydown', (e) => { if (e.keyCode === 100 && game.isNotOpenChat()){
s2p+=1
if(s2p%2==1){
State3.innerText = "ON"
State3.style.color = "white"
window.ah = setInterval(hacks.autoHeal, 50)


}

if(s2p%2==0){

clearInterval(window.ah)
State3.innerText = "OFF"
State3.style.color = "#FF0000"
}

}})

document.addEventListener('keydown', (e) => { if (e.keyCode === 97 && game.isNotOpenChat()){
s3p+=1
if(s3p%2==1){
State6.innerText = "ON"
State6.style.color = "white"
window.rs = setInterval(hacks.repairs, slider3.value)


}

if(s3p%2==0){

clearInterval(window.rs)
State6.innerText = "OFF"
State6.style.color = "#FF0000"
}

}})

document.addEventListener('keydown', (e) => { if (e.keyCode === 77 && game.isNotOpenChat()){

State5.innerText = "ON"
State5.style.color = "white"
decl()

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
delay(650).then(() =>
State5.innerText = "OFF");

}
function delay1(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
delay1(650).then(() =>
State5.style.color = "#FF0000");

}


)

document.addEventListener('keydown', (e) => { if (e.keyCode === 99 && game.isNotOpenChat()){
s5p+=1
if(s5p%2==1){
State4.innerText = "ON"
State4.style.color = "white"
window.ms = setInterval(hacks.mines, slider4.value)


}

if(s5p%2==0){

clearInterval(window.ms)
State4.innerText = "OFF"
State4.style.color = "#FF0000"
}

}})


WpressCount = 0
document.addEventListener('keydown', (e) => { if (e.keyCode === 48 && game.isNotOpenChat()){
WpressCount ++
if(WpressCount%2==1){
root.appendChild(stateWindow)


}

if(WpressCount%2==0){

root.removeChild(stateWindow)

}


}})

console.clear();
console.log('[FPS] Has Been Loaded')
