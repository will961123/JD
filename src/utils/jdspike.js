function getLeftTime (endTime) {
  var endDate = new Date(endTime)
  // 当前时间
  var nowDate = new Date()
  // 相差的总秒数
  var totalSeconds = parseInt((endDate - nowDate) / 1000)
  // 天数
  //   var days = Math.floor(totalSeconds / (60 * 60 * 24))
  // 取模（余数）
  var modulo = totalSeconds % (60 * 60 * 24)
  // 小时数
  var hours = Math.floor(modulo / (60 * 60))
  modulo = modulo % (60 * 60)
  // 分钟
  var minutes = Math.floor(modulo / 60)
  // 秒
  var seconds = modulo % 60

  return {
    hour: hours < 10 ? ('0' + hours) : hours,
    minute: minutes < 10 ? ('0' + minutes) : minutes,
    second: seconds < 10 ? ('0' + seconds) : seconds
  }
}
export default getLeftTime
