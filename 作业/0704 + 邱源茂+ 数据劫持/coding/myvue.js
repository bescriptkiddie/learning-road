class Vue {
    constructor(options) {
      this.$options = options
      this.data = options.data
      this.observe = 
    this.complie()
  }
  complie() {
    let ele = document.querySelector(this.$options.el)
    console.log()
    this.complieNodes()
  }
  complieNodes() {
    let childNodes = ele.childNodes
    childNodes.forEach((node) => {
      console.log(node)
      if (node.nodeType === 1) {
        //元素节点
      } else if (node.nodeType === 3) {
        //
        let reg = '/{{s*([^{}s]+)s*}}/'
        let textContent = node.textContent
        console.log('?', textContent)
        if (reg.test(textContent)) {
          console.log('有大括号的表达式')
          //获取数据下标
          let $1 = RegExp.$1
          //
          let rData = this.$options.data[$1]
          console.log(rData)
          //将数据渲染到视图
          node.textContent = node.textContent.replace(reg, rData)
        }
      }
    })
  }
    observe(data) {
        for (let key in data)
            let value = data[key]
        
    }
}
