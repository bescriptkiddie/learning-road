class KPromise {
  constructor(handle) {
    this.status = 'pendding'
    this.value = undefined
    handle(
      function (val) {
        console.log(val)
      },
      function (err) {
        console.log(err)
      },
    )
  }
}
