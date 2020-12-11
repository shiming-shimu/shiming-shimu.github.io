//读取 添加卡片
function addCard(){
    $.getJSON("passages/list.json",
        function(data){data.forEach(info => {
            $(".passages").html($(".passages").html()+'\
                <div class="item" id="'+info["path"]+'" data-info=\'{"title": "'+ info["title"] +'", "user": "'+ info["user"] +'", "date": "'+ info["date"] +'", "preview": "'+ info["des"] +'", "path": "'+ info["path"] +'"}\'>\
                    <h2>'+ info["title"] +'</h2>\
                    <div class="info">\
                        <span class="user">'+ info["user"] +'</span>\
                        <span class="date">'+ info["date"] +'</span>\
                        <p class="preview">'+ info["des"] +'</p>\
                    </div>\
                </div>');
            $(".cards").html($(".cards").html() + ' \
                <div class="card" id="card-'+info["path"]+'" style="display: none;width: 350px; top: 100px;" data-info=\'{"title": "'+ info["title"] +'", "user": "'+ info["user"] +'", "date": "'+ info["date"] +'", "preview": "'+ info["des"] +'", "path": "'+ info["path"] +'"}\'> \
                <div class="card-top"> \
                    <div class="card-circle-red"></div> \
                    <div class="card-circle-yellow"></div> \
                    <div class="card-circle-green"></div> \
                    <div class="card-title"> '+ info["title"] +' </div> \
                </div> \
                <div class="card-body">'+ info["des"] +'</div>');
            }
        )
        setCardEvent()
        setPassageEvent()
        }
    );
}

//设置卡片事件
function setCardEvent() {
    // 移动事件
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
    //黄色最小化按钮
    $(".card .card-top .card-circle-yellow").click(function () { 
        $(this).parent().parent().hide();
        $("#"+$(this).parent().parent().attr("id").slice(5)).show();
     })
     //绿色最大化按钮
     $(".card .card-top .card-circle-green").click(function () { 
        $(this).parent().parent().hide();
     })
}

//设置文章事件
function setPassageEvent() {
    $(".passages .item").click(function(){
        $(this).hide();
        $("#card-" + $(this).attr("id")).show();
    })
}



// $(".passages").html($(".passages").html()+'\
// <div class="item"  data-info=\'{"title": "'+ info["title"] +'", "user": "'+ info["user"] +'", "date": "'+ info["date"] +'", "preview": "'+ info["preview"] +'"}\'>\
// <h2>title</h2>\
// <div class="info">\
//     <span class="user">shiming</span>\
//     <span class="date">2020.12.6</span>\
//     <p class="preview">你好</p>\
// </div>\
// </div>\
// ')