let a = 10;
console.log(a);
let obj = {
    name:"张三",
    age:20,
    a,
    fn:function(){
        console.log("fn..");
    }
}
let c = 20;
// export 可以有多个 ；
export {c};
// export let c = 20;
export let d = 30;
// 默认导出； 只能默认导出一个
// export default obj;
export {obj as default};

// export default a;