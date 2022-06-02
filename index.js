// Write your solution here!
const cats =["Milo","Otis","Garfield"];
function destructivelyAppendCat(name) {
cats.push(name);  
}
function destructivelyPrependCat(name){
cats.unshift(name);
}
function destructivelyRemoveFirstCat(name){
cats.shift(name);   
}
function destructivelyRemoveLastCat(name){
cats.pop(name);
}
function appendCat(name){  
const copyCats=[...cats];
copyCats.push(name);
return copyCats;
}
function prependCat(name){
const newCats=[...cats];
newCats.unshift(name);
return newCats;
}
function removeLastCat(name){
const delCats=[...cats];  
delCats.pop(name);
return delCats;
}
function removeFirstCat(name){
const copyOfCats=[...cats];
copyOfCats.shift(name);
return copyOfCats;
}