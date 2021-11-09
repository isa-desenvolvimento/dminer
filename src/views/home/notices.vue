<template>
  <WidgetNotices
    class="mt-3 cursor-move"
    classContent="folder__notification__content"
    id="folder_notices"
    :onClick="openAddNotices"
  >
    <ul>
      <li
        class="notifices_li"
        v-for="(item, key) in noticeList"
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
  </WidgetNotices>

  <transition name="modal">
    <modal v-if="showModal" @close="showModal = false" modal="icon-folder">
      <template v-slot:body></template>
    </modal>
  </transition>
</template>

<script>
import Title from '@/components/title/Title.vue'

import useNotice from '@/composables/useNotice.js'
import debounce from '@/util/debounce.js'
import WidgetNotices from '@/components/widget/WidgetNotices.vue'
import Modal from '@/components/modal/Modal.vue'
import Send from '@/components/button/Send.vue'
import Select from '@/components/Select.vue'

export default {
  data() {
    return {
      index: 0,
      showModal: false,
      priorityList: ['Alta', 'Média', 'Baixa'],
      notice: {
        warning: '',
        date: new Date(),
        priority: 'Média',
        users: []
      }
    }
  },
  setup() {
    const { getNotices } = useNotice()
    const noticeList = getNotices

    return { noticeList }
  },
  components: {
    Notification,
    Title,
    WidgetNotices,
    Modal,
    Send,
    Select
  },
  mounted() {
    const folder = document.getElementById('folder_notices')
    folder.addEventListener('scroll', debounce(this.handleScroll, 100))
  },
  destroyed() {
    const folder = document.getElementById('folder_notices')
    folder.removeEventListener('scroll', debounce(this.handleScroll, 100))
  },
  methods: {
    handleScroll(event) {
      // const notifices_li = document.querySelectorAll('.notifices_li')
      // const folder_notices = document.getElementById('folder_notices')
      // notifices_li.forEach((element, key) => {
      //   console.log(element.getBoundingClientRect().top)
      //   if (element.getBoundingClientRect().top > 200) {
      //     folder_notices.scrollTop =
      //       element.getBoundingClientRect().height + 200
      //   }
      // })
    },
    submit() {
      console.log('submit')
    },
    openAddNotices() {
      this.showModal = true
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
</style>
