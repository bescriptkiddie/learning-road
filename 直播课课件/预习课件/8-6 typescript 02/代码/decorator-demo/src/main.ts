import fs from 'fs';

function log(type: string = 'log') {

    return function(target: any, name: string, descriptor: PropertyDescriptor) {
        // 描述符:PropertyDescriptor，defineProperty的第三个参数
    
        let value = descriptor.value;
        descriptor.value = function(a:number, b: number) {
            // console.log('我是修改后的函数')
    
            let result = value(a, b);
    
            // console.log('日志：', result);

            switch(type) {
                case 'log':
                    console.log('日志：', result);
                    break;
                case 'file':
                    fs.writeFileSync('./log.txt', result);
                    break;
            }
    
            return result;
        }
    }

}


class A {

    @log()
    method1(a: number, b: number): number {
        return a + b;
    }

    @log('file')
    method2(a: number, b: number): number {
        return a + b;
    }

}

let a = new A();
let rs1 = a.method2(1, 2);
// console.log('rs1', rs1)