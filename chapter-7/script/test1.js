window.onload = function() {
    var testdiv = document.getElementById("testdiv");
    testdiv.innerHTML = "<p>This is <em>my</em> content.</p>";
}

function insertParagraph(text) {
    var str = "<p>";
    str += text;
    str += "</p>";
    document.write(str);
}
