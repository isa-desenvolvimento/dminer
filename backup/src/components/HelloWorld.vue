<template>
  <EventCalendarBar v-model:toggle="toggleRef" v-model:year="yearRef" v-model:month="monthRef" v-model:day="dayRef" v-model:week="weekRef" class="mgY-3" />
  <div v-if="toggleRef === 'yearly'">
    <YearlyCalendar v-model="dateRef" :dayType="'narrow'" />
  </div>
  <div v-if="toggleRef === 'monthly'">
    <MonthlyCalendar :dayType="'long'" />
  </div>
  <div v-if="toggleRef === 'weekly'">
    <WeeklyCalendar v-model:start="startDateRef" v-model:end="endDateRef" :dayType="'short'" />
  </div>
  <div v-if="toggleRef === 'daily'">
    <DailyCalendar :dayType="'short'" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide, watch } from 'vue'
import { EventCalendarBar, YearlyCalendar, MonthlyCalendar, WeeklyCalendar, DailyCalendar } from 'vidie'
import { useCalendar } from 'alga-vue'

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
    const startDateRef = ref<string>('')
    const endDateRef = ref<string>('')
    
    const yearRef = ref<number>(0)
    const monthRef = ref<number>(0)
    const dayRef = ref<number>(0)
    const weekRef = ref<number>(0)
    
    yearRef.value = new Date().getFullYear()
    monthRef.value = Number(new Date().getMonth()) + 1
    dayRef.value = new Date().getDate()
    
    const { setWeeks, getWeeks, getWeekDays } = useCalendar(yearRef, monthRef, dayRef)
    
    toggleRef.value = 'monthly'
    weekRef.value = getWeeks.value
    startDateRef.value = getWeekDays[0]
    endDateRef.value = getWeekDays[6]
    
    watch(weekRef, () => {
      setWeeks.value = weekRef.value
      startDateRef.value = getWeekDays[0]
      endDateRef.value = getWeekDays[6]
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
      weekRef
    }
  }
})
</script>
