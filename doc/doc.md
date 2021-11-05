# d

## this

以下五种形式：

- 全局
- 对象的方法调用
- 构造函数
- 箭头函数
- call 和 bind

其中 call和 bind 传入的参数类型不同，有以下特殊情况：

- 非严格模式
  1. 简单类型会被进行装箱操作，如 `call(1)` `call('str')` 实际会是 `Number {1}` `String {str}`
  2. `undefined` 和 `null` 则仍为全局
- 严格模式
  - 不是对象的参数传递，则为 `null`

且 call 和 apply 对 箭头函数无效

call 和 apply 对构造函数：

- `class` 语法下 无法使用 call 和 apply
- 传统形式下约定形式创建的构造函数call和apply时，表现为普通函数。

## 原始类型 和 复合类型

**原始类型**

- Boolean
- Number
- String
- Undefined
- Null
— Symbol

**复合类型**

一切皆为 Object， Array 和 function 都是对象。不过 typeof 可识别 function 。

## `a == 1 && a == 2 && a == 3` 如何为 true

```js
var v = 1;
var p = 1;
var s = 1;

var a = {
  [Symbol.toPrimitive]() {
    return p++;
  }
};

var b = {
  valueOf() {
    return v++;
  }
};
var c = {
  toString() {
    return "" + s++;
  }
};

console.log(a == 1 && a == 2 && a == 3);
console.log(b == 1 && b == 2 && b == 3);
console.log(c == "1" && c == "2" && c == "3");

console.log(v, p, s);

// 不支持 Symbol.toPrimitive 的情况下使用 valueOf 即可 如果 比较的为字符串 则换成toString即可
```

此例利用js的隐式转换规则来完成，有 toPrimitive 接口则调用 否则 根据类型使用valueOf或者toString 

另外还可以使用以下方案:

- 属性描述符定义get取值函数
- proxy代理
- 。。。

##  let、const、var 的区别有哪些？(2019-05-30)

| 声明方式 | 变量提升 | 暂时性死区 | 重复声明 | 块作用域有效 | 初始值 | 重新赋值 |
| -------- | -------- | ---------- | -------- | ------------ | ------ | -------- |
| `var`    | 会       | 不存在     | 允许     | 不是         | 非必须 | 允许     |
| `let`    | 会*      | 存在       | 不允许   | 是           | 非必须 | 允许     |
| `const`  | 会*      | 存在       | 不允许   | 是           | 必须   | 不允许   |

暂时性死区 (Temporal Dead Zone)：`let` 和 `const` 在局部的作用域内，在其声明的代码之前，其均不可用，访问会导致 `ReferenceError`, 即时是 `typeof` 也会导致报错。

`const` 初始值为对象时，仅仅是对象指向不可变，并非对象不可修改。需要不可修改可用 `Object.freeze`

`let` 和 `const` 的提升和传统的 `var` 不同 ，可简单理解为： 也提升了，但没有初始化为 `undefined`, 而是在使用前会触发错误。详情参考下文：

> [我知道你懂 hoisting，可是你了解到多深？](https://github.com/aszx87410/blog/issues/34)


## 深拷贝

个人认为： 深拷贝只需拷贝对象本身即可，而非整个原型链上所有属性。 JavaScript 中继承本身就是原型链串起来的，这种表现更符合JavaScript本身。

当然如有特殊需求需要拷贝整个原型链也是存在的。

```js

```