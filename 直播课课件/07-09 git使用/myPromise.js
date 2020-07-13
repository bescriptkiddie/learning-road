class KPromise {
    constructor(handle) {
        this.status = "pending";
        this.value = undefined;
        this.resolvedQueue = [];
        this.rejectedQueue = [];
        handle(this._resolve.bind(this), this._reject.bind(this));
    }
    _resolve(val) {
        // console.log(this);
        // 改变状态及value
        this.status = "resolved";
        this.value = val;
        // console.log(val);
        // 执行then里成功成功的回调
        // console.log(this.resolvedQueue.length);
        let run  = ()=>{
            let cb;
            while(cb=this.resolvedQueue.shift()){
                cb(val);
            }
        }
        // setTimeout(run, 0);
        let observer = new MutationObserver(run)
        observer.observe(document.body,{
            attributes: true
        })
        document.body.setAttribute("kkb",Math.random());
    }
    _reject(err) {
        this.status = "rejected";
        this.value = err;
        // console.log(err);
        // 执行then里失败的回调；
        let run  = ()=>{
            let cb;
            while(cb=this.rejectedQueue.shift()){
                cb(err);
            }
        }
        // setTimeout(run, 0);
        // 模拟微任务；
        let observer = new MutationObserver(run)
        observer.observe(document.body,{
            attributes: true
        })
        document.body.setAttribute("kkb",Math.random());
    }
    then(onResolved, onRejected) {
        // 把多个 onResolved 及 onRejected 放在队列里；
        // if (this.status === "resolved") {
        //     onResolved(this.value);
        // } else if (this.status === 'rejected') {
        //     onRejected(this.value);
        // }
        // 加入队列， 没有执行；
        // this.resolvedQueue.push(onResolved);
        // this.rejectedQueue.push(onRejected);
        // 返还KPromise对象；
        return new KPromise((resolve,reject)=>{
            // 在then里执行的回调
            // let res =   onResolved()
            this.resolvedQueue.push(val=>{

                //把新 的promise对象resolve丢到上一个队列函数
                
                val = onResolved && onResolved(val)
                // val 111 、new KPromise();
                if(val instanceof KPromise){
                    // console.log("promise...",val)
                    // 返还的KPromise对象；
                    // return val;
                    // val.then(resolve);
                    console.log("---",onResolved)
                    val.then(res => {
                        resolve(res);
                    })
                }
                // 返还的普通值；
                resolve(val);
            })
            if(!this.isCatch){
                this.rejectedQueue.push(err=>{
                    onRejected && onRejected(err);
                    reject(err);
                 })
            }
           

            // if(res instanceof KPromise){
            //     console.log("then返还的是KPromise对象那个 ");
            // }
            // resolve(res);
        })


    }

    static resolve(val){
        return new KPromise(resolve=>{
            resolve(val);
        })
    }
    static reject(val){
        return new KPromise((resolve,reject)=>{
            reject(val);
        })
    }
    static all(lists){
        return new KPromise((resolve,reject)=>{
            let arr = [];
            let num = 0;
            for(let i=0;i<lists.length;i++){
                lists[i].then(res=>{
                    // console.log(i);
                    num++;
                    arr.push(res);
                    if(num===lists.length){
                        resolve(arr);
                    }
                },err=>{
                    reject(err);
                    throw Error("error..")
                })
            }
        })
    }

    static race(lists){
        return new KPromise((resolve,reject)=>{
            for(let i=0;i<lists.length;i++){
                lists[i].then(res=>{
                    resolve(res)
                },err=>{
                    reject(err);
                })
            }
        })
    }
    catch(onRejected){
       this.isCatch = true;
       return this.then(undefined,onRejected);
    }
    finally(cb){
    //    console.log(cb); 
        // cb();
        // 一定要把回调放在执行队列里；
        this.then(res=>{
            cb();
        },err=>{
            cb();
        })
    }

}