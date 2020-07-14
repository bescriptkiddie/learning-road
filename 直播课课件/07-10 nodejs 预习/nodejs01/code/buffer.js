// buffer创建
// new Buffer()
// let buffer = Buffer.alloc(10);
// console.log(buffer);
// let buffer = Buffer.from("大家好");
// console.log(buffer);
// let buffer = Buffer.from([0xe5,0xa4,0xa7,0xe5,0xae,0xb6,0xe5,0xa5,0xbd]);
// console.log(buffer.toString());

let buffer1 = Buffer.from([0xe5,0xa4,0xa7,0xe5]);
let buffer2 = Buffer.from([0xae,0xb6,0xe5,0xa5,0xbd]);
// // console.log(buffer1.toString());
// let newbuffer = Buffer.concat([buffer1,buffer2]);
// console.log(newbuffer.toString());

let { StringDecoder } = require("string_decoder");
let decoder =  new StringDecoder();
let res1 = decoder.write(buffer1);
let res2 = decoder.write(buffer2);
console.log(res1+res2);
// console.log(res2);