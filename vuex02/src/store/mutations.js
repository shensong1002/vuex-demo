import * as types from './mutation-types.js'

const mutations = {
    [types.SET_INCREMENT](state) {
        state.count++
        state.history.push('增加')
    },
    [types.SET_DECREMENT](state) {
        state.count--
        state.history.push('减小')
    }
}

export default mutations