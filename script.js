//your JS code here. If required.

function findDOMLevel(){
	let element=document.getElementById("level");
	if(!element){
		alert("Element with id 'level' not found.");
	    return;
	}

	let currentElement=element;
	let level=0;

	while(currentElement){
		level++;
        currentElement = currentElement.parentElement;
	}
	alert(`The level of the element is: ${level}`);
}

findDOMLevel();

