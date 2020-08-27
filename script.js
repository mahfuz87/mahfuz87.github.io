var button = document.getElementById("enter");
var newItem = document.getElementById("newItem");
var done = document.getElementsByTagName("li");
var ul = document.getElementsByTagName("ul")[0];
var deleteButton = document.getElementsByClassName("delete");
// a similar way of doing the last line is
// var ul = document.querySelector("ul");
// getElementsByTagName returns as list of the elements those have the specified tag name. But querySelector returns the first element under the selector. To get all the elements under a selector with querySelector we'll have to use querySelectorAll.
// Also getElementsByTagName is dynamic whereas querySelector is static.

function newItemLength() {
	return newItem.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	li.appendChild(document.createTextNode(newItem.value));
	button.appendChild(document.createTextNode("X"));
	button.classList.add('delete');
	li.appendChild(button);
	ul.appendChild(li);
	newItem.value="";
}

function emptyWarning(){
	return alert("Please input something");
}

function lineThrough(){
	for (var i=0; i<done.length; i++){
	done[i].addEventListener("click", function(){
		this.style.textDecoration = "line-through";
	});
}
}

function deleteItem(){
	for (var i=0; i<deleteButton.length; i++){
	deleteButton[i].addEventListener("click", function(e){
		e.currentTarget.parentNode.remove();
	});
}
}

function addListAfterClick(){
	if (newItemLength() > 0){
		createListElement();
		window.done = document.getElementsByTagName("li");
		lineThrough();
		deleteItem();
	}
	else emptyWarning();
}

function addListAfterKeypress(event){
	if (event.keyCode == 13){
		if (newItemLength() > 0) {
			createListElement();
			window.done = document.getElementsByTagName("li");
			lineThrough();
			deleteItem();
		}
		else emptyWarning();
	}

}

button.addEventListener("click", addListAfterClick);

newItem.addEventListener("keypress", addListAfterKeypress);

lineThrough();
deleteItem();

