<template>
  <div class="w-32 mx-auto py-32">
    <p>{{store.state.author}}</p>
    <button @click="store.mutant">mutant</button>
  </div>
</template>

<script setup>
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';
import { computed, onMounted, ref } from 'vue';
import { getPost, updatePostAuthor } from './service'
import { useStore } from './useStore'

const store = useStore()






// onMounted(async () => {
//   const data = await getPost(1)
//   author.value = data.author
// })
</script>
