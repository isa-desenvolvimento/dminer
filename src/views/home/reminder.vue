<template>
  <widget-layout-home
    layout="icon-folder-reminder"
    title="lembrete"
    classContent="folder__reminder__content"
    :onClick="openModal"
  >
    <ul>
      <li
        class="reminder_li"
        v-for="(item, key) in $store.state.home.reminderList"
        :key="key"
        :id="`reminder_li_${key}`"
      >
        <Title>
          {{ item.reminderDescrible }}
        </Title>
      </li>
    </ul>
  </widget-layout-home>

  <transition name="modal">
    <widget-modal
      v-if="showModal"
      layout="icon-modal-folder"
      :title="'cadastro de lembrete'"
      @close="showModal = false"
    >
      <template v-slot:body>
        <div class="form_container">
          <div class="form_container_text">
            <fild-input
              :text="'Lembrete'"
              v-model="value.reminder"
              :value="value.reminder"
              required
              :isError="isError && !value.reminder"
            />

            <fild-date
              :text="'Data e hora'"
              v-model="value.dataHora"
              :value="value.dataHora"
              required
              :isError="isError && !value.dataHora"
            />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <send
          :isLoading="isLoading"
          :isSuccess="isSuccess"
          :isError="isError"
          @click="sendForm"
        ></send>
      </template>
    </widget-modal>
  </transition>
</template>

<script>
import WidgetLayoutHome from '@/components/widget/WidgetLayoutHome.vue'
import WidgetModal from '@/components/widget/WidgetModal.vue'
import Send from '@/components/button/Send.vue'
import FildDate from '@/components/input/FildDate.vue'
import FildInput from '@/components/input/Fild.vue'
import IconBase from '@/components/icons/IconBase.vue'

import Title from '@/components/title/Title.vue'

import useReminder from '@/composables/useReminder.js'
import { dateHourFormart } from '@/util/date.js'

export default {
  data() {
    return {
      showModal: false,
      value: {
        dataHora: new Date(),
        reminder: ''
      },
      isLoading: false,
      isSuccess: false,
      isError: false
    }
  },
  setup() {
    const { updateCount, create } = useReminder()

    return { dateHourFormart, updateCount, create }
  },
  methods: {
    sendForm() {
      this.isLoading = true
      if (this.validForm()) {
        let result
        if (this.isEdit) {
          result = this.create(this.value)
        } else {
          result = this.create(this.value)
        }

        this.isLoading = false
        if (result) {
          this.isSuccess = true
          setTimeout(() => {
            this.isSuccess = false
            this.$emit('close')
          }, 3000)
        }
      } else {
        this.isLoading = false
        this.isError = true
        setTimeout(() => {
          this.isError = false
        }, 3000)
      }
    },
    validForm() {
      this.value.idUser = parseInt(localStorage.idUser)
      return Object.values(this.value).every((item) => !!item)
    },
    openModal() {
      this.showModal = true
    }
  },
  components: {
    WidgetLayoutHome,
    Title,
    WidgetModal,
    Send,
    FildDate,
    FildInput,
    IconBase
  }
}
</script>

<style scoped>
.folder__reminder__content {
  width: 108%;
  margin-left: -12px;
}
ul {
  list-style-type: none;
}
li {
  height: 15vh;
  margin-bottom: 1.6rem;
  width: 90%;
  padding: 1rem;
}

.reminder_footer {
  display: inline-grid;
  text-transform: uppercase;
}

.form_container {
  display: grid;

  width: 100%;
  height: 100%;
  margin: auto;
  justify-items: stretch;
  padding: 2rem;

  width: 80%;
  margin: auto;
}

.form_container_text {
  display: grid;
  grid-template-columns: 45% 45%;
  grid-gap: 10%;
}
</style>
