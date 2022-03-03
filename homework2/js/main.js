window.onload = function () {
    var now = 0
    var timer = 0
    var content = document.querySelector("#list")
    var arrow = document.querySelector("#s2")
    // var cont = content[0]
    if(content.addEventListener){
        content.addEventListener("DOMMouseScroll",function (ev) {
          ev = ev || event
          clearTimeout(timer)
          timer = setTimeout(function () {
            fn(ev)
          },100)
    
        })
      }
      content.onmousewheel = function (ev) {
        ev = ev || event
        clearTimeout(timer)
        timer = setTimeout(function () {
          fn(ev)
        },200)
      }
    function fn(ev) {
        ev = ev || event
        var dir = "";
        if(ev.wheelDelta){
        dir = ev.wheelDelta > 0?"up" : "down"
        }
        if (ev.detail){
        dir = ev.detail < 0? "up" : "down"
        }
        switch(dir){
            case "up":
                // alert(content.style.top);
                if(now>0){
                    now--
                    content.style.top = -now*100+"%"
                }
                break
            case "down":
                // alert("滑轮向下滚动");
                if(now<2){
                    now++
                    content.style.top = -now*100+"%"
                    
                }
                break
        }
    }
    if(arrow.addEventListener){
        arrow.addEventListener("click", function(ev){
            ev = ev || event
          clearTimeout(timer)
          timer = setTimeout(function () {
            fn2(ev)
          },100)
        })
    }
    function fn2(ev) {
        ev = ev || event
        now++
        content.style.top = -now*100+"%"
    }
}