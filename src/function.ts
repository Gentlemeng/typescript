//函数定义(类型)的四种方式
function add1(x:number,y:number){
    return x+y
}
let add2:(x:number,y:number)=>number

type add3 = (x:number,y:number)=>number

interface add4{
    (x:number,y:number):number
}

//ts中形参实参必须一一对应。
// 可以用可选参数?
function add5(x:number,y?:number){
    return y?x+y:x;
}
add5(1);
// 为参数提供默认值 
function add6(x:number,y=0,z:number,q=1){
    return x+y+z+q
}
add6(1,undefined,2)// 必传实参前默认参数必须用undefined站位，后的默认参数可以不穿

// 剩余参数（针对参数不固定）
function add7(x:number,...rest:number[]){
    return x+rest.reduce((pre,cur)=>pre+cur)
}
// console.log(add7(1,2,3,4,5))
// alert(add7(1,2,3,4,5))

//函数重载 好处：不需要为了相似功能函数而采用不用函数名称  
function add8(...rest:number[]):number
function add8(...rest:string[]):string
function add8(...rest:any[]):any{
    let first = rest[0]
    if(typeof first === 'number'){
        return rest.reduce((pre,cur)=> pre+cur)
    }
    if(typeof first === 'string'){
        return rest.join("")
    }
}
console.log(add8(1,2,3))
console.log(add8("a","b","c"))