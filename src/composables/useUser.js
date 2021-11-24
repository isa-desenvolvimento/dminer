import { ref, onMounted } from 'vue'
import {
  fetchUser,
  fetchUpdate,
  fetchCreateUser,
  fetchAvatar
} from '@/api/user'

import { getBase64 } from '@/util/convertBase64'

export default function useUser() {
  // const getUser = ref([])

  const getAvatar = async (id) => {
    const file = await fetchAvatar(id)

    if (file) {
      let image = btoa(
        new Uint8Array(file).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      )
      return `data:${response.headers[
        'content-type'
      ].toLowerCase()};base64,${image}`
    }
  }

  // const createUser = async (user) => {
  //   return await fetchCreateUser(user)
  // }

  // const update = async (user) => {
  //   return await fetchUpdate(user)
  // }

  return {
    // setUser,
    // getUser,
    // createUser,
    // update,
    getAvatar
  }
}
