const newChild = document.createElement('li');
newChild.innerText = "Raphinha";

//handover  this child to a parent  
const playersList = document.getElementById('player-list');

//append the child to the parent 
playersList.append(newChild);
