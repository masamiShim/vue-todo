import Vue from 'vue'

new Vue({
    el: '#app1',
    data: {
        message: 'vueのテンプレート構文。{{}}で囲って処理が書ける'
    }
})

new Vue({
    el: '#app2',
    data: {
        message: 'このページをロードしたのは' + new Date().toLocaleString(),
        classObject: {
            active: true,
            'text-danger': true
        }
    }
})

new Vue({
    el: '#app3',
    data: {
        isShow: true
    }
})

new Vue({
    el: '#app4',
    data: {
        todos: [
            {text: 'v-for使うと'},
            {text: 'こうやってデータやhtmlをループして'},
            {text: '生成できる'}
        ]
    }
})

new Vue({
    el: '#app5',
    data: {
        message: 'hello vue.js'
    },
    methods: {
        changeMessage: function(){
            this.message = this.message + 'を変えちゃった'
        }
    }
})

new Vue({
    el: '#app6',
    data: {
        message: 'input something'
    },
})