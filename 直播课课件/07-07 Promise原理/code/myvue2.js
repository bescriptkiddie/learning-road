class Vue{
    constructor(options){
        this.$options = options;
        this._data = options.data;
        this.observer(this._data);
        this.compile();
    }
    observer(data){
        for(let key in data){
            let value = data[key];
            let _this = this;
            let dep = new Dep(); //搜集watcher
            
            Object.defineProperty(data,key,{
                configurable:true,
                enumerable:true,
                get(){
                   console.log("get...",Dep.target); 
                   if(Dep.target){
                    //    搜集watcher
                        dep.addSub(Dep.target);
                   }
                //    console.log(dep);
                console.log("dep "+key,dep);
                   return value;
                },
                set(newValue){
                    console.log("set...");
                    // 发布；
                    // 触发watcher里的update方法；
                    dep.notify(newValue);
                    // let event = new CustomEvent(key,{
                    //    detail: newValue
                    // });
                    // _this.dispatchEvent(event)
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
        // console.log("compile...")
        let childNodes = ele.childNodes;
        // console.log(childNodes);
        childNodes.forEach(node=>{
            // console.log(node);
            // 文本  元素节点;
           if( node.nodeType ===1){
             //    元素节点
            let attrs = node.attributes;
            // console.log(attrs);
            [...attrs].forEach(attr=>{
                // console.log(attr);
                let attrName = attr.name;
                let attrValue = attr.value;
                // console.log(attrName,attrValue);
                if(attrName==="v-text"){
                    node.innerText = this._data[attrValue];
                }else if(attrName==="v-html"){
                    node.innerHTML = this._data[attrValue];
                }else if(attrName==="v-model"){
                    node.value = this._data[attrValue];
                    node.addEventListener("input",e=>{
                        // console.log(e.target.value);
                        // 触发视图更新
                        this._data[attrValue] = e.target.value;
                    })
                }

            })


           
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
                // this.addEventListener($1,e=>{
                //     console.log("自定义事件",e.detail);
                //     // 重新渲染模板；获取新值；
                //     let oldValue = this._data[$1];
                //     let newValue = e.detail;
                //     let reg = new RegExp(oldValue);
                //     node.textContent = node.textContent.replace(reg,newValue);
                // })
                // 实例化watcher --> 重新编译模板
                // console.log("watcher....")
                new Watcher(this._data,$1,(newValue)=>{
                    // console.log("cb...",newValue)
                    // 更新视图逻辑
                    let oldValue = this._data[$1];
                    let reg = new RegExp(oldValue);
                    node.textContent = node.textContent.replace(reg,newValue);
                });
            }
           }
        })
    }
}

// 依赖收集器
class Dep{
    constructor(){
        this.subs = [];
    }
    addSub(sub){
        this.subs.push(sub);
    }
    // 发布；
    notify(newValue){
        this.subs.forEach(sub=>{
            sub.update(newValue);
        })
    }
}

// 订阅者；
class Watcher{
    constructor(data,key,cb){
        // console.log(11,this);
        Dep.target = this;
        // 触发get 添加到dep里；
        data[key];
        this.cb = cb; 
        // Dep.target = null
    }
    update(newValue){
        console.log("update...")
        this.cb(newValue);
    }
}

// 作业： 在我的基础上实现 v-html 指令功能；
