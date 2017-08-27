import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? '偶数' : '奇数'
}

const actions = {
    increment({ commit }) {
        commit('increment')
    },
    decrement({ commit }) {
        commit('decrement')
    },
    incrementOdd({ commit, state }) {
        if ((state.count + 1) % 2 === 0) commit('increment')
    },
    incrementAsync({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment')
                resolve()
            }, 1000)
        })
    }
}

const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})