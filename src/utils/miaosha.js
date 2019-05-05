function getTime (endTime) {
  var endDate = new Date(endTime)
  var nowDate = new Date()
  var totalSeconds = parseInt((endDate - nowDate) / 1000)
  var modulo = totalSeconds % (60 * 60 * 24)
  var hours = Math.floor(modulo / (60 * 60))
  modulo = modulo % (60 * 60)
  var minutes = Math.floor(modulo / 60)
  var seconds = modulo % 60
  return {
    hour: hours < 10 ? ('0' + hours) : hours,
    minute: minutes < 10 ? ('0' + minutes) : minutes,
    second: seconds < 10 ? ('0' + seconds) : seconds
  }
}
export default getTime
