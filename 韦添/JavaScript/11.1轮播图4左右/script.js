function $(id) {
    return document.getElementById(id);
}

window.onload = function () {
    var target = 0;
    var leader = 0;

 
    $("box").onmouseover = function () {
        $("arrow").style.display = "block";
    }

    $("box").onmouseout = function () {
        $("arrow").style.display = "none";
    }

 
    $("left").onclick = function () {
        target += 520;
    }
    $("right").onclick = function () {
        target -= 520;
    }

    
    setInterval(function () {
        if (target >= 0) {
            target = 0;
        }
        else if (target <= -2080) {
            target = -2080;
        }

        leader = leader + (target - leader) / 10;
        $("ad_imgs").style.left = leader + "px";

    }, 30);
}