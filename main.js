function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}