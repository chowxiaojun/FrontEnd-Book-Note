function showPic(whichpic) {
    var src = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", src);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}
window.onload = countBodyChildren; // 在页面加载时调用 countBodyChildren函数
