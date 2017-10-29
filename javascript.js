$(document).ready(function(){
    $('form').submit(function(){

        alert('submtted!!')
        var firstname = $("[name=first_name]").val();
        var lastname = $("[name=last_name]").val();
        var description = $("[name=description]").val();
        console.log(description);
        $('.cardContainer').append("<div class='cards'><h1>"+firstname +" "+lastname+"</h1><p id = 'back'>"+description+"</p><p>Click for description!</p></div>");
        return false;
    });

    $(document).on('click', '.cards',function(){
        $(this).children().toggle();        
    })
})
