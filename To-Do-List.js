var enter = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function createElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    
    // 
    function complete(){
        li.classList.toggle("done");
    }
    
    li.addEventListener("click", complete);
    
    //
    var deletebtn = document.createElement("button");
    deletebtn.appendChild(document.createTextNode("X"));
    li.appendChild(deletebtn);
    
    function deleteList(){
        li.classList.add("delete");
    }
    
    deletebtn.addEventListener("click", deleteList);
}

function addListByClick(evt){
    if(inputLength()>0){
        createElement();
    }
}

function addListBykeypress(evt){
    if(inputLength()>0 && evt.keyCode === 13){
        createElement();
    }
}

enter.addEventListener("click", addListByClick);
input.addEventListener("keypress", addListBykeypress);