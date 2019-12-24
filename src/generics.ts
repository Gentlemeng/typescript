// 泛型
// 定义一个泛型函数
function log<T>(value:T):T{
    console.log(value)
    return value;
}
// 两种调用
// log<string[]>(['a','b'])
// log(['a','b'])

// 定义函数类型
// type Log = <T>(value:T) => T  //类型别名
// let myLog:Log = log

// 泛型接口
// interface Log{
//     <T>(value:T) : T // 与类型别名方式一致
// }

//用泛型约束接口其他成员 将<T>放到接口名后面
// interface Log<T = number>{
interface Log<T>{
    (value:T):T
}
// *在使用泛型约束了接口的所有成员之后，实现时必须指定一个类型,或者在接口定义时，给参数指定一个默认类型
let myLog :Log <number> = log  //myLog的参数必须是number
// let myLog :Log = log  //myLog的参数必须是number
myLog(1)

