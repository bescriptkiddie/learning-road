import { getUser, getUsers } from './api/getUser'

console.log('邱源茂')

let button = document.querySelector('button')
button.onclick = async function () {
  let rs = await getUser<{ id: number }>({ id: 1 })
  rs.username
  rs.age

  let users = await getUsers()
  // users.username;
  users.forEach((user) => {
    user.username
  })

  // rs.ag;

  // new Promise<number>((resolve) => {
  //     resolve(123);
  // }).then( val => {
  //     val.toFixed();
  // } );
}

// 重载

// 上面定义了一个函数的多种不同形态，没有函数体（没有具体的实现），只有结构
// 下面的才是这个函数的具体实现
// 在一个函数中不能去定义两套不一样的参数类型约束
// 1: value 是数字 unit 必须是一个字符串的单位
// 2: value 是字符串的时候，unit 是不存在的
// function method1(value: number, unit: string);
// function method1(value: string);
// function method1(value: any, unit?: any) {
//     console.log(value, unit);
// }
// function method1(value: string) {
//     console.log(value, unit);
// }

// method1( 1, 'px' );
// method1( '100px' );
// method1( '1px', 'px' );
