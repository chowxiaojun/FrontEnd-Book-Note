// DOM Level 0 常用于翻转图片和验证表单数据，此时还未标准化
// 'images'和'forms'是在JavaScript中预先定义的
document.images[2]; // 引用文档中的第三个图像
document.forms['details']; // 文档中名为'details'的表单


// DHTML

// HTML
<div id="my-element"> This is my element</div>

// CSS
#my-element {
    position: absolute;
    left: 50px;
    top: 100px;
}


// JavaScript

document.layers['my-element']; // NetScape的DOM使用了专有元素，层(layer)
var xpos = document.layers['my-element'].left;

document.all['my-element']; // 微软
var xpos = document.all['my-element'].leftpos;

var xpos = document.getElementById('my-element').style.left;  // 标准化的DOM
