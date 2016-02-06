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

> 语句：即指令。

```
first statement;
second statement;
```
> 注释：脚本中仅供自己参考或提醒自己的信息，解释器会忽略这些信息。

```
// 注释
/* 注释 */
```
> 变量(variable)：变量的名字区分大小写，不允许变量名中包含空格或标点符号(美元符号 "$"例外)，可使用字母、数字、美元符号和下划线。

```
// JavaScript允许直接对变量赋值而无需事先声明，如下所示。
mood = "happy";
age = 33;
// 如何声明变量：
var mood;
var age;
var mood, age;
// 声明，赋值
var mood = "happy";
var age = 33;
```

> 命名方式——驼峰格式(camel case)：是函数名、方法名和对象属性名的首选格式。

```
var camelCase;
```
> 数据类型：JavaScript不需要进行类型声明，是一种弱类型(weakly typed)语言，程序员可在任何阶段改变变量的数据类型。

```
// 1. 字符串：由零个或多个字符构成，必须包在引号里，单引号或双引号都可以。不管单引号还是双引号，在同一脚本中最好保持一致
var mood = 'happy';
var mood = "happy";
var mood = "don't ask"; // 字符串中包含单引号
var mood = 'don\'t ask'; // 也可对单引号进行转义，用反斜杠

// 2. 数字：无需限定它必须是一个整数，可以是浮点数(任意位)
var age = 33.25;
var temperature = -20;
var temp = -20.3333;

// 3. 布尔值：true 或 false

// 4. 数组：是指一个变量表示一个值的组合
var beatles = Array(4); // 声明长度
var beatles = Array(); // 不声明长度
var beatles = [];
var beatles = Array("John", "Paul", "George", "Ringo");
var beatles = ["John", "Paul", "George", "Ringo"];
var lennon = ["John", 1940, false]; // 3中数据类型混在一起存入一个数组
// 关联数组，在JavaScript中，所有的变量实际上都是某种类型的对象。一个数组就是一个Array类型的对象。所以以下实际是给lennon数组添加了三个属性。
var lennon = Array();
lennon["name"] = "John";
lennon["year"] = 1940;
lennon["living"] = false;

```
