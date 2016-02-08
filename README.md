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
```

>  数组：是指一个变量表示一个值的组合
```
var beatles = Array(4); // 声明长度
var beatles = Array(); // 不声明长度
var beatles = [];
var beatles = Array("John", "Paul", "George", "Ringo");
var beatles = ["John", "Paul", "George", "Ringo"];
var lennon = ["John", 1940, false]; // 3中数据类型混在一起存入一个数组
```

> 关联数组，在JavaScript中，所有的变量实际上都是某种类型的对象。一个数组就是一个Array类型的对象。

```
// 所以，以下实际是给lennon数组添加了三个属性，理想情况下，不应该修改Array对象的属性，而应该使用通用的对象(Object)
var lennon = Array();
lennon["name"] = "John";
lennon["year"] = 1940;
lennon["living"] = false;
```

> 对象：与数组类似，对象也是使用一个名字表示一组值，对象的每个值都是对象的一个属性。

```
var lennon = Object();
lennon["name"] = "John";
lennon["year"] = 1940;
lennon["living"] = false;

// 创建对象也可使用花括号法
{propertyName: value, propertyName: value}
```
> 操作(operation)

```
// 1. 算术操作符，加减乘除(+, -, *, /)，赋值(=)
// 赋值运算并非总是返回真值：
if (a = false) {
    alert('hello, world');
}
```
> 条件语句：用做判断。

```
if (condition) { // 条件求值的结果永远是一个布尔值
    statements;
}

// 2. 比较操作符，大于(>)，小于(<)，大于等于(>=)，小于等于(<=)，等于(==)，不等于(!=)，
// 相等操作符==并不表示严格相等，如下所示
var a = false;
var b = ""; // 在JS中，空字符串表示假值
if (a == b) { // 这里会返回true
    alert("a eqauls b");
}
// 我们需要使用严格相等(===)，这不仅会比较值，而且会比较变量的类型，除了严格相等，还有严格不相等(!==)
var a = false;
var b = ""; // 在JS中，空字符串表示假值
if (a === b) { // 这里会返回false
    alert("a eqauls b");
}
// 3. 逻辑操作符， 与(&&)，或(||)，非(!)
```

> 循环语句：重复性的操作

```
// 1. while 循环
while (condition) {
    statements; // while循环内部必须发生一些会影响循环控制条件的事情
}
// 下面这种形式的while循环，循环语句内部的代码至少执行一次
do {
    statements;
} while (condition);
// 2.for 循环，循环控制结构更加清晰，与循环有关的所有内容都包含在for语句的圆括号内
for (initital condition; test condition; alter condition) {
    statements;
}
```

> 函数：就是一组允许在你的代码里随时调用的语句。

```
// 作为良好的编程习惯，应该事先对函数做出定义再调用它们
function shout() {
    var beatles = Array("John", "Paul", "George", "Ringo");
    for (var count = 0; count < beatles.length; count++) {
        alert(beatles[count]);
    }
}
// 还可向函数传递数据，即参数(argument)，函数名可使用驼峰法
function name(arguments) {
    statements;
}
```

> 变量的作用域

```
// 1. 全局变量：可以在脚本中的任何位置被引用，包括函数内部
// 2. 局部变量：只存在于声明它的那个函数的内部
```

> 对象：是一种非常重要的数据类型，是自包含的数据集合，包含在对象里的数据可以通过两种形式方位——属性和方法。
> 属性：是隶属于某个特定对象的变量；
> 方法是只有某个特定对象才能调用的函数。

```
// 1. 用户定义对象
// 2. 内建对象，例如Array对象，Math对象和Date对象等。
// 3. 宿主对象，除了内建对象，还可在JavaScript脚本里使用已经预先定义好的其他对象，这些对象不是有JavaScript语言本身二十由它的运行环境提供。
// 宿主对象包括Form(表单)、Image(图像)和Element(表单元素)等
```

### 第三章 DOM
> document(文档)：DOM中的“D”，当创建了一个网页并把它加载到Web浏览器中时，DOM就产生了，它将你编写的网页文档转换为一个文档对象。

> 对象：DOM总的“O”，

```
// 1. 用户定义对象(user-defined object)：由程序员自行创建的对象；
// 2. 内建对象(native object)：内建在JavaScript语言里的对象，如Array、Math和Date等；
// 3. 宿主对象(host object)：由浏览器提供的对象，如window对象，document对象。
// window对象对应着浏览器窗口本身，这个对象的属性和方法通常统称为BOM(浏览器对象模型)；
// document对象主要功能就是处理网页内容。
```

> 模型：DOM中的“M”，“Model”(模型)。

```
<!-- DOM把一份文档表示为一棵树(家谱树)，节点树 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Shopping list</title>
</head>
<body>
    <h1>What to buy</h1>
    <p title="a gengle reminder">Don't forget to buy this stuff.</p>
    <ul id="purchases">
        <li>A tin of beans</li>
        <li class="sale">Cheese</li>
        <li class="sale important">Milk</li>
    </ul>
</body>
</html>
<!-- <html>标签就是根元素，它代表整个文档。 -->
```

> 节点(node)
