import { defineStore } from "pinia";
import { ref } from "vue";


const initState = {
}

function reducer(state, action) {
  switch (action.type) {
    default:
      throw new Error('unknown action type')
  }
}

export const useTableStore = defineStore('table', () => {
  const state = ref(initState)
  function dispatch(action) { state.value = reducer(state.value, action) }

  return { state, dispatch }
})
