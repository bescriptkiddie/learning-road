// •obj, 函数的对象
// •json, 数值对，形式{attr：”value”, attr: “value”}，在这里是指要动画对象的运动属性
// •interval, 每执行一次改变的间隔，这里改变的是对象是属性值
// •sp,值变换的速度，使动画具有缓冲效果，而不只是匀速不变（sp为1）的
// •fn, 回调函数，执行完动画之后的行为
function animate(obj, json, interval, sp, fn) {
  clearInterval(obj.timer);

  //分别绑定计时器
  function getStyle(obj, arr) {
      return document.defaultView.getComputedStyle(obj, null)[arr];
  }

  obj.timer = setInterval(function(){
    //flag 用于清除定时器 icur当前px
    let flag = true;
    let icur;
    for(let arr in json) {
      icur = parseInt(getStyle(obj, arr));
      //json[arr]需要达到的px ,icur 当前的px
      let speed = (json[arr] - icur) * sp;
      speed = speed > 0 ? Math.ceil(speed): Math.floor(speed);
      // 判断是否达到目标值
      if(icur != json[arr]){
        flag = false;
      }
        obj.style[arr] = icur + speed + "px";
      console.log(obj.style[arr]);
    }

    if(flag){
      clearInterval(obj.timer);
      if(fn){
        fn();
      }
    }
  },interval);
}
