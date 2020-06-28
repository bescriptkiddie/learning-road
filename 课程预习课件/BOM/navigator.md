```javascript
//判断PC
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
```

```javascript
// 判断设备
var ua = navigator.userAgent.toLowerCase();
  if (/android|adr/gi.test(ua)) {
    // 安卓
  } else if (/(i;+;( U;)? CPU.+Mac OS X/gi.test(ua)) {
    //苹果
  }
```

```javascript
// 区分各个浏览器
  var ua = navigator.userAgent.toLowerCase();
  if (/msie/i.test(ua) && !/opera/.test(ua)) {
    alert("IE");
    return;
  } else if (/firefox/i.test(ua)) {
    alert("Firefox");
    return;
  } else if (/chrome/i.test(ua) && /webkit/i.test(ua) && /mozilla/i.test(ua)) {
    alert("Chrome");
    return;
  } else if (/opera/i.test(ua)) {
    alert("Opera");
    return;
  } else if (/webkit/i.test(ua) && !(/chrome/i.test(ua) && /webkit/i.test(ua) && /mozilla/i.test(ua))) {
    alert("Safari");
    return;
  } else {
    alert("unKnow");
  }
```

