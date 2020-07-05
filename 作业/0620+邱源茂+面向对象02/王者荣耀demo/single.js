// class Person{
    // 记录有没被实例化；
//     static instance;
//     constructor(name){
//         if(Person.instance){
//             return Person.instance;
//         }
    // let a = 10;
        // #height = 10;
//         Person.instance = this;
//         this.name = name;
//     }
// }


// export default Person;


class Person {
    constructor(name) {
        this.name = name;
    }
}
let instace ;
export default function(...arg){
    if(instace){
        return instace;
    }
    instace  = new Person(...arg);
    return instace;
}


