import Vue from 'vue'

Vue.component('todo-creator', {
    data: function () {
        return {
            text: '',
            hasError: false
        }
    },
    template: `
        <div>
            <input type="text" v-model="text" @keyup.shift.enter="addTask()"/>
            <span v-if="hasError">入力してちょ</span>
        </div>
    `,
    methods: {
        addTask: function (e) {
            if (!this.text) {
                this.hasError = true
                return
            }
            let task = {
                id: this.createHashId(),
                text: this.text,
                done: false
            }
            this.text = ''
            this.hasError = false
            this.$emit('callback-add-task', task)
        },
        createHashId: function () {
            // MDIPxY9wt05HMMdgzIj2CCWiYVnJTs5Pp
            return Math.random().toString(36).slice(-16)
        }

    }

})
