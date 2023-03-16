import { defineStore } from 'pinia'


export const userAccountStore = defineStore('user', {
    state:() => ({username: 'huy', password: '123'})
})
