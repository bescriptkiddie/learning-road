export default class MyEvent {
  constructor() {
    this.handler = {}
    this.a = 0
  }

  trigger(eventName) {
    if (typeof this.handler[eventName] === 'undefined') {
      return
    }
    this.handler[eventName].forEach((v) => {
      v()
    })
  }

  // 添加事件
  addEvent(eventName, fn) {
    // 保存事件
    if (typeof this.handler[eventName] === 'undefined') {
      this.handler[eventName] = []
    }
    this.handler[eventName].push(fn)
  }

  // 作业： 移除事件方法补全

  removeEvent(eventName, fn) {
    //移除的函数在handler中的位置
    let targetFn = this.handler[eventName].indexOf(fn)
    // console.log(targetFn)
    if (typeof this.handler[eventName] !== 'undefined' && targetFn !== -1) {
      //删除函数
      this.handler[eventName].splice(targetFn, 1)
    } else {
      console.log('没有对应事件!')
    }
  }
}
