function highlightRows() {
    if (!document.getElementsByTagName) {
        return false;
    }
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].onmouseover = function() {
            this.style.fontWeight = "bold";
            this.style.color = "grey";
        }
        rows[i].onmouseout = function() {
            this.style.fontWeight = "normal";
            this.style.color = "black";
        }
    }
}

addLoadEvent(highlightRows);
