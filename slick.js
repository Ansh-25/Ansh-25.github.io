try {
    var click = 0;
    function menu() {
        click++;
        if (click % 2 === 1) {
            document.getElementById("menuButton").style.backgroundImage = "url(https://daks2k3a4ib2z.cloudfront.net/55c7a4edffc7391b07397c75/55c8656393a241dd10ef8568_close.png)";
            var idno = null;
            var elem = document.getElementById("menu_items");
            var opac = 1;
            clearInterval(idno);
            idno = setInterval(frame, 10);
            function frame() {
                if (opac == 100) {
                    clearInterval(idno);
                }
                else {
                    elem.style.opacity = (opac / 100) + '';
                    opac++;
                }
            }
        }
        else {
            document.getElementById("menuButton").style.backgroundImage = "url(https://daks2k3a4ib2z.cloudfront.net/55c7a4edffc7391b07397c75/55c7a6faab10ec5e048f6ef3_menu.png)";
            document.getElementById("menu_items").style.opacity = "0";
        }
    }
}
catch (err) {
    alert(err);
}