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

function insertParagraph1() {
    // createElement方法
    var para = document.createElement("p"); // 文档碎片  不是任何一棵DOM节点树的组成部分
    // createTextNode方法   创建文本节点
    var text = document.createTextNode("Hello world");
    para.appendChild(text);
    // appendChild方法
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
}
