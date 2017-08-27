import * as types from './mutation-types.js'

export const increment = ({ commit }) => commit(types.SET_INCREMENT)

export const decrement = ({ commit }) => commit(types.SET_DECREMENT)

export const incrementOdd = ({ commit, state }) => {
    if (state.count % 2 === 1) commit(types.SET_INCREMENT)
}

export const incrementAsync = ({ commit }) => {
    setTimeout(() => {
        commit(types.SET_INCREMENT)
    }, 1000)
}