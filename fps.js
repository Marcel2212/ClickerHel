//FPS

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
a
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


document.addEventListener('keydown', (e) => {
  if (e.keyCode === 78 && game.isNotOpenChat()){
    removeMyMines()

    function delay(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    }
  }
});
