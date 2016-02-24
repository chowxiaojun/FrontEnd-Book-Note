function displayCitations() {
    if (!document.getElementsByTagName || !document.createElement
        || !document.createTextNode) {
            return false;
    }
    var quotes = document.getElementsByTagName("blockquote");
    for (var i = 0; i < quotes.length; i++) {
        var quote = quotes[i];
        if (!quote.getAttribute("cite")) {
            continue;
        }
        var url = quote.getAttribute("cite");
        // 取得引用中的所有元素节点
        var quoteChildren = quote.getElementsByTagName("*");
        if (quoteChildren.length < 1) {
            continue;
        }
        // 取得引用中的最后一个元素节点
        var elem = quoteChildren[quoteChildren.length - 1];
        // 创建标记
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href", url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}

addLoadEvent(displayCitations);
