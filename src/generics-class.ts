// 泛型类 
// 泛型不能约束类的静态成员
class LogClass<T>{
    run(value:T){
        console.log(value)
        return value
    }
    // static age:18
}

let log1 = new LogClass<number>() //这里显式的传入了T的类型，那实例的方法将会受到泛型的约束
log1.run(1) //因为受到了泛型约束，所以这里run只能是number类型

let log2 = new LogClass(); //未传入类型参数  所以value的值可以是任意类型
log2.run([1])

// 类型约束
interface Length{
    length:number
}
function logC<T extends Length>(value:T):T{
    console.log(value,value.length)
    return value
}
// 参数必须具有length属性
// logC(1)
logC([]) 
logC("aaa")
logC({length:1})

// 小结
// 函数和类可以轻松支持多种类型，增强程序的扩展性
// 不必写多条函数重载，冗长的联合类型声明，增强代码可读性
// 灵活控制类型之间的约束