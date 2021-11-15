<template>
  <widget-layout-home
    layout="icon-folder"
    class="mt-3 cursor-move"
    title="calendário"
    id="show-modal"
    :onClick="() => clickCalendar()"
  >
    <div class="container__calendar">
      <calendar :ref="calendar" />
    </div>
  </widget-layout-home>

  <transition name="modal">
    <widget-modal v-if="showModal" @close="showModal = false">
      <template v-slot:left>
        <label>Título:</label>
        <input
          class="input_calendar"
          v-model="event.title"
          placeholder="Nome do evento"
        />

        <div>
          <label>Inicio:</label>

          <Datepicker
            v-model="event.start"
            placeholder="Select date"
          ></Datepicker>

          <div>
            <icon-base
              viewBox="0 0 500 58"
              width="100%"
              height="100%"
              class="fild_container_icon"
              :class="`container_input_teste`"
            >
              <icon-line></icon-line>
            </icon-base>
          </div>
        </div>

        <label>Fim:</label>

        <Datepicker v-model="event.end" placeholder="Select date"></Datepicker>

        <icon-base
          icon-name="icon"
          viewBox="0 0 500 500"
          width="100%"
          height="100%"
          classe="send"
        >
          <component
            :is="buttonComponent"
            @click="sendEvent"
            id="send"
            class="send"
          >
            <svg viewBox="0 0 90.594 59.714" id="svgbtn">
              <polyline
                class="check"
                fill="none"
                stroke="#000000"
                stroke-width="10"
                stroke-miterlimit="10"
                points="1.768,23.532 34.415,56.179 88.826,1.768"
              />
            </svg>
            <span id="span_send">Enviar</span>
            <div class="out">
              <icon-base
                viewBox="0 0 32 32"
                icon-name="icon"
                width="20%"
                height="20%"
                class="icon_close"
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
          </component>
        </icon-base>
      </template>
      <template v-slot:body>
        <EventCalendar :events="events" />
      </template>
    </widget-modal>
  </transition>
</template>

<script>
import WidgetLayoutHome from '@/components/widget/WidgetLayoutHome.vue'
import WidgetModal from '@/components/widget/WidgetModal.vue'

import Calendar from '@/components/calendar/Calendar.vue'
import EventCalendar from '@/components/calendar/EventCalendar.vue'
import useEvents from '@/composables/useEvents'

const { createEvent, getEvents } = useEvents()

import Datepicker from 'vue3-date-time-picker'
import 'vue3-date-time-picker/dist/main.css'
import moment from 'moment'
import { reactive, ref } from 'vue'
import IconClose from '@/components/icons/IconClose.vue'
import IconBase from '@/components/icons/IconBase.vue'
import IconButtonSend from '@/components/icons/IconButtonSend.vue'
import IconButtonError from '@/components/icons/IconButtonError.vue'
import IconLine from '@/components/icons/IconLine.vue'

export default {
  data() {
    return {
      showModal: false,
      showDate: new Date(),
      events: [],
      buttonComponent: 'icon-button-send'
    }
  },
  setup(props) {
    const calendar = ref([])
    const event = reactive({
      start: new Date(),
      end: new Date(),
      title: '',
      allDay: true
    })

    return {
      event,
      calendar
    }
  },

  components: {
    WidgetLayoutHome,
    WidgetModal,
    Calendar,
    EventCalendar,
    Datepicker,
    IconClose,
    IconButtonSend,
    IconBase,
    IconButtonError,
    IconLine
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
      const span = document.getElementById('span_send')

      btn.classList.add('is-loading')
      span.classList.add('is-none')

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

        this.calendar.value.events = getEvents.value

        setTimeout(() => {
          btn.classList.remove('is-success')
          span.classList.remove('is-none')

          btn.disabled = false
        }, 2000)
      } else {
        btn.classList.add('is-error')
        btn.classList.remove('is-loading')
        this.buttonComponent = 'icon-button-error'

        setTimeout(() => {
          btn.classList.remove('is-error')
          this.buttonComponent = 'icon-button-send'
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

.input_calendar {
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
  /* border-bottom: 1px solid #231f20; */
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
  /* border-bottom: 1px solid #231f20; */
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
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  font-family: var(--font-family--text);
  position: relative;

  margin-top: -13px;
  color: black;
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
  margin: auto;
}

.is-error .send {
  display: none;
  margin-top: -15%;
}

.is-error {
  display: flex;
  justify-content: center;
}

.out {
  display: none;
}

.icon_close {
  width: 20%;
  height: 20%;
  margin-top: -20px;
  margin-bottom: 35px;
  color: #f21d1d;
}

.is-error .out {
  display: block;
  margin-top: -15%;
}

.is-success #svgbtn {
  width: 20%;
  height: 20%;
}

.check {
  stroke-dasharray: 130px 130px;
  stroke-dashoffset: 130px;
  transition: stroke-dashoffset 500ms ease-in-out;
}

.is-none {
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
  top: -50px;
  left: 40%;
}

.lds-ellipsis div {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;

  background: #000000;
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

.fild_container_icon {
  /* position: absolute;
  bottom: 0;
  left: 0;
  /* width: fit-content;

  grid-area: icon;
  transform: rotateY(180deg); */

  transform: rotateY(180deg);
  margin-top: -30px;
  z-index: 3;
}
</style>
