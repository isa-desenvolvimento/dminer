<template>
  <transition name="modal">
    <widget-modal
      v-if="showModalEquipe"
      title="d-guide"
      :onClick="openModal"
      @close="this.$router.push('/')"
    >
      <template v-slot:body>
        <ul>
          <li v-for="(item, key) in getDocuments" :key="key">
            <a :href="item.content" target="_blank">
              {{ item.title }}
            </a>
            <button class="team_btn_edit">
              <icon-base
                icon-name="icon"
                class="team_icon_edit"
                @click="setDoc(item)"
              >
                <icon-edit />
              </icon-base>
            </button>
          </li>
        </ul>
      </template>
    </widget-modal>
  </transition>
  <form-documents
    :showModal="showModal"
    @close="showModal = false"
    :doc="doc"
    :isEdit="isEdit"
  />
</template>

<script>
import WidgetModal from '@/components/widget/WidgetModal.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconBase from '@/components/icons/IconBase.vue'
import FormDocuments from './formDocuments.vue'

import useDocument from '@/composables/useDocument'

export default {
  data() {
    return { showModalEquipe: true, showModal: false, doc: {}, isEdit: false }
  },
  setup() {
    const { getDocuments } = useDocument()

    return { getDocuments }
  },
  components: {
    WidgetModal,
    FormDocuments,
    IconEdit,
    IconBase
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    setDoc(doc) {
      this.isEdit = true
      this.doc = doc
      this.openModal()
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  position: relative;
}
li {
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid;
  margin-right: 2rem;
}

a {
  text-decoration: none;
}
.icon_green {
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--sidebar-green-ligth);
}

.team_btn_edit {
  border: none;
  position: absolute;
  right: -1rem;
  width: 24%;
  height: 1rem;
  top: 0.6rem;
  background: transparent;
  cursor: pointer;
}
.team_icon_edit {
  width: 24%;
  height: 1rem;
}

a {
  text-decoration: none;
}
</style>
