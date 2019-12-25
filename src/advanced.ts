// 类型推断
// 从右向左推断
let a = 1
let b = [1]

let c = (x=1)=>x+1

// 从左向右推断
window.onkeydown = function (event:Event){
    // console.log(event.button)
}

// 类型断言
interface Foo{
    bar:number
}
// let foo = {} as Foo
// foo.bar = 1

let foo:Foo={
    bar:1
}


// 类型兼容性
// 当一个类型Y可以被赋值给另一个类型X时，我们就可以说类型X兼容类型Y
// X兼容Y : X(目标类型) = Y(源类型)

// 接口兼容性
interface X{
    a:any
    b:any
}
interface Y{
    a:any
    b:any
    c:any
}
let x:X = {a:1,b:1}
let y:Y = {a:1,b:1,c:1}
// x = y
// y = x  //不允许这样赋值 x中没有有c这个必要属性
// 小结：接口兼容性：源类型必须具备目标类型的必要属性（成员少的会兼容成员多的）

// 函数兼容性
// 条件一 参数个数
type Handler=(a:number,b:number)=>void //类型别名（为函数类型起名）
function hof(handler:Handler){
    return handler 
}
let handler1 = (a:number)=>{}
hof(handler1)
let handler2 = (a:number,b:number,c:number)=>{}
// hof(handler2) //不支持

// 可选，剩余参数兼容性


// 条件二 参数类型

// 条件三 返回值类型

// 枚举兼容性

// 类兼容性  静态成员和构造函数不参与匹配，只要实例成员匹配

// 泛型兼容性

// 小结
// 结构之间兼容:成员少的兼容成员多的
// 函数之间兼容:参数多的兼容参数少的 

// 类型保护 TypeScript 能够在特定的区块中保证变量属于某种确定的类型
// 可以在此区块中放心地引用此类型的属性，或者调用此类型的方法
// instanceof

// in 关键字  判断某个属性是不是属于某个对象

// typeof

//创建一个类型保护函数

 




