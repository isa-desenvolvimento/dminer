<template>
  <widget-layout-home
    layout="icon-notices"
    class="mt-3 cursor-move"
    classContent="folder__notification__content"
    id="folder_notices"
    :onClick="openAddNotices"
  >
    <ul>
      <li
        class="notifices_li"
        v-for="(item, key) in getNotices"
        :key="key"
        :id="`notifices_li_${key}`"
      >
        <Title>
          {{ item.creator }}
        </Title>
        <span class="">{{ item.warning }}</span>
        <div class="notices_footer">
          <span>
            <b>Prioridade:</b>
            {{ item.priority }}
          </span>

          <br />
          <span>
            <b>Data:</b>
            {{ item.date }}
          </span>
        </div>
      </li>
    </ul>
  </widget-layout-home>

  <transition name="modal">
    <widget-modal
      v-if="showModal"
      layout="icon-modal-folder"
      :title="'cadastro de avisos'"
      @close="showModal = false"
    >
      <template v-slot:body>
        <div class="form_container">
          <div class="form_container_text">
            <fild-input
              :text="'Título'"
              v-model="value.warning"
              :value="value.warning"
              required
              :isError="isError && !value.warning"
            />

            <fild-select
              :text="'Prioridade'"
              v-model="value.priority"
              :value="value.priority"
              required
              :isError="isError && !value.priority"
              :options="priorityList"
            />

            <fild-select
              :text="'Usuários'"
              v-model="value.users"
              :value="value.users"
              required
              :isError="isError && !value.users"
              :options="getAllUsers"
              :multiple="true"
            />

            <fild-date
              :text="'Data'"
              v-model="value.date"
              :value="value.date"
              required
              :isError="isError && !value.date"
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
import Title from '@/components/title/Title.vue'
import WidgetModal from '@/components/widget/WidgetModal.vue'
import WidgetLayoutHome from '@/components/widget/WidgetLayoutHome.vue'
import Send from '@/components/button/Send.vue'
import FildDate from '@/components/input/FildDate.vue'
import FildInput from '@/components/input/Fild.vue'
import FildSelect from '@/components/input/FildSelect.vue'

import useNotice from '@/composables/useNotice.js'
import debounce from '@/util/debounce.js'
import useAllUsers from '@/composables/useAllUsers'

export default {
  data() {
    return {
      showModal: false,
      lastScrollTop: 0,
      priorityList: [
        {
          id: 0,
          title: 'Alta'
        },
        {
          id: 1,
          title: 'Média'
        },
        {
          id: 2,
          title: 'Baixa'
        }
      ],
      value: {
        warning: '',
        date: new Date(),
        priority: 'Média',
        users: []
      },
      isLoading: false,
      isSuccess: false,
      isError: false
    }
  },
  setup() {
    const { getNotices, create } = useNotice()
    const { getAllUsers } = useAllUsers()

    return { getNotices, getAllUsers, create }
  },
  components: {
    Title,
    WidgetLayoutHome,
    Send,
    WidgetModal,
    FildInput,
    FildDate,
    FildSelect
  },
  mounted() {
    const folder = document.getElementById('folder_notices')
    folder.addEventListener('scroll', debounce(this.handleScroll), {
      passive: true
    })
  },
  destroyed() {
    const folder = document.getElementById('folder_notices')
    folder.removeEventListener('scroll', debounce(this.handleScroll), {
      passive: true
    })
  },
  methods: {
    handleScroll(e) {
      const folder_notices = document.getElementById('folder_notices')

      if (e.target.scrollTop > this.lastScrollTop) {
        console.log('desceu')
        folder_notices.scrollTop += 200
      } else {
        console.log('subiu')
        // folder_notices.scrollTop -= 200
      }

      this.lastScrollTop = e.target.scrollTop
    },
    submit() {
      console.log('submit')
    },
    openAddNotices() {
      this.showModal = true
    },

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
            this.$router.push('/')
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
      return Object.values(this.value).every((item) => !!item)
    }
  }
}
</script>

<style scoped>
.folder__notification__content {
  width: 108%;
  margin-left: -12px;
}
ul {
  list-style-type: none;
}
li {
  height: 38vh;
}

.notices_footer {
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
