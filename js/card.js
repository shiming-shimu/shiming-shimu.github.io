function setCard() {
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
    $(".card .card-top .card-circle-yellow").click(function () { 
        $(this).parent().parent().hide();
        var info = $.parseJSON($(this).parent().parent().attr("data-info"));
        $(".passages").html($(".passages").html()+'\
        <div class="item"  data-info=\'{"title": "'+ info["title"] +'", "user": "'+ info["user"] +'", "date": "'+ info["date"] +'", "preview": "'+ info["preview"] +'"}\'>\
            <h2>title</h2>\
            <div class="info">\
                <span class="user">shiming</span>\
                <span class="date">2020.12.6</span>\
                <p class="preview">你好</p>\
            </div>\
        </div>\
        ')
        addCard()
     })
}