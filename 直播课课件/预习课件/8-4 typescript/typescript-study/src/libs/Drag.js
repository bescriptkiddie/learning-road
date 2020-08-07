
export default class Drag {
    

    constructor(
        el
    ) {

        this.el = el;
        this.x = 0;
        this.y = 0;
        this.isDrag = false;

        this.down();
        this.move();
        this.up();
    }

    down() {
        this.el.addEventListener('mousedown', e => {
            this.isDrag = true;

            this.x = e.clientX - this.el.offsetLeft;
            this.y = e.clientY - this.el.offsetTop;
        });
    }

    move() {
        document.addEventListener('mousemove', e => {
            if (this.isDrag) {
                this.el.style.left = e.clientX - this.x + 'px';
                this.el.style.top = e.clientY - this.y + 'px';
            }
        })
    }

    up() {
        document.addEventListener('mouseup', e => {
            this.isDrag = false;
        })
    }

}