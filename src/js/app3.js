import Vue from 'vue'

new Vue({
    el: '#app1',
    data: {
        isShow: 'a'
    }
})

new Vue({
    el: '#app2',
    data: {
        isShow: true
    }
})

new Vue({
    el: '#app3',
    data: {
        isShow: true
    },
    // データの変更を監視しないと前の結果が返ってくる
    // なのでキャッシュされた値と変わらない場合
    // 自プロパティを参照する場合にはcomputed, 参照しない場合はmethods
    computed: {
        showString: function () {
            return (this.isShow) ? Date.now() : 'isShowはfalseです。'
        },
        showString2() {
            return Date.now()
        }
    },
    methods: {
        showStringMethods: function () {
            return (this.isShow) ? Date.now() : 'isShowはfalseです。'
        },
        showStringMethods2() {
            return Date.now()
        }
    }
})


new Vue({
    el: '#app4',
    data: {
        script: '<p style="color:red"> サニタイジングはー？</p>'
    }
})

new Vue({
    el: '#app5',
    data: {
        show: true
    }
})

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button @click="count++"> You click me {{ count }} times</button>'
})
new Vue({
    el: '#app6'
})

Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{title}}</h3>'
})


new Vue({
    el: '#app7'
})


Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{post.title}}</h3>
            <button @click="$emit('enlarge-text')">Enlarge-text</button>
            <div v-html="post.content"></div>
        </div>
    `
})

new Vue({
    el: '#app8',
    data: {
        posts: [
            {
                id: 1,
                title: 'sample post1',
                content: '<p>サンプル投稿1</p>'
            },
            {
                id: 2,
                title: 'sample post2',
                content: '<p>サンプル投稿2</p>'
            },
            {
                id: 3,
                title: 'sample post3',
                content: '<p>サンプル投稿3</p>'
            }
        ],
        postFontSize: 1
    },
    methods: {
        fontSizeScale(){
            this.postFontSize += 0.1
        }
    }
})