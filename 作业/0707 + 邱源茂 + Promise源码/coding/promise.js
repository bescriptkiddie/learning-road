new Promise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 500)
})
  .then((res) => {
    console.log(res)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2)
      }, 500)
    })
  })
  .then(console.log)

function Promise(fn) {
  // Promise resolve时的回调函数
  this.cbs = []
  //1.传递给Promise --> resolve
  //2.往实例挂上data
  //3.把onResolvedCallback数组里的函数
  const resolve = (value) => {
    // 注意promise的then函数需要异步执行
    setTimeout(() => {
      this.data = value
      this.cbs.forEach((cb) => {
        cb(value)
      })
    })
  }
  //执行用户传入函数
  //并且把resolve方法交给用户执行
  fn(resolve.bind(this))
}

Promise.prototype.then = function (onResovled) {
  //这里就叫 promise2
  return new Promise((resolve) => {
    this.cbs.push(() => {
      const res = onResovled(this.data)
      if (res instanceof Promise) {
        // resolve  的权力交给了user promise
        res.then(resolve)
      } else {
        //如果是普通值,直接resolve
        resolve(res)
      }
    })
  })
}

