addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            if (showPic(this)) {
                return false;
            } else {
                return true;
            }
        }
    }
}

function preparePlaceholder() {
    if (!document.createElement) {
        return false;
    }
    if (!document.createTextNode) {
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById("imagegallery")) {
        return false;
    }
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.gif");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("Choose an image.");
    description.appendChild(desctext);
    // (1) 直接用body元素添加元素，那么该元素会是文档中的最后一个元素，这种方式不灵活
    // document.getElementsByTagName("body")[0].appendChild(placeholder);
    // document.getElementsByTagName("body")[0].appdneChild(description);
    // or HTML-DOM提供的属性body
    // document.body.appendChild(placeholder);
    // document.body.appendChild(description);
    // (2) 在已有元素前插入一个新元素，DOM提供了insertBefore()方法
    // parentElement.insertBefore(newElement, targetElement);
    // var gallery = document.getElementById("imagegallery");
    // gallery.parentNode.insertBefore(placeholder, gallery);
    // gallery.parentNode.insertBefore(description, gallery);
    // (3) 在现有元素后插入一个新元素，DOM未提供相应方法，需要自己实现
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) {
        return false;
    }
    var src = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") {
        return false;
    }
    placeholder.setAttribute("src", src);
    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

// 在现有元素后插入一个新元素
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        // 将新元素插入到目标元素和目标元素的下一个兄弟元素之间
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
