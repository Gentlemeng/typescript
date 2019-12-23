//ts中的类
class Dog{
    constructor(name:string){
        this.name =  name
    }
    name:string
    public color:string = 'black'
    run(){}
    private pri(){} //只能在类本身中调用 
    protected pro(){} //受保护成员 只能在类和子类中访问，而不能再实例中访问
    readonly legs:number = 4 //只读成员，并且一定要初始化
    static food:string = 'bones' //类的静态成员:只能通过类名来访问，子类不可访问,可以被继承
}
// 与es中的类一样  ts中类成员的属性为实例的属性，而不作为原型属性；
// 类成员的方法也都是实例方法
console.log(Dog.prototype);
let dog = new Dog('w');
console.log(dog);
// 与es中不一样的是，ts中的实例属性必须具有取值，或者在构造函数中被初始化。

//类的继承
class Husky extends Dog{
    constructor(name:string,public color:string){ //构造函数中的属性成员也可以添加修饰符
        super(name)
        this.color = color
    }
    // color:string //因为在构造函数中添加了public 所以这里可以省略声明这个属性
}
let husky = new Husky("erha",'white')
// console.log(husky.food) //is static property
