var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.getElementsByTagName("li");
var ul = document.querySelector("ul");
enterButton.addEventListener("click", function(ev) 
{
  if (ev.target.tagName === 'li') 
  {
    ev.target.classList.toggle('checked');
  }
},addAfterClick,false);



function inputLength()
{
	return input.value.length;
} 

function listLength()
{
	return item.length;
}


function createListEle()
 {
    var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = ""; 

    

	
	function trash() 
	{
		li.classList.toggle("checked");
	}

	li.addEventListener("click",trash);
	


	var delBtn = document.createElement("button");
	delBtn.appendChild(document.createTextNode("X"));
	li.appendChild(delBtn);
	delBtn.addEventListener("click", deleteListItem);
	

	function deleteListItem(){
		li.classList.add("delete")
	}
	
}


function addAfterClick()
{
	if (inputLength() > 0)
	 { 
		createListEle();
	}
}

function addAfterKeypress(event) 
{
	if (inputLength() > 0 && event.which ===13) { 
		createListEle();
	} 
}

input.addEventListener("keypress", addAfterKeypress);



