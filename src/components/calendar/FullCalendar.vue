<template>
  <EventCalendarBar
    v-model:toggle="toggleRef"
    v-model:year="yearRef"
    v-model:month="monthRef"
    v-model:day="dayRef"
    v-model:week="weekRef"
    class="mgY-3"
  />
  <div v-if="toggleRef === 'yearly'">
    <YearlyCalendar
      v-model="dateRef"
      :dayType="'narrow'"
      :events="getEventsByYear"
    />
  </div>
  <div v-if="toggleRef === 'monthly'">
    <MonthlyCalendar :dayType="'long'" :events="getEventsByMonth" />
  </div>
  <div v-if="toggleRef === 'weekly'">
    <WeeklyCalendar
      v-model:start="startDateRef"
      v-model:end="endDateRef"
      :dayType="'short'"
      :events="getEventsInBetween"
    />
  </div>
  <div v-if="toggleRef === 'daily'">
    <DailyCalendar :dayType="'short'" :events="getEventsByDate" />
  </div>
</template>

<script lang="js">
import { defineComponent, ref, provide, watch } from 'vue'
import {
  EventCalendarBar,
  YearlyCalendar,
  MonthlyCalendar,
  WeeklyCalendar,
  DailyCalendar
} from 'vidie'
import { useCalendar } from 'alga-vue'
import useEvents from '@/composables/useEvents'

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
    const toggleRef = ref('')
    const dateRef = ref('')

    const yearRef = ref(0)
    const monthRef = ref(0)
    const dayRef = ref(0)
    const weekRef = ref(0)

    yearRef.value = new Date().getFullYear()
    monthRef.value = Number(new Date().getMonth()) + 1
    dayRef.value = new Date().getDate()

    const { setWeeks, getWeeks, getWeekDays } = useCalendar(
      yearRef,
      monthRef,
      dayRef
    )
    const {
      startDateRef,
      endDateRef,
      getEventsByYear,
      getEventsByMonth,
      getEventsByDate,
      getEventsInBetween
    } = useEvents(yearRef, monthRef, dayRef, toggleRef)

    toggleRef.value = 'monthly'
    weekRef.value = getWeeks.value
    startDateRef.value = getWeekDays[0]
    endDateRef.value = getWeekDays[6]

    watch(weekRef, () => {
      setWeeks.value = weekRef.value
      startDateRef.value = getWeekDays[0]
      endDateRef.value = getWeekDays[6]
    })

    watch(dateRef, () => {
      const dateArr = dateRef.value.replace('Z', '').split(/-|:|\s|\.|T/g)
      yearRef.value = Number(dateArr[0])
      monthRef.value = Number(dateArr[1])
      dayRef.value = Number(dateArr[2])
      toggleRef.value = 'daily'
    })

    provide('year', yearRef)
    provide('month', monthRef)
    provide('day', dayRef)
    provide('week', weekRef)

    debugger

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

<style>
.gridItemsCenter {
  justify-items: center;
}

.flexBetween {
  display: flex !important;
  justify-content: space-between !important;
}

.dark > div > .bd-1 {
  border: 1px var(--bdStyle, solid) var(--bdColor, rgba(227, 228, 229));
}

.bdSolid {
  /* border-style: solid; */
  border-style: ridge;
}

.btnGroup > .btn:not(:last-child):not(.picker-toggler),
.btnGroup > .btnGroup:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  color: var(--txtButton, #212529);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  background-color: var(--bgButton, transparent);
  border: none;
  /* border-radius: 0.25rem;
  border-radius: var(--rdButton, 0.25rem); */
  font-size: 0.5rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

.btn.active {
  color: #000;
  background-color: rgba(0, 0, 0, 0.125);
}

.bdOpacity-2 {
  --bdOpacity: 0.2 !important;
}

.bdEnd-0 {
  border-right-width: 0;
  border-bottom-width: 0;
}

.bdStart-1 {
  border-top-width: 1px;
  border-left-width: 1px;
}

.gridItemsCenter {
  justify-items: center;
}
.dark > .gridColumns-7 {
  display: grid;
  grid-template-columns: repeat(7, 13%);
  grid-template-rows: 7% repeat(5, 4.5%);
}
.modal-body > div > .dark > .gridColumns-7 {
  display: grid;
  grid-template-columns: repeat(7, 18%);
  grid-template-rows: 2% repeat(7, 3%);
}

/* foreignObject
  > div
  > div:nth-child(2)
  > div
  > div
  > div:nth-child(2)
  > div.dark
  > div > gridColumns-7 {
  display: grid;
  grid-template-columns: repeat(7, 19%);
} */

.gap-8 {
  gap: 0.3rem;
}
.gridColumns-4 {
  display: grid;
  /* grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: 2% repeat(7, 2%); */
  grid-template-columns: repeat(4, 30%);
  grid-template-rows: repeat(7, 14%);
}

.bdEnd-1 {
  border-right-width: 1px;
  border-bottom-width: 1px;
}
.bdStart-0 {
  border-top-width: 0;
  border-left-width: 0px;
  font-size: 0.4rem;
}

.alignCenter,
.txtCenter {
  text-align: center !important;
}

.eventNone {
  pointer-events: none !important;
}
.selectionNone {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}

.dark {
  width: inherit;
  height: inherit;
  font-size: 0.3rem;
}

.wd-100 {
  width: 100% !important;
}

.mgY-1 {
  margin-top: 0.1rem !important;
  margin-bottom: 0.1rem !important;
}

.txtGray {
  color: rgba(var(--rgbGray), var(--txtOpacity, 1));
}

.mgY-3 {
  margin-top: 0.75rem !important;
  margin-bottom: 0.75rem !important;
}

.itemsCenter {
  align-items: center !important;
}

.flexBetween {
  display: flex !important;
  justify-content: space-between !important;
}
.btnGroup {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  border: solid 1px;
  border-radius: 3px;
}

.btnGroup > .btn:not(:last-child):not(.picker-toggler),
.btnGroup > .btnGroup:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.bd-1 {
  /* border: 1px var(--bdStyle, solid) var(--bdColor, rgba(227, 228, 229)); */
  border-left: solid 1px;
  border-radius: 0;
  line-height: normal;
}

.bd-1:first-child {
  /* border: 1px var(--bdStyle, solid) var(--bdColor, rgba(227, 228, 229)); */
  border-left: none;
  line-height: normal;
}

.itemsCenter {
  align-items: center !important;
}

.flexCenter {
  display: flex !important;
  justify-content: center !important;
}

/* grid week*/

.bdBottom-1 {
  border-bottom: 1px var(--bdStyle, solid) var(--bdColor, rgba(227, 228, 229));
}
.bdRight-0 {
  border-right: 0;
}
.alignCenter,
.txtCenter {
  text-align: center !important;
}
.bdBlack {
  border-color: rgba(var(--rgbBlack), var(--bdOpacity, 1));
}

div {
  display: block;
}

.bdX-0 {
  border-left-width: 0;
  border-right-width: 0;
}
.bdDashed {
  border-style: dashed;
}
.bdBottom-0 {
  border-bottom: 0;
}
.bdTop-1 {
  border-top: 1px var(--bdStyle, solid) var(--bdColor, rgba(227, 228, 229));
  font-size: 0.3rem;
}

/* grid day */

.listSharp {
  border-radius: 0;
}

.listBorder {
  border-radius: 0.25rem;
  border-radius: var(--rdButton, 0.25rem);
  border: 1px solid #e3e4e5;
  border: 1px solid var(--bdColor, rgba(0, 0, 0, 0.125));
}

.list,
.listBorder,
.listFlush {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin: 0;
  list-style: none;
}

.dpFlex,
.flex {
  display: flex !important;
}

.pd-2 {
  padding: 0.5rem !important;
}
.flexColumn {
  flex-direction: column !important;
}

div {
  display: block;
}
.alignRight,
.txtRight {
  text-align: right !important;
}
.txt-5 {
  margin-top: 0.1rem;
  font-size: 0.4rem !important;
}
.txtBold {
  font-weight: 700 !important;
}

.txtGray {
  color: rgba(var(--rgbGray), var(--txtOpacity, 1));
}

.flexFill {
  flex: 1 1 auto !important;
}

.bdDashed {
  border-style: dashed;
}

div.txtCenter.bdStart-1.bdRight-0.bdBottom-1.bdSolid.bdBlack.bdDarker
  > div.pd-2 {
  height: 8px;
}

.cursorPointer {
  cursor: pointer;
}
</style>

// grid-template-columns: repeat(7, 18%); // grid-template-rows: 2% repeat(7,
3%); // }
