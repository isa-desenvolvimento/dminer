<template>
  <EventCalendarBar v-model:toggle="toggleRef" v-model:year="yearRef" v-model:month="monthRef" v-model:day="dayRef" v-model:week="weekRef" class="mgY-3" />
  <div v-if="toggleRef === 'yearly'">
    <YearlyCalendar v-model="dateRef" :dayType="'narrow'" :events="getEventsByYear" />
  </div>
  <div v-if="toggleRef === 'monthly'">
    <MonthlyCalendar :dayType="'long'" :events="getEventsByMonth" />
  </div>
  <div v-if="toggleRef === 'weekly'">
    <WeeklyCalendar v-model:start="startDateRef" v-model:end="endDateRef" :dayType="'short'" :events="getEventsInBetween" />
  </div>
  <div v-if="toggleRef === 'daily'">
    <DailyCalendar :dayType="'short'" :events="getEventsByDate" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide, watch } from 'vue'
import { EventCalendarBar, YearlyCalendar, MonthlyCalendar, WeeklyCalendar, DailyCalendar } from 'vidie'
import { useCalendar } from 'alga-vue'
import useEvents from '../composables/useEvents'

export default defineComponent({
  name: 'FullCalendar',
  components: {
    EventCalendarBar,
    YearlyCalendar, 
    MonthlyCalendar, 
    WeeklyCalendar, 
    DailyCalendar
  },
  setup() {
    const toggleRef = ref<string>('')
    const dateRef = ref<string>('')
    
    const yearRef = ref<number>(0)
    const monthRef = ref<number>(0)
    const dayRef = ref<number>(0)
    const weekRef = ref<number>(0)
    
    yearRef.value = new Date().getFullYear() 
    monthRef.value = Number(new Date().getMonth()) + 1
    console.log(Number(new Date().getMonth()) + 1);
    
    dayRef.value = new Date().getDate()


    const { setWeeks, getWeeks, getWeekDays } = useCalendar(yearRef, monthRef, dayRef)
    const { startDateRef, endDateRef, getEventsByYear, getEventsByMonth, getEventsByDate, getEventsInBetween } = useEvents(yearRef, monthRef, dayRef, toggleRef)

    toggleRef.value = 'yearly'
    weekRef.value = getWeeks.value
    startDateRef.value = getWeekDays[0]
    endDateRef.value = getWeekDays[6]

    watch(weekRef, () => {
      setWeeks.value = weekRef.value
      startDateRef.value = getWeekDays[0]
      endDateRef.value = getWeekDays[6]
    })
    
    watch(dateRef, () => {
      const dateArr: string[] = dateRef.value.replace('Z', '').split(/-|:|\s|\.|T/g)
      yearRef.value = Number(dateArr[0]) 
      monthRef.value = Number(dateArr[1]) 
      dayRef.value = Number(dateArr[2])
      toggleRef.value = 'daily'
    })

    provide('year', yearRef)
    provide('month', monthRef)
    provide('day', dayRef)
    provide('week', weekRef)

    return {
      toggleRef,
      dateRef,
      startDateRef,
      endDateRef,
      yearRef,
      monthRef,
      dayRef,
      weekRef,
      getEventsByYear,
      getEventsByMonth,
      getEventsByDate,
      getEventsInBetween
    }
  }
})
</script>
