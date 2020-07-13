console.log("a模块");
define(["b"], function (obj) {
    console.log(obj);
    return {
        name: "amodule"
    }
})