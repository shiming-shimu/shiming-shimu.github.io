$(document).ready(function () {
    // move 
    $(".card .card-top").mousedown(function (event) { 
        var cx = event.pageX - $(this).parent().position().left
        var cy = event.pageY - $(this).parent().position().top
        $(".card .card-top").mousemove(function(event1){
            $(this).parent().css("left",(event1.pageX - cx)+"px");
            $(this).parent().css("top",(event1.pageY - cy)+"px");
        })
        $(document).mouseup(function(event1){
            $(".card .card-top").off("mousemove")
        })
    })
})