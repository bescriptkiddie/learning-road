class Vue extends EventTarget{
    constructor(options){
        super();
        this.$options = options;
        this._data = options.data;
        this.observer(this._data);
        this.compile();
    }
    observer(data){
        for(let key in data){
            let value = data[key];
            let _this = this;
            Object.defineProperty(data,key,{
                configurable:true,
                enumerable:true,
                get(){
                   console.log("get..."); 
                   return value;
                },
                set(newValue){
                    console.log("set...");
                    let event = new CustomEvent(key,{
                       detail: newValue
                    });
                    _this.dispatchEvent(event)
                    value = newValue;
                }
            })
        }

    }

    compile(){
        let ele = document.querySelector(this.$options.el);
        this.compileNodes(ele);
    }
    compileNodes(ele){
        let childNodes = ele.childNodes;
        // console.log(childNodes);
        childNodes.forEach(node=>{
            // console.log(node);
            // 文本  元素节点;
           if( node.nodeType ===1){
            //    元素节点
            if(node.childNodes.length>0){
                this.compileNodes(node);
            }
           }else if(node.nodeType===3){
            //    文本
            // 匹配 ”{{}}“的文本
            let reg = /\{\{\s*([^\{\}\s]+)\s*\}\}/g;
            let textContent = node.textContent;
            console.log("??",textContent);
            if(reg.test(textContent)){
                console.log("有大括号表达式");
                // 获取数据的下标
                // RegExp  Function  Object
                let $1 = RegExp.$1;
                // RegExp.$2
                // console.log($1);
               let rData =  this._data[$1];
               console.log(rData);
            //    console.log(this.$options.data);
                //    将数据渲染到视图；
                node.textContent = node.textContent.replace(reg,rData);
                this.addEventListener($1,e=>{
                    console.log("自定义事件",e.detail);
                    // 重新渲染模板；获取新值；
                    let oldValue = this._data[$1];
                    let newValue = e.detail;
                    let reg = new RegExp(oldValue);
                    node.textContent = node.textContent.replace(reg,newValue);
                })
            }
           }
        })
    }
}