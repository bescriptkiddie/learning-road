// console.log('Hello TypeScript');

function log(str: string) {
   
    return function(target: any, name: string, descriptor: PropertyDescriptor) {
        console.log('我现在开始装饰了', target, name, descriptor);

        let value = descriptor.value;
        descriptor.value = function(...args) {
            console.log( str );
            let result = value(...args);
            return result;
        }
    }

}


class M {

    @log('hello')
    static add(a: number, b: number) {
        return a + b;
    }

    @log('byebye')
    static sub(a: number, b: number) {
        return a - b;
    }
}

let rs1 = M.add(1, 2);
console.log('rs1', rs1);

let rs2 = M.sub(1, 2);
console.log('rs2', rs2);