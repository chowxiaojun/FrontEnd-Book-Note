##《JavaScript DOM编程艺术》读书笔记

### 第一章 JavaScript简史

> Web标准：

1. HTML：超文本标记语言；
2. CSS：层叠样式表，给文档增加样式；
3. DOM：文档对象模型，给文档增加交互能力。

> JavaScript的起源

1. `JavaScript`(Netscape公司，Sun公司) --与ECMA(欧洲计算机制造商协会)一起对其进行标准化--> `ECMAScript`；
2. JavaScript与Java没有任何联系，是一种脚本语言，一般只能在浏览器环境中运行，当然现在有了Node.js；
3. BOM：浏览器对象模型，设置浏览器属性的方法。

> DOM

1. `DOM`是一套对文档的内容进行抽象和概念化的方法；
2. DOM Level 0。

> 浏览器之争

1. DHTML(Dynamic HTML)：一种描述HTML、CSS和JavaScript技术组合的术语；
2. DHTML的含义：(1) 利用HTML把网页标记为各种元素，(2) 利用CSS设置元素样式和它们的显示位置，(3) 利用JavaScript实时地操控页面和改变样式；
3. NetScape与微软使用两种不兼容的DOM，导致要写两份不同脚本，但是目标却是一样的。

> 制定标准

1. W3C推出一个标准化的DOM：一个与系统平台和编程语言无关的接口，程序和脚本可通过该接口动态的访问和修改文档的内容、结构和样式；
2. 现在的各大浏览器都内置了对标准DOM的支持，可以实现“编写一次，随处运行”。

### 第二章 JavaScript语法
> JavaScript

1. 程序设计语言分为解释型和编译型两大类；
2. JavaScript是一种解释型程序语言，一般通过Web浏览器就负责完成相关的解释和执行。
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Just a test</title>
</head>
<body>

    <!-- 这是HTML中的注释 -->
    <!-- <script>标签最好是放到HTML文档的最后，</body>标签之前 -->
    <!-- 因为js文件的加载和执行会阻塞文档的加载和渲染 -->
    <!-- 执行JavaScript代码的方式：
        (1) 直接将JavaScript代码放在<script>标签之间；
        (2) 将JavaScript代码组织为一个独立文件
    -->
    <script type="text/javascript">
        // JavaScript代码
    </script>
    <script type="text/javascript" src="example.js"></script>
</body>
</html>

```

> 语法：语言结构方面的各项规则称之为语法。

1.
