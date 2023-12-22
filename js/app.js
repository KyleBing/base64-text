let app = new Vue({
    el: "#app",
    name: "Base64Image",
    data(){
        return {
            base64Data: '',
            stringData: '',
            clipboard: null // clipboard object
        }
    },
    beforeDestroy() {
        if (this.clipboard){
            this.clipboard.destroy()
        }
    },
    mounted() {
        // 绑定剪贴板操作方法
        this.clipboard = new ClipboardJS('.clipboard', {
            text:  (trigger) => {
                return trigger.getAttribute('dataClipboard')
            },
        })
        this.clipboard.on('success', ()=>{  // 还可以添加监听事件，如：复制成功后提示
            console.log('复制成功')
        })
    },
    methods: {
        stringToBase64(){
            this.base64Data = Base64.encode(this.stringData)
        },
        stringToBase642(){
            let onceData = Base64.encode(this.stringData)
            this.base64Data = Base64.encode(onceData)
        },
        base64ToString(){
            this.stringData = Base64.decode(this.base64Data)
        },
        base64ToString2(){
            let onceData = Base64.decode(this.base64Data)
            this.stringData = Base64.decode(onceData)
        },
    },
    watch: {}
})
