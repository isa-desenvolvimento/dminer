import { fetchAvatar } from '@/api/user'

import { getBase64 } from '@/util/convertBase64'

export default function useUser() {
  const getAvatar = async (id) => {
    const user = JSON.parse(localStorage.user)

    const file = await fetchAvatar(id)
    if (file) {
      const base64 = await getBase64(file)
      user.avatar = base64

      localStorage.user = JSON.stringify(user)
      return base64
    }
  }

  return {
    getAvatar
  }
}
