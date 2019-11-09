import Vue from 'vue'

Vue.component('search', {
    data: function () {
        return {
            text: ''
        }
    }
    ,
    template: `
        <div>
            <i></i>
                <input type="text" v-model="text" @keyup="$emit('callback-changed-condition', text)"/>
        </div>
    `
})