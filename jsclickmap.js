var input=document.createElement("input");
input.type="button";
input.value="Click A";
input.onclick = clickA;
input.setAttribute("style", "font-size:34px;color:#13166b;text-shadow: 0px 0px 15px;font-family: ' RubikBold', normal;position:top;top:876px;right:250px;cursor:pointer;background-color:#76FF33;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);color:#00000;outline:none;border:0;");
document.querySelector("#root")
root.appendChild(input)

var input2=document.createElement("input");
input2.type="button";
input2.value="Click B";
input2.onclick = clickB;
input2.setAttribute("style", "font-size:34px;color:#13166b;text-shadow: 0px 0px 15px;font-family: 'RubikBold', normal;position:top;top:876px;right:150px;cursor:pointer;background-color:#76FF33;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);color:#00000;outline:none;border:0;");
document.querySelector("#root")
root.appendChild(input2)

function clickA(){
setInterval(function(){
document.querySelector("#root > div > div.sc-bwzfXH.eBxXHw > div.sc-bwzfXH.dWizqL > div.sc-bwzfXH.cBFZvG > div.sc-bwzfXH.gtZtiZ > div.sc-bwzfXH.hyaCSf > div").click();
document.querySelector("#modal-root > div > div > div.sc-bwzfXH.kSAdhr > div.sc-bwzfXH.jIFflB").click();
},0.1)
}

function clickB(){
setInterval(function(){
document.querySelector("#root > div > div.sc-bwzfXH.eBxXHw > div.sc-bwzfXH.dWizqL > div.sc-bwzfXH.cBFZvG > div.sc-bwzfXH.gtZtiZ > div.sc-bwzfXH.kBXDvK > div").click();
document.querySelector("#modal-root > div > div > div.sc-bwzfXH.kSAdhr > div.sc-bwzfXH.jIFflB").click();
},0.1)
}
