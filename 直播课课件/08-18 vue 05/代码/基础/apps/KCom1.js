
export default {
    template: `
        <div>
            <button @click="getDataByButton">KCom1 组件</button>
        </div>
    `,
    methods: {
        getDataByButton() {
            console.log('this', this);
            this.getData();
        }
    }
}