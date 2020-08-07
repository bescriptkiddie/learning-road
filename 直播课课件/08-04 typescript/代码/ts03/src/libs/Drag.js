"use strict";
exports.__esModule = true;
// 类型标注
var Drag = /** @class */ (function () {
    function Drag(el) {
        this.el = el;
        this.x = 0;
        this.y = 0;
        this.isDrag = false;
        this.down();
        this.move();
        this.up();
    }
    Drag.prototype.down = function () {
        var _this = this;
        this.el.addEventListener('mousedown', function (e) {
            _this.isDrag = true;
            _this.x = e.clientX - _this.el.offsetLeft;
            _this.y = e.clientY - _this.el.offsetTop;
        });
    };
    Drag.prototype.move = function () {
        var _this = this;
        document.addEventListener('mousemove', function (e) {
            if (_this.isDrag) {
                _this.el.style.left = e.clientX - _this.x + 'px';
                _this.el.style.top = e.clientY - _this.y + 'px';
            }
        });
    };
    Drag.prototype.up = function () {
        var _this = this;
        document.addEventListener('mouseup', function (e) {
            _this.isDrag = false;
        });
    };
    return Drag;
}());
exports["default"] = Drag;
