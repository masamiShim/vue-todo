import Vue from 'vue'
import {Task} from './Task'
import _ from 'lodash'

Vue.component('todo-list', {
    props: ['todos'],
    template: `
    <div>
        <ul>
                <task v-for="todo in todos" v-bind:key="todo.id" v-bind:todo="todo" v-on:callback-remove="callbackRemove"/>
        </ul>
    </div> 
    `,
    methods: {
        callbackRemove(id) {
            this.$emit('callback-remove', id)
        }
    }
})