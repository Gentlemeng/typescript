import "./generics"
let str : string = "helloa"
document.querySelectorAll(".app")[0].innerHTML = str

// 类成员修饰符
// public 默认就是public,可被子类，可被实例访问
// private 只有类本身可访问，子类和实例访问不到
// protected 只能在类和子类中访问，类的实例中访问不到,construct前加protected，只能被继承，不能实例化（基类）
// readonly 必须初始化，且不能更改
// static 类的静态成员 只能通过类名调用，而不能通过实例访问。可以被继承

// 构造函数参数修饰符
// public 将参数编程实例属性，从而不用在类中再次声明定义

// 抽象类
// abstract class Animal{}  抽象类只能被继承不能实例化
// 抽象类中可以不指定一个方法实现，而在子类中具体实现。（抽象方法）
// 多态 ：在父类中定义一个抽象方法，在多个子类中对这个方法有不同的实现，程序运行时，根据不同的对象，执行不同的操作。

// this类型 链式调用

class A {
    step1(){
        return this
    }
    step2(){
        return this
    }
}
class Aa extends A{
    next(){
        return this
    }
}
// let a = new Aa()
// a.next().step1().next().step2();
// console.log(a.next().step1()===a.next());


