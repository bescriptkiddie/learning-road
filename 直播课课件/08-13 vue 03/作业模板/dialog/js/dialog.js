Vue.component('kkb-dialog', {
  props: {
    title: { type: String, default: '' },
    visible: { type: Boolean, default: false },
  },
  template: `
        <div class="dialog" v-show="visible">
            <div class="dialog-header">
                <span class="dialog-title">{{title}}</span>
                <i class="dialog-close" @click="close">x</i>
            </div>
            <div class="dialog-body">
                <slot></slot>
            </div>
        </div>
    `,
  methods: {
    close() {
      this.$emit('update:visible', false)
    },
  },
  watch: {
    visible() {
      this.$emit(this.visible ? 'open' : 'close')
    },
  },
})
