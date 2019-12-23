//抽象类 只能被继承而不能被实例化
abstract class Animal{
    eat(){
        console.log("eat")
    }
    // 多态：在父类中定义一个抽象方法，在多个子类
    // 中有不同的实现，在程序运行的时候，根据不同的对象执行不同的操作
    // 来实现运行时绑定 
    abstract sleep():void
}
class Cat extends Animal{
    constructor(){
        super()
    }
    sleep(){
        console.log('cat sleep')
    }
}
let cat = new Cat()
cat.eat();
class Chicken extends Animal{
    sleep(){
        console.log("chiken sleep")
    }
}
let chiken = new Chicken()
//多态  
let animals:Animal[] = [cat,chiken]
animals.map(i=>{
    i.sleep()
})

//ts中特殊类 this
class WrokFlow {
    step1(){
        return this
    }
    step2(){
        return this
    }
}
new WrokFlow().step1().step2() //链式调用
class MyFlow extends WrokFlow{
    next(){
        return this
    }
}
new MyFlow().next().step1().next().step2()  //子类和父类中互相方法互相调用