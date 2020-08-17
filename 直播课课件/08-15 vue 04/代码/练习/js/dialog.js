Vue.component('kkb-dialog', {
    props: {
        title: {
            type: String,
            default: ''
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    template: `
        <div class="dialog" v-show="visible">
            <div class="dialog-header">
                <span class="dialog-title">提示</span>
                <i class="dialog-close" @click="close">x</i>
            </div>
            <div class="dialog-body">
                <slot></slot>
            </div>
        </div>
    `,
    // computed: 要产生数据
    // 当组件当某个状态（数据）发生变化以后，需要去做一些事情，那么就可以通过 watch 来实现
    // watch 与 computed ： watch 支持异步任务
    watch: {
        // 根据函数的名称来watch对应的数据
        visible() {
            // console.log(this.visible);
            this.$emit( this.visible ? 'open' : 'close');
        }
    },
    methods: {
        close() {
            this.$emit('update:visible', false);
        }
    }
});