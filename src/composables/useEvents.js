import { ref, onMounted, watch } from 'vue'
import {
  fetchEvents,
  fetchEventsByYear,
  fetchEventsByMonth,
  fetchEventsByDate,
  fetchEventsInBetween
} from '@/api/events'

export default function useEvents(
  getYearRef = null,
  getMonthRef = null,
  getDayRef = null,
  getToggleRef = null
) {
  const getEvents = ref([])
  const getEventsByYear = ref([])
  const getEventsByMonth = ref([])
  const getEventsByDate = ref([])
  const getEventsInBetween = ref([])

  const startDateRef = ref('')
  const endDateRef = ref('')

  const setEvents = async () => {
    getEvents.value = await fetchEvents()
  }

  const setEventsByYear = async () => {
    getEventsByYear.value = await fetchEventsByYear(getYearRef.value)
  }

  const setEventsByMonth = async () => {
    getEventsByMonth.value = await fetchEventsByMonth(
      getYearRef.value,
      getMonthRef.value
    )
  }

  const setEventsByDate = async () => {
    getEventsByDate.value = await fetchEventsByDate(
      getYearRef.value,
      getMonthRef.value,
      getDayRef.value
    )
  }

  const setEventsInBetween = async () => {
    getEventsInBetween.value = await fetchEventsInBetween(
      startDateRef.value.split('-'),
      endDateRef.value.split('-')
    )
  }

  onMounted(setEvents)
  onMounted(setEventsByYear)
  onMounted(setEventsByMonth)
  onMounted(setEventsByDate)
  onMounted(setEventsInBetween)

  watch(getYearRef, setEventsByYear)
  watch(getMonthRef, setEventsByMonth)
  watch(getDayRef, setEventsByDate)
  watch(endDateRef, setEventsInBetween)
  watch(getToggleRef, () => {
    setEventsByMonth()
    setEventsInBetween()
  })

  return {
    getEvents,
    getEventsByYear,
    getEventsByMonth,
    getEventsByDate,
    getEventsInBetween,
    startDateRef,
    endDateRef,
    setEvents,
    setEventsByYear,
    setEventsByMonth,
    setEventsByDate,
    setEventsInBetween
  }
}
