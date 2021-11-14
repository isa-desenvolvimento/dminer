<template>
  <transition name="modal">
    <widget-modal
      v-if="showModalPrimary"
      title="benefícios"
      :onClick="openModal"
      @close="this.$router.push('/')"
    >
      <template v-slot:body>
        <ul>
          <li v-for="(item, key) in getBenefits" :key="key">
            <image-details :image="item.image">
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

import useBenefit from '@/composables/useBenefit'

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
    const { getBenefits } = useBenefit()

    return { getBenefits }
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
