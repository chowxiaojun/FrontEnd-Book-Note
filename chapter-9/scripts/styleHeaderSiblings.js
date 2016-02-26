/**
 * 给h1元素后面的每个元素添加一个class属性
 */
function styleHeaderSiblings() {
    if (!document.getElementsByTagName) {
        return false;
    }
    var headers = document.getElementsByTagName("h1");

    for (var i = 0; i < headers.length; i++) {
        var elem = null;
        elem = getNextElement(headers[i].nextSibling);
        if (elem) {
            elem.style.fontWeight = "bold";
            elem.style.fontSize = "1.2em";
            elem.style.color = "grey";
        }
    }
}

/**
 * 返回某节点的下个元素节点
 * @param node 某节点的下个节点
 */
function getNextElement(node) {
    // 如果是元素节点
    if (node.nodeType == 1) {
        return node;
    }

    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }

    return null;
}

/**
 * 给元素节点追加class属性
 */
function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        var newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

addLoadEvent(styleHeaderSiblings);
