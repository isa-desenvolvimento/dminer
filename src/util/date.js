import moment from 'moment'

export const dateNowFormart = () => {
  const now = new Date()

  return moment(now).format('DD/MM/YYYY')
}
