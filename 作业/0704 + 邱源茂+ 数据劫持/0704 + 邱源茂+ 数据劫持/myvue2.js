/*
 *@发布--订阅   -->解决了key的问题!
 */

class Vue {
  constructor(options) {
    this.$options = options
    this._data = options.data
    this.observer(this._data)
    this.complie()
  }

  observer(data) {
    for (let key in data) {
      let value = data[key]
      //因为this的指向是vue的
      let _this = this
      //实例化Dep -->收集watcher
      let dep = new Dep()
      Object.defineProperty(data, key, {
        configurable: true,
        Enumerator: true,
        get() {
          console.log('get...')
          //1.做对应的收集
          if (Dep.target) {
            //收集
            dep.addSub(Dep.target) //-->next 触发watcher
          }
          console.log(dep)
          return value
        },
        set(newValue) {
          console.log('set...')
          // 2.进行发布 --> 为了触发watcher的update
          dep.notifiy(newValue) // -->next 实例化watcher
          value = newValue
        },
      })
    }
  }

  complie() {
    let ele = document.querySelector(this.$options.el)
    this.complieNodes(ele)
  }

  complieNodes(ele) {
    let childNodes = ele.childNodes
    childNodes.forEach((node) => {
      if (node.nodeType === 1) {
        //元素节点
        let attrs = node.attributes
        ;[...attrs].forEach((attr) => {
          let attrName = attr.name
          let attrValue = attr.value
          console.log(attrName, attrValue)
          if (attrName == 'v-text') {
            node.innerText = this._data[attrValue]
          } else if (attrName == 'v-model') {
            node.value = this._data[attrValue]
            node.addEventListener('input', (e) => {
              // 改变attrValue,视图直接更新
              this._data[attrValue] = e.target.value
            })
          } else if (attrName == 'v-html') {
            // console.log(this._data)
            node.outerHTML = this._data[attrValue]
          }
        })

        if (node.childNodes.length > 0) {
          this.complieNodes(node)
        }
      } else if (node.nodeType === 3) {
        let reg = /\{\{\s*([^\{\}\s]+)\s*\}\}/g
        let textContent = node.textContent
        if (reg.test(textContent)) {
          let $1 = RegExp.$1
          let rData = this.$options.data[$1]
          console.log(textContent)
          node.textContent = node.textContent.replace(reg, rData)
          //3.实例化,发现没有办法像dispatchEvent那样触发,给他一个回调
          new watcher(this._data, $1, (newValue) => {
            console.log('cb..', newValue)
            //更新视图逻辑
            let oldValue = this._data[$1]
            let reg = new RegExp(oldValue)
            node.textContent = node.textContent.replace(reg, newValue)
          })
        }
      }
    })
  }
}

//依赖收集器
class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  //发布
  notifiy(newValue) {
    this.subs.forEach((sub) => {
      sub.update(newValue)
    })
  }
}

//订阅者
class watcher {
  constructor(data, key, cb) {
    // this指向watcher
    Dep.target = this //-->next.1在监听中收集Dep
    data[key]
    this.cb = cb //先不执行,等update的时候再执行
    Dep.target = null
  }
  update(newValue) {
    console.log('update...')
    this.cb(newValue)
  }
}
