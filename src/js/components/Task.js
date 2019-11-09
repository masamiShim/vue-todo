import Vue from 'vue'

Vue.component('task', {
    props: ['todo'],
    data: function () {
        return {
            editable: false,
            hasError: false
        }
    },
    template: `
    <li>
        <i :style="todo.done ? 'done' : 'undone'">b</i>
            <input v-if="editable" type="text" @keyup.shift.enter="changeTask()" v-model="todo.text"/>
            <span v-else-if="!editable" @click="toggleInput()">{{todo.text}}</span>
            <span v-if="hasError">入力してくださいよー</span>
        <i @click="$emit('callback-remove',todo.id)">a</i>
    </li>
    `,
    methods: {
        toggleInput: function () {
            this.editable = true
        },
        changeTask: function () {
            if (!this.todo.text) {
                this.hasError = true
                return
            }
            this.hasError = false
            this.editable = false
        }
    }
})