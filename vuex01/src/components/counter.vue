<template>
  <div class="counter">
    <p>{{$store.state.count}} {{evenOrOdd}}</p>
    <button class="btn" @click="increment">+</button>
    <button class="btn" @click="decrement">-</button>
    <button class="btn" @click="incrementOdd">当为奇数时，点击增加</button>
    <button class="btn" @click="incrementAsync">点击1s后增加</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementOdd',
    'incrementAsync'
  ])
}
</script>

<style scoped>
.counter button {
  margin-right: 10px;
}
</style>
