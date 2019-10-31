$(document).ready(function($){
    var enter = $("#enter");
    enter.on("click", function(evt){
        addListAfterClick(evt);
    });
    $("#user").on("keypress", function(evt){
        addListAfterKeypress(evt);
    });
});

    function inputLength(){
        var inputLen = $("#user").val().length; 
        return inputLen;
    }

    function createElement(){
        var li = $("<li></li>");
        var ul = $("ul");
        li.append(document.createTextNode($("#user").val()));
        ul.append(li);
        $("#user").val("");
        
        // function when check out items
        li.on("click", function(){
            li.toggleClass("done");
        });
        
        // function to delete items
        var deletebtn = $("<button></button>");
        deletebtn.append(document.createTextNode("X"));
        li.append(deletebtn);
        
        deletebtn.on("click", function(){
            li.addClass("delete");
        });
    }
    
    function addListAfterClick(evt){
        if( inputLength() > 0 ) {
            createElement();
        }
    }

    function addListAfterKeypress(evt){
        if (inputLength() > 0 && evt.keyCode === 13) {
            createElement();
        }
    }
