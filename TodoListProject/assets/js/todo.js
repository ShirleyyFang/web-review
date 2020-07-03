// check off Specific Todos by Clicking
$("ul").on("click","li",function(){ //$("li").on("click",function(){ wouldn't work
    $(this).toggleClass("completed");
});//The reason we had to do this is that we can only add a listener 
//using jQuery on elements that exist when this code is run the first time.

//click on X to delete Todo
$("ul").on("click","span",function(event){

    $(this).parent().fadeOut(500,function(){
        $(this).remove();//when the fadeOut is done we remove the li
    }); //.parent() helps remove the entire li instead of only the span

    event.stopPropagation(); 
    //this avoid the li function (which this span is inside) being called
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){ //hit enter key
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>")
        //look out have to use single quote for fa fa-trash
    }
});