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
            text: function (trigger) {
                return trigger.getAttribute('dataClipboard')
            },
        })
    },
    methods: {
        stringToBase64(){
            this.base64Data = btoa(this.stringData)
        },
        base64ToString(){
            this.stringData = atob(this.base64Data)
        },
    },
    watch: {}
})
