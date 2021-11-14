import { createToast } from 'mosha-vue-toastify'

// 'info', 'danger', 'warning', 'success', 'default'

export const onToast = (message, type = 'default') => {
  createToast(message, {
    position: 'top-right',
    type: type,
    transition: 'bounce',
    showIcon: 'true',
    hideProgressBar: 'false'
  })
}
