//数字枚举
enum Role{
    a,
    b,
    c,
    d,
}
// console.log(Role);  {0: "a", 1: "b", 2: "c", 3: "d", a: 0, b: 1, c: 2, d: 3}
//字符串枚举
enum Message {
    Success='成功',
    Fail='失败'
}

//异构枚举
enum Answer{
    N,
    Y='Yes'
}

//枚举成员
// Role.a = 2 //只读

//枚举成员的分类  1:常量枚举：常量枚举又分为三类：没有初始值的情况；对已有枚举成员的引用；常量表达式;(都会在编译时计算出结果)
//               2:computed number 需要被计算的枚举成员 非常量表达式 编译时不计算直到程序执行阶段
enum Char{
    a,
    b = Char.a,
    c = 1+3,
    //computed
    d = Math.random(),
    e = '123'.length,
}
// 在 computed number 后面的枚举成员必须被赋值一个初始值

//常量枚举 编译阶段会被移出
const enum Month{
    Jan,
    Feb,
    Mar
}
// 常量枚举作用：当我们不需要一个对象，而是需要对象的值的时候。减少在编译环境下的代码
let month  = [Month.Jan,Month.Feb,Month.Mar];  // 元素为常量枚举成员 

//枚举类型  枚举和枚举成员可以单独的作为一种类型存在
enum E {a,b}  //枚举成员没有初始值
enum F {a=0,b=1} //所有成员都是数字枚举
enum G {a='apple',b='banana'} // 字符串枚举

let e:E = 3  //可以将任意的Number类型赋值给这个枚举类型
let f:F = 3
//e === f //两种不同的枚举类型是不可以比较的

let e1:E.a = 1
let e2:E.b
let e3:E.a = 1

// console.log(e1 === e3)

//字符串枚举  取值 只能是枚举成员类型
let g1:G = G.a
let g2:G = G.b
// console.log(g1)

// 接口  可以约束对象，函数，类的结构和类的类型
//对象类型接口
// 可索引类型接口类型（不确定接口成员数量）
interface StringArray { //用数字索引的接口
    [index:number]:string  // 用任意的数字去索引StringArray都会到一个string 
}
let chars:StringArray = ["a","b"] //字符串数组

interface Names{//用字符串索引接口
    [x:string] : string //用任意的string索引Names都会得到一个string,这样声明之后就不能声明一个number成员了
    // y:number   
    // 两种索引类型是可以混用，
    // *数字索引签名的返回值必须是字符串索引签名返回值得子类型，因为js会进行类型转换，会将number转成string
    [z:number] : string
}
let names:Names = {aaa:"a",0:""}

//函数类型接口
//1.使用变量定义函数类型
// let add : (x:number,y:number) => number  

//2.使用接口来定义函数类型
// interface Add{
//     (x:number,y:number):number
// }
//3.类型别名（为函数类型起名）
type Add = (x:number,y:number)=>number

let add :Add = (a,b)=> a+b;
console.log(add(1,2));

//混合接口（对象，函数 ）
interface Lib {
    ():void
    version:string
    doSomething():void
}

function getLib(){  //如果不用getLib为什么lib就是单例了？？？
    let lib:Lib = (()=>{console.log(1)}) as Lib //使用类型断言 防止报错
    lib.version = ""
    lib.doSomething = ()=>{}
    return lib
}

let lib1 = getLib();
lib1();
lib1.doSomething();



