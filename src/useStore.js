import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { defineStore } from "pinia";
import { ref } from "vue";
import { getPost } from "./service";

const initState = {
  author: ''
}

function reducer(state, action) {
  switch (action.type) {
    case 'update-author':
      return { ...state, author: action.payload }
    default:
      throw new Error('unknown action type')
  }
}

export const useStore = defineStore('post', () => {
  const state = ref(initState)
  const count = ref(0)
  function dispatch(action) { state.value = reducer(state.value, action) }

  useQuery({
    queryKey: ['post', count],
    queryFn: () => getPost(1),
    onSuccess: (value) => {
      dispatch({ type: 'update-author', payload: value.author})
    },
  })

  const { mutant } = useMutation({
    mutationFn: () => updatePostAuthor(1, 'John'),
    onSuccess: () => {
      count.value += 1
    }
  })


  return { state, dispatch, mutant }
})
