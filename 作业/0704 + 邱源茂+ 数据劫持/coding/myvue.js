class Vue {
  constructor(options) {
    this.$options = options
    this.complie()
  }
  complie() {
    let ele = document.querySelector(this.$options.el)
    this.complieNodes(ele)
  }
  complieNodes(ele) {
    let childNodes = ele.childNodes
    console.log(childNodes)
    childNodes.forEach((node) => {
      console.log(node)
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
          console.log('有大括号表达式!')
          // 获取下标分组  -->()里面的
          let $1 = RegExp.$1
          // console.log($1)
          let rData = this.$options.data[$1]
          // console.log(rData)
          console.log(textContent)
          //将数据渲染到视图  reg 还可以作为参数在replace内用
          node.textContent = node.textContent.replace(reg, rData)
        }
      }
    })
  }
}
