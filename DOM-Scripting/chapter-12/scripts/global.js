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

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

/**
 * 移动元素到指定位置
 */
function moveElement(elementID, final_x, final_y, interval) {
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById(elementID)) {
        return false;
    }
    var elem = document.getElementById(elementID);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);

    if (xpos == final_x && ypos == final_y) {
        return true;
    }

    if (xpos < final_x) {
        var dist = Math.ceil((final_x - xpos) / 10);
        xpos += dist;
    }
    if (xpos > final_x) {
        var dist = Math.ceil((xpos - final_x) / 10);
        xpos -= dist;
    }
    if (ypos < final_y) {
        var dist = Math.ceil((final_y - ypos) / 10);
        ypos += dist;
    }
    if (ypos > final_y) {
        var dist = Math.ceil((ypos - final_y) / 10);
        ypos -= dist;
    }

    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementID + "'," + final_x+ "," + final_y + "," + interval + ")";
    elem.movement = setTimeout(repeat, interval);
}

/*
 * 显示指定id的<section>，同时影藏其他部分
 */
function showSection(id) {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].getAttribute("id") != id) {
            sections[i].style.display = "none";
        } else {
            sections[i].style.display = "block";
        }
    }
}

/*
 * 根据当前所在页面，高亮导航栏中对应的导航项
 */
function highlightPage() {
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    var headers = document.getElementsByTagName('header');
    if (headers.length <= 0) {
        return false;
    }
    var navs = headers[0].getElementsByTagName('nav');
    if (navs.length <= 0) {
        return false;
    }
    var links = navs[0].getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        var linkurl = links[i].getAttribute('href');
        console.log(links[i]);
        if (window.location.href.indexOf(linkurl) != -1) {
            links[i].className = "here";
            var linktext = links[i].lastChild.nodeValue.toLowerCase();
            // 为每个页面的body元素添加id属性，可以为每个页面应用不同的样式
            document.body.setAttribute("id", linktext);
        }
    }
}

/*
 * 根据链接创建幻灯片，当鼠标滑到某个链接上时，显示相应的图片
 */
 function prepareSlideshow() {
     if (!document.getElementsByTagName) {
         return false;
     }
     if (!document.getElementById) {
         return false;
     }
     if (!document.getElementById("intro")) {
         return false;
     };
     var intro = document.getElementById("intro");
     var slideshow = document.createElement("div");
     slideshow.setAttribute("id", "slideshow");
     var frame = document.createElement("img");
     frame.setAttribute("src", "images/frame.gif");
     frame.setAttribute("alt", "");
     frame.setAttribute("id", "frame");
     slideshow.appendChild(frame);
     var preview = document.createElement("img");
     preview.setAttribute("src", "images/slideshow.gif");
     preview.setAttribute("alt", "a glimpse of what awaits you");
     preview.setAttribute("id", "preview");
     slideshow.appendChild(preview);
     insertAfter(slideshow,intro);
     var links = document.getElementsByTagName("a");
     for (var i = 0; i < links.length; i++) {
         links[i].onmouseover = function() {
             var destination = this.getAttribute("href");
             if (destination.indexOf("index.html") != -1) {
                 moveElement("preview", 0, 0, 5);
             }
             if (destination.indexOf("about.html") != -1) {
                 moveElement("preview", -150, 0, 5);
             }
             if (destination.indexOf("photos.html") != -1) {
                 moveElement("preview", -300, 0, 5);
             }
             if (destination.indexOf("live.html") != -1) {
                 moveElement("preview", -450 , 0, 5);
             }
             if (destination.indexOf("contact.html") != -1) {
                 moveElement("preview", -600 , 0, 5);
             }
         }
     }
 }

 /*
  * 点击内部<nav>中的链接是调用showSection函数
  */
function prepareInternalnav() {
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    var articles = document.getElementsByTagName("article");
    if (articles.length == 0) {
        return false;
    }
    var navs = articles[0].getElementsByTagName("nav");
    if (navs.length == 0) {
        return false;
    }
    var nav = navs[0];
    var links = nav.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++ ) {
        var sectionId = links[i].getAttribute("href").split("#")[1];
        if (!document.getElementById(sectionId)) continue;
        document.getElementById(sectionId).style.display = "none";
        links[i].destination = sectionId; // 为每个链接创建一个自定义的属性，这个属性的作用域是持久存在的
        links[i].onclick = function() {
            showSection(this.destination);
            return false;
        }
    }
}

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) {
        return true;
    }
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    if (!document.getElementById("description")) {
        return false;
    }
    if (whichpic.getAttribute("title")) {
        var text = whichpic.getAttribute("title");
    } else {
        var text = "";
    }
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
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
  var desctext = document.createTextNode("Choose an image");
  description.appendChild(desctext);
  var gallery = document.getElementById("imagegallery");
  insertAfter(description, gallery);
  insertAfter(placeholder, description);
}

function prepareGallery() {
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById("imagegallery")) {
        return false;
    }
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return showPic(this);
        }
    }
}


function stripeTables() {
    if (!document.getElementsByTagName) {
        return false;
    }
    var tables = document.getElementsByTagName("table");
    for (var i = 0; i < tables.length; i++) {
        var odd = false;
        var rows = tables[i].getElementsByTagName("tr");
        for (var j=0; j<rows.length; j++) {
            if (odd == true) {
                addClass(rows[j],"odd");
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}

function highlightRows() {
    if(!document.getElementsByTagName) {
        return false;
    }
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].oldClassName = rows[i].className
        rows[i].onmouseover = function() {
            addClass(this, "highlight");
        }
        rows[i].onmouseout = function() {
            this.className = this.oldClassName
        }
    }
}

function displayAbbreviations() {
    if (!document.getElementsByTagName
        || !document.createElement || !document.createTextNode) {
            return false;
    }
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) {
        return false;
    }
    var defs = new Array();
    for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        if (current_abbr.childNodes.length < 1) continue;
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    var dlist = document.createElement("dl");
    for (key in defs) {
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length < 1) {
        return false;
    }
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    var articles = document.getElementsByTagName("article");
    if (articles.length == 0) {
        return false;
    }
    articles[0].appendChild(header);
    articles[0].appendChild(dlist);
}

/**
 * label的for属性可把一小段文本关联到表单的一个字段
 * @function 如果label中的文本被单击，关联的表单字段就会获得焦点
 */
function focusLabels() {
    if (!document.getElementsByTagName) {
        return false;
    }
    var labels = document.getElementsByTagName("label");
    for (var i = 0; i < labels.length; i++) {
        if (!labels[i].getAttribute("for")) {
            continue;
        }
        labels[i].onclick = function() {
            var id = this.getAttribute("for");
            if (!document.getElementById(id)) {
                return false;
            }
            var element = document.getElementById(id);
            element.focus();
        }
    }
}

/**
 * @function 将每个表单字段placeholder属性的值临时作为相应表单字段的value
 */
function resetFields(whichform) {
    // 检查浏览器是否支持placeholder属性，旧浏览器不支持
    if (Modernizr.input.placeholder) {
        return;
    }
    for (var i = 0; i < whichform.elements.length; i++) {
        var element = whichform.elements[i];
        if (element.type == "submit") {
            continue;
        }
        // 兼容不同浏览器，使用了HTML DOM的placeholder属性和DOM的getAttribute('placeholder')
        var check = element.placeholder || element.getAttribute('placeholder');
        if (!check) {
            continue;
        }
        element.onfocus = function() {
            var text = this.placeholder || this.getAttribute('placeholder');
            if (this.value == text) {
                this.className = '';
                this.value = "";
            }
        }
        element.onblur = function() {
            if (this.value == "") {
                this.className = 'placeholder';
                this.value = this.placeholder || this.getAttribute('placeholder');
            }
        }
        element.onblur();
    }
}

/**
 * @function 表单验证
 * 1. 验证脚本写得不好，反而不如没有验证；
 * 2. 不能完全依赖JavaScript，客户端验证不能取代服务器端的验证
 * 3. 客户端验证的目的在于帮助用户填好表单，服务器端验证是为了保护数据库和后台系统的安全
 */
function validateForm(whichform) {
    for (var i = 0; i < whichform.elements.length; i++) {
        var element = whichform.elements[i];
        if (element.getAttribute("required") == 'required') {
            if (!isFilled(element)) {
                alert("Please fill in the "+element.name+" field.");
                return false;
            }
        }
        if (element.getAttribute("type") == 'email') {
            if (!isEmail(element)) {
                alert("The "+element.name+" field must be a valid email address.");
                return false;
            }
        }
    }
    return true;
}

function isFilled(field) {
    return (field.value.length > 1 && field.value != field.placeholder);
}

function isEmail(field) {
    return (field.value.indexOf("@") != -1 && field.value.indexOf(".") != -1);
}

/**
 * @function 遍历文档，将form对象传给resetFields函数
 */
function prepareForms() {
    for (var i = 0; i < document.forms.length; i++) {
        var thisform = document.forms[i];
        resetFields(thisform);
        thisform.onsubmit = function() {
            if (!validateForm(this)) {
                return false;
            }
            var article = document.getElementsByTagName('article')[0];
            if (submitFormWithAjax(this, article)) {
                return false;
            }
            return true;
        }
    }
}

function getHTTPObject() {
    if (typeof XMLHttpRequest == "undefined") {
        XMLHttpRequest = function () {
            try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
            catch (e) {}
            try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
            catch (e) {}
            try { return new ActiveXObject("Msxml2.XMLHTTP"); }
            catch (e) {}
            return false;
        }
    }

    return new XMLHttpRequest();
}

function displayAjaxLoading(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }

    var content = document.createElement("img");
    content.setAttribute("src","images/loading.gif");
    content.setAttribute("alt","Loading...");

    element.appendChild(content);
}

function submitFormWithAjax(whichform, thetarget) {
    var request = getHTTPObject();
    if (!request) {
        return false;
    }

    displayAjaxLoading(thetarget);

    var dataParts = [];
    var element;
    for (var i = 0; i < whichform.elements.length; i++) {
        element = whichform.elements[i];
        dataParts[i] = element.name + '=' + encodeURIComponent(element.value);
    }
    var data = dataParts.join('&');

    request.open('POST', whichform.getAttribute("action"), true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 0) {
                var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
                if (matches && matches.length > 0) {
                    thetarget.innerHTML = matches[1];
                } else {
                    thetarget.innerHTML = '<p>Oops, there was an error. Sorry.</p>';
                }
            } else {
                thetarget.innerHTML = '<p>' + request.statusText + '</p>';
            }
        }
    };

    request.send(data);

    return true;
};

addLoadEvent(highlightPage);
addLoadEvent(function() {
    prepareSlideshow();
    prepareInternalnav();
    preparePlaceholder();
    prepareGallery();
    stripeTables();
    highlightRows();
    displayAbbreviations();
    prepareForms();
})
