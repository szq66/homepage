---
title: 【arguments】JavaScript 类数组 arguments
data: 2021-12-15
author: 亘古不变的誓言
location: ZhuHai
tags:
  - JavaScript
summary: 类数组 arguments 的详细介绍
---

## 类数组 arguments
当我们在调用某个函数时，浏览器每次都会传递进两个隐含的参数：

- 1.函数的上下文对象 this

- 2.**封装实参的对象** arguments

例如：
```js
function foo() {
    console.log(arguments);
    console.log(typeof arguments);
}
foo();
```
![](https://img-blog.csdnimg.cn/6a8d48bb923544e0bf038b9264780875.png)

arguments 是一个类数组对象，它可以通过索引来操作数据，也可以获取长度。

**arguments 代表的是实参**。在调用函数时，我们所传递的实参都会在 arguments 中保存。有个讲究的地方是：**arguments 只在函数中使用**。

### 1、返回函数**实参**的个数：arguments.length

arguments.length 可以用来获取**实参的长度**。

举例：
```js
fn(2, 4);
fn(2, 4, 6);
fn(2, 4, 6, 8);

function fn(a, b) {
    console.log(arguments);
    console.log(fn.length);	//获取形参的个数
    console.log(arguments.length);	//获取实参的个数

    console.log('----------------');
}
```
打印结果：

![](https://img-blog.csdnimg.cn/5da3c69e31ec4d088c712d52f53a1e64.png)

我们即使不定义形参，也可以通过 arguments 来使用实参（只不过比较麻烦）：arguments[0] 表示第一个实参，arguments[1] 表示第二个实参，以此类推...

### 2、返回正在执行的函数：arguments.callee
arguments 里边有一个属性叫做 callee，这个属性对应一个函数对象，就是当前正在指向的函数对象。
```js
function fun() {
    console.log(arguments.callee == fun); 
}

fun('hello');	//打印结果为true
```
在使用函数**递归**调用时，推荐使用 arguments.callee 代替函数名本身。

### 3、arguments 可以修改元素

之所以说 arguments 是伪数组，是因为：**arguments 可以修改元素，但不能改变数组的长短**。举例：
```js
fn(2, 4);
fn(2, 4, 6);
fn(2, 4, 6, 8);

function fn(a, b) {
    arguments[0] = 99;	//将实参的第一个数改为99
    arguments.push(8);	//此方法不能通过，因为无法增加元素
}
```
## arguments 的使用

当我们不确定有多少个参数传递的时候，可以用 **arguments** 来获取。在 JavaScript 中，arguments 实际上是当前函数的一个**内置对象**。所有函数都内置了一个 arguments 对象（只有函数才有 arguments 对象），arguments 对象中存储了**传递的所有实参**.

arguments的展示形式是一个**伪数组**。伪数组具有以下特点：

- 可以进行遍历；具有数组的 length 属性。

- 按索引方式存储数据。

- 不具有数组的 push()、pop() 等方法。

**代码举例**：利用 arguments 求函数实参中的最大值

代码实现：
```js
function getMaxValue() {
	var max = arguments[0];
	// 通过 arguments 遍历实参
	for (var i = 0; i < arguments.length; i++) {
		if (max < arguments[i]) {
			max = arguments[i];
		}
	}
	return max;
}

console.log(getMaxValue(1, 3, 7, 5));   // 打印结果：7
```