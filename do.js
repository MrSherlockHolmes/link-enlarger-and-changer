function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var websites = ["billionbirthday", "alightyear", "jackthefabricripper"]
checkCookie();
function checkCookie() {
    console.log(getCookie("siteNumber"))
    if (getCookie("siteNumber") === "" || getCookie("siteNumber") === "2") {
      setCookie("siteNumber", "", 0);
      setCookie("siteNumber", "0", 365);
    } else {
      var rem = getCookie("siteNumber");
      setCookie("siteNumber", "", 0);
      setCookie("siteNumber", rem + 1, 365);
    }
    window.location.href = "http://" + websites[getCookie("siteNumber")] + ".com";
}
