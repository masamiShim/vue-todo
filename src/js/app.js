import Vue from 'vue'
import {Search} from './components/Search'
import {TodoList} from './components/TodoList'
import {TodoCreator} from './components/TodoCreator'
import _ from "lodash"
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'


let todoApp = new Vue({
    el: '#app1',
    data: {
        todos: [],
        searchText: ''
    },
    methods: {
        addTask: function (task) {
            this.todos.push(task)
            this.saveRepository(task)
        },
        changedCondition(text) {
            console.log('changedCondition')
            this.searchText = text
        },
        filteredTask: function () {
            console.log('filteredTask')
            return this.searchText ? this.todos.filter(this.filterItem) : this.todos

        },
        filterItem: function (elm) {
            const regexp = new RegExp('^' + this.searchText, 'i')
            return elm.text.match(regexp)
        },
        removeTask: function (id) {
            this.todos = _.reject(this.todos, {'id': id})
            this.removeRepository(id);
        },
        saveRepository: function (task) {
            axios({
                url: 'https://script.google.com/macros/s/AKfycbwiKeRDAb_ivGrlTHNR3uX8dDnSU3YPQkNogqs5cpLyRq8gckPb/exec?action=save',
                method: 'post',
                adapter: jsonpAdapter,
                responseType: 'json',
                callbackParamName: 'callback',
                jsonpCallback: 'callback',
                data: task,
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
            }).then(function (res) {
                console.log(res)
            }).catch(function (err) {
                console.log(err)
            })
        },
        removeRepository: function (id) {
            axios({
                url: 'https://script.google.com/macros/s/AKfycbwiKeRDAb_ivGrlTHNR3uX8dDnSU3YPQkNogqs5cpLyRq8gckPb/exec?action=delete',
                method: 'post',
                adapter: jsonpAdapter,
                responseType: 'json',
                callbackParamName: 'callback',
                jsonpCallback: 'callback',
                data: {id: id},
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
            }).then(function (res) {
                console.log(res)
            }).catch(function (err) {
                console.log(err)
            })
        }
    },
    created: function () {
        axios({
            url: 'https://script.google.com/macros/s/AKfycbwiKeRDAb_ivGrlTHNR3uX8dDnSU3YPQkNogqs5cpLyRq8gckPb/exec',
            method: 'get',
            adapter: jsonpAdapter,
            responseType: 'json',
            callbackParamName: 'callback',
            jsonpCallback: 'callback'
        }).then(function (res) {
            console.log('[success] res -> ' + res.data)
            todoApp.todos = res.data
            console.log(todoApp.todos)
        }).catch(function (error) {
            console.log(error)
            console.log('Error has occurred in get todo')
        })
    }
})