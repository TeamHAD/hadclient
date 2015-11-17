/**
 * Created by Niharika on 11-Nov-15.
 */
function check(){
    var uname = document.getElementById("username");
    var passwd = document.getElementById("password");

    if((uname.value=="test") && (passwd.value=="password"))
    {
        //alert("Correct Login");
        //alert(uname.value);
        //loadPage("userHome.html");
        var url = "/userHome.html"
        window.location.href = "userHome.html";
        return false;
    }
    else
    {
        //alert("Incorrect Login");
        //alert(uname.value);
        //loadPage("errorPage.html");
        window.location.href = "errorPage.html";
        return false;
    }
}

/*function loadPage(link){
    var httprequest =  new XMLHttpRequest();
    httprequest.open("GET", link, false);
    httprequest.send();
    return httprequest.responseText;
}*/