$("#star").click(function(){
    $("#star").attr("src" , "yellow-star.png")
})

$("#star").dblclick(function(){
    $("#star").attr("src" , "star.png")
})
$("#star2").click(function(){
    $("#star").attr("src" , "yellow-star.png")
    $("#star2").attr("src" , "yellow-star.png")
})
$("#star3").click(function(){
    $("#star").attr("src" , "yellow-star.png")
    $("#star2").attr("src" , "yellow-star.png")
    $("#star3").attr("src" , "yellow-star.png")  
})
$("#star4").click(function(){
    $("#star").attr("src" , "yellow-star.png")
    $("#star2").attr("src" , "yellow-star.png")
    $("#star3").attr("src" , "yellow-star.png")  
    $("#star4").attr("src" , "yellow-star.png") 
})
$("#star5").click(function(){
    $("#star").attr("src" , "yellow-star.png")
    $("#star2").attr("src" , "yellow-star.png")
    $("#star3").attr("src" , "yellow-star.png")  
    $("#star4").attr("src" , "yellow-star.png") 
    $("#star5").attr("src" , "yellow-star.png")
})




$("#star2").dblclick(function(){
    $("#star").attr("src" , "star.png")
    $("#star2").attr("src" , "star.png")
})
$("#star3").dblclick(function(){
    $("#star").attr("src" , "star.png")
    $("#star2").attr("src" , "star.png")
    $("#star3").attr("src" , "star.png")  
})
$("#star4").dblclick(function(){
    $("#star").attr("src" , "star.png")
    $("#star2").attr("src" , "star.png")
    $("#star3").attr("src" , "star.png")  
    $("#star4").attr("src" , "star.png") 
})
$("#star5").dblclick(function(){
    $("#star").attr("src" , "star.png")
    $("#star2").attr("src" , "star.png")
    $("#star3").attr("src" , "star.png")  
    $("#star4").attr("src" , "star.png") 
    $("#star5").attr("src" , "star.png")
})

function validate(){
    var n = document.getElementById('name');
    var o = document.getElementById('mail');
    var p =document.getElementById('msg');

    if(n.value==""||o.value==""||p.value==""){
        alert('Attention!! Please fill the required fields')
    }
    else{
        alert('Thank You for your Feedback , Have A Good Day')
    }
}

