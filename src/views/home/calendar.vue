<template>
  <folder
    class="mt-3 cursor-move"
    title="calendário"
    id="show-modal"
    :onClick="() => clickCalendar()"
  >
    <div class="container__calendar">
      <calendar />
    </div>
  </folder>
  <transition name="modal">
    <modal v-if="showModal" @close="showModal = false">
      <template v-slot:left>
        <label>Título:</label>
        <input v-model="event.title" placeholder="Nome do evento" />
        <label>Inicio:</label>

        <Datepicker
          locale="'pt-BR'"
          v-model="event.start"
          placeholder="Select date"
        ></Datepicker>

        <label>Fim:</label>

        <Datepicker
          locale="'pt-BR'"
          v-model="event.end"
          placeholder="Select date"
        ></Datepicker>

        <button id="send" class="send" @click="sendEvent">
          <svg viewBox="0 0 90.594 59.714" id="svgbtn">
            <polyline
              class="check"
              fill="none"
              stroke="#FFFFFF"
              stroke-width="10"
              stroke-miterlimit="10"
              points="1.768,23.532 34.415,56.179 88.826,1.768"
            />
          </svg>
          <span>Enviar</span>

          <div class="out">
            <icon-base
              viewBox="0 0 32 32"
              icon-name="icon"
              height="15px"
              width="15px"
            >
              <icon-close />
            </icon-base>
          </div>
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </template>
      <template v-slot:body>
        <EventCalendar />
      </template>
    </modal>
  </transition>
</template>

<script>
import Folder from '@/components/folder/Folder.vue'
import Calendar from '@/components/calendar/Calendar.vue'
import EventCalendar from '@/components/calendar/EventCalendar.vue'
import Modal from '@/components/modal/Modal.vue'
import useEvents from '@/composables/useEvents'

const { getEvents, createEvent, updateEvent, deleteEvent } = useEvents()

import Datepicker from 'vue3-date-time-picker'
import 'vue3-date-time-picker/dist/main.css'
import moment from 'moment'
import { reactive } from 'vue'
import IconClose from '@/components/icons/IconClose.vue'
import IconBase from '@/components/icons/IconBase.vue'

export default {
  data() {
    return {
      showModal: false,
      showDate: new Date()
    }
  },
  setup(props) {
    const event = reactive({
      start: new Date(),
      end: new Date(),
      title: '',
      allDay: true
    })

    return {
      event
    }
  },

  components: {
    Folder,
    Calendar,
    EventCalendar,
    Modal,
    Datepicker,
    IconClose,
    IconBase
  },
  methods: {
    clickCalendar() {
      this.showModal = true
    },
    setShowDate(d) {
      this.showDate = d
    },
    async sendEvent() {
      const btn = document.getElementById('send')

      btn.classList.add('is-loading')
      btn.disabled = true

      const formatStart = moment(this.event.start).format('YYYY-MM-DD hh:mm:ss')
      const formatEnd = moment(this.event.end).format('YYYY-MM-DD hh:mm:ss')

      const result = await createEvent({
        ...this.event,
        start: formatStart,
        end: formatEnd
      })

      if (result.errors.length === 0) {
        btn.classList.add('is-success')
        btn.classList.remove('is-loading')

        setTimeout(() => {
          btn.classList.remove('is-success')
          btn.disabled = false
        }, 2000)
      } else {
        btn.classList.add('is-error')
        btn.classList.remove('is-loading')
        setTimeout(() => {
          btn.classList.remove('is-error')
          btn.disabled = false
        }, 2000)
      }
    }
  }
}
</script>

<style>
.container__calendar {
  padding: 0 1.5rem;
}

input {
  /* background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #ddd;
  outline: none;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  font-size: 0.4rem;
  line-height: 0.5rem;
  padding: 5px 10px;
  color: var(--dp-text-color);
  box-sizing: border-box;
  text-overflow: ellipsis; */

  background-color: transparent;
  border: none;
  border-bottom: 1px solid #231f20;
  outline: none;
  transition: none;
  width: 100%;
  font-size: 0.4rem;
  line-height: 0.5rem;
  padding: 5px 10px;
  color: var(--dp-text-color);
  box-sizing: border-box;
  text-overflow: ellipsis;
}

.dp__input {
  /* background-color: var(--dp-background-color);
  border-radius: 4px;
  border: 1px solid var(--dp-border-color);
  outline: none;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  font-size: 0.4rem;
  line-height: 0.5rem;
  padding: 5px 13px;
  color: var(--dp-text-color);
  box-sizing: border-box; */

  background-color: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #231f20;
  outline: none;
  transition: none;
  width: 100%;
  font-size: 0.4rem;
  line-height: 0.5rem;
  padding: 5px 10px;
  color: var(--dp-text-color);
  box-sizing: border-box;
  text-overflow: ellipsis;
}

.dp__input_icons {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  stroke-width: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 6px 0;
  /* padding: 6px 4px; */
  color: #231f20;
  box-sizing: content-box;
}

.button__primary {
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #231f20;
  outline: none;
  width: 100%;
  color: #231f20;
  font-family: var(--font-family--text);
  font-weight: var(--font-weight--text);
}

.send {
  background: none;
  color: #45981b;
  border: 1px solid #45981b;
  border-radius: 70px;
  box-shadow: 0 0 0 0 rgb(69 152 27 / 50%);
  cursor: pointer;
  font-size: 1rem;
  transition: background, padding 500ms ease-in-out;
  width: 100%;
  font-family: var(--font-family--text);
  position: relative;
}

#svgbtn {
  width: 0;
  height: 0;
}

.is-loading {
  animation: pulse 1.5s infinite;
  margin: auto;
}

.is-loading #svgbtn {
  width: 15px;
  height: 15px;
}

.is-success {
  background: #45981b;
  margin: auto;
}

.is-error {
  background: red;
  margin: auto;
  border: 1px solid red;
  display: flex;
  justify-content: center;
}
.out {
  display: none;
}

.is-error .out {
  display: block;
}

.is-success #svgbtn {
  width: 15px;
  height: 15px;
}

.check {
  stroke-dasharray: 130px 130px;
  stroke-dashoffset: 130px;
  transition: stroke-dashoffset 500ms ease-in-out;
}

.is-loading span,
.is-success span,
.is-error span {
  display: none;
}

.is-loading .lds-ellipsis {
  display: block;
}

.is-success .check {
  stroke-dashoffset: 0px;
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 50px rgba(69, 152, 27, 0);
  }
  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(69, 152, 27, 0);
  }
}

#reset {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: none;
  border: 1px solid white;
  font-size: 14px;
  color: white;
  padding: 5px 20px;
}

.lds-ellipsis {
  display: none;
  position: relative;
  top: -13px;
}

.lds-ellipsis div {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #45981b;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 4px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 4px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
