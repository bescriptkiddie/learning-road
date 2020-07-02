class Jq{
    constructor(arg,root){
        if(typeof root !== 'undefined'){
            this['prevObject'] = root;
        }else{
            this['prevObject'] = [document];
        }
        // 情况一
        if(typeof arg==="string"){
            let eles =  document.querySelectorAll(arg);
            //    console.log(eles);
            //    console.log(ele);
                // this.ele = ele;
                // this.eles = eles
                this.addEles(eles);
                // 情况二
        }else if(typeof arg==="function"){
            window.addEventListener("DOMContentLoaded",arg);
        }else{
            // 情况三： 传入的原生对象
            // 一个dom对象  、 多个dom对象；
            if(typeof arg.length === 'undefined'){
                // console.log("obj")
                // 一个对象；
                this[0] = arg;
                this.length = 1;
            }else{
                // 多个对象；
                this.addEles(arg);
            }
        }
    }
    addEles(eles){
        eles.forEach((ele,index)=>{
            this[index] = ele;
        })
        this.length = eles.length;
    }
    get(index){
        return this[index];
    }
    eq(index){
        // return this[index];
        // 保存上次操作的节点；
        return new Jq(this[index],this);
    }
    end(){
        return this['prevObject'];
    }
    click(fn){
        console.log("click...");
        // console.log("click....");
        // fn();
        // this.ele.addEventListener("click",fn);
        //在this 对象上 分别绑定 事件；
        this.addEvent("click",fn);
        return this;
    }
    on(eventName,fn){
        this.addEvent(eventName,fn);
    }
    addEvent(evnetName,fn){
        for(let i=0;i<this.length;i++){
            // console.log(111);
            this[i].addEventListener(evnetName,fn);
        }
    }
    css(...arg){
        // 不定参；
        // arguments
        if(arg.length===1){
            if(typeof arg[0] === 'string'){
                // 情况一
                // 获取样式；
               return this.getStyle(this[0],arg[0]);
            }else{
                // 传入对象 ； 情况三 :设置样式
                for(let i=0;i<this.length;i++){
                    for(let j in arg[0]){
                        this.setStyle(this[i],j,arg[0][j]);
                    }
                }
            }

        }else{
            // 情况二 设置样式；
            for(let i=0;i<this.length;i++){
                this.setStyle(this[i],arg[0],arg[1]);
            }
        }
    }
    getStyle(ele,styleName){
       return  getComputedStyle(ele,null)[styleName];
    }

    setStyle(ele,styleName,styleValue){
        if(typeof styleValue === "number"){
            styleValue = styleValue + "px";
        }
        ele.style[styleName] = styleValue;
    }
    // animate动画函数
    // json属性变化, interval改变的时间间隔 ,acceleration变化速度,fn执行回调
    animate(json, interval, acceleration, fn) {
        for(let i=0;i<this.length;i++){
            let ele = this[i]
            //确保对象之前没有设置定时器
            clearInterval(ele.timer);
            ele.timer = setInterval(() =>{
                //flag 用于清除定时器 style 当前属性值
                let flag = true;
                let style;
                for(let styleName in json) {
                    style = parseInt(this.getStyle(ele, styleName));
                    console.log(style);
                    // target需要达到的目标属性,speed 当前速度,
                    let target =  parseInt(json[styleName])
                    let speed = (target - style) * acceleration;
                    speed = speed > 0 ? Math.ceil(speed): Math.floor(speed);
                    // 判断是否达到目标值
                    if(style != target){
                        flag = false;
                    }
                    //当前像素
                    ele.style[styleName] = style + speed + "px";
                    console.log(ele.style[styleName]);
                }
                //达到目标值,清除定时器
                if(flag){
                    clearInterval(ele.timer);
                    if(fn){
                        fn();
                    }
                }
            },interval);
        }
    }
}

// {0:"值一",1:"值二"};

function $(arg){
    // console.log(arg);
    return new Jq(arg);
}

// export default $

