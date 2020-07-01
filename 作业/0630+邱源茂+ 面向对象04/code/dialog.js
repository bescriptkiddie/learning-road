// import MyEvent from './myEvent.js';

export default class Dialog extends EventTarget{
    constructor({ width = "40%", height="250px",title="默认标题",content="默认内容11",dragable=true,maskable=true,isCancel=false,cancel=function(){},success=function(){}}) {
        super();
        // console.log(options);
        // 作业：通过默认参数合并配置；
        //   let { width = "40%", height="250px",title="默认标题",content="默认内容11",dragable=true,maskable=true,isCancel=false,cancel=function(){},success=function(){}} =  options;
        // 默认配置；
        // let opts = {
        //     width: "30%",
        //     height: "250px",
        //     title: "测试标题",
        //     content: "测试内容",
        //     dragable: true, //是否可拖拽
        //     maskable: true, //是否有遮罩
        //     isCancel: false, //是否有取消
        //     cancel:function(){},
        //     success:function(){}
        // }
        // // 合并配置；
        // let newOpts = Object.assign(opts, options);
        this.newOpts = {
            width,height,title,content,dragable,maskable,isCancel,cancel,success
        };
        //   console.log(newOpts);
        this.init();
    }
    init() {
        this.createHtml();
        if(!this.newOpts.maskable){
            this.dialogEle.querySelector(".k-wrapper").style.display = "none";
        }
        // 控制是否拖拽
        if(this.newOpts.dragable){
            this.drag();
        }

        // 绑定自定义事件
        // this.addEvent("success",this.newOpts.success)
        this.addEventListener("success",this.newOpts.success);

        // 绑定关闭事件；
        // this.dialogEle.querySelector(".k-close").onclick = ()=>{
        //     // console.log(1111);
        //     this.close();
        // }
        // this.dialogEle.querySelector(".k-default") && (this.dialogEle.querySelector(".k-default").onclick = ()=>{
        //     this.close();
        // })
        
        // 事件委托；
        let kdialog = this.dialogEle.querySelector(".k-dialog");
        kdialog.addEventListener("click",e=>{
            // console.log(e);
            let className = e.target.className;
            // console.log(className);
            switch(className){
                case 'k-close':
                    this.close();
                    this.newOpts.cancel();
                    break;
                case 'k-default':
                    this.close();
                    this.newOpts.cancel();
                    break;
                case 'k-primary':
                    this.close();
                    // this.newOpts.success();
                    this.sure();
                    break;
                default:
                    console.log("未点中");
                    break;
            }
        })
    }
    sure(value){
        // this.trigger("success");
        this.dispatchEvent(new CustomEvent("success",{
            detail:value
        }));
    }
    createHtml() {
        let dialogEle = document.createElement("div");
        dialogEle.innerHTML = `<div class="k-wrapper"></div>
        <div class="k-dialog" style="width:${this.newOpts.width};height:${this.newOpts.height}">
            <div class="k-header">
                <span class="k-title">${this.newOpts.title}</span><span class="k-close">X</span>
            </div>
            <div class="k-body">
                <span>${this.newOpts.content}</span>
            </div>
            <div class="k-footer">
                ${this.newOpts.isCancel ? '<span class="k-default">取消</span>' : ''}
                <span class="k-primary">确定</span>
            </div>
        </div>`;
        dialogEle.style.display = "none";
        this.dialogEle = dialogEle;
        document.querySelector("body").appendChild(dialogEle);
    }
    open() {
        this.dialogEle.style.display = "block";
    }
    close(){
        this.dialogEle.style.display = "none";
    }
    drag(){
        // 实现拖拽逻辑
        let kDialog = this.dialogEle.querySelector(".k-dialog");
        kDialog.onmousedown = e=>{
            let x = e.clientX - kDialog.offsetLeft;
            let y = e.clientY - kDialog.offsetTop;
            kDialog.onmousemove = e=>{
                let xx = e.clientX - x;
                let yy = e.clientY - y;
                kDialog.style.left = xx + "px";
                kDialog.style.top = yy + "px";
            }
        }
        kDialog.onmouseup = ()=>{
            kDialog.onmousemove = "";
        }
    }
}

export class ExtendsDialog extends Dialog{
    constructor(options){
        super(options);
    }
    createHtml(){
        super.createHtml();
        let myinput = document.createElement("input");
        myinput.classList.add("input-inner");
        this.myinput = myinput;
        this.dialogEle.querySelector(".k-body").appendChild(myinput);
    }
    sure(){
        let value = this.myinput.value;
        // console.log(value);
        super.sure(value);
    }
}


class ShowDialog extends HTMLElement{
    constructor(){
        super();
        // console.log(this);
        this.innerHTML = `<button>${this.innerText}</button>`;
        let dialog = new Dialog({
            title:this.title,
            success:e=>{
                // console.log("success")
                this.dispatchEvent(new CustomEvent("confim"));
            }
        })
        this.onclick = ()=>{
            dialog.open();
        }
    }
    // 属性；
    get title (){
        return this.getAttribute("title") || "默认标题"
    }
    get width(){
        return this.getAttribute("width") || "30%"
    }
}

customElements.define("show-dialog",ShowDialog)




