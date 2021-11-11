<template>
  <transition name="modal">
    <widget-modal
      v-if="showModal"
      layout="icon-modal-folder"
      :title="'cadastro'"
    >
      <template v-slot:body>
        <div class="form_container">
          <fild-input :text="'nome'" />

          <div class="form_container_text">
            <fild-input :text="'data de nascimento'" />
            <fild-input :text="'cargo'" />
            <fild-input :text="'e-mail'" />
            <fild-input :text="'equipe'" />
            <fild-input :text="'apelido'" />
            <fild-input :text="'linkedin'" />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <send></send>
      </template>
    </widget-modal>
  </transition>
</template>
<script>
import FildInput from '@/components/Fild.vue'
import IconBase from '@/components/icons/IconBase.vue'
import IconFrame from '@/components/icons/IconFrame.vue'
import Send from '@/components/button/Send.vue'
import WidgetModal from '@/components/widget/WidgetModal.vue'

export default {
  components: { FildInput, IconFrame, IconBase, Send, WidgetModal },

  props: {
    showModal: { type: Boolean, required: true },
    user: {
      type: String,
      required: false,
      default: {
        dtBirthday: null,
        name: '',
        profile: '',
        team: '',
        nickname: '',
        linkedin: '',
        email: ''
      }
    }
  }
}
</script>

<style scope>
.form_container {
  /* display: grid;
  background-image: url(/src/assets/widget/frame-team.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  margin: auto;
  justify-items: stretch;
  padding: 2rem; */

  width: 80%;
  margin: auto;
}

.form_container_text {
  display: grid;
  grid-template-columns: 45% 45%;
  grid-gap: 10%;
}
</style>
