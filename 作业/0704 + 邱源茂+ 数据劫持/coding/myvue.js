class Vue extends EventTarget {
  constructor(options) {
    super()
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
      Object.defineProperty(data, key, {
        configurable: true,
        Enumerator: true,
        get() {
          console.log('get...')
          //注意:不能return data[key]造成死循环
          return value
        },
        set(newValue) {
          console.log('set...')
          //这里要把数据给劫持,先继承eventTarget ,再创建一个自定义事件
          let event = new CustomEvent(key, {
            detail: newValue,
          }) //创建事件
          _this.dispatchEvent(event) //触发事件
          value = newValue
          //-->之后需要把它进行编译
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
    // console.log(childNodes)
    childNodes.forEach((node) => {
      // console.log(node)
      if (node.nodeType === 1) {
        /* 元素节点
          递归调用compliwNodes  -->巧妙判断,就是利用length>0,一层层找下去*/
        if (node.childNodes.length > 0) {
          this.complieNodes(node)
        }
      } else if (node.nodeType === 3) {
        /* 文本节点 ---> 匹配"{{}}"
         *:0-n ,+:1-n s:空格 S:非空格  []:集合 ^:非 */
        let reg = /\{\{\s*([^\{\}\s]+)\s*\}\}/g
        let textContent = node.textContent
        if (reg.test(textContent)) {
          // console.log('有大括号表达式!')
          // 获取下标分组  -->()里面的
          let $1 = RegExp.$1
          // console.log($1)
          let rData = this.$options.data[$1]
          // console.log(rData)
          console.log(textContent)
          //将数据渲染到视图  reg 还可以作为参数在replace内用
          node.textContent = node.textContent.replace(reg, rData)
          this.addEventListener($1, (e) => {
            console.log('自定义事件!', e.detail)
            //重新渲染模板,需要知道修改的值,即获取最新值  -->回到set,customEvent
            let oldValue = this._data[$1]
            let newValue = e.detail
            // 正则写法,string用//,变量使用RegExp()
            let reg = new RegExp(oldValue)
            node.textContent = node.textContent.replace(reg, newValue)
          })
        }
      }
    })
  }
}
