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
            <icon-base
              viewBox="0 0 500 58"
              width="100%"
              height="100%"
              class="fild_container_icon"
            >
              <icon-line />
            </icon-base>
          </li>
        </ul>
      </template>
    </widget-modal>
  </transition>
  <form-crud
    :showModal="showModal"
    @close="showModal = false"
    :value="value"
    :isEdit="isEdit"
  />
</template>

<script>
import WidgetModal from '@/components/widget/WidgetModal.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconBase from '@/components/icons/IconBase.vue'
import formCrud from '@/views/documents/form.vue'
import IconLine from '@/components/icons/IconLine.vue'

import useDocument from '@/composables/useDocument'

export default {
  data() {
    return { showModalEquipe: true, showModal: false, value: {}, isEdit: false }
  },
  setup() {
    const { getDocuments } = useDocument()

    return { getDocuments }
  },
  components: {
    WidgetModal,
    formCrud,
    IconEdit,
    IconBase,
    IconLine
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    setDoc(value) {
      this.isEdit = true
      this.value = value
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
  padding: 1.5rem;
  display: flex;
  margin-right: 2rem;
  position: relative;
  margin-top: 1rem;
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

.fild_container_icon {
  position: absolute;
  left: -1rem;
}
</style>
