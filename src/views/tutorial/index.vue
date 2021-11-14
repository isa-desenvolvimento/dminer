<template>
  <transition name="modal">
    <widget-modal
      v-if="showModalPrimary"
      title="tutorial"
      :onClick="openModal"
      @close="this.$router.push('/')"
    >
      <template v-slot:body>
        <ul>
          <li v-for="(item, key) in getTutorials" :key="key">
            <image-details :image="item.image" :category="item.category">
              <template v-slot:title>{{ item.title }}</template>
              <template v-slot:content>{{ item.content }}</template>
            </image-details>
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
import formCrud from './form.vue'

import useTutorial from '@/composables/useTutorial'

export default {
  data() {
    return {
      showModalPrimary: true,
      showModal: false,
      value: {},
      isEdit: false
    }
  },
  setup() {
    const { getTutorials } = useTutorial()

    return { getTutorials }
  },
  components: {
    WidgetModal,
    formCrud,
    IconEdit,
    IconBase
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
  width: 90%;
  border-top: 1px solid;
  margin-right: 1rem;
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
