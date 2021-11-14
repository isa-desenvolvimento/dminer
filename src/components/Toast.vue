<script>
import { createToast } from 'mosha-vue-toastify'
// import the styling for the toast
import 'mosha-vue-toastify/dist/style.css'

export default {
  props: {
    message: { type: String, required: true },
    type: { type: String, required: false, default: 'default' }
  },
  setup(props) {
    const toast = (props) => {
      createToast(this.props.message, {
        position: 'top-right',
        type: this.props.type,
        transition: 'bounce',
        showIcon: 'true',
        hideProgressBar: 'false'
      })
    }
    return { toast }
  }
}
</script>
