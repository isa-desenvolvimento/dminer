import moment from 'moment'

export const dateNowFormart = () => {
  const now = new Date()

  return moment(now).format('DD/MM/YYYY')
}

export const dateHourFormart = (date) => {
  return moment(date).format('DD/MM/YYYY hh:mm')
}
