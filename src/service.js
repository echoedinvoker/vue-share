import axios from "axios"

export async function getPost(id) {
  const { data } = await axios.get(`/posts/${id}`)

  return data
}

export async function updatePostAuthor(id, name) {
  await axios.patch(`/posts/${id}`, { author: name })
}
