// 接口与类
// 
interface Human{
    // new (name:string):void  
    name:string
    eat():void
}
// 用类实现接口 *必须实现接口中所有属性 *接口只能约束类的公有成员,不能约束类的构造函数
class Asia implements Human{
    constructor(name:string){
        this.name = name
    }
    name:string
    eat(){}
    sleep(){} 
}

// 接口继承
// 1.接口继承接口  *可以抽离出可重用接口 *也可以将多个接口合并成一个接口  
interface Man extends Human{
    run():void
}
interface Child {
    cry():void
}
interface Boy extends Man,Child{
 
}
let boy:Boy={
    name:"",
    run(){},
    eat(){},
    cry(){}
}
// 2. 接口继承类   接口把类的成员抽象出来，也就是只有类的成员结构，没有自己实现。
class Auto {
    state = 1
    private state2 = 0
}
interface AutoInterface extends Auto{ //接口继承Auto类

}
// class C implements AutoInterface{  //类C实现AutoInterface接口
//     state = 1
// }

// Auto类的子类也可以实现接口
class Bus extends Auto implements AutoInterface{
    // 这里就不用实现接口中的属性了，因为Bus类继承了Auto,内部有state这个属性成员
}

// *接口在抽离类时，不仅抽离了类的公共成员，还抽离了类的私有和受保护成员
let bus = new Bus()
console.log(bus);
// debugger;

// 小结
// 接口之间可以相互继承，实现接口复用
// 类之间可以相互继承，实现属性，方法复用
// 类可以实现接口(implements) 必须实现接口中所有属性，接口只能约束类的公有成员
// 接口也可以抽离出类的成员(extends)，包括public,private,protected

class A extends Auto{
    color="red"
}
let a = new A()
console.log(a);
